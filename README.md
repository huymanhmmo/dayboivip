# Swim For Life Việt Nam - Dayboi.vip

Hệ thống website và tài nguyên của Trung tâm dạy bơi **Swim For Life Việt Nam** (đơn vị trực thuộc Công ty Cổ phần Your Dreams).

## 📁 Cấu trúc thư mục

- `/website`: Mã nguồn website Astro (HTML/CSS/JS tĩnh), được thiết kế tối ưu SEO, hiệu năng cao để deploy lên Cloudflare Pages.
- `/Bộ từ khóa dạy bơi`: Danh sách từ khóa SEO nghiên cứu phục vụ chiến dịch content và tối ưu công cụ tìm kiếm.
- `/Hình ảnh lớp học bơi`: Kho ảnh thực tế chất lượng cao về các lớp dạy bơi, giải đấu và hoạt động của trung tâm.
- `/Hồ sơ Swim For Life`: Các tài liệu đề xuất, chương trình giảng dạy và giới thiệu năng lực của trung tâm.
- `/Tài liệu dạy bơi`: Giáo trình, phương pháp giảng dạy bơi lội chuyên nghiệp (ĐH Sư phạm Hà Nội).

---

## 🌐 Website Astro (`/website`)

Website được xây dựng bằng **Astro v6**, mang lại tốc độ tải trang cực nhanh và điểm SEO tối đa.

### Yêu cầu hệ thống
- Node.js >= 22.12.0

### Hướng dẫn chạy môi trường Local
Di chuyển vào thư mục `website`:
```bash
cd website
```

Cài đặt thư viện:
```bash
npm install
```

Chạy dev server:
```bash
npm run dev
```
Trang web sẽ chạy tại địa chỉ: `http://localhost:4321/`

### Build và Kiểm tra
Build bản chính thức cho production:
```bash
npm run build
```
Mã nguồn tĩnh sau khi build sẽ nằm trong thư mục `/website/dist/`.

---

## 🚀 Hướng dẫn Deploy lên Cloudflare Pages

1. Truy cập vào dashboard [Cloudflare](https://dash.cloudflare.com/).
2. Vào mục **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**.
3. Chọn repository `huymanhmmo/dayboivip`.
4. Cấu hình bản build như sau:
   - **Project name**: `dayboivip`
   - **Production branch**: `main`
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `website`
5. Nhấp vào **Save and Deploy**. Cloudflare Pages sẽ tự động build và deploy mỗi khi bạn push code mới lên nhánh `main`.
