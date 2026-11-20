# Kiểm tra và triển khai theo đợt

## Chọn phạm vi kiểm tra theo thay đổi

| Thay đổi | Phạm vi cần xác nhận |
| --- | --- |
| Dữ liệu một hồ | Trang hồ, thẻ trên hub, menu/footer/nearby/danh bạ liên quan, metadata và ảnh |
| Template chi tiết | Ít nhất public + residential, hồ ít/nhiều ảnh, tên/địa chỉ dài, nơi thiếu một số dữ liệu |
| Header/footer/lưới/widget dùng chung | Hub + trang hồ của khu cũ và mới, menu desktop/mobile, focus, liên hệ và mép ngang |
| Registry/route/index/middleware | Canonical, trùng route, noindex/sitemap, breadcrumb, HTML liên hệ sau build |
| Tài liệu/skill | Frontmatter, liên kết tham chiếu, ví dụ, phân biệt mã hiện có và đề xuất; không cần build/deploy site nếu không đổi runtime |

## Kiểm tra trên output mới

Với thay đổi website: dùng script build hiện có (`npm run build`) và audit SEO (`npm run audit:seo:strict`) trong đúng app/checkout. Chạy preview từ build hoàn tất rồi kiểm tra trình duyệt. Build thành công không chứng minh menu, gallery, form hay bản production hoạt động.

Hệ đa vùng có `scripts/audit-locality-integrity.mjs` để đối chiếu địa điểm/liên hệ với nguồn và kiểm tra link/anchor/ảnh, cùng `scripts/audit-locality-browser.mjs` cho các mẫu tỉnh/xã/VI/EN. Baseline route/index phải được chụp trước khi refactor, không lấy output đã thay đổi làm baseline.

Hai script `scripts/audit-lai-thieu-pages.mjs` và `scripts/audit-responsive-pages.mjs` vẫn phục vụ hồi quy riêng Lái Thiêu. Không dùng kết quả của cụm này để tuyên bố khu mới đạt.

`scripts/verify-lai-thieu-preview.mjs` cũng có danh sách route cố định. Đối chiếu HTTP sau upload/deploy phải bao phủ các route/ảnh/CSS/JS thực của lần triển khai mới. Ghi base URL, thời gian, phiên bản và phạm vi; giữ báo cáo lịch sử đúng bản của nó.

## Matrix responsive

Với một họ template mới hoặc chỉnh lưới/menu: kiểm tra đại diện ở 360/390/430, 768/1024, 1280/1440/1920. Các trang chỉ khác dữ liệu có thể kiểm tra thêm ở mobile + desktop, chú trọng tên dài, địa chỉ dài, thiếu ảnh/HLV và điều kiện nội khu.

- Mép header/hero/content/footer khớp cùng lưới; không có tràn ngang. Khi đo, `display:contents` không có hộp để so tọa độ.
- Hero/crop không cắt chủ thể sai; ảnh có nhãn phù hợp, tải được và không méo. Chờ font và ảnh decode trước screenshot, cả sau điều hướng lại.
- CTA không tràn hoặc bị thanh liên hệ che. Sticky header không xuyên chữ bên dưới và không che đích anchor.
- Dropdown/drawer vừa viewport, phần dài cuộn riêng, đóng bằng nút/Escape/link, khóa cuộn và trả focus đúng. Đổi breakpoint không để trạng thái menu cũ chặn trang.
- Filter tìm có dấu/không dấu, lọc loại/khu, không kết quả/reset; số lượng và nhãn nhóm khớp catalog, nhóm rỗng ẩn đúng.
- Click ảnh/tên/địa chỉ của card cùng dẫn đúng hồ, kể cả chỗ xa icon. Không có link/nút lồng nhau.
- Gallery mở/đóng/next/previous đúng số ảnh, trả focus; FAQ mở nội dung; Maps có đích dự phòng; tel/Zalo đúng chủ thể.
- Kiểm tra link hai chiều hub ↔ địa điểm, menu/footer/nearby, canonical/noindex/sitemap, ID không trùng và anchor tồn tại.

Quan sát tương tác thực trước khi viết kịch bản kiểm tra; ưu tiên locator có ngữ nghĩa và chờ trạng thái xác định. Chạy viewport Chromium là kiểm tra responsive mô phỏng, không báo đã thử trên điện thoại vật lý nếu chưa làm. Tuân thủ hướng dẫn ARTEMIS của môi trường khi thực sự viết kiểm thử ứng dụng Android; không yêu cầu thiết bị Android chỉ để đo width trang web.

Không gửi form tư vấn, gọi điện hay nhắn Zalo thử cho người thật khi chưa được cho phép. Kiểm tra href, khả năng mở giao diện và nhãn trong phạm vi phù hợp. Không khẳng định endpoint/form backend đạt nếu mới kiểm tra UI.

## Nhân rộng theo đợt

1. Kiểm kê route/dữ liệu/ảnh và ghi quyết định vùng. Chọn cặp hub + địa điểm mẫu và các variant cần có.
2. Tham số hóa phần dùng chung, hoàn thiện cặp mẫu, kiểm tra cả khu cũ. Khi người dùng yêu cầu duyệt mẫu, làm mẫu cụ thể có thể xem rồi mới xin quyết định phụ thuộc.
3. Thêm các địa điểm còn lại theo catalog; không tạo lớp đang hoạt động cho dự án tương lai, không tự chuyển index hàng loạt.
4. Audit build, ảnh, liên kết và responsive theo tác động. Ghi lỗi thật, sửa rồi chạy lại phần liên quan; không chạy lại toàn bộ chỉ để tích lũy số check.
5. Bàn giao bản đã kiểm chứng; cập nhật bài học có thể tái sử dụng vào skill, giữ thông tin riêng của vùng trong dữ liệu/hồ sơ vùng.

## Triển khai khi nằm trong yêu cầu hiện hành

Dùng tài khoản/Worker và quy trình triển khai hiện có của dự án; kiểm tra config thực trước khi chạy vì tên Worker trong file cũ có thể khác production. Không đưa ID tài khoản hoặc bí mật vào skill chung như mặc định cho mọi dự án.

Upload đúng output đã kiểm tra. Trước khi chuyển production, đọc deployment hiện tại để tránh ghi đè thay đổi đồng thời; giữ phiên bản trước để có đường quay lại. Không sửa DNS, domain, secrets hoặc tài nguyên khác nếu công việc không cần.

Sau deploy: kiểm tra domain chính, route đại diện, ảnh/CSS/JS và các hành vi bị ảnh hưởng. Phân biệt sự lan truyền edge ngắn với lỗi thật; khi công cụ báo rate limit, tôn trọng thời gian chờ và dùng các phép kiểm tra độc lập phù hợp, không lặp request để vượt hạn mức.

Bàn giao link production/preview, thay đổi chính, kết quả đã xác minh, nguồn/manifest/screenshot và hạn chế kiểm tra thực tế. Không gọi là đạt Core Web Vitals, SEO toàn diện hoặc WCAG toàn site nếu chưa có phép đo tương ứng. Tuân thủ quyền push/deploy của phiên; cập nhật skill không tự cấp quyền xuất bản website.
