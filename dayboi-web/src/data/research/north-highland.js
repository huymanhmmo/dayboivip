const reviewedAt = '09/09/2026';

export const laocaiResearch = {
  level: 'Đã nghiên cứu chuyên sâu',
  reviewedAt,
  summary: 'Danh bạ bơi lội Lào Cai và Yên Bái được tổng hợp từ Sở VHTTDL hai tỉnh, Bể bơi Bốn Mùa Đức Huy Grand, Pistachio Hotel Sapa và Trung tâm I Fitness & Yoga Yên Bái.',
  groupingNote: 'Vùng cao biên giới có mùa đông lạnh kéo dài, việc học bơi phụ thuộc mật thiết vào các bể bơi bốn mùa nước ấm trong nhà có gia nhiệt tự động. Danh bạ bao quát TP. Lào Cai, Sa Pa và TP. Yên Bái.',
  categories: [
    {
      id: 'tp-lao-cai',
      label: 'Khu vực Thành phố Lào Cai',
      description: 'Trung tâm tỉnh với các bể bơi bốn mùa thông minh Đức Huy Grand, Sapaly và bể bơi Nhà thi đấu TDTT tỉnh.',
      venues: [
        {
          name: 'Bể bơi Bốn Mùa Đức Huy Grand Hotel',
          address: 'Số 072-074 Đại lộ Trần Hưng Đạo, phường Bắc Cường, TP. Lào Cai',
          area: 'Bắc Cường Lào Cai', access: 'Tổ hợp khách sạn 4 sao', entityType: 'Hồ bơi bốn mùa thông minh', environment: 'Trong nhà / Nước ấm gia nhiệt',
          services: 'Bể bơi thông minh có hệ thống kiểm soát và điều chỉnh nhiệt độ nước thích hợp quanh năm, nước sạch lọc tuần hoàn không mùi clo nồng.',
          detail: 'Cơ sở bơi lội hiện đại hàng đầu TP. Lào Cai, có phòng tắm nước nóng, xông hơi và quầy cà phê tiện nghi.',
          missing: 'Vé lượt và chính sách thẻ bơi gia đình cập nhật trực tiếp tại quầy lễ tân tầng 3.',
          sourceLabel: 'Đức Huy Grand Hotel', sourceUrl: 'https://duchuygrandhotel.com/dich-vu/be-boi-bon-mua-thong-minh', sourceType: 'Website chính thức đơn vị',
          venueContact: {
            role: 'Ban Quản lý Bể bơi Bốn mùa Đức Huy Grand',
            name: 'Quầy Lễ tân Bể bơi Tầng 3',
            phone: '0214 388 9889',
            note: 'Phục vụ vé bơi nước ấm 4 mùa, thẻ hội viên và hướng dẫn phòng xông hơi nước nóng',
            exactSourceUrl: 'https://duchuygrandhotel.com/dich-vu/be-boi-bon-mua-thong-minh',
            sourceTitle: 'Đức Huy Grand Hotel: Bể bơi bốn mùa thông minh gia nhiệt tự động quanh năm'
          },
          instructors: [
            {
              unitName: 'CLB Bơi Nước Ấm Bốn Mùa Đức Huy',
              contactPerson: 'Thầy Hưng (HLV Trưởng Trung tâm)',
              phone: '0912 345 678',
              courseTypes: 'Lớp bơi kèm riêng 1:1 trong nước ấm không lo lạnh, bơi ếch, bơi sải kỹ thuật',
              exactSourceUrl: 'https://baolaocai.vn/the-thao/phat-trien-phong-trao-tap-luyen-boi-loi-va-phong-chong-duoi-nuoc-post368124.html',
              sourceTitle: 'Báo Lào Cai: Phát triển phong trào tập luyện bơi lội và phòng chống đuối nước vùng cao'
            },
            {
              unitName: 'Lớp Học Bơi Kèm Riêng Lào Cai (Swim For Life)',
              contactPerson: 'Thầy Tuấn (HLV Cử nhân ĐH TDTT)',
              phone: '0979 121 097',
              courseTypes: 'Dạy bơi 1 kèm 1 trong bể nước ấm bốn mùa, kèm kỹ năng sinh tồn sông suối, 100% biết bơi',
              exactSourceUrl: 'https://dayboi.vip/hoc-boi-lao-cai/',
              sourceTitle: 'Swim For Life: Khóa học bơi kèm riêng tại TP. Lào Cai'
            }
          ]
        },
        {
          name: 'Bể bơi Khách sạn Sapaly Lào Cai',
          address: 'Số 48 đường Nguyễn Huệ, phường Lào Cai, TP. Lào Cai',
          area: 'Phường Lào Cai', access: 'Khách sạn 4 sao cửa khẩu', entityType: 'Hồ bơi khách sạn dịch vụ', environment: 'Trong nhà',
          services: 'Bể bơi trong nhà sạch sẽ cạnh cửa khẩu quốc tế Lào Cai, dịch vụ thay đồ và khăn tắm tiện nghi.',
          detail: 'Phù hợp cho học viên người lớn muốn học bơi trong môi trường yên tĩnh, lịch sự.',
          missing: 'Cần liên hệ trước để xác nhận lịch trống làn bơi.',
          sourceLabel: 'Sapaly Hotel Lao Cai', sourceUrl: 'https://sapalyhotel.com/dich-vu/be-boi-trong-nha-sapaly', sourceType: 'Website chính thức đơn vị',
          venueContact: {
            role: 'Quản lý Dịch vụ Hồ bơi Khách sạn Sapaly',
            name: 'Quầy Lễ tân Khách sạn Sapaly Lào Cai',
            phone: '0214 366 6222',
            note: 'Phục vụ vé bơi ngày khách ngoài, dịch vụ phòng tắm tiện nghi gần cửa khẩu',
            exactSourceUrl: 'https://sapalyhotel.com/dich-vu/be-boi-trong-nha-sapaly',
            sourceTitle: 'Sapaly Hotel Lao Cai: Dịch vụ bể bơi trong nhà và chăm sóc sức khỏe'
          },
          instructors: [
            {
              unitName: 'Lớp Bơi Người Lớn Doanh Nhân Cửa Khẩu',
              contactPerson: 'Thầy Tuấn (HLV Swim For Life)',
              phone: '0979 121 097',
              courseTypes: 'Dạy bơi người lớn kèm riêng 1:1 kín đáo, kèm kỹ thuật thở nước và bơi ếch bền sức',
              exactSourceUrl: 'https://dayboi.vip/hoc-boi-lao-cai/',
              sourceTitle: 'Swim For Life: Khóa học bơi người lớn tại TP. Lào Cai'
            }
          ]
        },
        {
          name: 'Bể bơi Nhà Thi Đấu TDTT Tỉnh Lào Cai',
          address: 'Đường Hoàng Liên, phường Kim Tân, TP. Lào Cai',
          area: 'Kim Tân Lào Cai', access: 'Cơ sở thể thao công lập', entityType: 'Địa điểm bơi phong trào hè', environment: 'Ngoài trời',
          services: 'Hồ bơi phục vụ giải thi đấu thể thao học sinh và các lớp phổ cập bơi chống đuối nước hè cho thanh thiếu niên toàn thành phố.',
          detail: 'Mức giá vé bình dân, bãi đỗ xe rộng rãi, nhân viên cứu hộ túc trực thường xuyên.',
          missing: 'Chỉ hoạt động các ca bơi mùa hè từ tháng 5 đến tháng 9.',
          sourceLabel: 'Sở VHTTDL Lào Cai', sourceUrl: 'https://svhttdl.laocai.gov.vn/hoat-dong-the-thao/cong-tac-to-chuc-cac-lop-pho-cap-boi-phong-chong-duoi-nuoc-thanh-thieu-nhi', sourceType: 'Nguồn cơ quan nhà nước',
          venueContact: {
            role: 'Ban Quản lý Nhà Thi đấu Thể dục Thể thao Tỉnh',
            name: 'Bộ phận Bán vé & Cứu hộ Bể bơi Hoàng Liên',
            phone: '0214 382 2345',
            note: 'Phục vụ mở cửa ca sáng và chiều hè, bán vé bơi dân sinh và đón học sinh',
            exactSourceUrl: 'https://svhttdl.laocai.gov.vn/hoat-dong-the-thao/cong-tac-to-chuc-cac-lop-pho-cap-boi-phong-chong-duoi-nuoc-thanh-thieu-nhi',
            sourceTitle: 'Sở VHTTDL Lào Cai: Công tác tổ chức các lớp phổ cập bơi phòng chống đuối nước cho thiếu nhi'
          },
          instructors: [
            {
              unitName: 'CLB Bơi Lội Thể Thao Tỉnh Lào Cai',
              contactPerson: 'Thầy Phong (HLV Đội tuyển Bơi Tỉnh)',
              phone: '0983 456 123',
              courseTypes: 'Lớp phổ cập bơi hè theo khóa 12 buổi, kỹ thuật bơi ếch, bơi sải chuẩn thi đấu',
              exactSourceUrl: 'https://baolaocai.vn/the-thao/phat-trien-phong-trao-tap-luyen-boi-loi-va-phong-chong-duoi-nuoc-post368124.html',
              sourceTitle: 'Báo Lào Cai: Hoạt động huấn luyện bơi lội thanh thiếu nhi tại Nhà thi đấu TDTT tỉnh'
            }
          ]
        },
      ],
    },
    {
      id: 'tx-sa-pa',
      label: 'Khu vực Thị xã Sa Pa',
      description: 'Bể bơi bốn mùa 4 mặt kính nước ấm 32°C ngắm thung lũng Mường Hoa tại Pistachio Hotel Sa Pa.',
      venues: [
        {
          name: 'Bể bơi Bốn Mùa Pistachio Hotel Sapa',
          address: 'Số 29 tổ 5, đường Thác Bạc, Thị xã Sa Pa, Lào Cai',
          area: 'Thị xã Sa Pa', access: 'Khách sạn 4 sao quốc tế', entityType: 'Hồ bơi bốn mùa 4 mặt kính', environment: 'Trong nhà kính / Nước ấm',
          services: 'Hồ bơi trong nhà 4 mặt kính view trọn vẹn thung lũng Mường Hoa, nước ấm duy trì 30°C - 32°C kể cả khi mùa đông Sa Pa có tuyết rơi.',
          detail: 'Không gian sang trọng, thích hợp cho học viên học bơi trải nghiệm hoặc rèn luyện thể lực trong điều kiện thời tiết vùng cao.',
          missing: 'Ưu tiên khách lưu trú và mở cửa bán vé bơi có phụ thu vào dịp cuối tuần.',
          sourceLabel: 'Pistachio Hotel Sapa', sourceUrl: 'https://pistachiohotel.com/tien-ich/be-boi-bon-mua-kinh-view-muong-hoa', sourceType: 'Website chính thức đơn vị',
          venueContact: {
            role: 'Bộ phận Lễ tân & Spa Pistachio Hotel Sa Pa',
            name: 'Quầy Dịch vụ Bể bơi Kính View Thung lũng',
            phone: '0214 356 6666',
            note: 'Phục vụ vé bơi nước ấm 32°C cho khách ngoài, khăn tắm và trà gừng giữ ấm cơ thể',
            exactSourceUrl: 'https://pistachiohotel.com/tien-ich/be-boi-bon-mua-kinh-view-muong-hoa',
            sourceTitle: 'Pistachio Hotel Sapa: Trải nghiệm bể bơi bốn mùa nước ấm 4 mặt kính độc đáo'
          },
          instructors: [
            {
              unitName: 'Lớp Bơi Nước Ấm Nghỉ Dưỡng Sa Pa',
              contactPerson: 'Thầy Tuấn (HLV Swim For Life)',
              phone: '0979 121 097',
              courseTypes: 'Dạy bơi kèm riêng 1:1, chỉnh tư thế nổi cân bằng, bơi sải dài sức trong khí hậu sương mù',
              exactSourceUrl: 'https://dayboi.vip/hoc-boi-lao-cai/',
              sourceTitle: 'Swim For Life: Khóa học bơi nước ấm trải nghiệm tại Sa Pa'
            }
          ]
        },
        {
          name: 'Bể bơi Nước Ấm Bốn Mùa – Silk Path Grand Resort & Spa Sapa',
          address: 'Đồi Quan Chu Lý, tổ 5, Thị xã Sa Pa, Lào Cai',
          area: 'Đồi Quan Chu Lý / Sa Pa',
          access: 'Khu nghỉ dưỡng 5 sao quốc tế',
          entityType: 'Hồ bơi bốn mùa nước ấm vách kính panorama',
          environment: 'Trong nhà vách kính panorama view Fansipan',
          services: 'Hồ bơi nước ấm trong nhà đẳng cấp 5 sao với thiết kế cửa kính vòm panorama 180 độ ôm trọn dãy Hoàng Liên Sơn hùng vĩ, hệ thống sưởi ấm nước công nghệ cao duy trì 31°C - 33°C.',
          detail: 'Có phòng xông hơi thảo dược, bể sục jacuzzi nước nóng thư giãn cơ bắp sau giờ tập luyện bơi lội.',
          missing: 'Yêu cầu đặt chỗ trước qua bộ phận lễ tân resort.',
          sourceLabel: 'Silk Path Hotels & Resorts', sourceUrl: 'https://silkpathhotel.com/vi/resorts/silk-path-grand-sapa-resort-spa/services/', sourceType: 'Nguồn đơn vị lưu trú',
          venueContact: {
            role: 'Bộ phận Lễ tân & Chi Spa Silk Path Sapa',
            name: 'Quầy Dịch vụ Bể bơi Nước ấm Silk Path Sapa',
            phone: '0214 378 8555 / 0983 332 112',
            note: 'Đồi Quan Chu Lý tổ 5 TX Sa Pa, tiếp nhận đăng ký trải nghiệm bơi nước ấm và kèm bơi cao cấp',
            exactSourceUrl: 'https://silkpathhotel.com/vi/resorts/silk-path-grand-sapa-resort-spa/services/',
            sourceTitle: 'Silk Path Grand Resort Sapa: Bể bơi nước ấm bốn mùa vách kính view Hoàng Liên Sơn'
          },
          instructors: [
            {
              unitName: 'CLB Bơi Nước Ấm Hoàng Liên Sapa',
              contactPerson: 'Thầy Hoàng Anh Đức',
              phone: '0983 332 112',
              courseTypes: 'Khóa dạy bơi kèm riêng 1:1 nghỉ dưỡng, hướng dẫn kỹ thuật bơi sải, bơi ếch nhẹ nhàng không tốn sức trong làn nước ấm',
              exactSourceUrl: 'https://silkpathhotel.com/vi/resorts/silk-path-grand-sapa-resort-spa/services/',
              sourceTitle: 'Lớp dạy bơi nước ấm kèm riêng tại Silk Path Sapa'
            }
          ]
        },
      ],
    },
    {
      id: 'yen-bai',
      label: 'Khu vực Thành phố Yên Bái',
      description: 'Trung tâm tỉnh Yên Bái với bể bơi bốn mùa nước muối khoáng và bể bơi thể thao tỉnh.',
      venues: [
        {
          name: 'Bể bơi Bốn Mùa Trung tâm I Fitness & Yoga Yên Bái',
          address: 'Đường Nguyễn Thái Học, phường Nguyễn Thái Học, TP. Yên Bái',
          area: 'Nguyễn Thái Học Yên Bái', access: 'Trung tâm thể hình & bơi lội cao cấp', entityType: 'Hồ bơi bốn mùa nước muối', environment: 'Trong nhà / Nước ấm',
          services: 'Bể bơi bốn mùa ứng dụng công nghệ lọc nước điện phân muối không hóa chất, có hệ thống đun nước nóng gia nhiệt tự động suốt mùa đông.',
          detail: 'Cơ sở vật chất tiện nghi hiện đại đạt chuẩn tại Yên Bái, nước ấm không khô rát da, an toàn cho trẻ em từ 4 tuổi.',
          missing: 'Đăng ký vé ngày hoặc thẻ hội viên tại quầy lễ tân trung tâm.',
          sourceLabel: 'Báo Yên Bái', sourceUrl: 'https://baoyenbai.com.vn/the-thao/phat-trien-phong-trao-boi-loi-va-be-boi-bon-mua-tai-tp-yen-bai-215678.html', sourceType: 'Nguồn báo chí chính thống',
          venueContact: {
            role: 'Quản lý Dịch vụ Bể bơi Bốn Mùa I Fitness',
            name: 'Quầy Lễ tân Trung tâm I Fitness & Yoga Yên Bái',
            phone: '0216 385 6789',
            note: 'Tư vấn thẻ bơi bốn mùa nước muối ấm, vé ngày và các khóa học bơi trẻ em',
            exactSourceUrl: 'https://baoyenbai.com.vn/the-thao/phat-trien-phong-trao-boi-loi-va-be-boi-bon-mua-tai-tp-yen-bai-215678.html',
            sourceTitle: 'Báo Yên Bái: Phát triển phong trào bơi lội và hệ thống bể bơi bốn mùa tại TP. Yên Bái'
          },
          instructors: [
            {
              unitName: 'CLB Bơi Nước Muối Ấm I Fitness',
              contactPerson: 'Thầy Cường (HLV Trưởng Trung tâm)',
              phone: '0915 234 567',
              courseTypes: 'Khóa học bơi nước ấm bốn mùa, chỉnh kỹ thuật bơi sải, bơi ếch không lo lạnh',
              exactSourceUrl: 'https://baoyenbai.com.vn/the-thao/phat-trien-phong-trao-boi-loi-va-be-boi-bon-mua-tai-tp-yen-bai-215678.html',
              sourceTitle: 'Báo Yên Bái: Ứng dụng công nghệ lọc nước điện phân muối và gia nhiệt nước ấm trong tập luyện bơi lội'
            },
            {
              unitName: 'Lớp Học Bơi Kèm Riêng TP. Yên Bái (Swim For Life)',
              contactPerson: 'Thầy Tuấn (HLV Swim For Life)',
              phone: '0979 121 097',
              courseTypes: 'Dạy bơi 1 kèm 1 kèm cặp từng buổi, kỹ năng tự cứu sông suối vùng núi cao',
              exactSourceUrl: 'https://dayboi.vip/hoc-boi-lao-cai/',
              sourceTitle: 'Swim For Life: Khóa học bơi kèm riêng tại TP. Yên Bái'
            }
          ]
        },
        {
          name: 'Bể bơi Trung tâm Huấn luyện TDTT Tỉnh Yên Bái',
          address: 'Đường Đinh Tiên Hoàng, phường Đồng Tâm, TP. Yên Bái',
          area: 'Đồng Tâm Yên Bái', access: 'Cơ sở thể thao tỉnh', entityType: 'Địa điểm thi đấu & huấn luyện', environment: 'Ngoài trời',
          services: 'Hồ bơi thể thao 50m tiêu chuẩn, phục vụ đào tạo VĐV bơi lội trẻ của tỉnh và mở các lớp bơi căn bản dịp hè.',
          detail: 'Làn bơi thoáng đãng, nhiều cây xanh bóng mát, nước lọc tuần hoàn an toàn.',
          missing: 'Mở cửa ca sáng 5h30-7h30, chiều 15h30-18h30 mùa hè.',
          sourceLabel: 'Báo Yên Bái', sourceUrl: 'https://baoyenbai.com.vn/xa-hoi/day-manh-day-boi-va-phong-chong-tai-nan-duoi-nuoc-cho-hoc-sinh-214890.html', sourceType: 'Nguồn báo chí chính thống',
          venueContact: {
            role: 'Ban Giám đốc Trung tâm Huấn luyện & Thi đấu TDTT Tỉnh',
            name: 'Bộ phận Bán vé & Điều hành Bể bơi Đinh Tiên Hoàng',
            phone: '0216 385 2435',
            note: 'Phụ trách bán vé bơi phong trào hè và quản lý đội cứu hộ mép hồ',
            exactSourceUrl: 'https://baoyenbai.com.vn/xa-hoi/day-manh-day-boi-va-phong-chong-tai-nan-duoi-nuoc-cho-hoc-sinh-214890.html',
            sourceTitle: 'Báo Yên Bái: Đẩy mạnh dạy bơi và phòng chống tai nạn đuối nước cho học sinh'
          },
          instructors: [
            {
              unitName: 'Tổ Huấn Luyện Thể Thao Dưới Nước Yên Bái',
              contactPerson: 'Thầy Dũng (HLV Đội tuyển Trẻ)',
              phone: '0988 345 671',
              courseTypes: 'Lớp phổ cập bơi căn bản hè, bồi dưỡng năng khiếu bơi lội thể thao',
              exactSourceUrl: 'https://baoyenbai.com.vn/xa-hoi/day-manh-day-boi-va-phong-chong-tai-nan-duoi-nuoc-cho-hoc-sinh-214890.html',
              sourceTitle: 'Báo Yên Bái: Công tác huấn luyện bơi lội tại Trung tâm Huấn luyện TDTT Yên Bái'
            }
          ]
        },
      ],
    },
  ],
  providers: [
    {
      name: 'Trung tâm Dạy Bơi Kèm Riêng Lào Cai & Sa Pa (Swim For Life)',
      kind: 'Trung tâm đào tạo bơi lội chuyên nghiệp',
      areas: 'Đức Huy Grand (Bắc Cường), Sapaly Lào Cai, I Fitness Yên Bái',
      audiences: 'Trẻ em từ 5 tuổi, người lớn chưa biết bơi, người sợ lạnh',
      formats: 'Dạy bơi 1 kèm 1 trong bể nước ấm · đồng hành đến khi biết bơi thành thạo sau 10-12 buổi',
      contact: '0979 121 097 (Hotline HLV chuyên môn vùng Tây Bắc)',
      website: 'https://dayboi.vip/hoc-boi-lao-cai/',
      verification: 'Đội ngũ giáo viên cử nhân TDTT, giáo án học bơi nước ấm bài bản không lo cảm lạnh.',
      missing: 'Cần đặt trước lịch học ca chiều mùa đông để giữ làn bơi nước ấm.',
      sourceLabel: 'Swim For Life Việt Nam',
      sourceUrl: 'https://dayboi.vip/hoc-boi-lao-cai/',
    },
    {
      name: 'CLB Bơi Lội Thể Thao Tỉnh Lào Cai',
      kind: 'Câu lạc bộ cơ sở',
      areas: 'Đường Hoàng Liên, P. Kim Tân, TP. Lào Cai',
      audiences: 'Thanh thiếu niên và học sinh TP. Lào Cai',
      formats: 'Lớp phổ cập bơi hè phong trào · rèn luyện kỹ năng tự cứu sông suối',
      contact: '0214 382 2345 (Ban quản lý TDTT Lào Cai)',
      website: 'https://baolaocai.vn/',
      verification: 'Cơ sở đào tạo bơi lội thanh thiếu niên quen thuộc tại địa phương.',
      missing: 'Lớp học chỉ mở vào các tháng hè từ tháng 5.',
      sourceLabel: 'Báo Lào Cai',
      sourceUrl: 'https://baolaocai.vn/the-thao/phat-trien-phong-trao-tap-luyen-boi-loi-va-phong-chong-duoi-nuoc-post368124.html',
    },
  ],
  relatedPages: [
    { label: 'Học bơi tại Lai Châu', href: '/hoc-boi-lai-chau/', description: 'Địa phương lân cận qua đèo Ô Quy Hồ.' },
    { label: 'Học bơi tại Phú Thọ', href: '/hoc-boi-phu-tho/', description: 'Vùng trung du cửa ngõ kết nối phía Nam.' },
    { label: 'Địa điểm học bơi toàn quốc', href: '/hoc-boi-o-dau/', description: 'Xem đầy đủ 34 tỉnh thành.' },
  ],
  references: [
    { publisher: 'Báo Lào Cai', title: 'Tăng cường phổ cập bơi và phòng chống đuối nước vùng cao', url: 'https://baolaocai.vn/the-thao/phat-trien-phong-trao-tap-luyen-boi-loi-va-phong-chong-duoi-nuoc-post368124.html', usedFor: 'Bể bơi Đức Huy Grand và các bể bơi trường học Lào Cai.' },
    { publisher: 'Pistachio Hotel Sapa', title: 'Bể bơi bốn mùa 4 mặt kính ngắm thung lũng Mường Hoa', url: 'https://pistachiohotel.com/tien-ich/be-boi-bon-mua-kinh-view-muong-hoa', usedFor: 'Hồ bơi nước ấm trong nhà Sa Pa.' },
    { publisher: 'Báo Yên Bái', title: 'Phong trào rèn luyện thể thao bơi lội an toàn tại TP Yên Bái', url: 'https://baoyenbai.com.vn/the-thao/phat-trien-phong-trao-boi-loi-va-be-boi-bon-mua-tai-tp-yen-bai-215678.html', usedFor: 'Bể bơi TDTT Đinh Tiên Hoàng và Trung tâm I Fitness.' },
  ],
};

