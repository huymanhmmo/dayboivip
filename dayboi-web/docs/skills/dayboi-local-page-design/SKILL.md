---
name: dayboi-local-page-design
description: Thiết kế và mở rộng trang xã/phường cùng trang hồ bơi, địa điểm dạy bơi trên dayboi.vip theo hệ giao diện Swim For Life đã duyệt. Dùng cho khu vực mới, nhân rộng cụm trang, chỉnh header/footer/menu và chuẩn hóa component, dữ liệu, ảnh, liên kết và kiểm tra responsive; không tự đổi giao diện toàn website.
---

# Thiết kế trang địa phương Swim For Life

Áp dụng kinh nghiệm từ hub Lái Thiêu và trang hồ Nhật An cho các khu vực khác. Có hai mẫu phối hợp: **trang xã/phường** giúp chọn nơi học; **trang địa điểm** giải thích một hồ/lớp cụ thể. Tái sử dụng hệ thiết kế và component, điền dữ liệu riêng cho khu vực; không sao chép cả trang rồi thay tên.

## Bắt đầu đúng phạm vi

- Làm trong repo hiện có; dự án gốc là `D:/04_dayboivip/dayboi-web`. Kiểm tra checkout, thay đổi đang có, route và dữ liệu liên quan trước khi sửa.
- Ưu tiên yêu cầu mới nhất và mockup người dùng đã duyệt. Nếu người dùng yêu cầu theo mẫu Swim For Life hiện có, dùng hub `/hoc-boi-tphcm/lai-thieu/` và chi tiết `/hoc-boi-nhat-an-lai-thieu/` làm chuẩn.
- Đọc [bản đồ mã nguồn](references/codebase-map.md) trước khi chọn phần tái sử dụng: tỉnh/xã/khu vực đã có template, adapter và header/footer đa vùng; factory nội dung chi tiết hồ của cụm Lái Thiêu vẫn cần đúng ngữ cảnh khi mở hồ ngoài cụm.
- Xác định xã/phường hành chính, vùng tuyển sinh và địa điểm thực tế. Một cụm có thể giới thiệu hồ giáp ranh nhưng không đổi địa chỉ của chúng sang phường của hub.

| Công việc | Tài liệu cần đọc |
| --- | --- |
| Làm/chỉnh giao diện hub xã/phường hoặc trang địa điểm | [Hệ giao diện và hai mẫu trang](references/design-system.md) |
| Thêm trang địa điểm, đổi menu hoặc nhân rộng nhiều khu | [Kiến trúc và dữ liệu](references/architecture-data.md), bản đồ mã nguồn |
| Biên tập nội dung, chọn ảnh, xử lý dữ liệu thiếu | [Nội dung và hình ảnh](references/content-media.md) |
| Rà soát, bàn giao hoặc triển khai | [Kiểm tra và triển khai theo đợt](references/quality-rollout.md) |

## Những nguyên tắc dùng chung

