import { locations } from './locations.js';
import { getLocationResearch } from './locationResearch.js';

const areaProfiles = {
  'ba-dinh': {
    name: 'Ba Đình',
    shortName: 'Ba Đình',
    nearbyAreas: ['Kim Mã', 'Vạn Bảo', 'Liễu Giai', 'Quán Thánh'],
    relatedSlugs: ['tay-ho', 'dong-da', 'cau-giay', 'hai-ba-trung'],
    audienceFocus: 'Phù hợp người cần bể bốn mùa nội đô, bể 50m hoặc lớp kèm riêng gần các trục Kim Mã, Đội Cấn và Quán Thánh.',
    localAdvice: 'So sánh kỹ bể công lập với bể khách sạn: giá vé, khung giờ mở cho khách ngoài và quy định thuê làn có thể rất khác nhau.',
  },
  'hai-ba-trung': {
    name: 'Hai Bà Trưng',
    shortName: 'Hai Bà Trưng',
    nearbyAreas: ['Tăng Bạt Hổ', 'Bách Khoa', 'Minh Khai', 'Vĩnh Tuy'],
    relatedSlugs: ['hoang-mai', 'dong-da', 'ba-dinh', 'long-bien'],
    audienceFocus: 'Phù hợp sinh viên, gia đình nội đô và cư dân Times City cần lớp cơ bản, sinh tồn hoặc nâng kỹ thuật.',
    localAdvice: 'Bể trường học và bể nội khu thường có ca phục vụ riêng; hãy xác nhận quyền vào bể, điểm đón và vé bơi trước khi chốt giáo viên.',
  },
  'dong-da': {
    name: 'Đống Đa',
    shortName: 'Đống Đa',
    nearbyAreas: ['Hoàng Cầu', 'Nguyễn Chí Thanh', 'Thái Thịnh', 'Láng Thượng'],
    relatedSlugs: ['ba-dinh', 'thanh-xuan', 'cau-giay', 'hai-ba-trung'],
    audienceFocus: 'Phù hợp gia đình có trẻ nhỏ, người cần bể nước ấm và học viên muốn tập quanh các trục Hoàng Cầu, Láng, Thái Thịnh.',
    localAdvice: 'Trường bơi chuyên biệt và bể khách sạn có cách tính học phí khác nhau; cần hỏi rõ học phí đã gồm vé, đồ dùng và buổi đánh giá đầu vào chưa.',
  },
  'thanh-xuan': {
    name: 'Thanh Xuân',
    shortName: 'Thanh Xuân',
    nearbyAreas: ['Nhân Chính', 'Nguyễn Tuân', 'Vũ Trọng Phụng', 'Lê Văn Lương'],
    relatedSlugs: ['dong-da', 'cau-giay', 'ha-dong', 'nam-tu-liem'],
    audienceFocus: 'Phù hợp người muốn học quanh năm tại bể nước ấm hoặc nước mặn trong khu Thanh Xuân và Trung Hòa Nhân Chính.',
    localAdvice: 'Các bể nằm trong tổ hợp chung cư thường cần gửi xe và đi thang máy riêng; nên hỏi lối vào, phí vé và giờ cao điểm trước buổi đầu.',
  },
  'cau-giay': {
    name: 'Cầu Giấy',
    shortName: 'Cầu Giấy',
    nearbyAreas: ['Dịch Vọng', 'Tôn Thất Thuyết', 'Trung Kính', 'Quan Hoa'],
    relatedSlugs: ['nam-tu-liem', 'bac-tu-liem', 'thanh-xuan', 'ba-dinh'],
    audienceFocus: 'Phù hợp trẻ nhỏ học theo lộ trình quốc tế và người lớn cần bể bốn mùa gần khu văn phòng phía Tây Hà Nội.',
    localAdvice: 'Với lớp trẻ em, so sánh tỷ lệ học viên trên HLV và chính sách học bù; với lớp người lớn, ưu tiên khung giờ ít đông để có đủ không gian tập.',
  },
  'nam-tu-liem': {
    name: 'Nam Từ Liêm',
    shortName: 'Nam Từ Liêm',
    nearbyAreas: ['Mỹ Đình', 'Mễ Trì', 'Cầu Diễn', 'Phú Đô'],
    relatedSlugs: ['cau-giay', 'bac-tu-liem', 'ha-dong', 'thanh-xuan'],
    audienceFocus: 'Phù hợp người cần bể tiêu chuẩn, lớp kỹ thuật hoặc lịch học linh hoạt quanh khu Mỹ Đình.',
    localAdvice: 'Ưu tiên kiểm tra lịch thuê làn tại Cung Thể thao Dưới nước Mỹ Đình; với bể thương mại, hỏi rõ vé bể đã nằm trong học phí hay chưa.',
  },
  'tay-ho': {
    name: 'Tây Hồ',
    shortName: 'Tây Hồ',
    nearbyAreas: ['Thụy Khuê', 'Quảng An', 'Xuân La', 'Nhật Tân'],
    relatedSlugs: ['ba-dinh', 'bac-tu-liem', 'cau-giay', 'long-bien'],
    audienceFocus: 'Phù hợp gia đình cần bể trong nhà, người lớn học kèm riêng và người muốn duy trì lịch bơi quanh năm.',
    localAdvice: 'Các bể khách sạn và bể thương mại tại Tây Hồ có chính sách khách ngoài khác nhau; nên xác nhận quyền vào bể trước khi chốt lịch với giáo viên.',
  },
  'hoang-mai': {
    name: 'Hoàng Mai',
    shortName: 'Hoàng Mai',
    nearbyAreas: ['Linh Đàm', 'Định Công', 'Tam Trinh', 'Đại Kim'],
    relatedSlugs: ['thanh-tri', 'hai-ba-trung', 'thanh-xuan', 'ha-dong'],
    audienceFocus: 'Phù hợp trẻ em, người mới học và cư dân cần bể bốn mùa gần các khu đô thị phía Nam Hà Nội.',
    localAdvice: 'Hoàng Mai có nhiều bể nội khu và bể thương mại; hãy hỏi rõ điều kiện khách ngoài, độ sâu khu tập và khung giờ đông học viên.',
  },
  'long-bien': {
    name: 'Long Biên',
    shortName: 'Long Biên',
    nearbyAreas: ['Việt Hưng', 'Đức Giang', 'Mai Phúc', 'Ngọc Lâm'],
    relatedSlugs: ['gia-lam', 'hai-ba-trung', 'ba-dinh', 'hoang-mai'],
    audienceFocus: 'Phù hợp gia đình phía Đông Hà Nội cần bể nước ấm, lớp trẻ em hoặc lịch học gần khu Việt Hưng.',
    localAdvice: 'Nhiều bể tại Long Biên nằm trong khu dân cư; cần xác nhận thẻ cư dân, phí khách ngoài và quy định giáo viên trước khi đăng ký.',
  },
  'gia-lam': {
    name: 'Gia Lâm',
    shortName: 'Gia Lâm',
    nearbyAreas: ['Vinhomes Ocean Park', 'Đa Tốn', 'Trâu Quỳ', 'Đặng Xá'],
    relatedSlugs: ['long-bien', 'hai-ba-trung', 'hoang-mai', 'thanh-tri'],
    audienceFocus: 'Phù hợp gia đình ở phía Đông Hà Nội cần lớp trẻ em, bơi sinh tồn hoặc bể bốn mùa quanh Ocean Park và Đặng Xá.',
    localAdvice: 'Tách rõ trường bơi chuyên biệt Aqua-Tots với bể tiện ích cư dân Ocean Park. Mỗi nơi có đối tượng học, quyền vào bể và cách đăng ký khác nhau.',
  },
  'bac-tu-liem': {
    name: 'Bắc Từ Liêm',
    shortName: 'Bắc Từ Liêm',
    nearbyAreas: ['Đức Diễn', 'Cổ Nhuế', 'Phạm Văn Đồng', 'Xuân Tảo'],
    relatedSlugs: ['cau-giay', 'nam-tu-liem', 'tay-ho', 'ha-dong'],
    audienceFocus: 'Phù hợp gia đình phía Tây Bắc Hà Nội cần trường bơi trẻ em, bể bốn mùa công cộng hoặc lớp gần trục Phạm Văn Đồng.',
    localAdvice: 'Một số địa điểm nằm trong khu đô thị hoặc khu thể thao; nên xác nhận điều kiện khách ngoài, chỗ gửi xe và ca bơi tự do trước khi đi.',
  },
  'thanh-tri': {
    name: 'Thanh Trì',
    shortName: 'Thanh Trì',
    nearbyAreas: ['Ngọc Hồi', 'Tân Triều', 'Kim Giang', 'Thanh Liệt'],
    relatedSlugs: ['hoang-mai', 'ha-dong', 'thanh-xuan', 'gia-lam'],
    audienceFocus: 'Phù hợp gia đình phía Nam Hà Nội cần lớp phổ cập an toàn nước, bể bốn mùa và lịch học gần Ngọc Hồi hoặc Tân Triều.',
    localAdvice: 'Hãy đối chiếu đúng cơ sở Green Pool Thanh Trì và Housinco Tân Triều; hai bể có đầu mối đăng ký, quyền tiếp cận và chương trình khác nhau.',
  },
  'ha-dong': {
    name: 'Hà Đông',
    shortName: 'Hà Đông',
    nearbyAreas: ['Mộ Lao', 'Văn Quán', 'Kiến Hưng', 'Thanh Hà'],
    relatedSlugs: ['thanh-xuan', 'nam-tu-liem', 'thanh-tri', 'cau-giay'],
    audienceFocus: 'Phù hợp cư dân phía Tây Nam cần bể bốn mùa, bể 50m hoặc lớp kèm riêng quanh Mộ Lao, Văn Quán và Thanh Hà.',
    localAdvice: 'Bể nội khu, bể thương mại và bể học viện có quy định vào cửa khác nhau; cần xác nhận vé, ca mở cửa và thủ tục đón học viên.',
  },
};

