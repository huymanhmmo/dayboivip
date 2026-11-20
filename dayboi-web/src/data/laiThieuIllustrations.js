/** Generic concept images. These never establish a venue's actual appearance. */
const make = (name, description) => ({
  src: `/images/pool-detail/illustrations/${name}.webp`,
  cardSrc: `/images/pool-detail/illustrations/${name}-card.webp`,
  mobileSrc: `/images/pool-detail/illustrations/${name}-mobile.webp`,
  width: 1600, height: 900, kind: 'illustration', illustration: true,
  label: 'Ảnh minh họa',
  alt: `${description}; không phải ảnh thực tế địa điểm`,
  caption: 'Ảnh minh họa không gian bơi, không xác nhận hình dáng, tiện ích hoặc hiện trạng của địa điểm.',
});
const publicPool = make('community-pool', 'Minh họa hồ bơi dịch vụ ngoài trời');
const gardenPool = make('garden-pool', 'Minh họa hồ bơi trong khuôn viên xanh');
const residentialPool = make('residential-pool', 'Minh họa hồ bơi nội khu chung cư');
const illustrations = {
  'tt-vhtt': publicPool,
  'phuong-nam-resort': gardenPool,
  'vista-riverside': residentialPool,
  'marina-tower': residentialPool,
  'ehome-4': residentialPool,
  'canary-heights': residentialPool,
  'parkview': residentialPool,
  'ho-boi-71': publicPool,
  'minh-quan': publicPool,
};
export const getLaiThieuIllustration = id => illustrations[id];
