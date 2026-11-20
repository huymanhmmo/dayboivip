import type {RegionPageData} from './types';
import {safePhone} from './common';
export function makeRegionSchema(page:Omit<RegionPageData,'schema'>){
  return {'@context':'https://schema.org','@graph':[
    {'@type':'CollectionPage','@id':page.canonical+'#page',name:page.title,description:page.description,url:page.canonical,inLanguage:page.lang,mainEntity:{'@id':page.canonical+'#venues'}},
    {'@type':'ItemList','@id':page.canonical+'#venues',numberOfItems:page.venues.length,itemListElement:page.venues.map((v,i)=>({'@type':'ListItem',position:i+1,item:{'@type':'SportsActivityLocation',name:v.name,url:v.detailHref?'https://dayboi.vip'+v.detailHref:page.canonical+'#'+v.id,address:{'@type':'PostalAddress',streetAddress:v.address,addressRegion:page.level==='province'?page.name:page.parentName,addressCountry:'VN'},telephone:safePhone(v.venueContact?.phone||'')?.replace('tel:',''),image:v.image&&!v.imageNote?'https://dayboi.vip'+v.image:undefined,description:v.detail||undefined}}))},
    {'@type':'BreadcrumbList',itemListElement:page.breadcrumbs.map((b,i)=>({'@type':'ListItem',position:i+1,name:b.label,item:b.href?'https://dayboi.vip'+b.href:page.canonical}))},
    {'@type':'FAQPage',mainEntity:page.faqs.map(f=>({'@type':'Question',name:f.question,acceptedAnswer:{'@type':'Answer',text:f.answer}}))},
  ]};
}
