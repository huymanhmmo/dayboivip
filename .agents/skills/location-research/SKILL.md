---
name: location-research
description: Quy trình nghiên cứu sâu và cập nhật landing page địa phương cho hệ thống danh bạ học bơi toàn quốc trên dayboi.vip. Sử dụng khi cần mở rộng dữ liệu cho một tỉnh/thành phố cụ thể.
---

# Location Research Skill — Danh bạ Học bơi Địa phương

## Mục tiêu

Nghiên cứu, tổng hợp và cập nhật dữ liệu cho landing page `/hoc-boi-[dia-phuong]/` trên website dayboi.vip. Mỗi lần thực hiện cho **một tỉnh/thành phố**, tạo ra dữ liệu phong phú, chính xác, có nguồn xác minh.

## Cấu trúc dữ liệu cần tạo

Mỗi địa phương cần có entry trong `locationResearch.js` (hoặc file riêng nếu lớn) với cấu trúc:

```javascript
'hoc-boi-[slug]': {
  level: 'Đã nghiên cứu chuyên sâu',  // hoặc 'Đã rà soát ưu tiên'
  reviewedAt,
  summary: '...',           // Mô tả tổng quan danh sách
  groupingNote: '...',      // Ghi chú về đơn vị hành chính (nếu có sáp nhập)
  categories: [...],        // Cụm khu vực → venues
  providers: [...],         // Đơn vị tổ chức lớp (tách khỏi bể bơi)
  relatedPages: [...],      // Liên kết đến trang địa phương liên quan
  references: [...],        // Danh sách nguồn tham khảo
}
```

### Venue (Địa điểm bơi)
```javascript
{
  name: 'Tên bể bơi / trung tâm',
  address: 'Địa chỉ đầy đủ',
  area: 'Khu vực / quận huyện',
  access: 'Loại hình: Bể công cộng | Bể thương mại | Trường bơi | Nội khu | ...',
  entityType: 'Địa điểm bơi | Đơn vị + địa điểm | Địa điểm + cơ sở dạy',
  environment: 'Trong nhà | Ngoài trời | Bốn mùa | Có mái che | ...',
  services: 'Mô tả khóa học/dịch vụ đã xác minh từ nguồn',
  detail: 'Ghi chú bổ sung, ngữ cảnh',
  missing: 'Thông tin còn thiếu, cần xác minh',
  sourceLabel: 'Tên nguồn',
  sourceUrl: 'URL nguồn',
  sourceType: 'Loại nguồn: Website chính thức | Nguồn cơ quan nhà nước | Báo chí | ...',
}
```

### Provider (Đơn vị tổ chức lớp)
```javascript
{
  name: 'Tên đơn vị',
  kind: 'CLB | Trung tâm | Trường bơi | ...',
  areas: 'Khu vực hoạt động',
  audiences: 'Đối tượng phục vụ',
  formats: 'Hình thức: Kèm riêng · Nhóm · Cấp tốc · ...',
  contact: 'Số điện thoại / liên hệ công khai',
  website: 'URL website hoặc fanpage',
  verification: 'Thông tin đã xác minh được',
  missing: 'Thông tin còn thiếu',
  sourceLabel: 'Tên nguồn',
  sourceUrl: 'URL nguồn',
}
```

## Quy trình nghiên cứu (6 bước)

### Bước 1: Tìm kiếm đa nguồn

Sử dụng **nhiều biến thể từ khóa** để tìm kiếm trên Google và các nguồn công khai:

```
dạy bơi [tỉnh/TP]
học bơi [tỉnh/TP]
lớp học bơi [tỉnh/TP]
trung tâm dạy bơi [tỉnh/TP]
khóa học bơi [tỉnh/TP]
học bơi cho trẻ em [tỉnh/TP]
học bơi cho người lớn [tỉnh/TP]
dạy bơi kèm riêng [tỉnh/TP]
bể bơi [tỉnh/TP] danh sách
giải bơi học sinh [tỉnh/TP] [năm]
bể bơi bốn mùa [tỉnh/TP]
câu lạc bộ bơi lội [tỉnh/TP]
bể bơi [quận/huyện cụ thể]
```

### Bước 2: Khai thác nguồn đa dạng

