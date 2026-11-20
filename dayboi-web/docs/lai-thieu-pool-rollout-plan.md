# Kế hoạch chuẩn hóa và nhân rộng trang chi tiết hồ bơi Lái Thiêu

Ngày lập: 20/11/2026. Mẫu: `/hoc-boi-nhat-an-lai-thieu/`. Kế hoạch này nối tiếp yêu cầu thiết kế Nhật An, chỉnh menu chỉ cho cụm Lái Thiêu và tạo skill riêng để dùng lâu dài.

## 1. Phạm vi và kết quả khảo sát

Tài liệu tuyển sinh có **20 địa điểm ở hai đợt đầu**: 14 địa điểm thuộc cụm Lái Thiêu/địa bàn Vĩnh Phú cũ cần đối chiếu ranh giới, 6 địa điểm giáp ranh tại Bình Hòa, Thuận An, Thuận Giao. Đợt 3 có **7 dự án tương lai**, được quản lý như danh sách theo dõi, chưa coi là lớp đang tuyển sinh.

Thư mục được cung cấp có **27 ảnh, 11 thư mục**. Đã tạo contact sheet và manifest kiểm kê để kiểm tra bằng mắt. Không coi “có file ảnh” đồng nghĩa với “có ảnh hồ thực tế dùng được”.

Các phát hiện ảnh cần lưu ý:

- 2 ảnh `ho-boi-phuong-nam-resort/phuong-nam-resort-khuon-vien-*.jpg` thể hiện **phòng ngủ**, không phải khuôn viên hay hồ bơi. Không đưa vào gallery hồ.
- `the-habitat-binh-duong/the-habitat-tien-ich-01.jpg` thể hiện **ngoại thất tòa nhà**, không thể chứng minh tiện ích/độ sâu hồ.
- `opal-skyline-ho-boi-vo-cuc-tang-4.jpg` có số điện thoại môi giới đè lên ảnh. Loại khỏi bộ ảnh xuất bản, không xóa watermark để dùng lại.
- Ảnh Emerald 68 và Roxana có dấu hiệu **phối cảnh**. EcoXuân và một số ảnh tiện ích cần đối chiếu nguồn để phân biệt render với ảnh chụp. Có thể dùng đúng nhãn, không gọi chung là “ảnh thực tế”.
- Mặt bằng tiện ích là **sơ đồ**, không dùng làm ảnh hero hoặc ảnh khảo sát.
- Duy Anh, Tiên Phong và một số ảnh Rivana có nội dung hồ rõ ràng; vẫn cần giữ caption và nguồn, không suy luận giá/giờ/độ sâu từ ảnh.

Danh sách kiểm kê: `docs/lai-thieu-location-inventory.json`; bảng ảnh: `docs/lai-thieu-location-inventory.png`.

## 2. Nguyên tắc chốt cho cả cụm

1. Một hub chính thức `/hoc-boi-tphcm/lai-thieu/`; mỗi hồ có một canonical riêng, liên kết hai chiều với hub và 2–3 địa điểm phù hợp lân cận.
2. Dùng chung template Nhật An, header địa phương, footer, bộ icon/sóng, CTA, widget, khóa học và 5 ảnh kỹ thuật đã duyệt. Dữ liệu vị trí, loại hồ, ảnh, điều kiện học và nội dung địa điểm phải riêng.
3. Header này chỉ dùng cho bể bơi/lớp bơi trong cụm Lái Thiêu, theo lời đính chính của người dùng; không thay header toàn website.
4. Trang giáp ranh ghi đúng phường thực tế. Không dùng đuôi slug hay nhãn Lái Thiêu để ngầm khẳng định mọi hồ nằm trong phường Lái Thiêu.
5. Hồ dịch vụ, resort và nội khu có chế độ sử dụng khác nhau. Không biến hồ cư dân thành địa điểm mua vé công cộng hoặc mặc định khách ngoài/HLV được phép vào.
6. Ảnh thiếu thì ghi rõ thiếu; ảnh minh họa/phối cảnh/ngoại thất có nhãn đúng. Không cắt mockup, gán ảnh hồ khác, tạo số lượng ảnh giả hoặc review giả.
7. Các giá, giờ, diện tích và chính sách trong kế hoạch là dữ liệu dự án cần đối chiếu, không phải xác nhận vận hành tại thời điểm xuất bản. Thông tin xung đột giữ trạng thái cần xác minh.
8. Hotline giảng dạy là của thầy Lê Văn Thông, 0986.456.678; khác quầy vé/BQL. Không tự gửi tin hoặc gọi điện thay người dùng.
9. Nội dung 2.500–3.500 từ là mục tiêu biên tập khi có đủ giá trị riêng; không nhân bản 3.000 từ chỉ thay tên hồ. Thiếu dữ liệu thực tế thì hoàn thiện bản nháp và ghi phần cần bổ sung trước khi index.
10. Không áp dụng máy móc mật độ từ khóa, cam kết biết bơi hay bảo lưu trong kế hoạch khi chưa có cơ sở. Giữ thông tin dễ đọc và nội dung phản ánh thực tế.

