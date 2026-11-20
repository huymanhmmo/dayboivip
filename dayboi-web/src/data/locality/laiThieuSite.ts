import {getLaiThieuNavigation,laiThieuHub} from '../laiThieuNavigation';
import {laiThieuPools} from '../laiThieuPools.js';
import type {LocalSiteConfig} from './types';
export function getLaiThieuSite(props:{hotline?:string;phoneHref?:string;zaloHref?:string;courseBaseHref?:string;enrollmentHref?:string}={}):LocalSiteConfig {
  const base=props.courseBaseHref||laiThieuHub;
  const navigation=getLaiThieuNavigation(base);
  return {id:'lai-thieu',name:'Lái Thiêu',parentName:'TP.HCM',hubHref:laiThieuHub,parentHref:'/hoc-boi-tphcm/',lang:'vi',navigation,
    listingHref:laiThieuHub+'#dia-diem',mapsHref:'https://www.google.com/maps/search/?api=1&query=h%E1%BB%93+b%C6%A1i+L%C3%A1i+Thi%C3%AAu',actionHref:props.enrollmentHref||'#dang-ky',actionLabel:'Đăng ký tư vấn',
    venueLinks:laiThieuPools.map(p=>({label:p.name,href:p.detailHref||laiThieuHub+'#'+p.id})),
    courseLinks:navigation.find(i=>i.label==='Lớp học')?.sections?.flatMap(s=>s.links)||[],
    nearby:[{label:'Bình Hòa',href:'/hoc-boi-tphcm/binh-hoa/'},{label:'Thuận An',href:'/hoc-boi-tphcm/thuan-an/'},{label:'Thuận Giao',href:'/hoc-boi-tphcm/thuan-giao/'}],
    ...(props.phoneHref&&props.hotline?{contact:{name:'Thầy Lê Văn Thông',qualification:'Kiện tướng Bơi lội',hotline:props.hotline,phoneHref:props.phoneHref,zaloHref:props.zaloHref}}:{}),
  };
}
