# 🌊 TÀI LIỆU QUY CHUẨN THIẾT KẾ (DESIGN SPECIFICATION)
## DỰ ÁN: SWIM FOR LIFE VIỆT NAM — DAYBOI.VIP
> **Phiên bản:** 2.0 (Nâng cấp toàn diện)  
> **Nguyên lý thiết kế:** Kết hợp `Frontend-Design (Anthropic)` (chống AI slop, cá tính mạnh mẽ), `UI/UX Pro Max` (Aquatic / Sports color & layout), và `Xiaopu Web Design (Spec-first)`.  
> **Mục tiêu cốt lõi:** Gia tăng độ uy tín sư phạm, cảm giác nước tươi mát, tối đa hóa tỷ lệ chuyển đổi đăng ký học thử và gọi hotline.

---

## 1. BRAND DNA & KHÔNG GIAN THỊ GIÁC (ATMOSPHERE)

* **Tính cách thương hiệu:** Chuyên nghiệp, Tận tâm sư phạm, Tràn đầy năng lượng, An toàn tuyệt đối.
* **Phong cách thị giác (Aesthetic):** *Modern Oceanic & Aquatic Athletic* — Kết hợp giữa chiều sâu của đại dương xanh mát, sự tươi sáng của nước hồ bơi sạch chuẩn quốc tế, và màu cam hoàng hôn năng động tạo tương phản kích thích hành động (Call to Action).
* **Mức độ tương tác (Interaction Level):** **L2 (Fluency & Polish)**:
  * Hiệu ứng hover nổi nhẹ (card elevation +4px, soft oceanic shadow).
  * Chuyển động vi mô (Micro-interactions) trên các nút CTA (nhịp thở nhẹ nhàng, hover đổi sắc gradient).
  * Hiệu ứng gợn sóng CSS thuần nhẹ nhàng ở Hero Section, không dùng thư viện JS nặng để giữ tốc độ load 100/100.

---

## 2. HỆ THỐNG MÀU SẮC (COLOR TOKENS & SYSTEM)

### 2.1 Bảng màu chính (Aquatic Palette)
| Token | Mã màu (HEX) | Ý nghĩa & Vị trí ứng dụng |
| :--- | :--- | :--- |
| `--color-primary` | `#0077B6` | **Ocean Blue** — Màu chủ đạo, nhận diện thương hiệu, tiêu đề chính |
| `--color-primary-dark` | `#005A8D` | Nhấn chìm, trạng thái hover của nút chính, viền khối |
| `--color-primary-light` | `#0096E0` | Ánh sáng phản chiếu mặt nước, icon phụ |
| `--color-secondary` | `#00B4D8` | **Aqua Cyan** — Dải chuyển màu (gradient), viền badge |
| `--color-secondary-light`| `#48CAE4` | Màu nước sáng, điểm nhấn trên nền tối |
| `--color-accent` | `#FF6B35` | **Energy Tangerine (Màu chuyển đổi)** — Nút CTA "Đăng ký học thử", nhãn Hot |
| `--color-accent-dark` | `#E55A2B` | Hover của nút CTA chính |
| `--color-accent-light` | `#FF8A5C` | Đổ bóng glow của nút CTA, badge ưu đãi |

### 2.2 Màu nền & Trung tính (Neutral & Surfaces)
| Token | Mã màu (HEX) | Ứng dụng |
| :--- | :--- | :--- |
| `--color-dark` | `#023047` | **Deep Abyss** — Nền phần Vinhomes, footer, chữ tiêu đề đậm |
| `--color-text` | `#1A202C` | Chữ nội dung chính (tương phản chuẩn WCAG AAA trên nền trắng) |
| `--color-text-secondary`| `#4A5568` | Chữ mô tả phụ, giải thích chi tiết |
| `--color-bg` | `#FFFFFF` | Nền trắng chủ đạo |
| `--color-bg-alt` | `#F0F8FF` | Nền xanh hồ bơi siêu nhẹ (Alice Blue), ngăn cách các section |
| `--color-bg-section` | `#F7FBFE` | Nền phân cách nội dung |
| `--color-surface-card` | `#FFFFFF` | Nền thẻ khóa học (kết hợp viền `rgba(0,119,182,0.08)`) |

---

## 3. HỆ THỐNG PHÔNG CHỮ (TYPOGRAPHY SPECIFICATION)

* **Font Tiêu Đề (Heading):** `'Be Vietnam Pro', -apple-system, sans-serif`
  * Trọng lượng: `600 (SemiBold)`, `700 (Bold)`, `800 (ExtraBold)`
  * Đặc điểm: Phông chữ thiết kế riêng cho tiếng Việt, dấu thanh cân đối, hình khối học hiện đại, khỏe khoắn.
