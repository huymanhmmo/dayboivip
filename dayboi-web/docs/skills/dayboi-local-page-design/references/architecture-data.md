# Kiến trúc và dữ liệu khi mở khu vực mới

## Phân lớp

```text
Nguồn nghiên cứu/ảnh/địa giới
             ↓
RegionConfig + VenueCatalog + nội dung từng địa điểm
             ↓
Adapters: hub · chi tiết · navigation · footer · nearby · danh bạ · SEO
             ↓
Route Astro mỏng → template → section/UI/widget dùng chung
```

Một địa điểm giữ một ID và một canonical dù xuất hiện ở nhiều cụm lân cận. Liên kết khu vực là quan hệ, không phải lý do nhân bản trang hồ theo từng xã/phường. Giữ URL đã xuất bản nếu không có yêu cầu di chuyển; kiểm tra redirect khi thực sự đổi URL.

## Hợp đồng dữ liệu cần có

Bảng dưới là **thiết kế để tham số hóa**, chưa phải tên trường đã triển khai đầy đủ trong repo. Đối chiếu `LocalLandingData`, `PoolDetailData` và catalog hiện hành trước khi bổ sung; không truyền object mới vào template cũ rồi giả định nó hiểu.

| Đối tượng | Nội dung |
| --- | --- |
| RegionConfig | ID ổn định, tên và loại xã/phường, parent địa phương, hubHref/canonical hiện có, alias hành chính cũ, nguồn/ngày đối chiếu |
| Phạm vi cụm | IDs hồ trong địa phương, hồ lân cận, nhãn nhóm và tiêu chí đưa vào; không trộn với địa giới pháp lý |
| Cấu hình liên hệ | Chủ thể, vai trò, số/tel/Zalo hợp lệ, khu phụ trách, nguồn xác nhận; có thể chưa có |
| Cấu hình trình bày | Hero, khóa học phù hợp, HLV nếu có, thông tin địa phương, FAQ, IDs hồ nổi bật, menu và section được bật |
| Venue | ID, tên/alias, slug/detailHref, địa chỉ mới/cũ, xã/phường thực tế, loại hồ, trạng thái vận hành, điều kiện học |
| Nội dung riêng | Đường/mốc nhận diện, lối vào khi xác minh, cách tiếp cận, điều kiện nội khu, nhu cầu phù hợp và điều cần hỏi |
| Media | src, kind, alt, caption, kích thước, nguồn/quyền dùng, illustration flag; ảnh gốc và derivative có manifest |
| Trường có bằng chứng | Giá/giờ/độ sâu/tiện ích/địa chỉ/liên hệ được theo dõi nguồn, ngày và trạng thái riêng |
| Xuất bản | Trạng thái draft/review/published, indexable/noindex có chủ đích, nguồn, ngày biên tập và phần chưa xác minh |

Không dùng một cờ `verified` cho cả hồ. Tài liệu dự án ghi có hồ bơi không xác nhận hồ đang vận hành, khách ngoài được vào hoặc HLV được phép mở lớp. Ngày biên tập không phải ngày khảo sát.

Một địa điểm có thể xuất hiện trên nhiều hub lân cận nhưng giữ một ID, địa chỉ và canonical chi tiết. Phạm vi tuyển sinh không thay thế đơn vị hành chính của hồ. Không tạo các bản trang gần giống nhau chỉ đổi tên phường trong slug.

## Cấu hình vùng khi tổng quát hóa

Đây là **contract đề xuất khi triển khai vùng mới**, chưa phải export có sẵn trong repo. Có thể điều chỉnh tên field theo kiến trúc hiện tại nhưng giữ tách biệt các vai trò:

```ts
type RegionDesignConfig = {
  id: string;
  name: string;
  provinceName: string;
  parentHref: string;
  hubHref: string;
  administrativeAreaIds: string[];
  venueIds: string[];
  nearbyVenueIds: string[];
  featuredVenueIds: string[];
  nearbyRegionIds: string[];
  contactId: string | null;
  instructorIds: string[];
};
```

