/** Stable venue identity shared by directory cards, detail routes and navigation.
 * Read original records, never commune-centre coordinates or generated coaches.
 */
import {locations} from '../locations.js';
import {locationResearch} from '../locationResearch.js';
import {communePools} from '../communePoolsData.js';
import {laiThieuPools} from '../laiThieuPools.js';
import aliases from './aliases.json' with {type:'json'};
import routes from './routes.json' with {type:'json'};

export const venueKey=(value='')=>String(value).normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[đĐ]/g,'d').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const aliasMap=new Map(aliases.map(a=>[venueKey(a.alias),venueKey(a.canonical)]));
const identity=(name)=>aliasMap.get(venueKey(name))||venueKey(name);
const phone=(s='')=>String(s).replace(/[^\d+]/g,'');
const external=(url='')=>/^https?:\/\//.test(url)&&!/^https?:\/\/(?:www\.)?dayboi\.vip(?:\/|$)/.test(url);
const records=[];
for(const loc of locations){
  for(const category of locationResearch[loc.slug]?.categories||[])for(const raw of category.venues||[])records.push({raw,province:loc,priority:3,sourceFile:'locationResearch',category:category.id,categoryLabel:category.label});
  for(const raw of communePools.filter(p=>p.provinceSlug===loc.slug))records.push({raw,province:loc,priority:2,sourceFile:'communePoolsData'});
  for(const raw of loc.pools||[])records.push({raw,province:loc,priority:1,sourceFile:'locations'});
}
for(const raw of laiThieuPools)records.push({raw,province:locations.find(l=>l.slug==='hoc-boi-tphcm'),priority:4,sourceFile:'laiThieuVenueCatalog'});
const grouped=new Map();
for(const row of records){const key=row.province.slug+':'+identity(row.raw.name);if(!grouped.has(key))grouped.set(key,[]);grouped.get(key).push(row);}
const unique=(items,key)=>items.filter((v,i,all)=>all.findIndex(x=>key(x)===key(v))===i);
export const venueCatalog=[...grouped].map(([key,rows])=>{
  rows.sort((a,b)=>b.priority-a.priority);
  const primary=rows[0],raw={};
  for(const row of [...rows].reverse())for(const [k,v] of Object.entries(row.raw))if(v!==undefined&&v!==null&&v!=='')raw[k]=v;
  const instructors=unique(rows.flatMap(r=>r.raw.instructors||[]).filter(i=>i.phone||external(i.exactSourceUrl)),i=>[venueKey(i.unitName||i.name),venueKey(i.contactPerson),phone(i.phone),i.exactSourceUrl||''].join('|'));
  const operators=unique(rows.map(r=>r.raw.venueContact).filter(Boolean),i=>[venueKey(i.name),phone(i.phone),i.exactSourceUrl||''].join('|'));
  const provinceSlug=primary.province.slug,provinceName=primary.province.name;
  const legacyHref=rows.find(r=>r.raw.detailHref)?.raw.detailHref;
  const published=routes[key];
  if(!legacyHref&&!published)throw new Error('Review identity and add a stable venue route: '+key);
  const slug=published?.slug||legacyHref.split('/').filter(Boolean).at(-1);
  const detailHref=legacyHref||published.detailHref;
  const sourceLinks=unique(rows.flatMap(r=>[r.raw.sourceUrl,...(r.raw.sources||[]).map(s=>s.url),r.raw.venueContact?.exactSourceUrl,...(r.raw.instructors||[]).map(i=>i.exactSourceUrl)]).filter(Boolean),s=>s);
  return {...raw,id:key,slug,provinceSlug,provinceName,detailHref,legacy:!!rows.find(r=>r.raw.detailHref),existingPage:!!legacyHref||published?.existingPage===true,
    provinceHref:`/${provinceSlug}/`,aliases:unique(rows.map(r=>r.raw.name),venueKey),
    operators,instructors,sourceLinks,category:primary.category||raw.category||raw.type||raw.access||'Địa điểm bơi',categoryLabel:primary.categoryLabel,
    sourceRecords:rows.map(r=>({name:r.raw.name,address:r.raw.address,sourceFile:r.sourceFile,targetCommune:r.raw.targetCommune||'',sourceUrl:r.raw.sourceUrl||''})),
    targetCommunes:unique(rows.map(r=>r.raw.targetCommune).filter(Boolean),s=>s),
    // New detail pages need editorial review before search indexing; existing URLs retain their policy.
    indexable:legacyHref?raw.indexable!==false:published.indexable===true,
  };
});
const lookup=new Map();for(const venue of venueCatalog)for(const name of venue.aliases)lookup.set(venue.provinceSlug+':'+venueKey(name),venue);
const names=new Map();for(const venue of venueCatalog)for(const name of venue.aliases){const key=venueKey(name);if(!names.has(key))names.set(key,[]);if(!names.get(key).includes(venue))names.get(key).push(venue);}
export function findVenue(name,provinceSlug){return provinceSlug?lookup.get(provinceSlug+':'+venueKey(name)):(names.get(venueKey(name))?.length===1?names.get(venueKey(name))[0]:undefined);}
export const venueDetailRolloutPages=venueCatalog.filter(v=>!v.legacy);
export const newVenuePages=venueDetailRolloutPages.filter(v=>!v.existingPage);