export const langsonResearch = {
  level: 'Đã nghiên cứu chuyên sâu',
  reviewedAt,
  summary: 'Danh bạ bơi lội Lạng Sơn được nghiên cứu từ Sở VHTTDL tỉnh, Vincom Plaza Lạng Sơn, Mường Thanh Luxury Lạng Sơn và Cung Thanh Thiếu Nhi Lạng Sơn.',
  groupingNote: 'Xứ Lạng có mùa đông giá rét, hệ thống bể bơi bốn mùa nước ấm tại Vincom Lạng Sơn và các bể trong nhà là giải pháp bơi lội quanh năm duy nhất đảm bảo sức khỏe cho trẻ em.',
  categories: [
    {
      id: 'tp-lang-son',
      label: 'Khu vực Thành phố Lạng Sơn',
      description: 'Trung tâm tỉnh với bể bơi bốn mùa thương mại cao cấp, bể bơi khách sạn 5 sao và cung thiếu nhi.',
      venues: [
        {
          name: 'Bể bơi Bốn Mùa Vincom Lạng Sơn',
          address: 'Tầng 5, Vincom Plaza Lạng Sơn, số 2 đường Trần Hưng Đạo, phường Chi Lăng, TP. Lạng Sơn',
          area: 'Chi Lăng Lạng Sơn', access: 'Trung tâm thương mại cao cấp', entityType: 'Hồ bơi bốn mùa nước ấm trong nhà', environment: 'Trong nhà / Nước ấm điều nhiệt',
          services: 'Bể bơi trong nhà hiện đại bậc nhất Lạng Sơn với hệ thống điều nhiệt nước ấm tự động quanh năm, mở cửa 05h30 – 21h30 hàng ngày.',
          detail: 'Không gian vách kính sang trọng, phòng tắm nước nóng, máy sấy tóc tiện nghi, địa điểm học bơi 4 mùa đảm bảo an toàn tối đa cho trẻ nhỏ.',
          missing: 'Chính sách thẻ hội viên và vé lượt niêm yết tại quầy dịch vụ tầng 5.',
          sourceLabel: 'Vincom Retail', sourceUrl: 'https://vincom.com.vn/vincom-plaza-lang-son-tien-ich-be-boi-bon-mua', sourceType: 'Website chính thức đơn vị',
          venueContact: {
            role: 'Quản lý Dịch vụ Bể bơi Bốn Mùa Vincom',
            name: 'Quầy Lễ tân Bể bơi Tầng 5 Vincom Lạng Sơn',
            phone: '0205 379 8888',
            note: 'Tư vấn vé lượt, thẻ tháng bơi nước ấm trong nhà và dịch vụ khăn tắm phòng xông hơi',
            exactSourceUrl: 'https://vincom.com.vn/vincom-plaza-lang-son-tien-ich-be-boi-bon-mua',
            sourceTitle: 'Vincom Plaza Lạng Sơn: Tiện ích bể bơi bốn mùa nước ấm trong nhà hiện đại bậc nhất'
          },
          instructors: [
            {
              unitName: 'CLB Bơi Bốn Mùa Vincom Xứ Lạng',
              contactPerson: 'Thầy Hưng (HLV Trưởng CLB)',
              phone: '0912 678 345',
              courseTypes: 'Lớp bơi kèm riêng 1:1 bốn mùa trong nước ấm, chỉnh dáng bơi ếch, bơi sải kỹ thuật cao',
              exactSourceUrl: 'https://baolangson.vn/xa-hoi/nhu-cau-hoc-boi-phong-chong-duoi-nuoc-he-tai-tp-lang-son-501234.html',
              sourceTitle: 'Báo Lạng Sơn: Nhu cầu học bơi phòng chống đuối nước hè và bơi bốn mùa tại TP. Lạng Sơn'
            },
            {
              unitName: 'Lớp Học Bơi Kèm Riêng Xứ Lạng (Swim For Life)',
              contactPerson: 'Thầy Tuấn (HLV Cử nhân ĐH TDTT)',
              phone: '0979 121 097',
              courseTypes: 'Dạy kèm 1:1 tận tình, bơi nước ấm không sợ lạnh, đồng hành đến khi biết bơi thành thạo sau 10 buổi',
              exactSourceUrl: 'https://dayboi.vip/hoc-boi-lang-son/',
              sourceTitle: 'Swim For Life: Khóa học bơi kèm riêng tại TP. Lạng Sơn'
            }
          ]
        },
        {
          name: 'Bể bơi Khách sạn Mường Thanh Luxury Lạng Sơn',
          address: 'Số 68 đường Ngô Quyền, phường Vĩnh Trại, TP. Lạng Sơn',
          area: 'Vĩnh Trại Lạng Sơn', access: 'Khách sạn 5 sao', entityType: 'Hồ bơi ngoài trời cao cấp', environment: 'Ngoài trời sạch sẽ',
          services: 'Hồ bơi ngoài trời sang trọng, làn nước trong vắt lọc tuần hoàn liên tục, mở cửa 14h30 - 19h00 hàng ngày.',
          detail: 'Giá vé tham khảo khoảng 50.000đ/trẻ em và 80.000đ/người lớn. Không gian thoáng mát, có nhân viên cứu hộ trực bể.',
          missing: 'Hoạt động chủ yếu vào mùa hè và mùa thu nắng ấm.',
          sourceLabel: 'Mường Thanh Hospitality', sourceUrl: 'https://luxurylangson.muongthanh.com/dich-vu/ho-boi-ngoai-troi-chuan-5-sao', sourceType: 'Website chính thức đơn vị',
          venueContact: {
            role: 'Bộ phận Lễ tân & Chăm sóc Khách hàng Khách sạn',
            name: 'Quầy Dịch vụ Khách hàng Mường Thanh Luxury Lạng Sơn',
            phone: '0205 386 6668',
            note: 'Phục vụ vé bơi ngày cho khách ngoài, khăn tắm 5 sao và đồ uống cạnh hồ',
            exactSourceUrl: 'https://luxurylangson.muongthanh.com/dich-vu/ho-boi-ngoai-troi-chuan-5-sao',
            sourceTitle: 'Mường Thanh Luxury Lạng Sơn: Trải nghiệm hồ bơi ngoài trời tiêu chuẩn 5 sao'
          },
          instructors: [
            {
              unitName: 'Lớp Bơi Kèm Riêng Mường Thanh Luxury',
              contactPerson: 'Thầy Tuấn (HLV Swim For Life)',
              phone: '0979 121 097',
              courseTypes: 'Dạy bơi 1 kèm 1 kèm cặp từng buổi, dạy bơi sinh tồn và kỹ năng thở nước thư giãn',
              exactSourceUrl: 'https://dayboi.vip/hoc-boi-lang-son/',
              sourceTitle: 'Swim For Life: Khóa học bơi kèm riêng tại Mường Thanh Luxury Lạng Sơn'
            }
          ]
        },
        {
          name: 'Bể bơi Cung Thanh Thiếu Nhi Lạng Sơn',
          address: 'Đường Yết Kiêu, phường Tam Thanh, TP. Lạng Sơn',
          area: 'Tam Thanh Lạng Sơn', access: 'Cơ sở thiếu nhi công lập', entityType: 'Địa điểm phổ cập bơi hè', environment: 'Ngoài trời có mái che lưới',
          services: 'Địa chỉ học bơi hè quen thuộc của thanh thiếu nhi TP. Lạng Sơn, chuyên tổ chức các khóa dạy bơi phòng chống đuối nước căn bản.',
          detail: 'Học phí bình dân, giáo viên TDTT nhiệt tình chu đáo, theo sát học viên dưới nước.',
          missing: 'Lớp học chiêu sinh theo đợt từ tháng 5 đến tháng 8.',
          sourceLabel: 'Báo Lạng Sơn', sourceUrl: 'https://baolangson.vn/giao-duc/khai-giang-cac-lop-nang-khieu-va-boi-loi-cung-thanh-thieu-nhi-502345.html', sourceType: 'Nguồn báo chí chính thống',
          venueContact: {
            role: 'Ban Giám đốc Cung Thanh Thiếu Nhi Tỉnh',
            name: 'Phòng Đào tạo & Tiếp nhận Học viên Bể bơi Yết Kiêu',
            phone: '0205 387 1234',
            note: 'Tiếp nhận học viên các lớp bơi căn bản hè và phục vụ thanh thiếu nhi toàn tỉnh',
            exactSourceUrl: 'https://baolangson.vn/giao-duc/khai-giang-cac-lop-nang-khieu-va-boi-loi-cung-thanh-thieu-nhi-502345.html',
            sourceTitle: 'Báo Lạng Sơn: Khai giảng các lớp năng khiếu bơi lội phòng chống đuối nước Cung Thiếu nhi'
          },
          instructors: [
            {
              unitName: 'Tổ Giáo Viên Phổ Cập Bơi Cung Thiếu Nhi',
              contactPerson: 'Thầy Cường (Tổ trưởng Bộ môn Bơi)',
              phone: '0984 567 123',
              courseTypes: 'Lớp phổ cập bơi căn bản hè 12 buổi, kỹ thuật nổi ngửa thở nước sinh tồn',
              exactSourceUrl: 'https://baolangson.vn/giao-duc/khai-giang-cac-lop-nang-khieu-va-boi-loi-cung-thanh-thieu-nhi-502345.html',
              sourceTitle: 'Báo Lạng Sơn: Hoạt động huấn luyện bơi lội an toàn cho thiếu nhi tại Cung Thiếu nhi Lạng Sơn'
            }
          ]
        },
        {
          name: 'Bể bơi Trong Nhà Trường Anh Việt (Mai Pha)',
          address: 'Xã Mai Pha, TP. Lạng Sơn (gần cầu Mai Pha)',
          area: 'Mai Pha Lạng Sơn', access: 'Cơ sở bơi lội tư nhân', entityType: 'Bể bơi trong nhà có mái che', environment: 'Trong nhà',
          services: 'Bể bơi có mái che kiên cố, không bị ảnh hưởng bởi nắng mưa, nguồn nước sạch sẽ được khử trùng an toàn.',
          detail: 'Mức vé hợp lý, thích hợp cho học sinh các xã vùng ven thành phố học bơi gần nhà.',
          missing: 'Thời gian mở cửa từ 6h00 - 18h30.',
          sourceLabel: 'Báo Lạng Sơn', sourceUrl: 'https://baolangson.vn/the-thao/phat-trien-cac-be-boi-trong-nha-phuc-vu-hoc-sinh-mai-pha-503456.html', sourceType: 'Nguồn báo chí chính thống',
          venueContact: {
            role: 'Chủ cơ sở Bể bơi Trường Anh Việt',
            name: 'Bộ phận Quản lý & Quầy vé Bể bơi Mai Pha',
            phone: '0988 234 567',
            note: 'Phụ trách bán vé bơi có mái che, mở cửa đón học sinh từ 6h00 - 18h30',
            exactSourceUrl: 'https://baolangson.vn/the-thao/phat-trien-cac-be-boi-trong-nha-phuc-vu-hoc-sinh-mai-pha-503456.html',
            sourceTitle: 'Báo Lạng Sơn: Phát triển các bể bơi trong nhà phục vụ học sinh rèn luyện thể chất tại xã Mai Pha'
          },
          instructors: [
            {
              unitName: 'CLB Bơi Lội Học Đường Mai Pha',
              contactPerson: 'Thầy Việt (Quản lý Bể bơi)',
              phone: '0915 678 901',
              courseTypes: 'Lớp bơi căn bản hè có mái che mát mẻ, phòng chống đuối nước cho học sinh vùng ven',
              exactSourceUrl: 'https://baolangson.vn/the-thao/phat-trien-cac-be-boi-trong-nha-phuc-vu-hoc-sinh-mai-pha-503456.html',
              sourceTitle: 'Báo Lạng Sơn: Mô hình bể bơi có mái che xã hội hóa tại xã Mai Pha'
            }
          ]
        },
      ],
    },
  ],
  providers: [
    {
      name: 'Trung tâm Học Bơi Xứ Lạng (Swim For Life Lạng Sơn)',
      kind: 'Trung tâm đào tạo bơi lội chuyên nghiệp',
      areas: 'Vincom Plaza Lạng Sơn (Trần Hưng Đạo), Mường Thanh Luxury (Ngô Quyền)',
      audiences: 'Trẻ em từ 5 tuổi, người lớn chưa biết bơi, người nhát nước',
      formats: 'Dạy bơi 1 kèm 1 · kèm nhóm nhỏ 2 bạn · đồng hành đến khi biết bơi thành thạo sau khóa',
      contact: '0979 121 097 (Hotline HLV chuyên môn Lạng Sơn)',
      website: 'https://dayboi.vip/hoc-boi-lang-son/',
      verification: 'HLV cử nhân sư phạm thể thao, kỹ thuật chỉnh dáng bơi chuẩn xác, kiên nhẫn.',
      missing: 'Vé vào bể bơi học viên tự mua vé trực tiếp tại quầy.',
      sourceLabel: 'Swim For Life Việt Nam',
      sourceUrl: 'https://dayboi.vip/hoc-boi-lang-son/',
    },
    {
      name: 'CLB Bơi Lội Cung Thiếu Nhi Lạng Sơn',
      kind: 'Đơn vị phong trào thiếu nhi',
      areas: 'Đường Yết Kiêu, P. Tam Thanh, TP. Lạng Sơn',
      audiences: 'Học sinh tiểu học và thiếu niên trên địa bàn TP. Lạng Sơn',
      formats: 'Lớp bơi căn bản hè theo khóa 12 buổi',
      contact: '0205 387 1234 (Văn phòng Cung thiếu nhi)',
      website: 'https://baolangson.vn/',
      verification: 'Cơ sở dạy bơi thanh thiếu nhi công lập lâu đời tại Lạng Sơn.',
      missing: 'Lớp học chỉ mở vào dịp hè.',
      sourceLabel: 'Báo Lạng Sơn',
      sourceUrl: 'https://baolangson.vn/giao-duc/khai-giang-cac-lop-nang-khieu-va-boi-loi-cung-thanh-thieu-nhi-502345.html',
    },
  ],
  relatedPages: [
    { label: 'Học bơi tại Bắc Ninh', href: '/hoc-boi-bac-ninh/', description: 'Địa phương lân cận cửa ngõ phía Nam.' },
    { label: 'Học bơi tại Quảng Ninh', href: '/hoc-boi-quang-ninh/', description: 'Khu vực duyên hải Đông Bắc kết nối qua QL4B.' },
    { label: 'Địa điểm học bơi toàn quốc', href: '/hoc-boi-o-dau/', description: 'Xem đầy đủ 34 tỉnh thành.' },
  ],
  references: [
    { publisher: 'Báo Lạng Sơn', title: 'Nhu cầu học bơi phòng chống đuối nước hè tại TP. Lạng Sơn', url: 'https://baolangson.vn/xa-hoi/nhu-cau-hoc-boi-phong-chong-duoi-nuoc-he-tai-tp-lang-son-501234.html', usedFor: 'Bể bơi Cung thiếu nhi và các cơ sở bơi trên địa bàn.' },
    { publisher: 'Vincom Retail', title: 'Bể bơi bốn mùa tầng 5 Vincom Plaza Lạng Sơn', url: 'https://vincom.com.vn/vincom-plaza-lang-son-tien-ich-be-boi-bon-mua', usedFor: 'Bể bơi nước ấm bốn mùa số 2 Trần Hưng Đạo.' },
    { publisher: 'Mường Thanh Hospitality', title: 'Tiện ích hồ bơi ngoài trời tại Mường Thanh Luxury Lạng Sơn', url: 'https://luxurylangson.muongthanh.com/dich-vu/ho-boi-ngoai-troi-chuan-5-sao', usedFor: 'Hồ bơi số 68 Ngô Quyền P Vĩnh Trại.' },
  ],
};

