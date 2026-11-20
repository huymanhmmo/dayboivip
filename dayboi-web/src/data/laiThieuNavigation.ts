import { laiThieuPools } from './laiThieuPools.js';
export interface LocalNavLink { label: string; href: string; description?: string; icon?: string; }
export interface LocalNavSection { title: string; links: LocalNavLink[]; }
export interface LocalNavItem extends LocalNavLink { sections?: LocalNavSection[]; more?: LocalNavLink; }
export const laiThieuHub = '/hoc-boi-tphcm/lai-thieu/';

/** Navigation for Lai Thieu pool/class pages. Unbuilt venue pages use real hub anchors. */
export function getLaiThieuNavigation(base = '/hoc-boi-nhat-an-lai-thieu/'): LocalNavItem[] {
  const anchor = (id: string) => `${base}#${id}`;
  return [
    {label:'Lái Thiêu',href:laiThieuHub,icon:'pin'},
    {label:'Hồ bơi',href:`${laiThieuHub}#dia-diem`,icon:'swim',sections:[
      {title:'Hồ dịch vụ tại Lái Thiêu',links:laiThieuPools.filter(p=>p.type==='public'&&!p.neighbor).map(p=>({label:p.name,href:p.detailHref,description:p.area,icon:'swim'}))},
      {title:'Hồ nội khu & Vĩnh Phú cũ',links:laiThieuPools.filter(p=>p.type==='residential'&&!p.neighbor).map(p=>({label:p.name,href:p.detailHref,description:'Cần quyền sử dụng hồ',icon:'building'}))},
      {title:'Khu vực lân cận',links:laiThieuPools.filter(p=>p.neighbor).map(p=>({label:p.name,href:p.detailHref,description:p.area,icon:p.type==='residential'?'building':'swim'}))},
    ],more:{label:'Xem tất cả hồ bơi tại Lái Thiêu',href:`${laiThieuHub}#dia-diem`}},
    {label:'Lớp học',href:anchor('khoa-hoc'),icon:'people',sections:[
      {title:'Chọn chương trình phù hợp',links:[
        {label:'Học bơi trẻ em',href:anchor('lop-tre-em'),description:'Làm quen nước, học từ cơ bản',icon:'child'},
        {label:'Học bơi người lớn',href:anchor('lop-nguoi-lon'),description:'Người mới và người sợ nước',icon:'person'},
        {label:'Học kèm riêng 1–1',href:anchor('lop-kem-rieng'),description:'Theo sát từng học viên',icon:'people'},
        {label:'Lớp nhóm nhỏ',href:anchor('lop-nhom-nho'),description:'Gia đình, bạn bè cùng học',icon:'people'},
      ]},
    ],more:{label:'Khám phá các chương trình học',href:anchor('khoa-hoc')}},
    {label:'Kỹ thuật bơi',href:anchor('ky-thuat-boi'),icon:'wave',sections:[
      {title:'Các kiểu bơi',links:[
        {label:'Bơi ếch',href:'/ky-thuat-boi/hoc-boi-ech/',icon:'breaststroke'},
        {label:'Bơi sải',href:'/ky-thuat-boi/hoc-boi-sai/',icon:'swim'},
        {label:'Bơi ngửa',href:'/ky-thuat-boi/hoc-boi-ngua/',icon:'backstroke'},
        {label:'Bơi bướm',href:'/ky-thuat-boi/hoc-boi-buom/',icon:'butterfly'},
      ]},
      {title:'Nền tảng & an toàn',links:[
        {label:'Kỹ năng đứng nước',href:'/ky-thuat-boi/ky-nang-dung-nuoc/',icon:'shield'},
        {label:'Lộ trình học',href:anchor('lo-trinh'),icon:'route'},
      ]},
    ],more:{label:'Xem kỹ thuật bơi trên trang',href:anchor('ky-thuat-boi')}},
    {label:'Học phí',href:anchor('hoc-phi')},
    {label:'Huấn luyện viên',href:anchor('huan-luyen-vien')},
  ];
}
