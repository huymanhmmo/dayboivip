import { locations } from './locations.js';
import { getLocationResearch } from './locationResearch.js';

const areaProfiles = {
  'nam-tu-liem': {
    name: 'Nam Từ Liêm',
    shortName: 'Nam Từ Liêm',
    nearbyAreas: ['Mỹ Đình', 'Mễ Trì', 'Cầu Diễn', 'Phú Đô'],
    audienceFocus: 'Phù hợp người cần bể tiêu chuẩn, lớp kỹ thuật hoặc lịch học linh hoạt quanh khu Mỹ Đình.',
    localAdvice: 'Ưu tiên kiểm tra lịch thuê làn tại Cung Thể thao Dưới nước Mỹ Đình; với bể thương mại, hỏi rõ vé bể đã nằm trong học phí hay chưa.',
  },
  'tay-ho': {
    name: 'Tây Hồ',
    shortName: 'Tây Hồ',
    nearbyAreas: ['Thụy Khuê', 'Quảng An', 'Xuân La', 'Nhật Tân'],
    audienceFocus: 'Phù hợp gia đình cần bể trong nhà, người lớn học kèm riêng và người muốn duy trì lịch bơi quanh năm.',
    localAdvice: 'Các bể khách sạn và bể thương mại tại Tây Hồ có chính sách khách ngoài khác nhau; nên xác nhận quyền vào bể trước khi chốt lịch với giáo viên.',
  },
  'hoang-mai': {
    name: 'Hoàng Mai',
    shortName: 'Hoàng Mai',
    nearbyAreas: ['Linh Đàm', 'Định Công', 'Tam Trinh', 'Đại Kim'],
    audienceFocus: 'Phù hợp trẻ em, người mới học và cư dân cần bể bốn mùa gần các khu đô thị phía Nam Hà Nội.',
    localAdvice: 'Hoàng Mai có nhiều bể nội khu và bể thương mại; hãy hỏi rõ điều kiện khách ngoài, độ sâu khu tập và khung giờ đông học viên.',
  },
  'long-bien': {
    name: 'Long Biên',
    shortName: 'Long Biên',
    nearbyAreas: ['Việt Hưng', 'Đức Giang', 'Mai Phúc', 'Ngọc Lâm'],
    audienceFocus: 'Phù hợp gia đình phía Đông Hà Nội cần bể nước ấm, lớp trẻ em hoặc lịch học gần khu Việt Hưng.',
    localAdvice: 'Nhiều bể tại Long Biên nằm trong khu dân cư; cần xác nhận thẻ cư dân, phí khách ngoài và quy định giáo viên trước khi đăng ký.',
  },
  'gia-lam': {
    name: 'Gia Lâm',
    shortName: 'Gia Lâm',
    nearbyAreas: ['Vinhomes Ocean Park', 'Đa Tốn', 'Trâu Quỳ', 'Đặng Xá'],
    audienceFocus: 'Phù hợp gia đình ở phía Đông Hà Nội cần lớp trẻ em, bơi sinh tồn hoặc bể bốn mùa quanh Ocean Park và Đặng Xá.',
    localAdvice: 'Tách rõ trường bơi chuyên biệt Aqua-Tots với bể tiện ích cư dân Ocean Park. Mỗi nơi có đối tượng học, quyền vào bể và cách đăng ký khác nhau.',
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