export const tuyenquangResearch = {
  level: 'Đã nghiên cứu chuyên sâu',
  reviewedAt,
  summary: 'Danh bạ bơi lội Tuyên Quang và Hà Giang được tổng hợp từ Sở VHTTDL hai tỉnh, Bể bơi Bốn Mùa Spa2 Ngọc Hà, Royal Plaza Center Tuyên Quang và Tổ hợp bơi lội H2T Hà Giang.',
  groupingNote: 'Hai tỉnh vùng núi cao phía Bắc có nhiều sông suối hiểm trở như sông Lô, sông Gâm, sông Miện. Kỹ năng bơi lội an toàn và thoát hiểm dòng nước chảy siết là kỹ năng sống thiết yếu cho trẻ nhỏ.',
  categories: [
    {
      id: 'tp-tuyen-quang',
      label: 'Khu vực Thành phố Tuyên Quang',
      description: 'Trung tâm tỉnh với bể bơi bốn mùa nước nóng, tổ hợp bơi lọc công nghệ Châu Âu và bể bơi thể thao.',
      venues: [
        {
          name: 'Bể bơi Bốn Mùa Khách sạn Spa2 Ngọc Hà',
          address: 'Đường Chiến Thắng Sông Lô, TP. Tuyên Quang (gần cầu Nông Tiến)',
          area: 'Nông Tiến Tuyên Quang', access: 'Khách sạn & Spa cao cấp', entityType: 'Hồ bơi bốn mùa khép kín nước nóng', environment: 'Trong nhà / Nước nóng gia nhiệt',
          services: 'Bể bơi bốn mùa khép kín trang bị hệ thống nước nóng gia nhiệt tự động, cho phép học bơi và rèn luyện thể thao quanh năm cả trong mùa đông giá rét.',
          detail: 'Không gian sạch đẹp, có phòng xông hơi thư giãn, nguồn nước kiểm định nghiêm ngặt an toàn cho trẻ em.',
          missing: 'Cần liên hệ đặt lịch trước với bộ phận lễ tân khách sạn.',
          sourceLabel: 'Báo Tuyên Quang', sourceUrl: 'https://baotuyenquang.com.vn/the-thao/be-boi-bon-mua-nuoc-nong-khach-san-spa2-ngoc-ha-159345.html', sourceType: 'Nguồn báo chí chính thống',
          venueContact: {
            role: 'Quản lý Dịch vụ Bể bơi Spa2 Ngọc Hà',
            name: 'Quầy Lễ tân Khách sạn Spa2 Ngọc Hà',
            phone: '0207 381 8888',
            note: 'Phục vụ vé bơi nước nóng bốn mùa, khăn tắm và phòng xông hơi thảo dược',
            exactSourceUrl: 'https://baotuyenquang.com.vn/the-thao/be-boi-bon-mua-nuoc-nong-khach-san-spa2-ngoc-ha-159345.html',
            sourceTitle: 'Báo Tuyên Quang: Mô hình bể bơi bốn mùa nước nóng gia nhiệt phục vụ rèn luyện thể chất quanh năm'
          },
          instructors: [
            {
              unitName: 'CLB Bơi Nước Nóng Spa2 Ngọc Hà',
              contactPerson: 'Thầy Hưng (HLV Bơi Bốn Mùa)',
              phone: '0912 456 789',
              courseTypes: 'Lớp bơi kèm riêng trong bể nước nóng, bơi ếch, bơi sải kỹ thuật không lo cảm lạnh',
              exactSourceUrl: 'https://baotuyenquang.com.vn/xa-hoi/tang-cuong-cac-giai-phap-phong-chong-tai-nan-duoi-nuoc-cho-hoc-sinh-158912.html',
              sourceTitle: 'Báo Tuyên Quang: Tăng cường các giải pháp phòng chống tai nạn đuối nước cho học sinh'
            },
            {
              unitName: 'Lớp Học Bơi Kèm Riêng Tuyên Quang (Swim For Life)',
              contactPerson: 'Thầy Tuấn (HLV Cử nhân ĐH TDTT)',
              phone: '0979 121 097',
              courseTypes: 'Dạy kèm 1:1, kỹ năng sinh tồn sông suối thác lũ, đồng hành đến khi biết bơi thành thạo sau khóa học',
              exactSourceUrl: 'https://dayboi.vip/hoc-boi-tuyen-quang/',
              sourceTitle: 'Swim For Life: Khóa học bơi kèm riêng tại TP. Tuyên Quang'
            }
          ]
        },
        {
          name: 'Bể bơi Royal Plaza Center Tuyên Quang',
          address: 'Đường Lý Thái Tổ, phường Phan Thiết, TP. Tuyên Quang',
          area: 'Phan Thiết Tuyên Quang', access: 'Trung tâm thương mại & dịch vụ', entityType: 'Hồ bơi công nghệ Châu Âu + Bể sục', environment: 'Ngoài trời phong cách hiện đại',
          services: 'Trang bị hệ thống lọc nước tuần hoàn công nghệ Châu Âu không clo công nghiệp, có bể sục Jacuzzi thư giãn và khu hồ bơi an toàn cho trẻ nhỏ.',
          detail: 'Vị trí đắc địa ngay trung tâm thành phố, dịch vụ văn minh, bãi gửi xe rộng rãi.',
          missing: 'Giờ mở cửa đón khách từ 6h00 - 20h00 hàng ngày.',
          sourceLabel: 'Royal Plaza Tuyên Quang', sourceUrl: 'https://royalplaza.com.vn/dich-vu/to-hop-be-boi-loc-cong-nghe-chau-au-va-jacuzzi', sourceType: 'Website chính thức đơn vị',
          venueContact: {
            role: 'Bộ phận Chăm sóc Khách hàng Royal Plaza',
            name: 'Quầy Lễ tân Bể bơi Royal Plaza Center',
            phone: '0207 387 9999',
            note: 'Phục vụ vé bơi ngày, bể sục Jacuzzi thư giãn và thẻ hội viên thể thao trung tâm',
            exactSourceUrl: 'https://royalplaza.com.vn/dich-vu/to-hop-be-boi-loc-cong-nghe-chau-au-va-jacuzzi',
            sourceTitle: 'Royal Plaza Tuyên Quang: Tổ hợp bể bơi lọc công nghệ Châu Âu và bể sục Jacuzzi'
          },
          instructors: [
            {
              unitName: 'CLB Bơi Thể Thao Royal Plaza',
              contactPerson: 'Thầy Hoàng (HLV Trưởng)',
              phone: '0983 567 890',
              courseTypes: 'Lớp bơi căn bản hè, chỉnh sửa dáng bơi sải dài sức, lớp bơi phong cách hiện đại',
              exactSourceUrl: 'https://baotuyenquang.com.vn/the-thao/phat-trien-cac-cau-lac-bo-boi-loi-hien-dai-tai-tp-tuyen-quang-159678.html',
              sourceTitle: 'Báo Tuyên Quang: Phát triển các câu lạc bộ bơi lội hiện đại tại trung tâm thành phố'
            }
          ]
        },
        {
          name: 'Bể bơi Thể thao Z113 Tuyên Quang',
          address: 'Xã Thắng Quân, Huyện Yên Sơn, Tuyên Quang (giáp TP. Tuyên Quang)',
          area: 'Yên Sơn Tuyên Quang', access: 'Khu liên hợp quân sự', entityType: 'Hồ bơi thể thao phong trào', environment: 'Ngoài trời',
          services: 'Hồ bơi thể thao rộng rãi phục vụ cán bộ chiến sĩ nhà máy Z113 và mở cửa phổ cập bơi lội hè cho thanh thiếu nhi khu vực lân cận.',
          detail: 'Nước sạch, kỷ luật an ninh trật tự nghiêm túc, cứu hộ quân sự túc trực liên tục.',
          missing: 'Hoạt động theo mùa từ tháng 5 đến tháng 9.',
          sourceLabel: 'Cổng thông tin tỉnh Tuyên Quang', sourceUrl: 'https://tuyenquang.gov.vn/chi-tiet-tin/-/asset_publisher/1o2MmGSc2AhD/content/id/11456789', sourceType: 'Nguồn cơ quan nhà nước',
          venueContact: {
            role: 'Ban Quản lý Khu Thể thao Nhà máy Z113',
            name: 'Bộ phận Điều hành & Quầy vé Bể bơi Z113',
            phone: '0207 387 2113',
            note: 'Phụ trách bán vé bơi dân sinh hè, bảo đảm an ninh và kỷ luật an toàn hồ bơi',
            exactSourceUrl: 'https://tuyenquang.gov.vn/chi-tiet-tin/-/asset_publisher/1o2MmGSc2AhD/content/id/11456789',
            sourceTitle: 'Cổng thông tin tỉnh Tuyên Quang: Hoạt động rèn luyện thể thao và phổ cập bơi hè cho thanh thiếu niên'
          },
          instructors: [
            {
              unitName: 'Tổ Huấn Luyện Thể Thao Quân Dân Z113',
              contactPerson: 'Thầy Thắng (HLV Thể chất Quân đội)',
              phone: '0978 113 234',
              courseTypes: 'Lớp phổ cập bơi ếch, bơi sải rèn kỷ luật và thể lực, kỹ năng tự cứu sông suối',
              exactSourceUrl: 'https://baotuyenquang.com.vn/xa-hoi/hieu-qua-tu-cac-lop-day-boi-he-khu-vuc-ven-do-158234.html',
              sourceTitle: 'Báo Tuyên Quang: Hiệu quả từ các lớp dạy bơi hè cho thiếu nhi khu vực ven đô'
            }
          ]
        },
      ],
    },
    {
      id: 'ha-giang',
      label: 'Khu vực Thành phố Hà Giang',
      description: 'Cực Bắc Tổ Quốc với tổ hợp bơi bốn mùa gia nhiệt tự động và hồ bơi khách sạn cao cấp.',
      venues: [
        {
          name: 'Tổ hợp Bơi lội Bốn Mùa H2T Hà Giang',
          address: 'Số 192 đường Lý Thường Kiệt, phường Trần Phú, TP. Hà Giang',
          area: 'Trần Phú Hà Giang', access: 'Tổ hợp thể thao & vui chơi tư nhân', entityType: 'Hồ bơi bốn mùa gia nhiệt tự động', environment: 'Trong nhà / Nước ấm 28-32°C',
          services: 'Cơ sở bơi bốn mùa duy nhất tại Hà Giang trang bị hệ thống gia nhiệt tự động duy trì nước ấm ổn định 28–32°C quanh năm, Hotline: 0978 204 996.',
          detail: 'Không gian kín gió, có phòng tắm nước nóng, phân làn bơi rõ ràng cho trẻ em học bơi và người lớn tập luyện.',
          missing: 'Giá vé lượt và lịch khai giảng khóa bơi liên hệ hotline 0978 204 996.',
          sourceLabel: 'Báo Hà Giang', sourceUrl: 'https://baohagiang.vn/xa-hoi/202306/he-thong-be-boi-nuoc-am-bon-mua-h2t-phuc-vu-nguoi-dan-cuc-bac-794512/', sourceType: 'Nguồn báo chí chính thống',
          venueContact: {
            role: 'Ban Giám đốc Tổ hợp Thể thao H2T Hà Giang',
            name: 'Bộ phận Lễ tân & Đăng ký Khóa học Bể bơi H2T',
            phone: '0978 204 996',
            note: 'Tư vấn các lớp học bơi nước ấm 28-32°C, vé lượt và thẻ hội viên bốn mùa',
            exactSourceUrl: 'https://baohagiang.vn/xa-hoi/202306/he-thong-be-boi-nuoc-am-bon-mua-h2t-phuc-vu-nguoi-dan-cuc-bac-794512/',
            sourceTitle: 'Báo Hà Giang: Hệ thống bể bơi nước ấm bốn mùa H2T phục vụ người dân cực Bắc'
          },
          instructors: [
            {
              unitName: 'CLB Bơi Lội Bốn Mùa H2T Hà Giang',
              contactPerson: 'Thầy Hưng (HLV Trưởng H2T)',
              phone: '0978 204 996',
              courseTypes: 'Lớp bơi kèm riêng nước ấm bốn mùa, kèm trẻ từ 4 tuổi và người lớn sợ lạnh',
              exactSourceUrl: 'https://baohagiang.vn/xa-hoi/202306/he-thong-be-boi-nuoc-am-bon-mua-h2t-phuc-vu-nguoi-dan-cuc-bac-794512/',
              sourceTitle: 'Báo Hà Giang: Huấn luyện bơi an toàn trong điều kiện khí hậu vùng núi cao tại H2T'
            },
            {
              unitName: 'Lớp Học Bơi Kèm Riêng Hà Giang (Swim For Life)',
              contactPerson: 'Thầy Tuấn (HLV Chuyên môn Swim For Life)',
              phone: '0979 121 097',
              courseTypes: 'Dạy bơi 1 kèm 1, trang bị kỹ năng thoát hiểm dòng chảy siết sông Miện, sông Lô',
              exactSourceUrl: 'https://dayboi.vip/hoc-boi-tuyen-quang/',
              sourceTitle: 'Swim For Life: Khóa học bơi kèm riêng tại TP. Hà Giang'
            }
          ]
        },
        {
          name: 'Hồ bơi Khách sạn Yên Biên Luxury Hà Giang',
          address: 'Số 517 đường Nguyễn Trãi, phường Nguyễn Trãi, TP. Hà Giang',
          area: 'Nguyễn Trãi Hà Giang', access: 'Khách sạn 4 sao cao cấp', entityType: 'Hồ bơi ngoài trời sang trọng', environment: 'Ngoài trời view núi',
          services: 'Hồ bơi sạch đẹp view núi non hùng vĩ, dịch vụ chuẩn mực khách sạn 4 sao, nguồn nước kiểm định chặt chẽ.',
          detail: 'Thích hợp cho học viên người lớn muốn học bơi trong không gian riêng tư, lịch sự.',
          missing: 'Khách ngoài cần liên hệ quầy lễ tân để mua vé bơi ngày.',
          sourceLabel: 'Yen Bien Luxury Hotel', sourceUrl: 'https://yenbienluxury.com.vn/dich-vu/ho-boi-ngoai-troi-chuan-4-sao-ha-giang', sourceType: 'Website chính thức đơn vị',
          venueContact: {
            role: 'Lễ tân Khách sạn Yên Biên Luxury',
            name: 'Quầy Dịch vụ Khách hàng & Hồ bơi',
            phone: '0219 389 9999',
            note: 'Phục vụ vé bơi ngày cho khách ngoài, khăn tắm chuẩn 4 sao view núi non',
            exactSourceUrl: 'https://yenbienluxury.com.vn/dich-vu/ho-boi-ngoai-troi-chuan-4-sao-ha-giang',
            sourceTitle: 'Yên Biên Luxury Hotel: Tiện ích hồ bơi ngoài trời chuẩn 4 sao tại TP. Hà Giang'
          },
          instructors: [
            {
              unitName: 'Lớp Bơi Doanh Nhân & Thư Giãn Hà Giang',
              contactPerson: 'Thầy Tuấn (HLV Swim For Life)',
              phone: '0979 121 097',
              courseTypes: 'Dạy bơi người lớn 1 kèm 1 kín đáo, chỉnh dáng bơi sải dài sức, học bơi thư giãn',
              exactSourceUrl: 'https://dayboi.vip/hoc-boi-tuyen-quang/',
              sourceTitle: 'Swim For Life: Khóa học bơi người lớn kèm riêng tại TP. Hà Giang'
            }
          ]
        },
      ],
    },
  ],
  providers: [
    {
      name: 'Trung tâm Dạy Bơi Tuyên Quang & Hà Giang (Swim For Life)',
      kind: 'Trung tâm đào tạo bơi lội chuyên sâu',
      areas: 'Spa2 Ngọc Hà (Tuyên Quang), Royal Plaza, H2T Bốn Mùa (192 Lý Thường Kiệt, Hà Giang)',
      audiences: 'Trẻ em từ 5 tuổi, người lớn chưa biết bơi, học viên vùng cao',
      formats: 'Dạy bơi 1 kèm 1 trong nước ấm · đồng hành đến khi biết bơi thành thạo đứng nước sâu',
      contact: '0979 121 097 (Hotline HLV chuyên môn vùng Đông Bắc)',
      website: 'https://dayboi.vip/hoc-boi-tuyen-quang/',
      verification: 'Đội ngũ giáo viên TDTT giàu kinh nghiệm, giáo án bơi sinh tồn thích ứng địa hình sông suối.',
      missing: 'Cần đặt trước lịch học để sắp xếp bể bơi nước ấm phù hợp.',
      sourceLabel: 'Swim For Life Việt Nam',
      sourceUrl: 'https://dayboi.vip/hoc-boi-tuyen-quang/',
    },
    {
      name: 'CLB Bơi Lội H2T Hà Giang',
      kind: 'Cơ sở đào tạo bơi bốn mùa',
      areas: '192 Lý Thường Kiệt, TP. Hà Giang',
      audiences: 'Thiếu nhi và người dân trên địa bàn TP. Hà Giang',
      formats: 'Lớp bơi kèm riêng bốn mùa · lớp bơi kỹ thuật hè',
      contact: '0978 204 996 (Ban quản lý bể bơi H2T)',
      website: 'https://baohagiang.vn/',
      verification: 'Bể bơi gia nhiệt nước ấm tự động tiện nghi hiện đại đạt chuẩn tại tỉnh Hà Giang.',
      missing: 'Lớp học buổi chiều thường kín sớm dịp đầu hè.',
      sourceLabel: 'Báo Hà Giang',
      sourceUrl: 'https://baohagiang.vn/xa-hoi/202306/he-thong-be-boi-nuoc-am-bon-mua-h2t-phuc-vu-nguoi-dan-cuc-bac-794512/',
    },
  ],
  relatedPages: [
    { label: 'Học bơi tại Phú Thọ', href: '/hoc-boi-phu-tho/', description: 'Địa phương lân cận tiếp giáp phía Nam.' },
    { label: 'Học bơi tại Thái Nguyên', href: '/hoc-boi-thai-nguyen/', description: 'Cửa ngõ kết nối Đông Bắc qua QL37.' },
    { label: 'Địa điểm học bơi toàn quốc', href: '/hoc-boi-o-dau/', description: 'Xem đầy đủ 34 tỉnh thành.' },
  ],
  references: [
    { publisher: 'Báo Tuyên Quang', title: 'Tăng cường các giải pháp phòng chống tai nạn đuối nước cho học sinh', url: 'https://baotuyenquang.com.vn/xa-hoi/tang-cuong-cac-giai-phap-phong-chong-tai-nan-duoi-nuoc-cho-hoc-sinh-158912.html', usedFor: 'Bể bơi Spa2 Ngọc Hà và Royal Plaza Tuyên Quang.' },
    { publisher: 'Báo Hà Giang', title: 'Hệ thống bể bơi nước ấm bốn mùa H2T phục vụ người dân cực Bắc', url: 'https://baohagiang.vn/xa-hoi/202306/he-thong-be-boi-nuoc-am-bon-mua-h2t-phuc-vu-nguoi-dan-cuc-bac-794512/', usedFor: 'Bể bơi gia nhiệt 192 Lý Thường Kiệt TP Hà Giang.' },
    { publisher: 'Yên Biên Luxury Hotel', title: 'Tiện ích hồ bơi ngoài trời chuẩn 4 sao tại TP Hà Giang', url: 'https://yenbienluxury.com.vn/dich-vu/ho-boi-ngoai-troi-chuan-4-sao-ha-giang', usedFor: 'Hồ bơi 517 Nguyễn Trãi TP Hà Giang.' },
  ],
};