1. **Thương hiệu và địa phương là hai link:** logo Swim For Life → `/`; nhãn xã/phường đứng cạnh → hub của khu vực. Giữ hai vùng bấm và focus riêng trên desktop/mobile. Trang hồ có breadcrumb và liên kết về đúng hub.
2. **Một nguồn địa điểm:** ID, slug, địa chỉ, phân nhóm và trạng thái xuất bản xuất phát từ catalog. Hub, trang chi tiết, menu, footer, nearby, danh bạ và schema dùng adapter từ đó. Không rải các bản danh sách độc lập trong markup.
3. **Component nhỏ, dữ liệu độc lập:** route mỏng gọi template; section nhận props; header/footer/widget dùng chung theo cấu hình khu vực. Không dồn cả nội dung, dữ liệu, CSS và tương tác vào một file trang.
4. **Cùng một lưới ngang:** header, hero, nội dung, CTA cuối và footer dùng chung max-width/gutter. Giữ phong cách aquatic, chữ Việt dễ đọc, điểm nhấn cam/vàng của mẫu đã duyệt. Scope CSS trong họ trang địa phương.
5. **Thẻ dễ bấm:** cả cụm ảnh/tên/địa chỉ dẫn tới cùng đích, icon chỉ hỗ trợ thị giác. Không lồng link/nút; không dùng link rỗng hoặc tạo trang chưa có để lấp menu.
6. **Liên hệ theo từng địa điểm và giáo viên:** lấy tên, số điện thoại và nguồn của từng BQL/HLV/đơn vị trong dữ liệu địa phương. Một hồ có nhiều giáo viên thì trình bày từng người và số riêng; không gộp thành một hotline. Không lấy số `0986.456.678` hoặc một giáo viên đầu danh sách làm mặc định cho khu khác hay mọi hồ. Header/footer khu chưa có đầu mối được chỉ định dẫn tới danh sách người phụ trách, không tự chọn một số đại diện.
7. **Ảnh đúng vai trò:** ảnh thực tế, tư liệu tiện ích, phối cảnh, mặt bằng, ngoại thất và minh họa có nhãn phù hợp. Xem nội dung ảnh trước khi dùng. Không gán ảnh hồ khác cho hồ đang viết, giả ảnh khảo sát hoặc dùng chân dung AI làm HLV thật.
8. **Nội dung theo bằng chứng:** không suy ra giá vé, giờ mở cửa, độ sâu, quyền vào hồ, lịch lớp, ưu đãi hay lời chứng thực từ mockup/ảnh. Hồ nội khu phải làm rõ quyền sử dụng và điều kiện tiếp nhận HLV. Thiếu dữ liệu thì ghi điều cần xác nhận hoặc ẩn phần đó.
9. **Tái sử dụng các ảnh kỹ thuật đã duyệt:** ếch, sải, ngửa, bướm và đứng nước. Đổi khu vực không phải lý do vẽ lại kỹ thuật hoặc sao chép ảnh hồ/HLV của khu cũ.
10. **Xuất bản có chủ đích:** phân biệt địa điểm có thật, địa điểm đang vận hành, nơi có thể tổ chức lớp và trang đủ điều kiện index. Không tự tạo hàng nghìn trang chỉ thay tên xã/phường; không gỡ noindex hàng loạt để tăng số trang.

## Quy trình thực hiện

1. **Kiểm kê:** đối chiếu route hiện có, kế hoạch địa phương, địa giới, catalog, nguồn và bộ ảnh. Xác định public/residential/resort, hồ thuộc địa phương và hồ lân cận; ghi phần chưa biết.
2. **Chọn cách tái sử dụng:** giữ phần thị giác dùng chung; tách cấu hình vùng và dữ liệu từng hồ. Nếu component còn gắn Lái Thiêu, tham số hóa ở mức nhỏ nhất và giữ hành vi cũ làm mặc định tương thích trong giai đoạn chuyển đổi.
3. **Hoàn thiện một cặp mẫu:** hub khu vực + một địa điểm đại diện. Tạo thêm mẫu residential/public khi khác điều kiện sử dụng. Dùng cặp này để xác nhận dữ liệu, menu, ảnh và responsive trước khi nhân rộng.
4. **Nhân rộng từ catalog:** thêm các hồ có dữ liệu phù hợp, cập nhật các adapter và liên kết hai chiều. Nội dung về vị trí, cách tiếp cận, điều kiện và FAQ phải phản ánh từng nơi; không kéo dài bài bằng văn bản chung.
5. **Kiểm tra và ghi nhận:** chạy các check phù hợp trên output mới, kiểm chứng tương tác bằng trình duyệt, lưu screenshot và báo cáo đúng phạm vi đã kiểm tra. Cập nhật skill bằng kinh nghiệm đã quan sát, không biến một lỗi riêng lẻ thành quy tắc cho mọi tác vụ.

## Bàn giao và quyền thao tác

Đưa đường dẫn trang, phạm vi thay đổi, kết quả kiểm tra, ảnh/nguồn và dữ liệu còn thiếu. Với tác vụ lập kế hoạch, bàn giao kế hoạch cụ thể; với tác vụ triển khai giao diện, tiếp tục làm tới bản có thể xem và kiểm tra được.

Skill này không tự cấp quyền push GitHub, deploy hoặc gửi tin. Tuân thủ chỉ dẫn hiện hành; nếu người dùng đã yêu cầu deploy cho chính công việc đang làm thì kiểm tra rồi triển khai, không hỏi lại cùng quyền. Giữ lựa chọn chỉ commit tại máy khi chưa có chỉ dẫn thay đổi. Không deploy website chỉ để cài hoặc chỉnh tài liệu skill.
