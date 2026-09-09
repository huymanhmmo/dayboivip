const reviewedAt = '09/09/2026';

export const locationResearch = {
  'hoc-boi-ha-noi': {
    level: 'Đã rà soát ưu tiên',
    reviewedAt,
    summary: 'Ưu tiên các cụm trung tâm, Hai Bà Trưng, Thanh Xuân và Mỹ Đình; tách rõ bể bốn mùa, bể ngoài trời và tổ hợp thể thao.',
    categories: [
      {
        id: 'indoor',
        label: 'Bể trong nhà & bốn mùa',
        description: 'Phù hợp khi cần lịch tập ổn định qua mùa lạnh. Hãy xác nhận nhiệt độ nước và khung giờ bơi tự do.',
        venues: [
          {
            name: 'Bể bơi Tăng Bạt Hổ',
            address: 'Số 3 Tăng Bạt Hổ, phường Phạm Đình Hổ, quận Hai Bà Trưng, Hà Nội',
            area: 'Hai Bà Trưng',
            access: 'Bể công cộng',
            detail: 'Nguồn công khai mô tả đây là bể có hệ thống gia nhiệt. Giờ hoạt động và giá vé cần hỏi lại đơn vị vận hành trước khi đến.',
            sourceLabel: 'Học Bơi Bốn Mùa',
            sourceUrl: 'https://hocboibonmua.vn/be-boi-tang-bat-ho/',
            sourceType: 'Nguồn chuyên ngành',
          },
          {
            name: 'Hapu Swimming Pool',
            address: 'Tầng B1, tòa 21T2 Hapulico Complex, 83 Vũ Trọng Phụng, Thanh Xuân, Hà Nội',
            area: 'Thanh Xuân',
            access: 'Bể thương mại',
            detail: 'Bể trong nhà tại khu phức hợp; phù hợp người cần địa điểm tập quanh năm. Cần xác nhận chính sách khách vãng lai.',
            sourceLabel: 'Review Hồ Bơi',
            sourceUrl: 'https://reviewhoboi.com/hapulico-swimming-pool-ha-noi/',
            sourceType: 'Danh bạ chuyên ngành',
          },
        ],
      },
      {
        id: 'outdoor',
        label: 'Bể ngoài trời',
        description: 'Thường thuận tiện vào mùa nóng; nên kiểm tra mái che, độ sâu và lịch dành riêng cho lớp học.',
        venues: [
          {
            name: 'Bể bơi Đại học Bách khoa Hà Nội',
            address: 'Số 1, ngõ 40 Tạ Quang Bửu, phường Bách Khoa, quận Hai Bà Trưng, Hà Nội',
            area: 'Hai Bà Trưng',
            access: 'Bể trong khuôn viên trường',
            detail: 'Nguồn của Đại học Bách khoa xác nhận hạng mục bể bơi trong khuôn viên; thông tin tiếp nhận khách ngoài cần kiểm tra trực tiếp.',
            sourceLabel: 'Đại học Bách khoa Hà Nội',
            sourceUrl: 'https://www.hust.edu.vn/uploads/sys/quality-assurance/2019/05/be-08-05-04.389355.20928.pdf',
            sourceType: 'Nguồn đơn vị chủ quản',
          },
        ],
      },
      {
        id: 'public',
        label: 'Tổ hợp thể thao công lập',
        description: 'Phù hợp người muốn tìm làn bơi tập luyện hoặc đơn vị có hạ tầng thi đấu; lịch công cộng có thể thay đổi theo sự kiện.',
        venues: [
          {
            name: 'Cung Thể thao dưới nước Mỹ Đình',
            address: 'Đường Lê Đức Thọ, Mỹ Đình 1, Nam Từ Liêm, Hà Nội',
            area: 'Nam Từ Liêm',
            access: 'Tổ hợp thể thao',
            detail: 'Tổ hợp có khu bể trong nhà và ngoài trời. Người học cần kiểm tra lịch mở cửa công cộng vì địa điểm còn phục vụ tập luyện, thi đấu.',
            sourceLabel: 'Địa Điểm 247',
            sourceUrl: 'https://diadiem247.com/ha-noi/cung-the-thao-duoi-nuoc-my-dinh-l368192.html',
            sourceType: 'Danh bạ công khai',
          },
        ],
      },
    ],
  },
  'hoc-boi-tphcm': {
    level: 'Đã rà soát ưu tiên',
    reviewedAt,
    summary: 'Ưu tiên các hồ bơi công cộng lâu năm tại khu trung tâm; bổ sung cảnh báo riêng cho hồ nội khu.',
    categories: [
      {
        id: 'outdoor',
        label: 'Hồ bơi ngoài trời & công cộng',
        description: 'Nhóm dễ tiếp cận nhất cho người học lẻ. Nên xem lịch theo ca và xác nhận khu vực dành cho người mới.',
        venues: [
          {
            name: 'Hồ bơi Yết Kiêu',
            address: 'Số 1 Nguyễn Thị Minh Khai, phường Bến Nghé, Quận 1, TP.HCM',
            area: 'Quận 1',
            access: 'Trung tâm thể thao',
            detail: 'Địa điểm bơi lội lâu năm ở khu trung tâm. Lịch bơi tự do có thể khác lịch tập luyện của câu lạc bộ.',
            sourceLabel: 'Tổng hợp địa điểm Yết Kiêu',
            sourceUrl: 'https://paracelresort.com/ho-boi-yet-kieu-o-dau-dia-chi-gio-mo-cua-gia-ve-va-thong-tin-can-biet/',
            sourceType: 'Nguồn tổng hợp công khai',
          },
          {
            name: 'Hồ bơi Kỳ Đồng',
            address: '40 Kỳ Đồng, Phường 9, Quận 3, TP.HCM',
            area: 'Quận 3',
            access: 'Hồ bơi công cộng',
            detail: 'Vị trí trung tâm, thường được tìm cho nhu cầu bơi tự do và học bơi. Hãy xem đánh giá mới nhất trước khi chọn ca.',
            sourceLabel: 'Foody',
            sourceUrl: 'https://www.foody.vn/ho-chi-minh/ho-boi-ky-dong',
            sourceType: 'Danh bạ công khai',
          },
          {
            name: 'Hồ bơi Lam Sơn',
            address: '242 Trần Bình Trọng, Phường 4, Quận 5, TP.HCM',
            area: 'Quận 5',
            access: 'Hồ bơi công cộng',
            detail: 'Bể ở khu trung tâm Quận 5; cần xác nhận lịch theo ca, độ sâu và khu vực dành cho trẻ em tại quầy vé.',
            sourceLabel: 'Foody',
            sourceUrl: 'https://www.foody.vn/ho-chi-minh/ho-boi-lam-son-tran-binh-trong',
            sourceType: 'Danh bạ công khai',
          },
        ],
      },
      {
        id: 'restricted',
        label: 'Hồ bơi nội khu',
        description: 'Không mặc định mở cho khách ngoài. Chỉ nên chọn sau khi xác nhận quyền sử dụng và quy định của ban quản lý.',
        venues: [
          {
            name: 'Hệ thống hồ bơi Vinhomes Central Park',
            address: '208 Nguyễn Hữu Cảnh, Phường 22, quận Bình Thạnh, TP.HCM',
            area: 'Bình Thạnh',
            access: 'Nội khu cư dân',
            detail: 'Đây là tiện ích nội khu, không phải hồ công cộng. Người học cần xác nhận quyền ra vào và quy định về HLV bên ngoài.',
            sourceLabel: 'Google Maps',
            sourceUrl: 'https://www.google.com/maps/search/?api=1&query=ho%20boi%20Vinhomes%20Central%20Park',
            sourceType: 'Bản đồ công khai',
          },
        ],
      },
    ],
  },
  'hoc-boi-da-nang': {
    level: 'Đã rà soát ưu tiên',
    reviewedAt,
    summary: 'Tập trung cơ sở thể thao quy mô lớn tại Hải Châu và các điểm dạy bơi đang được niêm yết công khai.',
    categories: [
      {
        id: 'public',
        label: 'Bể thi đấu & trung tâm thể thao',
        description: 'Hạ tầng phù hợp tập luyện bài bản; lịch bơi công cộng có thể bị giới hạn khi có giải đấu hoặc lịch vận động viên.',
        venues: [
          {
            name: 'Bể bơi Thành tích cao Đà Nẵng',
            address: 'Đường 2 Tháng 9, phường Hòa Cường Bắc, quận Hải Châu, Đà Nẵng',
            area: 'Hải Châu',
            access: 'Cơ sở thể thao công lập',
            detail: 'Cơ sở do thành phố đầu tư cải tạo để phục vụ tập luyện và tổ chức giải. Hãy xác nhận lịch dành cho người dân trước khi đến.',
            sourceLabel: 'Cổng thông tin TP. Đà Nẵng',
            sourceUrl: 'https://cttdt.danangportal.gov.vn/en/web/dng/w/du-an-cai-tao-be-boi-thanh-tich-cao-da-nang-i',
            sourceType: 'Nguồn cơ quan nhà nước',
          },
        ],
      },
      {
        id: 'outdoor',
        label: 'Bể ngoài trời & điểm dạy bơi',
        description: 'Nên kiểm tra lịch hoạt động theo mùa, mái che và khu vực nước nông cho trẻ em hoặc người mới.',
        venues: [
          {
            name: 'Bể bơi Quân khu 5',
            address: 'Khu liên hợp thể thao số 7 Duy Tân, Hòa Cường Bắc, Hải Châu, Đà Nẵng',
            area: 'Hải Châu',
            access: 'Khu liên hợp thể thao',
            detail: 'Khu liên hợp có hoạt động bơi lội và phục vụ quần chúng theo thông tin công khai. Cần xác nhận cổng vào, ca bơi và vé tại đơn vị vận hành.',
            sourceLabel: 'Báo Thanh Niên',
            sourceUrl: 'https://thanhnien.vn/svd-quan-khu-5-thay-ao-moi-san-sang-don-cac-doi-bong-185241209164146003.htm',
            sourceType: 'Nguồn báo chí',
          },
          {
            name: 'Hồ bơi Paracel',
            address: '119 Nguyễn Hữu Thọ, Hải Châu, Đà Nẵng',
            area: 'Hải Châu',
            access: 'Hồ bơi thương mại',
            detail: 'Địa điểm được các danh sách dạy bơi địa phương nhắc đến; nên kiểm tra listing mới nhất và chính sách nhận học viên.',
            sourceLabel: 'Danh sách địa điểm Đà Nẵng',
            sourceUrl: 'https://tripi.vn/blog/vi/xep-hang/7-trung-tam-day-boi-dang-trai-nghiem-nhat-tai-da-nang-tripi',
            sourceType: 'Nguồn tổng hợp công khai',
          },
        ],
      },
    ],
  },
  'hoc-boi-hai-phong': {
    level: 'Đã rà soát ưu tiên',
    reviewedAt,
    summary: 'Ưu tiên các bể có dấu vết hoạt động thể thao công khai gần đây; tách tiện ích nội khu khỏi bể công cộng.',
    categories: [
      {
        id: 'public',
        label: 'Bể công cộng & thi đấu',
        description: 'Ưu tiên nguồn từ cơ quan địa phương và hoạt động giải đấu gần đây để giảm rủi ro liệt kê cơ sở đã ngừng hoạt động.',
        venues: [
          {
            name: 'Bể bơi Bến Bính',
            address: 'Số 1 Nguyễn Thượng Hiền, phường Minh Khai, quận Hồng Bàng, Hải Phòng',
            area: 'Hồng Bàng',
            access: 'Bể thể thao công lập',
            detail: 'Địa điểm tổ chức giải bơi thiếu niên, nhi đồng thành phố năm 2025. Lịch công cộng cần xác nhận với đơn vị quản lý.',
            sourceLabel: 'Thư viện Hải Phòng / bản tin 07-2025',
            sourceUrl: 'https://www.thuvienhaiphong.org.vn/sites/default/files/BT.T7.pdf',
            sourceType: 'Nguồn cơ quan địa phương',
          },
          {
            name: 'Bể bơi Hồ Sen',
            address: '10 Hồ Sen, quận Lê Chân, Hải Phòng',
            area: 'Lê Chân',
            access: 'Hồ bơi công cộng',
            detail: 'Danh bạ công khai ghi nhận địa chỉ và phản hồi người dùng. Cần đối chiếu đánh giá mới, lịch ca và khu vực trẻ em.',
            sourceLabel: 'Foody',
            sourceUrl: 'https://www.foody.vn/hai-phong/be-boi-ho-sen',
            sourceType: 'Danh bạ công khai',
          },
        ],
      },
      {
        id: 'restricted',
        label: 'Hồ bơi nội khu',
        description: 'Không mặc định mở cho khách ngoài; cần xác nhận quyền ra vào và quy định sử dụng trước khi đặt lớp.',
        venues: [
          {
            name: 'Hệ thống hồ bơi Vinhomes Imperia',
            address: 'Khu đô thị Vinhomes Imperia, Thượng Lý, Hồng Bàng, Hải Phòng',
            area: 'Hồng Bàng',
            access: 'Nội khu cư dân',
            detail: 'Tiện ích thuộc khu đô thị; khả năng tiếp nhận khách ngoài và HLV tự do phụ thuộc quy định của ban quản lý.',
            sourceLabel: 'Google Maps',
            sourceUrl: 'https://www.google.com/maps/search/?api=1&query=ho%20boi%20Vinhomes%20Imperia%20Hai%20Phong',
            sourceType: 'Bản đồ công khai',
          },
        ],
      },
    ],
  },
  'hoc-boi-can-tho': {
    level: 'Đã rà soát ưu tiên',
    reviewedAt,
    summary: 'Ưu tiên các câu lạc bộ có định danh rõ và địa điểm thể thao khu Ninh Kiều, Bình Thủy; ghi rõ hạn chế của hồ nội khu.',
    categories: [
      {
        id: 'club',
        label: 'Câu lạc bộ & trung tâm thể thao',
        description: 'Phù hợp người muốn tìm chương trình học hoặc tập luyện có tổ chức. Hãy hỏi rõ giáo viên phụ trách và sĩ số từng ca.',
        venues: [
          {
            name: 'CLB Bơi lội Ánh Viên / Quân khu 9',
            address: 'Số 9 Nguyễn Đệ, An Hòa, Bình Thủy, Cần Thơ',
            area: 'Bình Thủy',
            access: 'Câu lạc bộ thể thao',
            detail: 'Tên CLB Ánh Viên được công bố từ CLB bơi lội Quân khu 9. Địa chỉ hiện tại cần đối chiếu listing trước khi di chuyển.',
            sourceLabel: 'Tuổi Trẻ Online',
            sourceUrl: 'https://tuoitre.vn/can-tho-co-clb-boi-loi-mang-ten-anh-vien-1001290.htm',
            sourceType: 'Nguồn báo chí',
          },
          {
            name: 'Trung tâm Thể dục Thể thao TP. Cần Thơ',
            address: '3 Lê Lợi, Ninh Kiều, Cần Thơ',
            area: 'Ninh Kiều',
            access: 'Trung tâm thể thao',
            detail: 'Đầu mối thể thao ở khu Cái Khế. Hãy hỏi trung tâm về bể đang khai thác, lịch lớp và hình thức đăng ký hiện tại.',
            sourceLabel: 'Foody',
            sourceUrl: 'https://www.foody.vn/(A(JyI=))/can-tho/beauty/ho-boi-san-van-dong',
            sourceType: 'Danh bạ công khai',
          },
        ],
      },
      {
        id: 'restricted',
        label: 'Hồ bơi nội khu',
        description: 'Có thể giới hạn cho cư dân hoặc theo lượt đăng ký; cần xác nhận trực tiếp trước khi đưa giáo viên bên ngoài vào.',
        venues: [
          {
            name: 'Hồ bơi Nam Long 2 Central Lake',
            address: 'Khu đô thị Nam Long 2 Central Lake, Cái Răng, Cần Thơ',
            area: 'Cái Răng',
            access: 'Tiện ích khu đô thị',
            detail: 'Nguồn dự án công bố hồ bơi hoạt động từ tháng 5/2026 và giới hạn lượt sử dụng. Cần kiểm tra điều kiện dành cho khách ngoài.',
            sourceLabel: 'Nam Long 2 Central Lake',
            sourceUrl: 'https://namlongcentrallakecantho.vn/ho-boi-nam-long-2-central-lake/',
            sourceType: 'Nguồn đơn vị vận hành',
          },
        ],
      },
    ],
  },
};

