# Lái Thiêu — triển khai mockup v2

Trạng thái: bản làm việc tại local; chưa được phép deploy. URL giữ nguyên `/hoc-boi-tphcm/lai-thieu/`.

Nguồn thiết kế: `Mockup v2/Trang Bơi Lái Thiêu TPHCM.png`. Nguồn nội dung: `docs/ke-hoach-tuyen-sinh-hoc-boi-lai-thieu-tphcm.md` ngày 20/11/2026.

## Phân tích và kế hoạch component

| Section / mục đích | Desktop | Mobile | Asset | Component / dữ liệu / tương tác |
| --- | --- | --- | --- | --- |
| Header / điều hướng | Thanh cyan toàn chiều ngang, logo trái, menu giữa, CTA phải | Logo, liên hệ, menu mở/đóng | Logo thương hiệu hiện có | LandingHeader, menu bàn phím/Escape |
| Hero / tuyển sinh | Chữ trái, HLV và trẻ bên phải, sóng dưới | Chữ trên, ảnh dưới | Ảnh minh họa hero độc lập | SwimmingHero, tiêu đề/ảnh/hotline qua props |
| Nhu cầu / chọn lớp | 4 card ảnh, icon nổi | 2 cột, 1 cột màn hình rất nhỏ | Trẻ em, người lớn, sợ nước, hồ nội khu | ImageCard, AudienceGrid, link khóa học |
| Tìm hồ / tra cứu | Form 4 cột, 6 card theo lưới 3 cột | Bộ lọc dọc, card 1 cột | Ảnh thật từng hồ; thiếu ảnh dùng đồ họa có nhãn | PoolFinderSection, PoolCard, lọc tên không dấu/khu vực/loại, dialog chi tiết |
| Khóa học / chọn chương trình | Heading và notice học phí, 4 card | Notice dưới heading, 2/1 cột | Ảnh minh họa từng mục | FeaturedCourses, ImageCard, liên kết thật |
| Lộ trình / giải thích | 4 bước nối nhau, người bơi bên phải | 4 bước xếp dọc | Ảnh người bơi độc lập | LearningJourney, dữ liệu số buổi và bước |
| HLV / giới thiệu | Nhận diện trái, chuyên môn và badge phải | Xếp dọc | Chưa có chân dung xác minh: không dùng AI thay thế | InstructorSection, dữ liệu HLV qua props |
| Lợi ích / hỗ trợ quyết định | 5 card icon | 2 cột | SVG riêng | BenefitsSection, danh sách qua props |
| Địa phương / định hướng | Biểu tượng, thông tin, ảnh địa điểm thật | Xếp dọc | Toàn cảnh Emerald Golf View hiện có | LocalAreaInfo, địa chỉ mới/cũ và link phường lân cận |
| Đánh giá / bằng chứng | 3 card | 1 cột | Avatar có sẵn của website | TestimonialsSection, trích từ trang giới thiệu, ghi rõ không riêng Lái Thiêu |
| CTA / tư vấn | Banner biển đậm, nút cam | Xếp dọc | Sóng SVG | EnrollmentCTA, tel/Zalo đúng 0986.456.678 |
| Footer / liên kết | 4 cột nền aqua, sóng cuối | 2/1 cột, thanh liên hệ | Logo hiện có, SVG | LandingFooter, liên kết hợp lệ |

## Asset manifest (lập trước khi xây dựng)

Ảnh mockup chỉ dùng để đối chiếu; không cắt, không nhúng vào trang. Ảnh AI chỉ là minh họa, không phải ảnh lớp học hay chân dung thầy Thông.

| Asset đích / nguồn | Vai trò | Nguồn gốc / lưu ý |
| --- | --- | --- |
| `/images/landing/lai-thieu/hero.webp`, `hero-mobile.webp` | Hero 16:9 / mobile | Tạo bằng imagegen; HLV hư cấu, trẻ với kính xanh và ván tập; hai nhân vật bên phải |
| `/images/landing/lai-thieu/children.webp` | Card trẻ em | imagegen, ảnh độc lập 4:3, không chữ |
| `/images/landing/lai-thieu/adults.webp` | Card người lớn | imagegen, ảnh độc lập 4:3, không chữ |
| `/images/landing/lai-thieu/confidence.webp` | Card người sợ nước | imagegen, ảnh độc lập 4:3, không chữ |
| `/images/landing/lai-thieu/journey.webp` | Lộ trình, khóa nâng cao | imagegen, người bơi bên phải, nước cyan |
| `/images/locations/lai-thieu-tphcm/ho-boi-duy-anh/ho-boi-duy-anh-01.jpg` | Hồ Duy Anh | Ảnh thực tế do người dùng cung cấp |
| `/images/locations/lai-thieu-tphcm/the-emerald-golf-view-le-phong/the-emerald-golf-view-ho-boi-vo-cuc-tang-6.jpg` | Emerald, card cư dân | Ảnh địa điểm có sẵn |
| `/images/locations/lai-thieu-tphcm/opal-skyline-dat-xanh/opal-skyline-hinh-thuc-te-01.jpg` | Opal Skyline | Tránh file có watermark đã được kế hoạch cảnh báo |
| `/images/locations/lai-thieu-tphcm/the-rivana-hkk/the-rivana-ho-boi-nguoi-lon.jpg` | The Rivana | Ảnh địa điểm có sẵn |
| `/images/locations/lai-thieu-tphcm/the-emerald-golf-view-le-phong/the-emerald-golf-view-toan-canh-flycam.jpg` | Thông tin địa phương | Ghi đúng tên dự án, không nhận là toàn cảnh toàn phường |
| Nhật An, TT VHTT Lái Thiêu | Thẻ địa điểm | Chưa có ảnh: dùng SVG và nhãn “Ảnh đang cập nhật” |
| Chân dung Lê Văn Thông | HLV | Chưa có ảnh xác minh: nhận diện tên/chuyên môn bằng HTML/SVG |
| `/images/testimonials/{huyen-reu,huong-giang,duyen-duong}.jpg` | Đánh giá | Dùng lại nội dung/ảnh đã có trên trang giới thiệu; không gán là học viên Lái Thiêu |
| `WaveDivider.astro`, `Icon.astro` | Sóng, icon | SVG dựng bằng mã riêng; không trích xuất từ mockup |

