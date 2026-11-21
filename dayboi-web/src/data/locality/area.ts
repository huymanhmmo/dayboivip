import {publishedLocationAreas} from '../locationAreas.js';
import {getAllCommunePages,getCommunesForLocation} from '../communePages.js';
import {getCommuneSeoMeta} from '../../utils/geoCommunes.js';
import {locations} from '../locations.js';
import {localPath,englishNames,EN_INDEXABLE_PROVINCES,makeVenue,cleanCopy} from './common';
import {makeRegionSite,globalDirectory} from './navigation';
import {regionFaqs} from './faq';
import {makeRegionSchema} from './schema';
import type {RegionPageData} from './types';
export function areaPaths(lang:'vi'|'en'){
  const communes=getAllCommunePages(),keys=new Set(communes.map(c=>c.parentSlug+'/'+c.slug));
  const toPath=(item:any,isCommune:boolean)=>({params:{location:localPath(item.parentSlug,undefined,lang).split('/').filter(Boolean).at(-1),area:item.slug},props:{...(isCommune?{commune:item}:{area:item}),isCommune}});
  return [...publishedLocationAreas.filter(a=>!keys.has(a.parentSlug+'/'+a.slug)).map(a=>toPath(a,false)),...communes.map(c=>toPath(c,true))];
}
export function buildAreaPage(input:{area?:any;commune?:any;isCommune?:boolean},lang:'vi'|'en'='vi'):RegionPageData {
  const en=lang==='en',isCommune=!!input.isCommune,source=isCommune?input.commune:input.area;
  const parent=locations.find(l=>l.slug===source.parentSlug);
  const parentName=en?(englishNames[source.parentName]||source.parentName):source.parentName;
  const name=en?(isCommune?`${source.name} ${source.type==='xã'?'Commune':source.type==='phường'?'Ward':'Special Zone'}`:source.name):(isCommune?source.fullName:source.name);
  const nearbyOnly=isCommune&&!source.hasVenues;
  const rawVenues=isCommune?(source.hasVenues?source.directVenues:source.nearbyVenues):source.category.venues;
  const venues=rawVenues.map((v,i)=>makeVenue({...v,provinceSlug:source.parentSlug},i,source.parentName,lang));
  const viSeo=isCommune?getCommuneSeoMeta(source,new Date().getFullYear()):null;
  const titleBase=`Học Bơi ${source.seoPlace}: Bể Bơi & Lớp Học`;
  const enTitles=[`Swimming Lessons & Pools in ${source.name}, ${parentName}`,`Swimming Pools & Local Lessons in ${source.name}, ${parentName}`,`Swimming in ${source.name}, ${parentName}: Pools & Lessons`,`Swimming in ${source.name}: Pools, Teachers & Local Guide`];
  const title=en?(enTitles.find(t=>t.length>=45&&t.length<=65)||enTitles[0]):(viSeo?.title||(titleBase.length<38?`${titleBase} Theo Khu Vực`:titleBase.length<45?`${titleBase} Gần Bạn`:titleBase));
  const descBase=`Tìm lớp học bơi, giáo viên và bể bơi tại ${source.seoPlace}. So sánh ${venues.length} địa điểm, cách liên hệ, đối tượng phù hợp và lưu ý cần biết trước khi đăng ký.`;
  const description=en?`Find swimming pools and lesson providers serving ${source.name}, ${parentName}. Compare addresses, named teachers and access conditions before arranging lessons.`:(viSeo?.description||(descBase.length<145?descBase+' Xem trước khi đăng ký.':descBase));
  const previous=isCommune?source.previous||[]:source.nearbyAreas||[];
  const related=isCommune?getCommunesForLocation(source.parentSlug).filter(c=>c.slug!==source.slug).slice(0,9).map(c=>({label:en?c.name:c.fullName,href:localPath(source.parentSlug,c.slug,lang),hasVenues:c.hasVenues,description:en?(c.hasVenues?'Local listings':'Nearby options'):(c.hasVenues?'Có thông tin địa điểm':'Tham khảo khu vực')})):(source.relatedSlugs||[]).map(slug=>publishedLocationAreas.find(a=>a.parentSlug===source.parentSlug&&a.slug===slug)).filter(Boolean).map(a=>({label:a.name,href:localPath(a.parentSlug,a.slug,lang),description:en?'Area guide':'Hướng dẫn địa phương'}));
  const page:Omit<RegionPageData,'site'|'schema'>={lang,level:isCommune?'commune':'area',id:source.parentSlug+'/'+source.slug,name,shortName:source.name,parentName,title,description,
    canonical:'https://dayboi.vip'+localPath(source.parentSlug,source.slug,lang),noindex:isCommune&&(!source.hasVenues||en&&!EN_INDEXABLE_PROVINCES.has(source.parentSlug)),
    alternateUrl:!en&&isCommune&&(!source.hasVenues||!EN_INDEXABLE_PROVINCES.has(source.parentSlug))?'':localPath(source.parentSlug,source.slug,en?'vi':'en'),
    breadcrumbs:[{label:en?'Home':'Trang chủ',href:en?'/en/':'/'},{label:en?'Locations':'Toàn quốc',href:globalDirectory(lang)},{label:parentName,href:localPath(source.parentSlug,undefined,lang)},{label:name}],
    image:parent?.image||source.parentImage||'/images/hero-swimming.webp',eyebrow:en?'YOUR LOCAL SWIMMING GUIDE':'CÙNG BẠN TÌM NƠI HỌC BƠI',
    lead:nearbyOnly?(en?`The current directory has no pool listing within ${source.name}. Explore nearby options and contact the named teachers or operators before choosing where to learn.`:`Dữ liệu hiện có chưa ghi nhận hồ bơi trong địa bàn ${name}. Bạn có thể tham khảo các địa điểm lân cận và trao đổi trực tiếp với giáo viên, đơn vị phụ trách trước khi chọn nơi học.`):(en?`Find pools and swimming lessons serving ${source.name}, ${parentName}. Compare access and contact each listed teacher or operator directly.`:`Khám phá hồ bơi và nơi dạy bơi tại ${name}, ${source.parentName}. Xem địa chỉ, điều kiện sử dụng và liên hệ đúng giáo viên hoặc đơn vị phụ trách từng địa điểm.`),
    reviewedAt:source.reviewedAt||'',venues,nearbyOnly,groups:[],communes:[],related,providers:[],previous,
    localAdvice:cleanCopy(source.localAdvice||source.audienceFocus||''),faqs:regionFaqs(name,venues.length,nearbyOnly,isCommune?previous:[],lang),
  };
  const site=makeRegionSite(page,localPath(source.parentSlug,undefined,lang));
  const result={...page,site};return {...result,schema:makeRegionSchema(result)};
}
