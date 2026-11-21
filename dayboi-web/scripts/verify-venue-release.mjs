/** Compare every new venue route and existing directory representatives with the build. */
import fs from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {venueCatalog} from '../src/data/venues/catalog.js';
const base=process.argv[2],output=process.argv[3]||'docs/venue-release-http.json';
if(!base?.startsWith('https://'))throw new Error('Pass an HTTPS deployment base URL.');
const qa=JSON.parse(await fs.readFile('docs/locality-browser-qa.json','utf8'));
const pages=new Set([...venueCatalog.map(v=>v.detailHref),...qa.results.map(r=>r.route),'/','/en/','/hoc-boi-o-dau/','/khoa-hoc-boi/','/ky-thuat-boi/']);
const paths=new Set([...pages,'/sitemap-index.xml','/sitemap-0.xml']);
for(const route of pages){
  const html=await fs.readFile(path.join('dist',route,'index.html'),'utf8');
  for(const m of html.matchAll(/(?:src|href)="(\/(?:_assets|images)\/[^"#?]+)"/g))paths.add(m[1]);
}
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
const queue=[...paths],results=[];
async function worker(){while(queue.length){const route=queue.shift();try{
  const file=path.join('dist',route,route.endsWith('/')?'index.html':'');
  const local=await fs.readFile(file);const response=await fetch(new URL(route,base),{signal:AbortSignal.timeout(45000)});
  if(response.status===429)throw new Error('HTTP 429: stop this run and respect Retry-After '+response.headers.get('retry-after'));
  const bytes=Buffer.from(await response.arrayBuffer());results.push({path:route,status:response.status,match:hash(bytes)===hash(local),bytes:bytes.length});
}catch(error){results.push({path:route,match:false,error:String(error)});if(String(error).includes('HTTP 429'))queue.length=0;}}}
await Promise.all(Array.from({length:6},worker));
results.sort((a,b)=>a.path.localeCompare(b.path));
const failures=results.filter(r=>r.status!==200||!r.match);
const report={base,checkedAt:new Date().toISOString(),pages:pages.size,paths:results.length,expectedPaths:paths.size,failures,results};
await fs.writeFile(output,JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({pages:pages.size,paths:results.length,expectedPaths:paths.size,failures:failures.length,examples:failures.slice(0,4)},null,2));
if(failures.length||results.length!==paths.size)process.exitCode=1;
