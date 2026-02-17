export type Locale = 'en' | 'zh-TW' | 'zh-CN' | 'vi';

export const LOCALES: { code: Locale; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'zh-TW', label: '繁' },
    { code: 'zh-CN', label: '簡' },
    { code: 'vi', label: 'VI' },
];

export const DEFAULT_LOCALE: Locale = 'en';

type TranslationKeys = {
    // Nav
    'nav.portfolio': string;
    'nav.about': string;
    'nav.booking': string;
    // Hero
    'hero.title': string;
    'hero.subtitle': string;
    'hero.cta': string;
    // Filter
    'filter.all': string;
    // Lightbox
    'lightbox.style': string;
    'lightbox.confidence': string;
    // Booking
    'booking.title': string;
    'booking.subtitle': string;
    'booking.terms': string;
    'booking.form': string;
    'booking.name': string;
    'booking.email': string;
    'booking.placement': string;
    'booking.size': string;
    'booking.description': string;
    'booking.submit': string;
    'booking.success': string;
    // Terms
    'terms.howToBook.title': string;
    'terms.howToBook.content': string;
    'terms.deposit.title': string;
    'terms.deposit.content': string;
    'terms.design.title': string;
    'terms.design.content': string;
    'terms.health.title': string;
    'terms.health.content': string;
    // Aftercare
    'aftercare.title': string;
    'aftercare.cleaning': string;
    'aftercare.recovery': string;
    'aftercare.healing': string;
    'aftercare.clothing': string;
    'aftercare.sun': string;
    'aftercare.water': string;
    'aftercare.questions': string;
    // Price Estimator
    'price.title': string;
    'price.size': string;
    'price.sizeSmall': string;
    'price.sizeMedium': string;
    'price.sizeLarge': string;
    'price.sizeXL': string;
    'price.style': string;
    'price.estimate': string;
    'price.disclaimer': string;
    'price.currency': string;
    // About
    'about.title': string;
    'about.intro': string;
    'about.story.title': string;
    'about.story.p1': string;
    'about.story.p2': string;
    'about.story.p3': string;
    'about.specialties.title': string;
    'about.specialties.portrait': string;
    'about.specialties.blackgrey': string;
    'about.specialties.realism': string;
    'about.specialties.japanese': string;
    'about.stats.works': string;
    'about.stats.followers': string;
    'about.stats.experience': string;
    'about.stats.styles': string;
    'about.cta': string;
    // Footer
    'footer.rights': string;
};

