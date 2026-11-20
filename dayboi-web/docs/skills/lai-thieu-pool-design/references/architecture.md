# Bản đồ mã nguồn và mô hình tái sử dụng

## Điểm vào hiện có

- App: `dayboi-web/`, Astro static, `MainLayout.astro` lo document, metadata, canonical, font và JSON-LD.
- Nhật An: `src/pages/hoc-boi-nhat-an-lai-thieu.astro` chỉ import dữ liệu và gọi `PoolDetailPage`.
- Contract: `src/data/poolDetailTypes.ts`; dữ liệu mẫu: `src/data/poolDetailPages.ts`.
- Template/sections: `src/components/pool-detail/`. Header/footer địa phương: `components/landing/LaiThieuHeader.astro`, `LaiThieuFooter.astro`; widget liên hệ là `LocalContactBar.astro`. Icon, SectionHeading, WaveDivider dùng lại từ landing/ui. Hub Lái Thiêu cũng dùng các component địa phương này.
- Hub: `[location]/[area].astro` gọi landing Lái Thiêu; danh sách `laiThieuPools.js` được import vào `communePoolsData.js`.
- `middleware.ts` có bộ đổi liên hệ cũ. Route địa phương có thông tin HLV được cấp cần ngoại lệ đúng route để tel/Zalo và nhãn không bị đổi thành danh bạ. Không tắt sanitizer toàn site hoặc cho mọi route ngoại lệ.
- Metadata bài có thể đăng ký ở `blogPosts.js`; tránh một slug có nhiều canonical.

## Phân lớp khi nhân rộng

1. Danh mục chính đã triển khai: `src/data/laiThieuVenueCatalog.js` gồm 20 địa điểm và 7 dự án tương lai. Adapter `laiThieuPools.js` cấp dữ liệu cho hub/commune và menu; không copy danh sách slug nhiều nơi. Dự án tương lai không tạo route tuyển sinh.
2. Nội dung chi tiết: `pool-detail/nhat-an.ts` giữ mẫu Nhật An; `buildPoolDetail.ts` dựng các trang hồ từ mô tả địa điểm, địa chỉ mới/cũ, mốc nhận diện, ảnh và điều cần xác nhận trong catalog. `shared.ts` giữ liên hệ/khóa học/kỹ thuật; `poolDetailPages.ts` là registry. Thêm nội dung nghiên cứu sâu riêng theo hồ bằng override/file riêng, không kéo một bài chung thành hàng nghìn từ chỉ để thay tên.
3. Dữ liệu dùng chung: liên hệ chuyên môn, các kiểu bơi, dụng cụ chuẩn bị, cấu trúc khóa học. Factory có thể lắp mặc định nhưng phải nhận override; không thay tên toàn bộ bài rồi gọi là nội dung riêng.
4. Template và section: nhận dữ liệu qua props, không chứa điều kiện hardcode cho tên Nhật An. Widget độc lập nhận diện ảnh/gallery, trạng thái xác minh, CTA, bản đồ và menu.
5. Route: có thể giữ route mỏng từng hồ hoặc dùng một dynamic route có getStaticPaths với allowlist slug chính xác. Tránh dynamic route bắt nhầm URL hiện có. Không tạo Astro project mới.

## Hợp đồng chính

`PoolDetailData` hiện gồm variant, địa chỉ, hero, quickFacts, photos, galleryIllustrations, facilities, courses, styles, instructor, location, preparation, tuition, guide, testimonials, faqs, nearby, accessNote, sources. Các ảnh có src/alt/caption/width/height; trường illustration phân biệt minh họa.

Khi mở rộng, bổ sung trạng thái ảnh (`photo`, `render`, `plan`, `exterior`, `illustration`), vận hành (`candidate`, `confirmed`, `future`) và xác minh từng trường; không dùng một cờ “verified” cho toàn hồ. Thông tin hành chính giáp ranh chưa rõ cần ghi nguồn và phần cần xác nhận.

IDs menu lớp: `lop-tre-em`, `lop-nguoi-lon`, `lop-kem-rieng`, `lop-nhom-nho`. IDs section: `khoa-hoc`, `ky-thuat-boi`, `dia-diem`, `hoc-phi`, `huan-luyen-vien`, `lo-trinh`, `dang-ky`.

## Tài liệu bổ trợ trong repo

- `docs/pool-detail-template-guide.md`: thao tác tạo route và dữ liệu.
- `docs/lai-thieu-header-navigation.md`: menu địa phương và tương tác.
- `docs/nhat-an-assets.json`: prompt và nguồn asset mẫu.
- `docs/lai-thieu-location-inventory.json` và contact sheet: kiểm kê ảnh đã xem.
- Kế hoạch nhân rộng mới: `docs/lai-thieu-pool-rollout-plan.md`; đọc khi triển khai theo đợt.
- Audit cấu trúc: `scripts/audit-lai-thieu-pages.mjs`. Kết quả: `docs/lai-thieu-cluster-integrity.json` (script hiện lưu cấu trúc kiểm tra cho hub và mọi route).

## Kinh nghiệm từ triển khai

- Không chọn ảnh/chương trình bằng index của array (`pools[2]`, `courses[2]`): thứ tự catalog thay đổi sẽ gắn nhầm ảnh. Tìm theo ID hoặc dùng đường dẫn asset có tên rõ.
- Menu hồ lớn phải có giới hạn chiều cao/cuộn, nhóm hồ lân cận riêng và đường dẫn chi tiết trực tiếp. Đừng bỏ sót `detailHref` cho nhóm residential.
- `middleware.ts` chỉ cho ngoại lệ qua allowlist route từ catalog; nếu quên, nhãn Zalo bị thay thành danh bạ dù href vẫn tồn tại.
- Gallery 1/2/4/5 ảnh cần layout riêng theo `data-count`; giữ đúng số ảnh thực, không lặp để lấp lưới.
- Một anchor phủ cả card là vùng bấm chính, icon là trang trí. Không lồng anchor/nút vào anchor lớn.
- Các ảnh Phương Nam có tên “khuôn viên” nhưng thật ra là phòng ngủ; Habitat là ngoại thất. Xem ảnh trước khi gán role.
- Không lấy ảnh dùng chung bằng chỉ số mảng khóa học/hồ: thêm hay đổi thứ tự card sẽ gán nhầm ảnh. Tra cứu theo ID hoặc khai báo asset có tên rõ ràng.
- Với ảnh full-page, sticky header và thanh liên hệ có thể xuất hiện ở vị trí cuộn của công cụ. Dùng thêm viewport/menu capture để phân biệt hiện tượng chụp với lỗi layout; ghi rõ giới hạn, không sửa ảnh để che lỗi.
- Nếu công cụ Browser Rendering báo 429 kèm thời gian chờ, dừng các request cùng hạn mức. Tiếp tục kiểm tra build/HTML/HTTP độc lập; không vòng lặp retry và không báo các phép đo chưa chạy là đạt.

## Kiểm tra tác động

Sửa data hồ: kiểm tra trang hồ, hub, menu, nearby. Sửa template/CSS: ít nhất public + residential ở desktop/mobile. Sửa header: kiểm tra dropdown/drawer, khóa cuộn, Escape, focus, link/anchor và kích thước 360–1920. Chỉ sửa kiểu có scope, không đưa CSS trang địa điểm vào toàn site.
