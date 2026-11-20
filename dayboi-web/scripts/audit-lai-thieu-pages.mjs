/** Read-only structural audit for the local pool template and its hub. Run after build. */
import fs from 'node:fs/promises';
import path from 'node:path';
import { parse } from 'parse5';
import { laiThieuVenueCatalog, futureLaiThieuProjects } from '../src/data/laiThieuVenueCatalog.js';

const dist=path.resolve('dist');
const hub='/hoc-boi-tphcm/lai-thieu/';
const canonicalBase='https://dayboi.vip';
const attr=(n,k)=>n?.attrs?.find(a=>a.name===k)?.value;
const classHas=(n,c)=>(attr(n,'class')||'').split(/\s+/).includes(c);
const cache=new Map();
const fail=[];
async function getPage(urlPath){
  const file=path.join(dist,decodeURIComponent(urlPath),urlPath.endsWith('/')?'index.html':'');
  if(cache.has(file))return cache.get(file);
  const html=await fs.readFile(file,'utf8');const nodes=[];
  function visit(n){nodes.push(n);for(const c of n.childNodes||[])visit(c);}visit(parse(html));
  const result={html,nodes,ids:new Set(nodes.map(n=>attr(n,'id')).filter(Boolean))};cache.set(file,result);return result;
}
const sitemap=(await Promise.all((await fs.readdir(dist)).filter(n=>/^sitemap.*\.xml$/.test(n)).map(n=>fs.readFile(path.join(dist,n),'utf8')))).join('\n');
const reports=[];
for(const urlPath of [hub,...laiThieuVenueCatalog.map(v=>v.detailHref)]){
  const page=await getPage(urlPath);const {html,nodes,ids}=page;
  const anchors=nodes.filter(n=>n.tagName==='a');
  const isHub=urlPath===hub;
  const venue=laiThieuVenueCatalog.find(v=>v.detailHref===urlPath);
  const canonical=attr(nodes.find(n=>n.tagName==='link'&&attr(n,'rel')==='canonical'),'href');
  const robots=attr(nodes.find(n=>n.tagName==='meta'&&attr(n,'name')==='robots'),'content');
  const h1=nodes.filter(n=>n.tagName==='h1').length;
  const broken=[];
  const references=[...new Set(nodes.flatMap(n=>[attr(n,'href'),attr(n,'src')]).filter(h=>h?.startsWith('/')||h?.startsWith('#')))];
  for(const ref of references){
    const url=new URL(ref,canonicalBase+urlPath);
    try{
      let file=path.join(dist,decodeURIComponent(url.pathname));const st=await fs.stat(file);
      if(st.isDirectory())file=path.join(file,'index.html');
      await fs.access(file);
      if(url.hash&&file.endsWith('.html')){const target=await getPage(url.pathname);if(!target.ids.has(decodeURIComponent(url.hash.slice(1))))broken.push(ref);}
    }catch{broken.push(ref);}
  }
  const allIds=nodes.map(n=>attr(n,'id')).filter(Boolean);
  const duplicateIds=allIds.filter((id,i)=>allIds.indexOf(id)!==i);
  const missingImageAttributes=nodes.filter(n=>n.tagName==='img'&&(!attr(n,'alt')||!attr(n,'width')||!attr(n,'height'))).map(n=>attr(n,'src'));
  const home=anchors.find(n=>classHas(n,'lt-brand-home'));
  const area=anchors.find(n=>classHas(n,'lt-brand-location'));
  const json=nodes.filter(n=>n.tagName==='script'&&attr(n,'type')==='application/ld+json').map(n=>JSON.parse((n.childNodes||[]).map(c=>c.value||'').join('')));
  const schemaNodes=json.flatMap(n=>n['@graph']||[n]);
  const wrongClaims=schemaNodes.some(n=>n.aggregateRating||n.review||n.geo||n.openingHours||n.priceRange);
  const indexable=!robots?.includes('noindex');
  const report={path:urlPath,h1,canonical,robots,indexable,inSitemap:sitemap.includes(`<loc>${canonicalBase+urlPath}</loc>`),references:references.length,broken,duplicateIds,missingImageAttributes,brandHome:attr(home,'href'),brandArea:attr(area,'href'),header:!!nodes.find(n=>classHas(n,'lt-header')),footer:!!nodes.find(n=>classHas(n,'lt-footer')),phoneLinks:anchors.filter(n=>attr(n,'href')==='tel:0986456678').length,zaloLinks:anchors.filter(n=>attr(n,'href')==='https://zalo.me/0986456678').length,courseAnchors:['lop-tre-em','lop-nguoi-lon','lop-kem-rieng','lop-nhom-nho'].every(id=>ids.has(id)),removedCaption:!html.includes('Tư liệu hồ sơ HLV · Swim For Life'),unsupportedSchemaClaims:wrongClaims};
  if(isHub){report.poolCards=nodes.filter(n=>classHas(n,'sfl-pool-card')).length;report.fullCardTargets=nodes.filter(n=>classHas(n,'sfl-pool-card-action')).length;report.nhatAnImage=html.includes('/images/pool-detail/outdoor-pool-illustration.webp');}
  if(h1!==1||canonical!==canonicalBase+urlPath||broken.length||duplicateIds.length||missingImageAttributes.length||report.brandHome!=='/'||report.brandArea!==hub||!report.header||!report.footer||!report.phoneLinks||!report.zaloLinks||!report.courseAnchors||!report.removedCaption||wrongClaims)fail.push(urlPath);
  if(!isHub&&venue&&!venue.indexable&&(indexable||report.inSitemap))fail.push(urlPath+' draft index policy');
  reports.push(report);
  if(isHub&&(report.poolCards!==laiThieuVenueCatalog.length||report.fullCardTargets!==laiThieuVenueCatalog.length||!report.nhatAnImage))fail.push(urlPath+' — hub card targets');
}
const result={checkedAt:new Date().toISOString(),pages:reports.length,inventory:laiThieuVenueCatalog.length,futureProjectsExcluded:futureLaiThieuProjects.length,failures:fail,reports};
await fs.writeFile('docs/lai-thieu-cluster-integrity.json',JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify({pages:result.pages,poolCards:reports[0].poolCards,draftPages:reports.filter(p=>!p.indexable).length,failures:fail},null,2));
if(fail.length)process.exitCode=1;
