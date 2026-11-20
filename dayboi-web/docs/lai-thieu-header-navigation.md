# Header cho nhóm bể bơi và lớp học Lái Thiêu

Phạm vi đã được người dùng làm rõ: chỉ nhóm trang Lái Thiêu, không phải thay header của toàn bộ dayboi.vip. Triển khai trước trong template chi tiết hồ bơi Nhật An.

## Khảo sát cấu trúc

- Header toàn website hiện ở `components/common/Header.astro`, gọi qua `PageLayout.astro`. Nội dung bao gồm tỉnh thành, lớp học toàn quốc và tổ chức; không phù hợp để đưa nguyên vào nhóm địa phương.
- Trang tổng Lái Thiêu dùng `components/landing/LandingHeader.astro`; phiên bản menu phẳng theo anchor không đủ cho các trang chi tiết.
- Nguồn địa điểm chính là `data/laiThieuPools.js`, được nạp tiếp vào `communePoolsData.js`. Có 6 địa điểm, gồm 3 hồ dịch vụ/công cộng và 3 hồ nội khu.
- Nhật An có route chi tiết mới. Duy Anh, TT VHTT, Emerald, Opal và Rivana hiện dẫn tới anchor tồn tại trên hub; không tạo URL hồ giả.
- Các trang kỹ thuật bơi có URL riêng đã tồn tại. Các chương trình trên trang hồ có ID ổn định để menu trỏ đúng card.

## Cấu trúc menu

| Nhóm | Đích đến |
|---|---|
| Lái Thiêu | Hub `/hoc-boi-tphcm/lai-thieu/` |
| Hồ bơi — Dịch vụ & công cộng | Nhật An; Duy Anh; TT VHTT Lái Thiêu |
| Hồ bơi — Nội khu | Emerald Golf View; Opal Skyline; The Rivana |
| Lớp học | `#lop-tre-em`, `#lop-nguoi-lon`, `#lop-kem-rieng`, `#lop-nhom-nho` trên trang hồ |
| Kỹ thuật bơi | Bài ếch, sải, ngửa, bướm, đứng nước; lộ trình tại trang hồ |
| Học phí / Huấn luyện viên | Section tương ứng tại trang hồ hiện tại |
| Liên hệ | 0986.456.678 và Zalo đã dùng cho Lái Thiêu |

## Tái sử dụng

Component: `src/components/landing/LaiThieuHeader.astro`. Dữ liệu menu: `src/data/laiThieuNavigation.ts`. Styles: `src/styles/lai-thieu-header.css`.

Truyền `courseBaseHref` là đường dẫn trang hồ đang dùng template, `currentPath` để đánh dấu link trang hiện tại và `enrollmentHref` cho CTA. Các card chương trình của trang đó cần có 4 ID chuẩn nêu trên; các section dùng ID `khoa-hoc`, `ky-thuat-boi`, `hoc-phi`, `huan-luyen-vien`, `lo-trinh`, `dang-ky`.

Desktop dùng mega menu mở bằng nhấp chuột hoặc bàn phím. Chỉ một nhóm được mở; Escape, chọn liên kết hoặc nhấp ngoài sẽ đóng. Mobile/tablet dưới 1181px dùng dialog drawer, nhóm accordion, cuộn riêng, khóa cuộn trang phía sau; Escape/nút đóng khôi phục focus cho nút mở menu. Các phần liên hệ luôn nằm cuối drawer.

Khi hồ mới có route chi tiết, thêm `detailHref` vào dữ liệu hồ. Menu tự cập nhật từ nguồn chung. Không sửa header toàn website khi thêm hồ trong Lái Thiêu.
