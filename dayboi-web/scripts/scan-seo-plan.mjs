import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const distRoot = 'dist';
const collectHtmlFiles = (dir) => readdirSync(dir).flatMap(entry => {
  const p = join(dir, entry);
  return statSync(p).isDirectory() ? collectHtmlFiles(p) : (entry.endsWith('.html') ? [p] : []);
});

const files = collectHtmlFiles(distRoot);
const pageData = [];
const inLinks = new Map();
const redirects = [];

for (const f of files) {
  const html = readFileSync(f, 'utf8');
  let url = '/' + relative(distRoot, f).split(sep).join('/');
  if (url === '/index.html') url = '/';
  else if (url.endsWith('/index.html')) url = url.slice(0, -'index.html'.length);

  const isRedirect = /http-equiv=["']refresh["']/i.test(html);
  if (isRedirect) {
    const target = (html.match(/url=([^"'>]+)/i) || [])[1] || '';
    redirects.push({ from: url, to: target });
  }

  const title = (html.match(/<title>(.*?)<\/title>/i) || [])[1] || '';
  const desc = (html.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i) || [])[1] || '';
  const canonical = (html.match(/<link\s+rel=["']canonical["']\s+href=["'](.*?)["']/i) || [])[1] || '';
  const robots = (html.match(/<meta\s+name=["']robots["']\s+content=["'](.*?)["']/i) || [])[1] || '';
  
  const h1s = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  const h2s = [...html.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  const h3s = [...html.matchAll(/<h3\b[^>]*>([\s\S]*?)<\/h3>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  
  const rawSchemas = [...html.matchAll(/<script type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi)].map(m => m[1]);
  const schemaTypes = [];
  rawSchemas.forEach(s => {
    try {
      const parsed = JSON.parse(s);
      if (Array.isArray(parsed)) {
        parsed.forEach(p => p['@type'] && schemaTypes.push(p['@type']));
      } else if (parsed['@graph']) {
        parsed['@graph'].forEach(p => p['@type'] && schemaTypes.push(p['@type']));
      } else if (parsed['@type']) {
        schemaTypes.push(parsed['@type']);
      }
    } catch(e) {}
  });

  const rawLinks = [...html.matchAll(/href=["'](\/[^#?"'>]*)["']/gi)].map(m => m[1]);
  const isIndexable = !isRedirect && !/noindex/i.test(robots) && url !== '/404.html' && !url.includes('google');

  pageData.push({
    url,
    title,
    desc,
    canonical,
    isRedirect,
    isIndexable,
    h1Count: h1s.length,
    h1s,
    h2Count: h2s.length,
    h3Count: h3s.length,
    schemaTypes: [...new Set(schemaTypes)],
    rawLinks,
  });

  inLinks.set(url, new Set());
}

// Check sitemap against redirects
const sitemapContent = readFileSync('dist/sitemap-0.xml', 'utf8');
const sitemapUrls = [...sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);

console.log('=== REDIRECTS CHECK ===');
console.log('Total redirects generated in dist:', redirects.length);
const redirectsInSitemap = redirects.filter(r => sitemapUrls.includes('https://dayboi.vip' + r.from));
console.log('Redirects found inside sitemap-0.xml:', redirectsInSitemap);

console.log('\nSample redirects:');
redirects.slice(0, 10).forEach(r => console.log(`  ${r.from} -> ${r.to}`));

// Check hreflang
let hreflangErrors = 0;
for (const p of pageData.filter(x => x.isIndexable)) {
  const html = readFileSync(join(distRoot, p.url === '/' ? 'index.html' : (p.url.slice(1) + '/index.html')), 'utf8');
  const hreflangs = [...html.matchAll(/<link\s+rel=["']alternate["']\s+hreflang=["'](.*?)["']\s+href=["'](.*?)["']/gi)].map(m => ({ lang: m[1], href: m[2] }));
  if (hreflangs.length > 0) {
    // Check self reference
    const selfLang = p.url.startsWith('/en') ? 'en' : 'vi';
    const selfTag = hreflangs.find(h => h.lang === selfLang);
    if (!selfTag) {
      hreflangErrors++;
      console.log(`Missing self hreflang on ${p.url}`);
    }
  }
}
console.log(`\nHreflang self-reference check completed: ${hreflangErrors} errors.`);

// Check OpenGraph & Twitter tags on indexables
let missingOg = 0;
for (const p of pageData.filter(x => x.isIndexable)) {
  const html = readFileSync(join(distRoot, p.url === '/' ? 'index.html' : (p.url.slice(1) + '/index.html')), 'utf8');
  if (!html.includes('og:title') || !html.includes('og:image') || !html.includes('twitter:card')) {
    missingOg++;
  }
}
console.log(`OpenGraph / Twitter card check: ${missingOg} pages missing OG tags.`);
