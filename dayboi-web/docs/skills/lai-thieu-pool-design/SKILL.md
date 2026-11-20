---
name: lai-thieu-pool-design
description: Thiết kế và mở rộng trang chi tiết hồ bơi, lớp bơi trong cụm Lái Thiêu trên dayboi.vip bằng mẫu Nhật An, component Astro và dữ liệu địa điểm độc lập. Dùng khi tạo hoặc sửa các trang thuộc cụm này; không thay header toàn website.
---

# Thiết kế địa điểm học bơi Lái Thiêu

Lấy trang `/hoc-boi-nhat-an-lai-thieu/` làm mẫu triển khai cho nhóm bể bơi và lớp bơi Lái Thiêu. Giữ phong cách aquatic đã duyệt; thay dữ liệu, ảnh và điều kiện sử dụng theo từng địa điểm. Không nhân bản toàn bộ mã trang Nhật An thành nhiều file lớn.

## Chọn đúng nguồn và checkout

- Dự án gốc: `D:/04_dayboivip/dayboi-web`. Có thể đang làm trong worktree; kiểm tra branch và thay đổi đang có trước khi sửa. Không tạo ứng dụng Astro mới.
- Kế hoạch nội dung: `docs/ke-hoach-tuyen-sinh-hoc-boi-lai-thieu-tphcm.md` ở dự án gốc. Đọc phần địa điểm liên quan, không lấy các giá/giờ/chính sách ghi trong kế hoạch làm dữ liệu hiện hành đã xác minh.
- Mẫu thị giác: `D:/04_dayboivip/Mockup v2/Thiết kế website Hồ bơi Nhật An đa nền tảng.png`; tham khảo thêm bản Nhật An hiện tại và yêu cầu chỉnh sửa gần nhất của người dùng.
- Ảnh nguồn: `public/images/locations/lai-thieu-tphcm/`. Tên file và tên thư mục chỉ là gợi ý, phải xem ảnh trước khi dùng.

Đọc [hợp đồng thiết kế](references/design-contract.md) khi xây hoặc chỉnh giao diện; đọc [kiến trúc và dữ liệu](references/architecture.md) khi thêm hồ, route hoặc thay component dùng chung.

## Các quyết định bắt buộc của cụm trang

1. Giữ hub duy nhất `/hoc-boi-tphcm/lai-thieu/`; không tạo hub khác trùng mục đích. Hồ ở Bình Hòa, Thuận An, Thuận Giao cần ghi đúng địa phương, được liên kết trong cụm giáp ranh, không đổi tất cả thành Lái Thiêu.
2. Header địa phương là `LaiThieuHeader.astro`: chỉ nhóm bể bơi/lớp bơi Lái Thiêu. Không áp dụng lên toàn website chỉ vì component tái sử dụng được. Menu lấy từ nguồn địa điểm chung; chưa có route thì trỏ anchor tồn tại trên hub.
   Logo Swim For Life và cụm địa phương là **hai link độc lập**: logo → `/`; “Lái Thiêu · TP.HCM” → `/hoc-boi-tphcm/lai-thieu/`. Không bọc cả hai trong một anchor và không ẩn link địa phương ở mobile.
3. Dùng `PoolDetailPage.astro` và các section nhận props. Tách thông tin hồ, ảnh, khóa học, học phí, FAQ khỏi markup. Dùng lại footer, icon, sóng, liên hệ, ảnh kỹ thuật và widget sẵn có.
4. Hotline chuyên môn khu vực: `0986.456.678`, thầy Lê Văn Thông — Kiện tướng Bơi lội. Phân biệt số HLV với quầy vé/BQL. Không dùng chân dung AI giả làm người thật.
5. `public` và `residential` có điều kiện sử dụng khác nhau. Hồ nội khu cần quyền sử dụng và sự đồng ý của BQL; không khẳng định khách ngoài mua vé được, miễn phí hay HLV được vào khi chưa có nguồn.
6. Ảnh minh họa phải ghi rõ. Phối cảnh, mặt bằng, tòa nhà và phòng nghỉ có caption đúng loại, không gắn nhãn ảnh hồ thực tế. Không cắt mockup thành asset, lặp một ảnh để giả số lượng hoặc dùng ảnh hồ khác gán cho hồ đang viết.
7. Giờ mở cửa, giá vé, độ sâu, tiện ích, tọa độ, lịch còn chỗ, chính sách và lời chứng thực cần bằng chứng riêng. Thiếu thì dùng trạng thái chưa xác minh/đang cập nhật, ẩn mục không có dữ liệu hoặc ghi điều cần xác nhận. Không lấy số liệu trong ảnh mockup làm sự thật.
8. Học phí giảng dạy và vé vào hồ là hai khoản riêng. Lộ trình 8–12 buổi là tham khảo, không cam kết chắc chắn về thời gian biết bơi, hoàn tiền, học lại hay bảo lưu.
9. Không tự tạo testimonial, rating, case study, năm kinh nghiệm hoặc trạng thái “đã khảo sát”. Nhật An hiện không có testimonial địa điểm; giữ ẩn nếu chưa có nguồn.
10. Giữ các chỉnh sửa người dùng đã chốt: 5 ảnh kỹ thuật bơi đúng tư thế, bơi ngửa toàn thân trên mặt nước không chân vịt; không phục hồi dòng “Tư liệu hồ sơ HLV · Swim For Life” dưới ảnh HLV.
11. Hub và trang hồ dùng cùng `LaiThieuHeader`, `LaiThieuFooter`, `LocalContactBar`; không sao chép từng phiên bản. Mọi thẻ hồ trên hub là một vùng bấm đầy đủ tới chi tiết, không chỉ icon nhỏ. Ảnh Nhật An trên hub dùng minh họa đã tạo và nhãn minh họa.

