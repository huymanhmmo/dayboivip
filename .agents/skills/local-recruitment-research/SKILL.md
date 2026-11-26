---
name: local-recruitment-research
description: Quy trình chuẩn (Workflow 6 bước) nghiên cứu thông tin bể bơi, địa chỉ cũ-mới sau sáp nhập, cào ảnh thực tế và lập kế hoạch SEO/GEO 2026 cho một khu vực tuyển sinh mới trên dayboi.vip.
metadata:
  version: 1.0.0
---

# Workflow Nghiên Cứu & Lập Kế Hoạch Tuyển Sinh Theo Khu Vực (`dayboi.vip`)

> Đúc kết thực chiến từ chiến dịch cụm **Phường Lái Thiêu, TP.HCM** (20/11/2026). Dùng quy trình này mỗi khi mở rộng tuyển sinh sang một phường/xã/quận/khu vực mới.

---

## Tổng quan 6 Bước Triển Khai

1. **Bước 1 — Chuẩn hóa Địa giới Cũ – Mới & Kiểm tra Hub sẵn có**
2. **Bước 2 — Giải mã tên gọi & Quét 4 lớp bể bơi trong khu vực**
3. **Bước 3 — Thu thập thông số vận hành & giá vé chi tiết**
4. **Bước 4 — Cào, phân loại & kiểm duyệt hình ảnh thật**
5. **Bước 5 — Thiết kế kiến trúc URL chống Cannibalization & Ma trận từ khóa 3 lớp**
6. **Bước 6 — Đóng gói file Kế hoạch `.md`, đồng bộ `communePoolsData.js` & Kiểm toán SEO**

---

## Chi tiết từng bước & Kinh nghiệm thực chiến

### Bước 1: Chuẩn hóa Địa giới Cũ – Mới & Kiểm tra Hub sẵn có
* **Tra cứu file địa giới chính thức của dự án:** Đọc `dayboi-web/src/data/geo/communes/{ma-tinh}.json` để lấy chính xác:
  * Tên phường/xã mới + tỉnh/thành mới.
  * Danh sách `previous` (các phường/xã cũ sáp nhập thành).
  * Các phường giáp ranh liền kề (để không bỏ sót bể bơi nằm sát ranh giới hành chính mới, ví dụ *P. Vĩnh Phú cũ* chia về cả *Lái Thiêu* và *Bình Hòa*).
* **Kiểm tra URL Hub sẵn có trên `dayboi.vip`:**
  * Hệ thống đã sinh sẵn trang danh bạ tại `https://dayboi.vip/{tinh-slug}/{phuong-slug}/` (qua `[location]/[area].astro`).
  * Kiểm tra xem `communePoolsData.js` đã có dữ liệu cho `targetCommune` này chưa.
* **Quy ước viết địa chỉ trong mọi tài liệu & bài viết:** Luôn ghi **Địa chỉ mới trước**, mở ngoặc **(Địa chỉ cũ trước sáp nhập)** ngay sau để đón cả hai nhóm từ khóa tìm kiếm.

### Bước 2: Giải mã tên gọi & Quét 4 lớp bể bơi trong khu vực
* **Kinh nghiệm giải mã tên dân gian / tên chủ đầu tư:** Người dùng thường nhớ tên CĐT hoặc tên gọi quen miệng thay vì tên thương mại dự án (ví dụ: *Chung cư Lê Phong QL13 → The Emerald Golf View*; *Chung cư Đất Xanh Nguyễn Văn Tiết → Opal Skyline*; *Chung cư HKK QL13 → The Rivana*).
  * Cú pháp search: `"[tên CĐT hoặc tên quen gọi]" "[tên đường]" "[phường/quận]" hồ bơi OR "bể bơi"`.
* **Quét đủ 4 lớp địa điểm để không sót khách:**
  1. **Bể bơi công cộng / TT VHTT / Nhà thiếu nhi:** Giá vé rẻ (15–35k), phù hợp lớp nhóm.
  2. **Bể bơi dịch vụ tư nhân / Quán cà phê hồ bơi / KDL – Resort:** Không gian đẹp, có chỗ phụ huynh ngồi chờ, phù hợp kèm 1-1 & gia đình.
  3. **Bể bơi nội khu Chung cư / KĐT / KDC:** Khai thác dạy kèm 1-1 cho cư dân tại chỗ.
  4. **Bể tư nhân nhỏ / mới mở (chưa lên Google):** Nếu người dùng đưa địa chỉ dạng số lô/số nhà (VD: `A86, KP Bình Đức — Hồ bơi Nhật An`) mà không tìm thấy trên Google, **không được bịa thông số** — đánh dấu rõ `[Cần khảo sát thực tế tại quầy]`.

### Bước 3: Thu thập thông số vận hành (Đủ ý cho cả SEO & Chốt sale)
Với mỗi bể bơi, tìm và chuẩn hóa đủ các trường sau:
* **Địa chỉ mới & Địa chỉ cũ** + **Cách đi tới & Mốc nhận diện gần đó** (trục đường lớn, bệnh viện, siêu thị, KCN, cầu...).
* **Vị trí & Quy mô mặt nước:** Tầng mấy (nếu là chung cư), diện tích (m²), chiều dài (25m/50m), có tách riêng hồ trẻ em & người lớn không, có mái che/nước ấm không.
* **Giờ mở cửa & Lịch vệ sinh hồ:** Chú ý các bể nghỉ sáng thứ 2 để thay nước (như Hồ bơi Duy Anh).
* **Giá vé vào cửa & Quy định sử dụng:**
  * Bể dịch vụ: Giá vé lượt (người lớn/trẻ em), vé tháng, vé cổng KDL.
  * Bể chung cư: Cư dân miễn phí bằng thẻ từ; ghi chú rõ học viên cần đăng ký bảo lãnh HLV tại lễ tân/BQL.
