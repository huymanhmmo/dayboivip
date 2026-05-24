# Swim For Life Việt Nam - Website Dạy Bơi Chuyên Nghiệp

🏊 Website chính thức của Trung tâm dạy bơi Swim For Life Việt Nam - trực thuộc Công ty Cổ phần Your Dreams.

## Công nghệ

- **Framework:** [Astro](https://astro.build/) 5.x
- **Styling:** Vanilla CSS + CSS Custom Properties
- **Font:** Google Fonts (Inter + Roboto)
- **Hosting:** Cloudflare Pages
- **SEO:** Schema.org, Sitemap, robots.txt, OpenGraph

## Cài đặt & Phát triển

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build production
npm run build

# Preview build
npm run preview
```

## Cấu trúc dự án

```
website/
├── public/           # Static assets
│   ├── images/       # Hình ảnh
│   ├── styles/       # CSS
│   └── robots.txt
├── src/
│   ├── components/   # Astro components
│   ├── layouts/      # Layout templates
│   ├── pages/        # Các trang web
│   ├── content/      # Blog content (Markdown)
│   └── styles/       # Source CSS
└── astro.config.mjs  # Astro configuration
```

## Deploy lên Cloudflare Pages

1. Push code lên GitHub
2. Vào Cloudflare Dashboard → Workers & Pages
3. Tạo project mới → Connect to Git
4. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `website`

## Liên hệ

- **Hà Nội:** 0979.121.097
- **TP.HCM:** 0933.433.617
- **Website:** [dayboi.vip](https://dayboi.vip)

---

© 2026 Swim For Life Việt Nam - Công ty CP Your Dreams
