import { laiThieuPools } from './laiThieuPools.js';

export interface Link { label: string; href: string; }
export interface ImageCardData {
  title: string; description: string; image: string; imageAlt: string;
  href: string; icon: string; imagePosition?: string;
}
export interface Pool {
  id: string; name: string; type: string; zone: string; area?: string; address: string; oldAddress: string;
  image: string | null; imageAlt: string; tag: string; services: string; detail: string;
}
export interface LocalLandingData {
  name: string; province: string; canonical: string; title: string; description: string; updatedAt: string;
  hotline: string; phoneHref: string; zaloHref: string; heroImage: string; heroMobile: string;
  heroTitle: string; subtitle: string; pools: Pool[]; audiences: ImageCardData[]; courses: ImageCardData[];
  instructor: { name: string; qualification: string; description: string; image?: string; badges: {icon: string; title: string; text: string}[] };
  journey: { period: string; title: string; description: string; icon: string }[];
  benefits: {icon: string; title: string; description: string}[];
  local: { image: string; imageAlt: string; points: string[]; neighbors: Link[] };
  testimonials: {name: string; role: string; quote: string; image: string}[];
}
const asset = '/images/landing/lai-thieu';
export const laiThieuLanding: LocalLandingData = {
  name: 'Lái Thiêu', province: 'TP.HCM', canonical: 'https://dayboi.vip/hoc-boi-tphcm/lai-thieu/', updatedAt: '2026-11-20',
  title: 'Học bơi tại Lái Thiêu, TP.HCM | Lớp trẻ em & người lớn',
  description: 'Học bơi tại Lái Thiêu, TP.HCM cho trẻ em, người lớn và người sợ nước. Tham khảo 6 hồ bơi, lộ trình 8–12 buổi; tư vấn cùng thầy Lê Văn Thông: 0986.456.678.',
  hotline: '0986.456.678', phoneHref: 'tel:0986456678', zaloHref: 'https://zalo.me/0986456678',
  heroImage: `${asset}/hero.webp`, heroMobile: `${asset}/hero-mobile.webp`,
  heroTitle: 'Học bơi tại', subtitle: 'An toàn – Đúng kỹ thuật – Phù hợp từng người học',
  pools: laiThieuPools,
  audiences: [
    { title: 'Trẻ em', description: 'Học bơi đúng cách, an toàn từ bước đầu.', image: `${asset}/children.webp`, imageAlt: 'Minh họa trẻ em đeo kính và tập với ván bơi', href: '/khoa-hoc-boi/tre-em/', icon: 'child' },
    { title: 'Người lớn', description: 'Bắt đầu từ cơ bản, rèn luyện thể lực.', image: `${asset}/adults.webp`, imageAlt: 'Minh họa người lớn tập luyện tại hồ bơi', href: '/khoa-hoc-boi/nguoi-lon/', icon: 'person' },
    { title: 'Người sợ nước', description: 'Làm quen với nước, từng bước tự tin.', image: `${asset}/confidence.webp`, imageAlt: 'Minh họa học viên thoải mái làm quen với nước', href: '/khoa-hoc-boi/nguoi-so-nuoc/', icon: 'drop' },
    { title: 'Cư dân chung cư', description: 'Kèm riêng tại hồ nội khu được phép.', image: laiThieuPools[2].image!, imageAlt: 'Hồ bơi nội khu The Emerald Golf View', href: '#dia-diem', icon: 'building' },
  ],
  courses: [
    { title: 'Học bơi cơ bản', description: 'Cho người mới bắt đầu, nắm vững kỹ năng an toàn.', image: `${asset}/adults.webp`, imageAlt: 'Minh họa học bơi cơ bản cho người lớn', href: '/khoa-hoc-boi/nguoi-lon/', icon: 'swim' },
    { title: 'Học bơi trẻ em', description: 'Kỹ năng bơi đúng cách, phát triển sự tự tin.', image: `${asset}/children.webp`, imageAlt: 'Minh họa chương trình học bơi trẻ em', href: '/khoa-hoc-boi/tre-em/', icon: 'child' },
    { title: 'Học bơi nâng cao', description: 'Cải thiện kỹ thuật, hoàn thiện từng kiểu bơi.', image: `${asset}/journey.webp`, imageAlt: 'Minh họa người bơi sải rèn luyện kỹ thuật', href: '/ky-thuat-boi/', icon: 'swim', imagePosition: '80% center' },
    { title: 'Học bơi kèm riêng', description: 'HLV kèm sát, điều chỉnh theo tiến độ của bạn.', image: `${asset}/hero.webp`, imageAlt: 'Minh họa huấn luyện viên hướng dẫn một học viên', href: '/khoa-hoc-boi/1-kem-1/', icon: 'people', imagePosition: '82% center' },
  ],
  instructor: {
    name: 'Thầy Lê Văn Thông', qualification: 'Kiện tướng Bơi lội',
    description: 'Phụ trách tư vấn chuyên môn khu vực Lái Thiêu. Hướng dẫn theo trình độ thực tế, đồng hành cùng trẻ em, người lớn và người còn e ngại khi xuống nước.',
    badges: [{ icon: 'medal', title: 'Kiện tướng', text: 'Bơi lội' }, {icon: 'route', title: 'Lộ trình riêng', text: 'Theo trình độ'}, {icon: 'people', title: 'Tận tâm', text: 'Hướng dẫn từng bước'}, {icon: 'heart', title: 'Ưu tiên', text: 'Kỹ năng an toàn'}],
  },
  journey: [
    { period: 'Buổi 1–2', title: 'Làm quen với nước', description: 'Tập xuống nước, thả lỏng và giữ thăng bằng.', icon: 'drop' },
    { period: 'Buổi 3–4', title: 'Thở nước & tập nổi', description: 'Kiểm soát hơi thở, tập nổi và lướt nước.', icon: 'breath' },
    { period: 'Buổi 5–8', title: 'Rèn kỹ thuật bơi', description: 'Phối hợp tay, chân và nhịp thở đúng cách.', icon: 'swim' },
    { period: 'Buổi 9–12', title: 'Hoàn thiện kỹ năng', description: 'Bơi liên tục, đứng nước và xử lý tình huống.', icon: 'shield' },
  ],
  benefits: [
    {icon: 'medal', title: 'HLV có chuyên môn', description: 'Hướng dẫn bởi người phụ trách chuyên môn khu vực.'},
    {icon: 'shield', title: 'Ưu tiên an toàn', description: 'Làm quen độ sâu, quy tắc hồ và kỹ năng tự bảo vệ.'},
    {icon: 'route', title: 'Lộ trình cá nhân', description: 'Điều chỉnh theo độ tuổi, thể lực và tiến độ học.'},
    {icon: 'sun', title: 'Học phí minh bạch', description: 'Tư vấn rõ học phí, vé hồ và chi phí trước khi học.'},
    {icon: 'pin', title: 'Địa điểm thuận tiện', description: 'Chọn hồ phù hợp tại Lái Thiêu và vùng giáp ranh.'},
  ],
  local: {
    image: `${asset}/local.webp`, imageAlt: 'Toàn cảnh dự án The Emerald Golf View trên trục Quốc lộ 13',
    points: ['Phường Lái Thiêu, TP.HCM; địa danh quen thuộc: Thuận An, Bình Dương (cũ).', 'Tra cứu theo khu Lái Thiêu, Bình Nhâm và một phần Vĩnh Phú (cũ).', 'Nhận diện theo Quốc lộ 13, Nguyễn Trãi, Nguyễn Văn Tiết và Chợ Lái Thiêu.'],
    neighbors: [{label: 'Bình Hòa', href:'/hoc-boi-tphcm/binh-hoa/'},{label:'Thuận An', href:'/hoc-boi-tphcm/thuan-an/'},{label:'Thuận Giao', href:'/hoc-boi-tphcm/thuan-giao/'}],
  },
  // Existing public site testimonials, src/pages/gioi-thieu.astro. Not local-course endorsements.
  testimonials: [
    {name:'Huyền Rêu',role:'Nhân viên văn phòng',quote:'Giáo viên rất hiểu tâm lý của đứa muốn học bơi mà sợ nước nhé. Thầy giáo vui tính, đẹp trai mà còn tâm lý nữa.',image:'/images/testimonials/huyen-reu.jpg'},
    {name:'Hương Giang',role:'Kỹ sư',quote:'Thật tuyệt khi mình bơi được sau 7 ngày tập luyện thôi nhé.',image:'/images/testimonials/huong-giang.jpg'},
    {name:'Duyên Dương',role:'Designer',quote:'Sau 8 buổi tập luyện đã biết bơi ếch và tự tin đi du lịch, khám phá mọi nơi.',image:'/images/testimonials/duyen-duong.jpg'},
  ],
};
