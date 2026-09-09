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

const hcmAreaProfiles = {
  'quan-1': {
    name: 'Quận 1', shortName: 'Quận 1',
    nearbyAreas: ['Bến Nghé', 'Đa Kao', 'Nguyễn Thị Minh Khai', 'Nguyễn Bỉnh Khiêm'],
    relatedSlugs: ['quan-3', 'quan-4', 'binh-thanh', 'phu-nhuan'],
    audienceFocus: 'Phù hợp người học ở trung tâm thành phố cần bể thể thao lâu năm, lớp cơ bản hoặc lịch tập gần khu Bến Nghé và Đa Kao.',
    localAdvice: 'Khu trung tâm thường đông vào cuối ngày; nên xác nhận ca bơi tự do, khu vực dành cho người mới và phí gửi xe trước buổi học.',
  },
  'quan-3': {
    name: 'Quận 3', shortName: 'Quận 3',
    nearbyAreas: ['Kỳ Đồng', 'Võ Văn Tần', 'Bà Huyện Thanh Quan', 'Cách Mạng Tháng Tám'],
    relatedSlugs: ['quan-1', 'quan-10', 'phu-nhuan', 'quan-4'],
    audienceFocus: 'Phù hợp học viên nội đô muốn so sánh bể thể thao công cộng với bể khách sạn quanh Kỳ Đồng, Võ Văn Tần và Bà Huyện Thanh Quan.',
    localAdvice: 'Bể công cộng và bể khách sạn có chính sách khách ngoài rất khác nhau; hãy hỏi rõ vé vào cửa, ca hoạt động và điều kiện thuê HLV.',
  },
  'quan-10': {
    name: 'Quận 10', shortName: 'Quận 10',
    nearbyAreas: ['Đồng Nai', 'Thành Thái', 'Lê Thị Riêng', 'Cách Mạng Tháng Tám'],
    relatedSlugs: ['quan-3', 'tan-binh', 'phu-nhuan', 'go-vap'],
    audienceFocus: 'Phù hợp học sinh, sinh viên và gia đình cần địa điểm dễ tiếp cận quanh Đồng Nai, Thành Thái và Công viên Lê Thị Riêng.',
    localAdvice: 'Nên đối chiếu lịch lớp với ca bơi công cộng vì một số khung giờ dành cho đội tuyển hoặc chương trình học sinh.',
  },
  'phu-nhuan': {
    name: 'Phú Nhuận', shortName: 'Phú Nhuận',
    nearbyAreas: ['Rạch Miễu', 'Hoa Phượng', 'Hoàng Văn Thụ', 'Nguyễn Văn Trỗi'],
    relatedSlugs: ['quan-3', 'tan-binh', 'go-vap', 'binh-thanh'],
    audienceFocus: 'Phù hợp gia đình ở khu Rạch Miễu và trục Hoàng Văn Thụ cần lớp trẻ em, kỹ năng an toàn nước hoặc bể tập luyện thường xuyên.',
    localAdvice: 'Các trung tâm thể thao có nhiều hoạt động song song; hãy xác nhận đúng hồ, đúng cổng vào và thời gian làn bơi dành cho lớp học.',
  },
  'tan-binh': {
    name: 'Tân Bình', shortName: 'Tân Bình',
    nearbyAreas: ['Cộng Hòa', 'Xuân Hồng', 'Hoàng Văn Thụ', 'Bàu Cát'],
    relatedSlugs: ['phu-nhuan', 'quan-10', 'go-vap', 'quan-12'],
    audienceFocus: 'Phù hợp người học gần sân bay và các trục Cộng Hòa, Hoàng Văn Thụ, Xuân Hồng cần lớp linh hoạt cho trẻ em hoặc người lớn.',
    localAdvice: 'Hai tên gọi Cộng Hòa và Triển lãm Tân Bình dễ gây nhầm; cần đối chiếu địa chỉ, cổng vào và số liên hệ trước khi di chuyển.',
  },
  'binh-thanh': {
    name: 'Bình Thạnh', shortName: 'Bình Thạnh',
    nearbyAreas: ['Nguyễn Hữu Cảnh', 'Nơ Trang Long', 'Văn Thánh', 'Hàng Xanh'],
    relatedSlugs: ['quan-1', 'phu-nhuan', 'thu-duc', 'go-vap'],
    audienceFocus: 'Phù hợp người cần bể dài để rèn kỹ thuật hoặc lớp phổ thông quanh Nguyễn Hữu Cảnh, Nơ Trang Long và Hàng Xanh.',
    localAdvice: 'Hãy hỏi riêng vé bơi, lịch đóng cửa bảo trì và học phí đã bao gồm vé hay chưa; thông tin giá cũ trên bài nguồn chỉ dùng để tham khảo.',
  },
  'go-vap': {
    name: 'Gò Vấp', shortName: 'Gò Vấp',
    nearbyAreas: ['Thống Nhất', 'Lê Văn Thọ', 'Quang Trung', 'Phan Văn Trị'],
    relatedSlugs: ['phu-nhuan', 'tan-binh', 'quan-12', 'binh-thanh'],
    audienceFocus: 'Phù hợp gia đình khu Bắc thành phố muốn tìm bể ngoài trời, lớp nhóm nhỏ hoặc HLV kèm riêng gần Thống Nhất và Lê Văn Thọ.',
    localAdvice: 'Đường nội quận đông vào giờ tan tầm; nên chọn bể theo quãng đường thực tế và hỏi trước sĩ số, vé bể cùng chính sách học bù.',
  },
  'thu-duc': {
    name: 'Thủ Đức', shortName: 'Thủ Đức',
    nearbyAreas: ['Thảo Điền', 'Phước Long B', 'Linh Chiểu', 'Kha Vạn Cân'],
    relatedSlugs: ['binh-thanh', 'quan-1', 'quan-12', 'binh-duong'],
    audienceFocus: 'Phù hợp gia đình cần chương trình bơi sinh tồn cho trẻ nhỏ, lộ trình kỹ thuật hoặc lớp phổ thông tại các cụm Thảo Điền và Linh Chiểu.',
    localAdvice: 'Thủ Đức có diện tích lớn; hãy chọn theo cụm dân cư thay vì chỉ theo tên thành phố và xác nhận quyền vào bể trường học hoặc nội khu.',
  },
  'quan-4': {
    name: 'Quận 4', shortName: 'Quận 4',
    nearbyAreas: ['Khánh Hội', 'Vân Đồn', 'Vĩnh Hội', 'Bến Vân Đồn'],
    relatedSlugs: ['quan-1', 'quan-3', 'binh-thanh', 'phu-nhuan'],
    audienceFocus: 'Phù hợp cư dân khu Khánh Hội, Vân Đồn và người làm việc tại trung tâm cần địa điểm gần nhà cho lớp cơ bản hoặc tập kỹ thuật.',
    localAdvice: 'Tên Hồ Vân Đồn và cơ sở Khánh Hội có thể được dùng không thống nhất; cần đối chiếu đúng địa chỉ và đầu mối quản lý.',
  },
  'quan-12': {
    name: 'Quận 12', shortName: 'Quận 12',
    nearbyAreas: ['Thạnh Lộc', 'Tô Ký', 'Trung Mỹ Tây', 'Hà Huy Giáp'],
    relatedSlugs: ['go-vap', 'tan-binh', 'hoc-mon', 'thu-duc'],
    audienceFocus: 'Phù hợp gia đình phía Bắc thành phố cần bể giải trí kết hợp lớp trẻ em hoặc địa điểm phổ thông quanh Thạnh Lộc và Tô Ký.',
    localAdvice: 'Khoảng cách giữa các phường khá xa; nên kiểm tra tuyến di chuyển, giờ đông khách và độ sâu khu tập trước khi chọn lớp.',
  },
  'hoc-mon': {
    name: 'Hóc Môn', shortName: 'Hóc Môn',
    nearbyAreas: ['Thị trấn Hóc Môn', 'Tân Hiệp', 'Đỗ Văn Dậy', 'Lê Lợi'],
    relatedSlugs: ['quan-12', 'tan-binh', 'go-vap', 'binh-duong'],
    audienceFocus: 'Phù hợp học sinh và gia đình ngoại thành cần lớp kỹ năng an toàn nước, bơi sinh tồn hoặc địa điểm tập gần thị trấn và Tân Hiệp.',
    localAdvice: 'Ưu tiên xác nhận lịch mở theo mùa và ca dành cho chương trình thiếu nhi; một số bể có thể giới hạn khách ngoài theo từng đợt.',
  },
  'binh-duong': {
    name: 'Bình Dương', shortName: 'Bình Dương', seoPlace: 'Bình Dương',
    nearbyAreas: ['Thuận An', 'Dĩ An', 'An Thạnh', 'An Phú'],
    relatedSlugs: ['thu-duc', 'quan-12', 'hoc-mon', 'go-vap'],
    audienceFocus: 'Phù hợp gia đình tại khu vực Bình Dương cũ, nhất là Thuận An và Dĩ An, cần lớp phổ cập bơi hoặc kỹ năng an toàn nước.',
    localAdvice: 'Trang dùng tên Bình Dương quen thuộc để tra cứu trong phạm vi TP.HCM sau sắp xếp; hãy kiểm tra địa chỉ phường và đơn vị quản lý hiện hành.',
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

const areaGroups = [
  { parentSlug: 'hoc-boi-ha-noi', seoParentName: 'Hà Nội', profiles: areaProfiles },
  { parentSlug: 'hoc-boi-tphcm', seoParentName: 'TP.HCM', profiles: hcmAreaProfiles },
];

export const allLocationAreas = areaGroups.flatMap(({ parentSlug, seoParentName, profiles }) => {
  const parent = locations.find((location) => location.slug === parentSlug);
  const research = getLocationResearch(parentSlug);

  return (research?.categories || [])
    .filter((category) => profiles[category.id])
    .map((category) => {
      const profile = profiles[category.id];
      return {
        ...profile,
        slug: category.id,
        parentSlug,
        parentName: parent?.name || seoParentName,
        seoParentName,
        seoPlace: profile.seoPlace || `${profile.name}, ${seoParentName}`,
        parentImage: parent?.image || '/images/classes/lop-hoc-boi-ha-noi.jpg',
        category,
        reviewedAt: research.reviewedAt,
        isPublishable: passesQualityGate(category),
        url: `/${parentSlug}/${category.id}/`,
      };
    });
});

export const publishedLocationAreas = allLocationAreas.filter((area) => area.isPublishable);

export const getPublishedArea = (parentLocation, areaSlug) => publishedLocationAreas.find(
  (area) => area.parentSlug === parentLocation && area.slug === areaSlug,
);

export const getPublishedAreaUrl = (parentLocation, areaSlug) => getPublishedArea(parentLocation, areaSlug)?.url;
