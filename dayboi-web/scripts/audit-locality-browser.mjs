/** Responsive regression against a finished Astro preview. No calls/messages/forms are sent. */
import fs from 'node:fs/promises';
import {createRequire} from 'node:module';
import {locations} from '../src/data/locations.js';
import {getAllCommunePages} from '../src/data/communePages.js';
import {publishedLocationAreas} from '../src/data/locationAreas.js';
import {viProvinceToEn} from '../src/utils/i18nRouting.js';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.DAYBOI_PLAYWRIGHT_MODULE||'playwright');
const base=process.argv[2]||'http://127.0.0.1:4331';
const browser=await chromium.launch({headless:true});
const context=await browser.newContext({reducedMotion:'reduce'});
const cache=new Map();
await context.route('**/*',async route=>{
  const url=new URL(route.request().url());if(url.origin===new URL(base).origin)return route.continue();
  if(/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)){try{if(!cache.has(url.href))cache.set(url.href,route.fetch({timeout:8000}).then(async r=>({status:r.status(),headers:r.headers(),body:await r.body()})));return route.fulfill(await cache.get(url.href));}catch{return route.abort();}}
  return route.abort();
});
const finalPass=process.argv.includes('--final');
const matrix=new Map(),widths=[360,390,430,768,1024,1280,1440,1920];
const add=(route,sizes)=>matrix.set(route,new Set([...(matrix.get(route)||[]),...sizes]));
for(const loc of locations){add(`/${loc.slug}/`,[390,1440]);add(`/en/${viProvinceToEn(loc.slug)}/`,[390,1440]);}
const communes=getAllCommunePages();
const representatives=[communes.find(c=>c.parentSlug==='hoc-boi-ha-noi'&&c.slug==='ba-dinh'),communes.find(c=>c.parentSlug==='hoc-boi-ha-noi'&&!c.hasVenues),communes.find(c=>c.parentSlug==='hoc-boi-tphcm'&&c.slug==='binh-hoa'),communes.filter(c=>c.hasVenues).sort((a,b)=>b.fullName.length-a.fullName.length)[0],communes.filter(c=>!c.hasVenues).sort((a,b)=>b.fullName.length-a.fullName.length)[0]];
for(const c of representatives.filter(Boolean)){add(`/${c.parentSlug}/${c.slug}/`,widths);add(`/en/${viProvinceToEn(c.parentSlug)}/${c.slug}/`,[390,768,1280,1440]);}
for(const loc of ['hoc-boi-ha-noi','hoc-boi-tphcm']){add(`/${loc}/`,widths);add(`/en/${viProvinceToEn(loc)}/`,widths);}
const communeKeys=new Set(communes.map(c=>c.parentSlug+'/'+c.slug));
for(const a of publishedLocationAreas.filter(a=>!communeKeys.has(a.parentSlug+'/'+a.slug)).slice(0,3)){add(a.url,[390,768,1440]);add(`/en/${viProvinceToEn(a.parentSlug)}/${a.slug}/`,[390,1440]);}
add('/hoc-boi-tphcm/lai-thieu/',widths);add('/hoc-boi-nhat-an-lai-thieu/',widths);add('/hoc-boi-the-rivana-lai-thieu/',[390,1440]);
if(finalPass){matrix.clear();for(const route of ['/hoc-boi-ha-noi/','/hoc-boi-tphcm/','/hoc-boi-ha-noi/ba-dinh/','/hoc-boi-an-giang/an-bien/','/en/swimming-lessons-an-giang/an-bien/','/hoc-boi-vinh-long/','/en/swimming-lessons-ha-noi/','/hoc-boi-cao-bang/bao-lam/','/hoc-boi-tphcm/lai-thieu/','/hoc-boi-nhat-an-lai-thieu/','/hoc-boi-the-rivana-lai-thieu/'])add(route,[390,1440]);}
const shots=finalPass?'docs/previews/locality-final':'docs/previews/locality-design';await fs.mkdir(shots,{recursive:true});
const results=[],checks=[],failures=[];
const check=(ok,label,details={})=>{checks.push({ok,label,...details});if(!ok)failures.push({label,...details});};
for(const [route,sizes] of matrix){
  const p=await context.newPage();const errors=[];p.on('pageerror',e=>errors.push(e.message));
  for(const width of sizes){
    const start=Date.now();await p.setViewportSize({width,height:width<701?844:1000});
    try{
      const response=await p.goto(base+route,{waitUntil:'domcontentloaded',timeout:30000});
      await p.evaluate(async()=>{await Promise.race([document.fonts.ready,new Promise(r=>setTimeout(r,4000))]);document.querySelectorAll('img').forEach(e=>e.loading='eager');await Promise.race([Promise.all([...document.images].map(e=>e.decode().catch(()=>{}))),new Promise(r=>setTimeout(r,6000))]);});
      const data=await p.evaluate(()=>{
        const header=document.querySelector('.lt-header-inner').getBoundingClientRect();
        const containers=[...document.querySelectorAll('.sfl-container,.lt-footer-inner,.lt-footer-neighbors,.lt-footer-bottom')].filter(e=>getComputedStyle(e).display!=='contents');
        const bad=containers.filter(e=>{const r=e.getBoundingClientRect();return Math.abs(header.left-r.left)>1||Math.abs(header.right-r.right)>1;}).map(e=>e.className);
        const broken=[...document.images].filter(e=>new URL(e.currentSrc||e.src,location.href).origin===location.origin&&(!e.complete||!e.naturalWidth)).map(e=>e.getAttribute('src'));
        return {title:document.title,h1:document.querySelectorAll('h1').length,overflow:document.documentElement.scrollWidth-innerWidth,badAlignment:bad,brokenImages:broken,phones:[...document.querySelectorAll('[data-directory-contact]')].map(e=>e.getAttribute('href')),brand:document.querySelector('.lt-brand-home').getAttribute('href'),hub:document.querySelector('.lt-brand-location').getAttribute('href')};
      });
      results.push({route,width,status:response.status(),...data,errors:[...errors],elapsedMs:Date.now()-start});
      if(response.status()!==200||data.h1!==1||data.overflow>1||data.badAlignment.length||data.brokenImages.length||errors.length)failures.push({route,width,...data,errors:[...errors]});
      const local=await p.locator('[data-region-directory]').count();
      if(local&&[390,1440].includes(width)){
        check(data.brand===(route.startsWith('/en/')?'/en/':'/')&&data.hub===route,'Brand and region have separate destinations',{route,width});
        check(!await p.locator('.lt-header-phone,.lt-footer-phone').count(),'No default regional hotline',{route,width});
        const first=p.locator('[data-region-venue]').first();
        if(await first.count()){
          if(!await first.locator('.rd-venue-page-link').count()){
            await first.locator('summary').click({position:{x:25,y:25}});await first.locator('details[open]').waitFor();check(true,'Whole card opens contact details away from icon',{route,width});
            const phones=await first.locator('[data-directory-contact]').evaluateAll(nodes=>nodes.map(e=>({href:e.getAttribute('href'),text:e.textContent.trim()})));
            check(phones.every(n=>/^tel:\+?\d{8,15}$/.test(n.href||'')),'Teacher/operator phone links are usable',{route,width,phones:phones.length});
          }
          const input=p.locator('[data-region-filter-form] input');await input.fill('zzzz-no-pool');await p.locator('[data-region-empty]').waitFor({state:'visible'});await p.locator('[data-region-reset]').click();
          const total=await p.locator('[data-region-venue]').count();await p.waitForFunction(n=>document.querySelectorAll('[data-region-venue]:not([hidden])').length===n,total);check(true,'Empty results and reset',{route,width,total});
          const group=p.locator('select[name="group"]');if(await group.count()){await group.selectOption({index:1});const selected=await group.inputValue();check(await p.locator('[data-region-venue]:not([hidden])').evaluateAll((nodes,g)=>nodes.length>0&&nodes.every(e=>e.dataset.group===g),selected),'Area filter matches non-empty group',{route,width});await group.selectOption('');}
          const access=p.locator('select[name="access"]');const expectedResidential=await p.locator('[data-region-venue][data-access="residential"]').count();await access.selectOption('residential');check(await p.locator('[data-region-venue]:not([hidden])').count()===expectedResidential,'Residential filter keeps source classifications',{route,width,expectedResidential});await access.selectOption('');
        }
        const query=p.locator('[data-commune-query]');if(await query.count()){
          const before=await p.locator('[data-commune-link]:not([hidden])').count();const more=p.locator('[data-commune-more]');if(await more.isVisible()){await more.click();check(await p.locator('[data-commune-link]:not([hidden])').count()>before,'Show more communes',{route,width});}
          await query.fill('zzzz-no-commune');await p.locator('[data-commune-empty]').waitFor({state:'visible'});check(true,'Commune search handles no results',{route,width});await query.fill('');
        }
        await p.locator('.rd-faq-items summary').first().click();check(await p.locator('.rd-faq-items details').first().getAttribute('open')!==null,'FAQ opens',{route,width});
      }
      if([390,1280,1440].includes(width)){
        await p.evaluate(()=>scrollTo(0,0));
        if(width<=1180){const trigger=p.locator('.lt-menu-trigger');await trigger.click();await p.locator('.lt-drawer[open]').waitFor();const first=p.locator('.lt-mobile-group>summary').first();if(await first.count())await first.click();const menu=await p.locator('.lt-drawer').evaluate(e=>({width:e.getBoundingClientRect().width,scroll:e.scrollWidth,locked:document.body.style.overflow==='hidden'}));check(menu.scroll<=width+1&&menu.locked,'Mobile drawer fits and locks body',{route,width});await p.keyboard.press('Escape');await p.waitForFunction(()=>!document.querySelector('.lt-drawer').open);check(await trigger.evaluate(e=>document.activeElement===e),'Menu restores focus',{route,width});}
        else{await p.locator('[data-desktop-group]>summary').first().click();const r=await p.locator('[data-desktop-group][open] .lt-mega').boundingBox();check(r.x>=0&&r.x+r.width<=width+1,'Desktop menu fits viewport',{route,width});await p.keyboard.press('Escape');}
      }
      if((['/hoc-boi-ha-noi/','/hoc-boi-tphcm/','/hoc-boi-ha-noi/ba-dinh/','/en/swimming-lessons-ha-noi/','/hoc-boi-tphcm/lai-thieu/','/hoc-boi-nhat-an-lai-thieu/'].includes(route)&&[390,1440,1920].includes(width))||(route.includes(representatives[1]?.slug)&&width===390)){
        await p.evaluate(()=>{document.activeElement?.blur();scrollTo(0,0);});await p.screenshot({path:`${shots}/${route.replaceAll('/','')}-${width}.png`});
        if(route==='/hoc-boi-ha-noi/'&&width===1440){await p.locator('#dia-diem').scrollIntoViewIfNeeded();await p.screenshot({path:`${shots}/province-pools-1440.png`});await p.locator('[data-region-venue] summary').first().click();await p.locator('.rd-contact').first().scrollIntoViewIfNeeded();await p.screenshot({path:`${shots}/named-contacts-1440.png`});}
      }
      console.log(JSON.stringify({route,width,overflow:data.overflow,images:data.brokenImages.length,alignment:data.badAlignment.length,errors:errors.length}));
    }catch(error){failures.push({route,width,error:String(error)});console.error(route,width,String(error));}
  }
  await p.close();
}
await browser.close();const report={base,checkedAt:new Date().toISOString(),pages:matrix.size,viewportCases:results.length,interactionChecks:checks.length,failures,checks,results};
await fs.writeFile(finalPass?'docs/locality-final-browser-qa.json':'docs/locality-browser-qa.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({pages:matrix.size,viewportCases:results.length,interactionChecks:checks.length,failures:failures.length}));if(failures.length)process.exitCode=1;