## Thứ tự thực hiện

1. Kiểm kê dữ liệu và ảnh; chuẩn bị manifest này.
2. Tạo ảnh minh họa độc lập và tối ưu WebP responsive; không thay ảnh gốc của người dùng.
3. Tạo tokens riêng cho `.sfl-landing`, primitive và section có props.
4. Bổ sung 6 hồ vào nguồn `communePoolsData.js` bằng module dữ liệu riêng; gắn người phụ trách và điều kiện vào hồ đúng nguồn kế hoạch.
5. Chỉ bật template mới cho `hoc-boi-tphcm/lai-thieu`; các route khác giữ template hiện tại.
6. Build, audit SEO, kiểm tra tương tác và responsive, chụp desktop/mobile, cập nhật báo cáo dưới đây.

## Quy tắc nội dung

Không công bố giá 2.200.000đ trong ảnh AI. Báo học phí theo hình thức học; vé hồ và khoản phát sinh cần xác nhận riêng. Không gán số hotline tuyển sinh làm số quầy vé hồ. Hồ chung cư chỉ dành cho người có quyền sử dụng, HLV cần được BQL chấp thuận. Không đặt liên kết tới bài chi tiết chưa xuất bản: dùng dialog chi tiết và link Google Maps. Không tự đặt khoảng cách, số năm kinh nghiệm hoặc chứng chỉ HLV.

## Asset library cuối cùng

Các ảnh đang được trang sử dụng nằm tại `public/images/landing/lai-thieu/`. Giữ nguyên ảnh nguồn của người dùng trong `public/images/locations/`; trang chỉ dùng các bản WebP riêng đã chọn/chuẩn bị.

| File | Kích thước | Dung lượng xấp xỉ | Nguồn / xử lý |
| --- | --- | --- | --- |
| `hero.webp` | 1672 × 941 | 170 KB | imagegen, ảnh minh họa độc lập |
| `hero-960.webp` | 960 × 540 | 71 KB | Bản responsive từ hero |
| `hero-mobile.webp` | 800 × 700 | 88 KB | Bản mobile từ hero; ưu tiên giữ cả hai nhân vật |
| `children.webp` | 600 × 450 | 73 KB | imagegen, asset riêng |
| `adults.webp` | 600 × 450 | 48 KB | imagegen, asset riêng |
| `confidence.webp` | 600 × 450 | 33 KB | imagegen, asset riêng |
| `journey.webp` | 1672 × 941 | 180 KB | imagegen, asset riêng |
| `pool-duy-anh.webp` | 960 × 720 | 153 KB | Ảnh nguồn `ho-boi-duy-anh-02.jpg`, góc hồ có mái che |
| `pool-emerald.webp` | 960 × 640 | 74 KB | Ảnh nguồn hồ tầng 6, imagegen làm sạch hai logo phủ ở góc, không dùng mockup |
| `pool-opal.webp` | 960 × 720 | 156 KB | Ảnh nguồn `opal-skyline-tien-ich-ho-boi.jpg`, không dùng ảnh có watermark SĐT |
| `pool-rivana.webp` | 800 × 533 | 99 KB | Ảnh nguồn hồ người lớn, tối ưu WebP |
| `local.webp` | 960 × 640 | 161 KB | Ảnh flycam Emerald, imagegen làm sạch hai logo phủ ở góc |

Công cụ tạo ảnh: built-in `image_gen`. Bộ prompt tạo 5 ảnh minh họa được lưu trong `docs/lai-thieu-image-prompts.json`. Prompt xử lý hai ảnh Emerald: chỉ bỏ hai logo phủ góc trên, giữ khung cảnh thực tế và biển hiệu vật lý. Các bản đã xử lý không thay thế file nguồn. Chưa có tài liệu xác nhận quyền sử dụng ảnh địa điểm ngoài việc đây là tư liệu được người dùng cung cấp; cần chủ website rà soát quyền ảnh trước xuất bản.