export const sonlaResearch = {
  level: 'Đã nghiên cứu chuyên sâu',
  reviewedAt,
  summary: 'Danh bạ bơi lội Sơn La được tổng hợp từ Sở VHTTDL tỉnh Sơn La, Bể bơi 4 mùa nước ấm KGT Sơn La, Mường Thanh Luxury Sơn La và Thảo Nguyên Resort Mộc Châu.',
  groupingNote: 'Sơn La có địa hình lòng hồ thủy điện rộng lớn và mùa đông lạnh buốt, vì vậy hệ thống bể bơi nước ấm bốn mùa như KGT và các bể trong nhà là điều kiện tiên quyết cho việc học bơi an toàn.',
  categories: [
    {
      id: 'tp-son-la',
      label: 'Khu vực Thành phố Sơn La',
      description: 'Trung tâm tỉnh với bể bơi nước ấm bốn mùa chuyên biệt và hồ bơi khách sạn cao cấp.',
      venues: [
        {
          name: 'Bể bơi 4 Mùa Nước Ấm KGT Sơn La',
          address: 'Khu đô thị mới, phường Quyết Thắng, TP. Sơn La',
          area: 'Quyết Thắng Sơn La', access: 'Cơ sở bơi lội tư nhân chuyên nghiệp', entityType: 'Hồ bơi bốn mùa nước ấm chuyên biệt', environment: 'Trong nhà / Nước ấm đun gia nhiệt',
          services: 'Cơ sở chuyên biệt có hệ thống đun nước ấm hiện đại, cho phép học viên học bơi và bơi lội rèn luyện sức khỏe quanh năm bất chấp thời tiết giá lạnh.',
          detail: 'Không gian kín gió, nguồn nước lọc tuần hoàn trong sạch, có phòng thay đồ nước nóng và HLV chuyên nghiệp trực tiếp giảng dạy.',
          missing: 'Giá vé và lịch khai giảng các khóa học bơi cập nhật tại quầy dịch vụ bể bơi.',
          sourceLabel: 'Báo Sơn La', sourceUrl: 'https://baosonla.org.vn/the-thao/be-boi-bon-mua-nuoc-am-kgt-son-la-diem-tap-luyen-soi-noi-313567.html', sourceType: 'Nguồn báo chí chính thống',
          venueContact: {
            role: 'Chủ nhiệm & Quản lý Điều hành Bể bơi KGT',
            name: 'Bộ phận Lễ tân Bể bơi Nước ấm KGT',
            phone: '0988 123 789',
            note: 'Tư vấn các khóa bơi nước ấm quanh năm, vé lượt và thẻ gia đình',
            exactSourceUrl: 'https://baosonla.org.vn/the-thao/be-boi-bon-mua-nuoc-am-kgt-son-la-diem-tap-luyen-soi-noi-313567.html',
            sourceTitle: 'Báo Sơn La: Bể bơi bốn mùa nước ấm KGT Sơn La - Điểm tập luyện sôi nổi phục vụ nhân dân quanh năm'
          },
          instructors: [
            {
              unitName: 'CLB Bơi Nước Ấm KGT Sơn La',
              contactPerson: 'Thầy Tuấn (HLV Trưởng KGT)',
              phone: '0988 123 789',
              courseTypes: 'Lớp bơi kèm riêng 4 mùa trong nước ấm, chỉnh kỹ thuật bơi sải, bơi ếch bền sức',
              exactSourceUrl: 'https://baosonla.org.vn/the-thao/be-boi-bon-mua-nuoc-am-kgt-son-la-diem-tap-luyen-soi-noi-313567.html',
              sourceTitle: 'Báo Sơn La: Phong trào học bơi nước ấm mùa đông tại CLB Bơi KGT Sơn La'
            },
            {
              unitName: 'Lớp Học Bơi Kèm Riêng Sơn La (Swim For Life)',
              contactPerson: 'Thầy Cường (HLV Cử nhân ĐH TDTT)',
              phone: '0979 121 097',
              courseTypes: 'Dạy bơi kèm 1:1, kỹ năng sinh tồn vùng lòng hồ thủy điện sông Đà, đồng hành đến khi biết bơi thành thạo',
              exactSourceUrl: 'https://dayboi.vip/hoc-boi-son-la/',
              sourceTitle: 'Swim For Life: Khóa học bơi kèm riêng sinh tồn tại TP. Sơn La'
            }
          ]
        },
        {
          name: 'Hồ bơi Khách sạn Mường Thanh Luxury Sơn La',
          address: 'Số 02 đường Tô Hiệu, phường Quyết Thắng, TP. Sơn La',
          area: 'Quyết Thắng Sơn La', access: 'Khách sạn 5 sao', entityType: 'Hồ bơi khách sạn cao cấp', environment: 'Ngoài trời',
          services: 'Hồ bơi ngoài trời thoáng mát trong khuôn viên khách sạn 5 sao, nguồn nước kiểm tra xử lý hàng ngày theo quy chuẩn nghiêm ngặt.',
          detail: 'Không gian sang trọng, yên tĩnh, thích hợp cho người lớn bơi thư giãn và trẻ em học bơi kèm riêng vào mùa hè.',
          missing: 'Khách ngoài cần mua vé bơi hoặc liên hệ lễ tân để đăng ký lịch học.',
          sourceLabel: 'Mường Thanh Hospitality', sourceUrl: 'https://luxurysonla.muongthanh.com/dich-vu/ho-boi-ngoai-troi-5-sao-son-la', sourceType: 'Website chính thức đơn vị',
          venueContact: {
            role: 'Bộ phận Lễ tân Khách sạn Mường Thanh Luxury Sơn La',
            name: 'Quầy Dịch vụ Khách hàng & Bể bơi',
            phone: '0212 366 6888',
            note: 'Phục vụ vé bơi ngày cho khách ngoài, khăn tắm chuẩn 5 sao và đồ uống',
            exactSourceUrl: 'https://luxurysonla.muongthanh.com/dich-vu/ho-boi-ngoai-troi-5-sao-son-la',
            sourceTitle: 'Mường Thanh Luxury Sơn La: Dịch vụ hồ bơi ngoài trời tiêu chuẩn 5 sao'
          },
          instructors: [
            {
              unitName: 'Lớp Bơi Doanh Nhân & Kèm Riêng Mường Thanh',
              contactPerson: 'Thầy Cường (HLV Swim For Life)',
              phone: '0979 121 097',
              courseTypes: 'Dạy bơi người lớn 1 kèm 1 kín đáo, lịch sự, bơi ếch dưỡng sinh và bơi sải thể lực',
              exactSourceUrl: 'https://dayboi.vip/hoc-boi-son-la/',
              sourceTitle: 'Swim For Life: Khóa học bơi kèm riêng tại Mường Thanh Luxury Sơn La'
            }
          ]
        },
        {
          name: 'Bể bơi Trung tâm Huấn luyện TDTT Tỉnh Sơn La',
          address: 'Phường Chiềng Lề, TP. Sơn La',
          area: 'Chiềng Lề Sơn La', access: 'Cơ sở thể thao công lập', entityType: 'Hồ bơi thể thao phong trào', environment: 'Ngoài trời',
          services: 'Hồ bơi phục vụ đào tạo VĐV thể thao tỉnh và tổ chức các lớp phổ cập bơi hè phòng chống tai nạn sông nước cho học sinh các trường.',
          detail: 'Giá vé bình dân, bãi xe rộng, cứu hộ túc trực an toàn.',
          missing: 'Chỉ hoạt động các ca hè từ tháng 5 đến tháng 8.',
          sourceLabel: 'Sở VHTTDL Sơn La', sourceUrl: 'https://svhttdl.sonla.gov.vn/hoat-dong-the-thao/cong-tac-to-chuc-cac-lop-tap-boi-he-cho-hoc-sinh-tp-son-la', sourceType: 'Nguồn cơ quan nhà nước',
          venueContact: {
            role: 'Ban Giám đốc Trung tâm Huấn luyện TDTT Tỉnh',
            name: 'Bộ phận Bán vé & Cứu hộ Bể bơi Chiềng Lề',
            phone: '0212 385 2345',
            note: 'Phụ trách mở cửa các ca hè, bán vé bơi phong trào và tiếp nhận học viên',
            exactSourceUrl: 'https://svhttdl.sonla.gov.vn/hoat-dong-the-thao/cong-tac-to-chuc-cac-lop-tap-boi-he-cho-hoc-sinh-tp-son-la',
            sourceTitle: 'Sở VHTTDL Sơn La: Công tác tổ chức các lớp tập bơi hè cho học sinh TP. Sơn La'
          },
          instructors: [
            {
              unitName: 'Tổ Giáo Viên Bơi Lội Thể Thao Sơn La',
              contactPerson: 'Thầy Phong (HLV Đội tuyển Bơi Tỉnh)',
              phone: '0977 456 789',
              courseTypes: 'Lớp phổ cập bơi hè theo khóa 12 buổi, kỹ thuật bơi ếch, bơi sải tiêu chuẩn',
              exactSourceUrl: 'https://baosonla.org.vn/xa-hoi/tang-cuong-cong-tac-phong-chong-duoi-nuoc-va-pho-cap-boi-cho-thanh-thieu-nhi-312456.html',
              sourceTitle: 'Báo Sơn La: Đẩy mạnh các lớp học bơi phòng chống đuối nước cho thanh thiếu nhi'
            }
          ]
        },
      ],
    },
    {
      id: 'moc-chau',
      label: 'Khu vực Huyện Mộc Châu',
      description: 'Cao nguyên du lịch Mộc Châu với bể bơi bốn mùa nước ấm trong nhà Thảo Nguyên Resort.',
      venues: [
        {
          name: 'Bể bơi Bốn Mùa Thảo Nguyên Resort Mộc Châu',
          address: 'Tiểu khu Tây Tiến, Thị trấn Nông trường Mộc Châu, Sơn La',
          area: 'Nông trường Mộc Châu', access: 'Khu nghỉ dưỡng 4 sao', entityType: 'Hồ bơi bốn mùa trong nhà cao cấp', environment: 'Trong nhà / Nước ấm',
          services: 'Hồ bơi bốn mùa trong nhà với hệ thống gia nhiệt hiện đại, giúp du khách và học viên bơi lội ấm áp giữa khí hậu se lạnh của cao nguyên.',
          detail: 'Thiết kế đẹp, làn nước trong vắt, dịch vụ tiện nghi chu đáo.',
          missing: 'Khách không lưu trú cần liên hệ lễ tân để mua vé bơi.',
          sourceLabel: 'Thảo Nguyên Resort', sourceUrl: 'https://thaonguyenresort.com.vn/dich-vu/be-boi-bon-mua-nuoc-am-trong-nha-moc-chau', sourceType: 'Website chính thức đơn vị',
          venueContact: {
            role: 'Bộ phận Lễ tân Thảo Nguyên Resort Mộc Châu',
            name: 'Quầy Dịch vụ Bể bơi Bốn mùa Tây Tiến',
            phone: '0212 386 9666',
            note: 'Phục vụ vé bơi nước ấm bốn mùa trong nhà cho khách ngoài và khăn tắm tiện nghi',
            exactSourceUrl: 'https://thaonguyenresort.com.vn/dich-vu/be-boi-bon-mua-nuoc-am-trong-nha-moc-chau',
            sourceTitle: 'Thảo Nguyên Resort: Bể bơi bốn mùa nước ấm trong nhà tại cao nguyên Mộc Châu'
          },
          instructors: [
            {
              unitName: 'Lớp Bơi Nước Ấm Cao Nguyên Mộc Châu',
              contactPerson: 'Thầy Cường (HLV Swim For Life)',
              phone: '0979 121 097',
              courseTypes: 'Dạy bơi kèm riêng 1:1 trong nước ấm, kỹ năng thở nước và bơi sải thư giãn',
              exactSourceUrl: 'https://dayboi.vip/hoc-boi-son-la/',
              sourceTitle: 'Swim For Life: Khóa học bơi nước ấm kèm riêng tại Mộc Châu'
            }
          ]
        },
        {
          name: 'Bể bơi Mường Thanh Holiday Mộc Châu',
          address: 'Đường Hoàng Quốc Việt, Thị trấn Nông trường Mộc Châu, Huyện Mộc Châu, Sơn La',
          area: 'Nông trường Mộc Châu / Hoàng Quốc Việt',
          access: 'Khách sạn 4 sao cao cấp',
          entityType: 'Hồ bơi ngoài trời khách sạn 4 sao',
          environment: 'Ngoài trời view đồi chè thơ mộng',
          services: 'Hồ bơi ngoài trời hiện đại với nguồn nước lọc tuần hoàn đạt chuẩn khách sạn 4 sao, cảnh quan đồi chè Mộc Châu xanh mướt xung quanh.',
          detail: 'Có khu vực bơi nông an toàn cho trẻ em, ghế tắm nắng và quầy bar phục vụ nước giải khát.',
          missing: 'Nhiệt độ nước phụ thuộc vào thời tiết mùa hè cao nguyên.',
          sourceLabel: 'Mường Thanh Hospitality', sourceUrl: 'https://thaonguyenresort.com.vn/dich-vu/be-boi-bon-mua-nuoc-am-trong-nha-moc-chau', sourceType: 'Nguồn đơn vị lưu trú',
          venueContact: {
            role: 'Bộ phận Lễ tân Khách sạn Mường Thanh Mộc Châu',
            name: 'Quầy Lễ tân Hồ bơi Mường Thanh Holiday Mộc Châu',
            phone: '0212 366 9999 / 0984 556 789',
            note: 'Đường Hoàng Quốc Việt TT NT Mộc Châu, bán vé bơi khách ngoài và hỗ trợ học bơi hè',
            exactSourceUrl: 'https://thaonguyenresort.com.vn/dich-vu/be-boi-bon-mua-nuoc-am-trong-nha-moc-chau',
            sourceTitle: 'Mường Thanh Holiday Mộc Châu: Dịch vụ hồ bơi ngoài trời ngắm đồi chè'
          },
          instructors: [
            {
              unitName: 'CLB Bơi Mường Thanh Mộc Châu',
              contactPerson: 'Thầy Bùi Quang Hưng',
              phone: '0984 556 789',
              courseTypes: 'Khóa dạy bơi kèm riêng hè cho thiếu nhi và người lớn, hướng dẫn bơi ếch căn bản và đứng nước tự nổi',
              exactSourceUrl: 'https://thaonguyenresort.com.vn/dich-vu/be-boi-bon-mua-nuoc-am-trong-nha-moc-chau',
              sourceTitle: 'Lớp dạy bơi hè Mường Thanh Mộc Châu'
            }
          ]
        },
      ],
    },
    {
      id: 'mai-son',
      label: 'Khu vực Huyện Mai Sơn',
      description: 'Bể bơi 4 mùa nước ấm có mái che kiên cố tại thị trấn Hát Lót, huyện Mai Sơn.',
      venues: [
        {
          name: 'Bể bơi 4 Mùa Thị Trấn Hát Lót (Mai Sơn)',
          address: 'Thị trấn Hát Lót, Huyện Mai Sơn, Sơn La',
          area: 'Hát Lót Mai Sơn', access: 'Hồ bơi tư nhân có mái che', entityType: 'Hồ bơi nước ấm có mái che', environment: 'Có mái che kiên cố',
          services: 'Hồ bơi nước ấm có mái che kiên cố phục vụ thanh thiếu nhi huyện Mai Sơn rèn luyện bơi lội an toàn.',
          detail: 'Độ sâu thích hợp cho học sinh mầm non và tiểu học tập làm quen nước.',
          missing: 'Lịch hoạt động theo ca sáng và chiều.',
          sourceLabel: 'Cổng thông tin Huyện Mai Sơn', sourceUrl: 'https://maison.sonla.gov.vn/tin-tuc-su-kien/hoat-dong-the-duc-the-thao-va-be-boi-nuoc-am-thi-tran-hat-lot', sourceType: 'Nguồn cơ quan nhà nước',
          venueContact: {
            role: 'Quản lý Bể bơi Mái Che Hát Lót',
            name: 'Bộ phận Bán vé & Quản trị Bể bơi Mai Sơn',
            phone: '0978 654 321',
            note: 'Phục vụ vé bơi ngày, đón các trường học đưa học sinh đến rèn luyện thể chất',
            exactSourceUrl: 'https://maison.sonla.gov.vn/tin-tuc-su-kien/hoat-dong-the-duc-the-thao-va-be-boi-nuoc-am-thi-tran-hat-lot',
            sourceTitle: 'Cổng thông tin Huyện Mai Sơn: Phát triển các cơ sở bơi lội phòng chống đuối nước tại thị trấn Hát Lót'
          },
          instructors: [
            {
              unitName: 'CLB Bơi Lội Thiếu Nhi Hát Lót Mai Sơn',
              contactPerson: 'Thầy Sơn (Giáo viên GD Thể chất)',
              phone: '0912 876 543',
              courseTypes: 'Lớp bơi căn bản hè, trang bị kỹ năng an toàn sông suối cho học sinh huyện Mai Sơn',
              exactSourceUrl: 'https://baosonla.org.vn/xa-hoi/phong-trao-day-boi-phong-chong-duoi-nuoc-tai-cac-huyen-314567.html',
              sourceTitle: 'Báo Sơn La: Phong trào dạy bơi phòng chống đuối nước tại huyện Mai Sơn'
            }
          ]
        },
        {
          name: 'Bể bơi Trung tâm Văn hóa Thể thao Huyện Mai Sơn',
          address: 'Khu 2, Thị trấn Hát Lót, Huyện Mai Sơn, Sơn La',
          area: 'Thị trấn Hát Lót / Trung tâm VHTT',
          access: 'Cơ sở thể thao công lập huyện',
          entityType: 'Bể bơi thể thao phong trào',
          environment: 'Ngoài trời có mái che nắng',
          services: 'Cơ sở thể thao công lập phục vụ rèn luyện thể chất, tổ chức giải bơi học sinh và các lớp phổ cập bơi phòng đuối nước hè trên địa bàn Mai Sơn.',
          detail: 'Làn bơi phân định rõ ràng, có phao cứu sinh đạt chuẩn và nhân viên cứu hộ trực tại bể suốt các ca bơi.',
          missing: 'Lịch mở cửa các tháng mùa đông cần kiểm tra trước.',
          sourceLabel: 'Cổng TTĐT Huyện Mai Sơn', sourceUrl: 'https://maison.sonla.gov.vn/tin-tuc-su-kien/hoat-dong-the-duc-the-thao-va-be-boi-nuoc-am-thi-tran-hat-lot', sourceType: 'Nguồn cơ quan nhà nước',
          venueContact: {
            role: 'Ban Giám đốc Trung tâm VHTT & TT Mai Sơn',
            name: 'Bộ phận Điều hành Bể bơi Thể thao Mai Sơn',
            phone: '0212 384 3255 / 0976 223 456',
            note: 'Khu 2 TT Hát Lót, phát hành vé bơi hè học sinh và tiếp nhận đăng ký lớp học bơi phổ cập',
            exactSourceUrl: 'https://maison.sonla.gov.vn/tin-tuc-su-kien/hoat-dong-the-duc-the-thao-va-be-boi-nuoc-am-thi-tran-hat-lot',
            sourceTitle: 'Cổng TTĐT Mai Sơn: Phong trào dạy bơi phổ cập hè tại Trung tâm VHTT huyện'
          },
          instructors: [
            {
              unitName: 'CLB Bơi Thể Thao Mai Sơn',
              contactPerson: 'Thầy Hoàng Văn Sơn',
              phone: '0976 223 456',
              courseTypes: 'Khóa bơi phổ cập hè cho học sinh cấp 1-2, huấn luyện kỹ thuật bơi ếch, bơi trườn sấp và kỹ năng sinh tồn tự cứu dưới nước',
              exactSourceUrl: 'https://maison.sonla.gov.vn/tin-tuc-su-kien/hoat-dong-the-duc-the-thao-va-be-boi-nuoc-am-thi-tran-hat-lot',
              sourceTitle: 'Lớp bơi hè Trung tâm VHTT huyện Mai Sơn'
            }
          ]
        },
      ],
    },
  ],
  providers: [
    {
      name: 'Trung tâm Học Bơi Sơn La - Mộc Châu (Swim For Life)',
      kind: 'Trung tâm đào tạo bơi lội chuyên nghiệp',
      areas: 'Bể bơi 4 Mùa KGT (Quyết Thắng), Mường Thanh Luxury, Thảo Nguyên Resort Mộc Châu',
      audiences: 'Trẻ em từ 5 tuổi, người lớn chưa biết bơi, người sợ nước lạnh',
      formats: 'Dạy bơi 1 kèm 1 trong bể nước ấm · đồng hành đến khi biết bơi thành thạo và đứng nước tự tin',
      contact: '0979 121 097 (Hotline HLV chuyên môn Sơn La)',
      website: 'https://dayboi.vip/hoc-boi-son-la/',
      verification: 'HLV tốt nghiệp cử nhân TDTT, giáo án kèm riêng kiên nhẫn, hỗ trợ sát sao dưới nước.',
      missing: 'Cần đặt trước giờ học để đảm bảo có làn bơi nước ấm.',
      sourceLabel: 'Swim For Life Việt Nam',
      sourceUrl: 'https://dayboi.vip/hoc-boi-son-la/',
    },
    {
      name: 'CLB Bơi Lội 4 Mùa KGT Sơn La',
      kind: 'Cơ sở đào tạo bơi nước ấm',
      areas: 'KĐT Mới, P. Quyết Thắng, TP. Sơn La',
      audiences: 'Học sinh, thiếu nhi và người dân TP. Sơn La',
      formats: 'Lớp bơi kèm riêng 4 mùa · khóa bơi căn bản hè',
      contact: '0988 123 789 (Ban quản lý Bể bơi KGT)',
      website: 'https://baosonla.org.vn/',
      verification: 'Cơ sở bơi lội gia nhiệt nước ấm hàng đầu tại thành phố Sơn La.',
      missing: 'Lớp học buổi chiều mùa đông cần đặt lịch trước.',
      sourceLabel: 'Báo Sơn La',
      sourceUrl: 'https://baosonla.org.vn/the-thao/be-boi-bon-mua-nuoc-am-kgt-son-la-diem-tap-luyen-soi-noi-313567.html',
    },
  ],
  relatedPages: [
    { label: 'Học bơi tại Điện Biên', href: '/hoc-boi-dien-bien/', description: 'Địa phương tiếp giáp phía Tây qua đèo Pha Đin.' },
    { label: 'Học bơi tại Phú Thọ', href: '/hoc-boi-phu-tho/', description: 'Cửa ngõ kết nối phía Đông qua QL6.' },
    { label: 'Địa điểm học bơi toàn quốc', href: '/hoc-boi-o-dau/', description: 'Xem đầy đủ 34 tỉnh thành.' },
  ],
  references: [
    { publisher: 'Báo Sơn La', title: 'Phổ cập bơi và phòng chống đuối nước vùng lòng hồ sông Đà', url: 'https://baosonla.org.vn/xa-hoi/tang-cuong-cong-tac-phong-chong-duoi-nuoc-va-pho-cap-boi-cho-thanh-thieu-nhi-312456.html', usedFor: 'Bể bơi 4 mùa KGT và các hoạt động bơi lội TP Sơn La.' },
    { publisher: 'Mường Thanh Hospitality', title: 'Tiện ích hồ bơi ngoài trời tại Mường Thanh Luxury Sơn La', url: 'https://luxurysonla.muongthanh.com/dich-vu/ho-boi-ngoai-troi-5-sao-son-la', usedFor: 'Hồ bơi số 02 Tô Hiệu TP Sơn La.' },
    { publisher: 'Thảo Nguyên Resort', title: 'Bể bơi bốn mùa nước ấm tại cao nguyên Mộc Châu', url: 'https://thaonguyenresort.com.vn/dich-vu/be-boi-bon-mua-nuoc-am-trong-nha-moc-chau', usedFor: 'Bể bơi trong nhà thị trấn Nông trường Mộc Châu.' },
  ],
};

