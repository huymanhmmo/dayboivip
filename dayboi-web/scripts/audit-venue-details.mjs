/** Audit every new venue against source contacts, routes and prior index policy. */
import fs from 'node:fs';
import path from 'node:path';
import {parse} from 'parse5';
import {venueCatalog,venueDetailRolloutPages as newVenuePages} from '../src/data/venues/catalog.js';
const root=path.resolve('dist'),failures=[],pages=[],targets=new Map();
const attr=(n,k)=>n?.attrs?.find(a=>a.name===k)?.value;
const nodesOf=n=>[n,...(n.childNodes||[]).flatMap(nodesOf)];
const text=n=>(n?.value||'')+(n?.childNodes||[]).map(text).join('');
const isClass=(n,c)=>(attr(n,'class')||'').split(/\s+/).includes(c);
const phones=s=>String(s||'').split(/\s*(?:\/|;|,|\||\n)\s*/).map(s=>'tel:'+s.replace(/[^\d+]/g,'')).filter(s=>/^tel:\+?\d{8,15}$/.test(s));
const issue=(venue,message,details)=>failures.push({venue:venue.name,message,...details});
const fileFor=p=>path.join(root,decodeURIComponent(p),p.endsWith('/')?'index.html':'');
const target=url=>{const file=fileFor(url.pathname);if(!fs.existsSync(file))return null;if(!targets.has(file))targets.set(file,new Set([...fs.readFileSync(file,'utf8').matchAll(/\sid="([^"]+)"/g)].map(m=>m[1])));return targets.get(file);};
if(new Set(venueCatalog.map(v=>v.detailHref)).size!==venueCatalog.length)failures.push({message:'Duplicate detail URLs'});
const sitemap=fs.readdirSync(root).filter(f=>/^sitemap-\d+\.xml$/.test(f)).map(f=>fs.readFileSync(path.join(root,f),'utf8')).join('');
let contactCount=0,linkCount=0;
for(const venue of newVenuePages){
  const file=fileFor(venue.detailHref);if(!fs.existsSync(file)){issue(venue,'Missing detail page');continue;}
  const html=fs.readFileSync(file,'utf8'),nodes=nodesOf(parse(html));
  if(!nodes.some(n=>attr(n,'data-directory-detail')==='true'))issue(venue,'Shared template missing');
  const h1=nodes.filter(n=>n.tagName==='h1');if(h1.length!==1||!text(h1[0]).includes(venue.name))issue(venue,'Venue heading mismatch');
  const canonical=attr(nodes.find(n=>n.tagName==='link'&&attr(n,'rel')==='canonical'),'href');if(canonical!=='https://dayboi.vip'+venue.detailHref)issue(venue,'Canonical mismatch');
  const noindex=(attr(nodes.find(n=>n.tagName==='meta'&&attr(n,'name')==='robots'),'content')||'').includes('noindex');
  if(noindex===venue.indexable||sitemap.includes(canonical)!==venue.indexable)issue(venue,'Index/sitemap policy mismatch');
  const brand=nodes.find(n=>isClass(n,'lt-brand-home')),hub=nodes.find(n=>isClass(n,'lt-brand-location'));
  if(attr(brand,'href')!=='/'||!attr(hub,'href')?.startsWith(venue.provinceHref))issue(venue,'Brand/region link mismatch');
  if(nodes.some(n=>isClass(n,'lt-header-phone')||isClass(n,'lt-footer-phone')))issue(venue,'Unexpected shared hotline');
  const ids=nodes.map(n=>attr(n,'id')).filter(Boolean);if(new Set(ids).size!==ids.length)issue(venue,'Duplicate IDs');
  const blocks=nodes.filter(n=>attr(n,'data-directory-contact-block')==='true');
  for(const [role,expected] of [['teacher',venue.instructors],['operator',venue.operators]]){
    const rendered=blocks.filter(n=>attr(n,'data-contact-role')===role);
    if(rendered.length!==expected.length)issue(venue,'Contact count differs',{role,expected:expected.length,actual:rendered.length});
    expected.forEach((contact,i)=>{const block=rendered[i];if(!block)return;const children=nodesOf(block);const heading=children.find(n=>n.tagName==='h4');const name=role==='teacher'?contact.unitName:contact.name;if(text(heading)!==name)issue(venue,'Contact identity changed',{role,name,actual:text(heading)});const actual=children.filter(n=>n.tagName==='a'&&attr(n,'href')?.startsWith('tel:')).map(n=>attr(n,'href'));const expectedPhones=phones(contact.phone);if([...new Set(expectedPhones)].sort().join('|')!==actual.sort().join('|'))issue(venue,'Contact phones differ',{role,name,expectedPhones,actual});if(contact.exactSourceUrl&&!children.some(n=>n.tagName==='a'&&attr(n,'href')===contact.exactSourceUrl))issue(venue,'Contact source missing',{role,name});contactCount+=actual.length;});
  }
  const allowedPhones=new Set([...venue.operators,...venue.instructors].flatMap(c=>phones(c.phone)));
  for(const n of nodes)if(n.tagName==='a'&&attr(n,'href')?.startsWith('tel:')&&!allowedPhones.has(attr(n,'href')))issue(venue,'Phone not in this venue record',{phone:attr(n,'href')});
  for(const ref of new Set(nodes.flatMap(n=>[attr(n,'href'),attr(n,'src')]).filter(v=>v?.startsWith('/')&&!v.startsWith('//')||v?.startsWith('#')))){
    const url=new URL(ref,canonical),ids=target(url);linkCount++;if(!ids)issue(venue,'Missing internal path',{ref});else if(url.hash&&url.pathname.endsWith('/')&&!ids.has(decodeURIComponent(url.hash.slice(1))))issue(venue,'Missing anchor',{ref});
  }
  for(const image of nodes.filter(n=>n.tagName==='img'))if(!attr(image,'alt')||!attr(image,'width')||!attr(image,'height'))issue(venue,'Missing image attributes',{src:attr(image,'src')});
  for(const node of nodes.filter(n=>n.tagName==='script'&&attr(n,'type')==='application/ld+json')){try{const graph=JSON.parse(text(node))['@graph']||[];const place=graph.find(g=>g['@type']==='SportsActivityLocation');if(place&&(place.address.addressRegion!==venue.provinceName||place.telephone||place.geo))issue(venue,'Incorrect venue schema ownership or coordinates');}catch{issue(venue,'Invalid JSON-LD');}}
  if(!fs.readFileSync(fileFor(venue.provinceHref),'utf8').includes(`href="${venue.detailHref}"`))issue(venue,'Province backlink missing');
  pages.push({name:venue.name,path:venue.detailHref,province:venue.provinceName,teachers:venue.instructors.length,operators:venue.operators.length,phones:allowedPhones.size,noindex});
}
let baselineChecked=0;const baselinePath='node_modules/.dayboi-deploy-cli/venue-baseline.json';
if(fs.existsSync(baselinePath)){const raw=JSON.parse(fs.readFileSync(baselinePath,'utf8'));const before=Array.isArray(raw)?raw:Object.entries(raw).map(([file,meta])=>({file,...meta}));for(const b of before){const file=path.join(root,b.file);if(!fs.existsSync(file)){failures.push({message:'Previous route removed',file:b.file});continue;}const html=fs.readFileSync(file,'utf8');if(b.canonical!==html.match(/rel="canonical" href="([^"]+)"/)?.[1]||b.robots!==html.match(/name="robots" content="([^"]+)"/)?.[1])failures.push({message:'Previous canonical/index changed',file:b.file});baselineChecked++;}}
const report={checkedAt:new Date().toISOString(),catalog:venueCatalog.length,detailPages:newVenuePages.length,newPages:newVenuePages.filter(v=>!v.existingPage).length,baselineChecked,contactLinks:contactCount,internalReferences:linkCount,failures,pages};
fs.writeFileSync('docs/venue-detail-integrity.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({...report,pages:pages.length,failures:failures.slice(0,8),failureCount:failures.length},null,2));if(failures.length)process.exitCode=1;