## 3. Kiến trúc tái sử dụng

```text
src/
├── data/
│   ├── laiThieuVenueCatalog.ts       # Danh mục nhẹ: id, slug, khu vực, loại, trạng thái
│   ├── laiThieuNavigation.ts         # Dựng menu từ danh mục, không chép danh sách hồ
│   ├── poolDetailTypes.ts            # Contract và trạng thái dữ liệu
│   ├── pool-detail/
│   │   ├── shared.ts                # Liên hệ, khóa học, kỹ thuật, chuẩn bị
│   │   ├── buildPoolDetail.ts       # Lắp mặc định + override có chủ đích
│   │   ├── nhat-an.ts               # Dữ liệu địa điểm độc lập
│   │   ├── emerald-golf-view.ts
│   │   └── ...                     # Một file theo hồ/nhóm nhỏ; không một file khổng lồ
│   └── poolDetailPages.ts            # Registry để route tra cứu
├── components/
│   ├── landing/LaiThieuHeader.astro
│   ├── landing/LandingFooter.astro
│   ├── landing/ui/{Icon,SectionHeading,WaveDivider}.astro
│   └── pool-detail/
│       ├── PoolDetailPage.astro      # Chỉ lắp các section
│       ├── PoolDetailHero.astro
│       ├── PoolQuickFacts.astro
│       ├── PoolPhotoGallery.astro
│       ├── PoolFacilityReview.astro
│       ├── PoolCoursesSection.astro
│       ├── PoolCourseCard.astro
│       ├── PoolSwimmingStyles.astro
│       ├── PoolInstructorSection.astro
│       ├── PoolLocationSection.astro
│       ├── PoolPreparationSection.astro
│       ├── PoolTuitionSection.astro
│       ├── PoolFAQ.astro
│       ├── PoolLearningGuide.astro
│       ├── PoolTestimonials.astro    # Chỉ render khi có nguồn
│       ├── NearbyPools.astro
│       └── PoolEnrollmentCTA.astro
├── pages/
│   ├── hoc-boi-nhat-an-lai-thieu.astro
│   └── ...                         # Route mỏng 5–10 dòng hoặc allowlist getStaticPaths
└── styles/
    ├── pool-detail.css             # Tokens/layout/variant
    └── lai-thieu-header.css        # Dropdown/drawer địa phương
```

Phần section/template trên đã có trong nhánh Nhật An. Phần danh mục tập trung, factory/shared và tách dữ liệu theo hồ là bước chuẩn hóa tiếp theo trước khi nhân 19 trang mới. Tránh thêm một file `.astro` chứa hàng trăm dòng dữ liệu và markup cho mỗi hồ.

### Ranh giới trách nhiệm

| Thành phần | Được dùng chung | Phần phải riêng |
|---|---|---|
| Header/menu | Layout, drawer, accordion, liên hệ, nhóm menu | Active URL, base URL lớp học, địa điểm đã có route |
| Footer/thanh liên hệ | Brand, pháp lý, hotline chuyên môn | Khu vực và anchor đúng trang |
| Hero | Grid, gradient, sóng, badge, CTA | Tên, sapo, ảnh, caption, địa chỉ/đối tượng |
| Gallery | Dialog, focus, điều khiển ảnh | Array ảnh thật/phối cảnh theo đúng hồ |
| Thông tin/đánh giá | Ô dữ liệu, icon trạng thái | Giá trị, nguồn và ngày xác minh từng trường |
| Khóa học/kỹ thuật | Component, ảnh minh họa đã duyệt | Khả năng tổ chức tại hồ và link lớp |
| Bản đồ | Container, mở Maps, fallback | Địa chỉ, query, tọa độ đã xác minh |
| Nội dung/FAQ | Cấu trúc accordion | Vị trí, tiếp cận, điều kiện sử dụng, câu hỏi riêng |
| Schema/SEO | Builder theo contract | Canonical, entity, địa chỉ, metadata, nội dung FAQ |