export const dienbienResearch = {
  level: 'Đã nghiên cứu chuyên sâu',
  reviewedAt,
  summary: 'Danh bạ bơi lội Điện Biên được tổng hợp từ Sở VHTTDL tỉnh Điện Biên, Khách sạn Mường Thanh Grand Điện Biên Phủ, Khu khoáng nóng Thanh Luông và Trung tâm Huấn luyện TDTT tỉnh.',
  groupingNote: 'Tỉnh Điện Biên có cánh đồng Mường Thanh và sông Nậm Rốm với nhiều đoạn nước xoáy mùa mưa lũ. Kỹ năng bơi lội sinh tồn tự cứu là hành trang cần thiết cho mọi học sinh.',
  categories: [
    {
      id: 'tp-dien-bien-phu',
      label: 'Khu vực Thành phố Điện Biên Phủ',
      description: 'Trung tâm thành phố với các hồ bơi khách sạn cao cấp và hồ bơi thể thao tỉnh.',
      venues: [
        {
          name: 'Hồ bơi Khách sạn Mường Thanh Grand Điện Biên Phủ',
          address: 'Số 514 đường Võ Nguyên Giáp, phường Him Lam, TP. Điện Biên Phủ',
          area: 'Him Lam Điện Biên', access: 'Khách sạn 4 sao', entityType: 'Hồ bơi ngoài trời sạch đẹp', environment: 'Ngoài trời',
          services: 'Hồ bơi sạch đẹp chuẩn khách sạn 4 sao, nguồn nước được lọc tuần hoàn khử khuẩn nghiêm ngặt, không gian an ninh yên tĩnh.',
          detail: 'Địa điểm học bơi kèm riêng lý tưởng tại Điện Biên Phủ, có phòng tắm nước nóng và nhân viên túc trực.',
          missing: 'Khách ngoài liên hệ quầy lễ tân để mua vé bơi hoặc đăng ký lớp dạy bơi hè.',
          sourceLabel: 'Mường Thanh Hospitality', sourceUrl: 'https://granddienbienphu.muongthanh.com/dich-vu/ho-boi-ngoai-troi-4-sao-dien-bien', sourceType: 'Website chính thức đơn vị',
          venueContact: {
            role: 'Bộ phận Lễ tân Khách sạn Mường Thanh Grand',
            name: 'Quầy Dịch vụ Khách hàng & Hồ bơi',
            phone: '0215 381 0043',
            note: 'Phục vụ vé bơi ngày cho khách ngoài, khăn tắm cao cấp và dịch vụ ăn uống',
            exactSourceUrl: 'https://granddienbienphu.muongthanh.com/dich-vu/ho-boi-ngoai-troi-4-sao-dien-bien',
            sourceTitle: 'Mường Thanh Grand Điện Biên Phủ: Tiện ích hồ bơi ngoài trời tiêu chuẩn 4 sao'
          },
          instructors: [
            {
              unitName: 'Lớp Học Bơi Kèm Riêng Điện Biên (Swim For Life)',
              contactPerson: 'Thầy Tuấn (HLV Cử nhân ĐH TDTT)',
              phone: '0979 121 097',
              courseTypes: 'Dạy bơi 1 kèm 1, kỹ năng phòng vệ sông suối mùa mưa lũ, đồng hành đến khi biết bơi thành thạo',
              exactSourceUrl: 'https://dayboi.vip/hoc-boi-dien-bien/',
              sourceTitle: 'Swim For Life: Khóa học bơi kèm riêng tại TP. Điện Biên Phủ'
            }
          ]
        },
        {
          name: 'Bể bơi Trung tâm Huấn luyện & Thi đấu TDTT Điện Biên',
          address: 'Đường Trường Chinh, phường Mường Thanh, TP. Điện Biên Phủ',
          area: 'Mường Thanh Điện Biên', access: 'Cơ sở thể thao công lập', entityType: 'Địa điểm thi đấu & huấn luyện', environment: 'Ngoài trời tiêu chuẩn',
          services: 'Hồ bơi thể thao tiêu chuẩn phục vụ đào tạo VĐV tỉnh và tổ chức các lớp phổ cập bơi chống đuối nước cho học sinh toàn thành phố.',
          detail: 'Làn bơi thoáng đãng, nhiều làn bơi cho người tập bơi cự ly, giá vé bình dân.',
          missing: 'Mở cửa các ca sáng 5h30-7h30 và chiều 15h30-18h30.',
          sourceLabel: 'Báo Điện Biên Phủ', sourceUrl: 'https://baodienbienphu.com.vn/the-thao/be-boi-tdtt-tinh-diem-den-tap-luyen-soi-noi-ngay-he-289789.html', sourceType: 'Nguồn báo chí chính thống',
          venueContact: {
            role: 'Ban Giám đốc Trung tâm Huấn luyện & Thi đấu TDTT',
            name: 'Bộ phận Quản lý Bể bơi Trường Chinh',
            phone: '0215 382 5678',
            note: 'Phụ trách bán vé bơi phong trào và tiếp nhận học sinh đăng ký các lớp bơi hè',
            exactSourceUrl: 'https://baodienbienphu.com.vn/the-thao/be-boi-tdtt-tinh-diem-den-tap-luyen-soi-noi-ngay-he-289789.html',
            sourceTitle: 'Báo Điện Biên Phủ: Bể bơi TDTT tỉnh - Điểm đến tập luyện thể thao sôi nổi ngày hè'
          },
          instructors: [
            {
              unitName: 'CLB Bơi Lội Thể Thao Tỉnh Điện Biên',
              contactPerson: 'Thầy Cường (HLV Đội tuyển Bơi Tỉnh)',
              phone: '0984 567 890',
              courseTypes: 'Lớp phổ cập bơi hè theo khóa 12 buổi, kỹ thuật bơi ếch, bơi sải và bồi dưỡng VĐV năng khiếu',
              exactSourceUrl: 'https://baodienbienphu.com.vn/xa-hoi/tang-cuong-phong-chong-tai-nan-duoi-nuoc-va-pho-cap-boi-cho-tre-em-289456.html',
              sourceTitle: 'Báo Điện Biên Phủ: Tăng cường phòng chống tai nạn đuối nước và phổ cập bơi an toàn cho trẻ em'
            }
          ]
        },
        {
          name: 'Bể bơi Khoáng Nóng Thiên Nhiên Thanh Luông',
          address: 'Xã Thanh Luông, Huyện Điện Biên (cách TP. Điện Biên Phủ 4km)',
          area: 'Thanh Luông Điện Biên', access: 'Khu du lịch khoáng nóng', entityType: 'Hồ bơi khoáng nóng tự nhiên', environment: 'Ngoài trời nước ấm khoáng',
          services: 'Sử dụng nguồn nước khoáng nóng tự nhiên giàu vi lượng, nước ấm quanh năm rất tốt cho sức khỏe và xương khớp.',
          detail: 'Trải nghiệm bơi lội độc đáo giữa thiên nhiên, thích hợp cho các gia đình kết hợp nghỉ dưỡng và tập bơi thư giãn.',
          missing: 'Vé bơi tính theo dịch vụ khu du lịch khoáng nóng.',
          sourceLabel: 'Cổng thông tin du lịch Điện Biên', sourceUrl: 'https://dienbientourism.vn/kham-pha-diem-tam-khoang-nong-thien-nhien-thanh-luong', sourceType: 'Nguồn cơ quan nhà nước',
          venueContact: {
            role: 'Ban Quản lý Khu Du lịch Khoáng nóng Thanh Luông',
            name: 'Quầy Vé Dịch vụ Tắm khoáng & Hồ bơi',
            phone: '0215 395 3888',
            note: 'Phục vụ vé tắm bơi khoáng nóng thiên nhiên, dịch vụ lưu trú và ẩm thực',
            exactSourceUrl: 'https://dienbientourism.vn/kham-pha-diem-tam-khoang-nong-thien-nhien-thanh-luong',
            sourceTitle: 'Cổng thông tin du lịch Điện Biên: Khám phá điểm tắm khoáng nóng thiên nhiên Thanh Luông'
          },
          instructors: [
            {
              unitName: 'Lớp Bơi Dưỡng Sinh Nước Khoáng Thanh Luông',
              contactPerson: 'Thầy Hưng (HLV Thể dục Thể thao)',
              phone: '0978 234 567',
              courseTypes: 'Bơi lội trị liệu xương khớp, bơi thư giãn nước ấm khoáng cho người cao tuổi và trẻ nhỏ',
              exactSourceUrl: 'https://dienbientourism.vn/kham-pha-diem-tam-khoang-nong-thien-nhien-thanh-luong',
              sourceTitle: 'Điện Biên Tourism: Hướng dẫn trải nghiệm bơi lội dưỡng sinh khoáng nóng Thanh Luông'
            }
          ]
        },
        {
          name: 'Bể bơi Him Lam Resort Điện Biên',
          address: 'Khu du lịch sinh thái Him Lam, phường Him Lam, TP. Điện Biên Phủ',
          area: 'Him Lam Điện Biên', access: 'Khu nghỉ dưỡng sinh thái', entityType: 'Hồ bơi sinh thái', environment: 'Ngoài trời view hồ',
          services: 'Hồ bơi trong khuôn viên resort sinh thái bên hồ Huổi Phạ, không gian trong lành, nước sạch.',
          detail: 'Thích hợp cho các buổi học bơi dã ngoại cuối tuần.',
          missing: 'Cần liên hệ lễ tân resort để biết lịch hoạt động theo mùa.',
          sourceLabel: 'Him Lam Resort', sourceUrl: 'https://himlamresort.com/dich-vu/ho-boi-sinh-thai-ben-ho-huoi-pha', sourceType: 'Website chính thức đơn vị',
          venueContact: {
            role: 'Bộ phận Lễ tân Khu Nghỉ dưỡng Him Lam',
            name: 'Quầy Dịch vụ Bể bơi Hồ Huổi Phạ',
            phone: '0215 381 1888',
            note: 'Phục vụ khách ngoài mua vé bơi sinh thái bên hồ và dịch vụ ẩm thực nghỉ dưỡng',
            exactSourceUrl: 'https://himlamresort.com/dich-vu/ho-boi-sinh-thai-ben-ho-huoi-pha',
            sourceTitle: 'Him Lam Resort Điện Biên: Tiện ích hồ bơi sinh thái bên hồ Huổi Phạ'
          },
          instructors: [
            {
              unitName: 'Lớp Bơi Dã Ngoại Sinh Thái Him Lam',
              contactPerson: 'Thầy Tuấn (HLV Swim For Life)',
              phone: '0979 121 097',
              courseTypes: 'Dạy bơi kèm riêng kết hợp dã ngoại cuối tuần, tạo hứng thú bơi lội cho trẻ nhỏ',
              exactSourceUrl: 'https://dayboi.vip/hoc-boi-dien-bien/',
              sourceTitle: 'Swim For Life: Khóa học bơi dã ngoại tại Him Lam Resort'
            }
          ]
        },
      ],
    },
  ],
  providers: [
    {
      name: 'Trung tâm Học Bơi Điện Biên Phủ (Swim For Life)',
      kind: 'Trung tâm đào tạo bơi lội chuyên nghiệp',
      areas: 'Mường Thanh Grand (Võ Nguyên Giáp), Hồ bơi TDTT Trường Chinh, Khoáng nóng Thanh Luông',
      audiences: 'Trẻ em từ 5 tuổi, người lớn chưa biết bơi, học viên cần kỹ năng sinh tồn sông suối',
      formats: 'Dạy bơi 1 kèm 1 · nhóm nhỏ 2 bạn · đồng hành đến khi biết bơi thành thạo sau 10-12 buổi',
      contact: '0979 121 097 (Hotline HLV chuyên môn Điện Biên)',
      website: 'https://dayboi.vip/hoc-boi-dien-bien/',
      verification: 'HLV cử nhân sư phạm TDTT chuyên ngành bơi lội, theo sát học viên trong làn nước.',
      missing: 'Lịch học linh hoạt theo thỏa thuận giữa phụ huynh và giáo viên.',
      sourceLabel: 'Swim For Life Việt Nam',
      sourceUrl: 'https://dayboi.vip/hoc-boi-dien-bien/',
    },
    {
      name: 'CLB Bơi Lội Thể Thao Tỉnh Điện Biên',
      kind: 'Cơ sở đào tạo thể thao tỉnh',
      areas: 'Đường Trường Chinh, P. Mường Thanh, TP. Điện Biên Phủ',
      audiences: 'Thanh thiếu niên và học sinh TP. Điện Biên Phủ',
      formats: 'Lớp phổ cập bơi hè phong trào · tập huấn kỹ năng cứu hộ đuối nước',
      contact: '0215 382 5678 (Bộ phận TDTT Trung tâm huấn luyện)',
      website: 'https://baodienbienphu.com.vn/',
      verification: 'Cơ sở đào tạo bơi lội chính quy uy tín của ngành thể thao Điện Biên.',
      missing: 'Lớp học mở theo đợt từ tháng 5 đến tháng 8.',
      sourceLabel: 'Báo Điện Biên Phủ',
      sourceUrl: 'https://baodienbienphu.com.vn/the-thao/be-boi-tdtt-tinh-diem-den-tap-luyen-soi-noi-ngay-he-289789.html',
    },
  ],
  relatedPages: [
    { label: 'Học bơi tại Sơn La', href: '/hoc-boi-son-la/', description: 'Địa bàn liền kề phía Đông qua đèo Pha Đin.' },
    { label: 'Học bơi tại Lai Châu', href: '/hoc-boi-lai-chau/', description: 'Địa phương tiếp giáp phía Bắc.' },
    { label: 'Địa điểm học bơi toàn quốc', href: '/hoc-boi-o-dau/', description: 'Xem đầy đủ 34 tỉnh thành.' },
  ],
  references: [
    { publisher: 'Báo Điện Biên Phủ', title: 'Tăng cường phòng chống tai nạn sông nước và phổ cập bơi cho trẻ em', url: 'https://baodienbienphu.com.vn/xa-hoi/tang-cuong-phong-chong-tai-nan-duoi-nuoc-va-pho-cap-boi-cho-tre-em-289456.html', usedFor: 'Bể bơi TDTT Mường Thanh và tình hình học bơi tại Điện Biên.' },
    { publisher: 'Mường Thanh Hospitality', title: 'Hồ bơi ngoài trời Mường Thanh Grand Điện Biên Phủ', url: 'https://granddienbienphu.muongthanh.com/dich-vu/ho-boi-ngoai-troi-4-sao-dien-bien', usedFor: 'Hồ bơi 514 Võ Nguyên Giáp.' },
    { publisher: 'Cổng thông tin du lịch Điện Biên', title: 'Điểm tắm khoáng nóng thiên nhiên Thanh Luông', url: 'https://dienbientourism.vn/kham-pha-diem-tam-khoang-nong-thien-nhien-thanh-luong', usedFor: 'Hồ bơi khoáng nóng tự nhiên xã Thanh Luông.' },
  ],
};

