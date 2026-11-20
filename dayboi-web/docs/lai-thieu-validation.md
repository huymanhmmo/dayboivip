# Báo cáo kiểm tra — giao diện Lái Thiêu v2

Ngày: 20/11/2026. URL chính thức giữ nguyên `/hoc-boi-tphcm/lai-thieu/`. Chưa deploy production.

## Kiểm tra tương tác đã thực hiện trên trình duyệt

| Thao tác | Kết quả quan sát |
| --- | --- |
| Nhập `nhat an` không dấu | Hiển thị 1 trên 6 hồ bơi; đúng Hồ bơi Nhật An |
| Lọc dịch vụ / công cộng | Hiển thị 3 trên 6 hồ bơi |
| Lọc nội khu + trục Quốc lộ 13 | Hiển thị 2 trên 6 hồ bơi |
| Nhập từ khóa không tồn tại | Hiển thị trạng thái không kết quả và nút xem tất cả |
| Xóa bộ lọc | Trở lại 6 trên 6 hồ bơi |
| Mở chi tiết Emerald Golf View | Dialog mở, hiển thị điều kiện cư dân/BQL và link bản đồ |
| Bấm Escape trong dialog | Dialog đóng |
| Menu mobile | Mở/đóng được; Escape đóng menu và trả focus nút menu |
| Điện thoại / Zalo | Thuộc tính liên kết đúng `tel:0986456678` và `https://zalo.me/0986456678`; không thực hiện cuộc gọi hay gửi tin |

## Responsive đã kiểm tra

Các chiều rộng: 360, 390, 430, 768, 1024, 1280, 1440, 1920px. `document.scrollWidth` bằng `clientWidth` tại cả tám kích thước (không tính phần thanh cuộn dọc). Các khối heading, hero, bộ lọc, HLV và footer không ghi nhận tràn ngang. Nhóm nhu cầu: 4 cột desktop/tablet, 2 cột mobile. Hồ bơi: 3 cột desktop/tablet, 1 cột mobile.

Đã điều chỉnh CTA mobile để nút không bị bó thành cột chữ dọc và cân chiều cao; có thanh Gọi/Zalo cố định, phần footer chừa khoảng trống bên dưới. Đã chụp toàn trang desktop 1440 và mobile 390 trước vòng tinh chỉnh typography cuối.

## Kiểm tra mã và bản build

- `npm run build`: thành công; 6.817 trang được sinh. Log bản cuối: `lai-thieu-build.log`.
- `npm run audit:seo:strict`: kết quả chi tiết lưu trong `lai-thieu-seo-audit.log`.
- `npm run images:dimensions`: không có thẻ ảnh thiếu kích thước cần cập nhật.
- `npm run optimize:images -- --dry-run`: phát hiện 37 JPEG nguồn lớn hơn 350 KB trên toàn dự án. Không chạy tối ưu hàng loạt để tránh đổi các ảnh ngoài phạm vi. Các asset được trang mới sử dụng đã được tối ưu thành WebP riêng (33–180 KB mỗi file).
- Kiểm tra liên kết/asset từ HTML đã build: 1 H1, canonical đúng, 28 URL liên kết duy nhất, 22 thẻ ảnh, không tìm thấy đường dẫn nội bộ/anchor/ảnh bị thiếu. Kết quả máy đọc: `lai-thieu-integrity.json`.
- Các route Bình Hòa, Thuận An, Thuận Giao và khóa trẻ em vẫn dùng template ban đầu.
- Không sử dụng ảnh mockup làm nội dung, không tạo Review/AggregateRating không được xác minh, không dùng số hotline HLV làm số quầy vé.

## Giới hạn và phần cần bổ sung

1. Chưa có ảnh xác minh của Hồ bơi Nhật An, TT VHTT Lái Thiêu và chân dung thầy Lê Văn Thông. Giao diện dành sẵn vị trí, dùng đồ họa nhận diện; không gán ảnh địa điểm khác hoặc chân dung AI.
2. Chưa đo điểm Lighthouse/Core Web Vitals trong lượt này. Không coi build/SEO audit là kết quả đo hiệu năng thực tế.
3. Sau vòng kiểm tra responsive và chụp toàn trang, typography desktop đã được tăng theo mockup, thêm điểm nhấn ảnh nền ở phần lợi ích và chuyển một số nội dung HLV/khu vực sang props. Build được chạy lại cho bản cuối. Trình duyệt nhúng không còn kết nối trong lượt tiếp tục; đường Chrome native cũng bị công cụ dừng vì không xác định chắc URL hiện tại. Do đó chưa chụp lại/kiểm tra trực quan vòng cuối. Các ảnh trong `previews/lai-thieu/` phản ánh vòng trước các thay đổi này; cần mở bản build hiện tại để nghiệm thu hình ảnh cuối.
4. Các thông tin giờ mở cửa, giá vé, cơ sở Duy Anh và quyền tiếp nhận người ngoài ở hồ nội khu cần xác nhận lại trực tiếp khi xếp lớp; trang hiển thị lưu ý trong chi tiết từng hồ, không công bố giá/lịch chưa chốt như cam kết.

## Tài liệu và preview

- Hướng dẫn tái sử dụng, tokens và manifest: `lai-thieu-v2-implementation.md`.
- Prompt ảnh minh họa: `lai-thieu-image-prompts.json`.
- Ảnh xem trước vòng đã kiểm tra: `previews/lai-thieu/desktop-1440-full.jpg`, `mobile-390-full.jpg` và `mockup-comparison.jpg`.
- Xem bản mới nhất: trong `dayboi-web`, chạy `npm run dev`, mở URL Astro in ra và thêm `/hoc-boi-tphcm/lai-thieu/`.