## 4. Danh mục URL và mức sẵn sàng

Các URL ngoài 8 URL đã quy định là đề xuất kỹ thuật; chỉ đưa vào menu như route thật sau khi trang đã được tạo và kiểm tra.

| # | Địa điểm / loại | URL | Ảnh đã kiểm kê | Cần xử lý trước bản hoàn chỉnh |
|---|---|---|---|---|
| 1 | Nhật An — dịch vụ | `/hoc-boi-nhat-an-lai-thieu/` | Chưa có ảnh thật; hero minh họa mới | Giữ mẫu, hoàn tất kiểm tra header/interaction; bổ sung khảo sát khi có |
| 2 | Emerald Golf View — nội khu | `/hoc-boi-emerald-golf-view-lai-thieu/` | 3: hồ, mặt bằng, flycam | Phân loại ảnh hồ chụp/render; xác nhận quyền dùng, vị trí tầng |
| 3 | Opal Skyline — nội khu | `/hoc-boi-opal-skyline-lai-thieu/` | 5, loại ảnh watermark còn 4 | Chọn hero sạch; caption mặt bằng/ngoại thất riêng |
| 4 | The Rivana — nội khu/giáp ranh | `/hoc-boi-the-rivana-lai-thieu/` | 5, có ảnh bơi người lớn/trẻ em | Chọn ảnh không chữ quảng cáo làm hero; đối chiếu địa chỉ mới |
| 5 | Duy Anh — dịch vụ | `/hoc-boi-duy-anh-lai-thieu/` | 3 ảnh hồ | Phân biệt 249 Nguyễn Trãi và 505/3B Thạnh Bình, không trộn giờ/giá hai cơ sở |
| 6 | TT VHTT Lái Thiêu — công cộng | `/hoc-boi-tt-vhtt-lai-thieu/` | 0 ảnh hồ riêng | Giờ trong kế hoạch mâu thuẫn; cần xác minh, không lấy ảnh Duy Anh |
| 7 | Phương Nam Resort — resort/giáp ranh | `/hoc-boi-phuong-nam-resort-lai-thieu/` | 2 ảnh phòng nghỉ, 0 ảnh hồ dùng được | Bổ sung ảnh hồ; tách giờ resort và giờ hồ, xác nhận tiếp nhận khách ngoài |
| 8 | KDL Dìn Ký — dịch vụ | `/hoc-boi-din-ky-lai-thieu/` | 1 ảnh hồ | Gallery 1 ảnh trung thực; xác minh vé/giờ và cơ sở Bình Nhâm |
| 9 | The Emerald 68 — nội khu/giáp ranh | `/hoc-boi-emerald-68-lai-thieu/` | 2 ảnh có dấu hiệu phối cảnh | Gắn đúng nhãn; xác nhận vận hành và quyền dùng |
| 10 | EcoXuân — nội khu | `/hoc-boi-ecoxuan-lai-thieu/` | 1 ảnh cần phân loại chụp/render | Xác nhận nguồn và tiếp nhận HLV |
| 11 | Vista Riverside — nội khu | `/hoc-boi-vista-riverside-lai-thieu/` | 0 | Bổ sung ảnh/điều kiện vào hồ |
| 12 | Roxana Plaza — nội khu/giáp ranh | `/hoc-boi-roxana-plaza-lai-thieu/` | 1 phối cảnh toàn dự án | Không coi là ảnh hồ; xác minh vận hành, vị trí và điều kiện học |
| 13 | Marina Tower — nội khu/giáp ranh | `/hoc-boi-marina-tower-lai-thieu/` | 0 | Ảnh, địa chỉ mới, quyền vào hồ/HLV |
| 14 | Ehome 4 — nội khu/giáp ranh | `/hoc-boi-ehome-4-lai-thieu/` | 0 | Địa điểm hồ cụ thể, quản lý, ảnh và tiếp cận |
| 15 | The Habitat — nội khu, Bình Hòa | `/hoc-boi-the-habitat-binh-hoa/` | 1 ngoại thất tòa nhà | Không dùng làm ảnh hồ; phân biệt giai đoạn dự án và quyền sử dụng |
| 16 | Canary Heights — nội khu, Bình Hòa | `/hoc-boi-canary-heights-binh-hoa/` | 0 | Ảnh hồ và điều kiện cư dân/HLV |
| 17 | ParkView Apartment — nội khu, Bình Hòa | `/hoc-boi-parkview-apartment-binh-hoa/` | 0 | Xác minh đúng dự án/tên/địa chỉ, ảnh và vận hành |
| 18 | Hồ bơi 71 — dịch vụ, Bình Hòa | `/hoc-boi-71-binh-hoa/` | 0 | Giờ trong kế hoạch chưa thống nhất; xác minh đơn vị và ảnh |
| 19 | Tiên Phong — dịch vụ, Thuận An | `/hoc-boi-tien-phong-thuan-an/` | 3 ảnh hồ | Tách phí bơi/gói dịch vụ; xác nhận lịch học và giờ |
| 20 | Minh Quân — dịch vụ, Thuận Giao | `/hoc-boi-minh-quan-thuan-giao/` | 0 | Xác minh địa điểm/giờ tối, bổ sung ảnh |

