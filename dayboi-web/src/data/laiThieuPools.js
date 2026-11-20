/** Hub and directory adapter for the shared Lai Thieu venue inventory. */
import { laiThieuVenueCatalog } from './laiThieuVenueCatalog.js';
import { getLaiThieuIllustration } from './laiThieuIllustrations.js';
const fallback='/images/pool-detail/outdoor-pool-illustration-card.webp';
const labels={photo:'',documented:'Tư liệu tiện ích',render:'Phối cảnh',plan:'Mặt bằng',exterior:'Ảnh ngoại thất',promotional:'Tư liệu dự án'};
export const laiThieuPools=laiThieuVenueCatalog.map(venue=>{
  const main=venue.media.find(m=>m.kind==='photo'||m.kind==='documented')||venue.media.find(m=>m.kind!=='plan');
  const illustration=getLaiThieuIllustration(venue.id);
  const image=main?.src.replace(/\.webp$/,'-card.webp')||illustration?.cardSrc||(venue.id==='nhat-an'?fallback:null);
  const imageNote=main?labels[main.kind]:(image?'Ảnh minh họa':undefined);
  return {...venue,neighbor:!!venue.commune&&venue.commune!=='lai-thieu',provinceSlug:'hoc-boi-tphcm',targetCommune:venue.commune||'',address:venue.address,oldAddress:venue.oldAddress,
    image,imageAlt:main?.caption||illustration?.alt||(image?'Ảnh minh họa bể bơi ngoài trời, không phải ảnh khảo sát địa điểm':''),imageNote,
    tag:venue.type==='residential'?'Hồ nội khu cư dân':venue.category,
    services:venue.summary,detail:venue.context,access:venue.type==='residential'?'Cần quyền sử dụng hồ và BQL chấp thuận HLV':'Cần xác nhận vé, giờ và điều kiện tiếp nhận lớp',
    reviewedAt:'20/11/2026 · Biên tập theo tài liệu, chưa xác nhận khảo sát',
    venueContact:{role:'Đơn vị vận hành / BQL hồ',name:venue.name,phone:'',note:venue.context,exactSourceUrl:'https://dayboi.vip'+venue.detailHref,sourceTitle:'Thông tin '+venue.name},
    instructors:[{unitName:'Swim For Life Việt Nam',contactPerson:'Thầy Lê Văn Thông — Kiện tướng Bơi lội',phone:'0986.456.678',courseTypes:'Tư vấn theo điều kiện sử dụng hồ; xác nhận tiếp nhận HLV và lịch trước khi học.',exactSourceUrl:'https://dayboi.vip'+venue.detailHref+'#huan-luyen-vien',sourceTitle:'Tư vấn chuyên môn khu vực Lái Thiêu và lân cận'}],
  };
});
