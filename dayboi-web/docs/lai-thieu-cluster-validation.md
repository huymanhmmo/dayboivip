# Bàn giao bản xem thử cụm hồ bơi Lái Thiêu

Ngày: 20/11/2026. Bản xem thử cuối: **033f7aa4-e60d-4da0-8aae-2f42e6af027d**.

- [Hub Lái Thiêu](https://033f7aa4-dayboivip.huymanh.workers.dev/hoc-boi-tphcm/lai-thieu/)
- [Mẫu Nhật An](https://033f7aa4-dayboivip.huymanh.workers.dev/hoc-boi-nhat-an-lai-thieu/)
- [Mẫu hồ nội khu The Rivana](https://033f7aa4-dayboivip.huymanh.workers.dev/hoc-boi-the-rivana-lai-thieu/)
- [Mẫu hồ dịch vụ Duy Anh](https://033f7aa4-dayboivip.huymanh.workers.dev/hoc-boi-duy-anh-lai-thieu/)

## Kết quả triển khai

- Có **20 trang chi tiết**, route mỏng gọi template chung và dữ liệu địa điểm độc lập trong catalog. Nhật An giữ bộ nội dung chuyên sâu riêng; 19 trang còn lại dùng builder và các phần dùng chung, có mô tả vị trí, quyền sử dụng, tư liệu, lưu ý và FAQ theo từng hồ.
- Hub hiển thị **14 địa điểm trong cụm Lái Thiêu/Vĩnh Phú cũ** và **6 địa điểm lân cận** thành hai nhóm; không đổi tất cả địa chỉ về phường Lái Thiêu.
- Header/footer và thanh liên hệ dùng chung trên hub và trang hồ. Logo về `/`, nhãn địa phương về `/hoc-boi-tphcm/lai-thieu/`, là hai anchor độc lập.
- Toàn bộ 20 thẻ hồ có một vùng bấm phủ cả card. Nhật An có ảnh minh họa và nhãn rõ. Menu hồ, footer, nearby và hub dùng cùng danh mục URL.
- Tối ưu 24 ảnh từ bộ nguồn; giữ nguyên ảnh gốc. Loại ảnh watermark Opal và 2 ảnh phòng ngủ Phương Nam khỏi bộ ảnh hồ. Phối cảnh, ngoại thất, mặt bằng và ảnh hồ có nhãn/caption phân biệt.
- Skill `$lai-thieu-pool-design` có bản nguồn trong `docs/skills/` và bản cài tại `C:/Users/Admin/.codex/skills/lai-thieu-pool-design/`. Cả hai đã validate thành công.

## Kiểm tra đã chạy

| Kiểm tra | Kết quả |
|---|---|
| `npm run build` | Thành công; 6.837 trang; lần cuối 20:04:40 ngày 20/11/2026 theo giờ máy Asia/Saigon |
| `npm run audit:seo:strict` | 6.838 HTML, 826 URL indexable; không có lỗi trong các nhóm script kiểm tra |
| `node scripts/audit-lai-thieu-pages.mjs` | 21 trang; 20 card; không link/anchor/ảnh bị thiếu, không ID trùng, canonical/H1 đúng, logo hai đích đúng |
| Đối chiếu HTTP preview | 64 đường dẫn trang/ảnh HTTP 200 và khớp byte với build; xem `lai-thieu-cluster-http.json` |
| Responsive 360/390/430/768/1024/1280/1440/1920 | Không tràn ngang; menu nằm trong viewport |
| Menu mobile | Mở/đóng, mở nhóm, khóa cuộn nền, khôi phục focus và cuộn hoạt động |
| Menu desktop | Mở, đổi nhóm chỉ còn một dropdown, Escape đóng hoạt động |
| Hub filter | Kiểm tra ở 390 và 1280px; reset trở về 20 hồ |
| Gallery / FAQ | Mở/đổi/đóng ảnh, phục hồi trigger; disclosure FAQ mở/đóng đã kiểm tra trên triển khai dùng chung |
| `npm run optimize:images -- --dry-run` | Phát hiện 37 JPEG cũ vượt ngưỡng; không sửa ảnh ngoài phạm vi |
| `npm run images:dimensions -- --dry-run` | Không có img tĩnh cần bổ sung kích thước; template ảnh động khai báo width/height |
| `git diff --check` | Không lỗi khoảng trắng; Git thông báo chuyển LF/CRLF theo cấu hình Windows |

Kiểm tra responsive/tương tác được thực hiện trên version 705ee329; các cập nhật sau chỉ thêm fallback khi bản đồ chưa tải và offset đích neo cho header sticky. Bản cuối đã được build/audit/HTTP lại. Screenshot mới của mobile/hub/Rivana ở version 6df481d6, trước thay đổi offset anchor; ảnh desktop Nhật An ở version 705ee329. Các khác biệt và giới hạn này được ghi để không coi ảnh chụp là bằng chứng cho phép kiểm tra chưa chạy.

## Ảnh đối chiếu

- `docs/previews/lai-thieu-cluster/nhat-an-desktop-1440.webp` — trang Nhật An desktop.
- `docs/previews/lai-thieu-cluster/nhat-an-mobile-390.webp` — toàn trang mobile.
- `docs/previews/lai-thieu-cluster/hub-desktop-1440.webp` — hub với danh sách 20 hồ.
- `docs/previews/lai-thieu-cluster/rivana-desktop-1440.webp` — variant nội khu với gallery 5 ảnh.
- `docs/previews/lai-thieu-cluster/mobile-menu-390.webp` — drawer địa phương.

Full-page capture có thể đặt header/thanh liên hệ sticky/fixed ở vị trí cuộn của công cụ. Không xử lý ảnh để che hiện tượng; menu có viewport capture riêng. Công cụ chụp ảnh Cloudflare đã trả 429 với thời gian chờ dài ở lần yêu cầu chụp bổ sung; đã dừng request cùng hạn mức. Không có phép đo Core Web Vitals thực tế, không báo đạt LCP/CLS/INP.

## Trạng thái dữ liệu và xuất bản

**19 trang mới vẫn noindex và được loại khỏi sitemap** cho đến khi bổ sung xác nhận vận hành, quyền sử dụng, giờ/giá và đủ nội dung riêng có nguồn. Đây là các trang thiết kế hoàn chỉnh để xem thử, không phải xác nhận các hồ đang nhận lớp. 7 dự án tương lai chỉ nằm trong danh sách theo dõi, không tạo trang tuyển sinh đang hoạt động.

Nhật An và hub giữ chính sách index hiện tại. Giá/giờ/độ sâu thiếu nguồn không được tự điền; không có review/rating giả hoặc tọa độ hồ suy đoán trong schema. Nguồn chủ yếu là kế hoạch và ảnh người dùng cung cấp; chưa thực hiện khảo sát thực địa hay liên hệ BQL.

**Không deploy production và không push GitHub.** Đã đối chiếu Cloudflare: production vẫn là version `79e51b29-263f-4ea7-a6e7-1c25747d6493` (bản Lái Thiêu trước tác vụ Nhật An). URL xem thử có header `X-Robots-Tag: noindex` do Cloudflare preview.

## Tài liệu sử dụng tiếp

- Kế hoạch: `docs/lai-thieu-pool-rollout-plan.md`.
- Hướng dẫn template: `docs/pool-detail-template-guide.md`.
- Skill: `docs/skills/lai-thieu-pool-design/SKILL.md`.
- Kiểm kê ảnh gốc: `docs/lai-thieu-location-inventory.json` và contact sheet.
- Ảnh derivative/loại trừ: `docs/lai-thieu-venue-assets.json`.
- Báo cáo cấu trúc, HTTP và UI: `lai-thieu-cluster-integrity.json`, `lai-thieu-cluster-http.json`, `lai-thieu-cluster-browser-qa.json`.