Nhóm tương lai theo dõi riêng: Astral City, Lavita Thuận An, Anderson Park, Diamond Boulevard, Legacy Prime, A&T Sky Garden, KĐT Hồ Gươm Xanh. Chưa chốt route tuyển sinh/index cho 7 dự án này khi chưa có dữ liệu vận hành và quyền tổ chức lớp; không biến thông số phối cảnh thành điều kiện hồ hiện tại.

## 5. Hợp đồng dữ liệu

Danh mục nhẹ nên có: `id`, `name`, `slug`, `variant`, `targetCommune`, `oldArea`, `status`, `address`, `addressStatus`, `detailHref`, `imageSet`, `sources`.

Tách trạng thái theo trường: `verified`, `project-document`, `unverified`, `conflicting`, `updating`. Không dùng ngày biên tập làm ngày khảo sát. Ảnh có `kind: photo | render | plan | exterior | illustration | excluded`, caption đúng nội dung và nguồn. `status: future` không được mặc định tạo trang bán khóa học.

Mọi trang dùng `PoolDetailData`; builder nhận các phần chung và override riêng. Một hồ có thể có nhiều cơ sở: khi chưa rõ Duy Anh thuộc cơ sở nào, giữ một entity với cảnh báo và không gộp thông số. Nếu xác minh hai địa điểm độc lập, tách ID/địa chỉ theo cơ sở trước khi tạo schema.

## 6. Các giai đoạn và tiêu chí nghiệm thu

### Giai đoạn A — Khóa mẫu Nhật An và skill

- Hoàn thiện header địa phương mới, bỏ dòng chú thích HLV theo yêu cầu đã nhận.
- Kiểm tra menu mở/đóng/focus/scroll, gallery, FAQ và các link/anchor; chụp desktop/mobile.
- Đóng gói skill `lai-thieu-pool-design`, giữ một bản có thể version trong repo và cài vào thư mục skill để gọi được.
- Nghiệm thu: mẫu chạy, dữ liệu/markup tách riêng, không có thông tin giả, skill validate thành công.

### Giai đoạn B — Chuẩn hóa nguồn dữ liệu và ảnh

- Đưa 20 địa điểm + 7 dự án tương lai vào catalog có ID ổn định và trạng thái rõ.
- Tách dữ liệu Nhật An khỏi file registry, tạo shared data/factory và schema builder.
- Tạo asset manifest theo hồ, tối ưu derivative WebP; giữ nguyên ảnh gốc. Loại ảnh sai nội dung/watermark, phân biệt ảnh phối cảnh.
- Dựng adapter để `communePoolsData.js`, hub, menu và nearby cùng dùng catalog; không thêm ba danh sách slug riêng biệt.
- Nghiệm thu: một nguồn sự thật cho slug, địa chỉ và trạng thái; menu không trỏ URL chưa tồn tại; không lộ giá trị giả cho trường chưa xác minh.

### Giai đoạn C — Nhóm có ảnh và dữ liệu dùng được

Ưu tiên Emerald Golf View, Opal Skyline, Rivana, Duy Anh; sau đó Dìn Ký và Tiên Phong. Dùng ảnh đúng loại, nội dung vị trí/tiếp cận/FAQ riêng, variant và cảnh báo quyền sử dụng rõ.

Mỗi trang có route mỏng, metadata/canonical độc lập, 1 H1, gallery đúng số ảnh, link về hub đúng phường và link các hồ lân cận phù hợp. Không thêm giá/giờ chỉ vì các số đó xuất hiện trong kế hoạch.

Nghiệm thu: screenshot ít nhất public + residential ở desktop/mobile; không lỗi link/anchor; schema không có giá, tọa độ hay rating thiếu nguồn. Nếu chưa xác minh vận hành hoặc dữ liệu riêng quá ít, giữ bản nháp xem thử và ghi lý do chưa index.

