/** Browser regression checks against a running production preview.
 * Optional external installation: DAYBOI_PLAYWRIGHT_MODULE=/absolute/path/to/playwright-core
 * node scripts/audit-responsive-pages.mjs http://127.0.0.1:4331
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import {createRequire} from 'node:module';
import {laiThieuVenueCatalog} from '../src/data/laiThieuVenueCatalog.js';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.DAYBOI_PLAYWRIGHT_MODULE||'playwright');
const base=process.argv[2]||'http://127.0.0.1:4331';
const browser=await chromium.launch({headless:true});
const context=await browser.newContext({reducedMotion:'reduce'});
// Maps/analytics do not determine local navigation or layout and may require consent.
const fontCache=new Map();
await context.route('**/*',async route=>{
  const u=new URL(route.request().url());
  if(u.origin===new URL(base).origin)return route.continue();
  if(/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname)){
    try{
      if(!fontCache.has(u.href))fontCache.set(u.href,route.fetch({timeout:8000}).then(async r=>({status:r.status(),headers:r.headers(),body:await r.body()})));
      return await route.fulfill(await fontCache.get(u.href));
    }catch{return route.abort();}
  }
  return route.abort();
});
const hub='/hoc-boi-tphcm/lai-thieu/';
const widths=[360,390,430,768,1024,1280,1440,1920];
const matrix=new Map([[hub,new Set(widths)]]);
for(const v of laiThieuVenueCatalog)matrix.set(v.detailHref,new Set([390,1440]));
for(const slug of ['hoc-boi-nhat-an-lai-thieu','hoc-boi-the-rivana-lai-thieu','hoc-boi-phuong-nam-resort-lai-thieu'])matrix.set(`/${slug}/`,new Set(widths));
const mainRoutes=['/','/en/','/hoc-boi-tphcm/','/hoc-boi-tphcm/binh-hoa/','/khoa-hoc-boi/','/khoa-hoc-boi/tre-em/','/ky-thuat-boi/','/ky-thuat-boi/hoc-boi-ech/','/bang-gia/','/doi-ngu-hlv/','/lien-he/','/tin-tuc/'];
for(const route of mainRoutes)matrix.set(route,new Set([390,768,1440]));
const shots='docs/previews/lai-thieu-polish';
await fs.mkdir(shots,{recursive:true});
const results=[],failures=[],interactions=[];
const check=(ok,label,details)=>{interactions.push({label,ok,...details});if(!ok)failures.push({label,...details});};
for(const [route,sizes] of matrix){
  const page=await context.newPage();
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  for(const width of sizes){
    await page.setViewportSize({width,height:width<701?844:1000});
    try{
      const response=await page.goto(base+route,{waitUntil:'domcontentloaded',timeout:30000});
      await page.evaluate(async()=>{
        await Promise.race([document.fonts.ready,new Promise(resolve=>setTimeout(resolve,4000))]);
        document.querySelectorAll('img[loading="lazy"]').forEach(e=>e.loading='eager');
        await Promise.race([Promise.all([...document.images].map(e=>e.decode().catch(()=>{}))),new Promise(resolve=>setTimeout(resolve,6000))]);
      });
      const data=await page.evaluate(()=>{
        const local=!!document.querySelector('.lt-header');
        const rect=e=>{const r=e.getBoundingClientRect();return {left:r.left,right:r.right,width:r.width};};
        const header=document.querySelector('.lt-header-inner');
        const containers=[...document.querySelectorAll('.sfl-container,.lt-footer-inner,.lt-footer-neighbors,.lt-footer-bottom')].filter(e=>getComputedStyle(e).display!=='contents');
        return {local,title:document.title,h1:document.querySelectorAll('h1').length,overflow:document.documentElement.scrollWidth-innerWidth,
          missingImages:[...document.images].filter(e=>new URL(e.currentSrc||e.src,location.href).origin===location.origin&&(!e.complete||!e.naturalWidth)).map(e=>e.getAttribute('src')),
          ...(local?{alignment:{header:rect(header),offenders:containers.map(rect).filter(r=>Math.abs(r.left-header.getBoundingClientRect().left)>1||Math.abs(r.right-header.getBoundingClientRect().right)>1)},brand:[...document.querySelectorAll('.lt-brand a')].map(e=>e.getAttribute('href')),placeholders:document.querySelectorAll('.sfl-pool-placeholder').length}:{}),
          ...(document.documentElement.scrollWidth>innerWidth?{overflowElements:[...document.querySelectorAll('body *')].filter(e=>{const r=e.getBoundingClientRect();return r.width&&getComputedStyle(e).position!=='absolute'&&(r.left< -1||r.right>innerWidth+1)}).slice(0,8).map(e=>({tag:e.tagName,class:e.className}))}:{})};
      });
      const entry={route,width,status:response.status(),...data,errors:[...errors]};results.push(entry);
      if(entry.status!==200||data.h1!==1||data.overflow>1||data.missingImages.length||data.alignment?.offenders.length||errors.length)failures.push(entry);
      if(route===hub){
        check(data.placeholders===0,'All 20 pool cards have images',{width});
        check(data.brand[0]==='/'&&data.brand[1]===hub,'Brand and local hub links remain separate',{width});
        const query=page.locator('[data-pool-filters] input[name="query"]');
        await query.fill('nhat an');await page.waitForFunction(()=>document.querySelectorAll('[data-pool]:not([hidden])').length===1);
        check(await page.locator('[data-pool]:not([hidden])').getAttribute('id')==='nhat-an','Accent-insensitive pool search',{width});
        await query.fill('zzzz-no-pool');await page.locator('[data-pool-empty]').waitFor({state:'visible'});
        await page.locator('[data-reset-filters]').click();await page.waitForFunction(()=>document.querySelectorAll('[data-pool]:not([hidden])').length===20);
        check(await query.inputValue()==='','No-results reset restores all cards',{width});
        await page.locator('[data-pool-filters] select[name="type"]').selectOption('residential');
        await page.waitForFunction(()=>[...document.querySelectorAll('[data-pool]:not([hidden])')].every(e=>e.dataset.type==='residential'));
        check(await page.locator('[data-pool]:not([hidden])').count()>0,'Residential filter',{width});
        await page.locator('[data-pool-filters] select[name="type"]').selectOption('');
        const target=page.locator('#nhat-an .sfl-pool-card-action');
        await target.click({position:{x:20,y:20}});await page.waitForURL('**/hoc-boi-nhat-an-lai-thieu/');
        check(true,'Pool card is clickable away from the icon',{width});
        await page.goto(base+hub,{waitUntil:'domcontentloaded'});
      }
      if(data.local&&(route===hub||route==='/hoc-boi-nhat-an-lai-thieu/')){
        await page.evaluate(()=>scrollTo(0,0));
        if(width<=1180){
          const trigger=page.locator('.lt-menu-trigger');await trigger.click();
          await page.locator('.lt-drawer[open]').waitFor();
          await page.locator('.lt-mobile-group>summary').first().click();
          const menu=await page.locator('.lt-drawer').evaluate(e=>({width:e.getBoundingClientRect().width,scroll:e.scrollWidth,links:e.querySelectorAll('a[href^="/hoc-boi-"]').length,locked:document.body.style.overflow==='hidden'}));
          check(menu.scroll<=width+1&&menu.locked&&menu.links>=20,'Mobile drawer fits, locks scroll and lists venues',{route,width,menu});
          if(width===390&&route===hub)await page.screenshot({path:`${shots}/mobile-menu-390.png`});
          await page.keyboard.press('Escape');await page.waitForFunction(()=>!document.querySelector('.lt-drawer').open);
          check(await trigger.evaluate(e=>document.activeElement===e),'Drawer returns keyboard focus',{route,width});
        }else{
          await page.locator('[data-desktop-group]>summary').first().click();
          const r=await page.locator('[data-desktop-group][open] .lt-mega').boundingBox();
          check(r.x>=0&&r.x+r.width<=width,'Desktop pool menu fits viewport',{route,width});await page.keyboard.press('Escape');
        }
      }
      if(route==='/hoc-boi-nhat-an-lai-thieu/'&&(width===390||width===1440)){
        const trigger=page.locator('[data-gallery-index="0"]');await trigger.click();await page.locator('.pd-lightbox[open]').waitFor();
        await page.locator('.pd-lightbox[open] [data-gallery-next]').click();
        check(await page.locator('.pd-lightbox[open]').count()===1,'Gallery next keeps one dialog open',{width});
        await page.keyboard.press('Escape');check(await trigger.evaluate(e=>document.activeElement===e),'Gallery restores trigger focus',{width});
        await page.locator('.pd-faq summary').first().click();check(await page.locator('.pd-faq details').first().getAttribute('open')!==null,'FAQ expands',{width});
      }
      if(route==='/'&&width===390){
        await page.locator('#mobile-toggle').click();await page.locator('.mobile-menu.is-open').waitFor();await page.keyboard.press('Escape');
        check(await page.locator('#mobile-toggle').getAttribute('aria-expanded')==='false','Global home mobile menu closes with Escape',{width});
      }
      if((route===hub&&[390,1440,1920].includes(width))||(route==='/hoc-boi-nhat-an-lai-thieu/'&&[390,1440].includes(width))||(mainRoutes.includes(route)&&[390,1440].includes(width))||(route==='/hoc-boi-the-rivana-lai-thieu/'&&width===390)){
        await page.evaluate(async()=>{
          document.querySelectorAll('img[loading="lazy"]').forEach(e=>e.loading='eager');
          await Promise.race([Promise.all([...document.images].map(e=>e.decode().catch(()=>{}))),new Promise(resolve=>setTimeout(resolve,6000))]);
          if(document.activeElement instanceof HTMLElement)document.activeElement.blur();
        });
        await page.evaluate(async()=>{document.activeElement?.blur();document.querySelectorAll('img[loading="lazy"]').forEach(e=>e.loading='eager');await Promise.race([Promise.all([...document.images].map(e=>e.decode().catch(()=>{}))),new Promise(resolve=>setTimeout(resolve,6000))]);});
        await page.evaluate(()=>scrollTo(0,0));await page.screenshot({path:`${shots}/${route==='/'?'home':route.replaceAll('/','').slice(0,65)}-${width}.png`});
        if(route===hub&&width===1920){await page.locator('#phuong-nam-resort').scrollIntoViewIfNeeded();await page.screenshot({path:`${shots}/hub-new-pool-images-1920.png`});}
      }
      console.log(JSON.stringify({route,width,overflow:data.overflow,missing:data.missingImages.length,alignment:data.alignment?.offenders.length||0}));
    }catch(error){failures.push({route,width,error:String(error)});console.error(route,width,String(error));}
  }
  await page.close();
}
await browser.close();
const report={base,checkedAt:new Date().toISOString(),pages:matrix.size,viewports:results.length,interactions,failures,results};
await fs.writeFile('docs/lai-thieu-polish-browser-qa.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({pages:report.pages,viewports:report.viewports,interactions:interactions.length,failures:failures.length}));
if(failures.length)process.exitCode=1;
