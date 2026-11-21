/** Responsive checks based on the gallery/menu/contact flows observed in Chromium. */
import fs from 'node:fs/promises';
import {createRequire} from 'node:module';
import {venueDetailRolloutPages as newVenuePages} from '../src/data/venues/catalog.js';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.DAYBOI_PLAYWRIGHT_MODULE||'playwright');
const base=process.argv[2]||'http://127.0.0.1:4331',production=process.argv.includes('--production');
await fetch(new URL('/hoc-boi-nhat-an-lai-thieu/',base),{signal:AbortSignal.timeout(8000)}).then(r=>{if(!r.ok)throw new Error('Preview unavailable: '+r.status);});
const widths=[360,390,430,768,1024,1280,1440,1920],matrix=new Map();
const add=(route,sizes)=>matrix.set(route,[...new Set([...(matrix.get(route)||[]),...sizes])]);
const selected=[newVenuePages[0],newVenuePages.find(v=>v.targetCommunes.length&&/nội khu|cư dân/i.test(v.access||'')),newVenuePages.find(v=>!v.instructors.length),[...newVenuePages].sort((a,b)=>b.name.length-a.name.length)[0],[...newVenuePages].sort((a,b)=>b.instructors.length-a.instructors.length)[0],newVenuePages.find(v=>v.operators.length>1),newVenuePages.find(v=>v.slug.includes('yersin-trung-tam')),newVenuePages.find(v=>v.existingPage)].filter(Boolean);
if(production||process.argv.includes('--final')){for(const v of selected)add(v.detailHref,production?[390,1440]:widths);}
else{for(const province of new Set(newVenuePages.map(v=>v.provinceSlug)))add(newVenuePages.find(v=>v.provinceSlug===province).detailHref,[390,1440]);for(const v of selected)add(v.detailHref,widths);}
for(const route of ['/hoc-boi-nhat-an-lai-thieu/','/hoc-boi-the-rivana-lai-thieu/','/hoc-boi-tang-bat-ho/'])add(route,production?[390,1440]:widths);
const browser=await chromium.launch({headless:true}),context=await browser.newContext({reducedMotion:'reduce'});
// Third-party analytics are irrelevant to the page's own interactions.
await context.route('**/*',route=>/googletagmanager|google-analytics/.test(route.request().url())?route.abort():route.continue());
const failures=[],checks=[],results=[];const check=(ok,label,route,width,details)=>{checks.push({ok,label,route,width});if(!ok){failures.push({label,route,width,details});console.log(JSON.stringify({failure:label,route,width,details}));}};
const shotDir='docs/previews/venue-details';await fs.mkdir(shotDir,{recursive:true});
const sharp=require('sharp');
for(const [route,sizes] of matrix){
  const p=await context.newPage(),errors=[];p.on('pageerror',e=>errors.push(e.message));
  for(const width of sizes){try{
    await p.setViewportSize({width,height:width<701?844:1000});const response=await p.goto(base+route,{waitUntil:'domcontentloaded'});
    await p.evaluate(async()=>{await Promise.race([document.fonts.ready,new Promise(r=>setTimeout(r,4000))]);document.querySelectorAll('img').forEach(i=>i.loading='eager');await Promise.race([Promise.all([...document.images].map(i=>i.decode().catch(()=>{}))),new Promise(r=>setTimeout(r,6000))]);});
    const layout=await p.evaluate(()=>({overflow:document.documentElement.scrollWidth-innerWidth,broken:[...document.images].filter(i=>i.src.startsWith(location.origin)&&(!i.complete||i.naturalWidth===0)).map(i=>i.src),headers:document.querySelectorAll('h1').length,emptyLinks:[...document.querySelectorAll('a')].filter(a=>!a.getAttribute('href')||a.getAttribute('href')==='#').length}));
    check(response.status()===200,'HTTP 200',route,width,response.status());check(layout.overflow<=1,'No horizontal overflow',route,width,layout.overflow);check(!layout.broken.length,'Images loaded',route,width,layout.broken);check(layout.headers===1&&!layout.emptyLinks,'Heading and link integrity',route,width,layout);
    if(width===390){
      const trigger=p.locator('.lt-menu-trigger');await trigger.click();check(await p.locator('#lt-mobile-menu').evaluate(d=>d.open),'Mobile menu opens',route,width);await p.keyboard.press('Escape');await p.waitForFunction(()=>!document.querySelector('#lt-mobile-menu').open);check(await trigger.evaluate(e=>e===document.activeElement),'Escape restores menu focus',route,width);
      const gallery=p.locator('[data-gallery-index]').first();await gallery.click();check(await p.locator('.pd-lightbox[open]').count()===1,'Gallery opens',route,width);await p.keyboard.press('ArrowRight');check(await p.locator('.pd-lightbox[open]').count()===1,'Gallery next keeps one dialog',route,width);await p.keyboard.press('Escape');await p.waitForFunction(()=>!document.querySelector('.pd-lightbox[open]'));check(await gallery.evaluate(e=>e===document.activeElement),'Gallery restores focus',route,width);
      await p.locator('.pd-faq summary').first().click();check(await p.locator('.pd-faq details').first().getAttribute('open')!==null,'FAQ opens',route,width);
      if(route.startsWith('/dia-diem-hoc-boi/')){await p.locator('.pd-hero .pd-actions a').first().click();await p.waitForURL('**/#lien-he-dia-diem');check(await p.locator('#lien-he-dia-diem').isVisible(),'Hero reaches venue contacts',route,width);check(await p.locator('.lt-header a[href^="tel:"],.lt-footer a[href^="tel:"]').count()===0,'No default regional hotline',route,width);}
    }
    check(!errors.length,'No script errors',route,width,errors);
    if(selected.slice(0,3).some(v=>v.detailHref===route)&&[390,1440].includes(width)){
      await p.evaluate(()=>scrollTo(0,0));const image=await p.screenshot({fullPage:true});await sharp(image).webp({quality:78}).toFile(`${shotDir}/${production?'production-':''}${route.split('/').filter(Boolean).at(-1)}-${width}.webp`);
    }
    results.push({route,width,...layout});
    if(results.length%20===0)console.log(JSON.stringify({completed:results.length,failures:failures.length}));
  }catch(e){failures.push({route,width,error:String(e)});}}
  await p.close();
}
// Verify full-card links from both language directories reach the matching VI venue.
for(const route of ['/hoc-boi-ha-noi/','/hoc-boi-tphcm/','/en/swimming-lessons-ha-noi/','/hoc-boi-ha-noi/ba-dinh/']){
  const p=await context.newPage();await p.goto(base+route);const card=p.locator('.rd-venue-main-link').first(),href=await card.getAttribute('href');await card.locator('img').click();await p.waitForURL(base+href);check(await p.locator('h1').count()===1,'Whole card opens detail',route,1280,href);await p.close();
}
await browser.close();const report={base,checkedAt:new Date().toISOString(),pages:matrix.size,viewportCases:results.length,interactionChecks:checks.length,failures,checks,results};await fs.writeFile(`docs/venue-browser${production?'-production':''}.json`,JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({pages:matrix.size,viewportCases:results.length,interactionChecks:checks.length,failures},null,2));if(failures.length)process.exitCode=1;
