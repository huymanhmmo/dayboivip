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

Ảnh minh họa độc lập, tạo bằng built-in imagegen; không trình bày như ảnh lớp thực tế hoặc HLV đã xác minh. Ảnh bơi ếch, sải, ngửa và bướm được vẽ mới theo các mẫu người dùng gửi. Prompt bản cuối lưu trong `lai-thieu-final-technique-prompts.json` và `lai-thieu-butterfly-reference-prompt.json`; `lai-thieu-technique-prompts.json` ghi lại vòng tạo ảnh ban đầu.

| Asset | Kích thước | Dung lượng |
| --- | --- | --- |
| `technique-breaststroke-side-breathing.webp` | 680 × 510 | 74 KB; vẽ mới theo mẫu lấy hơi nhìn nghiêng |
| `technique-front-crawl-underwater.webp` | 680 × 510 | 99 KB; vẽ mới theo mẫu bơi sải dưới nước |
| `technique-backstroke-surface-full-body.webp` | 680 × 510 | 83 KB; toàn thân bơi ngửa trên mặt nước, không chân vịt |
| `technique-butterfly-underwater.webp` | 680 × 510 | 122 KB; vẽ mới theo ảnh tham chiếu dưới nước của người dùng |
| `technique-treading-water.webp` | 680 × 510 | 75 KB |

Logo giữ nguyên file dùng chung, không tạo biến thể vẽ lại. Bơi ếch nhìn nghiêng trong pha lấy hơi, hai tay thu khép trước ngực sát mặt nước. Bơi sải nhìn từ dưới nước, một tay vươn trước và tay còn lại kéo về hông, chân đập luân phiên. Bơi bướm nhìn dưới nước, hai tay cùng vươn phía trước và hai chân khép trong nhịp dolphin. Bơi ngửa theo mẫu mặt nước mới nhất của người dùng: nữ vận động viên đang bơi, một tay vung qua đầu và tay kia kéo về hông, toàn bộ hai tay và hai chân nằm trong khung, chân trần đập luân phiên; mặt ở trên nước. Các ảnh dùng tên file mới để trình duyệt tải đúng bản đã chỉnh.

## Kiểm tra

- Build Astro: thành công, 6.817 trang.
- Audit SEO strict: không lỗi trong các nhóm kiểm tra của script.
- HTML đã build: 1 H1; đúng 5 thẻ kỹ thuật và 5 đường dẫn đích; 2 logo dùng chung ở header/footer; không phát hiện liên kết nội bộ bị thiếu.
- Kiểm tra trực quan qua Cloudflare Browser Rendering: section desktop 1440px có 5 thẻ cùng hàng, mobile 390px có 2 cột và thẻ an toàn trải ngang; phần lợi ích không còn ảnh người bơi bị cắt. Ảnh lưu tại `docs/previews/lai-thieu/techniques-desktop-1440.jpg`, `techniques-mobile-390.jpg` và `benefits-after-1440.jpg`.
- Đối chiếu HTTP trên bản xem thử và production: HTML Lái Thiêu cùng 5 ảnh kỹ thuật phải HTTP 200 và khớp byte với build local.
- Kết quả cấu trúc cuối: `docs/lai-thieu-techniques-integrity.json`.

## Phiên bản Cloudflare

Bản kiểm tra trước lần sửa ảnh ngửa: `0483119e-edb8-4206-ae10-6d874bcea80e`. Trong lúc thực hiện có thêm commit SEO `b3ae839` và deployment mới từ luồng khác; đã ghép commit đó vào nhánh giao diện và fast-forward main local để giữ toàn bộ thay đổi. Build và audit sau ghép thành công (823 URL indexable theo chính sách mới). Bản cập nhật gồm cả thay đổi SEO và các ảnh sửa theo mẫu; mã vẫn được giữ local, không push GitHub. Thông tin bản triển khai cuối được ghi trong `lai-thieu-techniques-deployment.json`.

## Vị trí mã nguồn

Trong quá trình chỉnh sửa, checkout chính được chuyển về `main`. Bản này được thực hiện trong worktree `D:/04_dayboivip/.worktrees/lai-thieu-techniques`, nhánh `codex/lai-thieu-techniques`, dựa trên commit đang chạy trên website `67eea6a`. Không push GitHub theo lựa chọn trước đó của người dùng.
