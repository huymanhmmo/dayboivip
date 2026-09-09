---
name: location-research
description: Quy trình nghiên cứu sâu và cập nhật landing page địa phương cho hệ thống danh bạ học bơi toàn quốc trên dayboi.vip. Sử dụng khi cần mở rộng dữ liệu cho một tỉnh/thành phố cụ thể.
---

# Location Research Skill — Danh bạ Học bơi Địa phương Đa nguồn Chuyên sâu

## 1. Mục tiêu Cốt lõi

Nghiên cứu, tổng hợp và cấu trúc dữ liệu cho hệ thống landing page `/hoc-boi-[dia-phuong]/` trên website `dayboi.vip`. Dữ liệu phải đạt độ chính xác cao, chi tiết, hữu ích thực tế cho người cần tìm lớp học bơi và tra cứu bể bơi:
- **Tại mỗi địa điểm bơi (Venue)**: Cung cấp thông tin liên hệ của chính bể bơi (BQL/Quầy vé) VÀ danh sách đầy đủ **các giáo viên, huấn luyện viên, trung tâm khác nhau cùng giảng dạy tại địa điểm đó**.
- **Định danh người liên hệ rõ ràng**: Phải ghi chính xác số điện thoại này là của ai (của Ban quản lý bể bơi để hỏi vé/giờ bơi, hay của Giáo viên/Trung tâm nào để đăng ký học bơi).
- **Link nguồn gốc chính xác tuyệt đối**: **BẮT BUỘC đưa link chính xác tới bài viết/bài đăng/thông báo cụ thể**. Tuyệt đối **KHÔNG ĐƯỢC đưa link trang chủ** chung chung.

---

## 2. Chuẩn Cấu trúc Dữ liệu (Schema Chuẩn)

Mỗi địa phương nằm trong `locationResearch.js` (hoặc các file module vùng `research/*.js`) tuân thủ cấu trúc sau:

```javascript
export const [province]Research = {
  level: 'Đã nghiên cứu chuyên sâu',
  reviewedAt: '09/09/2026',
  summary: 'Mô tả tổng quan danh sách đối chiếu theo khu vực...',
  groupingNote: 'Ghi chú về phân nhóm khu vực, quận/huyện hoặc cụm hành chính...',
  categories: [
    {
      id: 'quan-huyen-slug',
      label: 'Khu vực [Tên Quận / Huyện / Thị Xã]',
      description: 'Đặc điểm cụm bể bơi, môi trường tập luyện tại khu vực...',
      venues: [
        {
          name: 'Tên bể bơi / Cơ sở thể thao',
          address: 'Số nhà, tên đường, phường/xã, quận/huyện đầy đủ',
          area: 'Cụm khu vực quen dùng',
          access: 'Bể bốn mùa trong nhà | Bể công cộng | Bể khách sạn | Bể nội khu',
          entityType: 'Bể bơi thể thao & dịch vụ nước ấm',
          environment: 'Trong nhà / Nước ấm bốn mùa / Lọc tuần hoàn ozone...',

          // 1. LIÊN HỆ BỂ BƠI (Ban quản lý / Quầy vé / Lễ tân)
          venueContact: {
            role: 'Ban quản lý & quầy vé bể bơi',
            name: 'Tên đơn vị quản lý bể (kèm tên người phụ trách nếu có)',
            phone: '098x.xxx.xxx / 024.xxxx.xxxx',
            note: 'Giờ mở cửa, giá vé bơi tự do, chính sách vé tháng hoặc thuê làn',
            exactSourceUrl: 'https://domain.com/bai-viet-chinh-xac-ve-be-boi/', // Link BÀI VIẾT cụ thể
            sourceTitle: 'Tiêu đề bài viết xác thực về giờ mở cửa và giá vé bể',
          },

          // 2. DANH SÁCH NHIỀU GIÁO VIÊN / TRUNG TÂM CÙNG DẠY TẠI BỂ NÀY
          instructors: [
            {
              unitName: 'Tên Trung tâm / CLB / Nhóm HLV',
              contactPerson: 'Thầy A - Cô B (Cử nhân ĐH TDTT / HLV Quốc gia)',
              phone: '094x.xxx.xxx / 091x.xxx.xxx',
              courseTypes: 'Lớp 1 kèm 1 cho trẻ em (từ 4 tuổi), người lớn sợ nước, bơi sinh tồn, chỉnh dáng thi đấu...',
              exactSourceUrl: 'https://domain.com/bai-viet-tuyen-sinh-lop-boi-tai-be-nay.html', // Link BÀI VIẾT cụ thể
              sourceTitle: 'Tiêu đề bài viết thông báo tuyển sinh lớp học bơi tại bể này',
            },
            {
              unitName: 'Trung tâm hoặc Giáo viên thứ 2 cùng dạy tại bể',
              contactPerson: 'Thầy C (HLV trưởng...)',
              phone: '098x.xxx.xxx',
              courseTypes: 'Khóa bơi cấp tốc hè, bơi ếch, bơi sải...',
              exactSourceUrl: 'https://domain.com/bai-viet-lop-hoc-boi-be-nay/',
              sourceTitle: 'Bài viết chi tiết về khóa học bơi tại cơ sở',
            }
          ],

          services: 'Mô tả cơ sở vật chất, hệ sinh thái tiện ích (phòng tắm nóng lạnh, xông hơi, bãi đỗ xe)...',
          detail: 'Ghi chú thực tế về không gian, mật độ học viên, thời điểm lý tưởng để tập bơi...',
          missing: 'Thông tin biến động cần học viên gọi điện xác nhận trước khi đến.',
        },
      ],
    },
  ],
};
```

