# Giao diện địa phương dùng chung — 20/11/2026

Đã triển khai lên https://dayboi.vip. Phạm vi: 34 tỉnh/thành, 3.321 xã/phường và 7 khu vực cũ còn route riêng, ở cả tiếng Việt và tiếng Anh. Có 6.723 trang dùng template danh bạ mới; hub Lái Thiêu giữ nội dung chuyên sâu đã duyệt. Tổng số URL địa phương giữ nguyên.

## Kiến trúc đã thực hiện

- `src/components/locality/LocalSiteHeader.astro`, `LocalSiteFooter.astro`, `LocalSiteContactBar.astro` dùng cấu hình vùng. Logo và nhãn địa phương là hai link độc lập. Menu/drawer, footer, lưới ngang và widget không bị sao chép theo từng trang.
- `RegionDirectoryPage.astro` chỉ lắp section: hero, nhu cầu, tìm hồ, danh sách xã/phường, đơn vị dạy, kỹ thuật, hướng dẫn, FAQ và các vùng liên quan. Thẻ hồ, ảnh bìa và khối người liên hệ là component riêng.
- Bốn dynamic route VI/EN trở thành wrapper mỏng. `src/data/locality/` tách contract, adapter tỉnh, adapter xã/khu vực, navigation, schema, FAQ, liên hệ và ảnh. Giữ dữ liệu nguồn locations/research/communePools/communePages.
- Các wrapper Lái Thiêu cấp dữ liệu cho cùng header/footer, các trang hồ vẫn dùng template chi tiết hiện có. Không tạo trang hồ mới chỉ để lấp danh sách; giữ các đích chi tiết đang có và khối thông tin mở rộng cho hồ chưa có trang riêng.
- Hero, nội dung và footer dùng cùng lưới tối đa 1510px với gutter responsive. Thẻ nhu cầu và kỹ thuật sử dụng tài nguyên đã duyệt; ảnh hero hiện có được tối ưu thành WebP, giữ ảnh nguồn. Tám ảnh hero giảm tổng dung lượng từ 2.995.067 xuống 1.881.356 byte.

## Liên hệ đúng từng hồ, từng giáo viên

Không dùng hotline Lái Thiêu làm mặc định cho các địa phương khác. Header/footer danh bạ dẫn tới danh sách người phụ trách, không tự lấy giáo viên đầu tiên làm đầu mối toàn vùng.

Từng thẻ hồ hiển thị riêng BQL/quầy vé và các giáo viên/đơn vị dạy bơi có trong dữ liệu. Nhiều số được tách thành các link gọi hợp lệ; không có số thì không tạo nút gọi rỗng. Khối liên hệ giữ nguồn và tên chủ thể, kể cả khi tên có chữ “Hotline”; middleware cũ chỉ bỏ qua các khối server-rendered đã đánh dấu, không được tắt toàn site.

Hồ nội khu được phân loại từ trường type/loại hồ, tách khỏi ghi chú điều kiện sử dụng. Phân loại không tự xác nhận quyền vào hồ hay quyền tổ chức lớp.

## Bằng chứng kiểm tra

| Kiểm tra | Kết quả |
| --- | --- |
| Build Astro | 6.837 trang thành công |
| Audit SEO strict | 6.838 HTML, 845 URL indexable, không lỗi theo kiểm tra của repo |
| Toàn bộ danh bạ mới | 6.723 trang, 35.632 khối liên hệ, 35.488 lần xuất hiện link gọi đối chiếu nguồn; không lỗi |
| URL/canonical/index | Không thay đổi so với baseline cập nhật từ main `448bb9f` |
| Link/anchor | Không thiếu đích trong trang mới; không phát hiện link ở trang khác trỏ anchor bị mất do chuyển template |
| Responsive vòng rộng | 87 trang, 253 cấu hình màn hình, 1.677 kiểm tra tương tác; không lỗi |
| Xác nhận bản cuối | 11 trang, 22 cấu hình, 169 kiểm tra; không lỗi |
| Hồi quy Lái Thiêu | Hub + 20 trang hồ, logo/nhãn khu vực, khóa học, ảnh và link đúng; không lỗi |
| HTTP preview và production | 113 trang đại diện, tổng 237 HTML/ảnh/CSS/JS/sitemap khớp byte với build |
| Trình duyệt production | 6 trang ở 390/1440px, không ảnh hỏng, tràn ngang hoặc lỗi JavaScript |

Responsive dùng Chromium mô phỏng viewport; không phải kiểm thử điện thoại vật lý. Không gửi form, gọi điện, nhắn Zalo hoặc thay đổi dữ liệu của người liên hệ. Kiểm tra HTTP/hiển thị không xác nhận số điện thoại đang hoạt động hay cơ sở/giá/lịch đã được khảo sát. Không tuyên bố đạt Core Web Vitals hoặc WCAG toàn site.

Vòng rộng được lưu trước sửa nhãn contact và bộ lọc type cuối; bản cuối chạy lại các mẫu chịu tác động và audit toàn bộ output. Google Maps/analytics ngoài site không thuộc lượt kiểm tra tự động cục bộ.

## Đồng bộ thay đổi đồng thời và triển khai

Trong quá trình thực hiện, main và production có cập nhật cho phép index 20 hồ Lái Thiêu. Đã fast-forward commit `448bb9feaae7fdbe0e0c03cd6c9b6b79411816f6`, dựng lại baseline từ checkout đã xuất bản và giữ cập nhật này. Không dùng baseline cũ để vô tình khôi phục noindex.

Worker `dayboivip`, version `91f75220-c3d1-47c4-832e-a76f488a04e8`; deployment `1fd70745-af7e-4349-bb0f-c3e2ddf16345`, 100% traffic từ 22:27:31 ngày 20/11/2026 (Asia/Saigon). Phiên bản trước `682e0eb9-9523-4df1-ad31-67a6825ff0a8` còn trong lịch sử. Không push GitHub.

## Tài liệu và kiểm tra lại

- `locality-integrity.json`, `locality-browser-qa.json`, `locality-final-browser-qa.json`, `locality-production-browser.json`: bằng chứng đúng phiên bản được ghi trong báo cáo.
- `locality-preview-http.json`, `locality-production-http.json`, `locality-deployment.json`, `locality-route-parity.json`: kiểm chứng phát hành.
- `locality-hero-assets.json`: manifest ảnh; screenshot tại `previews/locality-design/` và `previews/locality-final/`.
- Skill `dayboi-local-page-design` đã được cập nhật và cài lại, gồm contract/component đa vùng và quy tắc liên hệ riêng theo người dạy.

Lệnh chính: `npm run build`, `npm run audit:seo:strict`, `node scripts/audit-locality-integrity.mjs`, `node scripts/audit-lai-thieu-pages.mjs`, `node scripts/audit-locality-browser.mjs http://127.0.0.1:4331`. Khởi động Astro preview trước khi kiểm tra browser. Script browser dùng Playwright cài sẵn qua `DAYBOI_PLAYWRIGHT_MODULE`; có `--final` để chạy phạm vi xác nhận thay đổi cuối. Baseline route/index phải được chụp trước đợt refactor tiếp theo, không dùng bản đã thay đổi làm chuẩn của chính nó.