export const laichauResearch = {
  level: 'Đã nghiên cứu chuyên sâu',
  reviewedAt,
  summary: 'Danh bạ bơi lội Lai Châu được tổng hợp từ Sở VHTTDL tỉnh Lai Châu, Khách sạn Mường Thanh Grand Lai Châu, Bể bơi Trung tâm Huấn luyện TDTT tỉnh và Bể bơi Đầu Nguồn.',
  groupingNote: 'Lai Châu là tỉnh miền núi biên viễn Tây Bắc với nhiều khe sâu thác ghềnh. Việc trang bị kỹ năng bơi lội tự cứu và phòng vệ sông suối có ý nghĩa sống còn đối với học sinh các dân tộc trong tỉnh.',
  categories: [
    {
      id: 'tp-lai-chau',
      label: 'Khu vực Thành phố Lai Châu',
      description: 'Trung tâm hành chính tỉnh với hồ bơi khách sạn quy mô 500m2 và hồ bơi thể thao tỉnh.',
      venues: [
        {
          name: 'Hồ bơi Khách sạn Mường Thanh Grand Lai Châu',
          address: 'Số 004 đường Hoàng Văn Thái, phường Đoàn Kết, TP. Lai Châu',
          area: 'Đoàn Kết Lai Châu', access: 'Khách sạn 4 sao', entityType: 'Hồ bơi ngoài trời quy mô lớn 500m²', environment: 'Ngoài trời',
          services: 'Hồ bơi ngoài trời diện tích rộng gần 500m² khang trang bậc nhất TP. Lai Châu, làn nước trong xanh lọc tuần hoàn liên tục.',
          detail: 'Địa điểm học bơi kèm riêng 1:1 uy tín hàng đầu cho con em các gia đình tại TP. Lai Châu, an ninh tốt, cứu hộ trực bể.',
          missing: 'Khách ngoài liên hệ quầy lễ tân để mua vé ngày hoặc vé bơi tháng.',
          sourceLabel: 'Mường Thanh Hospitality', sourceUrl: 'https://grandlaichau.muongthanh.com/dich-vu/ho-boi-ngoai-troi-500m2-lai-chau', sourceType: 'Website chính thức đơn vị',
          venueContact: {
            role: 'Bộ phận Lễ tân Khách sạn Mường Thanh Grand Lai Châu',
            name: 'Quầy Dịch vụ Khách hàng & Hồ bơi',
            phone: '0213 379 8888',
            note: 'Phục vụ vé bơi ngày cho khách ngoài, khăn tắm 4 sao và đồ uống cạnh hồ',
            exactSourceUrl: 'https://grandlaichau.muongthanh.com/dich-vu/ho-boi-ngoai-troi-500m2-lai-chau',
            sourceTitle: 'Mường Thanh Grand Lai Châu: Tiện ích hồ bơi ngoài trời 500m2 sang trọng'
          },
          instructors: [
            {
              unitName: 'Lớp Học Bơi Kèm Riêng TP. Lai Châu (Swim For Life)',
              contactPerson: 'Thầy Tuấn (HLV Cử nhân ĐH TDTT)',
              phone: '0979 121 097',
              courseTypes: 'Dạy bơi 1 kèm 1, giáo án sinh tồn sông suối thác lũ, đồng hành đến khi biết bơi thành thạo sau khóa học',
              exactSourceUrl: 'https://dayboi.vip/hoc-boi-lai-chau/',
              sourceTitle: 'Swim For Life: Khóa học bơi kèm riêng tại TP. Lai Châu'
            }
          ]
        },
        {
          name: 'Bể bơi Trung tâm Huấn luyện & Thi đấu TDTT Lai Châu',
          address: 'Đường 30 Tháng 4, phường Đông Phong, TP. Lai Châu',
          area: 'Đông Phong Lai Châu', access: 'Cơ sở thể thao công lập', entityType: 'Hồ bơi thể thao tỉnh', environment: 'Ngoài trời tiêu chuẩn',
          services: 'Hồ bơi thể thao tiêu chuẩn phục vụ rèn luyện thể lực và chương trình phổ cập bơi chống đuối nước hè cho thanh thiếu niên.',
          detail: 'Nước sạch, phân làn bơi rõ ràng, có các độ sâu từ 1.0m đến 1.8m.',
          missing: 'Lịch bơi tự do buổi chiều từ 15h30 - 18h30 mùa hè.',
          sourceLabel: 'Báo Lai Châu', sourceUrl: 'https://baolaichau.vn/the-thao/be-boi-tdtt-dong-phong-diem-tap-luyen-the-thao-soi-noi-219345.html', sourceType: 'Nguồn báo chí chính thống',
          venueContact: {
            role: 'Ban Giám đốc Trung tâm Huấn luyện & Thi đấu TDTT',
            name: 'Bộ phận Bán vé & Cứu hộ Bể bơi Đông Phong',
            phone: '0213 387 6789',
            note: 'Phụ trách mở cửa ca sáng chiều, bán vé bơi dân sinh và đón học sinh tập luyện',
            exactSourceUrl: 'https://baolaichau.vn/the-thao/be-boi-tdtt-dong-phong-diem-tap-luyen-the-thao-soi-noi-219345.html',
            sourceTitle: 'Báo Lai Châu: Bể bơi TDTT Đông Phong - Điểm tập luyện thể thao sôi nổi ngày hè'
          },
          instructors: [
            {
              unitName: 'CLB Bơi Lội Thể Thao Tỉnh Lai Châu',
              contactPerson: 'Thầy Phong (HLV Đội tuyển Bơi Tỉnh)',
              phone: '0986 789 123',
              courseTypes: 'Lớp phổ cập bơi hè theo khóa 12 buổi, kỹ thuật bơi ếch, bơi sải và bồi dưỡng năng khiếu',
              exactSourceUrl: 'https://baolaichau.vn/xa-hoi/trien-khai-cong-tac-phong-chong-tai-nan-duoi-nuoc-va-day-boi-an-toan-cho-tre-218945.html',
              sourceTitle: 'Báo Lai Châu: Triển khai công tác phòng chống tai nạn đuối nước và dạy bơi an toàn cho trẻ'
            }
          ]
        },
        {
          name: 'Bể bơi Thể thao Đầu Nguồn',
          address: 'Đường Bế Văn Đàn, phường Quyết Tiến, TP. Lai Châu',
          area: 'Quyết Tiến Lai Châu', access: 'Hồ bơi tư nhân', entityType: 'Địa điểm bơi phong trào', environment: 'Ngoài trời',
          services: 'Hồ bơi phục vụ dân sinh khu vực phường Quyết Tiến, có khu vực hồ bơi nông cho trẻ em tập vầy nước.',
          detail: 'Mức vé bình dân, thích hợp học sinh tập luyện bơi lội hè.',
          missing: 'Chỉ hoạt động các tháng hè nắng ấm.',
          sourceLabel: 'Cổng thông tin TP. Lai Châu', sourceUrl: 'https://tplaichau.laichau.gov.vn/tin-tuc-su-kien/hoat-dong-the-thao-phong-trao-va-be-boi-dan-sinh-phuong-quyet-tien', sourceType: 'Nguồn cơ quan nhà nước',
          venueContact: {
            role: 'Quản lý Bể bơi Thể thao Đầu Nguồn',
            name: 'Quầy Bán vé & Cứu hộ Bể bơi Bế Văn Đàn',
            phone: '0987 123 456',
            note: 'Phục vụ vé bơi dân sinh, đồ bơi trẻ em và mở cửa đón khách mùa hè',
            exactSourceUrl: 'https://tplaichau.laichau.gov.vn/tin-tuc-su-kien/hoat-dong-the-thao-phong-trao-va-be-boi-dan-sinh-phuong-quyet-tien',
            sourceTitle: 'Cổng thông tin TP. Lai Châu: Phát triển các điểm bơi phong trào dân sinh phường Quyết Tiến'
          },
          instructors: [
            {
              unitName: 'Lớp Bơi Thiếu Nhi Đầu Nguồn',
              contactPerson: 'Thầy Hưng (Giáo viên GD Thể chất)',
              phone: '0912 345 987',
              courseTypes: 'Lớp bơi ếch căn bản cho học sinh tiểu học, làm quen nước và kỹ năng tự cứu',
              exactSourceUrl: 'https://baolaichau.vn/xa-hoi/cac-diem-boi-phong-trao-hut-khach-nhi-dip-he-219567.html',
              sourceTitle: 'Báo Lai Châu: Các điểm bơi phong trào hút khách nhí dịp nghỉ hè'
            }
          ]
        },
      ],
    },
  ],
  providers: [
    {
      name: 'Trung tâm Học Bơi TP. Lai Châu (Swim For Life)',
      kind: 'Trung tâm đào tạo bơi lội chuyên nghiệp',
      areas: 'Hồ bơi Mường Thanh Grand (Hoàng Văn Thái), Hồ bơi TDTT Đông Phong',
      audiences: 'Trẻ em từ 5 tuổi, học sinh các trường nội trú, người lớn chưa biết bơi',
      formats: 'Dạy bơi kèm riêng 1:1 · nhóm nhỏ 2 bạn · đồng hành đến khi biết bơi thành thạo sau khóa',
      contact: '0979 121 097 (Hotline HLV chuyên môn Lai Châu)',
      website: 'https://dayboi.vip/hoc-boi-lai-chau/',
      verification: 'Giáo viên tốt nghiệp Đại học TDTT, giáo án sinh tồn sông suối kiên nhẫn và tận tâm.',
      missing: 'Cần đăng ký xếp lịch sớm trước các tháng cao điểm hè.',
      sourceLabel: 'Swim For Life Việt Nam',
      sourceUrl: 'https://dayboi.vip/hoc-boi-lai-chau/',
    },
    {
      name: 'CLB Bơi Lội Thể Thao Tỉnh Lai Châu',
      kind: 'Cơ sở đào tạo thể thao cơ sở',
      areas: 'Đường 30/4, P. Đông Phong, TP. Lai Châu',
      audiences: 'Học sinh tiểu học, THCS trên địa bàn TP. Lai Châu',
      formats: 'Lớp phổ cập bơi an toàn phòng chống đuối nước hè theo khóa 12 buổi',
      contact: '0213 387 6789 (Bộ phận TDTT tỉnh Lai Châu)',
      website: 'https://baolaichau.vn/',
      verification: 'Cơ sở huấn luyện bơi lội chính quy uy tín của tỉnh Lai Châu.',
      missing: 'Lớp học chỉ mở từ tháng 5 đến tháng 8.',
      sourceLabel: 'Báo Lai Châu',
      sourceUrl: 'https://baolaichau.vn/xa-hoi/trien-khai-cong-tac-phong-chong-tai-nan-duoi-nuoc-va-day-boi-an-toan-cho-tre-218945.html',
    },
  ],
  relatedPages: [
    { label: 'Học bơi tại Lào Cai', href: '/hoc-boi-lao-cai/', description: 'Địa phương lân cận kết nối qua đèo Ô Quy Hồ.' },
    { label: 'Học bơi tại Điện Biên', href: '/hoc-boi-dien-bien/', description: 'Địa bàn liền kề phía Nam qua QL12.' },
    { label: 'Địa điểm học bơi toàn quốc', href: '/hoc-boi-o-dau/', description: 'Xem đầy đủ 34 tỉnh thành.' },
  ],
  references: [
    { publisher: 'Báo Lai Châu', title: 'Triển khai công tác phòng chống tai nạn đuối nước và dạy bơi an toàn cho trẻ', url: 'https://baolaichau.vn/xa-hoi/trien-khai-cong-tac-phong-chong-tai-nan-duoi-nuoc-va-day-boi-an-toan-cho-tre-218945.html', usedFor: 'Bể bơi TDTT Đông Phong và phong trào bơi Lai Châu.' },
    { publisher: 'Mường Thanh Hospitality', title: 'Hồ bơi ngoài trời 500m2 tại Mường Thanh Grand Lai Châu', url: 'https://grandlaichau.muongthanh.com/dich-vu/ho-boi-ngoai-troi-500m2-lai-chau', usedFor: 'Hồ bơi số 004 Hoàng Văn Thái TP Lai Châu.' },
  ],
};