export const locationRollout = [
  {
    phase: 'Ưu tiên 1',
    status: 'Đã xuất bản bản rà soát đầu tiên',
    locations: ['Hà Nội', 'TP. Hồ Chí Minh', 'Đà Nẵng', 'Hải Phòng', 'Cần Thơ'],
    scope: 'Phân loại bể, địa chỉ, quyền tiếp cận, ghi chú sử dụng và nguồn cho từng địa điểm.',
  },
  {
    phase: 'Ưu tiên 2',
    status: 'Đang lập danh sách nguồn',
    locations: ['Huế', 'Đồng Nai', 'Quảng Ninh', 'Khánh Hòa', 'Bình Định'],
    scope: 'Thành phố du lịch, đô thị vệ tinh và trung tâm tỉnh có nhu cầu học bơi cao.',
  },
  {
    phase: 'Ưu tiên 3',
    status: 'Rà soát theo cụm vùng',
    locations: ['Các tỉnh, thành còn lại'],
    scope: 'Làm lần lượt theo miền; chỉ công bố địa điểm khi có định danh và nguồn công khai đối chiếu được.',
  },
];

export const getLocationResearch = (slug) => locationResearch[slug];

export const countReviewedVenues = (slug) => {
  const research = getLocationResearch(slug);
  return research ? research.categories.reduce((total, category) => total + category.venues.length, 0) : 0;
};