**Ưu tiên theo thứ tự:**
1. **Cơ quan nhà nước**: Cổng thông tin tỉnh/TP, Sở GD&ĐT, Sở VH-TT
2. **Báo chí chính thống**: Báo địa phương, Đảng Cộng sản, Tuổi Trẻ, Dân Trí...
3. **Website chính thức**: Của bể bơi, trung tâm, CLB
4. **Danh bạ chuyên ngành**: toancaupool.com, bilico.vn, beboidep.vn...
5. **Danh bạ công khai**: Foody, MyTour, Google Maps
6. **Mạng xã hội công khai**: Facebook Fanpage (thông tin tự đơn vị công bố)

**KHÔNG:**
- Tự tạo tên cơ sở, địa chỉ, số điện thoại
- Mặc định mọi bể bơi đều có lớp dạy bơi
- Gộp thông tin từ quảng cáo HLV vào dịch vụ của bể

### Bước 3: Thu thập và chuẩn hóa

Với mỗi địa điểm/đơn vị, cố gắng thu thập:
- ✅ Tên chính thức
- ✅ Địa chỉ và khu vực hành chính
- ✅ Loại hình (bể công cộng, thương mại, trường bơi, nội khu...)
- ✅ Khóa học/đối tượng phục vụ (NẾU CÓ NGUỒN)
- ✅ Hình thức: nhóm, kèm riêng, trẻ em, người lớn, cấp tốc...
- ✅ Liên hệ và website (NẾU ĐƯỢC CÔNG KHAI)
- ✅ Nguồn tham khảo + URL
- ⚠️ Ghi rõ thông tin còn thiếu/chưa xác minh

### Bước 4: Phân nhóm theo khu vực

- Chia venues theo **quận/huyện hoặc cụm khu vực** quen dùng
- Mỗi category có ID dạng slug, label, description và danh sách venues
- **Tách riêng** providers (đơn vị tổ chức lớp) khỏi venues (địa điểm bơi)
- Một bể có thể có nhiều đơn vị dạy; một đơn vị có thể dạy tại nhiều bể

### Bước 5: Cập nhật code

1. **File chính**: `dayboi-web/src/data/locationResearch.js`
   - Thêm/sửa entry cho slug tương ứng
   - Nếu dữ liệu quá lớn (>200 venues), tách ra file riêng như `locationResearchHcm.js`

2. **FAQs**: `dayboi-web/src/data/locations.js`
   - Cập nhật FAQs với nội dung phản ánh dữ liệu nghiên cứu thực tế
   - Tối thiểu 3–4 câu FAQ có giá trị

3. **Rollout**: Cập nhật `locationRollout` trong `locationResearch.js` nếu cần

### Bước 6: Verify và Push

```bash
cd dayboi-web && npm run build   # Verify build thành công
git add -A
git commit -m "feat(data): nghiên cứu sâu danh bạ học bơi [Tên TP]"
git push origin main
```

## Chuẩn chất lượng

### Mức "Đã nghiên cứu chuyên sâu" (như HN, HCM)
- ≥ 10 venues từ nhiều khu vực
- ≥ 2 providers
- Có references list
- Có relatedPages
- ≥ 50% venues có nguồn từ cơ quan nhà nước hoặc website chính thức

### Mức "Đã rà soát ưu tiên" (như ĐN, CT trước khi mở rộng)
- ≥ 3 venues có nguồn xác minh
- Phân loại rõ ràng (công cộng vs nội khu)
- Ghi rõ thông tin còn thiếu

## Ví dụ tham khảo

- **Hà Nội**: `locationResearch.js` → 8 categories, 20+ venues, 7 providers
- **TP.HCM**: `locationResearchHcm.js` → 8 categories, 25+ venues, 9 providers
- **Hải Phòng**: `locationResearch.js` → 5 categories, 12 venues, 3 providers

## Lưu ý quan trọng

1. **Không sao chép giá cũ** — Giá vé, học phí thay đổi nhanh, ghi "cần xác nhận"
2. **Phân biệt rõ** — Địa điểm bơi ≠ Đơn vị tổ chức lớp
3. **Ghi nguồn cho mọi thông tin** — Không có nguồn = không liệt kê
4. **Ghi rõ missing** — Trung thực về thông tin chưa xác minh được
5. **Push ngay sau khi hoàn thành** — Theo skill `git-push`
