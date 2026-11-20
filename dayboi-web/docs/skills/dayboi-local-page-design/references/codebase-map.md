# Bản đồ mã nguồn hiện có và giới hạn tái sử dụng

Các đường dẫn dưới đây tính từ `dayboi-web/`; kiểm tra file hiện tại trước khi sửa vì kiến trúc có thể tiếp tục thay đổi. Đây là kết quả đối chiếu mã nguồn, không phải xác nhận đã có hệ đa khu vực hoàn chỉnh.

| Phần hiện có | Vị trí | Điểm cần chú ý khi mở khu mới |
| --- | --- | --- |
| HTML, metadata, canonical, JSON-LD | `src/layouts/MainLayout.astro` | Dùng lại shell, không tạo document thứ hai |
| Route tỉnh/thành | `src/pages/[location].astro` | Kết nối dữ liệu địa phương, không đổi thành hub phường |
| Route xã/phường | `src/pages/[location]/[area].astro` | Hiện chỉ Lái Thiêu được chọn vào LocalLandingPage; vùng khác còn layout danh bạ |
| Dữ liệu hành chính/danh bạ | `src/data/communePages.js`, `communePoolsData.js`, `locations.js`, `locationAreas.js`, `geo/` | Đối chiếu parentSlug/slug và route có sẵn, tránh tạo hub trùng |
| Hub được duyệt | `src/components/landing/LocalLandingPage.astro`, `src/data/localLandingPages.ts` | Tên template chung nhưng header/footer và dữ liệu mẫu còn gắn Lái Thiêu |
| Header/footer/navigation vùng | `LaiThieuHeader.astro`, `LaiThieuFooter.astro` trong `components/landing/`; `data/laiThieuNavigation.ts` | Header nhận một số props nhưng hub, nhãn, menu, footer còn import trực tiếp dữ liệu Lái Thiêu |
| Lưới/ảnh hưởng thị giác | `src/styles/lai-thieu-layout.css`, `lai-thieu-header.css`, `lai-thieu-footer.css`, `local-swimming-landing.css`, `pool-detail.css` | Tái sử dụng token và họ CSS; không áp dụng header địa phương lên toàn site |
| Catalog và adapter | `src/data/laiThieuVenueCatalog.js`, `laiThieuPools.js`, `laiThieuIllustrations.js` | Một nguồn địa điểm cho hub, menu, nearby và danh bạ; chưa có catalog chung mọi khu |
| Contract trang hồ | `src/data/poolDetailTypes.ts` | Hiện nhiều trường liên hệ/HLV bắt buộc; cần đổi contract/render khi khu mới chưa có dữ liệu, không điền giả |
| Registry/factory | `src/data/poolDetailPages.ts`, `src/data/pool-detail/buildPoolDetail.ts`, `shared.ts`, `nhat-an.ts` | Registry hiện chỉ catalog Lái Thiêu; factory/shared còn hotline, HLV và import kỹ thuật từ landing Lái Thiêu |
| Template chi tiết | `src/components/pool-detail/PoolDetailPage.astro` và các section cùng thư mục | Section nhỏ tái sử dụng được; assembler còn import header/footer Lái Thiêu |
| UI/widget | `components/landing/ui/`, `LocalContactBar.astro`, `PoolCard.astro`, `PoolFinderSection.astro` | Finder còn nhãn zone/nhóm Lái Thiêu; thay dữ liệu và cấu hình, không chỉ thay mảng pools |
| Liên hệ sau render | `src/middleware.ts` | Allowlist ngoại lệ hiện là hub Lái Thiêu + route từ catalog Lái Thiêu; kiểm tra HTML build để tránh bị đổi nhãn/số liên hệ |
| Index/sitemap | `astro.config.mjs` | Noindex cho các route chờ xác minh có kết nối catalog; mở vùng khác phải nối registry đúng, không tắt filter toàn site |

## Cách chuyển sang dùng chung

Ưu tiên tham số hóa những phần đang gắn vùng: hubHref, tên địa phương, menu, nhãn filter/group, contact, instructor, nearby và bộ ảnh. Có thể giữ giá trị mặc định Lái Thiêu cho route cũ trong giai đoạn chuyển đổi.

Chỉ tách/đổi tên thành component vùng chung khi thực sự mở khu mới. Không tạo thêm `HeaderBinhHoa`, `HeaderThuanAn` hoặc sao chép `PoolDetailPage` cho từng phường. Không thực hiện một đợt đổi tên diện rộng chỉ vì đang viết tài liệu skill.

Khi extract kỹ thuật bơi, icon, ảnh giáo cụ và khung khóa học, đưa chúng về nguồn chung không import ngược dữ liệu một khu. Hồ và khu vực chỉ tham chiếu tài nguyên chung bằng ID; ảnh cơ sở vật chất và HLV vẫn có phạm vi riêng.

## Những phần riêng của Lái Thiêu

- Hub duy nhất: `/hoc-boi-tphcm/lai-thieu/`; chuẩn chi tiết: `/hoc-boi-nhat-an-lai-thieu/`.
- Hotline/HLV của cụm hiện tại: `0986.456.678`, thầy Lê Văn Thông — Kiện tướng Bơi lội. Đây không phải mặc định toàn quốc hay số quầy vé mọi hồ.
- Kế hoạch tại `docs/ke-hoach-tuyen-sinh-hoc-boi-lai-thieu-tphcm.md`; ảnh gốc tại `public/images/locations/lai-thieu-tphcm/`.
- Catalog đã triển khai có 20 địa điểm, nhóm trung tâm/giáp ranh và các dự án tương lai riêng. Không dùng số 20, số trang noindex hay tên nhóm này như hằng số cho vùng mới.
- Không phục hồi dòng chú thích HLV người dùng đã bỏ. Không dùng ảnh Phương Nam là phòng ngủ làm ảnh hồ, hoặc ảnh ngoại thất Habitat làm ảnh bể bơi.

Hồ sơ chi tiết vẫn được giữ trong skill `lai-thieu-pool-design`; quy trình mở khu vực khác nằm trong skill chung này.
