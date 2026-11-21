import {venueCatalog,venueKey} from './catalog.js';
import {getAllCommunePages} from '../communePages.js';
import {getPublishedAreaUrl} from '../locationAreas.js';
import {courseLinks,cleanCopy,mapsSearch} from '../locality/common';
import {swimmingTechniques} from '../swimmingResources';
import {makeCourses,sharedPreparation,sharedTuition} from '../pool-detail/shared';
import type {PoolDetailData,PoolPhoto} from '../poolDetailTypes';
import type {LocalSiteConfig} from '../locality/types';

const communes=getAllCommunePages();
const photoLabels:Record<string,string>={community:'Minh họa không gian tập bơi',residential:'Minh họa hồ nội khu cư dân',garden:'Minh họa hồ trong khuôn viên nghỉ dưỡng'};
const shorten=(text:string,max:number)=>text.length<=max?text:text.slice(0,max-1).replace(/\s+\S*$/,'')+'…';
function metadata(name:string,province:string){
  const candidates=[`Học bơi tại ${name}: Địa chỉ & liên hệ`,`Học bơi ${name}: Hồ bơi & giáo viên`,`${name}: Địa chỉ, giáo viên & học bơi`,`${name}: Hướng dẫn học bơi tại ${province}`];
  const title=candidates.find(s=>s.length>=45&&s.length<=65)||shorten(candidates[0],65);
  const short=shorten(name,58);
  const base=`Tìm hiểu ${short}: địa chỉ, điều kiện sử dụng hồ và liên hệ giáo viên theo dữ liệu hiện có. Xem các khoản cần hỏi trước khi sắp xếp học bơi.`;
  return {title,description:base.length>170?base.slice(0,167).replace(/\s+\S*$/,'')+'…':base};
}
export function buildVenueDetail(venue:any):PoolDetailData {
  const residential=/nội khu|cư dân|chung cư|residen/i.test([venue.type,venue.access,venue.entityType,venue.category].join(' '));
  const garden=/resort|khách sạn|hotel|khu du lịch|nghỉ dưỡng/i.test(venue.name+' '+venue.access);
  const kind=residential?'residential':garden?'garden':'community';
  const imageBase=`/images/pool-detail/illustrations/${kind}-pool`;
  const hero:PoolPhoto&{mobileSrc:string}={src:imageBase+'.webp',mobileSrc:imageBase+'-mobile.webp',width:1600,height:900,illustration:true,kind:'illustration',label:'Ảnh minh họa',alt:photoLabels[kind]+'; không phải ảnh thực tế '+venue.name,caption:'Ảnh minh họa dùng chung để giới thiệu nhu cầu học bơi, không xác nhận hình dáng, tiện ích hay tình trạng vận hành của '+venue.name+'.'};
  const direct=venue.targetCommunes.length===1?communes.find(c=>c.parentSlug===venue.provinceSlug&&c.slug===venue.targetCommunes[0]):null;
  const categoryHref=venue.categoryLabel?getPublishedAreaUrl(venue.provinceSlug,venue.category):null;
  const areaHref=direct?`/${venue.provinceSlug}/${direct.slug}/`:categoryHref||venue.provinceHref;
  const areaName=direct?.fullName||(categoryHref?venue.categoryLabel.replace(/^Khu vực /,''):venue.provinceName);
  const related=venueCatalog.filter(v=>v.id!==venue.id&&v.provinceSlug===venue.provinceSlug).sort((a,b)=>{
    const rank=(v:any)=>(v.targetCommunes.some((s:string)=>venue.targetCommunes.includes(s))?2:0)+(v.category===venue.category?1:0);
    return rank(b)-rank(a);
  }).slice(0,3);
  const courses=makeCourses(venue.name,residential).map(c=>({...c,href:c.href==='#dang-ky'?'#lien-he-dia-diem':c.href}));
  const map=mapsSearch(`${venue.name}, ${venue.address||venue.provinceName}`);
  const links=related.map(v=>({label:v.name,href:v.detailHref,description:v.address,icon:'swim'}));
  const site:LocalSiteConfig={id:venue.provinceSlug,name:areaName,parentName:areaHref===venue.provinceHref?'Việt Nam':venue.provinceName,hubHref:areaHref,parentHref:venue.provinceHref,lang:'vi',
    listingHref:venue.provinceHref+'#dia-diem',mapsHref:map,actionLabel:'Giáo viên & liên hệ',actionHref:'#lien-he-dia-diem',
    venueLinks:[{label:venue.name,href:venue.detailHref,description:venue.address,icon:'swim'},...links],courseLinks:courseLinks('vi'),nearby:[{label:'Danh bạ '+venue.provinceName,href:venue.provinceHref}],
    navigation:[{label:'Khu vực',href:areaHref,icon:'pin'},{label:'Địa điểm',icon:'swim',sections:[{title:venue.provinceName,links}],more:{label:'Tất cả hồ trong khu vực',href:venue.provinceHref+'#dia-diem'}},{label:'Chương trình',href:'#khoa-hoc',icon:'people'},{label:'Kỹ thuật bơi',href:'#ky-thuat-boi',icon:'wave'},{label:'Chi phí',href:'#hoc-phi',icon:'ticket'},{label:'Giáo viên',href:'#lien-he-dia-diem',icon:'people'}],
  };
  const sourceNotes=venue.sourceLinks.filter((url:string)=>!url.startsWith('https://dayboi.vip'+venue.detailHref)).map((url:string)=>({title:new URL(url).hostname.replace(/^www\./,''),url,note:'Đường dẫn có trong hồ sơ địa điểm. Nội dung và thông tin liên hệ cần xác nhận lại với đơn vị công bố.'}));
  const sources=[{title:'Dữ liệu danh bạ '+venue.provinceName,url:venue.provinceHref,note:'Biên tập từ danh sách địa phương hiện có của website; không phải xác nhận khảo sát tại hồ.'},...sourceNotes];
  const accessNote=residential?'Đây là địa điểm có thông tin hồ nội khu. Cần kiểm tra quyền sử dụng, khách đi cùng và quy định tiếp nhận giáo viên bên ngoài; không mặc định nhận khách ngoài hoặc đang mở lớp.':'Xác nhận hồ còn hoạt động, khung giờ nhận khách, vé sử dụng và quy định tiếp nhận giáo viên trước khi đến. Thông tin liên hệ không xác nhận đang có lớp mở.';
  const alternateAddresses=[...new Set(venue.sourceRecords.map((r:any)=>r.address).filter((s:string)=>s&&venueKey(s)!==venueKey(venue.address)))];
  return {
    ...metadata(venue.name,venue.provinceName),id:venue.id,slug:venue.slug,name:venue.name,shortName:venue.shortName||venue.name,areaName,areaHref,site,province:{name:venue.provinceName,href:venue.provinceHref},
    canonical:'https://dayboi.vip'+venue.detailHref,updatedAt:'2026-11-20',noIndex:!venue.indexable,variant:residential?'residential':'public',address:venue.address||'Chưa có địa chỉ chi tiết trong dữ liệu',oldAddress:venue.oldAddress||'',category:venue.access||venue.type||venue.entityType||'Địa điểm bơi trong danh bạ',
    hotline:'',phoneHref:'',zaloHref:'',contacts:{operators:venue.operators,instructors:venue.instructors},hero,
    heroDescription:`Tìm hiểu địa chỉ, điều kiện sử dụng và cách liên hệ tại ${venue.name}. Trao đổi với đúng giáo viên hoặc ban quản lý trước khi sắp xếp buổi học.`,
    badges:[{icon:'pin',label:venue.provinceName},{icon:'people',label:venue.instructors.length?`${venue.instructors.length} đầu mối dạy bơi trong hồ sơ`:'Xác nhận giáo viên trước khi học'},{icon:'shield',label:residential?'Kiểm tra quyền dùng hồ':'Hỏi điều kiện tổ chức lớp'}],
    quickFacts:[{icon:'pin',label:'Địa chỉ',value:venue.address||'Cần bổ sung địa chỉ'},{icon:'swim',label:'Loại địa điểm',value:cleanCopy(venue.access||venue.type||venue.entityType||'Cần xác nhận')},{icon:'people',label:'Giáo viên / đơn vị dạy',value:venue.instructors.length?`${venue.instructors.length} liên hệ theo hồ sơ`:'Chưa có liên hệ riêng',note:'Xem từng chủ thể bên dưới'},{icon:'ticket',label:'Vé & học phí',value:'Xác nhận riêng từng khoản'},{icon:'shield',label:'Điều kiện sử dụng',value:residential?'Theo quy định cư dân / BQL':'Theo nội quy địa điểm'}],
    photos:[],galleryIllustrations:[hero],galleryTitle:'Không gian bơi minh họa',galleryNote:'Hồ sơ hiện chưa có ảnh thực tế riêng cho '+venue.name+'. Hình đang dùng là minh họa chung, không phải tư liệu khảo sát địa điểm.',
    facilities:[{label:'Thông tin địa điểm',status:'documented',note:cleanCopy(venue.access||venue.type||venue.entityType||'Có tên và địa chỉ trong danh bạ')},{label:'Môi trường bơi',status:venue.environment?'documented':'updating',note:cleanCopy(venue.environment||'Chưa có thông tin riêng về trong nhà, ngoài trời hoặc nhiệt độ nước')},{label:'Hình thức học',status:venue.instructors.length?'documented':'updating',note:venue.instructors.length?'Có đầu mối dạy bơi trong dữ liệu; lịch, lớp và khu tập cần hỏi trực tiếp.':'Chưa có đầu mối giáo viên riêng được công bố trong hồ sơ.'},{label:'Vé và giờ sử dụng',status:'updating',note:'Hỏi quầy vé hoặc ban quản lý trước khi sắp xếp buổi học'},{label:'Độ sâu, cứu hộ và khu cho trẻ',status:'unverified',note:'Cần kiểm tra thực tế và thống nhất khu tập phù hợp trình độ'}],
    facilityNote:'“Theo tài liệu” phản ánh thông tin đã lưu, không xác nhận tình trạng vận hành hiện tại. '+cleanCopy(venue.missing||''),
    courses,courseIntro:'Các nhu cầu học có thể trao đổi với giáo viên. Nội dung dưới đây không xác nhận lớp đang mở tại địa điểm; cần thống nhất điều kiện tổ chức trước khi đăng ký.',styles:swimmingTechniques('vi'),
    location:{mapsSearchUrl:map,note:'Liên kết Maps là truy vấn theo tên và địa chỉ. Hãy đối chiếu cổng vào và điểm hẹn với người phụ trách trước khi di chuyển.',directions:[{label:'Tên và địa chỉ trong hồ sơ',text:venue.address||'Cần bổ sung địa chỉ cụ thể'},{label:'Trước khi di chuyển',text:'Gửi tên hồ, xác nhận cổng vào, nơi gửi xe và vị trí gặp giáo viên.'},...(alternateAddresses.length?[{label:'Biến thể địa chỉ cần đối chiếu',text:alternateAddresses.join(' · ')}]:[])]},
    preparation:sharedPreparation,preparationImage:'/images/pool-detail/swimming-gear.webp',tuition:sharedTuition,tuitionNote:'Chưa có bảng giá hiện hành được xác nhận riêng tại '+venue.name+'. Tách học phí giáo viên, vé hồ và các khoản phụ thu khi trao đổi.',
    guideTitle:'Chuẩn bị học bơi tại '+venue.name,guideIntro:'Đọc thông tin địa điểm cùng các câu hỏi cần trao đổi trước buổi đầu. Chương trình phù hợp tùy người học và điều kiện thực tế của hồ.',
    guide:[{id:'thong-tin-dia-diem',title:'Địa chỉ và thông tin trong hồ sơ',paragraphs:[`${venue.name} được ghi nhận tại ${venue.address||venue.provinceName}.`,...(venue.services||venue.pros?[`Tài liệu hiện có mô tả: ${cleanCopy(venue.services||venue.pros)}. Hãy xác nhận tình trạng thực tế trước khi chọn nơi học.`]:[]),...(venue.detail?[`Ghi chú trong hồ sơ: ${cleanCopy(venue.detail)}`]:[]),accessNote]},{id:'chon-giao-vien',title:'Liên hệ đúng người phụ trách',paragraphs:[venue.instructors.length?'Danh sách bên dưới giữ tên đơn vị, người liên hệ và số điện thoại theo từng hồ sơ. Nhiều đơn vị cùng được nhắc tới không có nghĩa họ cùng vận hành hồ.':'Dữ liệu chưa có giáo viên riêng gắn với hồ này. Hãy hỏi ban quản lý về người được phép hướng dẫn hoặc tham khảo các địa điểm khác trong khu vực.','Hỏi giáo viên về nền tảng của người học, số người một nhóm, lịch dự kiến và cách điều chỉnh bài tập. Quyền dùng hồ, vé và giờ mở cửa cần trao đổi với ban quản lý hoặc quầy vé.']},{id:'dieu-kien-su-dung',title:residential?'Điều kiện sử dụng hồ nội khu':'Những điểm cần xác nhận tại hồ',paragraphs:[accessNote,cleanCopy(venue.missing||'Chưa có thông tin xác nhận riêng về giá, giờ, độ sâu và phương án tổ chức lớp. Cần hỏi trước khi di chuyển hoặc thanh toán.')]}],
    testimonials:[],faqs:[{question:venue.name+' ở đâu?',answer:venue.address?`Địa chỉ trong dữ liệu: ${venue.address}. Tên và địa chỉ có thể có cách ghi cũ; xác nhận cổng vào với đơn vị phụ trách trước khi đến.`:'Chưa có địa chỉ chi tiết riêng trong hồ sơ. Hãy kiểm tra tên địa điểm trên bản đồ và đối chiếu với ban quản lý.'},{question:'Có thể liên hệ ai để học bơi?',answer:venue.instructors.length?'Xem mục “Giáo viên & liên hệ địa điểm”. Mỗi giáo viên hoặc đơn vị có số riêng và nguồn thông tin đi kèm; hỏi trực tiếp về lịch và điều kiện tổ chức lớp.':'Hiện chưa có số giáo viên riêng cho địa điểm này trong dữ liệu. Hỏi ban quản lý về khả năng tổ chức lớp hoặc tham khảo địa điểm khác trong khu vực.'},{question:'Học phí có bao gồm vé hồ không?',answer:'Chưa có xác nhận hiện hành về gói học tại địa điểm. Hỏi rõ học phí giáo viên, vé sử dụng hồ, dụng cụ, số buổi và điều kiện đổi lịch trước khi đăng ký.'},{question:residential?'Khách ngoài có được học tại hồ không?':'Hồ hiện có tiếp nhận lớp dạy bơi không?',answer:accessNote}],
    nearby:related.map(v=>({name:v.name,href:v.detailHref,description:v.address||v.provinceName})),accessNote,sources,
  };
}
