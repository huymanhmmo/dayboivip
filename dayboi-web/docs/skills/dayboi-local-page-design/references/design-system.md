# Hệ giao diện và hai mẫu trang

## Ngôn ngữ thị giác

Chuẩn đã triển khai: hub Lái Thiêu và chi tiết Nhật An. Mockup mới được duyệt hoặc yêu cầu chỉnh sửa mới nhất có thể thay đổi bố cục cụ thể; không tự chuyển toàn site sang một phong cách khác.

- Nền trắng/xanh rất nhạt, chữ navy, cyan cho nước/đường nét, cam cho CTA chính, vàng cho tên địa điểm hoặc badge quan trọng.
- Font Be Vietnam Pro hiện có. Giữ cấp bậc H1/H2/H3; không raster hóa chữ hoặc thu nhỏ toàn trang để giống một ảnh mockup dài.
- Card bo 16–22px, viền xanh nhạt, shadow nhẹ nhuốm xanh. Dùng sóng nước có tiết chế và icon cùng bộ `landing/ui`.
- Màu tham chiếu hiện có: ocean `#073f76`, text `#082d51`, primary `#087bb5`, cyan `#00b9dd`, nền `#e8f8ff`, muted `#536e83`, viền `#d7eaf4`, vàng `#ffcf35`.
- Cam sáng là màu nhấn. Với chữ trắng nhỏ trên nút, dùng nền đủ tối như gradient `#c94b00` → `#b93b00`; nền cyan sáng không mặc nhiên đủ tương phản. Kiểm tra màu thực sau CSS, cả hover/focus.

## Lưới và responsive

Dùng một bộ token cho header, nội dung hub, trang hồ, CTA và footer. Chuẩn hiện tại: max-width 1510px; gutter mỗi bên 36px, xuống 24px ở ≤1500, 20px ở ≤1180 và 16px ở ≤700. Điều chỉnh chung nếu mockup yêu cầu, không tăng width riêng từng section.

Hero có thể full bleed, nhưng khối chữ bên trong phải cùng mép với lưới. Bảng chữ dài có thể có measure nhỏ hơn bên trong shell. Tránh width cố định gây tràn ngang; grid dùng `minmax(0,1fr)`, khối flex có thể cần `min-width:0`.

Desktop giữ hình lớn, nhóm cột rõ. Tablet giảm cột và đổi menu theo không gian thật. Mobile ưu tiên chữ đọc được, ảnh không che chủ thể, CTA đủ vùng bấm và thanh liên hệ không che cuối trang. Không ép hai nút dài cạnh nhau khi không đủ chỗ.

## Mẫu hub xã/phường

| Thành phần | Vai trò và điều kiện |
| --- | --- |
| Header địa phương | Logo chung, nhãn địa phương riêng, menu đúng cụm, liên hệ có căn cứ |
| Hero | H1 tên địa phương, mô tả nhu cầu, ảnh phù hợp, CTA thật; không giả lớp đang mở |
| Chọn nhu cầu | Trẻ em, người lớn, người sợ nước, cư dân hoặc nhu cầu có thật trong khu vực |
| Tìm hồ gần bạn | Tìm không dấu, lọc khu vực/loại hồ, nhóm trong địa phương và giáp ranh, trạng thái rỗng/reset |
| Khóa học và học phí | Hình thức có thể tư vấn, tách phí dạy và vé hồ; không tự đặt giá |
| Năm kỹ thuật | Ếch, sải, ngửa, bướm, đứng nước/sinh tồn; dùng ảnh và link kỹ thuật có sẵn |
| Lộ trình và an toàn | Theo khả năng; số buổi chỉ là tham khảo khi có dữ liệu, không cam kết biết bơi |
| HLV khu vực | Chỉ hiện người, ảnh và liên hệ đã xác nhận phạm vi phụ trách |
| Thông tin địa phương | Địa chỉ mới/cũ, đường/mốc nhận diện có nguồn, phường lân cận đúng tên |
| FAQ, CTA, footer | Trả lời vấn đề địa phương; phản hồi học viên chỉ xuất hiện khi có bằng chứng |

Đây là thành phần mẫu, không phải yêu cầu nhồi đủ section. Khi chưa có HLV địa phương hoặc mức học phí, trình bày tình trạng phù hợp; không lấy dữ liệu Lái Thiêu để lấp chỗ.

## Mẫu địa điểm dạy bơi

Header → breadcrumb/hero → thông tin nhanh → gallery và đánh giá điều kiện → khóa học và kỹ thuật → HLV/vị trí/chuẩn bị → học phí/FAQ → hướng dẫn riêng địa điểm → nơi gần đó → CTA/footer.