## Design system đã triển khai

`src/styles/local-swimming-landing.css` chứa tokens trong phạm vi `.sfl-landing`: mực `#071c46`, xanh `#008cce`, biển đậm `#034c84`, cyan `#04c6e1`, teal `#00adaf`, nền `#eafaff`, cam `#ff7b11`, vàng `#ffcc54`. Font Be Vietnam Pro dùng từ layout hiện có. Card bo góc 20px, viền trắng, đổ bóng aqua nhẹ; nút cam gradient. Nội dung giới hạn 1280px (1400px trên màn hình lớn), nền header/hero/CTA/footer full-width. CSS mobile thay đổi bố cục ở 700px; menu thu gọn ở 1100px. Không dùng transform scale để dựng mobile.

### Thay dữ liệu và tái sử dụng

- **Hồ bơi:** sửa `src/data/laiThieuPools.js`. Mỗi hồ có `id` duy nhất, `type` (`public` hoặc `residential`), `zone`, `area`, địa chỉ mới/cũ, ảnh, `services` và `detail`. Nguồn này được nhập vào `communePoolsData.js` nên dữ liệu danh bạ và template thống nhất. Không điền số hotline HLV vào `venueContact.phone`.
- **Hình ảnh:** đặt asset riêng vào `public/images/landing/<ten-khu-vuc>/`, cập nhật đường dẫn và alt trong dữ liệu. Giữ `image: null` cho hồ chưa có ảnh đúng địa điểm; thẻ sẽ hiện hình trang trí và nhãn cập nhật. Không sử dụng mockup làm asset.
- **HLV:** cập nhật `instructor` trong `src/data/localLandingPages.ts`. Có ảnh thật được xác minh thì điền `instructor.image`; nếu thiếu, section hiển thị nhận diện tên/chuyên môn. Không tạo chân dung AI gán tên HLV.
- **Liên hệ:** cập nhật đồng bộ `hotline`, `phoneHref`, `zaloHref` trong cấu hình trang và phần `instructors` của dữ liệu hồ. Template truyền tên và chuyên môn HLV vào hero, chi tiết hồ, CTA và footer qua props.
- **Khóa học và học phí:** sửa `audiences`/`courses` trong `localLandingPages.ts`. Các card dùng chung `ui/ImageCard.astro`. Notice hiện dùng thông báo liên hệ báo giá; khi có giá được phê duyệt, cập nhật `FeaturedCoursesSection.astro`, nêu riêng vé hồ và khoản phát sinh.
- **Trang phường mới:** tạo một đối tượng theo `LocalLandingData`, truyền vào `LocalLandingPage.astro` trong nhánh route tương ứng của `[location]/[area].astro`. Cập nhật tên, canonical, `updatedAt`, ảnh, hồ, HLV, các phường lân cận. Không tạo URL thứ hai cạnh tranh với URL danh bạ hiện có.
- **Middleware:** có ngoại lệ duy nhất cho `/hoc-boi-tphcm/lai-thieu/` để giữ hotline và Zalo đã được cung cấp. Trang mới có số liên hệ được duyệt cần thêm ngoại lệ tương ứng; các route khác vẫn giữ bộ lọc liên hệ cũ.
- **Testimonials:** chỉ tái sử dụng trích dẫn và ảnh đã có ở `gioi-thieu.astro`, kèm nhãn không riêng Lái Thiêu. Không thêm schema Review/AggregateRating cho các trích dẫn này.

### Chạy xem trước

Trong `dayboi-web`, chạy `npm run dev`, sau đó mở `/hoc-boi-tphcm/lai-thieu/` tại địa chỉ localhost được Astro in ra. Để xem bản production, chạy `npm run build`, rồi `npm run preview`.

Ảnh bàn giao tại `docs/previews/lai-thieu/`: `desktop-1440-full.jpg`, `mobile-390-full.jpg`, `desktop-hero.jpg`, `mobile-390-hero.jpg` và `mockup-comparison.jpg` (mockup bên trái, triển khai bên phải).

## Những khác biệt có chủ đích với chữ/ảnh trong mockup

Tên hồ dùng 6 địa điểm từ kế hoạch; card cuối nhóm nhu cầu dành cho cư dân chung cư; học phí dùng tư vấn báo giá; hotline là 0986.456.678. Đánh giá lấy nguồn website hiện có, không giả tên/ảnh như AI trong mockup. Chân dung thầy Thông và ảnh Nhật An/TT VHTT còn cần bổ sung để khớp hoàn toàn các vị trí ảnh. Header và footer chỉ áp dụng cho template này, không thay component toàn website.

## Kiểm thử

Kết quả cuối và giới hạn kiểm tra được ghi tại `docs/lai-thieu-validation.md`; log build, audit và kiểm tra liên kết lưu cùng thư mục. Chưa deploy production; mã được giữ trên nhánh review `codex/lai-thieu-mockup-v2` để tránh kích hoạt cập nhật nhánh chính.