### Giai đoạn D — Nhóm thiếu ảnh hoặc cần xác minh bổ sung

TT VHTT, Phương Nam, Emerald 68, EcoXuân, Vista, Roxana, Marina, Ehome 4, Habitat, Canary, ParkView, hồ 71, Minh Quân. Mỗi nơi có checklist thiếu riêng; dùng ảnh minh họa/ngoại thất đúng nhãn ở bản xem thử, không biến các ảnh đó thành bằng chứng khảo sát.

Nghiệm thu tương tự giai đoạn C, thêm điều kiện chất lượng nội dung và trạng thái vận hành. Không ép đủ năm ảnh hoặc 3.000 từ bằng ảnh lặp/bài sao chép.

### Giai đoạn E — Nhóm dự án tương lai

Đối chiếu tiến độ vận hành, hình thức dùng hồ, nhận diện dự án và địa chỉ hiện tại. Chỉ chuyển từng dự án sang catalog triển khai khi đủ cơ sở; nếu cần làm nội dung theo dõi dự án thì dùng loại trang khác với tuyển sinh tại hồ đang hoạt động.

### Giai đoạn F — Nghiệm thu cụm và xuất bản theo quyền hiện hành

- Build/Audit trên toàn bộ output mới. Kiểm tra sitemap, noindex cho bản nháp, canonical, title/description không trùng và liên kết vùng giáp ranh.
- Ma trận viewport: 360/390/430, 768/1024, 1280/1440/1920. Không tràn ngang; ảnh không méo; CTA không che phần cuối.
- Menu, gallery, accordion, Maps, gọi/Zalo phải thực sự hoạt động; kiểm tra lại sau thay đổi component dùng chung.
- Đối chiếu hub Lái Thiêu và trang khác để tránh regression. Không claim CWV đạt khi chưa đo; ghi giới hạn công cụ khi có.
- Bàn giao preview, ảnh chụp, report, manifest và tài liệu tái sử dụng. Theo yêu cầu hiện tại, chưa chuyển traffic production và chưa push GitHub.

## 7. Các xung đột đã xử lý trong kế hoạch này

| Tài liệu ghi | Cách thực hiện |
|---|---|
| “27 ảnh thật” | 27 file đã kiểm kê, phân loại đúng nội dung; không mặc định thật/đúng hồ |
| Tối thiểu 5 ảnh/hồ | Đúng số ảnh hiện có; thiếu thì bổ sung sau, không lặp |
| Cam kết biết bơi/bảo lưu 30–60 ngày | Chỉ đăng khi có chính sách được xác nhận; mẫu hiện dùng tư vấn theo thỏa thuận |
| Giá/giờ cụ thể | Cần nguồn hiện hành; xung đột chuyển trạng thái cần xác minh |
| Tất cả địa điểm “Lái Thiêu” | Giữ đúng phường thực tế và ghi địa danh cũ/giáp ranh |
| Keyword density 1,5–2% | Viết tự nhiên, trả lời đúng nhu cầu, không nhồi từ khóa |
| Một trang 2.500–3.500 từ | Mục tiêu có điều kiện chất lượng, không nhân bản văn bản |
| Header dùng toàn website | Giới hạn lại cho nhóm Lái Thiêu theo lời đính chính mới nhất |

## 8. Bàn giao và theo dõi

Kế hoạch này là bản phân rã công việc và quyết định dữ liệu trước khi mở rộng. Phần đã thực hiện: template Nhật An theo section, header địa phương mới, kiểm kê 27 ảnh và skill nguồn. Các trang hồ khác chưa được coi là đã hoàn tất chỉ từ việc có tên trong bảng. Khi triển khai từng đợt, ghi rõ URL, trạng thái bản nháp/được duyệt, ảnh sử dụng, kiểm tra đã chạy và phần dữ liệu còn thiếu.

### Cập nhật sau triển khai giao diện

Đã lắp đủ 20 trang vào registry, tạo 19 route mỏng mới, dùng chung header/footer/widget, bổ sung 20 card lên hub và tối ưu 24 ảnh phù hợp. Kết quả kiểm tra và URL xem thử cuối được ghi tại `docs/lai-thieu-cluster-validation.md`. 19 trang mới giữ noindex và trạng thái chờ xác minh; 7 dự án tương lai không tạo trang tuyển sinh. Phần khảo sát thực địa, giá/giờ hiện hành và nội dung chuyên sâu chỉ bổ sung khi có dữ liệu, không coi việc dựng xong giao diện là đã xác nhận vận hành.