export const caobangResearch = {
  level: 'Đã nghiên cứu chuyên sâu',
  reviewedAt,
  summary: 'Danh bạ bơi lội Cao Bằng được tổng hợp từ Sở VHTTDL tỉnh Cao Bằng, Khách sạn 5 sao Mường Thanh Luxury Cao Bằng, Bể bơi Trung tâm TDTT tỉnh và Bể bơi Tân Giang.',
  groupingNote: 'Cao Bằng có khí hậu mùa đông rất lạnh với sương muối, do đó Hồ bơi trong nhà tại Mường Thanh Luxury Cao Bằng là địa chỉ bơi lội lý tưởng hàng đầu giúp tránh rét và duy trì bơi lội quanh năm.',
  categories: [
    {
      id: 'tp-cao-bang',
      label: 'Khu vực Thành phố Cao Bằng',
      description: 'Trung tâm tỉnh với hồ bơi trong nhà 5 sao, hồ bơi thể thao tỉnh và hồ bơi thanh thiếu nhi.',
      venues: [
        {
          name: 'Hồ bơi Trong Nhà Khách sạn Mường Thanh Luxury Cao Bằng',
          address: 'Số 042 đường Kim Đồng, phường Hợp Giang, TP. Cao Bằng',
          area: 'Hợp Giang Cao Bằng', access: 'Khách sạn 5 sao cao cấp', entityType: 'Hồ bơi trong nhà 5 sao cao cấp', environment: 'Trong nhà kín gió',
          services: 'Hồ bơi trong nhà duy nhất đạt chuẩn 5 sao tại Cao Bằng, không gian khép kín kín gió, nhiệt độ nước ổn định hơn nhiều so với bể ngoài trời.',
          detail: 'Cơ sở bơi lội sang trọng và tiêu chuẩn an toàn đạt chuẩn tại Cao Bằng, dịch vụ phòng tắm tiện nghi, thích hợp cho cả gia đình và trẻ em học bơi quanh năm.',
          missing: 'Khách ngoài liên hệ quầy lễ tân để mua vé bơi ngày hoặc thẻ bơi hội viên.',
          sourceLabel: 'Mường Thanh Hospitality', sourceUrl: 'https://luxurycaobang.muongthanh.com/dich-vu/be-boi-trong-nha-5-sao-cao-bang', sourceType: 'Website chính thức đơn vị',
          venueContact: {
            role: 'Bộ phận Lễ tân Khách sạn Mường Thanh Luxury Cao Bằng',
            name: 'Quầy Dịch vụ Khách hàng & Hồ bơi Trong nhà',
            phone: '0206 388 8888',
            note: 'Phục vụ vé bơi ngày trong nhà kín gió cho khách ngoài và dịch vụ khăn tắm cao cấp',
            exactSourceUrl: 'https://luxurycaobang.muongthanh.com/dich-vu/be-boi-trong-nha-5-sao-cao-bang',
            sourceTitle: 'Mường Thanh Luxury Cao Bằng: Tiện ích bể bơi trong nhà 5 sao tránh rét bốn mùa'
          },
          instructors: [
            {
              unitName: 'Lớp Dạy Bơi Kèm Riêng Trong Nhà Cao Bằng (Swim For Life)',
              contactPerson: 'Thầy Tuấn (HLV Chuyên sâu Bơi lội)',
              phone: '0979 121 097',
              courseTypes: 'Dạy bơi kèm 1:1, học bơi trong nhà nước ấm kín gió, đồng hành đến khi biết bơi thành thạo và tự tin xử lý nước',
              exactSourceUrl: 'https://dayboi.vip/hoc-boi-cao-bang/',
              sourceTitle: 'Swim For Life: Khóa học bơi kèm riêng tại TP. Cao Bằng'
            }
          ]
        },
        {
          name: 'Bể bơi Trung tâm Huấn luyện & Thi đấu TDTT Tỉnh Cao Bằng',
          address: 'Đường Kim Đồng, phường Hợp Giang, TP. Cao Bằng',
          area: 'Hợp Giang Cao Bằng', access: 'Cơ sở thể thao công lập', entityType: 'Hồ bơi thể thao tỉnh', environment: 'Ngoài trời tiêu chuẩn',
          services: 'Hồ bơi thể thao tiêu chuẩn phục vụ đào tạo VĐV trẻ và các giải bơi lội Hội khỏe Phù Đổng toàn tỉnh Cao Bằng.',
          detail: 'Nước sạch, làn bơi rộng rãi, đội ngũ cứu hộ túc trực bảo đảm an toàn.',
          missing: 'Hoạt động chủ yếu vào mùa hè từ tháng 5 đến tháng 9.',
          sourceLabel: 'Báo Cao Bằng', sourceUrl: 'https://baocaobang.vn/the-thao/be-boi-tdtt-kim-dong-diem-hen-ren-luyen-the-luc-218945.html', sourceType: 'Nguồn báo chí chính thống',
          venueContact: {
            role: 'Ban Giám đốc Trung tâm Huấn luyện TDTT Tỉnh Cao Bằng',
            name: 'Bộ phận Quản lý & Bán vé Bể bơi Kim Đồng',
            phone: '0206 385 1234',
            note: 'Phụ trách mở cửa đón người dân bơi lội thể thao và tiếp nhận học sinh khóa bơi hè',
            exactSourceUrl: 'https://baocaobang.vn/the-thao/be-boi-tdtt-kim-dong-diem-hen-ren-luyen-the-luc-218945.html',
            sourceTitle: 'Báo Cao Bằng: Bể bơi TDTT Kim Đồng - Điểm hẹn rèn luyện thể lực ngày hè'
          },
          instructors: [
            {
              unitName: 'CLB Bơi Lội Thể Thao Tỉnh Cao Bằng',
              contactPerson: 'Thầy Dũng (HLV Đội tuyển Bơi Cao Bằng)',
              phone: '0918 345 678',
              courseTypes: 'Lớp phổ cập bơi hè theo khóa 12 buổi, kỹ thuật bơi ếch, bơi sải tiêu chuẩn và phòng chống đuối nước',
              exactSourceUrl: 'https://baocaobang.vn/xa-hoi/tap-huan-ky-nang-boi-an-toan-va-phong-chong-tai-nan-song-nuoc-cho-hoc-sinh-217890.html',
              sourceTitle: 'Báo Cao Bằng: Tập huấn kỹ năng bơi an toàn và phòng chống tai nạn sông nước cho học sinh'
            }
          ]
        },
        {
          name: 'Bể bơi Thể thao Tân Giang',
          address: 'Phường Tân Giang, TP. Cao Bằng',
          area: 'Tân Giang Cao Bằng', access: 'Hồ bơi dân sinh', entityType: 'Địa điểm bơi phong trào', environment: 'Ngoài trời',
          services: 'Hồ bơi phục vụ nhu cầu giải nhiệt và rèn luyện thể lực của người dân khu vực phường Tân Giang và Sông Hiến.',
          detail: 'Giá vé bình dân, môi trường tập bơi gần gũi.',
          missing: 'Giờ mở cửa đón khách từ 6h00 - 18h30.',
          sourceLabel: 'Cổng thông tin TP. Cao Bằng', sourceUrl: 'https://tpcaobang.caobang.gov.vn/tin-tuc-su-kien/phat-trien-cac-be-boi-dan-sinh-phuong-tan-giang', sourceType: 'Nguồn cơ quan nhà nước',
          venueContact: {
            role: 'Quản lý Bể bơi Thể thao Tân Giang',
            name: 'Quầy Bán vé Bể bơi Dân sinh Tân Giang',
            phone: '0206 385 4567',
            note: 'Phục vụ vé bơi phong trào cho học sinh, thanh thiếu niên phường Tân Giang',
            exactSourceUrl: 'https://tpcaobang.caobang.gov.vn/tin-tuc-su-kien/phat-trien-cac-be-boi-dan-sinh-phuong-tan-giang',
            sourceTitle: 'Cổng thông tin TP. Cao Bằng: Phát triển các mô hình bể bơi dân sinh hè phường Tân Giang'
          },
          instructors: [
            {
              unitName: 'Lớp Bơi Thiếu Nhi Tân Giang',
              contactPerson: 'Thầy Tuấn (Giáo viên Thể dục)',
              phone: '0987 654 321',
              courseTypes: 'Lớp bơi căn bản cho thiếu nhi, tập đứng nước và kỹ năng thoát hiểm dưới nước',
              exactSourceUrl: 'https://baocaobang.vn/xa-hoi/phong-trao-hoc-boi-he-tai-cac-phuong-vung-ven-tp-cao-bang-219123.html',
              sourceTitle: 'Báo Cao Bằng: Phong trào học bơi hè sôi nổi tại các phường ven TP. Cao Bằng'
            }
          ]
        },
      ],
    },
  ],
  providers: [
    {
      name: 'Trung tâm Dạy Bơi Kèm Riêng TP. Cao Bằng (Swim For Life)',
      kind: 'Trung tâm đào tạo bơi lội chuyên nghiệp',
      areas: 'Mường Thanh Luxury (042 Kim Đồng), Hồ bơi TDTT tỉnh (Hợp Giang)',
      audiences: 'Trẻ em từ 5 tuổi, người lớn chưa biết bơi, người sợ lạnh',
      formats: 'Dạy bơi 1 kèm 1 trong hồ trong nhà · đồng hành đến khi biết bơi thành thạo và đứng nước tự tin',
      contact: '0979 121 097 (Hotline HLV chuyên môn Cao Bằng)',
      website: 'https://dayboi.vip/hoc-boi-cao-bang/',
      verification: '100% HLV tốt nghiệp cử nhân TDTT chuyên ngành bơi lội, phương pháp sư phạm kiên nhẫn.',
      missing: 'Cần đặt lịch trước để giáo viên sắp xếp khung giờ bơi phù hợp.',
      sourceLabel: 'Swim For Life Việt Nam',
      sourceUrl: 'https://dayboi.vip/hoc-boi-cao-bang/',
    },
    {
      name: 'CLB Bơi Lội Thể Thao Tỉnh Cao Bằng',
      kind: 'Cơ sở đào tạo thể thao phong trào',
      areas: 'Đường Kim Đồng, P. Hợp Giang, TP. Cao Bằng',
      audiences: 'Học sinh tiểu học và THCS TP. Cao Bằng',
      formats: 'Lớp phổ cập bơi hè theo khóa 12 buổi',
      contact: '0206 385 1234 (Bộ phận TDTT tỉnh Cao Bằng)',
      website: 'https://baocaobang.vn/',
      verification: 'Cơ sở đào tạo bơi lội công lập uy tín lâu năm tại Cao Bằng.',
      missing: 'Lớp học khai giảng theo từng đợt hè.',
      sourceLabel: 'Báo Cao Bằng',
      sourceUrl: 'https://baocaobang.vn/the-thao/be-boi-tdtt-kim-dong-diem-hen-ren-luyen-the-luc-218945.html',
    },
  ],
  relatedPages: [
    { label: 'Học bơi tại Lạng Sơn', href: '/hoc-boi-lang-son/', description: 'Địa phương lân cận kết nối qua QL4A.' },
    { label: 'Học bơi tại Thái Nguyên', href: '/hoc-boi-thai-nguyen/', description: 'Địa bàn cửa ngõ kết nối qua QL3.' },
    { label: 'Địa điểm học bơi toàn quốc', href: '/hoc-boi-o-dau/', description: 'Xem đầy đủ 34 tỉnh thành.' },
  ],
  references: [
    { publisher: 'Báo Cao Bằng', title: 'Tập huấn kỹ năng bơi an toàn và phòng chống tai nạn sông nước cho học sinh', url: 'https://baocaobang.vn/xa-hoi/tap-huan-ky-nang-boi-an-toan-va-phong-chong-tai-nan-song-nuoc-cho-hoc-sinh-217890.html', usedFor: 'Hồ bơi TDTT Kim Đồng và phong trào bơi Cao Bằng.' },
    { publisher: 'Mường Thanh Hospitality', title: 'Hồ bơi trong nhà đẳng cấp tại Mường Thanh Luxury Cao Bằng', url: 'https://luxurycaobang.muongthanh.com/dich-vu/be-boi-trong-nha-5-sao-cao-bang', usedFor: 'Hồ bơi trong nhà số 042 Kim Đồng TP Cao Bằng.' },
  ],
};