- Thông tin nhanh chỉ hiển thị thông số có nguồn hoặc trạng thái cần xác nhận. Dấu kiểm dành cho thông tin thực sự xác minh.
- Gallery tự thích ứng 1/2/4/5 ảnh; đếm đúng số ảnh. Caption và dialog không giả sự phong phú bằng ảnh lặp.
- Public: giải thích vé, quầy/BQL, khu tập và tiếp nhận HLV. Residential: quyền sử dụng của cư dân/khách và BQL đồng ý. Resort: tách dịch vụ hồ khỏi các dịch vụ/giờ của toàn khu.
- Trang lớp không có hồ cố định: nêu rõ nơi tổ chức còn cần thống nhất; không tạo địa chỉ, tọa độ hoặc gắn nhãn một cơ sở cụ thể.
- Map vùng và pin địa điểm là hai loại khác nhau. Nếu chưa xác minh đúng pin, ghi rõ bản đồ khu vực và giữ link tìm đường độc lập khi iframe không tải.

## Trang xã/phường

Khung tham chiếu của hub tuyển sinh: header vùng → hero → chọn lớp theo nhu cầu → tìm hồ theo khu vực/loại hồ → khóa học → năm kỹ thuật → lộ trình → HLV → lý do lựa chọn có căn cứ → thông tin địa phương/lân cận → CTA/footer. Nguồn, FAQ hoặc phản hồi chỉ thêm khi hữu ích và có dữ liệu; không ép đủ section bằng nội dung giả.

- Hero nói rõ xã/phường và tỉnh/thành; mô tả ngắn đối tượng học, hướng dẫn chọn nơi phù hợp và CTA theo khả năng tiếp nhận đã biết.
- Nhóm nhu cầu thường gồm trẻ em, người lớn, người sợ nước và cư dân nội khu. Chỉ giữ nhóm có nội dung/đích liên kết phù hợp, không cố định số thẻ cho mọi địa phương.
- Danh sách hồ là phần chính: ảnh đại diện, loại hồ, địa chỉ đúng địa phương, nhãn ảnh và vùng bấm toàn thẻ. Hồ giáp ranh nằm nhóm riêng có tên xã/phường thực tế.
- Tìm kiếm hỗ trợ tiếng Việt không dấu, tên hồ và địa chỉ; filter có nhãn, số kết quả, trạng thái rỗng và nút bỏ lọc. Ẩn nhóm không còn kết quả nhưng giữ thông báo cho người dùng.
- Thông tin địa phương cần giúp đi học: trục đường/mốc nhận diện có nguồn, địa danh mới/cũ, cách chọn hồ gần nhà và liên kết xã/phường lân cận. Không nhét một đoạn giới thiệu hành chính chung vào mọi hub.
- Khu chưa có HLV hoặc đầu mối vùng được xác nhận có thể giữ vai trò danh bạ/hướng dẫn; không tự biến thành trang nhận đăng ký với hotline Lái Thiêu.

Hub và trang hồ cùng dùng lưới ngang. Mốc tham chiếu đã kiểm tra: max 1510px; gutter mỗi bên 36px trên 1500px, 24px ở 1181–1500px, 20px ở 701–1180px và 16px ở tối đa 700px. Dùng một nguồn token, không chép bốn bộ giá trị sang bốn template. Đo hộp thực, bỏ qua wrapper `display:contents`. Nội dung đọc dài có thể giới hạn độ dài dòng bên trong lưới rộng.

## Header, footer và widget

Logo → trang chủ toàn site; nhãn địa phương → hub; menu hồ → trang hồ; mục lớp/kỹ thuật/học phí/HLV → route hoặc anchor thực trên đúng trang. Anchor có `scroll-margin-top` chừa sticky header.

Desktop: nhóm menu theo ý nghĩa, không dồn hàng chục link vào một cột quá cao. Mobile: drawer có accordion, vùng cuộn riêng, nút đóng, khóa cuộn nền, Escape, focus quay lại trigger; đổi breakpoint phải đóng trạng thái cũ. Header có nền đủ kín, không để chữ nội dung xuyên qua khi cuộn.

Footer dùng cùng cấu hình địa phương, có hub, nhóm hồ phù hợp, liên kết chuyên môn và liên hệ đúng vai trò. Chọn hồ nổi bật theo ID/chủ đích, không dùng vị trí mảng để gán ảnh hoặc xác định hồ.

Mỗi thẻ có một đích bấm chính bao phủ ảnh/tên/địa chỉ, aria-label rõ và focus-visible. Không lồng anchor; icon mũi tên không phải vùng bấm duy nhất. Nếu chưa có trang chi tiết thì dẫn tới thông tin thật đang có hoặc hiện trạng thái phù hợp, không dùng `href="#"`.

Thanh liên hệ mobile chỉ chứa hành động thật. Không hiển thị nút gọi/Zalo nếu thiếu liên hệ hợp lệ; không dùng form dành cho doanh nghiệp để giả luồng đăng ký cá nhân. Widget dùng chung nhận props, không chép mã theo từng trang.
