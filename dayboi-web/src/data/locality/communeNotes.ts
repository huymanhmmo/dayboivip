export interface CommunePracticalNote {
  advice: string;
  notes: { label: string; value: string }[];
}

export const communePracticalNotes: Record<string, { vi: CommunePracticalNote; en: CommunePracticalNote }> = {
  'hoc-boi-tphcm/phu-tho': {
    vi: {
      advice:
        'Phường Phú Thọ tập trung quanh trục Lý Thường Kiệt – Ba Tháng Hai với điểm nhấn là Hồ bơi Phú Thọ (215A Lý Thường Kiệt, Trung tâm TDTT Phú Thọ). Bể mở cửa 05:30–22:00 (khách bơi tự do thường 05:30–18:30, nghỉ Thứ Hai để tổng vệ sinh), giá vé tham khảo khoảng 20.000đ (trẻ em) – 35.000đ (người lớn) và có bãi giữ xe máy, ô tô rộng ngay trong khuôn viên nhà thi đấu.',
      notes: [
        { label: 'Giờ mở cửa tham khảo', value: '05:30 – 22:00 (khách tự do 05:30 – 18:30; thường đóng cửa Thứ Hai hàng tuần để vệ sinh hồ).' },
        { label: 'Giá vé tham khảo', value: 'Trẻ em khoảng 20.000đ/lượt, người lớn 25.000 – 35.000đ/lượt; có vé tháng 500.000 – 600.000đ (xác nhận tại quầy vé).' },
        { label: 'Di chuyển & gửi xe', value: 'Mặt tiền 215A Lý Thường Kiệt (gần ngã tư Ba Tháng Hai); bãi giữ xe máy & ô tô rộng rãi trong khuôn viên Nhà thi đấu Phú Thọ (khung 17:00–18:30 đường Lý Thường Kiệt thường đông).' },
      ],
    },
    en: {
      advice:
        'Phu Tho Ward centers around Ly Thuong Kiet – Ba Thang Hai, anchored by Phu Tho Swimming Pool (215A Ly Thuong Kiet). Public lap swimming generally runs 05:30–18:30 (closed Mondays for maintenance), with reference admission around 20,000–35,000 VND and spacious on-site motorbike and car parking inside the sports complex.',
      notes: [
        { label: 'Reference hours', value: '05:30 – 22:00 daily (general public usually 05:30 – 18:30; closed Mondays for water maintenance).' },
        { label: 'Reference admission', value: 'Around 20,000 VND (children) and 25,000 – 35,000 VND (adults) per session; confirm current rates at the ticket desk.' },
        { label: 'Access & parking', value: '215A Ly Thuong Kiet; large on-site motorbike and car parking inside Phu Tho Sports Complex (expect heavier traffic around 17:00–18:30).' },
      ],
    },
  },
  'hoc-boi-tphcm/cat-lai': {
    vi: {
      advice:
        'Phường Cát Lái kết nối trực tiếp trục Đồng Văn Cống – Phan Văn Đáng – Mai Chí Thọ với các cụm hồ bơi nội khu tiêu biểu như Vista Verde (Đồng Văn Cống). Hồ bơi chung cư thường dùng thẻ từ cư dân và phân tách hầm gửi xe cư dân với bãi khách vãng lai; người học ngoài khu cần xác nhận trước điều kiện vào cổng và quyền giảng dạy với Ban quản lý hoặc giáo viên phụ trách.',
      notes: [
        { label: 'Điều kiện vào hồ', value: 'Hồ bơi nội khu Vista Verde ưu tiên cư dân dùng thẻ từ; khách ngoài cần hỏi rõ quy định bảo lãnh hoặc đăng ký trước với BQL.' },
        { label: 'Giờ & phí tham khảo', value: 'Không bán vé lẻ đại trà như hồ công cộng; lịch tập và chi phí sử dụng hồ phụ thuộc nội quy từng khu căn hộ và giáo viên.' },
        { label: 'Di chuyển & gửi xe', value: 'Tiếp cận từ trục Đồng Văn Cống hoặc Phan Văn Đáng (hướng từ Mai Chí Thọ / Vành đai 2); hầm xe có khu vực dành riêng cho khách vãng lai theo lượt.' },
      ],
    },
    en: {
      advice:
        'Cat Lai Ward runs along the Dong Van Cong – Phan Van Dang – Mai Chi Tho corridor, featuring residential resort pools such as Vista Verde. Condominium pools typically require resident keycards and separate visitor basement parking, so non-residents should confirm guest access and outside-coaching rules with building management before booking.',
      notes: [
        { label: 'Pool access rules', value: 'Residential podium pools (e.g., Vista Verde) are primarily for residents; confirm guest entry and external coach permissions in advance.' },
        { label: 'Hours & fees', value: 'No standard walk-in public ticketing; session hours and facility fees depend on building management and the assigned coach.' },
        { label: 'Access & parking', value: 'Via Dong Van Cong or Phan Van Dang off Mai Chi Tho; underground visitor parking is separated from resident zones.' },
      ],
    },
  },
  'hoc-boi-tphcm/hoa-hoi': {
    vi: {
      advice:
        'Xã Hòa Hội cần xác nhận kỹ địa bàn thực tế trước khi đặt lịch vì dữ liệu danh bạ hiện ghép chung một số điểm tham chiếu cùng tên gọi cũ. Nếu di chuyển về hướng Hồ bơi Hòa Bình (Số 9 Phạm Hùng, Quận 8), lưu ý hồ đóng cửa Thứ Hai hàng tuần để vệ sinh và thay nước; nên gọi xác nhận giờ mở cửa, giá vé và chỗ gửi xe tại quầy trước khi xuất phát.',
      notes: [
        { label: 'Lưu ý địa bàn & bảo trì', value: 'Kiểm tra kỹ khoảng cách di chuyển thực tế; cơ sở tham chiếu Hồ bơi Hòa Bình (9 Phạm Hùng) đóng cửa vào Thứ Hai hàng tuần để thay nước.' },
        { label: 'Giá vé & giờ mở cửa', value: 'Liên hệ trực tiếp quầy vé hoặc giáo viên để xác nhận suất bơi sáng/chiều và biểu phí hiện hành theo từng mùa.' },
        { label: 'Di chuyển & gửi xe', value: 'Hỏi rõ cổng vào, bãi giữ xe máy/ô tô ngay tại cơ sở và thời gian di chuyển thực tế trước giờ hẹn.' },
      ],
    },
    en: {
      advice:
        'In Hoa Hoi Commune, verify the exact pool location before booking because directory matching includes older shared area names. If heading toward Hoa Binh Swimming Pool (9 Pham Hung, District 8), note that it closes on Mondays for water maintenance; confirm current hours, fees, and parking directly beforehand.',
      notes: [
        { label: 'Area & maintenance note', value: 'Double-check travel distance; the referenced Hoa Binh Pool (9 Pham Hung) closes Mondays for cleaning.' },
        { label: 'Hours & admission', value: 'Confirm morning/afternoon session times and current ticket fees directly with the ticket counter or instructor.' },
        { label: 'Access & parking', value: 'Verify the exact entrance gate and on-site motorbike/car parking availability before heading out.' },
      ],
    },
  },
  'hoc-boi-vinh-long/tan-hanh': {
    vi: {
      advice:
        'Phường Tân Hạnh (khu vực Phường 8 & xã Tân Hạnh cũ, TP. Vĩnh Long) có điểm học bơi trọng điểm là Hồ bơi Minh Anh Vĩnh Long (3Y Nguyễn Văn Đáng / Phan Văn Đáng). Bể có mái che kiên cố, giờ mở cửa tham khảo khoảng 06:00–19:00 và giá vé tham khảo khoảng 20.000đ/lượt; các ca học chiều cần đăng ký xếp lịch trước với HLV.',
      notes: [
        { label: 'Giờ mở cửa tham khảo', value: 'Khoảng 06:00 – 19:00 hàng ngày (một số ca học bơi riêng xếp lịch theo khung 07:00 – 18:00).' },
        { label: 'Giá vé tham khảo', value: 'Khoảng 20.000đ/lượt (nên gọi 02703 828 999 hoặc 0913 168 272 để xác nhận giá vé và lịch ca chiều).' },
        { label: 'Di chuyển & gửi xe', value: 'Nằm tại 3Y Nguyễn Văn Đáng (Phường 8, TP. Vĩnh Long); thuận tiện đi xe máy từ khu vực Tân Hạnh, có chỗ gửi xe tại khu vực hồ.' },
      ],
    },
    en: {
      advice:
        'Tan Hanh Ward (covering former Ward 8 and Tan Hanh Commune in Vinh Long City) is served locally by Minh Anh Vinh Long Swimming Pool (3Y Nguyen Van Dang). The roofed pool operates roughly 06:00–19:00 with reference admission around 20,000 VND/session; afternoon coaching slots require advance booking.',
      notes: [
        { label: 'Reference hours', value: 'Approximately 06:00 – 19:00 daily (private/group coaching slots typically scheduled 07:00 – 18:00).' },
        { label: 'Reference admission', value: 'Around 20,000 VND per visit; call the reception desk to confirm current ticket and class rates.' },
        { label: 'Access & parking', value: 'Located at 3Y Nguyen Van Dang, easily reachable from Tan Hanh with on-site motorbike parking.' },
      ],
    },
  },
  'hoc-boi-ha-noi/dai-thanh': {
    vi: {
      advice:
        'Xã Đại Thanh (bao gồm khu vực Kiến Hưng – Thanh Hà – Tam Hiệp – Tả Thanh Oai) có cơ sở trọng điểm là Bể bơi Bốn Mùa Thanh Hà (KĐT Thanh Hà B – Cienco 5). Bể nước ấm trong nhà mở cửa quanh năm theo 2 ca sáng (06:00–11:30) và chiều (14:30–19:30 / 20:30), giá vé ngày tham khảo 40.000–80.000đ/lượt tùy ngày thường hoặc cuối tuần, bãi đỗ xe máy & ô tô rộng ngay trước khu liên hợp thể thao.',
      notes: [
        { label: 'Giờ mở cửa tham khảo', value: 'Ca sáng 06:00 – 11:30; ca chiều 14:30 – 19:30 / 20:30 tất cả các ngày trong tuần (nước ấm bốn mùa).' },
        { label: 'Giá vé tham khảo', value: 'Ngày thường: trẻ em 40.000–50.000đ, người lớn 50.000–70.000đ; cuối tuần: 50.000–80.000đ/lượt (có vé tháng/quý tại quầy).' },
        { label: 'Di chuyển & gửi xe', value: 'Khu liên hợp thể thao Thanh Hà B – Cienco 5 (trục đường phía Nam Hà Nội / Kiến Hưng); có bãi đỗ xe máy (~5.000đ/lượt) và ô tô rộng ngay bên ngoài bể.' },
      ],
    },
    en: {
      advice:
        'Dai Thanh Commune (spanning the Thanh Ha – Kien Hung – Tam Hiep – Ta Thanh Oai area) is anchored by Thanh Ha Four-Season Indoor Pool in Thanh Ha B – Cienco 5 Urban Area. The heated indoor pool runs morning (06:00–11:30) and afternoon/evening (14:30–19:30 / 20:30) sessions year-round, with reference day passes from 40,000–80,000 VND and wide motorbike/car parking right outside the sports complex.',
      notes: [
        { label: 'Reference hours', value: 'Morning 06:00 – 11:30; afternoon/evening 14:30 – 19:30 / 20:30 daily (heated indoor pool year-round).' },
        { label: 'Reference admission', value: 'Weekdays: 40,000–50,000 VND (children), 50,000–70,000 VND (adults); weekends: 50,000–80,000 VND per session.' },
        { label: 'Access & parking', value: 'Located at Thanh Ha B Sports Complex (Cienco 5 southern axis); spacious on-site motorbike (~5,000 VND) and car parking directly outside the pool.' },
      ],
    },
  },
};