---

## 3. Quy tắc Nghiên cứu Thực tế (4 Quy tắc Bắt buộc)

### Quy tắc 1: Khảo sát đa giáo viên tại cùng một bể bơi
Thực tế tại các đô thị, một bể bơi (đặc biệt là bể bốn mùa nước ấm hoặc bể tiêu chuẩn) thường có từ 2–4 trung tâm, câu lạc bộ hoặc giáo viên tự do cùng thuê làn để dạy học viên. Agent phải tìm kiếm các trung tâm/thầy cô khác nhau cùng nhận dạy tại cơ sở đó để người đọc có đầy đủ sự lựa chọn.

### Quy tắc 2: Ghi rõ số điện thoại này là của ai
- **Tuyệt đối không ghi số điện thoại chung chung không rõ chủ thể**.
- Phải ghi rõ:
  + *"Ban quản lý Bể bơi X (Hotline quầy vé)"* để học viên biết gọi mua vé bơi tự do.
  + *"Thầy Nam / Cô Trang - Trung tâm Dạy Bơi Y"* để học viên gọi tư vấn học phí và đặt lịch học bơi.

### Quy tắc 3: Link nguồn gốc phải là link bài viết chính xác
- **CẤM TUYỆT ĐỐI**: Dẫn link trang chủ chung chung dạng `https://domain.com/` hoặc `https://facebook.com/`.
- **BẮT BUỘC**: Dẫn link URL cụ thể tới trang bài viết giới thiệu bể bơi hoặc bài thông báo tuyển sinh lớp bơi tại cơ sở đó.
  - Ví dụ chuẩn: `https://boicaptoc.vn/hoc-boi-o-be-van-bao.html`
  - Ví dụ chuẩn: `https://goswim.vn/be-boi-73-van-bao/`
  - Ví dụ chuẩn: `https://nhakhachlathanh.vn/dich-vu-the-thao/`
  - Ví dụ chuẩn: `https://www.facebook.com/beboibonmuakhanquangdo` (fanpage chính thức riêng của bể).

### Quy tắc 4: Xác thực đa nguồn trước khi niêm yết
Kết hợp tra cứu qua:
1. Website tuyển sinh chính thức của các trung tâm bơi lội lâu năm.
2. Bài viết đánh giá, review chuyên sâu từ các cổng thông tin thể thao uy tín.
3. Thông báo chính thức của Ban quản lý bể bơi hoặc Cổng thông tin cơ quan chủ quản (Nhà khách, Trung tâm TDTT quận/huyện, Khách sạn 4-5 sao).

---

## 4. Quy trình Thực hiện theo Từng Khu vực (SOP 5 Bước)

1. **Bước 1: Quét danh sách các bể bơi thực tế theo quận/huyện/thị xã**:
   - Dùng cú pháp tìm kiếm: `"bể bơi" "[tên bể hoặc tên đường]" "[quận/huyện]" "học bơi" OR "dạy bơi" liên hệ điện thoại`.
2. **Bước 2: Bóc tách danh tính liên hệ & số điện thoại**:
   - Tìm số điện thoại của Ban quản lý/Quầy vé bể bơi.
   - Tìm các trung tâm, câu lạc bộ, HLV đang có bài đăng nhận dạy học viên tại bể này.
   - Lưu lại số hotline kèm tên người phụ trách rõ ràng.
3. **Bước 3: Lấy link bài viết xác thực cụ thể**:
   - Truy cập trang bài viết giới thiệu lớp bơi tại bể đó, lấy URL đầy đủ của bài viết.
4. **Bước 4: Cập nhật dữ liệu vào code**:
   - Cập nhật object venue vào `locationResearch.js` hoặc file module vùng tương ứng.
5. **Bước 5: Kiểm tra Build & Git Push**:
   - Chạy `npm run build` trong `dayboi-web` xác nhận biên dịch không lỗi.
   - Thực hiện `git commit` và `git push origin main` theo skill `git-push`.

---

## 5. Địa phương Thí điểm Kiểu mẫu

Tham khảo cấu trúc hoàn chỉnh tại:
- **Khu vực Ba Đình (Hà Nội)** trong file [locationResearch.js](file:///e:/3.%20CodeX/github-dayboivip/dayboi-web/src/data/locationResearch.js):
  - Bể bơi bốn mùa 73 Vạn Bảo (BQL: Thầy Quang Anh; HLV: Thầy Công - Cô Trang, Thầy Vũ Goswim).
  - Bể bơi Khách sạn La Thành (BQL: Nhà khách La Thành; HLV: Thầy Công - Cô Trang, Thầy Quyết Qswim).
  - Bể bơi 115 Quán Thánh (BQL: Trung tâm TDTT Ba Đình; HLV: CLB 10-10, Bơi Lội Phương Nam, Bơi Cấp Tốc).
  - Bể bơi Khăn Quàng Đỏ (BQL: Bể bơi Bốn Mùa Khăn Quàng Đỏ; HLV: Tổ HLV tại bể).
  - Hồ bơi Serenity Khách sạn Daewoo (BQL: TT Thể thao Daewoo).
