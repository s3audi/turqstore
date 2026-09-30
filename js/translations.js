// Turqstore Bilingual Dictionary (Turkish & English)
const translations = {
  tr: {
    // Navigation
    navVision: "Vizyon & Model",
    navTunnels: "İhracat Tünelleri",
    navCategories: "Ürün Grupları",
    navCalculator: "Gelir Simülatörü",
    navAbout: "Hakkımızda",
    navContact: "İletişim",
    ctaPartner: "Marka Başvurusu Yap",
    
    // Announcement Banner
    announcementBadge: "YENİ NESİL İHRACAT",
    announcementText: "Turqstore Küresel Tünel Ağı 2026 Faz-1 Genişlemesi Başladı. Markalar için VIP ön başvurular açık!",
    
    // Hero
    heroPill: "Anadolu'dan Dünyaya Küresel Ticaret Köprüsü",
    heroTitleStart: "Türk Kalitesini Dünyaya Taşıyan",
    heroTitleGradient: "Yeni Nesil İhracat Tünelleri",
    heroDesc: "Turqstore; kaliteli Türk ürünlerini ve markalarını İngiltere, Amerika, Suudi Arabistan (Körfez) ve Afrika pazaryerlerine sıfır bürokrasi, uçtan uca akıllı lojistik ve çok kanallı pazar yönetimiyle taşıyor.",
    heroBtnPrimary: "Markanızı Dünyaya Taşıyın",
    heroBtnSecondary: "İhracat Tünellerini Keşfet",
    heroBadgeSecure: "Lisanslı İhracat & Güvenli Ödeme Ağı",
    
    // Live Stats
    stat1Number: "4+",
    stat1Label: "Stratejik Kıtasal Tünel",
    stat1Sub: "İngiltere, ABD, Körfez, Afrika",
    stat2Number: "15+",
    stat2Label: "Aktif Global Pazaryeri",
    stat2Sub: "Amazon, Walmart, Noon, Etsy...",
    stat3Number: "%100",
    stat3Label: "Uçtan Uca Operasyon",
    stat3Sub: "Gümrük, Depolama, Reklam, FX",
    stat4Number: "3-5 Gün",
    stat4Label: "Hızlı Teslimat Ağı",
    stat4Sub: "Bölgesel Lojistik Merkezleri",
    
    // Launch / Under Construction Section
    launchBadge: "YAPIM AŞAMASINDA & ÖN KAYIT",
    launchTitle: "Turqstore B2B Entegrasyon Portalı Yakında Açılıyor",
    launchDesc: "Pazaryeri entegrasyonlarımızı ve uluslararası dağıtım ağımızı daha da güçlendiriyoruz. İlk parti ihracat koridorunda yer almak ve ürünlerinizi küresel vitrine taşımak için şimdiden yerinizi ayırtın.",
    days: "Gün",
    hours: "Saat",
    minutes: "Dakika",
    seconds: "Saniye",
    newsletterPlaceholder: "Şirket / Marka e-posta adresiniz...",
    newsletterBtn: "Beni Haberdar Et",
    newsletterNote: "🔒 Spam göndermiyoruz. Sadece lansman duyurusu ve ihracat fırsatları iletilir.",
    
    // Tunnels Section
    tunnelsBadge: "KÜRESEL PAZARLAR",
    tunnelsTitle: "Stratejik İhracat Tünellerimiz",
    tunnelsSubtitle: "Ürünlerinizi sadece bir ülkeye değil, dünyanın en yüksek alım gücüne sahip 4 ana bölgesine ulaştırıyoruz.",
    
    tunnelUKTitle: "Birleşik Krallık (İngiltere)",
    tunnelUKDesc: "Londra merkezli dağıtım depoları, ertesi gün teslimat yetkinliği ve pound (GBP) bazlı yüksek sepet ortalaması.",
    tunnelUKPlatforms: "Amazon UK, Etsy, Fruugo, OnBuy",
    tunnelUKTransit: "3 - 4 İş Günü Express Teslimat",
    tunnelUKCustoms: "VAT & İngiltere Gümrük Uyumlu",
    
    tunnelUSATitle: "Amerika Birleşik Devletleri",
    tunnelUSADesc: "New Jersey ve Kaliforniya lojistik merkezleriyle dünyanın en büyük e-ticaret pazarına doğrudan giriş.",
    tunnelUSAPlatforms: "Amazon US (FBA/FBM), Walmart, Wayfair, eBay",
    tunnelUSATransit: "Section 321 Duty-Free (800$ altı vergisiz)",
    tunnelUSACustoms: "FDA Uyum & USD Doğrudan Tahsilat",
    
    tunnelMENATitle: "Suudi Arabistan & Körfez",
    tunnelMENADesc: "Riyad ve Dubai merkezli yüksek alım gücü. Türk markalarına ve kalitesine özel ilgi gösteren zengin tüketici kitlesi.",
    tunnelMENAPlatforms: "Amazon SA, Noon, Namshi, Yerel Perakende",
    tunnelMENATransit: "2 - 4 Gün Doğrudan Hava Kargo",
    tunnelMENACustoms: "SABER & SASO Sertifikasyon Yönetimi",
    
    tunnelAfricaTitle: "Afrika Kıtası Büyüme Koridoru",
    tunnelAfricaDesc: "Nijerya, Güney Afrika, Kenya ve Kuzey Afrika'da hızla genişleyen orta sınıf ve e-ticaret pazarlarına ilk adım.",
    tunnelAfricaPlatforms: "Jumia, Takealot, Konga, Toptan İthalat",
    tunnelAfricaTransit: "Gelişen Pazarlar Yüksek Kâr Marjı",
    tunnelAfricaCustoms: "Özel Dağıtıcı & B2B/B2C Hatları",
    
    // How It Works / Process
    processBadge: "İŞ MODELİMİZ",
    processTitle: "Markanız İçin 4 Adımda Küresel Başarı",
    processSubtitle: "Siz sadece kaliteli üretime odaklanın; yurtdışı gümrük, pazaryeri satışı ve lojistiği bize bırakın.",
    step1Title: "1. Marka & Kalite Seçimi",
    step1Desc: "Türk üreticilerin yüksek kaliteli ürünlerini inceliyor, yurtdışı talep ve regülasyon analizleriyle eşleştiriyoruz.",
    step2Title: "2. Gümrük & Tünel Entegrasyonu",
    step2Desc: "İhracat belgeleri, ambalaj standartları ve sertifikasyonları tamamlayıp hedef ülke depolarına sevk ediyoruz.",
    step3Title: "3. Global Pazaryeri Yönetimi",
    step3Desc: "Amazon, Noon ve Walmart gibi devlerde profesyonel listeleme, çok dilli müşteri hizmetleri ve reklam yönetimi yapıyoruz.",
    step4Title: "4. Döviz Geliri & Hızlı Tahsilat",
    step4Desc: "Satışlardan elde edilen gelirleri döviz bazında düzenli ve şeffaf raporlarla üretici hesabınıza aktarıyoruz.",
    
    // Products Showcase
    productsBadge: "TÜRK KALİTESİ",
    productsTitle: "Dünyanın Talep Ettiği Türk Ürün Grupları",
    productsSubtitle: "Uluslararası pazarlarda kalitesiyle rekabet üstünlüğü sağlayan odak kategorilerimiz:",
    cat1Title: "Ege Pamuğu & Ev Tekstili",
    cat1Desc: "Bornoz, peştemal, lüks otel serisi çarşaf ve havlularda dünya lideri Türk dokuması.",
    cat2Title: "Zanaatkar Deri & Aksesuar",
    cat2Desc: "Geleneksel usta işçiliği, el yapımı hakiki deri çantalar, cüzdanlar ve ayakkabılar.",
    cat3Title: "Gurme & Doğal Anadolu Lezzetleri",
    cat3Desc: "Soğuk sıkım zeytinyağları, Antep fıstıklı lokumlar, organik çaylar ve coğrafi işaretli ürünler.",
    cat4Title: "Modern Tasarım & Mutfak Zanaatı",
    cat4Desc: "Bakır işleme, seramik, porselen ve modern Türk mutfak gereçleri.",
    cat5Title: "Doğal Kozmetik & Bakım",
    cat5Desc: "Isparta gül suyu, zeytinyağlı geleneksel sabunlar ve bitkisel kişisel bakım serileri.",
    
    // Calculator
    calcBadge: "KAZANÇ SİMÜLATÖRÜ",
    calcTitle: "Markanızın İhracat Potansiyelini Hesaplayın",
    calcSubtitle: "Ürün kategorinizi ve aylık stok/ihracat adedinizi seçerek tahmini döviz ciro potansiyelinizi görün.",
    calcCatLabel: "Ürün Kategoriniz:",
    calcSkuLabel: "Hedef Aylık İhracat Adedi:",
    calcMarketLabel: "Öncelikli Hedef Pazar:",
    calcEstimatedMonthly: "Tahmini Aylık Küresel Ciro",
    calcEstimatedReach: "Ulaşılabilecek Potansiyel Alıcı",
    calcCurrency: "Dolar / Ay",
    calcPeople: "Alıcı / Ay",
    calcBtnApplyWithEstimate: "Bu Potansiyelle Başvuru Yap",
    
    // Founder / About
    aboutBadge: "HAKKIMIZDA & MİSYON",
    aboutTitle: "Anadolu'nun Üretim Gücünü Dünyaya Açıyoruz",
    aboutQuote: "“Türkiye'de üretilen binlerce ürün, dünya pazarlarındaki muadillerinden çok daha kaliteli. Eksik olan tek şey doğru ihracat tüneliydi. Turqstore bu köprüyü kurmak için doğdu.”",
    aboutFounder: "Turqstore Kurucu & Yönetim Ekibi",
    aboutPoint1: "Doğrudan Üretici - Küresel Müşteri Köprüsü",
    aboutPoint2: "Yurtdışı Şirket & Gümrük Yükü Olmadan Satış",
    aboutPoint3: "Şeffaf Raporlama ve Döviz Cinsi Düzenli Kazanç",
    
    // Application Modal
    modalTitle: "Marka İş Ortaklığı Başvurusu",
    modalSubtitle: "Ürünlerinizi Turqstore ihracat tünellerine dahil etmek için bilgilerinizi paylaşın.",
    formBrandName: "Marka / Şirket Adı *",
    formContactName: "Yetkili Adı Soyadı *",
    formEmail: "Kurumsal E-posta *",
    formPhone: "Telefon / WhatsApp *",
    formCategory: "Ana Ürün Kategorisi *",
    formTargetMarkets: "Öncelikli İhracat Hedefiniz *",
    formWebsite: "Mevcut Web Sitesi / Katalog Linki",
    formMonthlyVolume: "Mevcut Aylık Üretim / Stok Kapasitesi",
    formNotes: "Ürünleriniz Hakkında Kısa Bilgi",
    formSubmit: "Başvuruyu Gönder & Süreci Başlat",
    formSubmitting: "Gönderiliyor...",
    formSuccessTitle: "Tebrikler! Başvurunuz Alındı 🎉",
    formSuccessDesc: "İhracat operasyon ekibimiz ürünlerinizi ve pazar uyumluluğunuzu inceleyerek 24 saat içinde sizinle iletişime geçecektir.",
    formClose: "Kapat",
    
    // Footer
    footerDesc: "Türk üretici ve markalarını dünyanın en büyük pazaryerlerine taşıyan yeni nesil sınır ötesi e-ihracat ekosistemi.",
    footerCorridors: "İhracat Koridorları",
    footerQuickLinks: "Hızlı Bağlantılar",
    footerContactTitle: "İletişim & Merkez",
    footerAddress: "İstanbul, Türkiye (Global Operasyonlar: Londra, New York, Riyad)",
    footerRights: "Tüm hakları saklıdır. Turqstore Global Export Infrastructure.",
    footerPrivacy: "Gizlilik & Çerez Politikası",
    footerTerms: "Kullanım Şartları"
  },
  
  en: {
    // Navigation
    navVision: "Vision & Model",
    navTunnels: "Export Tunnels",
    navCategories: "Product Groups",
    navCalculator: "Revenue Simulator",
    navAbout: "About Us",
    navContact: "Contact",
    ctaPartner: "Apply as Brand Partner",
    
    // Announcement Banner
    announcementBadge: "NEXT-GEN EXPORT",
    announcementText: "Turqstore Global Tunnel Network 2026 Phase-1 Expansion has begun. VIP brand applications now open!",
    
    // Hero
    heroPill: "Global Trade Gateway from Anatolia to the World",
    heroTitleStart: "Connecting Premium Turkish Brands to",
    heroTitleGradient: "Global E-Commerce Tunnels",
    heroDesc: "Turqstore accelerates verified high-quality Turkish manufacturers and brands into the UK, US, Saudi Arabia (Gulf), and African marketplaces with zero bureaucracy, end-to-end smart logistics, and turnkey cross-border commerce.",
    heroBtnPrimary: "Expand Your Brand Globally",
    heroBtnSecondary: "Explore Export Tunnels",
    heroBadgeSecure: "Licensed Cross-Border & Multi-Currency Settlement Network",
    
    // Live Stats
    stat1Number: "4+",
    stat1Label: "Strategic Continental Tunnels",
    stat1Sub: "UK, USA, Gulf (MENA), Africa",
    stat2Number: "15+",
    stat2Label: "Active Global Marketplaces",
    stat2Sub: "Amazon, Walmart, Noon, Etsy...",
    stat3Number: "100%",
    stat3Label: "End-to-End Execution",
    stat3Sub: "Customs, Fulfillment, Ads, FX",
    stat4Number: "3-5 Days",
    stat4Label: "Fast Express Delivery",
    stat4Sub: "Regional Logistics Fulfillment Hubs",
    
    // Launch / Under Construction Section
    launchBadge: "UNDER DEVELOPMENT & VIP ONBOARDING",
    launchTitle: "Turqstore B2B Integration Portal Launching Soon",
    launchDesc: "We are expanding our marketplace integrations and global fulfillment corridors. Reserve your priority spot now to launch your brand into international channels in wave 1.",
    days: "Days",
    hours: "Hours",
    minutes: "Mins",
    seconds: "Secs",
    newsletterPlaceholder: "Company / Brand business email...",
    newsletterBtn: "Get Early Access",
    newsletterNote: "🔒 No spam. Only launch milestones and high-value export opportunities.",
    
    // Tunnels Section
    tunnelsBadge: "GLOBAL MARKETS",
    tunnelsTitle: "Our Strategic Cross-Border Corridors",
    tunnelsSubtitle: "Connecting your products not just to one country, but to the four most lucrative purchasing hubs on Earth.",
    
    tunnelUKTitle: "United Kingdom (UK)",
    tunnelUKDesc: "London-based fulfillment network, next-day nationwide delivery capabilities, and high-margin GBP basket values.",
    tunnelUKPlatforms: "Amazon UK, Etsy, Fruugo, OnBuy",
    tunnelUKTransit: "3 - 4 Business Days Express Delivery",
    tunnelUKCustoms: "Full VAT & UK Customs Compliance",
    
    tunnelUSATitle: "United States of America (USA)",
    tunnelUSADesc: "Direct gateway to the world's largest consumer market via East & West Coast fulfillment hubs.",
    tunnelUSAPlatforms: "Amazon US (FBA/FBM), Walmart, Wayfair, eBay",
    tunnelUSATransit: "Section 321 Duty-Free Entry (Under $800)",
    tunnelUSACustoms: "FDA Verified & Native USD Clearing",
    
    tunnelMENATitle: "Saudi Arabia & The Gulf",
    tunnelMENADesc: "High-purchasing power in Riyadh & Dubai. Affluent consumers with proven affinity for Turkish luxury and authenticity.",
    tunnelMENAPlatforms: "Amazon SA, Noon, Namshi, Retail Chains",
    tunnelMENATransit: "2 - 4 Days Direct Air Cargo Line",
    tunnelMENACustoms: "SABER & SASO Regulatory Clearance",
    
    tunnelAfricaTitle: "African Growth Corridors",
    tunnelAfricaDesc: "Surging middle class and rapid e-commerce expansion across Nigeria, South Africa, Kenya and North Africa.",
    tunnelAfricaPlatforms: "Jumia, Takealot, Konga, B2B Wholesales",
    tunnelAfricaTransit: "High-Margin Emerging Consumer Corridors",
    tunnelAfricaCustoms: "Exclusive Distribution & Hybrid B2B/B2C",
    
    // How It Works / Process
    processBadge: "HOW IT WORKS",
    processTitle: "4 Steps to Global Marketplace Dominance",
    processSubtitle: "You focus on high-standard production; we handle international customs, logistics, and store management.",
    step1Title: "1. Brand & Quality Curation",
    step1Desc: "We inspect your product catalog, evaluate international demand trends, and match regulatory specifications.",
    step2Title: "2. Customs & Corridor Prep",
    step2Desc: "We complete export documentation, export packaging standards, and ship goods directly into regional destination warehouses.",
    step3Title: "3. Omni-Channel Store Operation",
    step3Desc: "High-conversion product listings on Amazon, Noon, and Walmart, multilingual 24/7 customer care, and automated PPC campaigns.",
    step4Title: "4. FX Revenue & Automated Payouts",
    step4Desc: "Direct foreign currency earnings credited transparently to your corporate account with granular real-time analytics.",
    
    // Products Showcase
    productsBadge: "TURKISH EXCELLENCE",
    productsTitle: "Categories Global Customers Demand",
    productsSubtitle: "High-margin product categories where Turkish manufacturing delivers undisputed global competitive edge:",
    cat1Title: "Aegean Cotton & Luxury Home Textiles",
    cat1Desc: "Bathrobes, peshtemals, luxury hospitality bedding, and world-renowned Aegean Turkish weaving.",
    cat2Title: "Artisan Handcrafted Leather Goods",
    cat2Desc: "Centuries of master craftsmanship: handmade genuine leather bags, shoes, accessories, and wallets.",
    cat3Title: "Gourmet & Authentic Anatolian Delicacies",
    cat3Desc: "Cold-pressed extra virgin olive oils, Antep pistachio delights, botanical herbal infusions, and single-origin honey.",
    cat4Title: "Modern Tableware & Kitchen Craft",
    cat4Desc: "Hand-hammered copper, porcelain dinnerware, Turkish glass craftsmanship, and contemporary kitchen accessories.",
    cat5Title: "Botanical Cosmetics & Organic Care",
    cat5Desc: "Isparta organic rose water, traditional olive oil soaps, and Mediterranean herbal skincare formulations.",
    
    // Calculator
    calcBadge: "REVENUE SIMULATOR",
    calcTitle: "Calculate Your Brand's Export Potential",
    calcSubtitle: "Select your product category and estimated monthly export units to forecast your foreign currency revenue potential.",
    calcCatLabel: "Your Product Category:",
    calcSkuLabel: "Target Monthly Units:",
    calcMarketLabel: "Primary Target Corridor:",
    calcEstimatedMonthly: "Estimated Monthly Global Revenue",
    calcEstimatedReach: "Projected Monthly Shoppers",
    calcCurrency: "USD / Month",
    calcPeople: "Shoppers / Mo",
    calcBtnApplyWithEstimate: "Apply With This Forecast",
    
    // Founder / About
    aboutBadge: "ABOUT & FOUNDER'S VISION",
    aboutTitle: "Bridging Anatolia's Production with Global Demand",
    aboutQuote: "“Products crafted in Turkey frequently surpass international counterparts in both quality and durability. What was missing was an unobstructed, intelligent export pipeline. Turqstore was built to be that bridge.”",
    aboutFounder: "Turqstore Founder & Operations Team",
    aboutPoint1: "Direct Producer to Global Shopper Pipeline",
    aboutPoint2: "Zero Foreign Entity or Bureaucracy Hassle",
    aboutPoint3: "Transparent Analytics & Hard Currency Growth",
    
    // Application Modal
    modalTitle: "Brand Partnership Application",
    modalSubtitle: "Share your brand details to connect your products with Turqstore's international corridors.",
    formBrandName: "Brand / Company Name *",
    formContactName: "Contact Person Name *",
    formEmail: "Corporate Email *",
    formPhone: "Phone / WhatsApp *",
    formCategory: "Primary Product Category *",
    formTargetMarkets: "Target Export Corridor *",
    formWebsite: "Website / Catalog URL",
    formMonthlyVolume: "Monthly Production / Stock Capacity",
    formNotes: "Brief Summary of Your Products",
    formSubmit: "Submit Application & Start Review",
    formSubmitting: "Submitting...",
    formSuccessTitle: "Application Received Successfully! 🎉",
    formSuccessDesc: "Our global export operations team will review your catalog and market fit within 24 hours.",
    formClose: "Close",
    
    // Footer
    footerDesc: "The next-generation cross-border e-export ecosystem connecting high-quality Turkish manufacturers with global marketplaces.",
    footerCorridors: "Export Corridors",
    footerQuickLinks: "Quick Links",
    footerContactTitle: "HQ & Regional Hubs",
    footerAddress: "Istanbul, Türkiye (Regional Operations: London, New York, Riyadh)",
    footerRights: "All rights reserved. Turqstore Global Export Infrastructure.",
    footerPrivacy: "Privacy & Cookies Policy",
    footerTerms: "Terms of Service"
  }
};