Brand assets, kỹ thuật bơi và tokens thuộc thư viện chung; vùng tham chiếu chúng. Contact/instructor lưu riêng theo ID, có chủ thể và phạm vi phụ trách; null không được tự thay bằng đầu mối vùng cũ. Menu/filter/nearby được dựng từ cấu hình này cùng catalog và section thực có, tránh lưu thêm danh sách URL độc lập.

Mô hình vai trò tối thiểu tách: **quầy vé/BQL hồ**, **HLV/đơn vị dạy**, **đầu mối vùng**. Không tự suy ra số điện thoại có tài khoản Zalo. Nếu contract bắt buộc số nhưng không có, sửa render để ẩn/đổi CTA phù hợp thay vì gán liên hệ của nơi khác.

## Quy tắc component

- Route chỉ chọn dữ liệu, metadata và template. Nội dung dài ở module dữ liệu riêng; section có trách nhiệm rõ. Không có yêu cầu cứng về số dòng, nhưng route không trở thành kho chứa toàn bộ trang.
- Header/footer/contact bar nhận cùng cấu hình vùng; nav sinh từ catalog và các section có thật. Template chi tiết nhận cả địa điểm và ngữ cảnh khu vực để không lấy nhầm hub hoặc HLV.
- Catalog giữ identity/địa chỉ/trạng thái; nội dung biên tập chuyên sâu có thể là override theo ID. Factory tạo khung chung, không biến việc thay tên trong văn bản chung thành nội dung địa điểm đã nghiên cứu.
- Bộ kỹ thuật, icon, đồ dùng chuẩn bị có thể dùng chung. Ảnh hồ, thông số, FAQ quyền vào hồ và lịch HLV phải theo nguồn địa điểm.
- Cùng component xử lý public/residential; resort có dữ liệu phụ phù hợp. Không tạo template mới chỉ vì đổi tên hồ. Nếu cần venue khác hồ bơi, mở contract có chủ đích thay vì gắn loại sai.
- Dữ liệu rỗng phải render có ý nghĩa: không có ảnh thật → minh họa có nhãn; không có testimonial → ẩn; không có lịch → lời mời trao đổi điều kiện; chưa có pin → bản đồ khu vực hoặc link tìm kiếm.

## Liên kết và menu

| Nơi bấm | Đích |
| --- | --- |
| Logo thương hiệu | `/` |
| Nhãn xã/phường | Hub đúng vùng |
| Card hồ và menu tên hồ | detailHref canonical của hồ |
| Breadcrumb địa điểm | Tỉnh/thành và hub thuộc vị trí thực tế; cụm giáp ranh có link tham khảo riêng |
| Mục khóa học/kỹ thuật | Trang chuyên môn chung hoặc anchor có thật trên trang hiện tại |
| Nearby | Hồ liên quan có route, có lý do gần/phù hợp; không bịa khoảng cách hoặc thời gian đi |
| Footer địa phương | Hub, hồ nổi bật theo ID, liên hệ và các vùng lân cận đúng dữ liệu |

Không đăng ký lại cùng slug ở dynamic route và file route riêng. Trước khi mở hub, kiểm tra `[location]/[area].astro` và dữ liệu commune; tránh hai URL cùng nhắm một phường. Hub tỉnh/thành là lớp cha, không bị thay thế bằng hub tuyển sinh của một khu.

## Thứ tự refactor có kiểm soát

1. Tạo cấu hình một vùng và adapter cho danh mục hiện có; không sửa hàng loạt page data.
2. Cho header/footer/finder/template nhận cấu hình, giữ hành vi route cũ. Kiểm tra cả khu cũ và cặp mẫu khu mới.
3. Tách shared assets/courses/styles khỏi import Lái Thiêu khi dependency đó ảnh hưởng mở vùng mới.
4. Kết nối registry/index/sitemap/middleware bằng route thực từ catalog. Ngoại lệ liên hệ chỉ dành cho route có nguồn phù hợp, không bypass sanitizer toàn site.
5. Mở các địa điểm đủ dữ liệu theo đợt; giữ trạng thái chờ xác minh và dự án tương lai riêng. Chạy lại kiểm tra khi thay đổi component chung.

Đây là cách mở rộng khi có yêu cầu triển khai. Tạo/cập nhật skill không đồng nghĩa với đã refactor website hoặc đã mở các khu vực mới.