* **Font Nội Dung (Body):** `'Inter', -apple-system, sans-serif`
  * Trọng lượng: `400 (Regular)`, `500 (Medium)`, `600 (SemiBold)`
  * Đặc điểm: Khả năng đọc xuất sắc trên mọi kích thước màn hình điện thoại và máy tính.

### Thang đo tỷ lệ chữ (Type Scale)
* `Hero H1`: `2.75rem - 3.25rem` (44px - 52px), line-height: 1.15
* `Section H2`: `2rem - 2.25rem` (32px - 36px), line-height: 1.25
* `Card Title H3`: `1.25rem - 1.375rem` (20px - 22px), line-height: 1.35
* `Body text`: `1rem` (16px), line-height: 1.6
* `Small / Caption`: `0.875rem` (14px)

---

## 4. QUY CHUẨN CÁC THÀNH PHẦN GIAO DIỆN CHÍNH (COMPONENTS)

### 4.1 Header & Sticky Navbar
* Giữ cố định trên cùng (`position: sticky; top: 0; z-index: 1000`).
* Nền kính mờ: `backdrop-filter: blur(12px); background: rgba(255,255,255,0.92); border-bottom: 1px solid rgba(0,119,182,0.08)`.
* Hotline gọi nhanh luôn hiển thị với icon rung nhẹ: `0979.121.097`.
* Nút CTA "Đăng Ký Học Thử" thu hút ánh nhìn bằng viền glow cam.

### 4.2 Hero Section (Vùng trên nếp gấp - Above the fold)
* Tiêu đề: Khẳng định mạnh mẽ định vị số 1 và cam kết bằng văn bản: **Cam kết biết bơi 10-12 buổi**.
* Khối xã hội chứng minh (Social Proof Counter):
  * **10.000+** Học viên đã tốt nghiệp.
  * **10+** Năm kinh nghiệm đào tạo.
  * **50+** Bể bơi liên kết khắp Hà Nội & TP.HCM.
* Badge nổi bật uy tín: **Đối tác chính thức của Vinhomes** (cư dân Times City, Ocean Park, Smart City).

### 4.3 Khối Khóa Học & Bảng Giá (Course Cards & Pricing)
* Thẻ khóa học áp dụng bố cục **Bento Grid** hiện đại:
  * Hình ảnh tỉ lệ 16:9 với lớp phủ bo góc mượt mà `border-radius: 14px`.
  * Huy hiệu phân loại: `Hot 🔥`, `Tiết kiệm 💰`, `B2B 🏢`.
  * Thẻ giá rõ ràng quyền lợi (bao gồm vé vào bể, bảo lưu 2.5 tháng, cam kết học lại miễn phí nếu chưa bơi được 25m).

### 4.4 Khối Kỹ Thuật Bơi (Technique Cards)
* 5 kỹ thuật: Bơi ếch, Bơi sải, Bơi ngửa, Bơi bướm, Kỹ năng đứng nước.
* Thẻ hình ảnh có lớp phủ gradient đen mờ chuyển sắc nhẹ (`linear-gradient(to top, rgba(2,48,71,0.85) 0%, transparent 60%)`), chữ trắng nổi bật, tạo cảm giác chuyên nghiệp thể thao.

### 4.5 Khối Cam Kết & Bằng Chứng Tin Cậy (Trust & Authority)
* Chân dung & bằng cấp của **Thầy Nguyễn Huy Mạnh** (Giám đốc trung tâm, cử nhân ĐH Sư phạm Hà Nội).
* Ảnh và video lớp học thực tế tại bể bơi Vinhomes.
* Danh sách câu hỏi thường gặp (FAQ Accordion) chuẩn SEO JSON-LD.

### 4.6 Floating CTA trên Điện thoại (Mobile Floating Bar)
* Thanh dính đáy màn hình gồm 2 nút bấm thao tác nhanh:
  * Nút Gọi Hotline `0979.121.097` (Màu xanh nước biển).
  * Nút Đăng Ký Học Thử / Zalo (Màu cam nổi bật).

---

## 5. BẢO CHỨNG CHẤT LƯỢNG (QUALITY CRITERIA)
* **Performance:** Tốc độ LCP < 1.8s, điểm Google PageSpeed 95 - 100.
* **Accessibility:** Chuẩn tương phản WCAG 2.2 AA (tối thiểu 4.5:1 cho body text, 3:1 cho tiêu đề lớn).
* **SEO:** Semantic HTML (`main`, `header`, `footer`, `section`, `h1`-`h3`), Schema `Course`, `FAQPage`, `LocalBusiness`.
