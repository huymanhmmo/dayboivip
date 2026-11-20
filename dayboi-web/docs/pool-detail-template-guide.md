# Tái sử dụng Pool Detail Template

Quy trình áp dụng cho mọi xã/phường và địa điểm được tổng hợp tại [dayboi-local-page-design](skills/dayboi-local-page-design/SKILL.md). Các tên file Lái Thiêu dưới đây mô tả triển khai hiện có; header/footer, factory và registry vẫn cần tham số hóa trước khi dùng cho khu khác.

## Tạo trang hồ tiếp theo

1. Thêm bản ghi vào catalog của đúng khu vực; `src/data/laiThieuVenueCatalog.js` chỉ phục vụ cụm Lái Thiêu. Catalog giữ thông tin gốc, adapter/factory dựng `PoolDetailData` theo `poolDetailTypes.ts`; nội dung chuyên sâu có thể dùng module riêng theo ID.
2. Điền tên, slug, canonical, metadata, địa chỉ, liên hệ, nguồn thông tin và dữ liệu từng section. Kiểm tra lại nội dung guide/FAQ theo hồ mới, không đổi tên trên một bộ nội dung cũ rồi coi là đã khảo sát.
3. Tạo route Astro mỏng:

```astro
---
import PoolDetailPage from '../components/pool-detail/PoolDetailPage.astro';
import { anotherPool } from '../data/poolDetailPages';
---
<PoolDetailPage pool={anotherPool} />
```

4. Đồng bộ slug/detailHref từ catalog qua registry và adapter, tránh khai báo thêm một URL độc lập trong markup. Với Lái Thiêu, `laiThieuPools.js` cấp danh sách này cho hub/menu; khu mới cần cấu hình và adapter của chính khu đó.
5. Đăng ký bài vào `blogPosts.js` nếu cần xuất hiện trong thư mục tư vấn. Chạy build và audit trước khi xuất bản.

## Dữ liệu và trạng thái

- `variant: 'public'`: hồ dịch vụ/công cộng. `variant: 'residential'`: hồ nội khu; cần `accessNote` giải thích quyền sử dụng và quy định tiếp nhận HLV đã được xác nhận.
- `photos` chứa tư liệu đúng địa điểm, có kind/caption phân biệt ảnh hồ, tư liệu tiện ích, phối cảnh, mặt bằng hoặc ngoại thất. Mỗi ảnh có src, alt, caption, width, height; không gọi mọi loại là ảnh thực tế hồ. Khi rỗng, component dùng `galleryIllustrations` có nhãn minh họa và ghi chú phù hợp.
- `facilities.status`: verified, unverified, unavailable, updating. Chỉ verified mới có dấu kiểm xác nhận.
- Chỉ đưa tọa độ hoặc vị trí hồ lên bản đồ khi đã xác minh. Nhật An hiện dùng bản đồ khu vực, không ghim hồ suy đoán.
- Học phí, vé hồ và chính sách là dữ liệu riêng. Không điền giá hoặc cam kết khi chưa có nguồn.
- `testimonials: []` tự ẩn phần phản hồi. Không tạo người đánh giá giả.
- Form hiện tại của site phục vụ tổ chức, vì vậy template dùng gọi/Zalo thật cho tư vấn địa phương. Không tạo form giả.

## Tài nguyên

Ảnh pool-detail nằm tại `/images/pool-detail/`; logo và kỹ thuật bơi dùng lại asset đã duyệt, không sao chép. Asset manifest và prompt ảnh độc lập: `docs/nhat-an-assets.json`. Hình minh họa không được dùng làm bằng chứng về mái che, tiện ích, hình dáng hay chất lượng thực tế của hồ.

Các section nhận props, static render bằng Astro. Gallery và header chỉ tải JavaScript nhỏ cho tương tác; FAQ và hướng dẫn dùng details/summary native. Tokens và responsive của template nằm trong `pool-detail.css`, header Lái Thiêu có file CSS riêng.

## Kiểm tra trước khi duyệt

Chạy `npm run build`, `npm run audit:seo:strict`; đối chiếu route, canonical, H1, metadata, schema và các link/anchor. Kiểm tra menu, gallery, FAQ, gọi/Zalo, Maps và các kích thước 360/390/430/768/1024/1280/1440/1920. Không khẳng định đạt Core Web Vitals khi chưa có phép đo thực tế. Mọi bản production cần tuân thủ phê duyệt xuất bản hiện hành của người dùng.

## Trạng thái sau khi nhân rộng

Registry đã có 20 trang; 19 trang mới dùng `buildPoolDetail.ts`, dữ liệu địa điểm riêng trong catalog và bộ mặc định tại `pool-detail/shared.ts`. Nhật An giữ dữ liệu chuyên sâu tại `pool-detail/nhat-an.ts`. Hub có 20 thẻ chia nhóm địa phương/lân cận; mỗi thẻ có một link phủ toàn diện tích. `LaiThieuHeader`, `LaiThieuFooter` và `LocalContactBar` dùng chung cho cả cụm. Logo và cụm địa phương là hai liên kết độc lập.

Các trang mới hiện có `noindex` khi chưa đủ dữ liệu xác minh; `astro.config.mjs` loại chúng khỏi sitemap. Khi bổ sung nguồn, kiểm tra kỹ rồi mới chuyển `indexable` trong catalog. Không dùng ngày biên tập làm ngày khảo sát. Chạy `node scripts/audit-lai-thieu-pages.mjs` sau build để đối chiếu cả 21 trang.
