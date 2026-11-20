import type { PoolDetailData, PoolPhoto } from '../poolDetailTypes';
import { laiThieuVenueCatalog } from '../laiThieuVenueCatalog.js';
import { getLaiThieuIllustration } from '../laiThieuIllustrations.js';
import mediaDimensions from './mediaDimensions.json';
import {localContact,sharedStyles,sharedInstructor,fallbackPoolImage,makeCourses,sharedPreparation,sharedTuition} from './shared';
type Venue=(typeof laiThieuVenueCatalog)[number];
const mediaLabels:Record<string,string>={photo:'Ảnh tư liệu hồ bơi',documented:'Tư liệu tiện ích',render:'Phối cảnh dự án',plan:'Mặt bằng tiện ích',exterior:'Ngoại thất dự án',promotional:'Tư liệu giới thiệu dự án'};
const areas:Record<string,string>={'lai-thieu':'Lái Thiêu','binh-hoa':'Bình Hòa','thuan-an':'Thuận An','thuan-giao':'Thuận Giao'};

export function buildPoolDetail(venue:Venue):PoolDetailData {
  const residential=venue.type==='residential';
  const areaName=venue.commune?areas[venue.commune]:'Lái Thiêu & giáp ranh';
  const areaHref=venue.commune?`/hoc-boi-tphcm/${venue.commune}/`:'/hoc-boi-tphcm/lai-thieu/';
  const photos:PoolPhoto[]=venue.media.map(m=>({src:m.src,alt:m.caption,caption:m.caption,...(mediaDimensions as Record<string,{width:number;height:number}>)[m.src],kind:m.kind,label:mediaLabels[m.kind]}));
  const illustration=getLaiThieuIllustration(venue.id)||fallbackPoolImage;
  const heroPhoto=photos.find(p=>p.kind==='photo'||p.kind==='documented')||photos.find(p=>p.kind!=='plan')||illustration;
  const hero={...heroPhoto,mobileSrc:heroPhoto.illustration?illustration.mobileSrc:heroPhoto.src};
  const access=residential?'Chỉ tổ chức khi học viên có quyền sử dụng hồ và BQL đồng ý tiếp nhận HLV. Không coi đây là hồ bán vé công cộng.':'Cần xác nhận giá vé, khung giờ và khả năng tiếp nhận HLV/lớp học với đơn vị vận hành trước khi hẹn buổi đầu.';
  const nearby=venue.nearby.map(id=>laiThieuVenueCatalog.find(v=>v.id===id)).filter(Boolean).map(v=>({name:v!.name,href:v!.detailHref,description:v!.summary}));
  const title=`Học bơi ${venue.shortName} | Lớp kèm riêng & thông tin hồ`;
  const description=`Tìm hiểu học bơi tại ${venue.shortName}: địa chỉ, tư liệu, điều kiện sử dụng hồ và lớp cho trẻ em, người lớn. Tư vấn cùng thầy Lê Văn Thông: 0986.456.678.`;
  return {
    id:venue.id,slug:venue.slug,name:venue.name,shortName:venue.shortName,areaName,areaHref,
    variant:residential?'residential':'public',canonical:`https://dayboi.vip${venue.detailHref}`,title,description,updatedAt:'2026-11-20',noIndex:!venue.indexable,
    address:venue.address,oldAddress:venue.oldAddress,category:venue.category,...localContact,hero,heroDescription:venue.summary,
    badges:[{icon:'people',label:'Tư vấn cùng HLV'},{icon:'calendar',label:'Lộ trình theo khả năng'},{icon:residential?'building':'shield',label:residential?'Theo quyền sử dụng hồ':'Xác nhận điều kiện học'}],
    quickFacts:[
      {icon:'pin',label:'Địa chỉ theo tài liệu',value:venue.address},
      {icon:'clock',label:'Giờ sử dụng hồ',value:'Cần xác nhận',note:'Với quầy vé hoặc BQL'},
      {icon:'ticket',label:residential?'Quyền vào hồ':'Vé vào hồ',value:residential?'Theo quy định nội khu':'Cần xác minh tại quầy',note:residential?'Không mặc định mở cho khách ngoài':'Tách riêng học phí'},
      {icon:residential?'building':'swim',label:'Loại địa điểm',value:venue.category},
      {icon:'people',label:'Nhu cầu tư vấn',value:'Trẻ em, người lớn',note:'Xác nhận lịch trước khi đến'},
    ],
    photos,galleryIllustrations:[illustration],galleryTitle:`Hình ảnh & tư liệu ${venue.shortName}`,
    galleryNote:photos.length?'Tư liệu theo bộ ảnh được cung cấp; caption phân biệt ảnh hồ, phối cảnh, mặt bằng và ngoại thất. Không thay thế khảo sát hiện trạng vận hành.':'Chưa có ảnh hồ phù hợp trong bộ tư liệu. Ảnh bên dưới chỉ minh họa không gian bơi, không phải ảnh địa điểm.',
    facilities:[...venue.facts.map(label=>({label,status:'documented' as const,note:'Theo tài liệu dự án, cần đối chiếu hiện trạng'})),
      {label:'Khu vực tập và độ sâu',status:'unverified',note:'Cần xác nhận trước khi xếp lớp'},
      {label:residential?'Quyền sử dụng và tiếp nhận HLV':'Điều kiện tiếp nhận lớp',status:'unverified',note:'Xác nhận với đơn vị vận hành'},
      {label:'An toàn, cứu hộ và nội quy',status:'unverified',note:'Cần hỏi tại hồ'},
      {label:'Giá vé, giờ và tiện ích đi kèm',status:'updating',note:'Không dùng số liệu cũ như xác nhận hiện tại'},
    ],facilityNote:`Thông tin địa điểm theo kế hoạch khu vực ngày 20/11/2026. Cần bổ sung: ${venue.needs.join('; ')}.`,
    courses:makeCourses(venue.shortName,residential),courseIntro:`Tư vấn chương trình tại ${venue.shortName} theo độ tuổi, trình độ và điều kiện sử dụng hồ.`,styles:sharedStyles,instructor:sharedInstructor,
    location:{mapsSearchUrl:`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${venue.name}, ${venue.address}`)}`,regionEmbedUrl:`https://maps.google.com/maps?q=${encodeURIComponent(venue.commune?`phường ${areaName}, TP.HCM`:'khu vực Lái Thiêu, TP.HCM')}&z=14&output=embed`,note:'Bản đồ chỉ tham khảo khu vực, không phải ghim hồ đã được xác minh. Hãy xác nhận đúng lối vào và điểm hẹn với HLV.',directions:venue.landmarks.slice(0,2).map(label=>({label,text:'Mốc nhận diện theo tài liệu; đối chiếu bản đồ và địa chỉ trước khi đi.'}))},
    preparation:sharedPreparation,preparationImage:'/images/pool-detail/swimming-gear.webp',tuition:sharedTuition,
    tuitionNote:residential?'Học phí giảng dạy tách khỏi phí/quyền dùng tiện ích. Không mặc định cư dân hoặc khách đi cùng được dùng hồ miễn phí.':'Học phí giảng dạy và vé vào hồ là hai khoản riêng. Hỏi rõ tổng chi phí, thời lượng và các điều kiện trước khi thanh toán.',
    guideTitle:`Tìm hiểu việc học bơi tại ${venue.shortName}`,guideIntro:'Thông tin địa điểm, cách tiếp cận và những điều cần thống nhất trước khi bắt đầu.',
    guide:[
      {id:'thong-tin-dia-diem',title:`Địa chỉ và tư liệu ${venue.shortName}`,paragraphs:[venue.context,`Địa chỉ trong tài liệu: ${venue.address}. Địa danh cũ: ${venue.oldAddress}. Các mốc nhận diện gồm ${venue.landmarks.join(', ')}. Khi tra cứu, nên đối chiếu tên hồ, cơ sở và lối vào thay vì chỉ đi theo một ghim gần đúng.`,`${venue.needs.join('; ')} là những phần cần được xác nhận bổ sung. Ngày biên tập không đồng nghĩa với ngày khảo sát trực tiếp, và ảnh giới thiệu không xác nhận mọi tiện ích hiện đang hoạt động.`]},
      {id:'quyen-su-dung',title:residential?'Cư dân và HLV cần chuẩn bị thủ tục gì?':'Cần xác nhận điều gì với quầy vé?',paragraphs:[access,residential?`Trước khi hẹn tại ${venue.shortName}, hãy nói rõ học viên là cư dân hay khách được bảo lãnh, số người đi cùng và nhu cầu mời HLV. Mỗi ban quản lý có thể yêu cầu đăng ký riêng hoặc giới hạn thời gian; không nên tự suy ra quyền vào hồ từ việc có người quen trong tòa nhà.`:`Khi trao đổi với ${venue.name}, hãy xác nhận giá vé phù hợp, khu vực được tập và thời điểm hồ có thể tiếp nhận lớp. Vé bơi tự do không mặc nhiên bao gồm học phí hay quyền thuê HLV vào hướng dẫn.`, 'Với trẻ em, cần thống nhất người giám sát, điểm đưa đón và cách chờ ngoài giờ tập. HLV chọn bài theo điều kiện hồ và khả năng học viên; không dựa vào ảnh để phán đoán độ sâu phù hợp.']},
      {id:'lo-trinh',title:'Chọn lớp và lộ trình theo trình độ',paragraphs:[`Lớp tại ${venue.shortName} cần được tư vấn dựa trên tuổi, khả năng làm quen nước và mục tiêu. Trẻ em, người lớn và người sợ nước có thể cần cách hướng dẫn khác nhau; lớp nhóm còn cần xem độ chênh trình độ giữa các thành viên.`, 'Người mới thường bắt đầu với nhịp thở, nổi và lướt, sau đó học từng động tác chân, tay rồi phối hợp. Khung 8–12 buổi chỉ mang tính tham khảo. HLV đánh giá tiến độ thực tế trước khi tăng quãng bơi hoặc chuyển kỹ thuật; không cam kết mọi người biết bơi trong cùng một thời hạn.', 'Bơi ếch, sải, ngửa và bướm có yêu cầu phối hợp khác nhau. Đứng nước và kỹ năng giữ bình tĩnh nên được tập trong điều kiện kiểm soát. Các bài hướng dẫn trên website giúp tìm hiểu thêm, không thay thế buổi thực hành có giám sát.']},
      {id:'chi-phi-va-lich',title:'Học phí, lịch học và phương án thay thế',paragraphs:[`Liên hệ thầy Lê Văn Thông, 0986.456.678, để trao đổi mục tiêu và khả năng tổ chức tại ${venue.shortName}. Số này là liên hệ chuyên môn khu vực, không phải số quầy vé/BQL. Giá vé và quyền dùng hồ phải được xác nhận riêng với đơn vị vận hành.`, 'Trước khi thanh toán, thống nhất số buổi, thời lượng, hình thức học và điều kiện đổi lịch/học bù. Chưa có chính sách bảo lưu hoặc hoàn tiền được xác nhận riêng cho địa điểm này. Hỏi rõ các khoản đi kèm giúp tránh nhầm giữa học phí và chi phí sử dụng hồ.', `Nếu ${venue.shortName} chưa phù hợp về lịch hoặc quyền vào hồ, bạn có thể tham khảo ${nearby.map(v=>v.name).join(', ')}. Danh sách lân cận chỉ hỗ trợ so sánh địa điểm; lịch nhận học và điều kiện tại từng nơi vẫn cần được xác nhận.`]},
    ],
    testimonials:[],
    faqs:[
      {question:`Có thể học bơi tại ${venue.shortName} ngay không?`,answer:`Cần tư vấn và xác nhận điều kiện tiếp nhận trước. ${access}`},
      {question:`Địa chỉ ${venue.shortName} được ghi thế nào?`,answer:`Theo tài liệu dự án: ${venue.address}. Địa danh cũ: ${venue.oldAddress}. Hãy xác nhận đúng cơ sở và điểm hẹn trước khi tới.`},
      {question:residential?'Khách ngoài hoặc HLV có được vào hồ không?':'Học phí đã bao gồm vé vào hồ chưa?',answer:residential?'Không mặc định được vào. Học viên cần quyền sử dụng hợp lệ và phải xác nhận quy định tiếp nhận khách/HLV với BQL trước buổi học.':'Học phí giảng dạy và vé hồ được tư vấn tách riêng. Cần xác nhận giá vé tại quầy và tổng chi phí trước khi đăng ký.'},
      {question:'Có tư vấn lớp trẻ em và người sợ nước không?',answer:'Có thể trao đổi nhu cầu với HLV. Cần xem độ sâu, khu tập và khả năng giám sát thực tế trước khi tổ chức; không dựa vào ảnh minh họa để chọn mức bài.'},
      {question:'Có cam kết biết bơi sau 8–12 buổi không?',answer:'Không dùng số buổi như cam kết chung. Tiến độ tùy nền tảng, thể lực và lịch tập; HLV đánh giá khả năng thực tế để điều chỉnh.'},
      {question:'Lịch học bù và bảo lưu áp dụng ra sao?',answer:'Cần thống nhất trước khi đăng ký. Chưa công bố một chính sách riêng đã được xác nhận cho địa điểm; không mặc định học bù, bảo lưu hay hoàn tiền.'},
    ],nearby,accessNote:access,
    sources:[{title:'Kế hoạch tuyển sinh cụm Lái Thiêu',note:'Dữ liệu và các phần cần kiểm chứng từ tài liệu dự án ngày 20/11/2026; không thay thế xác nhận vận hành.'},{title:'Bộ ảnh địa điểm người dùng cung cấp',note:'Ảnh được phân loại và chú thích theo nội dung; không tự xác nhận quyền sử dụng hồ hoặc nhận lớp.'}],
  };
}
