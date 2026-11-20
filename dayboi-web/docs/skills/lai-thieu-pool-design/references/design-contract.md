# Hợp đồng thiết kế — mẫu Nhật An

## Thị giác

- Aquatic: xanh biển/navy, cyan, nền trắng xanh nhạt; nhấn cam ở CTA, vàng ở badge.
- Font Be Vietnam Pro theo hệ hiện có. H1 lớn, nghiêng phần tên hồ màu vàng; H2/H3 rõ cấp. Nội dung dài dễ đọc, không thu nhỏ toàn trang để ép vào một màn hình như ảnh mockup.
- Tokens chuẩn trong `src/styles/pool-detail.css`: ocean #073f76, deep-blue #07528a, primary #087bb5, cyan #00b9dd, light-blue #e8f8ff, text #082d51, muted #536e83, orange #ff791d, yellow #ffcf35, border #d7eaf4. Dùng màu đủ tương phản cho chữ CTA; không rải màu ngẫu nhiên theo từng hồ.
- Card 16–22px, nút CTA tròn, viền mảnh xanh nhạt, shadow nhuốm xanh. Sóng nước là SVG/CSS thật; không raster hóa văn bản hoặc component.
- Hero ảnh phải, chữ trái trên gradient xanh; sóng dưới. Mobile tách vùng chữ và ảnh để không che chủ thể, badge và CTA đủ rõ.

## Trình tự component

Header → breadcrumb/hero → 5 quick facts → gallery + đánh giá địa điểm → 4 khóa học + 5 kỹ thuật → HLV + bản đồ/hướng đi + chuẩn bị → học phí + FAQ → hướng dẫn mở rộng → hồ gần đó → CTA cuối → footer/thanh liên hệ.

Desktop giữ nhóm cột như mẫu. Tablet chuyển từng nhóm cột hợp lý. Mobile xếp dọc, khóa học 2 cột khi đủ chỗ; kiểu bơi có thể scroll-snap ngang. Không để thanh liên hệ che phần cuối nội dung.

## Ảnh và nội dung

- Hero thật đúng hồ nếu có; nếu chưa có ảnh, dùng minh họa ghi rõ, không phỏng đoán cơ sở vật chất.
- Gallery theo array, đúng số ảnh. Caption phân biệt ảnh hồ, phối cảnh, mặt bằng, ngoại thất và minh họa lớp. Một ảnh cũng hợp lệ; không tạo “12+ ảnh” giả.
- Ảnh HLV đang dùng là ảnh hướng dẫn trong hồ sơ chính thức Swim For Life; không gọi là ảnh tại Nhật An. Người dùng đã yêu cầu bỏ dòng chú thích bên dưới; giữ nguồn ở manifest.
- 5 ảnh kỹ thuật dùng chung từ `localLandingPages.ts`: bơi ếch mũ trắng trong pha lấy hơi, tay thu sát trước ngực; sải một tay vươn một tay kéo; ngửa đủ tay chân trên mặt nước, không chân vịt; bướm hai tay đồng thời và chân dolphin; đứng nước thân thẳng.
- Chỉ dấu kiểm xác minh khi dữ liệu thực sự verified. Khác trạng thái phải khác nhãn/icon; không dùng cảm giác “đã khảo sát” để làm đẹp.

## Header địa phương

`LaiThieuHeader.astro`, `laiThieuNavigation.ts`, `lai-thieu-header.css` là bộ riêng cho cụm Lái Thiêu. Logo dùng ảnh brand chung. Desktop có nhóm hồ dịch vụ/nội khu, lớp học và kỹ thuật; mobile drawer có nút đóng, accordion, khóa cuộn nền, focus quay về nút mở. Dùng native details và dialog, hỗ trợ bàn phím. Không tự sửa `components/common/Header.astro` của toàn website.

Logo thương hiệu liên kết về `/`. Cụm “Lái Thiêu · TP.HCM” đứng cạnh logo là link riêng về hub khu vực. Có đường phân tách và vùng focus/bấm riêng; không lồng anchor hoặc ghép hai đích trong cùng một link. Giữ cả hai trên desktop và mobile.

Header/footer được áp dụng cho cả hub và các trang hồ bằng cùng component. CTA điện thoại/Zalo dùng `LocalContactBar.astro`, không chép widget theo trang. Menu khi danh mục tăng phải có giới hạn chiều cao/scroll, nhóm Lái Thiêu và nhóm giáp ranh rõ ràng. Khi header sticky, mọi đích neo thẻ hồ/lớp/section cần `scroll-margin-top` đủ chừa chiều cao header.

## Các khác biệt được phép theo dữ liệu

Public: vé hồ, đơn vị vận hành, điều kiện tiếp nhận lớp. Residential: quyền vào hồ, khách đi cùng/HLV, khu tiện ích và quy định BQL. Resort: phân biệt giờ dịch vụ hồ với giờ toàn khu; không khẳng định khách ngoài được dùng mọi tiện ích.

Giữ cấu trúc nhận diện nhưng ẩn section thiếu dữ liệu. Ưu tiên sự thật hơn ép đủ số ảnh, review hoặc thông số trong mockup.

## Lưới ngang và độ tương phản

Header, hub, trang hồ và footer dùng chung tokens trong `lai-thieu-layout.css`: max 1510px; gutter 36/24/20/16px theo breakpoint. Không đặt lại max-width riêng cho từng template. So sánh mép trái/phải của các hộp có layout thực; `display:contents` không có hộp để đo. Header sticky dùng nền trắng đặc để chữ của nội dung phía dưới không xuyên qua.

CTA và nhãn nhỏ dùng màu nền bảo đảm tương phản chữ trắng tối thiểu 4.5:1. Giữ cyan sáng làm màu trang trí, không dùng nó làm nền cho chữ trắng nhỏ.