## Quy trình theo loại công việc

### Thêm địa điểm

- Đối chiếu danh mục triển khai, phân loại hồ, địa chỉ mới/cũ, ảnh và trạng thái vận hành. Ghi nguồn và phần chưa rõ trước khi tạo nội dung.
- Xem ảnh, chọn ảnh đúng hồ; ưu tiên WebP derivative với tên theo địa điểm và manifest giữ nguồn gốc. Không xóa/sửa ảnh gốc của người dùng.
- Thêm dữ liệu vào danh mục địa điểm và mô hình chi tiết. Các phần về vị trí, quyền sử dụng, gallery, FAQ, lưu ý lớp học phải riêng cho hồ; tránh bài hàng loạt chỉ thay tên.
- Lắp route mỏng gọi template, cập nhật hub/menu/nearby/blog từ dữ liệu chung. Tránh nhiều nguồn slug/địa chỉ mâu thuẫn.
- Nếu dự án chưa vận hành hoặc chưa đủ thông tin để nhận học: chuẩn bị bản nháp có trạng thái phù hợp, không trình bày như lớp đang tuyển sinh. Không tạo trang indexable chỉ để phủ từ khóa.

### Sửa giao diện

- Giữ bố cục, tokens, typography và bán kính của mẫu. Sửa component nhỏ nhất phù hợp; scope CSS vào nhóm trang, kiểm tra ít nhất Nhật An và một hồ thuộc variant còn lại khi sửa template.
- Menu mobile là drawer có accordion, vùng cuộn riêng, nút đóng và liên hệ. Desktop dùng nhóm menu có link đích rõ. Không quay lại danh sách phẳng căn giữa phủ phần hero.
- Gallery mở ảnh lớn, đóng được và khôi phục focus; FAQ/hướng dẫn dùng details/summary native. Không thêm framework hoặc thư viện nặng để xử lý tương tác đơn giản.

## Kiểm tra và bàn giao

- Build bằng script của repo; audit SEO trên output mới. Các lệnh optimize/dimensions có thể dùng dry-run để tránh sửa ảnh/trang ngoài phạm vi, rồi tối ưu asset của tác vụ riêng.
- Với trang mới/template: kiểm tra 360/390/430, 768/1024 và 1280/1440/1920; menu, gallery, FAQ, Maps, tel/Zalo, anchor và liên kết hai chiều. Không báo phép kiểm tra thành công nếu công cụ không thực sự xác nhận.
- Chạy thêm `node scripts/audit-lai-thieu-pages.mjs` sau build: kiểm tra 20 route và hub, logo/địa phương hai đích, link/anchor, ảnh và trạng thái noindex/sitemap. Bài còn thiếu xác minh dùng noindex ở preview; chuyển trạng thái có chủ đích khi đủ cơ sở.
- Một H1, title/description riêng, canonical đúng, BreadcrumbList và schema khớp nội dung. Không xuất tọa độ/giá/rating thiếu nguồn. Nội dung cần hữu ích theo địa điểm; không chèn từ khóa hoặc văn bản lặp chỉ để đạt số từ.
- Bàn giao screenshot desktop/mobile, asset manifest, báo cáo kiểm tra và hướng dẫn thêm hồ. Chỉ khẳng định đạt Core Web Vitals khi có phép đo thực tế.
- Quyền xuất bản theo yêu cầu hiện hành của người dùng. Không suy ra quyền gửi tin, push GitHub hoặc deploy chỉ từ việc gọi skill. Nếu người dùng đã yêu cầu triển khai production, dùng bản đã kiểm tra và tiến hành trong phạm vi đó, không hỏi lại cùng một quyền. Xác minh domain chính sau triển khai. Giữ lựa chọn không push của phiên nếu chưa được người dùng thay đổi.
