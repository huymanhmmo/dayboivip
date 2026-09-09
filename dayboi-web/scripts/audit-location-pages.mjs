import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { publishedLocationAreas } from '../src/data/locationAreas.js';

const decodeHtml = (value) => value
  .replaceAll('&amp;', '&')
  .replaceAll('&quot;', '"')
  .replaceAll('&#39;', "'");

const distRoot = 'dist';

const collectHtmlFiles = (directory) => readdirSync(directory).flatMap((entry) => {
  const path = join(directory, entry);
  return statSync(path).isDirectory() ? collectHtmlFiles(path) : (entry.endsWith('.html') ? [path] : []);
});

const outputUrl = (file) => {
  const path = relative(distRoot, file).split(sep).join('/');
  if (path === 'index.html') return '/';
  if (path.endsWith('/index.html')) return `/${path.slice(0, -'index.html'.length)}`;
  return `/${path}`;
};

const internalTargetExists = (href, sourceFile) => {
  const pathname = new URL(href, `https://dayboi.vip${outputUrl(sourceFile)}`).pathname;
  const relativeTarget = pathname.replace(/^\/+/, '');
  if (!relativeTarget) return existsSync(join(distRoot, 'index.html'));
  if (pathname.endsWith('/')) return existsSync(join(distRoot, relativeTarget, 'index.html'));
  return existsSync(join(distRoot, relativeTarget)) || existsSync(join(distRoot, relativeTarget, 'index.html'));
};

const isSpecificExternalSource = (sourceUrl) => {
  const url = new URL(sourceUrl);
  return url.protocol === 'https:' && url.pathname !== '/' && url.hostname !== 'dayboi.vip';
};

assert(publishedLocationAreas.length > 0, 'Không có landing page địa phương nào qua cổng chất lượng.');
assert.equal(
  new Set(publishedLocationAreas.map((area) => area.url)).size,
  publishedLocationAreas.length,
  'Có URL landing page địa phương bị trùng.',
);

for (const area of publishedLocationAreas) {
  assert(area.category.venues.length >= 2, `${area.name}: cần ít nhất 2 địa điểm.`);

  for (const venue of area.category.venues) {
    assert(venue.venueContact, `${area.name} / ${venue.name}: thiếu liên hệ ban quản lý.`);
    assert(
      isSpecificExternalSource(venue.venueContact.exactSourceUrl),
      `${area.name} / ${venue.name}: nguồn bể bơi phải là URL chi tiết bên ngoài.`,
    );
    assert(venue.instructors?.length > 0, `${area.name} / ${venue.name}: thiếu đầu mối lớp học.`);
    for (const instructor of venue.instructors) {
      assert(
        isSpecificExternalSource(instructor.exactSourceUrl),
        `${area.name} / ${venue.name} / ${instructor.unitName}: nguồn lớp học không đạt chuẩn.`,
      );
    }
  }

  const outputFile = join('dist', ...area.url.split('/').filter(Boolean), 'index.html');
  assert(existsSync(outputFile), `${area.name}: chưa có HTML build tại ${outputFile}.`);
  const html = readFileSync(outputFile, 'utf8');
  const title = decodeHtml(html.match(/<title>(.*?)<\/title>/)?.[1] || '');
  const description = decodeHtml(html.match(/<meta name="description" content="(.*?)"/)?.[1] || '');
  const canonical = html.match(/<link rel="canonical" href="(.*?)"/)?.[1];
  const h1Count = (html.match(/<h1(?:\s|>)/g) || []).length;
  const schemaBlocks = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)]
    .map((match) => JSON.parse(match[1]));

  assert(title.length >= 45 && title.length <= 60, `${area.name}: title dài ${title.length} ký tự.`);
  assert(description.length >= 145 && description.length <= 165, `${area.name}: description dài ${description.length} ký tự.`);
  assert.equal(canonical, `https://dayboi.vip${area.url}`, `${area.name}: canonical không khớp.`);
  assert.equal(h1Count, 1, `${area.name}: cần đúng 1 H1, hiện có ${h1Count}.`);
  assert(schemaBlocks.some((block) => block['@graph']), `${area.name}: thiếu schema CollectionPage/ItemList/FAQPage.`);
}

const sitemapPath = join(distRoot, 'sitemap-0.xml');
assert(existsSync(sitemapPath), 'Thiếu sitemap-0.xml sau build.');
const sitemap = readFileSync(sitemapPath, 'utf8');
for (const area of publishedLocationAreas) {
  assert(sitemap.includes(`https://dayboi.vip${area.url}`), `${area.name}: URL chưa có trong sitemap.`);
}

const htmlFiles = collectHtmlFiles(distRoot);
const brokenInternalLinks = [];
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const href = decodeHtml(match[1]);
    if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) continue;
    if (!href.startsWith('/') || href.startsWith('//')) continue;
    if (!internalTargetExists(href, file)) brokenInternalLinks.push(`${outputUrl(file)} → ${href}`);
  }
}

assert.equal(
  brokenInternalLinks.length,
  0,
  `Có liên kết nội bộ hỏng:\n${[...new Set(brokenInternalLinks)].join('\n')}`,
);

console.log(`✓ ${publishedLocationAreas.length} landing page địa phương đạt cổng dữ liệu và SEO output.`);
console.log(`✓ ${htmlFiles.length} HTML không có liên kết nội bộ hỏng; toàn bộ landing page đã có trong sitemap.`);
