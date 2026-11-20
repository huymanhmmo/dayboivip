# Phân tích trước triển khai — Hồ bơi Nhật An

Ngày: 20/11/2026. URL dự kiến: https://dayboi.vip/hoc-boi-nhat-an-lai-thieu/

## Chuẩn thiết kế

Mockup: `D:/04_dayboivip/Mockup v2/Thiết kế website Hồ bơi Nhật An đa nền tảng.png`. Không sử dụng bất kỳ mảnh mockup nào làm asset trang.

Giữ phong cách aquatic xanh biển/cyan, chữ Be Vietnam Pro, nền trắng xanh nhạt, nhấn vàng/cam, card bo 16–22px và sóng SVG. Header/footer kế thừa trang Lái Thiêu. Giữ mật độ và các nhóm cột desktop của mockup, đồng thời bảo đảm chữ nội dung đọc được và mobile bố trí lại rõ ràng.

## Section, component, bố cục và tương tác

| Section | Component dự kiến | Asset/dữ liệu | Desktop | Mobile / tương tác |
|---|---|---|---|---|
| Header | LandingHeader đang có | Logo chung, hotline | Full width | Hamburger có trạng thái, Escape đóng |
| Breadcrumb và hero | PoolDetailHero | Ảnh hồ ngoài trời minh họa, tên, địa chỉ | Chữ trái, ảnh phải, gradient/sóng, 3 badge | Tiêu đề và ảnh phân vùng; badge/CTA đọc rõ |
| Thông tin nhanh | PoolQuickFacts | 5 ô thông tin | Một hàng 5 ô | Các hàng có icon |
| Hình ảnh + đánh giá | PoolPhotoGallery / PoolFacilityReview | Array ảnh, trạng thái khảo sát | 2 cột lớn/nhỏ | Lưới ảnh; dialog xem ảnh, không đếm ảnh giả |
| Khóa học + kiểu bơi | PoolCoursesSection / PoolSwimmingStyles | 4 khóa, 5 kỹ thuật | Hai nhóm cạnh nhau | Khóa 2 cột, kỹ thuật cuộn ngang |
| HLV + chỉ đường + chuẩn bị | PoolInstructorSection / PoolLocationSection / PoolPreparationSection | Chân dung thật nếu xác định được; địa chỉ, checklist | 3 cột | Xếp dọc; Google Maps tìm kiếm, không ghim tọa độ đoán |
| Học phí + chính sách | PoolTuitionSection | Học phí và vé hồ riêng | Bảng dễ đọc | Bảng co giãn hoặc hàng xếp dọc |
| Trải nghiệm học + lộ trình | PoolLearningGuide | Nội dung theo trình độ | Nội dung sâu trong disclosure | Mở đọc bằng bàn phím |
| Đánh giá | PoolTestimonials có điều kiện | Chỉ phản hồi có nguồn | Không xuất bản khi thiếu dữ liệu | Không tạo đánh giá/người học giả |
| FAQ | PoolFAQ | 6 câu hỏi thực tế | Accordion | HTML details/summary, bàn phím |
| Hồ lân cận | NearbyPools | Danh sách Lái Thiêu hiện có | Dải liên kết | Lưới xếp dọc |
| CTA và footer | PoolEnrollmentCTA / LandingFooter đang có | Gọi điện, Zalo | Banner xanh/sóng | Thanh liên hệ cuối màn hình, chừa khoảng trống |

## Kiến trúc dự kiến

- `src/data/poolDetailTypes.ts`: kiểu dữ liệu chung, variant public/residential, ảnh và trạng thái xác minh.
- `src/data/poolDetailPages.ts`: dữ liệu Nhật An, các khóa, học phí, FAQ và nội dung chuyên sâu.
- `src/components/pool-detail/`: mỗi section nhận props; `PoolDetailPage.astro` lắp ráp.
- `src/styles/pool-detail.css`: tokens và responsive scope riêng, không sửa kiểu của hub.
- `src/pages/hoc-boi-nhat-an-lai-thieu.astro`: route mỏng.
- `laiThieuPools.js`: liên kết chi tiết và nguồn Nhật An trỏ route mới; hub giữ nguyên URL và thiết kế.

## Asset Manifest trước khi code

| Asset | Nguồn / hành động | Trạng thái |
|---|---|---|
| Logo | `/images/brand/logo.png` | Có sẵn, dùng chung |
| Hero hồ ngoài trời | Vẽ mới theo yêu cầu bổ sung của người dùng, không dùng mockup làm ảnh | Cần tạo, gắn nhãn minh họa |
| Ảnh gallery Nhật An | Chưa có ảnh khảo sát | Array ảnh thực tế rỗng; thể hiện trạng thái chờ ảnh |
| Trẻ em / người lớn / kèm riêng | Ảnh minh họa độc lập đã có ở `/images/landing/lai-thieu/` | Có sẵn, chú thích minh họa |
| Nhóm nhỏ | Chọn ảnh lớp sẵn có hoặc vẽ mới nếu ảnh không phù hợp | Kiểm tra trước dùng |
| 5 kỹ thuật bơi | 5 ảnh đã duyệt trong `/images/landing/lai-thieu/technique-*.webp` | Có sẵn, không nhân bản |
| Chân dung thầy Lê Văn Thông | Tìm ảnh trên website chính thức Swim For Life và đối chiếu nhãn người | Không dùng ảnh AI giả danh |
| Kính/mũ/khăn | Vẽ ảnh minh họa vật dụng riêng nếu cần | Cần tạo |
| Sóng, icon | WaveDivider và Icon đang có | Tái sử dụng mã SVG |

## Dữ liệu đã có và còn thiếu

Theo tài liệu tuyển sinh: A86, KP Bình Đức, P. Lái Thiêu, TP.HCM; địa chỉ cũ thuộc TP. Thuận An, Bình Dương; hồ dịch vụ/tư nhân; HLV phụ trách Thầy Lê Văn Thông, Kiện tướng Bơi lội, 0986.456.678. Các mốc đường đi là gợi ý theo tài liệu, không phải chỉ đường từng ngã rẽ đã khảo sát.

Chưa xác minh: ảnh thực tế, giờ mở cửa, vé hồ, độ sâu, mái che, tiện ích, tọa độ, lịch học còn trống, học phí tại địa điểm, chính sách bù/bảo lưu cụ thể và đánh giá học viên tại Nhật An. Không công bố số liệu hoặc dấu kiểm xác nhận cho các mục này. Không dùng form liên hệ doanh nghiệp vốn không tiếp nhận đăng ký cá nhân; dùng gọi/Zalo có sẵn.

## Các giai đoạn

1. Phân tích và kiểm kê (tài liệu này).
2. Chuẩn bị ảnh độc lập, ghi nguồn và tối ưu WebP.
3. Xây dữ liệu + template và các section theo mockup.
4. Tích hợp route, liên kết hai chiều với hub và metadata/schema đúng nội dung.
5. Build, audit SEO, kiểm tra liên kết, gallery/menu/FAQ và các viewport 360, 390, 430, 768, 1024, 1280, 1440, 1920.
6. Chụp ảnh desktop/mobile, ghi báo cáo và hướng dẫn tái sử dụng. Chỉ đưa lên bản xem thử; giữ production hiện tại để người dùng duyệt trang hoàn chỉnh theo tài liệu đính kèm.
