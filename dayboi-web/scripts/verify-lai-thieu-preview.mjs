/** Compare a preview's local pages/assets with the finished dist output. */
import fs from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {laiThieuVenueCatalog} from '../src/data/laiThieuVenueCatalog.js';

const base=process.argv[2];
if(!base||!/^https:\/\//.test(base))throw new Error('Pass the HTTPS preview base URL.');
const pages=['/hoc-boi-tphcm/lai-thieu/',...laiThieuVenueCatalog.map(v=>v.detailHref)];
const refs=new Set(pages);
for(const page of pages){
  const html=await fs.readFile(path.join('dist',page,'index.html'),'utf8');
  for(const image of html.matchAll(/<img[^>]*src="([^"]+)"/g)){if(image[1].startsWith('/'))refs.add(image[1]);}
}
const results=[];
const pending=[...refs];
for(let i=0;i<pending.length;i+=6){
  results.push(...await Promise.all(pending.slice(i,i+6).map(async ref=>{
    const response=await fetch(new URL(ref,base));
    const actual=Buffer.from(await response.arrayBuffer());
    const expected=await fs.readFile(path.join('dist',ref,ref.endsWith('/')?'index.html':''));
    return {path:ref,status:response.status,bytes:actual.length,matchesBuild:actual.equals(expected),sha256:createHash('sha256').update(actual).digest('hex')};
  })));
}
const report={base,checkedAt:new Date().toISOString(),paths:results.length,failures:results.filter(r=>r.status!==200||!r.matchesBuild),results};
await fs.writeFile('docs/lai-thieu-cluster-http.json',JSON.stringify(report,null,2)+'\n');
console.log({verified:results.length,failures:report.failures.length});
if(report.failures.length)process.exitCode=1;