* **Mặt bằng học phí & Gói học tại bể:** Lớp nhóm vs 1 kèm 1, số buổi (8–12 buổi), chính sách bảo lưu (30–60 ngày), vé hồ tự túc hay đã gồm.
* **Định danh Hotline & E-E-A-T khu vực:** Xin thông tin **HLV phụ trách chính + Hotline riêng khu vực** (VD: *Thầy Lê Văn Thông — Kiện tướng Bơi lội — `0986.456.678`*), tách bạch rõ với SĐT quầy vé BQL bể bơi.

### Bước 4: Cào, phân loại & kiểm duyệt hình ảnh thật
* **Cấu trúc thư mục chuẩn:**
  `dayboi-web/public/images/locations/{khu-vuc-slug}/{ten-be-slug}/`
  * Đặt tên file dạng kebab-case không dấu, mô tả rõ nội dung (VD: `the-rivana-ho-boi-nguoi-lon.jpg`, `the-rivana-ho-boi-tre-em.jpg`).
* **Quy trình tải & lọc:**
  * Tìm ảnh từ trang chính thức dự án hoặc bài review uy tín, lọc bỏ thumbnail nhỏ (`-300x200`).
  * Kiểm tra dung lượng (> 5 KB) và magic bytes hợp lệ (JPEG/PNG/WEBP).
* **Bắt buộc kiểm tra bằng mắt (`read_file`):**
  * Loại bỏ hoặc đánh dấu cảnh báo các ảnh bị **watermark SĐT môi giới** hoặc **chữ quảng cáo che mặt nước** (tránh vi phạm chính sách hiển thị SĐT và làm xấu giao diện).
  * Chuẩn bị tối thiểu **5 ảnh thật/bài** (ghép ảnh bể bơi địa phương + ảnh lớp học thực tế từ `/images/classes/`).

### Bước 5: Kiến trúc URL chống Cannibalization & Ma trận Từ khóa 3 Lớp (SEO/GEO 2026)
* **Chống Cannibalization (Quy tắc vàng trên `dayboi.vip`):**
  * **Trang Hub (Bài Tổng):** Dùng chính URL trang phường sẵn có `/{tinh-slug}/{phuong-slug}/`. **KHÔNG** tạo thêm URL bài tổng thứ 2 ở root.
  * **Bài Chi Tiết từng bể (Spokes):** Đặt ở root `/hoc-boi-{ten-be}-{khu-vuc}/` (ngắn gọn, tránh lặp từ kiểu `hoc-boi-ho-boi-...`), tạo file `.astro` theo mẫu `hoc-boi-tang-bat-ho.astro` và đăng ký vào `blogPosts.js` (`categorySlug: 'goc-tu-van'`, `tagSlugs: ['hoc-boi-...', 'dia-diem-hoc-boi']`).
  * **Liên kết 2 chiều:** Hub (`communePoolsData.js` → `exactSourceUrl`) ⇄ Bài chi tiết từng bể ➔ Hub Khóa học (`/khoa-hoc-boi/...`) & Kỹ thuật (`/ky-thuat-boi/...`).
* **Ma trận Từ khóa 3 Lớp (26+ từ khóa/bài theo `dayboi-content-writer`):**
  * **1 Từ khóa chính** (Title ≤ 60 ký tự không lặp đuôi thương hiệu, Meta Description 130–155 ký tự, H1, URL, mật độ 1.5–2%).
  * **5 Từ khóa phụ** (chia vào H2/H3: lớp học bơi, dạy bơi, bơi ếch, bơi sải/trườn sấp, bơi ngửa & bơi bướm, đứng nước).
  * **20+ Từ khóa chùm LSI/Semantic** (kỹ thuật thở nước, lực cản/lực đẩy nổi, tâm lý sợ nước, dụng cụ bơi...).
* **Chuẩn GEO 2026 (AI Overviews / ChatGPT / Perplexity):**
  * **Inverted Pyramid:** 2–3 câu đầu dưới `<h1>` và mỗi `<h2>` trả lời trực diện câu hỏi.
  * **H2 dạng câu hỏi dài**, bảng HTML thuần `<table>` (không inline CSS), bôi đậm từ khóa bằng `<strong>` (không dùng `**`), `<figcaption>` không ghi `"Chú thích:"`.
  * **Schema:** `BreadcrumbList` + `Article` (`Person` HLV phụ trách) + `FAQPage`.

### Bước 6: Đóng gói Kế hoạch, Đồng bộ Dữ liệu & Kiểm toán
1. Lưu file kế hoạch tổng hợp tại `dayboi-web/docs/ke-hoach-tuyen-sinh-{khu-vuc-slug}.md` (chia 3 đợt triển khai: Đợt 1 Trọng điểm → Đợt 2 Mở rộng → Đợt 3 Dự án mới).
2. Cập nhật dữ liệu bể bơi + HLV phụ trách vào `dayboi-web/src/data/communePoolsData.js` để nâng cấp ngay trang Hub phường.
3. Viết các bài chi tiết `.astro` + cập nhật `blogPosts.js` + gắn `exactSourceUrl` ngược lại vào `communePoolsData.js`.
4. Chạy kiểm toán trước khi deploy:
   * `npm run optimize:images`
   * `npm run images:dimensions`
   * `npm run audit:seo:strict`
   * `npm run build`
