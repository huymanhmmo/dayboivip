import { hcmResearch } from './locationResearchHcm.js';

const reviewedAt = '09/09/2026';

export const locationResearch = {
  'hoc-boi-ha-noi': {
    level: 'Đã nghiên cứu chuyên sâu',
    reviewedAt,
    summary: 'Danh sách Hà Nội được đối chiếu theo từng cụm khu vực, tách riêng địa điểm bơi và đơn vị tổ chức lớp học. Chỉ những dịch vụ được nguồn công khai nêu rõ mới được ghi là có lớp.',
    groupingNote: 'Hà Nội vận hành 126 xã, phường mới từ 01/07/2025. Các nhãn Ba Đình, Đống Đa, Thanh Xuân… dưới đây là cụm khu vực quen dùng theo địa giới quận/huyện cũ, giúp người dùng định vị và tìm kiếm dễ hơn; địa chỉ hiện hành cần kiểm tra lại với đơn vị.',
    categories: [
      {
        id: 'ba-dinh',
        label: 'Khu vực Ba Đình',
        description: 'Cụm bể bốn mùa quanh Vạn Bảo, Vạn Phúc và Quán Thánh; nguồn hiện có chủ yếu từ đơn vị đang tổ chức lớp tại các bể này.',
        venues: [
          {
            name: 'Bể bơi bốn mùa Vạn Bảo',
            address: '73 Vạn Bảo, khu vực Ba Đình, Hà Nội',
            area: 'Vạn Bảo', access: 'Bể bốn mùa', entityType: 'Địa điểm bơi', environment: 'Trong nhà',
            services: 'Có lớp do Trung tâm Bơi lội Hà Nội / Bơi Cấp Tốc công khai tổ chức tại cơ sở.',
            detail: 'Nguồn của đơn vị dạy xác nhận đây là một cơ sở giảng dạy; chưa tìm thấy trang vận hành độc lập của bể.',
            missing: 'Giờ bơi tự do, giá vé và đầu mối vận hành bể chưa được xác minh độc lập.',
            sourceLabel: 'Bơi Cấp Tốc – trang liên hệ', sourceUrl: 'https://boicaptoc.vn/lien-he.html', sourceType: 'Website đơn vị tổ chức lớp',
          },
          {
            name: 'Bể bơi bốn mùa Khách sạn La Thành',
            address: '226 Vạn Phúc, khu vực Ba Đình, Hà Nội',
            area: 'Vạn Phúc', access: 'Bể khách sạn', entityType: 'Địa điểm bơi', environment: 'Trong nhà',
            services: 'Có lớp do Trung tâm Bơi lội Hà Nội / Bơi Cấp Tốc công khai tổ chức tại cơ sở.',
            detail: 'Nguồn đơn vị dạy ghi rõ cơ sở La Thành và hình thức bể bốn mùa.',
            missing: 'Cần xác nhận việc nhận khách ngoài, vé bể và lịch từng ngày.',
            sourceLabel: 'Bơi Cấp Tốc – giới thiệu', sourceUrl: 'https://boicaptoc.vn/gioi-thieu.html', sourceType: 'Website đơn vị tổ chức lớp',
          },
          {
            name: 'Bể Quán Thánh',
            address: '115 Quán Thánh, khu vực Ba Đình, Hà Nội',
            area: 'Quán Thánh', access: 'Cơ sở thể thao', entityType: 'Địa điểm bơi', environment: 'Chưa xác minh',
            services: 'Nguồn công khai nêu CLB bơi nâng cao GST hoạt động tại đây.',
            detail: 'Chỉ xác nhận được mối liên hệ với CLB trên website đơn vị dạy; không mặc định bể có lớp cho mọi đối tượng.',
            missing: 'Chưa xác minh lịch công cộng, điều kiện đầu vào của CLB và trạng thái vận hành hiện tại.',
            sourceLabel: 'Bơi Cấp Tốc – trang liên hệ', sourceUrl: 'https://boicaptoc.vn/lien-he.html', sourceType: 'Website đơn vị tổ chức lớp',
          },
        ],
      },
      {
        id: 'hai-ba-trung',
        label: 'Khu vực Hai Bà Trưng',
        description: 'Hai bể lâu năm trong khu vực nội đô; một nguồn chuyên ngành cho Tăng Bạt Hổ và tài liệu chính thức của Đại học Bách khoa cho bể trong trường.',
        venues: [
          {
            name: 'Bể bơi Tăng Bạt Hổ',
            address: 'Số 3 Tăng Bạt Hổ, khu vực Hai Bà Trưng, Hà Nội',
            area: 'Tăng Bạt Hổ', access: 'Bể công cộng', entityType: 'Địa điểm bơi', environment: 'Bốn mùa / có gia nhiệt',
            services: 'Nguồn chuyên ngành công khai cả hoạt động dạy bơi tại bể.',
            detail: 'Thông tin tên, địa chỉ và hệ thống gia nhiệt được một trang chuyên về dạy bơi mô tả.',
            missing: 'Giá, giờ và đơn vị vận hành cần xác nhận tại thời điểm sử dụng.',
            sourceLabel: 'Học Bơi Bốn Mùa', sourceUrl: 'https://hocboibonmua.vn/be-boi-tang-bat-ho/', sourceType: 'Nguồn chuyên ngành',
          },
          {
            name: 'Bể bơi Đại học Bách khoa Hà Nội',
            address: 'Số 1, ngõ 40 Tạ Quang Bửu, khu vực Hai Bà Trưng, Hà Nội',
            area: 'Bách Khoa', access: 'Khuôn viên trường', entityType: 'Địa điểm bơi', environment: 'Ngoài trời',
            services: 'Tài liệu trường xác nhận hạng mục bể bơi; chưa có bằng chứng chính thức rằng bể luôn mở lớp cho công chúng.',
            detail: 'Không gộp các quảng cáo giáo viên bên ngoài vào dịch vụ của Đại học Bách khoa.',
            missing: 'Quyền vào bể, lịch khách ngoài và khóa học chính thức chưa được xác minh.',
            sourceLabel: 'Đại học Bách khoa Hà Nội', sourceUrl: 'https://www.hust.edu.vn/uploads/sys/quality-assurance/2019/05/be-08-05-04.389355.20928.pdf', sourceType: 'Nguồn đơn vị chủ quản',
          },
        ],
      },
      {
        id: 'dong-da',
        label: 'Khu vực Đống Đa',
        description: 'Có trường bơi chuyên biệt cho trẻ em, bể tại khu căn hộ và các cơ sở được CLB/đơn vị dạy sử dụng.',
        venues: [
          {
            name: 'Aqua-Tots Hoàng Cầu',
            address: 'Tầng M, chung cư Hoàng Cầu Skyline, 36 Hoàng Cầu, khu vực Đống Đa, Hà Nội',
            area: 'Ô Chợ Dừa', access: 'Trường bơi', entityType: 'Đơn vị + địa điểm', environment: 'Trong nhà',
            services: 'Bơi sinh tồn cho trẻ từ 4 tháng đến 12 tuổi; lớp nhóm nhỏ, bán riêng và kèm riêng theo thông tin chính thức.',
            detail: 'Đây là trường bơi có chương trình riêng, không chỉ là địa điểm cho thuê làn.',
            missing: 'Học phí và lịch trống cần kiểm tra lại tại thời điểm đăng ký.',
            sourceLabel: 'Aqua-Tots Hoàng Cầu', sourceUrl: 'https://aquatotshoangcau.vn/gioi-thieu-1/', sourceType: 'Website chính thức',
          },
          {
            name: 'Bể bơi Bảo Sơn',
            address: '50 Nguyễn Chí Thanh, khu vực Đống Đa, Hà Nội',
            area: 'Láng', access: 'Bể thương mại', entityType: 'Địa điểm bơi', environment: 'Trong nhà / nước ấm',
            services: 'CLB Spring công khai đây là một trong các cơ sở tổ chức dạy bơi.',
            detail: 'Tên bể và địa chỉ được đối chiếu giữa nguồn CLB Spring và danh sách bể bốn mùa.',
            missing: 'Chưa xác minh trang vận hành riêng, giá vé và chính sách khách ngoài.',
            sourceLabel: 'CLB Bơi lặn Spring', sourceUrl: 'https://clbboilanspring.vn/', sourceType: 'Website đơn vị tổ chức lớp',
          },
          {
            name: 'Bể bơi khu Thái Thịnh',
            address: 'Ngõ 172 Thái Thịnh, khu vực Đống Đa, Hà Nội',
            area: 'Thái Thịnh', access: 'Bể khu dân cư / thương mại', entityType: 'Địa điểm bơi', environment: 'Chưa xác minh',
            services: 'Swim To Be Live công khai địa điểm trong danh sách cơ sở học bơi Hà Nội.',
            detail: 'Tên thương mại và đơn vị vận hành bể chưa rõ nên chỉ hiển thị theo khu vực.',
            missing: 'Cần xác minh tên bể chính thức, số nhà cụ thể, quyền tiếp cận và lịch lớp.',
            sourceLabel: 'Swim To Be Live', sourceUrl: 'https://swimtobelive.com/hoc-boi-o-ha-noi', sourceType: 'Website đơn vị tổ chức lớp',
          },
        ],
      },
      {
        id: 'thanh-xuan', label: 'Khu vực Thanh Xuân',
        description: 'Cụm bể trong nhà và cơ sở dạy bơi dày đặc quanh Nguyễn Tuân, Nguyễn Huy Tưởng và Vũ Trọng Phụng.',
        venues: [
          {
            name: 'Hapu Swimming Pool', address: 'Tầng B1, tòa 21T2 Hapulico Complex, 83 Vũ Trọng Phụng, khu vực Thanh Xuân, Hà Nội',
            area: 'Thanh Xuân', access: 'Bể thương mại', entityType: 'Địa điểm bơi', environment: 'Trong nhà / bốn mùa',
            services: 'Có nhiều đơn vị bên ngoài quảng bá lớp tại bể; chưa mặc định đó là dịch vụ do bể trực tiếp cung cấp.',
            detail: 'Nguồn chuyên ngành xác nhận vị trí trong Hapulico Complex.', missing: 'Cần kiểm tra quy định nhận HLV ngoài, giá vé và lịch làn bơi.',
            sourceLabel: 'Review Hồ Bơi', sourceUrl: 'https://reviewhoboi.com/hapulico-swimming-pool-ha-noi/', sourceType: 'Danh bạ chuyên ngành',
          },
          {
            name: 'Bể bơi Việt Đức Complex', address: '187 Nguyễn Tuân, khu vực Thanh Xuân, Hà Nội',
            area: 'Nguyễn Tuân', access: 'Bể thương mại', entityType: 'Địa điểm + cơ sở dạy', environment: 'Bốn mùa',
            services: 'GoSwim công khai lớp kèm riêng, từ cơ bản đến nâng cao cho trẻ em và người lớn tại đây.',
            detail: 'Nguồn chính thức của GoSwim nêu rõ địa chỉ cơ sở.', missing: 'Học phí, lịch và vé bể cần liên hệ GoSwim để xác nhận.',
            sourceLabel: 'GoSwim Hà Nội', sourceUrl: 'https://hocboi.vn/ve-chung-toi/', sourceType: 'Website đơn vị tổ chức lớp',
          },
          {
            name: 'Bể bơi muối khoáng Spring – Bohemia', address: 'Tầng 4, tòa Bohemia, 25 Nguyễn Huy Tưởng, khu vực Thanh Xuân, Hà Nội',
            area: 'Nguyễn Huy Tưởng', access: 'Bể thương mại', entityType: 'Đơn vị + địa điểm', environment: 'Trong nhà',
            services: 'CLB Spring công khai lớp người lớn, trẻ em, cấp tốc và kèm riêng.',
            detail: 'Đây là cơ sở được CLB Spring tự giới thiệu là bể muối khoáng của đơn vị.', missing: 'Cần kiểm tra lịch, học phí và điều kiện bơi tự do.',
            sourceLabel: 'CLB Bơi lặn Spring', sourceUrl: 'https://clbboilanspring.vn/', sourceType: 'Website chính thức',
          },
        ],
      },
      {
        id: 'cau-giay-tu-liem', label: 'Khu vực Cầu Giấy & Từ Liêm',
        description: 'Nhiều trường bơi và bể bốn mùa ở phía tây thành phố; một số cơ sở chuyên trẻ nhỏ, số khác phục vụ cả tập luyện và thi đấu.',
        venues: [
          {
            name: 'Aqua-Tots Cầu Giấy', address: 'Số 89 Khúc Thừa Dụ, khu vực Cầu Giấy, Hà Nội',
            area: 'Cầu Giấy', access: 'Trường bơi', entityType: 'Đơn vị + địa điểm', environment: 'Trong nhà',
            services: 'Lớp trẻ em từ 4 tháng đến 12 tuổi; nhóm tối đa 4:1, bán riêng 2:1 và kèm riêng 1:1 theo nguồn chính thức.',
            detail: 'Đơn vị công khai chương trình, tỷ lệ lớp và đầu mối liên hệ riêng cho cơ sở.', missing: 'Học phí và lịch trống thay đổi theo gói.',
            sourceLabel: 'ASC Education / Aqua-Tots', sourceUrl: 'https://asc.edu.vn/', sourceType: 'Website chính thức',
          },
          {
            name: 'Green Pool 24 Nguyễn Cơ Thạch', address: 'Tầng 3, tòa Golden Field, 24 Nguyễn Cơ Thạch, khu vực Từ Liêm, Hà Nội',
            area: 'Mỹ Đình', access: 'Bể bốn mùa', entityType: 'Đơn vị + địa điểm', environment: 'Trong nhà',
            services: 'Green Pool công khai bơi tự do và các khóa cơ bản, chất lượng cao, nâng cao cho trẻ em và người lớn.',
            detail: 'Một trong năm cơ sở được hệ thống Green Pool liệt kê.', missing: 'Cần xác nhận khung giờ dành cho lớp và vé tại ngày sử dụng.',
            sourceLabel: 'Green Pool', sourceUrl: 'https://www.greenpool.vn/co-so/cung-ttdn-my-dinh', sourceType: 'Website chính thức',
          },
          {
            name: 'Cung Thể thao dưới nước Mỹ Đình / Green Pool Mỹ Đình', address: 'Đường Lê Đức Thọ, khu vực Từ Liêm, Hà Nội',
            area: 'Mỹ Đình', access: 'Tổ hợp thể thao', entityType: 'Địa điểm + đơn vị khai thác lớp', environment: 'Trong nhà & ngoài trời',
            services: 'Green Pool công khai cơ sở, vé lẻ và chương trình đào tạo từ cơ bản đến nâng cao.',
            detail: 'Tổ hợp còn phục vụ tập luyện và sự kiện, vì vậy lịch công cộng cần được kiểm tra trước.', missing: 'Lịch làn bơi có thể thay đổi theo sự kiện.',
            sourceLabel: 'Green Pool – cơ sở Mỹ Đình', sourceUrl: 'https://www.greenpool.vn/co-so/cung-ttdn-my-dinh', sourceType: 'Website đơn vị khai thác',
          },
          {
            name: 'iSwim The Sun Mễ Trì', address: 'Tầng 5, chung cư The Sun Mễ Trì, lô HH1, khu đô thị Mễ Trì Hạ, khu vực Nam Từ Liêm, Hà Nội',
            area: 'Mễ Trì', access: 'Bể thương mại', entityType: 'Đơn vị + địa điểm', environment: 'Trong nhà',
            services: 'Nguồn công khai mô tả chương trình kỹ năng bơi cơ bản và phòng chống đuối nước cho trẻ em.',
            detail: 'Địa chỉ pháp lý của điểm kinh doanh iSwim được đối chiếu qua danh bạ doanh nghiệp.', missing: 'Chưa xác minh trực tiếp lịch lớp, độ tuổi và đầu mối đăng ký trên website chính thức.',
            sourceLabel: 'Companies House Vietnam', sourceUrl: 'https://companieshouse.vn/be-boi-the-sun-dia-diem-kinh-doanh-cong-ty-co-phan-the-thao-iswim', sourceType: 'Danh bạ doanh nghiệp',
          },
        ],
      },
      {
        id: 'tay-ho-bac-tu-liem', label: 'Khu vực Tây Hồ & Bắc Từ Liêm',
        description: 'Hai cơ sở trong nhà có chương trình trẻ em hoặc đào tạo nhiều trình độ, đều có website đơn vị công khai.',
        venues: [
          {
            name: 'Aqua-Tots Tây Hồ', address: 'Lô H3-LC, khu đô thị Starlake Tây Hồ Tây, khu vực Bắc Từ Liêm, Hà Nội',
            area: 'Starlake', access: 'Trường bơi', entityType: 'Đơn vị + địa điểm', environment: 'Trong nhà',
            services: 'Lớp trẻ em từ 4 tháng đến 12 tuổi; nhóm 4:1, bán riêng 2:1 và kèm riêng 1:1 theo trang cơ sở.',
            detail: 'Trang Aqua-Tots công khai địa chỉ, độ tuổi, hình thức lớp và giờ hoạt động.', missing: 'Giá và lịch cụ thể cần kiểm tra vì có thể thay đổi.',
            sourceLabel: 'Aqua-Tots Tây Hồ', sourceUrl: 'https://www.aqua-tots.com/tay-ho/', sourceType: 'Website chính thức',
          },
          {
            name: 'Green Pool Thụy Khuê', address: 'Tầng 3, Trung tâm Phụ nữ và Phát triển, 20 Thụy Khuê, khu vực Tây Hồ, Hà Nội',
            area: 'Thụy Khuê', access: 'Bể bốn mùa', entityType: 'Đơn vị + địa điểm', environment: 'Trong nhà',
            services: 'Hệ thống công khai khóa cơ bản, chất lượng cao và nâng cao cho trẻ em/người lớn.',
            detail: 'Một trong năm cơ sở chính thức của Green Pool tại Hà Nội.', missing: 'Cần xác nhận lịch lớp, vé và chính sách học bù.',
            sourceLabel: 'Green Pool', sourceUrl: 'https://www.greenpool.vn/co-so/cung-ttdn-my-dinh', sourceType: 'Website chính thức',
          },
        ],
      },
      {
        id: 'hoang-mai-thanh-tri', label: 'Khu vực Hoàng Mai & Thanh Trì',
        description: 'Cụm bể bốn mùa phía nam thành phố, trong đó Housinco có hồ sơ hoạt động bơi/lặn từ cơ quan quản lý văn hóa thể thao.',
        venues: [
          {
            name: 'Green Pool Hoàng Mai', address: 'Số 5 Linh Đường, Hoàng Liệt, khu vực Hoàng Mai, Hà Nội',
            area: 'Hoàng Liệt', access: 'Bể bốn mùa', entityType: 'Đơn vị + địa điểm', environment: 'Trong nhà',
            services: 'Green Pool công khai bơi tự do và hệ thống khóa học tại cơ sở.',
            detail: 'Địa chỉ nằm trong danh sách năm cơ sở chính thức.', missing: 'Cần kiểm tra ca dành cho trẻ nhỏ và lịch làn bơi.',
            sourceLabel: 'Green Pool', sourceUrl: 'https://www.greenpool.vn/co-so/cung-ttdn-my-dinh', sourceType: 'Website chính thức',
          },
          {
            name: 'Green Pool Thanh Trì', address: 'Trung tâm Văn hóa & Thể thao Thanh Trì, ngõ 673 Ngọc Hồi, khu vực Thanh Trì, Hà Nội',
            area: 'Ngọc Hồi', access: 'Bể bốn mùa', entityType: 'Đơn vị + địa điểm', environment: 'Trong nhà',
            services: 'Green Pool công khai các khóa cơ bản và nâng cao cho trẻ em/người lớn.',
            detail: 'Cơ sở được hệ thống niêm yết tại Trung tâm Văn hóa & Thể thao Thanh Trì.', missing: 'Cần xác nhận lịch công cộng và lịch lớp.',
            sourceLabel: 'Green Pool', sourceUrl: 'https://www.greenpool.vn/co-so/cung-ttdn-my-dinh', sourceType: 'Website chính thức',
          },
          {
            name: 'Bể bơi bốn mùa Housinco Tân Triều', address: 'Tầng 5, dự án Housinco Tân Triều, ô CT5 khu đô thị Tây Nam Kim Giang I, khu vực Thanh Trì, Hà Nội',
            area: 'Tân Triều', access: 'Bể thương mại', entityType: 'Địa điểm + cơ sở hướng dẫn', environment: 'Trong nhà',
            services: 'Hồ sơ của Sở Văn hóa và Thể thao Hà Nội ghi loại hình bơi, lặn và hướng dẫn tập luyện.',
            detail: 'Đây là nguồn quản lý nhà nước, dùng để xác nhận địa điểm và loại hình hoạt động.', missing: 'Cần xác nhận đơn vị vận hành hiện tại, giờ, giá và chương trình đang mở.',
            sourceLabel: 'Sở Văn hóa & Thể thao Hà Nội', sourceUrl: 'https://sovhtt.hanoi.gov.vn/wp-content/uploads/2023/05/cv-239-gcn-svhtt-1-signed.pdf', sourceType: 'Nguồn cơ quan nhà nước',
          },
        ],
      },
      {
        id: 'ha-dong', label: 'Khu vực Hà Đông',
        description: 'Nguồn hiện có xác nhận một địa điểm học trong tổ hợp thương mại; cần tiếp tục bổ sung nguồn vận hành độc lập cho các bể khác.',
        venues: [
          {
            name: 'Bể bơi Hồ Gươm Plaza', address: 'Tầng 5, Hồ Gươm Plaza, 102 Trần Phú, khu vực Hà Đông, Hà Nội',
            area: 'Trần Phú', access: 'Bể thương mại', entityType: 'Địa điểm bơi', environment: 'Trong nhà',
            services: 'Swim To Be Live công khai tổ chức học bơi cho trẻ em và người lớn tại địa điểm này.',
            detail: 'Thông tin đến từ đơn vị dạy, chưa phải trang vận hành riêng của tòa nhà.', missing: 'Cần xác minh quyền vào bể, học phí, vé và lịch.',
            sourceLabel: 'Swim To Be Live', sourceUrl: 'https://swimtobelive.com/hoc-boi-o-ha-noi', sourceType: 'Website đơn vị tổ chức lớp',
          },
        ],
      },
      {
        id: 'gia-lam', label: 'Khu vực Gia Lâm',
        description: 'Cơ sở trường bơi trẻ em tại Ocean Park có thông tin trực tiếp từ hệ thống vận hành.',
        venues: [
          {
            name: 'Aqua-Tots Gia Lâm', address: 'PT-01, khu đô thị Vinhomes Ocean Park, khu vực Gia Lâm, Hà Nội',
            area: 'Ocean Park', access: 'Trường bơi', entityType: 'Đơn vị + địa điểm', environment: 'Trong nhà',
            services: 'Hệ thống Aqua-Tots công khai đây là một trong ba trường bơi tại Hà Nội; chương trình cốt lõi dành cho trẻ nhỏ.',
            detail: 'Địa chỉ và đầu mối hệ thống được ASC Education công khai.', missing: 'Cần kiểm tra độ tuổi, lịch và học phí riêng của cơ sở Gia Lâm.',
            sourceLabel: 'ASC Education / Aqua-Tots', sourceUrl: 'https://asc.edu.vn/', sourceType: 'Website chính thức',
          },
        ],
      },
    ],
    providers: [
      {
        name: 'Green Pool & CLB Bơi Thăng Long', kind: 'Hệ thống bể + đơn vị đào tạo',
        areas: 'Hoàng Mai · Tây Hồ · Từ Liêm · Mỹ Đình · Thanh Trì',
        audiences: 'Trẻ em, người lớn; cơ bản đến nâng cao', formats: 'Lớp theo chương trình; câu lạc bộ; bơi tự do',
        contact: '0798 234 555', website: 'https://greenpool.vn/',
        verification: 'Website chính thức liệt kê 5 cơ sở và các nhóm khóa học.',
        missing: 'Học phí và sĩ số cụ thể theo từng cơ sở cần xác nhận.',
        sourceLabel: 'Green Pool', sourceUrl: 'https://www.greenpool.vn/co-so/cung-ttdn-my-dinh',
      },
      {
        name: 'Aqua-Tots Swim Schools Hà Nội', kind: 'Trường bơi trẻ em',
        areas: 'Tây Hồ · Cầu Giấy · Gia Lâm', audiences: 'Trẻ từ 4 tháng đến 12 tuổi',
        formats: 'Nhóm 4:1 · bán riêng 2:1 · kèm riêng 1:1', contact: '024 7100 0001 / 0002 / 0005', website: 'https://www.aqua-tots.com/tay-ho/',
        verification: 'Trang hệ thống và ASC Education công khai địa chỉ, độ tuổi và tỷ lệ lớp.', missing: 'Giá và lịch cụ thể khác nhau theo cơ sở/gói.',
        sourceLabel: 'Aqua-Tots', sourceUrl: 'https://www.aqua-tots.com/tay-ho/',
      },
      {
        name: 'Aqua-Tots Hoàng Cầu', kind: 'Trường bơi trẻ em', areas: 'Ô Chợ Dừa · Đống Đa',
        audiences: 'Trẻ từ 4 tháng đến 12 tuổi', formats: 'Nhóm nhỏ tối đa 4 bé/HLV; có chương trình cá nhân hóa',
        contact: '097 573 9936', website: 'https://aquatotshoangcau.vn/',
        verification: 'Website cơ sở công khai địa chỉ, chương trình, độ tuổi và liên hệ.', missing: 'Lịch trống và học phí cần xác nhận.',
        sourceLabel: 'Aqua-Tots Hoàng Cầu', sourceUrl: 'https://aquatotshoangcau.vn/gioi-thieu-1/',
      },
      {
        name: 'CLB Bơi lặn Spring', kind: 'Câu lạc bộ / đơn vị đào tạo',
        areas: 'Thanh Xuân · Đống Đa · Cầu Giấy · Hai Bà Trưng', audiences: 'Trẻ em, người lớn, người sợ nước',
        formats: 'Kèm riêng 1:1 · cơ bản · nâng cao · cấp tốc', contact: '038 580 5555', website: 'https://clbboilanspring.vn/',
        verification: 'Website CLB công khai 5 cơ sở và các nhóm khóa học.', missing: 'Cần hỏi rõ bể nào do CLB vận hành và bể nào chỉ là địa điểm giảng dạy.',
        sourceLabel: 'CLB Spring', sourceUrl: 'https://clbboilanspring.vn/',
      },
      {
        name: 'GoSwim Hà Nội', kind: 'Trung tâm dạy bơi', areas: 'Thanh Xuân và nhận dạy tại nhiều khu vực Hà Nội',
        audiences: 'Trẻ em, người lớn, người sợ nước', formats: 'Kèm riêng · cơ bản đến nâng cao · dạy tại bể khách hàng',
        contact: '0989 181 246', website: 'https://hocboi.vn/',
        verification: 'Website trung tâm xác nhận cơ sở Việt Đức Complex và hình thức kèm riêng.', missing: 'Các điểm ngoài cơ sở chính cần xác nhận riêng trước khi đến.',
        sourceLabel: 'GoSwim Hà Nội', sourceUrl: 'https://hocboi.vn/ve-chung-toi/',
      },
      {
        name: 'Trung tâm Bơi lội Hà Nội / Bơi Cấp Tốc', kind: 'Đơn vị đào tạo', areas: 'Ba Đình',
        audiences: 'Trẻ em, người lớn; cơ bản và nâng cao', formats: 'Kèm riêng · cấp tốc · CLB nâng cao',
        contact: '0943 427 995', website: 'https://boicaptoc.vn/',
        verification: 'Website công khai ba cơ sở Vạn Bảo, La Thành và Quán Thánh.', missing: 'Cần xác nhận số buổi, sĩ số và tổng chi phí gồm vé bể.',
        sourceLabel: 'Bơi Cấp Tốc', sourceUrl: 'https://boicaptoc.vn/lien-he.html',
      },
      {
        name: 'Swim To Be Live', kind: 'Đơn vị tổ chức lớp', areas: 'Hà Đông · Đống Đa · Nam Từ Liêm và khu vực khác',
        audiences: 'Trẻ em và người lớn', formats: 'Lớp tại nhiều bể; thông tin hình thức cụ thể cần hỏi lại',
        website: 'https://swimtobelive.com/hoc-boi-o-ha-noi',
        verification: 'Trang Hà Nội công khai nhiều địa chỉ cơ sở.', missing: 'Chưa xác minh độc lập đơn vị vận hành từng bể và lịch hiện tại.',
        sourceLabel: 'Swim To Be Live', sourceUrl: 'https://swimtobelive.com/hoc-boi-o-ha-noi',
      },
    ],
    references: [
      { publisher: 'Cổng Thông tin điện tử Chính phủ', title: 'Nghị quyết 1656/NQ-UBTVQH15 về sắp xếp đơn vị hành chính Hà Nội năm 2025', url: 'https://xaydungchinhsach.chinhphu.vn/toan-van-nghi-quyet-so-1656-nq-ubtvqh15-sap-xep-cac-dvhc-cap-xa-cua-thanh-pho-ha-noi-nam-2025-119250616192433872.htm', usedFor: 'Bối cảnh 126 xã/phường và cách ghi chú khu vực.' },
      { publisher: 'Sở Văn hóa và Thể thao Hà Nội', title: 'Giấy chứng nhận hoạt động bơi, lặn tại Housinco Tân Triều', url: 'https://sovhtt.hanoi.gov.vn/wp-content/uploads/2023/05/cv-239-gcn-svhtt-1-signed.pdf', usedFor: 'Địa chỉ và loại hình hoạt động Housinco.' },
      { publisher: 'Đại học Bách khoa Hà Nội', title: 'Tài liệu khuôn viên và hạng mục bể bơi', url: 'https://www.hust.edu.vn/uploads/sys/quality-assurance/2019/05/be-08-05-04.389355.20928.pdf', usedFor: 'Xác nhận bể bơi trong khuôn viên trường.' },
      { publisher: 'Green Pool', title: 'Hệ thống cơ sở và chương trình đào tạo bơi', url: 'https://www.greenpool.vn/co-so/cung-ttdn-my-dinh', usedFor: '5 cơ sở, loại khóa học và địa chỉ.' },
      { publisher: 'Aqua-Tots Swim Schools', title: 'Aqua-Tots Tây Hồ', url: 'https://www.aqua-tots.com/tay-ho/', usedFor: 'Địa chỉ, độ tuổi và hình thức lớp.' },
      { publisher: 'ASC Education', title: 'Hệ thống trường bơi Aqua-Tots tại Hà Nội', url: 'https://asc.edu.vn/', usedFor: 'Địa chỉ và liên hệ Cầu Giấy, Tây Hồ, Gia Lâm.' },
      { publisher: 'Aqua-Tots Hoàng Cầu', title: 'Giới thiệu trường bơi Hoàng Cầu', url: 'https://aquatotshoangcau.vn/gioi-thieu-1/', usedFor: 'Địa chỉ, đối tượng và quy mô lớp.' },
      { publisher: 'CLB Bơi lặn Spring', title: 'Giới thiệu, khóa học và hệ thống cơ sở', url: 'https://clbboilanspring.vn/', usedFor: 'Khóa học, liên hệ và 5 cơ sở.' },
      { publisher: 'GoSwim Hà Nội', title: 'Về chúng tôi', url: 'https://hocboi.vn/ve-chung-toi/', usedFor: 'Cơ sở Việt Đức Complex và hình thức học.' },
      { publisher: 'Trung tâm Bơi lội Hà Nội', title: 'Thông tin liên hệ và ba cơ sở tại Ba Đình', url: 'https://boicaptoc.vn/lien-he.html', usedFor: 'Địa chỉ Vạn Bảo, La Thành, Quán Thánh.' },
      { publisher: 'Swim To Be Live', title: 'Học bơi ở Hà Nội', url: 'https://swimtobelive.com/hoc-boi-o-ha-noi', usedFor: 'Các điểm Hồ Gươm Plaza và Thái Thịnh.' },
    ],
  },
  'hoc-boi-tphcm': hcmResearch,
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