const hasSpecificSource = (sourceUrl) => {
  if (!sourceUrl) return false;
  try {
    const url = new URL(sourceUrl);
    return url.protocol === 'https:' && url.pathname !== '/' && url.hostname !== 'dayboi.vip';
  } catch {
    return false;
  }
};

const passesQualityGate = (category) => category.venues.length >= 2
  && category.venues.every((venue) => (
    hasSpecificSource(venue.venueContact?.exactSourceUrl)
    && venue.instructors?.length > 0
    && venue.instructors.every((instructor) => hasSpecificSource(instructor.exactSourceUrl))
  ));

const parentSlug = 'hoc-boi-ha-noi';
const parent = locations.find((location) => location.slug === parentSlug);
const research = getLocationResearch(parentSlug);

export const allLocationAreas = (research?.categories || [])
  .filter((category) => areaProfiles[category.id])
  .map((category) => ({
    ...areaProfiles[category.id],
    slug: category.id,
    parentSlug,
    parentName: parent?.name || 'Hà Nội',
    parentImage: parent?.image || '/images/classes/lop-hoc-boi-ha-noi.jpg',
    category,
    reviewedAt: research.reviewedAt,
    isPublishable: passesQualityGate(category),
    url: `/${parentSlug}/${category.id}/`,
  }));

export const publishedLocationAreas = allLocationAreas.filter((area) => area.isPublishable);

export const getPublishedArea = (parentLocation, areaSlug) => publishedLocationAreas.find(
  (area) => area.parentSlug === parentLocation && area.slug === areaSlug,
);

export const getPublishedAreaUrl = (parentLocation, areaSlug) => getPublishedArea(parentLocation, areaSlug)?.url;
