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
        'terms.howToBook.content': 'Fill out the form below to start the booking process. Be as descriptive as possible. I usually respond within 3-5 days.',
        'terms.deposit.title': 'Deposit & Pricing',
        'terms.deposit.content': 'A non-refundable deposit is required to secure your appointment. The deposit goes towards the final price.',
        'terms.design.title': 'Design Process',
        'terms.design.content': 'I design the tattoo on the day of or the day before the appointment. Designs are not sent in advance.',
        'terms.health.title': 'Health & Safety',
        'terms.health.content': 'Please be well-rested and eat before your appointment. No alcohol the night before. Reschedule if feeling ill.',
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
        'terms.howToBook.content': '請填寫下方表單開始預約流程，請盡量詳細描述你的想法。我通常會在 3-5 天內回覆。',
        'terms.deposit.title': '訂金與定價',
        'terms.deposit.content': '預約需支付不可退還的訂金。訂金將計入最終價格。',
        'terms.design.title': '設計流程',
        'terms.design.content': '我會在預約當天或前一天完成設計。設計不會提前發送。',
        'terms.health.title': '健康與安全',
        'terms.health.content': '請確保充分休息並在預約前進食。前一晚不要飲酒。如感到不適，請改期。',
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
        'terms.howToBook.content': '请填写下方表单开始预约流程。我通常会在 3-5 天内回复。',
        'terms.deposit.title': '定金与定价',
        'terms.deposit.content': '预约需支付不可退还的定金。定金将计入最终价格。',
        'terms.design.title': '设计流程',
        'terms.design.content': '我会在预约当天或前一天完成设计。设计不会提前发送。',
        'terms.health.title': '健康与安全',
        'terms.health.content': '请确保充分休息并在预约前进食。前一晚不要饮酒。如感到不适，请改期。',
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
        'terms.howToBook.content': 'Điền biểu mẫu bên dưới để bắt đầu. Tôi thường phản hồi trong 3-5 ngày.',
        'terms.deposit.title': 'Đặt cọc & Giá',
        'terms.deposit.content': 'Cần đặt cọc không hoàn lại để giữ lịch hẹn. Tiền cọc sẽ được tính vào giá cuối.',
        'terms.design.title': 'Quy trình thiết kế',
        'terms.design.content': 'Tôi thiết kế hình xăm vào ngày hẹn hoặc một ngày trước. Thiết kế không được gửi trước.',
        'terms.health.title': 'Sức khỏe & An toàn',
        'terms.health.content': 'Hãy nghỉ ngơi đầy đủ và ăn trước buổi hẹn. Không uống rượu đêm trước. Dời lịch nếu không khỏe.',
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
        'footer.rights': 'Bảo lưu mọi quyền.',
    },
};

export function t(locale: Locale, key: keyof TranslationKeys): string {
    return translations[locale]?.[key] || translations.en[key] || key;
}
