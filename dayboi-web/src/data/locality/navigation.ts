import {courseLinks,languageHref} from './common';
import type {LocalSiteConfig,RegionPageData} from './types';
export function makeRegionSite(page:Omit<RegionPageData,'site'|'schema'>,parentHref:string):LocalSiteConfig {
  const en=page.lang==='en',base=new URL(page.canonical).pathname;
  const venueLinks=page.venues.map(v=>({label:v.name,href:v.detailHref||`${base}#${v.id}`,description:v.address,icon:'swim'}));
  const courses=courseLinks(page.lang);
  const nearby=page.related;
  const areaLinks=page.communes.length?page.communes:nearby;
  return {id:page.id,name:page.name,parentName:page.parentName,hubHref:base,parentHref,lang:page.lang,
    listingHref:`${base}#dia-diem`,mapsHref:`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('hồ bơi '+page.name+' '+page.parentName)}`,
    actionLabel:en?'Find a pool':'Tìm nơi học bơi',actionHref:`${base}#dia-diem`,venueLinks,courseLinks:courses,nearby,
    navigation:[
      {label:en?'Overview':'Tổng quan',href:base,icon:'pin'},
      {label:en?'Pools & contacts':'Hồ bơi & liên hệ',icon:'swim',sections:[{title:page.nearbyOnly?(en?'Nearby listings':'Địa điểm lân cận'):(en?'Local listings':'Địa điểm trong dữ liệu'),links:venueLinks.slice(0,8)}],more:{label:en?'View all pools and teachers':'Xem tất cả hồ và giáo viên',href:`${base}#dia-diem`}},
      ...(areaLinks.length?[{label:page.communes.length?(en?'Wards & communes':'Xã, phường'):(en?'Nearby areas':'Khu vực lân cận'),icon:'building',sections:[{title:en?'Browse the area':'Tra cứu theo địa phương',links:areaLinks.filter(l=>l.hasVenues).concat(areaLinks.filter(l=>!l.hasVenues)).slice(0,8)}],more:{label:en?'Browse all areas':'Xem các khu vực',href:page.communes.length?`${base}#xa-phuong`:`${base}#khu-vuc`}}]:[]),
      {label:en?'Lessons':'Khóa học',icon:'people',sections:[{title:en?'Learning needs':'Theo nhu cầu học',links:courses}]},
      {label:en?'Swimming skills':'Kỹ thuật bơi',href:`${base}#kieu-boi`,icon:'swim'},
      {label:en?'Questions':'Giải đáp',href:`${base}#cau-hoi`,icon:'chat'},
    ],
  };
}
export const globalDirectory=(lang:'vi'|'en')=>languageHref('/hoc-boi-o-dau/',lang);
