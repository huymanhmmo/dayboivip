# Triển khai hệ giao diện địa phương dùng chung

Phạm vi: 34 tỉnh/thành, 3.321 xã/phường, các khu vực cũ còn route, bản VI/EN và các trang hồ hiện có. Dùng dữ liệu địa phương đang có; giữ URL/canonical và quyết định index. Không tạo trang hồ mới chỉ để lấp menu.

1. Chuẩn hóa view model và cấu hình vùng từ locations, locationResearch, communePages, communePools và catalog hồ. Giữ vai trò BQL/HLV riêng; không thêm hotline mặc định cho vùng thiếu liên hệ.
2. Tách LocalSiteHeader/LocalSiteFooter nhận cấu hình. Các wrapper Lái Thiêu chỉ cấp cấu hình; cùng component phục vụ hub, trang hồ và các vùng khác.
3. Tạo template RegionDirectoryPage và các section nhỏ: hero, nhu cầu, bộ lọc/thẻ địa điểm, danh sách xã/phường, đơn vị dạy, kỹ thuật, hướng dẫn địa phương, FAQ và liên kết. VI/EN dùng cùng markup, dữ liệu và nhãn riêng.
4. Chuyển bốn dynamic route về wrapper mỏng. Lái Thiêu vẫn giữ hub chuyên sâu đã duyệt và dùng header/footer chung. Các trang hồ Nhật An/public/residential tiếp tục dùng template chi tiết hiện có.
5. Kiểm tra route/index so với baseline, dữ liệu và nguồn được hiển thị, không link rỗng/tel rỗng, hình minh họa có nhãn. Build/audit toàn site; kiểm tra trình duyệt các mẫu tỉnh, phường có hồ, xã thiếu hồ, tên dài, VI/EN và cụm Lái Thiêu.
6. Cập nhật skill theo kiến trúc đã triển khai; lưu báo cáo/screenshot và commit local. Triển khai bản đã kiểm chứng theo quyền của phiên; đối chiếu domain chính.

Các phần đang được triển khai không được mô tả là hoàn tất trước khi build và kiểm chứng.

## Hoàn tất

Đã triển khai và kiểm chứng 20/11/2026. Kiến trúc cuối và phạm vi thực tế tại `locality-design-validation.md`; 7 khu vực cũ có route riêng sau khi loại trùng với các xã/phường. Đã giữ cập nhật index 20 hồ từ commit main 448bb9f. Các report route/index được tính theo baseline production đó.
