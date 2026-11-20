/** Content supplied in docs/ke-hoach-tuyen-sinh-hoc-boi-lai-thieu-tphcm.md, 20/11/2026.
 * Missing photos are deliberately null. Do not substitute a different venue's photo.
 */
const imageRoot = '/images/landing/lai-thieu';
const source = 'https://dayboi.vip/hoc-boi-tphcm/lai-thieu/';
const entries = [
  {
    id: 'nhat-an', name: 'Hồ bơi Nhật An', type: 'public', zone: 'trung-tam',
    address: 'A86, khu phố Bình Đức, P. Lái Thiêu, TP.HCM',
    oldAddress: 'P. Lái Thiêu, TP. Thuận An, Bình Dương (cũ)',
    image: null, imageAlt: '', tag: 'Hồ bơi dịch vụ',
    services: 'Tư vấn lớp trẻ em, người lớn và học bơi kèm riêng.',
    detail: 'Cần xác nhận giờ mở cửa, giá vé và khu vực tập với đơn vị vận hành trước khi đến.',
  },
  {
    id: 'duy-anh', name: 'Hồ bơi Duy Anh', type: 'public', zone: 'trung-tam',
    address: '249, khu phố Nguyễn Trãi, P. Lái Thiêu, TP.HCM',
    oldAddress: 'P. Lái Thiêu, TP. Thuận An, Bình Dương (cũ)',
    image: `${imageRoot}/pool-duy-anh.webp`, imageAlt: 'Không gian hồ bơi Duy Anh trong tư liệu khu vực Lái Thiêu', tag: 'Hồ bơi dịch vụ',
    services: 'Lựa chọn cho người mới bắt đầu và lớp học kèm riêng.',
    detail: 'Dữ liệu kế hoạch ghi nhận thêm cơ sở tại 505/3B KP Thạnh Bình, P. Thuận An. Hãy xác nhận đúng cơ sở và lịch học với HLV trước khi đến.',
  },
  {
    id: 'emerald-golf-view', name: 'The Emerald Golf View', type: 'residential', zone: 'quoc-lo-13',
    address: 'Mặt tiền Quốc lộ 13, P. Lái Thiêu, TP.HCM',
    oldAddress: 'Đại lộ Bình Dương, P. Lái Thiêu, TP. Thuận An (cũ)',
    image: `${imageRoot}/pool-emerald.webp`, imageAlt: 'Hồ bơi tầng 6 tại The Emerald Golf View', tag: 'Nội khu · Tầng 6',
    services: 'Hồ người lớn, khu trẻ em và Jacuzzi; tư vấn học cho cư dân.',
    detail: 'Hồ nội khu cư dân. Chỉ xếp lớp khi học viên có quyền sử dụng hồ và ban quản lý chấp thuận HLV; không phải hồ bán vé công cộng.',
  },
  {
    id: 'opal-skyline', name: 'Opal Skyline', type: 'residential', zone: 'trung-tam',
    address: 'Đường Nguyễn Văn Tiết, P. Lái Thiêu, TP.HCM',
    oldAddress: 'Nguyễn Văn Tiết, P. Lái Thiêu, TP. Thuận An (cũ)',
    image: `${imageRoot}/pool-opal.webp`, imageAlt: 'Hồ bơi giữa các tòa nhà trong dự án Opal Skyline', tag: 'Nội khu · Tầng 4',
    services: 'Hồ bơi tràn bờ và khu trẻ em trong tiện ích nội khu.',
    detail: 'Dành cho cư dân hoặc người được phép sử dụng hồ. Cần đăng ký và được ban quản lý đồng ý trước khi đưa HLV vào dạy.',
  },
  {
    id: 'the-rivana', name: 'The Rivana', type: 'residential', zone: 'quoc-lo-13',
    address: 'Quốc lộ 13 giao Vĩnh Phú 29, khu vực Lái Thiêu – Bình Hòa, TP.HCM',
    oldAddress: 'P. Vĩnh Phú, TP. Thuận An, Bình Dương (cũ)',
    image: `${imageRoot}/pool-rivana.webp`, imageAlt: 'Hồ bơi người lớn trong nội khu The Rivana', tag: 'Hồ nội khu cư dân',
    services: 'Có hồ người lớn và hồ trẻ em riêng trong khu tiện ích.',
    detail: 'Dự án thuộc khu vực giáp ranh; cần xác nhận địa chỉ tiếp nhận hiện tại. Chỉ học khi có quyền vào hồ và ban quản lý cho phép HLV hướng dẫn.',
  },
  {
    id: 'tt-vhtt', name: 'Hồ bơi TT VHTT Lái Thiêu', type: 'public', zone: 'trung-tam',
    address: 'Đường Nguyễn Trãi, P. Lái Thiêu, TP.HCM',
    oldAddress: 'P. Lái Thiêu, TP. Thuận An, Bình Dương (cũ)',
    image: null, imageAlt: '', tag: 'Hồ bơi công cộng',
    services: 'Tham khảo lớp cơ bản và kèm riêng tại khu trung tâm Lái Thiêu.',
    detail: 'Liên hệ đơn vị vận hành để xác nhận giờ mở cửa, vé bơi và điều kiện tổ chức lớp. Học phí giảng dạy được tư vấn riêng, chưa gồm vé hồ.',
  },
];

export const laiThieuPools = entries.map((pool) => ({
  ...pool,
  provinceSlug: 'hoc-boi-tphcm', targetCommune: 'lai-thieu',
  access: pool.type === 'residential' ? 'Hồ nội khu, cần quyền sử dụng và sự đồng ý của BQL' : 'Hồ dịch vụ / công cộng, xác nhận vé tại quầy',
  area: pool.zone === 'quoc-lo-13' ? 'Trục Quốc lộ 13' : 'Trung tâm Lái Thiêu',
  reviewedAt: '20/11/2026',
  venueContact: {
    role: 'Đơn vị vận hành hồ bơi', name: pool.name, phone: '',
    note: pool.detail, exactSourceUrl: `${source}#${pool.id}`, sourceTitle: `Thông tin ${pool.name}`,
  },
  instructors: [{
    unitName: 'Swim For Life Việt Nam', contactPerson: 'Thầy Lê Văn Thông — Kiện tướng Bơi lội',
    phone: '0986.456.678', courseTypes: 'Tư vấn lớp trẻ em, người lớn, người sợ nước và kèm riêng; xác nhận lịch và quyền sử dụng hồ trước khi xếp lớp.',
    exactSourceUrl: `${source}#huan-luyen-vien`, sourceTitle: 'HLV phụ trách tư vấn khu vực Lái Thiêu',
  }],
}));
