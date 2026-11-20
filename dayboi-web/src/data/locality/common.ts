import {viProvinceToEn,getAlternateUrl} from '../../utils/i18nRouting.js';
import type {RegionVenue} from './types';
export const englishNames:Record<string,string>={'Hà Nội':'Hanoi','TP. Hồ Chí Minh':'Ho Chi Minh City','Đà Nẵng':'Da Nang','Hải Phòng':'Hai Phong','Huế':'Hue','Cần Thơ':'Can Tho','Đồng Nai':'Dong Nai','Quảng Ninh':'Quang Ninh','Bắc Ninh':'Bac Ninh','Thái Nguyên':'Thai Nguyen','Phú Thọ':'Phu Tho','Ninh Bình':'Ninh Binh','Hưng Yên':'Hung Yen','Thanh Hóa':'Thanh Hoa','Nghệ An':'Nghe An','Hà Tĩnh':'Ha Tinh','Quảng Ngãi':'Quang Ngai','Khánh Hòa':'Khanh Hoa','Đắk Lắk':'Dak Lak','Lâm Đồng':'Lam Dong','Tây Ninh':'Tay Ninh','Đồng Tháp':'Dong Thap','Vĩnh Long':'Vinh Long','An Giang':'An Giang','Cà Mau':'Ca Mau','Cao Bằng':'Cao Bang','Lai Châu':'Lai Chau','Điện Biên':'Dien Bien','Sơn La':'Son La','Lạng Sơn':'Lang Son','Lào Cai':'Lao Cai','Tuyên Quang':'Tuyen Quang'};
export const EN_INDEXABLE_PROVINCES=new Set(['hoc-boi-ha-noi','hoc-boi-tphcm','hoc-boi-da-nang','hoc-boi-khanh-hoa','hoc-boi-hai-phong','hoc-boi-hue','hoc-boi-can-tho']);
export const fold=(v='')=>String(v).normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').replace(/Đ/g,'D').toLowerCase().replace(/\s+/g,' ').trim();
export const mapsSearch=(q:string)=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
export const localPath=(parent:string,slug:string|undefined,lang:'vi'|'en')=>`${lang==='en'?'/en/'+viProvinceToEn(parent):'/'+parent}/${slug?slug+'/':''}`;
export const languageHref=(path:string,lang:'vi'|'en')=>lang==='en'?getAlternateUrl(path):path;
export const safePhone=(phone='')=>{const first=String(phone).split(/\s*[/;,]\s*/)[0].replace(/[^\d+]/g,'');return /^\+?\d{8,15}$/.test(first)?'tel:'+first:null;};
export const contactPhones=(value='')=>String(value).split(/\s*(?:\/|;|,|\||\n)\s*/).map(label=>({label:label.trim(),href:safePhone(label)})).filter((p,i,all)=>p.href&&all.findIndex(x=>x.href===p.href)===i);
export const cleanCopy=(value='')=>String(value).replace(/cam kết 100%/gi,'hướng tới tiến bộ theo khả năng').replace(/an toàn tuyệt đối/gi,'chú trọng an toàn').replace(/uy tín (?:nhất|số 1)/gi,'có thông tin công khai').replace(/hiện đại số 1/gi,'được giới thiệu trong tài liệu').replace(/hoàn hảo nhất/gi,'phù hợp');
const imageLabels:Record<string,string>={render:'Phối cảnh',plan:'Mặt bằng',exterior:'Ảnh ngoại thất',documented:'Tư liệu tiện ích',illustration:'Ảnh minh họa'};
export function makeVenue(raw:Record<string,any>,index:number,area:string,lang:'vi'|'en',prefix='dia-diem'):RegionVenue {
  const accessContext=[raw.type,raw.access,raw.category,raw.entityType].filter(Boolean).join(' ');
  const residential=/nội khu|cư dân|chung cư|residen/i.test(accessContext);
  const accessType=residential?'residential':/công cộng|dịch vụ|public|ngoài trời|trong nhà/i.test(accessContext)?'public':'unknown';
  const garden=/resort|khách sạn|hotel|khu du lịch/i.test(`${raw.name} ${raw.access||''}`);
  const image=raw.image||`/images/pool-detail/illustrations/${residential?'residential-pool':garden?'garden-pool':'community-pool'}-card.webp`;
  const imageNote=raw.image?(raw.imageNote||imageLabels[raw.imageKind]||''):(lang==='en'?'Illustration':'Ảnh minh họa');
  const instructors=(raw.instructors||[]).filter(i=>i.phone||i.exactSourceUrl&&!/https:\/\/dayboi\.vip\/hoc-boi-[^/]+\/$/.test(i.exactSourceUrl));
  return {id:`${prefix}-${index+1}`,name:raw.name,address:raw.address||'',area:raw.area||raw.matchedCommune?.name||area,category:raw.category||'',access:cleanCopy(raw.access||raw.entityType||raw.type||''),accessType,environment:cleanCopy(raw.environment||''),services:cleanCopy(raw.services||raw.pros||''),detail:cleanCopy(raw.detail||''),missing:cleanCopy(raw.missing||raw.context||''),image,imageAlt:raw.imageAlt||(lang==='en'?'Illustrative swimming pool; not a site survey':'Minh họa không gian bơi; không phải ảnh khảo sát địa điểm'),imageNote,detailHref:raw.detailHref,mapsHref:mapsSearch(`${raw.name}, ${raw.address||area}`),sourceHref:raw.sourceUrl,sourceLabel:raw.sourceLabel,venueContact:raw.venueContact,instructors,searchText:fold(`${raw.name} ${raw.address||''} ${raw.oldAddress||''} ${raw.area||''}`)};
}
export const courseLinks=(lang:'vi'|'en')=>[
  {label:lang==='en'?'Children’s lessons':'Học bơi trẻ em',href:languageHref('/khoa-hoc-boi/tre-em/',lang),icon:'child'},
  {label:lang==='en'?'Adult lessons':'Học bơi người lớn',href:languageHref('/khoa-hoc-boi/nguoi-lon/',lang),icon:'person'},
  {label:lang==='en'?'Private coaching':'Học kèm riêng',href:languageHref('/khoa-hoc-boi/1-kem-1/',lang),icon:'people'},
  {label:lang==='en'?'Confidence in water':'Người sợ nước',href:languageHref('/khoa-hoc-boi/nguoi-so-nuoc/',lang),icon:'drop'},
];
