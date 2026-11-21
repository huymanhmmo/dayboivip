# Trang chi tiết từng địa điểm theo mẫu Nhật An

## Phạm vi đã thực hiện

- 438 địa điểm trong dữ liệu hiện có của 34 tỉnh/thành: giữ 20 trang cụm Lái Thiêu, thêm 417 trang chi tiết tiếng Việt và nâng cấp trang Tăng Bạt Hổ tại URL cũ.
- Danh mục được gom từ research, communePools, starter locations và catalog Lái Thiêu. 43 cặp tên được đối chiếu rồi ghi trong aliases; các địa chỉ chưa thống nhất vẫn được giữ để người đọc đối chiếu.
- Các trang mới dùng `/dia-diem-hoc-boi/{slug}/`. Slug và cờ index được lưu cố định trong `src/data/venues/routes.json`; thay tên hiển thị không tự đổi URL.
- Danh bạ tỉnh có liên kết đến mọi hồ trong registry. Thẻ hồ của các danh bạ tỉnh/xã/khu vực VI/EN dẫn đến cùng trang chi tiết tương ứng. Đợt này chưa tạo bản dịch tiếng Anh cho từng trang hồ mới.
- Trang Tăng Bạt Hổ chuyển sang template chi tiết, giữ URL, canonical và trạng thái index đã có.

## Kiến trúc tái sử dụng

```text
locations + research + communePools + catalog Lái Thiêu
                    ↓
venues/catalog.js + aliases.json + routes.json
                    ↓
buildVenueDetail.ts → route mỏng [venue].astro
                    ↓
PoolDetailPage → hero / gallery / tiện ích / khóa học / kỹ thuật
              → liên hệ / bản đồ / chuẩn bị / chi phí / FAQ
              → hướng dẫn / địa điểm khác / CTA
                    ↓
LocalSiteHeader + LocalSiteFooter + ContactBlock dùng chung
```

PoolDetailPage nhận cấu hình vùng, tỉnh và mảng liên hệ. Hồ Lái Thiêu giữ nhánh tương thích với dữ liệu riêng; hồ mới không kế thừa hotline hoặc giáo viên của Lái Thiêu. Thiếu đầu mối được chỉ định thì CTA đưa tới danh sách liên hệ hoặc bản đồ.

Mỗi hồ trình bày từng giáo viên/đơn vị, số điện thoại và nguồn riêng; ban quản lý/quầy vé nằm trong nhóm riêng. Chuỗi có nhiều số được tách thành các liên kết gọi. Không suy ra Zalo từ số điện thoại.

Ảnh kỹ thuật, chương trình và đồ dùng được dùng lại. Hồ chưa có tư liệu riêng dùng hình minh họa có nhãn, không xác nhận đó là ảnh thực tế. Không tạo chân dung giáo viên hoặc nhận xét học viên giả. Giá vé, lịch lớp, điều kiện nội khu và tiện ích chưa có bằng chứng hiện hành được nêu là cần xác nhận.

## Kiểm tra

Build cuối tạo 7.254 trang, tương ứng 7.255 file HTML gồm 404. Kiểm tra 418 trang trong đợt này (417 mới, Tăng Bạt Hổ nâng cấp tại URL cũ) đối chiếu 792 link điện thoại và 17.287 tham chiếu nội bộ; giữ canonical/index của 6.838 HTML trước đó. Có báo cáo riêng cho 6.723 danh bạ và 20 trang hồ Lái Thiêu.

Kiểm tra trình duyệt ban đầu: 38 trang đại diện, 118 trường hợp viewport, phát hiện một lỗi tràn header 13 px ở tên địa phương dài. Đã sửa nhãn địa phương co/xuống dòng. Kiểm tra bản cuối: 8 trang, 64 trường hợp viewport ở 360, 390, 430, 768, 1024, 1280, 1440 và 1920 px; 382 phép kiểm tra, không còn lỗi.

Đây là kiểm tra responsive mô phỏng bằng Chromium, không phải thử nghiệm điện thoại vật lý. Không gửi form, gọi điện hoặc nhắn tin cho các liên hệ thật.

Các báo cáo:

- `venue-detail-inventory.json`: danh mục, URL, alias và nguồn từng địa điểm.
- `venue-detail-integrity.json`: đối chiếu toàn bộ trang hồ mới.
- `venue-browser-initial.json`, `venue-browser.json`: kết quả trước/sau sửa responsive.
- `locality-integrity.json`, `lai-thieu-cluster-integrity.json`: hồi quy vùng và hồ đã có.
- `previews/venue-details/`: ảnh giao diện đã kiểm tra.
- `venue-release-preview.json`, `venue-release-production.json`: đối chiếu HTTP và nội dung trên phiên bản triển khai.

## Chính sách xuất bản

417 trang mới có thể truy cập nhưng giữ `noindex, follow`, chưa vào sitemap cho tới khi rà soát nguồn và dữ liệu từng hồ. 845 URL indexable đã có không thay đổi. Trang Tăng Bạt Hổ giữ URL/index đã xuất bản; chỉ các trang mới hoàn toàn mới giữ noindex. Giao diện hoàn thiện không đồng nghĩa xác nhận hồ đang hoạt động hoặc đang có lớp mở.

Code chỉ commit tại máy theo lựa chọn của người dùng. Triển khai Worker dayboivip theo quyền đã được cấp trong phiên; không push GitHub.

Trang Tăng Bạt Hổ dùng lại `/hoc-boi-tang-bat-ho/`, giữ canonical và trạng thái index đã có; không tạo thêm một URL chi tiết trùng địa điểm.

## Triển khai và xác nhận trên domain chính

Đã triển khai 100% lên dayboi.vip lúc 09:31 ngày 21/11/2026 (giờ Việt Nam), phiên bản `ab92f5ef-6fa0-4fa3-836b-2011cfaaca66`. Bản xem thử và production đều đối chiếu 528 trang / 645 đường dẫn với nội dung build, không có sai khác. Kiểm tra trình duyệt trên production: 8 trang, 16 trường hợp viewport desktop/mobile, 142 phép kiểm tra, không phát hiện lỗi. Chi tiết và phiên bản trước nằm trong `venue-deployment.json`.
