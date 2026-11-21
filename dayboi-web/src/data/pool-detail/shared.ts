import type { PoolCourse, PoolDetailData, PoolPhoto } from '../poolDetailTypes';
import { laiThieuLanding } from '../localLandingPages';

export const localContact = {hotline:'0986.456.678',phoneHref:'tel:0986456678',zaloHref:'https://zalo.me/0986456678'};
export const sharedStyles = laiThieuLanding.techniques.map((s,i)=>({title:['Bơi ếch','Bơi sải','Bơi ngửa','Bơi bướm','Đứng nước'][i],href:s.href,image:s.image,imageAlt:s.imageAlt}));
export const sharedInstructor: NonNullable<PoolDetailData['instructor']> = {
  name:'Thầy Lê Văn Thông',qualification:'Kiện tướng Bơi lội',image:'/images/pool-detail/instructor-le-van-thong.webp',
  imageAlt:'Ảnh hướng dẫn bơi trong hồ sơ thầy Lê Văn Thông trên website Swim For Life',sourceUrl:'https://ocean-park.dayboi.vip/',
  description:'Phụ trách tư vấn chuyên môn cụm Lái Thiêu và vùng lân cận. Trao đổi mục tiêu, nền tảng và điều kiện dùng hồ trước khi thống nhất cách học.',
  points:['Đánh giá trình độ để lựa chọn bài tập','Hướng dẫn theo khả năng thực tế','Kết hợp kỹ thuật và kỹ năng an toàn'],
};
export const fallbackPoolImage: PoolPhoto & {mobileSrc:string} = {
  src:'/images/pool-detail/outdoor-pool-illustration.webp',mobileSrc:'/images/pool-detail/outdoor-pool-illustration-mobile.webp',
  alt:'Ảnh minh họa bể bơi ngoài trời, không phải ảnh khảo sát địa điểm',caption:'Ảnh bể bơi minh họa, không dùng để xác nhận hình dáng hoặc tiện ích của địa điểm.',width:1800,height:1000,illustration:true,label:'Ảnh bể bơi minh họa',kind:'illustration',
};
export function makeCourses(name:string,residential=false):PoolCourse[] {
  const note=residential?'Cần quyền vào hồ và BQL chấp thuận.':'Xác nhận khu tập và lịch tiếp nhận trước buổi đầu.';
  return [
    {id:'lop-tre-em',title:'Học bơi trẻ em',audience:'Làm quen nước, học từ cơ bản',description:`Tư vấn nền tảng và cách giám sát trẻ tại ${name}. ${note}`,href:'/khoa-hoc-boi/tre-em/',image:'/images/landing/lai-thieu/children.webp',imageAlt:'Minh họa chương trình học bơi trẻ em'},
    {id:'lop-nguoi-lon',title:'Học bơi người lớn',audience:'Người mới và người sợ nước',description:'Tập nhịp thở, thả lỏng và phối hợp động tác theo khả năng thực tế.',href:'/khoa-hoc-boi/nguoi-lon/',image:'/images/landing/lai-thieu/adults.webp',imageAlt:'Minh họa học bơi cho người lớn'},
    {id:'lop-kem-rieng',title:'Học kèm riêng 1–1',audience:'Lộ trình theo từng học viên',description:`Trao đổi mục tiêu và điều kiện tổ chức tại ${name} trước khi chốt lịch.`,href:'/khoa-hoc-boi/1-kem-1/',image:'/images/landing/lai-thieu/hero.webp',imageAlt:'Ảnh minh họa HLV kèm học viên',imagePosition:'80% center'},
    {id:'lop-nhom-nho',title:'Lớp nhóm nhỏ',audience:'Gia đình, bạn bè cùng học',description:'Thống nhất số người, trình độ và cách giám sát; chưa mặc định có lớp ghép đang mở.',href:'#dang-ky',image:'/images/pool-detail/small-group-swimming.webp',imageAlt:'Tư liệu lớp học chung của Swim For Life, không phải ảnh lớp tại địa điểm này'},
  ];
}
export const sharedPreparation:PoolDetailData['preparation'] = [
  {title:'Đồ bơi và kính vừa vặn',description:'Thử kính trước khi xuống nước, chuẩn bị đồ bơi gọn và phù hợp nội quy.'},
  {title:'Khăn, nước uống và túi đồ',description:'Mang đồ khô, túi đựng đồ ướt và nước uống cho buổi học.'},
  {title:'Đến sớm, trao đổi cùng HLV',description:'Xác nhận điểm hẹn, khởi động và báo khi không thoải mái.'},
  {title:'Giám sát trẻ em liên tục',description:'Thống nhất người đưa đón và vị trí chờ; trẻ không tự ý xuống nước.'},
  {title:'Tuân thủ quy định sử dụng hồ',description:'Hỏi rõ khu tập, nội quy, giờ và điều kiện vào hồ trước buổi đầu.'},
];
export const sharedTuition:PoolDetailData['tuition'] = [
  {label:'Học phí kèm riêng 1–1',value:'Liên hệ nhận học phí chính xác',note:'Theo mục tiêu và cách tổ chức buổi học'},
  {label:'Học phí nhóm nhỏ',value:'Tư vấn theo nhóm đăng ký',note:'Cần xác nhận số người và nền tảng'},
  {label:'Vé / phí sử dụng hồ',value:'Xác minh với quầy vé hoặc BQL',note:'Khoản riêng với học phí giảng dạy'},
  {label:'Đổi lịch / học bù',value:'Thống nhất trước khi đăng ký',note:'Theo điều kiện của hồ và lịch HLV'},
  {label:'Bảo lưu khóa học',value:'Liên hệ xác nhận điều kiện',note:'Không mặc định có chính sách bảo lưu'},
];
