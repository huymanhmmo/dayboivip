# Cập nhật logo và 5 kỹ thuật bơi — Lái Thiêu

Yêu cầu ngày 20/11/2026: dùng logo chung, sửa phần trang trí ảnh bị cắt ở mục lợi ích, bổ sung 5 kỹ thuật bơi cùng ngôn ngữ hình ảnh của landing page.

## Thay đổi

- `ui/LandingBrand.astro` dùng chính `/images/brand/logo.png` của header website hiện có; dùng chung cho header và footer landing.
- Loại bỏ ảnh người bơi dạng ellipse vượt ra bên phải mục lợi ích. Thay bằng một mảng gradient aqua, viền trắng và góc bo trong phạm vi section.
- Thêm `SwimmingTechniquesSection.astro` và `TechniqueCard.astro` ngay sau các khóa học, trước lộ trình. Section nhận dữ liệu qua props; header có liên kết `#ky-thuat-boi`.
- 5 thẻ dẫn đến các URL đã có: bơi ếch, sải, ngửa, bướm và kỹ năng đứng nước. Không tạo thêm route.
- Desktop: 5 cột. Tablet: 3 thẻ trên, 2 thẻ dưới. Mobile: 2 cột cho 4 kiểu bơi, thẻ kỹ năng an toàn trải ngang cuối nhóm.
- Màu sắc, font, card bo góc, icon tròn nổi và hiệu ứng hover dùng hệ giao diện Lái Thiêu hiện có. Thẻ sinh tồn có điểm nhấn cam nhẹ.

## Asset mới

Ảnh minh họa độc lập, tạo bằng built-in imagegen; không trình bày như ảnh lớp thực tế hoặc HLV đã xác minh. Riêng ảnh bơi ếch dùng ảnh do người dùng cung cấp trong phản hồi cuối. Prompt ảnh tạo mới lưu trong `lai-thieu-technique-prompts.json` và `lai-thieu-butterfly-reference-prompt.json`.

| Asset | Kích thước | Dung lượng |
| --- | --- | --- |
| `technique-breaststroke-reference.webp` | 730 × 463 | 52 KB; ảnh mẫu bơi ếch người dùng cung cấp |
| `technique-front-crawl.webp` | 680 × 510 | 63 KB; bản 4:3 từ ảnh bơi sải có sẵn |
| `technique-backstroke.webp` | 680 × 510 | 84 KB |
| `technique-butterfly-underwater.webp` | 680 × 510 | 122 KB; vẽ mới theo ảnh tham chiếu dưới nước của người dùng |
| `technique-treading-water.webp` | 680 × 510 | 75 KB |

Thẻ bơi sải dùng bản 4:3 từ `journey.webp`. Logo giữ nguyên file dùng chung, không tạo biến thể vẽ lại. Theo phản hồi cuối của người dùng, thẻ bơi ếch sử dụng chính ảnh mẫu: góc nghiêng trong pha lấy hơi. Thẻ bơi bướm dùng ảnh vẽ mới theo góc dưới nước, toàn thân duỗi dài với hai tay phía trước và chân khép trong nhịp dolphin.

## Kiểm tra

- Build Astro: thành công, 6.817 trang.
- Audit SEO strict: không lỗi trong các nhóm kiểm tra của script.
- HTML đã build: 1 H1; đúng 5 thẻ kỹ thuật và 5 đường dẫn đích; 2 logo dùng chung ở header/footer; không phát hiện liên kết nội bộ bị thiếu.
- Kiểm tra trực quan qua Cloudflare Browser Rendering: section desktop 1440px có 5 thẻ cùng hàng, đủ 5 ảnh và đúng ảnh mẫu cuối; phần lợi ích không còn ảnh người bơi bị cắt. Ảnh lưu tại `docs/previews/lai-thieu/techniques-desktop-1440.jpg`, `techniques-mobile-390.jpg` và `benefits-after-1440.jpg`.
- Đối chiếu HTTP trên bản xem thử: HTML Lái Thiêu, ảnh bơi ếch mẫu và ảnh bơi bướm dưới nước đều HTTP 200 và khớp byte với build local.
- Kết quả cấu trúc cuối: `docs/lai-thieu-techniques-integrity.json`.

## Phiên bản Cloudflare

Bản cuối đã upload để kiểm tra: `0483119e-edb8-4206-ae10-6d874bcea80e`. Khi triển khai, chỉ chuyển traffic sang đúng phiên bản này; không thay đổi domain hoặc các thiết lập bảo mật. Mã vẫn được giữ local, không push GitHub.

## Vị trí mã nguồn

Trong quá trình chỉnh sửa, checkout chính được chuyển về `main`. Bản này được thực hiện trong worktree `D:/04_dayboivip/.worktrees/lai-thieu-techniques`, nhánh `codex/lai-thieu-techniques`, dựa trên commit đang chạy trên website `67eea6a`. Không push GitHub theo lựa chọn trước đó của người dùng.