const translations: Record<Locale, TranslationKeys> = {
    en: {
        'nav.portfolio': 'Portfolio',
        'nav.about': 'About',
        'nav.booking': 'Book Appointment',
        'hero.title': 'Art on Skin',
        'hero.subtitle': 'Specializing in black & grey, portrait, and minimalist tattoo art.',
        'hero.cta': 'Book Consultation',
        'filter.all': 'All',
        'lightbox.style': 'Style',
        'lightbox.confidence': 'AI Confidence',
        'booking.title': 'Booking & Inquiries',
        'booking.subtitle': 'Please read the following information carefully before submitting your request.',
        'booking.terms': 'Important Information',
        'booking.form': 'Inquiry Form',
        'booking.name': 'Full Name',
        'booking.email': 'Email',
        'booking.placement': 'Placement',
        'booking.size': 'Approximate Size',
        'booking.description': 'Description of Idea',
        'booking.submit': 'Start Your Journey',
        'booking.success': 'Thank you for your inquiry. I will get back to you shortly.',
        'terms.howToBook.title': 'How to Book',
        'terms.howToBook.content': 'Fill out the form below to start the booking process. Detailed content will help to understand your idea — the size of the pattern, theme, position, and details will affect the price. I usually respond within 3-5 days.',
        'terms.deposit.title': 'Deposit & Pricing',
        'terms.deposit.content': 'A non-refundable deposit is required to secure your appointment. The deposit goes towards the final price. The best way to find out about prices is to book a consultation.',
        'terms.design.title': 'Design Process',
        'terms.design.content': 'I design the tattoo on the day of or the day before the appointment. Designs are not sent in advance.',
        'terms.health.title': 'Health & Safety',
        'terms.health.content': 'You must be over 18 years old and provide valid proof of photo ID. Two days before the tattoo, try not to drink alcohol. Adequate sleep and keeping the body clean are also required.',
        'aftercare.title': 'Aftercare',
        'aftercare.cleaning': 'Use mild cleaning products, wash the tattoo wound with warm and cold water, dry it with paper towels and apply tattoo repair products. Do not rub ointments other than those prescribed by the tattoo artist.',
        'aftercare.recovery': 'The tattoo recovery period is 2 to 4 weeks. Please keep the tattoo clean during the period.',
        'aftercare.healing': 'Filming, scabbing, peeling, itching, and a slightly dull sore are normal during the healing process. Do not pull or scratch peeling and scabs, let them fall off naturally.',
        'aftercare.clothing': 'Wear loose, clean clothing, and avoid alcohol and irritating foods during recovery.',
        'aftercare.sun': 'Avoid sun exposure, excessive exercise, pulling on the tattooed area, and avoid irritating the surrounding skin.',
        'aftercare.water': 'Saunas, beaches, swimming pools, and baths are strictly prohibited within 1 month.',
        'aftercare.questions': 'Any questions you can ask your tattoo artist.',
        'price.title': 'Price Estimator',
        'price.size': 'Size',
        'price.sizeSmall': 'Small (< 5cm)',
        'price.sizeMedium': 'Medium (5-15cm)',
        'price.sizeLarge': 'Large (15-30cm)',
        'price.sizeXL': 'Extra Large (30cm+)',
        'price.style': 'Style',
        'price.estimate': 'Estimated Price',
        'price.disclaimer': 'This is an estimate only. Final pricing depends on complexity, placement, and consultation.',
        'price.currency': 'Currency',
        'about.title': 'About the Artist',
        'about.intro': 'Where classical art meets the human canvas.',
        'about.story.title': 'The Story',
        'about.story.p1': 'Max is a tattoo artist based in Asia, operating across major cities including Taipei and Ho Chi Minh City. Known on Instagram as Maximum Tattoos, his work draws heavily from classical sculpture, mythological narratives, and dramatic chiaroscuro lighting — transforming the human body into a gallery of permanent art.',
        'about.story.p2': 'With a portfolio dominated by hyper-realistic black & grey portraiture, Max has built a reputation for translating museum-quality detail onto skin. From Greek gods to intimate human expressions, each piece reflects hundreds of hours of study in anatomy, light, and shadow.',
        'about.story.p3': 'An active participant in the Asian tattoo convention circuit, Max continues to push the boundaries of what is possible with a single needle. Whether it is a micro-realistic portrait or a full-leg mythological epic, the commitment to "maximum" detail remains unwavering.',
        'about.specialties.title': 'Specialties',
        'about.specialties.portrait': 'Portrait & Realism',
        'about.specialties.blackgrey': 'Black & Grey',
        'about.specialties.realism': 'Micro-Realism',
        'about.specialties.japanese': 'Japanese Traditional',
        'about.stats.works': 'Works',
        'about.stats.followers': 'Followers',
        'about.stats.experience': 'Years',
        'about.stats.styles': 'Styles',
        'about.cta': 'Ready to start your piece?',
        'footer.rights': 'All rights reserved.',
    },
    'zh-TW': {
        'nav.portfolio': '作品集',
        'nav.about': '關於',
        'nav.booking': '預約紋身',
        'hero.title': '肌膚上的藝術',
        'hero.subtitle': '專擅黑灰、人像寫實與極簡風格紋身藝術。',
        'hero.cta': '立即預約',
        'filter.all': '全部',
        'lightbox.style': '風格',
        'lightbox.confidence': 'AI 分析',
        'booking.title': '預約與諮詢',
        'booking.subtitle': '提交前請仔細閱讀以下重要資訊。',
        'booking.terms': '重要須知',
        'booking.form': '諮詢表單',
        'booking.name': '姓名',
        'booking.email': '電郵',
        'booking.placement': '紋身部位',
        'booking.size': '預估尺寸',
        'booking.description': '概念描述',
        'booking.submit': '開始你的旅程',
        'booking.success': '感謝你的諮詢，我會在短時間內回覆你。',
        'terms.howToBook.title': '如何預約',
        'terms.howToBook.content': '請填寫下方表單開始預約流程。詳細的內容有助於理解你的想法——圖案的大小、主題、位置和細節都會影響價格。我通常會在 3-5 天內回覆。',
        'terms.deposit.title': '訂金與定價',
        'terms.deposit.content': '預約需支付不可退還的訂金。訂金將計入最終價格。了解價格的最佳方式是預約諮詢。',
        'terms.design.title': '設計流程',
        'terms.design.content': '我會在預約當天或前一天完成設計。設計不會提前發送。',
        'terms.health.title': '健康與安全',
        'terms.health.content': '您必須年滿 18 歲並提供有效的身份證明文件。紋身前兩天請勿飲酒。充足的睡眠和保持身體清潔也是必要的。',
        'aftercare.title': '護理指南',
        'aftercare.cleaning': '使用溫和的清潔產品，用溫水和冷水清洗紋身傷口，用紙巾擦乾並塗抹紋身修復產品。勿使用紋身師指定以外的藥膏。',
        'aftercare.recovery': '紋身恢復期為 2 至 4 週，期間請保持紋身部位清潔。',
        'aftercare.healing': '脫皮、結痂、癢癢及輕微邈痛是愈合過程中的正常現象。請勿拉扯或抓撑脫皮和結痂，讓它們自然脫落。',
        'aftercare.clothing': '恢復期間請穿著寬鬆、乾淨的衣物，並避免飲酒和刺激性食物。',
        'aftercare.sun': '避免陽光曝曬、過度運動、拉扯紋身部位，並避免刺激周圍皮膚。',
        'aftercare.water': '一個月內嚴禁使用三溫暖、海灘、游泳池和浴缸。',
        'aftercare.questions': '任何問題請詢問您的紋身師。',
        'price.title': '價格估算器',
        'price.size': '尺寸',
        'price.sizeSmall': '小型 (< 5cm)',
        'price.sizeMedium': '中型 (5-15cm)',
        'price.sizeLarge': '大型 (15-30cm)',
        'price.sizeXL': '超大型 (30cm+)',
        'price.style': '風格',
        'price.estimate': '預估價格',
        'price.disclaimer': '此為估算價格，最終定價取決於複雜度、部位及諮詢結果。',
        'price.currency': '貨幣',
        'about.title': '關於紋身師',
        'about.intro': '當古典藝術遇上人體畫布。',
        'about.story.title': '故事',
        'about.story.p1': 'Max 是一位活躍於亞洲的紋身藝術家，足跡遍布台北、胡志明市等主要城市。在 Instagram 上以 Maximum Tattoos 為名，他的作品深受古典雕塑、神話敘事和戲劇性明暗對比的影響——將人體化為永恆的藝術殿堂。',
        'about.story.p2': '以超寫實黑灰人像為主軸，Max 建立了將博物館級細節轉化到皮膚上的聲譽。從希臘眾神到細膩的人類表情，每件作品都凝聚了數百小時的解剖學、光線與陰影研究。',
        'about.story.p3': '作為亞洲紋身展覽巡迴的活躍參與者，Max 持續挑戰單針所能達到的極限。無論是微型寫實人像還是覆蓋整條腿的神話史詩，對「Maximum（極致）」細節的承諾始終不變。',
        'about.specialties.title': '專長領域',
        'about.specialties.portrait': '人像寫實',
        'about.specialties.blackgrey': '黑灰風格',
        'about.specialties.realism': '微型寫實',
        'about.specialties.japanese': '日式傳統',
        'about.stats.works': '作品',
        'about.stats.followers': '追蹤者',
        'about.stats.experience': '年經驗',
        'about.stats.styles': '種風格',
        'about.cta': '準備好開始你的紋身了嗎？',
        'footer.rights': '版權所有。',
    },
    'zh-CN': {
        'nav.portfolio': '作品集',
        'nav.about': '关于',
        'nav.booking': '预约纹身',
        'hero.title': '肌肤上的艺术',
        'hero.subtitle': '专擅黑灰、人像写实与极简风格纹身艺术。',
        'hero.cta': '立即预约',
        'filter.all': '全部',
        'lightbox.style': '风格',
        'lightbox.confidence': 'AI 分析',
        'booking.title': '预约与咨询',
        'booking.subtitle': '提交前请仔细阅读以下重要信息。',
        'booking.terms': '重要须知',
        'booking.form': '咨询表单',
        'booking.name': '姓名',
        'booking.email': '邮箱',
        'booking.placement': '纹身部位',
        'booking.size': '预估尺寸',
        'booking.description': '概念描述',
        'booking.submit': '开始你的旅程',
        'booking.success': '感谢咨询，我会尽快回复。',
        'terms.howToBook.title': '如何预约',
        'terms.howToBook.content': '请填写下方表单开始预约流程。详细的内容有助于理解你的想法——图案的大小、主题、位置和细节都会影响价格。我通常会在 3-5 天内回复。',
        'terms.deposit.title': '定金与定价',
        'terms.deposit.content': '预约需支付不可退还的定金。定金将计入最终价格。了解价格的最佳方式是预约咨询。',
        'terms.design.title': '设计流程',
        'terms.design.content': '我会在预约当天或前一天完成设计。设计不会提前发送。',
        'terms.health.title': '健康与安全',
        'terms.health.content': '您必须年满 18 岁并提供有效的身份证明文件。纹身前两天请勿饮酒。充足的睡眠和保持身体清洁也是必要的。',
        'aftercare.title': '护理指南',
        'aftercare.cleaning': '使用温和的清洁产品，用温水和冷水清洗纹身伤口，用纸巾擦干并涂抹纹身修复产品。勿使用纹身师指定以外的药膏。',
        'aftercare.recovery': '纹身恢复期为 2 至 4 周，期间请保持纹身部位清洁。',
        'aftercare.healing': '脱皮、结痂、瘲痒及轻微针痛是愈合过程中的正常现象。请勿拉扯或抓挠脱皮和结痂，让它们自然脱落。',
        'aftercare.clothing': '恢复期间请穿着宽松、干净的衣物，并避免饮酒和刺激性食物。',
        'aftercare.sun': '避免阳光曝晒、过度运动、拉扯纹身部位，并避免刺激周围皮肤。',
        'aftercare.water': '一个月内严禁使用桑拿、海滩、游泳池和浴缸。',
        'aftercare.questions': '任何问题请询问您的纹身师。',
        'price.title': '价格估算器',
        'price.size': '尺寸',
        'price.sizeSmall': '小型 (< 5cm)',
        'price.sizeMedium': '中型 (5-15cm)',
        'price.sizeLarge': '大型 (15-30cm)',
        'price.sizeXL': '超大型 (30cm+)',
        'price.style': '风格',
        'price.estimate': '预估价格',
        'price.disclaimer': '此为估算价格，最终定价取决于复杂度、部位及咨询结果。',
        'price.currency': '货币',
        'about.title': '关于纹身师',
        'about.intro': '当古典艺术遇上人体画布。',
        'about.story.title': '故事',
        'about.story.p1': 'Max 是一位活跃于亚洲的纹身艺术家，足迹遍布台北、胡志明市等主要城市。在 Instagram 上以 Maximum Tattoos 为名，他的作品深受古典雕塑、神话叙事和戏剧性明暗对比的影响——将人体化为永恒的艺术殿堂。',
        'about.story.p2': '以超写实黑灰人像为主轴，Max 建立了将博物馆级细节转化到皮肤上的声誉。从希腊众神到细腻的人类表情，每件作品都凝聚了数百小时的解剖学、光线与阴影研究。',
        'about.story.p3': '作为亚洲纹身展览巡回的活跃参与者，Max 持续挑战单针所能达到的极限。无论是微型写实人像还是覆盖整条腿的神话史诗，对「Maximum（极致）」细节的承诺始终不变。',
        'about.specialties.title': '专长领域',
        'about.specialties.portrait': '人像写实',
        'about.specialties.blackgrey': '黑灰风格',
        'about.specialties.realism': '微型写实',
        'about.specialties.japanese': '日式传统',
        'about.stats.works': '作品',
        'about.stats.followers': '追踪者',
        'about.stats.experience': '年经验',
        'about.stats.styles': '种风格',
        'about.cta': '准备好开始你的纹身了吗？',
        'footer.rights': '版权所有。',
    },
    vi: {
        'nav.portfolio': 'Bộ sưu tập',
        'nav.about': 'Giới thiệu',
        'nav.booking': 'Đặt lịch hẹn',
        'hero.title': 'Nghệ thuật trên da',
        'hero.subtitle': 'Chuyên về xăm đen xám, chân dung và phong cách tối giản.',
        'hero.cta': 'Đặt lịch tư vấn',
        'filter.all': 'Tất cả',
        'lightbox.style': 'Phong cách',
        'lightbox.confidence': 'AI Phân tích',
        'booking.title': 'Đặt lịch & Tư vấn',
        'booking.subtitle': 'Vui lòng đọc kỹ thông tin sau trước khi gửi yêu cầu.',
        'booking.terms': 'Thông tin quan trọng',
        'booking.form': 'Biểu mẫu tư vấn',
        'booking.name': 'Họ và tên',
        'booking.email': 'Email',
        'booking.placement': 'Vị trí xăm',
        'booking.size': 'Kích thước ước tính',
        'booking.description': 'Mô tả ý tưởng',
        'booking.submit': 'Bắt đầu hành trình',
        'booking.success': 'Cảm ơn bạn. Tôi sẽ liên hệ lại sớm nhất.',
        'terms.howToBook.title': 'Cách đặt lịch',
        'terms.howToBook.content': 'Điền biểu mẫu bên dưới để bắt đầu. Nội dung chi tiết sẽ giúp hiểu ý tưởng của bạn — kích thước, chủ đề, vị trí và chi tiết sẽ ảnh hưởng đến giá. Tôi thường phản hồi trong 3-5 ngày.',
        'terms.deposit.title': 'Đặt cọc & Giá',
        'terms.deposit.content': 'Cần đặt cọc không hoàn lại để giữ lịch hẹn. Tiền cọc sẽ được tính vào giá cuối. Cách tốt nhất để biết giá là đặt lịch tư vấn.',
        'terms.design.title': 'Quy trình thiết kế',
        'terms.design.content': 'Tôi thiết kế hình xăm vào ngày hẹn hoặc một ngày trước. Thiết kế không được gửi trước.',
        'terms.health.title': 'Sức khỏe & An toàn',
        'terms.health.content': 'Bạn phải trên 18 tuổi và cung cấp giấy tờ tùy thân hợp lệ. Hai ngày trước khi xăm, hãy tránh uống rượu. Ngủ đủ giấc và giữ cơ thể sạch sẽ cũng là điều cần thiết.',
        'aftercare.title': 'Hướng dẫn chăm sóc',
        'aftercare.cleaning': 'Dùng sản phẩm làm sạch nhẹ nhàng, rửa vết xăm bằng nước ấm và lạnh, lau khô bằng khăn giấy và bôi sản phẩm phục hồi xăm. Không sử dụng thuốc mỡ ngoài loại được nghệ sĩ xăm chỉ định.',
        'aftercare.recovery': 'Thời gian phục hồi xăm là 2 đến 4 tuần. Vui lòng giữ vùng xăm sạch sẽ trong thời gian này.',
        'aftercare.healing': 'Bóc vảy, ngứa và hơi đau nhức là bình thường trong quá trình lành. Không kéo hoặc gãi vảy, hãy để chúng tự rụng.',
        'aftercare.clothing': 'Mặc quần áo rộng rãi, sạch sẽ và tránh rượu bia, thực phẩm kích thích trong quá trình phục hồi.',
        'aftercare.sun': 'Tránh ánh nắng, tập thể dục quá sức, kéo vùng xăm và tránh làm kích ứng da xung quanh.',
        'aftercare.water': 'Xông hơi, bãi biển, hồ bơi và bồn tắm bị cấm nghiêm ngặt trong 1 tháng.',
        'aftercare.questions': 'Mọi câu hỏi xin hãy hỏi nghệ sĩ xăm của bạn.',
        'price.title': 'Ước tính giá',
        'price.size': 'Kích thước',
        'price.sizeSmall': 'Nhỏ (< 5cm)',
        'price.sizeMedium': 'Vừa (5-15cm)',
        'price.sizeLarge': 'Lớn (15-30cm)',
        'price.sizeXL': 'Rất lớn (30cm+)',
        'price.style': 'Phong cách',
        'price.estimate': 'Giá ước tính',
        'price.disclaimer': 'Đây chỉ là ước tính. Giá cuối cùng phụ thuộc vào độ phức tạp, vị trí và tư vấn.',
        'price.currency': 'Tiền tệ',
        'about.title': 'Về nghệ sĩ',
        'about.intro': 'Nơi nghệ thuật cổ điển gặp gỡ cơ thể con người.',
        'about.story.title': 'Câu chuyện',
        'about.story.p1': 'Max là một nghệ sĩ xăm hoạt động tại châu Á, có mặt tại các thành phố lớn như Đài Bắc và Thành phố Hồ Chí Minh. Được biết đến trên Instagram với tên Maximum Tattoos, tác phẩm của anh lấy cảm hứng sâu sắc từ điêu khắc cổ điển, thần thoại và ánh sáng chiaroscuro — biến cơ thể con người thành phòng trưng bày nghệ thuật vĩnh cửu.',
        'about.story.p2': 'Với portfolio chủ đạo là chân dung đen xám siêu thực, Max đã xây dựng danh tiếng trong việc chuyển hóa chi tiết cấp bảo tàng lên da. Từ các vị thần Hy Lạp đến biểu cảm con người tinh tế, mỗi tác phẩm phản ánh hàng trăm giờ nghiên cứu giải phẫu, ánh sáng và bóng tối.',
        'about.story.p3': 'Là người tham gia tích cực trong các hội chợ xăm châu Á, Max tiếp tục đẩy giới hạn của những gì có thể với một cây kim duy nhất. Dù là chân dung siêu nhỏ hay sử thi thần thoại phủ kín chân, cam kết về chi tiết "tối đa" luôn không thay đổi.',
        'about.specialties.title': 'Chuyên môn',
        'about.specialties.portrait': 'Chân dung & Hiện thực',
        'about.specialties.blackgrey': 'Đen & Xám',
        'about.specialties.realism': 'Vi mô hiện thực',
        'about.specialties.japanese': 'Nhật Bản truyền thống',
        'about.stats.works': 'Tác phẩm',
        'about.stats.followers': 'Người theo dõi',
        'about.stats.experience': 'Năm',
        'about.stats.styles': 'Phong cách',
        'about.cta': 'Sẵn sàng bắt đầu tác phẩm của bạn?',
        'footer.rights': 'Bảo lưu mọi quyền.',
    },
};

export function t(locale: Locale, key: keyof TranslationKeys): string {
    return translations[locale]?.[key] || translations.en[key] || key;
}
