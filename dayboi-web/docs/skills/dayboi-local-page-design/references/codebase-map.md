# Bản đồ hệ giao diện địa phương

Các đường dẫn tính từ `dayboi-web/`. Hệ dùng chung hiện được triển khai cho route tỉnh/thành, xã/phường và khu vực cũ ở cả VI/EN; hub Lái Thiêu giữ nội dung chuyên sâu nhưng dùng chung header/footer với các vùng khác.

| Lớp | File/thư mục | Trách nhiệm |
| --- | --- | --- |
| Document | `src/layouts/MainLayout.astro` | Metadata, canonical, font, JSON-LD, ngôn ngữ |
| Route | `src/pages/[location].astro`, `[location]/[area].astro` và bản `en/` | Route mỏng chọn dữ liệu và template, không chứa toàn bộ trang |
| Adapter tỉnh | `src/data/locality/province.ts` | Kết hợp locations, research, communePools, nhóm và danh sách xã/phường |
| Adapter xã/khu vực | `src/data/locality/area.ts` | Direct/nearby, địa giới, nội dung và index theo dữ liệu hiện có |
| Contract vùng | `src/data/locality/types.ts` | RegionPageData, RegionVenue, LocalSiteConfig |
| Điều hướng | `src/data/locality/navigation.ts` | Menu/footer/link từ đúng vùng; không tự chọn hotline vùng |
| Contact/normalize | `src/data/locality/common.ts` | Link gọi hợp lệ, nhiều số riêng, nguồn/ảnh và chuẩn hóa tìm kiếm |
| FAQ/schema | `src/data/locality/faq.ts`, `schema.ts` | Nội dung theo loại trang, vai trò liên hệ, metadata không gán số HLV thành số BQL |
| Khung dùng chung | `src/components/locality/LocalSiteHeader.astro`, `LocalSiteFooter.astro`, `LocalSiteContactBar.astro` | Thương hiệu, nhãn vùng, menu/drawer, footer và hành động thật từ cấu hình |
| Template danh bạ | `src/components/locality/RegionDirectoryPage.astro` | Lắp các section độc lập, không hardcode địa phương |
| Section | `RegionHero`, `LearningNeeds`, `RegionVenueFinder`, `CommuneDirectory`, `RegionProviders`, `RegionSkills`, `RegionPracticalGuide`, `RegionFAQ`, `RelatedRegions` | Mỗi khối nhận props, xử lý responsive và dữ liệu rỗng |
| Thẻ/liên hệ | `VenueCard.astro`, `VenueCardCover.astro`, `ContactBlock.astro` | Vùng bấm lớn, thông tin hồ, BQL và từng giáo viên/số riêng |
| Tài nguyên chung | `src/data/swimmingResources.ts`, `locality/heroImages.json` | 5 ảnh kỹ thuật, ảnh nhu cầu, derivative ảnh hoạt động hiện có |
| Styles | `src/styles/region-directory.css`, `lai-thieu-layout.css`, `lai-thieu-header.css`, `lai-thieu-footer.css` | Scope địa phương, một lưới ngang; tên CSS Lái Thiêu giữ tương thích, không đồng nghĩa dữ liệu bị hardcode |
| Lái Thiêu | `data/locality/laiThieuSite.ts`, các wrapper `LaiThieuHeader/Footer` | Cấp cấu hình riêng cho shared header/footer; không sao chép markup |
| Registry đa vùng | `data/venues/catalog.js`, `aliases.json`, `routes.json` | Gom nguồn theo địa điểm, alias được đối chiếu, URL cố định và cờ index theo hồ |
| Factory chi tiết đa vùng | `data/venues/buildVenueDetail.ts`, `pages/dia-diem-hoc-boi/[venue].astro` | Dữ liệu riêng, context hành chính có căn cứ, liên hệ nhiều chủ thể; route mỏng gọi mẫu Nhật An |
| Liên hệ trang hồ | `pool-detail/PoolContactsSection.astro` → `locality/ContactBlock.astro` | Giữ tên, số và nguồn từng giáo viên/BQL; không gán đại diện mặc định |
| Trang hồ | `components/pool-detail/`, `data/poolDetailTypes.ts`, `poolDetailPages.ts`, `pool-detail/` | Template chi tiết 20 hồ hiện có; nội dung từng hồ và điều kiện riêng |
| Hành chính/danh bạ gốc | `data/communePages.js`, `communePoolsData.js`, `locations.js`, `locationResearch.js`, `locationAreas.js`, `geo/` | Nguồn hiện có, adapter không tự tạo khảo sát/giá/giáo viên |
| Sau render | `src/middleware.ts` | Giữ sanitizer cũ; link liên hệ đúng dữ liệu được đánh dấu `data-directory-contact`, phải kiểm tra HTML output |
| Sitemap/index | `astro.config.mjs` | Giữ chính sách đã có; không tự gỡ noindex khi đổi giao diện |

## Mở vùng hoặc thêm hồ

Dùng adapter và contract hiện có trước khi bổ sung lớp mới. Contact trong LocalSiteConfig là tùy chọn và chỉ dành cho đầu mối vùng được chỉ định; không lấy người đầu trong mảng instructors để tự làm hotline. Địa điểm có nhiều giáo viên giữ nguyên từng người/số/nguồn trong ContactBlock.

Hub Lái Thiêu `/hoc-boi-tphcm/lai-thieu/` vẫn dùng LocalLandingPage để giữ bản chuyên sâu đã duyệt. Các hồ của cụm gọi PoolDetailPage; header/footer của chúng đi qua wrapper mỏng tới LocalSiteHeader/Footer. Liên hệ riêng của cụm không trở thành mặc định toàn quốc.

Không sao chép route, header hoặc footer cho từng phường. Hồ ngoài Lái Thiêu dùng `buildVenueDetail` từ registry đa vùng; hồ cũ giữ factory và URL đã duyệt. PoolDetailPage dùng `site`, `province`, `contacts` cho hồ đa vùng và giữ nhánh tương thích cho các hồ cũ. Không gọi factory Lái Thiêu rồi chỉ thay tên.

## Kiểm tra

- `scripts/audit-locality-integrity.mjs`: địa điểm/liên hệ đối chiếu nguồn, link/anchor/ảnh, hub/logo và chính sách route/index.
- `scripts/audit-locality-browser.mjs`: tỉnh/thành và đại diện xã/phường VI/EN, menu/filter/contact/FAQ và responsive.
- `scripts/audit-venue-details.mjs`: toàn bộ trang hồ mới, từng vai trò/số/nguồn, liên kết hai chiều, canonical và baseline cũ.
- `scripts/audit-venue-browser.mjs`: đại diện từng tỉnh, tên dài, nội khu, thiếu HLV, nhiều liên hệ và tương tác thực.
- `scripts/audit-lai-thieu-pages.mjs`: hồi quy riêng hub + trang hồ Lái Thiêu.
- `npm run build`, `npm run audit:seo:strict`: output và SEO toàn site.

Chỉ dùng kết quả đúng phiên bản build đã kiểm tra. Các số lượng trang hiện tại không phải hằng số cho những đợt triển khai sau.
