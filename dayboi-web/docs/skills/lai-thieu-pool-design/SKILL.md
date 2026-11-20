---
name: lai-thieu-pool-design
description: Hồ sơ thiết kế riêng cụm Lái Thiêu trên dayboi.vip, gồm mẫu Nhật An, địa điểm, liên hệ và các quyết định đã duyệt. Dùng khi làm hub hoặc trang hồ trong cụm này; dùng dayboi-local-page-design cho quy trình chung và khu vực khác.
---

# Hồ sơ thiết kế cụm Lái Thiêu

Quy trình dùng chung cho trang xã/phường và địa điểm dạy bơi được bảo trì trong [dayboi-local-page-design](../dayboi-local-page-design/SKILL.md). Đọc skill chung khi thiết kế/nhân rộng; dùng hồ sơ này để áp dụng đúng các quyết định riêng của Lái Thiêu. Không lấy thông tin vùng dưới đây làm mặc định cho khu khác.

## Nguồn và mẫu đã duyệt

- App gốc: `D:/04_dayboivip/dayboi-web`; kiểm tra checkout đang dùng trước khi sửa.
- Hub duy nhất: `/hoc-boi-tphcm/lai-thieu/`. Mẫu chi tiết: `/hoc-boi-nhat-an-lai-thieu/`.
- Kế hoạch: `docs/ke-hoach-tuyen-sinh-hoc-boi-lai-thieu-tphcm.md` tại app gốc. Đọc dữ liệu liên quan; giá/giờ/chính sách trong kế hoạch không mặc nhiên là dữ liệu hiện hành.
- Mockup: `D:/04_dayboivip/Mockup v2/Thiết kế website Hồ bơi Nhật An đa nền tảng.png`. Ưu tiên chỉnh sửa mới nhất của người dùng và giao diện đã triển khai.
- Ảnh gốc: `public/images/locations/lai-thieu-tphcm/`. Giữ nguyên ảnh nguồn; xem ảnh trước khi chọn.

## Quyết định riêng cần giữ

1. Logo Swim For Life là link về `/`; cụm “Lái Thiêu · TP.HCM” là link độc lập về hub. Giữ cả hai ở desktop/mobile. Header/footer này chỉ phục vụ nhóm hồ/lớp của cụm; không thay header toàn site.
2. Liên hệ chuyên môn hiện được cung cấp: `0986.456.678`, thầy Lê Văn Thông — Kiện tướng Bơi lội. Đây không phải số quầy vé/BQL của từng hồ và không là mặc định toàn quốc.
3. `laiThieuVenueCatalog.js` là nguồn danh tính/route/phân nhóm; adapter cấp dữ liệu cho hub, menu và danh bạ. Các hồ Bình Hòa, Thuận An, Thuận Giao giữ đúng địa phương và nhóm lân cận. Ranh giới Vĩnh Phú cũ chưa rõ phải ghi điều cần đối chiếu.
4. Dự án tương lai tách khỏi địa điểm có thể xem xét học. Các trang đang noindex giữ nguyên đến khi có quyết định dựa trên nguồn bổ sung; kiểm tra catalog thực thay vì giả định số trang là hằng số.
5. Dùng `PoolDetailPage.astro` và các section nhận props; Nhật An giữ dữ liệu chuyên sâu riêng. Header/footer/contact bar được chia sẻ giữa hub và trang hồ. Mỗi thẻ hồ là vùng bấm đầy đủ tới đúng `detailHref`.
6. Ảnh Nhật An hiện là minh họa có nhãn. Phương Nam có ảnh tên “khuôn viên” nhưng nội dung là phòng ngủ; Habitat có ảnh ngoại thất. Không dùng chúng làm bằng chứng ảnh hồ thực tế.
7. Giữ bộ năm ảnh kỹ thuật đã duyệt: ếch pha lấy hơi/tay thu trước ngực, sải đúng pha tay chân, ngửa toàn thân trên mặt nước không chân vịt, bướm hai tay cùng pha và đứng nước. Không vẽ lại chỉ vì thêm hồ.
8. Không phục hồi dòng “Tư liệu hồ sơ HLV · Swim For Life” dưới ảnh HLV. Ảnh hồ sơ không được gọi là ảnh chụp tại mọi hồ trong cụm.
9. Lưới header/nội dung/footer dùng chung `lai-thieu-layout.css`, max 1510px và gutter responsive. Không đặt lại width riêng khiến hub hẹp hơn header.

## Tài liệu triển khai riêng

- [Hợp đồng thị giác và quyết định chi tiết](references/design-contract.md): đọc khi chỉnh giao diện cụm.
- [Bản đồ mã nguồn, dữ liệu và bài học](references/architecture.md): đọc khi thêm hồ, đổi template hoặc adapter.
- `docs/lai-thieu-pool-rollout-plan.md`: kế hoạch triển khai và phân loại địa điểm.
- `docs/lai-thieu-representative-images.json`, `docs/lai-thieu-card-images.json`: ảnh minh họa, prompt và derivative.
- `docs/lai-thieu-polish-validation.md`: bằng chứng kiểm tra và triển khai đã thực hiện; không coi đó là kết quả của thay đổi mới.

Sau khi sửa website, dùng build/audit của repo và `node scripts/audit-lai-thieu-pages.mjs` cho cụm này. Kiểm tra bản mới theo tác động thực tế, không dùng báo cáo cũ để kết luận. Quyền push/deploy theo chỉ dẫn hiện hành, như skill chung quy định.
