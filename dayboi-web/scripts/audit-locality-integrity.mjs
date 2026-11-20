/** Audit rendered local directories against source contacts, links and pre-refactor route policy. */
import fs from 'node:fs';
import path from 'node:path';
import {parse} from 'parse5';
import {locations} from '../src/data/locations.js';
import {getLocationResearch} from '../src/data/locationResearch.js';
import {communePools} from '../src/data/communePoolsData.js';
import {getAllCommunePages} from '../src/data/communePages.js';
import {publishedLocationAreas} from '../src/data/locationAreas.js';
const root=path.resolve('dist'),baselinePath=process.argv[2]||'node_modules/.dayboi-deploy-cli/locality-baseline.json';
const baseline=fs.existsSync(baselinePath)?JSON.parse(fs.readFileSync(baselinePath,'utf8')):null;
const failures=[],incomingAnchorFailures=[],ids=new Map(),reports=[];
const fold=value=>String(value).normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').replace(/Đ/g,'D').toLowerCase().replace(/\s+/g,' ').trim();
const decode=s=>s.replaceAll('&amp;','&').replaceAll('&quot;','"').replaceAll('&#39;',"'");
const attr=(n,k)=>n?.attrs?.find(a=>a.name===k)?.value;
const classes=(n,c)=>(attr(n,'class')||'').split(/\s+/).includes(c);
const nodesOf=n=>[n,...(n.childNodes||[]).flatMap(nodesOf)];
const nodeText=n=>(n?.value||'')+(n?.childNodes||[]).map(nodeText).join('');
const phoneTargets=value=>String(value||'').split(/\s*[/;|,]\s*/).map(s=>'tel:'+s.replace(/[^\d+]/g,'')).filter(s=>/^tel:\+?\d{8,15}$/.test(s));
const fileFor=url=>path.join(root,decodeURIComponent(url.pathname),url.pathname.endsWith('/')?'index.html':'');
const getIds=file=>{if(!ids.has(file)){const html=fs.readFileSync(file,'utf8');ids.set(file,new Set([...html.matchAll(/\sid="([^"]+)"/g)].map(m=>decode(m[1]))));}return ids.get(file);};
const allFiles=[];function walk(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){const f=path.join(dir,e.name);if(e.isDirectory())walk(f);else if(e.name.endsWith('.html'))allFiles.push(f);}}walk(root);
const provinceRaw=new Map(locations.map(l=>[l.slug,[...(getLocationResearch(l.slug)?.categories||[]).flatMap(c=>c.venues),...communePools.filter(v=>v.provinceSlug===l.slug),...(l.pools||[])]]));
const communes=new Map(getAllCommunePages().map(c=>[c.parentSlug+'/'+c.slug,c]));
const areas=new Map(publishedLocationAreas.map(a=>[a.parentSlug+'/'+a.slug,a]));
const regionFiles=new Set();let routeChanges=0,contactLinks=0,contactBlocks=0;
const pathStatus=new Map();
const resolveTarget=target=>{if(pathStatus.has(target))return pathStatus.get(target);let result;try{result=fs.statSync(target).isDirectory()?path.join(target,'index.html'):target;if(!fs.existsSync(result))result=null;}catch{result=null;}pathStatus.set(target,result);return result;};
for(const file of allFiles){
  const relative=path.relative(root,file).replaceAll('\\','/'),html=fs.readFileSync(file,'utf8');
  if(baseline?.[relative]){const canonical=html.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1];const robots=html.match(/<meta\b[^>]*name="robots"[^>]*content="([^"]+)"/)?.[1];const b=baseline[relative];if(canonical!==b.canonical||robots!==b.robots){routeChanges++;failures.push({path:relative,reason:'Route/index policy changed',before:b,canonical,robots});}}
  if(!html.includes('data-region-directory'))continue;
  regionFiles.add(file);const nodes=nodesOf(parse(html)),article=nodes.find(n=>attr(n,'data-region-directory')!==undefined);
  const key=attr(article,'data-region-id'),level=attr(article,'data-level'),lang=relative.startsWith('en/')?'en':'vi';
  const raw=level==='province'?provinceRaw.get(key)||[]:(()=>{const c=communes.get(key);return c?(c.hasVenues?c.directVenues:c.nearbyVenues):areas.get(key)?.category.venues||[];})();
  const contactsByName=new Map();for(const v of raw){const name=fold(v.name);if(!contactsByName.has(name))contactsByName.set(name,[]);contactsByName.get(name).push(v);}
  const pageIssues=[];const anchors=nodes.filter(n=>n.tagName==='a'),images=nodes.filter(n=>n.tagName==='img');
  const pageIds=nodes.map(n=>attr(n,'id')).filter(Boolean);if(pageIds.length!==new Set(pageIds).size)pageIssues.push('Duplicate IDs');
  if(nodes.filter(n=>n.tagName==='h1').length!==1)pageIssues.push('Expected one H1');
  const hub=anchors.find(n=>classes(n,'lt-brand-location')),brand=anchors.find(n=>classes(n,'lt-brand-home'));
  const canonical=attr(nodes.find(n=>n.tagName==='link'&&attr(n,'rel')==='canonical'),'href');
  if(attr(hub,'href')!==new URL(canonical).pathname||attr(brand,'href')!==(lang==='en'?'/en/':'/'))pageIssues.push('Brand/area targets');
  if(nodes.some(n=>classes(n,'lt-header-phone')||classes(n,'lt-footer-phone')))pageIssues.push('Unexpected region-wide hotline');
  for(const image of images)if(!attr(image,'alt')||!attr(image,'width')||!attr(image,'height'))pageIssues.push('Missing image attributes: '+attr(image,'src'));
  for(const ref of new Set(nodes.flatMap(n=>[attr(n,'href'),attr(n,'src')]).filter(v=>v?.startsWith('/')&&!v.startsWith('//')||v?.startsWith('#')))){
    const url=new URL(decode(ref),canonical);const target=resolveTarget(fileFor(url));if(!target)pageIssues.push('Missing path: '+ref);else if(url.hash&&target.endsWith('.html')&&!getIds(target).has(decodeURIComponent(url.hash.slice(1))))pageIssues.push('Missing anchor: '+ref);
  }
  const cards=nodes.filter(n=>attr(n,'data-region-venue')!==undefined);
  for(const card of cards){const cardNodes=nodesOf(card),name=nodeText(cardNodes.find(n=>n.tagName==='h3')).trim(),source=contactsByName.get(fold(name));if(!source?.length){pageIssues.push('Venue missing from source: '+name);continue;}
    if(source.every(v=>v.type==='residential')&&attr(card,'data-access')!=='residential')pageIssues.push('Residential classification lost: '+name);
    const actualContacts=cardNodes.filter(n=>attr(n,'data-contact-role'));
    const candidates=source.map(v=>[v.venueContact,...(v.instructors||[])].filter(Boolean));
    for(const block of actualContacts){contactBlocks++;const blockNodes=nodesOf(block),label=nodeText(blockNodes.find(n=>n.tagName==='h4')).trim(),links=blockNodes.filter(n=>n.tagName==='a'&&attr(n,'href')?.startsWith('tel:'));const role=attr(block,'data-contact-role');
      const expected=candidates.flat().filter(c=>fold(c.unitName||c.name||'')===fold(label));const allowed=new Set(expected.flatMap(c=>phoneTargets(c.phone)));
      for(const link of links){contactLinks++;if(!allowed.has(attr(link,'href'))||attr(link,'data-directory-contact')===undefined)pageIssues.push(`Phone not tied to ${name} / ${label}: ${attr(link,'href')}`);}
      if(!expected.length)pageIssues.push(`Contact name missing from source: ${name} / ${label} (${role})`);
    }
    // At least one source record must have all its real phone contacts represented.
    const actualPhones=new Set(cardNodes.filter(n=>n.tagName==='a').map(n=>attr(n,'href')).filter(h=>h?.startsWith('tel:')));
    if(!candidates.some(group=>group.flatMap(c=>phoneTargets(c.phone)).every(phone=>actualPhones.has(phone))))pageIssues.push('Source phone omitted: '+name);
  }
  if(pageIssues.length)failures.push({path:relative,issues:pageIssues});reports.push({path:relative,level,venues:cards.length,contacts:cards.reduce((n,c)=>n+nodesOf(c).filter(x=>attr(x,'data-contact-role')).length,0)});
  if(reports.length%1000===0)console.log(JSON.stringify({audited:reports.length,failures:failures.length}));
}
// Detect links elsewhere on the site that still reference anchors on migrated directories.
for(const file of allFiles){const html=fs.readFileSync(file,'utf8');for(const m of html.matchAll(/href="([^"#]+#[^"]+)"/g)){if(!m[1].startsWith('/'))continue;const u=new URL(decode(m[1]),'https://dayboi.vip');const target=fileFor(u);if(regionFiles.has(target)&&!getIds(target).has(decodeURIComponent(u.hash.slice(1))))incomingAnchorFailures.push({from:path.relative(root,file).replaceAll('\\','/'),target:m[1]});}}
if(baseline){for(const file of Object.keys(baseline))if(!fs.existsSync(path.join(root,file)))failures.push({path:file,reason:'Baseline path missing'});}
const report={checkedAt:new Date().toISOString(),htmlFiles:allFiles.length,directoryPages:reports.length,routeChanges,contactBlocks,contactLinks,failures,incomingAnchorFailures,reports};
fs.writeFileSync('docs/locality-integrity.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({htmlFiles:allFiles.length,directoryPages:reports.length,routeChanges,contactBlocks,contactLinks,failures:failures.length,incomingAnchorFailures:incomingAnchorFailures.length,examples:[...failures.slice(0,3),...incomingAnchorFailures.slice(0,5)]},null,2));
if(failures.length||incomingAnchorFailures.length)process.exitCode=1;
