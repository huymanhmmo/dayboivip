import {locations} from '../locations.js';
import {getLocationResearch} from '../locationResearch.js';
import {getCommunesForLocation} from '../communePages.js';
import {communePools} from '../communePoolsData.js';
import {getPublishedAreaUrl} from '../locationAreas.js';
import {englishNames,localPath,makeVenue,fold} from './common';
import {makeRegionSite,globalDirectory} from './navigation';
import {makeRegionSchema} from './schema';
import {regionFaqs} from './faq';
import type {RegionPageData} from './types';
import {venueCatalog,findVenue} from '../venues/catalog.js';
export const provincePaths=(lang:'vi'|'en')=>locations.map(loc=>({params:{location:localPath(loc.slug,undefined,lang).split('/').filter(Boolean).at(-1)},props:{loc}}));
export function buildProvincePage(loc:any,lang:'vi'|'en'='vi'):RegionPageData {
  const en=lang==='en',name=en?(englishNames[loc.name]||loc.name):loc.name;
  const research=getLocationResearch(loc.slug);
  const categories=(research?.categories?.length?research.categories:[{id:'starter',label:en?'Public listings':'Địa điểm trong dữ liệu',venues:loc.pools||[]}]).map(c=>({...c,venues:[...c.venues]}));
  const known=new Set(categories.flatMap(c=>c.venues.map(v=>fold(v.name))));
  const additional=communePools.filter(v=>{if(v.provinceSlug!==loc.slug||known.has(fold(v.name)))return false;known.add(fold(v.name));return true;});
  if(additional.length)categories.push({id:'additional-local',label:en?'Additional local listings':'Địa điểm địa phương bổ sung',venues:additional});
  const linkedIds=new Set(categories.flatMap(c=>c.venues.map(v=>findVenue(v.name,loc.slug)?.id)).filter(Boolean));
  const unlisted=venueCatalog.filter(v=>v.provinceSlug===loc.slug&&!linkedIds.has(v.id));
  if(unlisted.length)categories.push({id:'additional-catalog',label:en?'More places in the directory':'Các địa điểm khác trong danh bạ',venues:unlisted});
  let index=0;
  const venues=categories.flatMap(c=>c.venues.map(v=>makeVenue({...v,provinceSlug:loc.slug,category:c.id},index++,loc.name,lang,'venue')));
  const communes=getCommunesForLocation(loc.slug).map(c=>({label:en?`${c.name} ${c.type==='xã'?'Commune':c.type==='phường'?'Ward':'Special Zone'}`:c.fullName,href:localPath(loc.slug,c.slug,lang),description:c.previous?.join(', '),hasVenues:c.hasVenues,icon:'pin'}));
  const page:Omit<RegionPageData,'site'|'schema'>={lang,level:'province',id:loc.slug,name,shortName:name,parentName:en?'Vietnam':'Việt Nam',
    title:en?`Swimming Pools & Lesson Providers in ${name} [${new Date().getFullYear()}]`:(research?.providers?`Học Bơi ${loc.name}: Bể Bơi & Lớp Học Theo Khu Vực`:`Học Bơi ${loc.name}: Danh Bạ Bể Bơi & Giáo Viên`),
    description:en?`Find swimming pools, clubs, and instructors in ${name}. Compare locations, public contact channels, access notes, and what to verify before booking a lesson.`:(research?.providers?`Danh sách bể bơi và trung tâm học bơi tại ${loc.name}, phân nhóm theo khu vực. Có đối tượng học, hình thức lớp, tiện ích và hướng dẫn liên hệ trực tiếp.`:`Tra cứu bể bơi, câu lạc bộ và giáo viên dạy bơi tại ${loc.name}. Người học chủ động kiểm tra và liên hệ trực tiếp với từng cơ sở.`),
    canonical:'https://dayboi.vip'+localPath(loc.slug,undefined,lang),noindex:false,alternateUrl:localPath(loc.slug,undefined,en?'vi':'en'),
    breadcrumbs:[{label:en?'Home':'Trang chủ',href:en?'/en/':'/'},{label:en?'Locations':'Toàn quốc',href:globalDirectory(lang)},{label:name}],image:loc.image,
    eyebrow:en?'SWIMMING, CLOSER TO HOME':'HỌC BƠI GẦN BẠN',
    lead:en?`Explore pools and swimming lesson providers in ${name}. Compare locations and contact the teacher or operator attached to each listing to find the right place to start.`:`Tìm hồ bơi và lớp học phù hợp tại ${loc.name}. So sánh địa điểm, điều kiện sử dụng và liên hệ đúng giáo viên hoặc đơn vị phụ trách từng nơi.`,
    reviewedAt:research?.reviewedAt||'',venues,nearbyOnly:false,
    groups:categories.map(c=>({id:c.id,label:c.label,description:c.description,href:(()=>{const url=getPublishedAreaUrl(loc.slug,c.id);return url?(en?localPath(loc.slug,url.split('/').filter(Boolean).at(-1),lang):url):undefined;})()})),
    communes,related:[],providers:research?.providers||[],previous:[],localAdvice:research?.groupingNote||'',faqs:regionFaqs(name,venues.length,false,[],lang),
  };
  const site=makeRegionSite(page,globalDirectory(lang));
  const result={...page,site};return {...result,schema:makeRegionSchema(result)};
}
