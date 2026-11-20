/** Check deployed representative HTML and all assets referenced by those pages against dist. */
import fs from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {laiThieuVenueCatalog} from '../src/data/laiThieuVenueCatalog.js';
const base=process.argv[2],output=process.argv[3]||'docs/locality-release-http.json';
if(!base||!base.startsWith('https://'))throw new Error('Pass the HTTPS deployment base URL.');
const qa=JSON.parse(await fs.readFile('docs/locality-browser-qa.json','utf8'));
const pagePaths=new Set([...qa.results.map(r=>r.route),...laiThieuVenueCatalog.map(v=>v.detailHref),'/','/en/','/hoc-boi-o-dau/','/en/swimming-locations/','/khoa-hoc-boi/','/ky-thuat-boi/','/bang-gia/','/lien-he/']);
const references=new Set(pagePaths);
for(const page of pagePaths){const html=await fs.readFile(path.join('dist',page,'index.html'),'utf8');for(const m of html.matchAll(/<(?:img|script|link|source)\b[^>]*(?:src|href|srcset)="([^" ,]+)"/g)){const ref=m[1];if(ref.startsWith('/')&&!ref.startsWith('//')&&!ref.endsWith('/'))references.add(ref);}}
references.add('/sitemap-index.xml');references.add('/sitemap-0.xml');
const paths=[...references],results=[];
for(let index=0;index<paths.length;index+=8){results.push(...await Promise.all(paths.slice(index,index+8).map(async ref=>{
  try{const response=await fetch(new URL(ref,base),{signal:AbortSignal.timeout(30000)});const actual=Buffer.from(await response.arrayBuffer());const expected=await fs.readFile(path.join('dist',ref,ref.endsWith('/')?'index.html':''));return {path:ref,status:response.status,bytes:actual.length,matchesBuild:actual.equals(expected),sha256:createHash('sha256').update(actual).digest('hex')};}
  catch(error){return {path:ref,error:String(error),matchesBuild:false};}
})));}
const failures=results.filter(r=>r.status!==200||!r.matchesBuild);
await fs.writeFile(output,JSON.stringify({base,checkedAt:new Date().toISOString(),pages:pagePaths.size,paths:results.length,failures,results},null,2)+'\n');
console.log(JSON.stringify({pages:pagePaths.size,paths:results.length,failures:failures.length,examples:failures.slice(0,5)}));if(failures.length)process.exitCode=1;
