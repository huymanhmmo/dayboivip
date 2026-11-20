import type { PoolDetailData } from '../poolDetailTypes';
import { laiThieuLanding } from '../localLandingPages';

const images = '/images/landing/lai-thieu';
const poolImages = '/images/pool-detail';
const address = 'A86, KP Bình Đức, phường Lái Thiêu, TP.HCM';
const poolIllustration = {
  src: `${poolImages}/outdoor-pool-illustration.webp`,
  alt: 'Ảnh minh họa bể bơi ngoài trời với nước xanh, hàng cây và khu vực che nắng',
  caption: 'Bể bơi ngoài trời — ảnh minh họa, không phải ảnh khảo sát Hồ bơi Nhật An.',
  width: 1800, height: 1000, illustration: true,
};

export const nhatAnPool: PoolDetailData = {
  id: 'nhat-an', slug: 'hoc-boi-nhat-an-lai-thieu', name: 'Hồ bơi Nhật An', shortName: 'Nhật An',
  areaName: 'Lái Thiêu', variant: 'public', canonical: 'https://dayboi.vip/hoc-boi-nhat-an-lai-thieu/',
  title: 'Học bơi Hồ bơi Nhật An Lái Thiêu | Lớp trẻ em & người lớn',
  description: 'Tìm hiểu học bơi tại Hồ bơi Nhật An, A86 KP Bình Đức, Lái Thiêu, TP.HCM. Tư vấn lớp trẻ em, người lớn, kèm riêng và học phí cùng thầy Lê Văn Thông: 0986.456.678.',
  updatedAt: '2026-11-20', address,
  oldAddress: 'A86, KP Bình Đức, P. Lái Thiêu, TP. Thuận An, Bình Dương (cũ)',
  category: 'Hồ bơi dịch vụ / tư nhân',
  hotline: '0986.456.678', phoneHref: 'tel:0986456678', zaloHref: 'https://zalo.me/0986456678',
  hero: { ...poolIllustration, mobileSrc: `${poolImages}/outdoor-pool-illustration-mobile.webp` },
  heroDescription: 'Địa điểm học bơi tại khu vực Bình Đức, Lái Thiêu. Cùng tìm lộ trình phù hợp cho trẻ em, người lớn và học viên muốn học kèm riêng.',
  badges: [{icon:'people',label:'HLV trực tiếp hướng dẫn'},{icon:'calendar',label:'Lộ trình tham khảo 8–12 buổi'},{icon:'shield',label:'Chương trình theo trình độ'}],
  quickFacts: [
    {icon:'pin',label:'Địa chỉ',value:address},
    {icon:'clock',label:'Giờ mở cửa',value:'Đang cập nhật',note:'Cần xác minh tại hồ'},
    {icon:'ticket',label:'Vé vào hồ',value:'Đang cập nhật',note:'Xác nhận giá tại quầy'},
    {icon:'swim',label:'Loại hồ',value:'Hồ dịch vụ / tư nhân',note:'Tiện ích cần xác minh'},
    {icon:'people',label:'Nhu cầu tư vấn',value:'Trẻ em, người lớn',note:'Kèm riêng hoặc nhóm nhỏ'},
  ],
  photos: [],
  galleryIllustrations: [poolIllustration,
    {src:`${images}/children.webp`,alt:'Minh họa trẻ em làm quen với nước và tập bơi',caption:'Chương trình trẻ em — ảnh minh họa, không chụp tại Nhật An.',width:1200,height:800,illustration:true},
    {src:`${images}/hero.webp`,alt:'Minh họa huấn luyện viên hướng dẫn một học viên ở hồ bơi',caption:'Học bơi kèm riêng — ảnh minh họa chương trình.',width:1800,height:1000,illustration:true},
  ],
  galleryNote: 'Bộ ảnh thực tế Nhật An đang chờ bổ sung. Các ảnh bên dưới minh họa không gian bơi và chương trình học; không xác nhận cơ sở vật chất tại địa điểm.',
  facilities: [
    {label:'Không gian và mặt nước',status:'unverified',note:'Cần khảo sát trực tiếp'},
    {label:'Khu vực luyện tập, phân làn',status:'unverified',note:'Xác nhận trước khi xếp lớp'},
    {label:'Độ sâu và khu vực trẻ em',status:'unverified',note:'Chưa có số đo được xác nhận'},
    {label:'Điều kiện an toàn, cứu hộ',status:'unverified',note:'Cần hỏi đơn vị vận hành'},
    {label:'Khu thay đồ và tắm tráng',status:'updating',note:'Đang cập nhật thông tin'},
    {label:'Chỗ ngồi chờ và gửi xe',status:'updating',note:'Đang cập nhật thông tin'},
  ],
  facilityNote: 'Thông tin theo kế hoạch khu vực ngày 20/11/2026; chưa thay thế khảo sát tại hồ. Hãy xác nhận điều kiện tập cùng HLV trước buổi đầu.',
  courseIntro: 'Chọn chương trình theo độ tuổi, nền tảng và mục tiêu. Lịch học tại hồ được xác nhận khi tư vấn.',
  courses: [
    {id:'lop-tre-em',title:'Học bơi trẻ em',audience:'Làm quen nước, học từ cơ bản',description:'Rèn thói quen an toàn, tập thở, nổi và phối hợp động tác theo mức sẵn sàng của trẻ.',href:'/khoa-hoc-boi/tre-em/',image:`${images}/children.webp`,imageAlt:'Minh họa khóa học bơi dành cho trẻ em'},
    {id:'lop-nguoi-lon',title:'Học bơi người lớn',audience:'Người mới và người sợ nước',description:'Bắt đầu với nhịp thở và sự thả lỏng, sau đó hoàn thiện từng phần kỹ thuật.',href:'/khoa-hoc-boi/nguoi-lon/',image:`${images}/adults.webp`,imageAlt:'Minh họa học bơi dành cho người lớn'},
    {id:'lop-kem-rieng',title:'Học kèm riêng 1–1',audience:'Lộ trình theo từng học viên',description:'HLV theo sát, điều chỉnh bài tập và tiến độ dựa trên khả năng thực tế.',href:'/khoa-hoc-boi/1-kem-1/',image:`${images}/hero.webp`,imageAlt:'Minh họa huấn luyện viên kèm một học viên',imagePosition:'80% center'},
    {id:'lop-nhom-nho',title:'Lớp nhóm nhỏ',audience:'Gia đình, bạn bè cùng học',description:'Trao đổi trình độ, số người và khung giờ để được tư vấn cách tổ chức phù hợp.',href:'#dang-ky',image:`${poolImages}/small-group-swimming.webp`,imageAlt:'Ảnh lớp học trong tư liệu chung của Swim For Life, không phải ảnh tại Nhật An'},
  ],
  styles: laiThieuLanding.techniques.map((style,index)=>({title:['Bơi ếch','Bơi sải','Bơi ngửa','Bơi bướm','Đứng nước'][index],href:style.href,image:style.image,imageAlt:style.imageAlt})),
  instructor: {
    name:'Thầy Lê Văn Thông',qualification:'Kiện tướng Bơi lội',
    description:'Phụ trách tư vấn chuyên môn khu vực Lái Thiêu. Trao đổi mục tiêu, kiểm tra nền tảng và xây dựng bài tập theo mức độ sẵn sàng của từng người học.',
    image:`${poolImages}/instructor-le-van-thong.webp`,imageAlt:'Ảnh hướng dẫn bơi trong hồ sơ thầy Lê Văn Thông trên website Swim For Life',
    sourceUrl:'https://ocean-park.dayboi.vip/',
    points:['Đánh giá trình độ trước khi chọn bài tập','Hướng dẫn từng bước, điều chỉnh theo tiến độ','Kết hợp kỹ thuật bơi và kỹ năng an toàn'],
  },
  location: {
    mapsSearchUrl:`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Hồ bơi Nhật An, ${address}`)}`,
    regionEmbedUrl:`https://maps.google.com/maps?q=${encodeURIComponent('phường Lái Thiêu, TP.HCM')}&z=14&output=embed`,
    note:'Bản đồ tham khảo khu vực Lái Thiêu, không phải ghim vị trí Nhật An đã xác minh. Gọi HLV để xác nhận điểm đến trước khi đi.',
    directions:[
      {label:'Từ Quốc lộ 13',text:'Tra cứu hướng vào khu phố Bình Đức và đối chiếu địa chỉ A86 trước khi di chuyển.'},
      {label:'Từ Chợ Lái Thiêu',text:'Tham khảo hướng khu dân cư Bình Đức / Bờ bao sông Sài Gòn; hỏi lại điểm hẹn cụ thể.'},
    ],
  },
  preparation: [
    {title:'Đồ bơi và kính bơi vừa vặn',description:'Thử kính trước buổi học, chọn đồ bơi gọn và dễ vận động.'},
    {title:'Khăn, nước uống, túi đồ',description:'Chuẩn bị đồ khô và túi đựng vật dụng ướt sau buổi tập.'},
    {title:'Đến sớm và khởi động',description:'Dành thời gian làm quen nội quy và khởi động theo hướng dẫn.'},
    {title:'Phụ huynh phối hợp cùng HLV',description:'Thống nhất vị trí chờ, cách đón trẻ và người giám sát.'},
    {title:'Trao đổi tình trạng thể lực',description:'Báo cho HLV khi mệt hoặc không thoải mái để điều chỉnh buổi tập.'},
  ],
  preparationImage:`${poolImages}/swimming-gear.webp`,
  tuition:[
    {label:'Học phí kèm riêng 1–1',value:'Liên hệ nhận học phí chính xác',note:'Theo mục tiêu và chương trình học'},
    {label:'Học phí nhóm nhỏ',value:'Tư vấn theo nhóm đăng ký',note:'Xác nhận số người và cách tổ chức'},
    {label:'Vé vào hồ',value:'Xác minh tại quầy hồ bơi',note:'Khoản riêng với học phí giảng dạy'},
    {label:'Học bù, đổi lịch',value:'Thống nhất trước khi đăng ký',note:'Phụ thuộc lịch HLV và điều kiện hồ'},
    {label:'Bảo lưu khóa học',value:'Liên hệ để xác nhận điều kiện',note:'Không mặc định có chính sách bảo lưu'},
  ],
  tuitionNote:'Học phí giảng dạy và vé vào hồ là hai khoản riêng. Hãy xác nhận tổng chi phí, số buổi, thời lượng và các điều kiện áp dụng trước khi thanh toán.',
  guideTitle:'Tìm hiểu trước buổi học đầu tiên',
  guideIntro:'Từ lựa chọn lớp đến chuẩn bị đồ và thống nhất lịch học: những thông tin giúp bạn bắt đầu chủ động hơn tại Nhật An.',
  guide:[
    {id:'lo-trinh',title:'Lộ trình học theo khả năng thực tế',paragraphs:[
      'Nếu chưa từng học bơi, bạn nên bắt đầu bằng việc làm quen với nước, kiểm soát nhịp thở và giữ thăng bằng. HLV quan sát cách học viên xuống nước, phản ứng khi mặt chạm nước và khả năng thực hiện từng yêu cầu đơn giản. Bài tập đầu tiên cần vừa sức, ở khu vực được xác nhận phù hợp, thay vì yêu cầu bơi ngay một quãng dài.',
      'Lộ trình 8–12 buổi là khung tham khảo trong kế hoạch tuyển sinh khu vực. Nhóm buổi đầu tập thở, nổi và lướt; các buổi sau học từng động tác chân, tay rồi phối hợp. Khi nền tảng ổn định, học viên mới tăng quãng bơi, luyện đứng nước và thực hành cách dừng lại có kiểm soát. Số buổi thực tế phụ thuộc thể lực, sự đều đặn và tốc độ tiếp thu, không phải cam kết biết bơi sau một thời hạn cố định.',
      'Người đã biết bơi nên nói rõ kiểu bơi đang tập và điểm muốn cải thiện. HLV có thể quan sát một đoạn bơi ngắn để nhận ra tư thế thân, nhịp thở hoặc động tác đang gây mất sức. Việc sửa một lỗi chính trong mỗi giai đoạn thường dễ theo dõi hơn cố thay đổi mọi thứ cùng lúc. Trao đổi lại sau buổi học giúp chọn bài tập tiếp theo hợp lý.',
    ]},
    {id:'chon-lop',title:'Chọn lớp cho trẻ em, người lớn và nhóm nhỏ',paragraphs:[
      'Với trẻ em, điều cần trao đổi trước tiên là mức độ tự tin khi ở gần nước, trải nghiệm học trước đó và khả năng nghe hướng dẫn. Không nên chỉ nhìn tuổi để chọn lớp. Trẻ cần được hướng dẫn về điểm xuống hồ, cách chờ tới lượt và việc không tự ý rời vị trí tập. Phụ huynh và HLV nên thống nhất cách hỗ trợ để trẻ cảm thấy yên tâm mà vẫn giữ được nhịp buổi học.',
      'Người lớn thường có mục tiêu khác nhau: học từ đầu, vượt qua tâm lý sợ nước, bơi để vận động hoặc chỉnh kỹ thuật cho đỡ mệt. Bạn có thể mô tả rõ điều đang gặp khó, chẳng hạn nín thở quá lâu, không dám thả chân hay mất nhịp khi lấy hơi. Thông tin cụ thể giúp HLV chọn cách giải thích và mức tăng bài phù hợp hơn.',
      'Kèm riêng 1–1 phù hợp khi bạn muốn được theo sát hoặc cần linh hoạt nội dung. Với nhóm nhỏ, nên trao đổi trước số người, độ tuổi và nền tảng của các thành viên. Nhóm có chênh lệch lớn về trình độ có thể cần chia bài hoặc điều chỉnh cách học. Lịch, khả năng tổ chức tại Nhật An và phương án giám sát cần được xác nhận trước khi nhận đăng ký.',
    ]},
    {id:'an-toan',title:'Những điều cần xác nhận về hồ và an toàn',paragraphs:[
      'Địa chỉ trong tài liệu dự án là A86, KP Bình Đức, phường Lái Thiêu, TP.HCM; địa danh cũ thuộc Lái Thiêu, Thuận An, Bình Dương. Tuy nhiên, thông tin giờ mở cửa, vé, độ sâu và các khu vực tập chưa được khảo sát bổ sung. Trước buổi đầu, hãy gọi xác nhận đúng hồ, điểm gặp HLV và thời gian được vào tập để tránh đến khi hồ chưa tiếp nhận lớp.',
      'Khi tới nơi, hỏi rõ khu vực nào được sử dụng, quy định xuống nước và vị trí cứu hộ. HLV cần lựa chọn bài tập theo điều kiện hồ thực tế và khả năng học viên. Các hình ảnh minh họa trên trang không xác nhận rằng hồ có mái che, làn riêng hoặc khu trẻ em. Với người mới, việc biết ranh giới khu tập và cách báo khi cần hỗ trợ quan trọng hơn cố theo bài vượt khả năng.',
      'Trẻ em cần người lớn giám sát phù hợp cả trước, trong và sau thời gian tập. Không xem khả năng bơi một đoạn ngắn là lý do để trẻ tự xuống nước. Kỹ năng đứng nước, giữ bình tĩnh và gọi hỗ trợ được luyện từng bước cùng HLV, trong điều kiện kiểm soát. Các bài viết kỹ thuật liên kết trên trang chỉ giúp tìm hiểu thêm, không thay thế hướng dẫn trực tiếp.',
    ]},
    {id:'ky-thuat',title:'Nên bắt đầu từ kiểu bơi nào?',paragraphs:[
      'Bơi ếch thường được người mới quan tâm vì dễ quan sát nhịp chân và tay. Dù vậy, chọn kiểu bơi đầu tiên vẫn cần xem khả năng phối hợp, sự thả lỏng và mục tiêu cá nhân. HLV hướng dẫn động tác riêng trước khi ghép nhịp thở, tránh việc học viên chỉ cố ngẩng đầu rồi gồng người để tiến về phía trước.',
      'Bơi sải tập trung vào tư thế thân dài, tay luân phiên và cách lấy hơi nghiêng. Bơi ngửa đòi hỏi giữ thăng bằng với mặt hướng lên, phối hợp tay và nhịp chân đều. Bơi bướm cần nền tảng phối hợp tốt hơn để kết nối sóng thân, chân dolphin và động tác hai tay đồng thời. Người đang học một kiểu nên củng cố nền tảng trước khi chuyển sang kỹ thuật phức tạp hơn.',
      'Đứng nước và kỹ năng sinh tồn dưới nước nên được đưa vào quá trình học theo mức độ phù hợp. Mục tiêu là biết giữ nổi, dừng lại, định hướng và gọi hỗ trợ khi cần. Nếu muốn tự ôn, hãy dùng bài tập HLV đã hướng dẫn và chọn điều kiện giám sát tương ứng; không tự tăng độ sâu hay thử bài mới chỉ vì đã xem một video minh họa.',
    ]},
    {id:'chi-phi',title:'Trao đổi học phí và lịch học trước khi đăng ký',paragraphs:[
      'Khi hỏi học phí Nhật An, bạn nên cung cấp độ tuổi, số người học, nền tảng hiện tại và khung giờ mong muốn. Yêu cầu tư vấn làm rõ mức học phí dành cho hình thức nào, gồm bao nhiêu buổi và thời lượng mỗi buổi. Vé vào hồ, nếu thu riêng, cần được nêu tách khỏi học phí để bạn dự tính đúng tổng chi phí.',
      'Giờ mở cửa của hồ và lịch HLV là hai thông tin khác nhau. Một khung giờ hồ mở không có nghĩa là lớp kèm riêng luôn nhận học viên vào thời điểm đó. Bạn nên đưa ra vài khoảng thời gian có thể theo học và xác nhận lịch cụ thể trước khi tới. Đi học đều giúp duy trì cảm giác nước và nối tiếp bài tập giữa các buổi.',
      'Nếu bận đột xuất, trao đổi sớm với HLV về khả năng đổi lịch. Điều kiện học bù hoặc bảo lưu cần thống nhất khi đăng ký; trang chưa công bố chính sách chung cho Nhật An. Hãy giữ lại thông tin đã xác nhận về lịch, chi phí và cách liên hệ, nhất là khi đăng ký cho nhiều thành viên trong gia đình.',
    ]},
    {id:'chuan-bi-chi-tiet',title:'Chuẩn bị để buổi học diễn ra thuận tiện',paragraphs:[
      'Một bộ đồ bơi gọn, kính vừa mặt, khăn và nước uống thường là những vật dụng cần nghĩ tới trước tiên. Nếu chưa quen kính bơi, bạn nên thử đeo và chỉnh dây trước khi xuống hồ. Đừng siết quá chặt chỉ để chống nước vào; HLV có thể hướng dẫn điều chỉnh và kiểm tra lại khi cần. Mũ bơi và các vật dụng khác chuẩn bị theo nội quy được xác nhận tại hồ.',
      'Nên sắp xếp tới sớm để gửi đồ, tìm khu tập và trao đổi ngắn với HLV. Báo rõ nếu bạn đang mệt, khó chịu hoặc có điều khiến mình lo lắng khi xuống nước. Trong buổi học, dừng bài và báo lại khi không thoải mái. Việc nghỉ đúng lúc và sửa cách thực hiện giúp học có kiểm soát hơn cố hoàn thành mọi lượt tập.',
      'Sau buổi đầu, ghi nhớ một vài điểm HLV yêu cầu chú ý và hỏi rõ bài nào có thể ôn lại. Với trẻ, phụ huynh có thể trao đổi ngắn về mức độ hợp tác và những việc cần chuẩn bị cho buổi sau. Nếu Nhật An chưa phù hợp về lịch hoặc quyền sử dụng hồ, bạn có thể xem thêm danh sách địa điểm Lái Thiêu để tìm phương án khác cùng người tư vấn.',
    ]},
  ],
  testimonials: [],
  faqs:[
    {question:'Hồ bơi Nhật An có phù hợp cho trẻ em không?',answer:'Có thể tư vấn chương trình cho trẻ em, nhưng cần xác nhận độ sâu, khu tập và điều kiện giám sát tại hồ trước khi xếp lớp. Phụ huynh nên trao đổi độ tuổi, trải nghiệm với nước và nhu cầu của trẻ với HLV.'},
    {question:'Có lớp học bơi 1 kèm 1 tại Nhật An không?',answer:'Bạn có thể liên hệ tư vấn kèm riêng 1–1 theo kế hoạch khu vực Lái Thiêu. Khả năng tổ chức, khung giờ và quyền sử dụng hồ cần được xác nhận trước khi đăng ký chính thức.'},
    {question:'Học phí đã bao gồm vé hồ chưa?',answer:'Học phí giảng dạy và vé vào hồ được xem là hai khoản riêng. Khi nhận tư vấn, hãy xác nhận mức học phí áp dụng, vé hồ và các khoản phát sinh nếu có. Giá vé hiện cần xác minh tại quầy.'},
    {question:'Bao lâu có thể bơi độc lập?',answer:'Khung 8–12 buổi chỉ mang tính tham khảo. Thời gian thực tế phụ thuộc nền tảng, thể lực, khả năng phối hợp và lịch tập. HLV đánh giá tiến độ trước khi cho tăng bài; không cam kết mọi học viên biết bơi sau một số buổi cố định.'},
    {question:'Có hỗ trợ học viên sợ nước không?',answer:'Có tư vấn lộ trình làm quen với nước theo từng bước. Bạn nên nói rõ tình huống khiến mình lo lắng để HLV điều chỉnh bài tập, mức hỗ trợ và tiến độ. Buổi đầu ưu tiên sự thoải mái và khả năng kiểm soát động tác.'},
    {question:'Có thể đổi lịch hoặc học bù không?',answer:'Hãy trao đổi khung giờ mong muốn và điều kiện đổi lịch trước khi đăng ký. Việc sắp xếp phụ thuộc lịch HLV, điều kiện tiếp nhận của hồ và thỏa thuận khóa học; chưa có chính sách học bù hay bảo lưu được công bố riêng cho Nhật An.'},
  ],
  nearby:[
    {name:'Hồ bơi Duy Anh',href:'/hoc-boi-tphcm/lai-thieu/#duy-anh',description:'Tham khảo địa điểm khu phố Nguyễn Trãi; xác nhận đúng cơ sở trước khi đến.'},
    {name:'TT VHTT Lái Thiêu',href:'/hoc-boi-tphcm/lai-thieu/#tt-vhtt',description:'Một lựa chọn trong danh sách địa điểm học bơi khu vực trung tâm.'},
    {name:'Các hồ khác tại Lái Thiêu',href:'/hoc-boi-tphcm/lai-thieu/',description:'So sánh hồ dịch vụ và hồ nội khu theo điều kiện sử dụng, vị trí và nhu cầu.'},
  ],
  sources:[
    {title:'Kế hoạch tuyển sinh khu vực Lái Thiêu',note:'Tài liệu dự án ngày 20/11/2026: địa chỉ, loại hình hồ, HLV và các mục cần khảo sát.'},
    {title:'Thông tin HLV trên website Swim For Life',url:'https://ocean-park.dayboi.vip/',note:'Nguồn hồ sơ và ảnh hướng dẫn của thầy Lê Văn Thông; không phải ảnh lớp tại Nhật An.'},
  ],
};
