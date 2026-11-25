// Site content, Turkish and English side by side. Every claim comes from the client's brief or its live site
// (acrbilgi.com): nothing here is an invented number, customer or price.

export const SITE = {
  tr: { dir: '', home: '', contact: 'iletisim', name: 'ACR Bilgi', locale: 'tr_TR', lang: 'tr' },
  en: { dir: 'en/', home: 'en/', contact: 'contact', name: 'ACR Bilgi', locale: 'en_US', lang: 'en' },
};

export const UI = {
  tr: {
    cta: 'Görüşme planlayın', skip: 'İçeriğe geç', menu: 'Menü', mainNav: 'Ana menü', quick: 'Hızlı eylemler', homeLabel: 'ACR Bilgi, ana sayfa',
    navSoftware: 'Yazılım', navInfra: 'Altyapı', navLicence: 'Lisans ve web', navProcess: 'Süreç', navFaq: 'Sorular', navAbout: 'Hakkımızda',
    footLede: 'Logo ve Mikro kullanan şirketler için yazılım danışmanlığı ve kurumsal IT hizmetleri.',
    footSoftware: 'Yazılım', footServices: 'Hizmetler', footCompany: 'Şirket', footContact: 'İletişim',
    talkH: 'Hemen konuşalım', talkP: 'Sorunuz için bizi arayın ya da WhatsApp\'tan yazın.', callUs: 'Bizi arayın', waUs: 'WhatsApp\'tan yazın',
    call: 'Ara', email: 'E-posta', phone: 'Telefon', whatsapp: 'WhatsApp', address: 'Adres', directions: 'Yol tarifi alın', addrShort: 'Rüzgarlıbahçe, Beykoz',
    trademark: 'Ürün adları ve logolar ilgili sahiplerinin ticari markalarıdır.',
    kvkk: 'KVKK', privacy: 'Gizlilik ilkesi', other: 'Diğer hizmetler', what: 'Neler yapıyoruz', how: 'Nasıl çalışıyoruz', faq: 'Sık sorulan sorular',
    related: 'İlgili hizmetler', crumbHome: 'Ana sayfa', closeH: 'İhtiyacınızı birlikte netleştirelim', closeP: 'Yazılım, altyapı, lisans, web ve reklam: tek görüşmede konuşalım.',
    menuLead: { software: ['Özel yazılım', 'Logo ve Mikro\'nun yapmadığı işi birlikte yazalım.'], infra: ['Altyapı ve destek', 'Donanım, güvenlik ve kullanıcı desteği tek ekipten.'], licence: ['Lisans, web ve reklam', 'Lisanstan Google reklamına, dijital işleriniz.'] },
    switchLang: 'EN', switchTitle: 'English', seeServices: 'Diğer hizmetleri görün', updated: 'Son güncelleme', byline: 'Beykoz, İstanbul',
  },
  en: {
    cta: 'Book a meeting', skip: 'Skip to content', menu: 'Menu', mainNav: 'Main menu', quick: 'Quick actions', homeLabel: 'ACR Bilgi, home',
    navSoftware: 'Software', navInfra: 'Infrastructure', navLicence: 'Licensing and web', navProcess: 'Process', navFaq: 'Questions', navAbout: 'About',
    footLede: 'Software consultancy and corporate IT services for companies that run Logo and Mikro.',
    footSoftware: 'Software', footServices: 'Services', footCompany: 'Company', footContact: 'Contact',
    talkH: "Let's talk", talkP: 'Call us or message us on WhatsApp.', callUs: 'Call us', waUs: 'Message us on WhatsApp',
    call: 'Call', email: 'Email', phone: 'Phone', whatsapp: 'WhatsApp', address: 'Address', directions: 'Get directions', addrShort: 'Rüzgarlıbahçe, Beykoz',
    trademark: 'Product names and logos are trademarks of their owners.',
    kvkk: 'KVKK notice', privacy: 'Privacy policy', other: 'Other services', what: 'What we do', how: 'How we work', faq: 'Questions',
    related: 'Related services', crumbHome: 'Home', closeH: "Let's pin down what you need", closeP: 'Software, infrastructure, licensing, web and ads: one conversation.',
    menuLead: { software: ['Custom software', 'Let us build what Logo and Mikro do not do.'], infra: ['Infrastructure and support', 'Hardware, security and user support from one team.'], licence: ['Licensing, web and ads', 'From licences to Google Ads, your digital work.'] },
    switchLang: 'TR', switchTitle: 'Türkçe', seeServices: 'See our other services', updated: 'Last updated', byline: 'Beykoz, Istanbul',
  },
};

// service pages ------------------------------------------------------------------------------------------------
export const PAGES = [
  {
    id: 'ozel-yazilim', group: 'software', slug: { tr: 'ozel-yazilim-gelistirme', en: 'custom-software-development' },
    menu: { tr: ['Özel yazılım', 'Logo ve Mikro için'], en: ['Custom software', 'For Logo and Mikro'] },
    title: { tr: 'Logo ve Mikro için özel yazılım geliştirme', en: 'Custom software development for Logo and Mikro' },
    desc: { tr: 'Logo ve Mikro kullanan şirketler için özel yazılım: ticari yazılımın yapmadığı raporu, akışı ve entegrasyonu ACR Bilgi geliştirir. Kaynak kod sizin olur.', en: 'Custom software for companies that run Logo and Mikro. ACR Bilgi builds the report, workflow or integration your ERP does not cover. You own the source code.' },
    h1: { tr: 'Logo ve Mikro için özel yazılım geliştirme', en: 'Custom software for Logo and Mikro' },
    lead: { tr: 'Ticari yazılımınız yerinde kalır. Yapamadığı işi, ona bağlı özel bir yazılım olarak biz geliştiririz. Kapsamı yazılı netleştirir, kaynak kodu ve dokümantasyonu size teslim ederiz.', en: 'Your ERP stays where it is. We build the missing piece as custom software connected to it. We write the scope down first and hand you the source code and documentation.' },
    facts: { tr: [['Kapsam', 'Yazılı'], ['Kaynak kod', 'Sizin'], ['Çalışma saatleri', 'Pzt–Cuma 09:00–18:00'], ['Merkez', 'Beykoz, İstanbul']], en: [['Scope', 'In writing'], ['Source code', 'Yours'], ['Hours', 'Mon–Fri 09:00–18:00'], ['Based in', 'Beykoz, Istanbul']] },
    what: {
      tr: [['Eksik kalan iş akışı', 'Logo veya Mikro\'da olmayan onay, talep ve takip akışlarını yazarız.'], ['Özel raporlar', 'Hazır raporların vermediği kırılımı, kendi verinizden çıkarırız.'], ['Entegrasyonlar', 'E-ticaret, bayi ve saha uygulamalarını ERP ile konuştururuz.'], ['Yönetim portalları', 'Verinizi tek ekranda izlediğiniz web tabanlı portallar geliştiririz.']],
      en: [['Missing workflows', 'We build the approval, request and tracking flows your ERP does not have.'], ['Custom reports', 'We pull the breakdown that standard reports do not give from your own data.'], ['Integrations', 'We make your e-commerce, dealer and field apps talk to your ERP.'], ['Management portals', 'We build web portals that show your data on one screen.']],
    },
    steps: {
      tr: [['Neyin eksik olduğunu dinleriz', 'Mevcut kullanımınızı ve istediğiniz sonucu yazıya döküp paylaşırız.'], ['Geliştirir, verinizle sınarız', 'Çözümü sizin verinizle kurar, kullanacak ekibinizle deneriz.'], ['Devreye alır, destek veririz', 'Ekibinize kullanımı gösterir, canlıya aldıktan sonra da yanınızda kalırız.']],
      en: [['We listen for what is missing', 'We write down how you use the ERP today and the result you want, and share it.'], ['We build it and test on your data', 'We set it up on your data and try it with the people who will use it.'], ['We go live and support you', 'We show your team how to use it and stay with you after launch.']],
    },
    faq: {
      tr: [['Logo veya Mikro\'da yapamadığımız işi yazabilir misiniz?', 'Evet. Eksik kalan raporu, onay akışını ya da yönetim ekranını ERP verinizle çalışan bir yazılım olarak geliştiriyoruz.'], ['Yazılımın kaynak kodu kimde kalır?', 'Sizde. Geliştirdiğimiz yazılımın kaynak kodu ve dokümantasyonu size aittir. Yollarımız ayrılırsa sisteminiz çalışmaya devam eder.'], ['Logo veya Mikro\'yu bırakmamız gerekir mi?', 'Hayır. Geliştirdiğimiz yazılımlar ERP\'nizin yerine geçmez, yapmadığı işleri tamamlar.'], ['İşe nasıl başlıyoruz?', 'Kısa bir görüşmede ihtiyacınızı dinler, kapsamı, süreyi ve bedeli yazılı olarak paylaşırız.']],
      en: [['Can you build what Logo or Mikro cannot do?', 'Yes. We build the missing report, approval flow or management screen as software that works with your ERP data.'], ['Who keeps the source code?', 'You do. The source code and documentation of what we build belong to you. If we part ways, your system keeps running.'], ['Do we have to leave Logo or Mikro?', 'No. What we build does not replace your ERP. It completes what the ERP does not do.'], ['How do we start?', 'In a short meeting we listen to your need, then share the scope, timeline and price in writing.']],
    },
    visual: 'checklist', related: ['logo', 'mikro', 'portal'],
  },
  {
    id: 'logo', group: 'software', slug: { tr: 'logo-ozel-yazilim', en: 'logo-custom-software' },
    menu: { tr: ['Logo için', 'Rapor, akış, entegrasyon'], en: ['For Logo', 'Reports, flows, integrations'] },
    title: { tr: 'Logo için özel yazılım ve entegrasyon', en: 'Custom software and integrations for Logo' },
    desc: { tr: 'Logo kullanan şirketler için özel rapor, onay akışı, entegrasyon ve yönetim portalı. Logo\'da yapamadığınız işi dijital çözüme çeviriyoruz.', en: 'Custom reports, approval flows, integrations and management portals for companies that use Logo. We turn what Logo cannot do into a digital solution.' },
    h1: { tr: 'Logo için özel yazılım ve entegrasyon', en: 'Custom software and integrations for Logo' },
    lead: { tr: 'Logo\'da yapamadığınız işi, Logo verinizle çalışan bir portal, rapor ya da entegrasyon olarak geliştiriyoruz. Logo yerinde kalır, eksik iş tamamlanır.', en: 'What you cannot do in Logo, we build as a portal, report or integration that works with your Logo data. Logo stays, the missing work gets done.' },
    facts: { tr: [['Kaynak', 'Logo verisi'], ['Çıktı', 'Portal, rapor, entegrasyon'], ['Kaynak kod', 'Sizin'], ['Destek', 'Yerinde ve uzaktan']], en: [['Source', 'Logo data'], ['Output', 'Portal, report, integration'], ['Source code', 'Yours'], ['Support', 'On site and remote']] },
    what: {
      tr: [['Cari ve stok analizi', 'Logo verinizden cari, stok ve satış analizlerini portalda gösteririz.'], ['Onay akışları', 'Satın alma, iskonto ve avans onaylarını dijital ortama taşırız.'], ['Entegrasyonlar', 'Logo\'yu e-ticaret, bayi ve saha uygulamalarıyla bağlarız.'], ['Otomatik raporlar', 'Haftalık özetleri ekibinize e-postayla kendiliğinden göndeririz.']],
      en: [['Customer and stock analysis', 'We show customer, stock and sales analysis from your Logo data in a portal.'], ['Approval flows', 'We move purchase, discount and advance approvals online.'], ['Integrations', 'We connect Logo with e-commerce, dealer and field apps.'], ['Automatic reports', 'We email weekly summaries to your team on their own.']],
    },
    steps: {
      tr: [['Logo kullanımınızı inceleriz', 'Hangi modülü nasıl kullandığınızı ve nerede tıkandığınızı dinleriz.'], ['Veri bağlantısını kurar, geliştiririz', 'Logo verinizi güvenle bağlar, çözümü sizin verinizle sınarız.'], ['Canlıya alır, eğitiriz', 'Ekibinize kullanımı gösterir, sonrasında destek veririz.']],
      en: [['We review how you use Logo', 'We listen to which modules you use and where you get stuck.'], ['We connect the data and build', 'We connect your Logo data safely and test the solution on it.'], ['We go live and train your team', 'We show your team how it works and support you afterwards.']],
    },
    faq: {
      tr: [['Logo\'da olmayan bir raporu alabilir miyiz?', 'Evet. İhtiyacınız olan kırılımı Logo verinizden çıkaran özel bir rapor ya da panel geliştiriyoruz.'], ['Logo\'nun güncellemeleri çözümü bozar mı?', 'Çözümü Logo\'ya bağlı, ayrı bir yazılım olarak kurarız. Kapsamı ve bağlantı yöntemini baştan yazılı netleştiririz.'], ['Logo\'nun yerine mi geçiyorsunuz?', 'Hayır. Geliştirdiğimiz yazılım Logo\'nun yerine geçmez, yapmadığı işi tamamlar.']],
      en: [['Can we get a report Logo does not have?', 'Yes. We build a custom report or dashboard that pulls the breakdown you need from your Logo data.'], ['Will Logo updates break the solution?', 'We build it as separate software connected to Logo. We agree the scope and the connection method in writing first.'], ['Do you replace Logo?', 'No. What we build does not replace Logo. It completes what Logo does not do.']],
    },
    visual: 'files', related: ['ozel-yazilim', 'portal', 'mikro'],
  },
  {
    id: 'mikro', group: 'software', slug: { tr: 'mikro-ozel-yazilim', en: 'mikro-custom-software' },
    menu: { tr: ['Mikro için', 'Yetkili çözüm ortağı'], en: ['For Mikro', 'Authorised partner'] },
    title: { tr: 'Mikro için özel yazılım ve entegrasyon', en: 'Custom software and integrations for Mikro' },
    desc: { tr: 'Mikro ERP kullanan şirketler için özel yazılım, rapor ve entegrasyon. Mikro Yazılım yetkili çözüm ortağı ACR Bilgi, ERP\'nizin yapmadığı işi tamamlar.', en: 'Custom software, reports and integrations for companies that run Mikro ERP. ACR Bilgi, an authorised Mikro partner, completes what your ERP does not do.' },
    h1: { tr: 'Mikro için özel yazılım ve entegrasyon', en: 'Custom software and integrations for Mikro' },
    lead: { tr: 'Mikro Yazılım yetkili çözüm ortağı olarak kurulum ve desteğin yanında, Mikro\'nun yapmadığı işleri özel yazılımla tamamlıyoruz: raporlar, akışlar, portallar ve entegrasyonlar.', en: 'As an authorised Mikro Yazılım partner we handle setup and support, and we also build what Mikro does not do: reports, workflows, portals and integrations.' },
    facts: { tr: [['Ortaklık', 'Yetkili Mikro çözüm ortağı'], ['Tecrübe', '20+ yıl'], ['Çıktı', 'Rapor, portal, entegrasyon'], ['Kaynak kod', 'Sizin']], en: [['Partnership', 'Authorised Mikro partner'], ['Experience', '20+ years'], ['Output', 'Report, portal, integration'], ['Source code', 'Yours']] },
    what: {
      tr: [['SQL ve API tabanlı entegrasyon', 'CRM, e-ticaret ve özel yazılımları Mikro ERP ile bütünleştiririz.'], ['Yönetim panelleri', 'Finans, satış ve stok verinizi güncel panolarda izlersiniz.'], ['Özel rapor ve akışlar', 'Hazır raporların vermediği kırılımı ve onay akışlarını geliştiririz.'], ['Kurulum ve destek', 'Mikro ürün ailesinin kurulumu, uyarlanması ve desteği de bizden.']],
      en: [['SQL and API integrations', 'We connect CRM, e-commerce and custom software to Mikro ERP.'], ['Management dashboards', 'You follow finance, sales and stock data on live dashboards.'], ['Custom reports and workflows', 'We build the breakdowns and approval flows that standard reports lack.'], ['Setup and support', 'Setup, adaptation and support of the Mikro product family come from us too.']],
    },
    steps: {
      tr: [['Mevcut kurulumunuza bakarız', 'Hangi Mikro paketini nasıl kullandığınızı ve eksik işi inceleriz.'], ['Geliştirir, verinizle sınarız', 'Çözümü Mikro verinizle çalışacak biçimde kurar, ekibinizle deneriz.'], ['Devreye alır, destek veririz', 'Canlıya aldıktan sonra da destek sürer.']],
      en: [['We look at your current setup', 'We review which Mikro package you use, how, and what is missing.'], ['We build and test on your data', 'We set it up to work with your Mikro data and try it with your team.'], ['We go live and keep supporting', 'Support continues after launch.']],
    },
    faq: {
      tr: [['Mikro\'ya entegre özel yazılım yapıyor musunuz?', 'Evet. CRM, e-ticaret ve özel yazılımlar ile Mikro ERP arasında API ve SQL tabanlı entegrasyonlar geliştiriyoruz.'], ['Mikro yetkili çözüm ortağı mısınız?', 'Evet. ACR Bilgi, Mikro Yazılım yetkili çözüm ortağıdır; ürün ailesinin satışını, kurulumunu ve desteğini yürütür.'], ['Mevcut Mikro kurulumumuzu değiştirmeden çalışabilir misiniz?', 'Evet. Çözümü mevcut kurulumunuza bağlı olarak geliştirir, ne yapılacağını ve yapılmayacağını yazılı netleştiririz.']],
      en: [['Do you build custom software integrated with Mikro?', 'Yes. We build API and SQL based integrations between Mikro ERP and CRM, e-commerce and custom software.'], ['Are you an authorised Mikro partner?', 'Yes. ACR Bilgi is an authorised Mikro Yazılım partner and handles sales, setup and support of the product family.'], ['Can you work without changing our current Mikro setup?', 'Yes. We build on top of your existing setup and write down what will and will not be done.']],
    },
    visual: 'files2', related: ['ozel-yazilim', 'portal', 'destek'],
  },
  {
    id: 'portal', group: 'software', slug: { tr: 'yonetim-portali', en: 'management-portals' },
    menu: { tr: ['Yönetim portalı', 'Analiz ve onay ekranları'], en: ['Management portals', 'Analysis and approval screens'] },
    title: { tr: 'Analiz ve yönetim portalı geliştirme', en: 'Analysis and management portal development' },
    desc: { tr: 'Logo ve Mikro verinizi tek ekranda izlediğiniz analiz ve yönetim portalları. Satış, stok, cari ve onay süreçleri için özel portal geliştirme.', en: 'Analysis and management portals that show your Logo and Mikro data on one screen. Custom portals for sales, stock, accounts and approvals.' },
    h1: { tr: 'Analiz ve yönetim portalı geliştirme', en: 'Analysis and management portal development' },
    lead: { tr: 'Satış, stok, cari ve onay süreçlerini ERP verinizle çalışan tek bir web portalında toplarız. Kimin neyi göreceğini siz belirlersiniz.', en: 'We bring sales, stock, accounts and approvals into one web portal that runs on your ERP data. You decide who sees what.' },
    facts: { tr: [['Veri', 'Logo ve Mikro'], ['Erişim', 'Tarayıcıdan'], ['Yetki', 'Kullanıcı bazında'], ['Kaynak kod', 'Sizin']], en: [['Data', 'Logo and Mikro'], ['Access', 'From the browser'], ['Permissions', 'Per user'], ['Source code', 'Yours']] },
    what: {
      tr: [['Satış ve cari analizi', 'Bayi, ürün ve müşteri bazında satışı tek ekranda izlersiniz.'], ['Stok ve depo görünümü', 'Stok yaşlandırma ve depo durumunu güncel görürsünüz.'], ['Onay akışları', 'Satın alma, iskonto ve avans onaylarını portaldan yönetirsiniz.'], ['Yetki yönetimi', 'Kimin hangi veriyi göreceğini tek ekrandan belirlersiniz.']],
      en: [['Sales and account analysis', 'You follow sales by dealer, product and customer on one screen.'], ['Stock and warehouse view', 'You see stock ageing and warehouse status up to date.'], ['Approval flows', 'You manage purchase, discount and advance approvals in the portal.'], ['Permission management', 'You set who sees which data from one screen.']],
    },
    steps: {
      tr: [['Hangi veriyi izlemek istediğinizi yazarız', 'Raporları, panoları ve yetkileri birlikte netleştiririz.'], ['Portalı kurar, verinizle sınarız', 'Portalı ERP verinize bağlar, ekibinizle deneriz.'], ['Canlıya alır, destek veririz', 'Girişleri açar, kullanımı gösterir ve sonrasında yanınızda kalırız.']],
      en: [['We write down what you want to see', 'Together we pin down the reports, dashboards and permissions.'], ['We build the portal and test on your data', 'We connect it to your ERP data and try it with your team.'], ['We go live and support you', 'We open the logins, show how it works and stay with you afterwards.']],
    },
    faq: {
      tr: [['Portal Logo veya Mikro verisini canlı mı gösterir?', 'Evet. Portal ERP verinize bağlı çalışır; hangi tabloların hangi sıklıkta eşitleneceğini birlikte belirleriz.'], ['Portalı kimler kullanabilir?', 'Yetkileri siz tanımlarsınız. Her kullanıcı yalnızca kendisine açtığınız veriyi görür.'], ['Mevcut raporlarımızı taşıyabilir misiniz?', 'Evet. Kullandığınız raporları inceler, portalda aynı ya da daha iyi bir kırılımla sunarız.'], ['Excel ve Power BI ile çalışır mı?', 'Evet. Raporları Excel olarak alabilir, Power BI panolarını aynı veriyle besleyebilirsiniz.']],
      en: [['Does the portal show Logo or Mikro data live?', 'Yes. The portal runs on your ERP data. We decide together which tables sync and how often.'], ['Who can use the portal?', 'You define the permissions. Each user sees only the data you open to them.'], ['Can you move our existing reports?', 'Yes. We review the reports you use and offer the same or a better breakdown in the portal.'], ['Does it work with Excel and Power BI?', 'Yes. You can export reports to Excel and feed Power BI dashboards with the same data.']],
    },
    visual: 'toggles', related: ['ozel-yazilim', 'logo', 'mikro'],
  },
  {
    id: 'donanim', group: 'infra', slug: { tr: 'kurumsal-donanim-sunucu', en: 'hardware-and-servers' },
    menu: { tr: ['Donanım ve sunucu', 'Satış, kurulum, yapılandırma'], en: ['Hardware and servers', 'Sales, setup, configuration'] },
    title: { tr: 'Kurumsal donanım ve sunucu satışı ve kurulumu', en: 'Corporate hardware and server sales and setup' },
    desc: { tr: 'Kurumsal bilgisayar ve sunucu satışı, kurulumu ve yapılandırması. ACR Bilgi şirketinizin donanım ihtiyacını belirler, tedarik eder ve devreye alır.', en: 'Sales, setup and configuration of corporate computers and servers. ACR Bilgi sizes your hardware, supplies it and puts it into service.' },
    h1: { tr: 'Kurumsal donanım ve sunucu satışı ve kurulumu', en: 'Corporate hardware and server sales and setup' },
    lead: { tr: 'Bilgisayar ve sunucu ihtiyacınızı işinize göre belirler, tedarik eder, kurar ve yapılandırırız. ERP yazılımınızın çalışacağı altyapıyı baştan doğru kurarız.', en: 'We size your computer and server needs to your work, supply, install and configure them. We build the infrastructure your ERP runs on correctly from the start.' },
    facts: { tr: [['Kapsam', 'Satış, kurulum, yapılandırma'], ['Destek', 'Yerinde ve uzaktan'], ['Deneyim', '20+ yıl'], ['Merkez', 'Beykoz, İstanbul']], en: [['Scope', 'Sales, setup, configuration'], ['Support', 'On site and remote'], ['Experience', '20+ years'], ['Based in', 'Beykoz, Istanbul']] },
    what: {
      tr: [['Sunucu seçimi ve kurulumu', 'ERP ve dosya sunucunuzu iş yükünüze göre belirler, kurarız.'], ['Bilgisayar ve çevre birimleri', 'Çalışanlarınız için kurumsal bilgisayar ve çevre birimi tedarik ederiz.'], ['Yedekleme', 'Verinizi düzenli yedekleyen bir düzen kurar, geri dönüşü deneriz.'], ['Yapılandırma ve taşıma', 'Mevcut sunucunuzdan yenisine veriyi taşır, yapılandırırız.']],
      en: [['Server selection and setup', 'We size and install your ERP and file servers for your workload.'], ['Computers and peripherals', 'We supply corporate computers and peripherals for your staff.'], ['Backup', 'We set up regular backups and test the restore.'], ['Configuration and migration', 'We move data from your old server to the new one and configure it.']],
    },
    steps: {
      tr: [['İhtiyacı belirleriz', 'Kullanıcı sayınıza ve yazılımlarınıza göre donanımı boyutlandırırız.'], ['Tedarik eder, kurarız', 'Donanımı tedarik eder, kurar ve yapılandırırız.'], ['Devreye alır, destek veririz', 'Çalışır halde teslim eder, sonrasında destek veririz.']],
      en: [['We assess your needs', 'We size hardware to your number of users and software.'], ['We supply and install', 'We supply, install and configure the hardware.'], ['We hand over and support', 'We deliver it working and support you afterwards.']],
    },
    faq: {
      tr: [['Hangi donanımı tedarik ediyorsunuz?', 'Kurumsal bilgisayar, sunucu ve çevre birimleri. İhtiyacınıza göre ne gerektiğini birlikte belirleriz.'], ['Kurulumu da yapıyor musunuz?', 'Evet. Satışın yanında kurulum, yapılandırma ve veri taşıma da bizden.'], ['ERP sunucusunu da kurar mısınız?', 'Evet. Logo veya Mikro\'nun çalışacağı sunucuyu yapılandırır, yedekleme düzenini kurarız.']],
      en: [['Which hardware do you supply?', 'Corporate computers, servers and peripherals. We decide together what you need.'], ['Do you also install it?', 'Yes. Besides sales we handle setup, configuration and data migration.'], ['Can you set up the ERP server too?', 'Yes. We configure the server your Logo or Mikro runs on and set up the backup routine.']],
    },
    visual: 'checklist2', related: ['firewall', 'lisans', 'destek'],
  },
  {
    id: 'firewall', group: 'infra', slug: { tr: 'firewall-ag-guvenligi', en: 'firewall-network-security' },
    menu: { tr: ['Firewall ve ağ güvenliği', 'Ağınızı ve verinizi koruyun'], en: ['Firewall and network security', 'Protect your network and data'] },
    title: { tr: 'Firewall ve ağ güvenliği çözümleri', en: 'Firewall and network security solutions' },
    desc: { tr: 'Şirketiniz için firewall, ağ kurulumu ve güvenlik çözümleri. ACR Bilgi ofis ağınızı ve verinizi yetkisiz erişime karşı korur.', en: 'Firewall, network setup and security solutions for your company. ACR Bilgi protects your office network and data against unauthorised access.' },
    h1: { tr: 'Firewall ve ağ güvenliği çözümleri', en: 'Firewall and network security solutions' },
    lead: { tr: 'Firewall ve ağ çözümleriyle ofis ağınızı ve verinizi yetkisiz erişime karşı koruruz. Kuralları sizinle birlikte belirler, kurar ve destek veririz.', en: 'We protect your office network and data against unauthorised access with firewall and network solutions. We set the rules with you, install them and support you.' },
    facts: { tr: [['Kapsam', 'Firewall, ağ, Wi-Fi'], ['Kurulum', 'Yerinde'], ['Destek', 'Yerinde ve uzaktan'], ['Deneyim', '20+ yıl']], en: [['Scope', 'Firewall, network, Wi-Fi'], ['Setup', 'On site'], ['Support', 'On site and remote'], ['Experience', '20+ years']] },
    what: {
      tr: [['Firewall kurulumu', 'Şirket ağınızın girişini kurallarla korur, erişimi kontrol altında tutarız.'], ['Ağ altyapısı', 'Kablolu ve kablosuz ağınızı planlar, kurar ve yapılandırırız.'], ['Uzaktan erişim', 'Çalışanlarınızın güvenli uzaktan bağlanmasını sağlarız.'], ['Yedekleme ve kurtarma', 'Verinizi yedekleyen ve gerektiğinde geri getiren düzeni kurarız.']],
      en: [['Firewall setup', 'We guard the entrance to your network with rules and keep access under control.'], ['Network infrastructure', 'We plan, install and configure your wired and wireless network.'], ['Remote access', 'We let your staff connect remotely and securely.'], ['Backup and recovery', 'We set up the routine that backs up your data and restores it when needed.']],
    },
    steps: {
      tr: [['Ağınıza bakarız', 'Mevcut ağınızı, cihazlarınızı ve erişim ihtiyaçlarınızı inceleriz.'], ['Kuralları kurar, sınarız', 'Firewall ve ağ kurallarını kurar, çalışanlarınızla deneriz.'], ['Devreye alır, izleriz', 'Canlıya alır, sonrasında destek veririz.']],
      en: [['We look at your network', 'We review your current network, devices and access needs.'], ['We set the rules and test', 'We install the firewall and network rules and try them with your staff.'], ['We go live and keep watch', 'We go live and support you afterwards.']],
    },
    faq: {
      tr: [['Firewall çözümü sunuyor musunuz?', 'Evet. Şirketiniz için firewall tedarik eder, kurar ve yapılandırırız.'], ['Uzaktan çalışan personel için çözüm var mı?', 'Evet. Çalışanlarınızın şirket ağına güvenli uzaktan bağlanması için çözüm kurarız.'], ['Kurulumdan sonra destek veriyor musunuz?', 'Evet. Yerinde ve uzaktan destek veriyoruz.']],
      en: [['Do you offer firewall solutions?', 'Yes. We supply, install and configure a firewall for your company.'], ['Is there a solution for remote staff?', 'Yes. We set up secure remote access to your company network.'], ['Do you support us after installation?', 'Yes. We provide on-site and remote support.']],
    },
    visual: 'toggles2', related: ['donanim', 'destek', 'lisans'],
  },
  {
    id: 'lisans', group: 'licence', slug: { tr: 'microsoft-lisanslama', en: 'microsoft-licensing' },
    menu: { tr: ['Microsoft lisanslama', 'Doğru paket, doğru kurulum'], en: ['Microsoft licensing', 'The right plan, set up right'] },
    title: { tr: 'Microsoft lisanslama hizmeti', en: 'Microsoft licensing service' },
    desc: { tr: 'Şirketinize uygun Microsoft lisanslarını belirliyor, tedarik ediyor ve kurulumunda yanınızda oluyoruz. Microsoft 365, Windows ve Azure lisanslama.', en: 'We determine the Microsoft licences your company needs, supply them and support the setup. Microsoft 365, Windows and Azure licensing.' },
    h1: { tr: 'Microsoft lisanslama hizmeti', en: 'Microsoft licensing service' },
    lead: { tr: 'Çalışan sayınıza ve işinize uygun Microsoft lisanslarını belirler, tedarik eder, kurulumda yanınızda oluruz. Gereğinden büyük paketi önermeyiz.', en: 'We determine the Microsoft licences that fit your headcount and work, supply them and stay with you through setup. We do not recommend a bigger plan than you need.' },
    facts: { tr: [['Ürünler', 'Microsoft 365, Windows, Azure'], ['Kapsam', 'Belirleme, tedarik, kurulum'], ['Destek', 'Yerinde ve uzaktan'], ['Yaklaşım', 'Gerekmeyeni satmayız']], en: [['Products', 'Microsoft 365, Windows, Azure'], ['Scope', 'Sizing, supply, setup'], ['Support', 'On site and remote'], ['Approach', 'We do not oversell']] },
    what: {
      tr: [['Doğru paketi seçeriz', 'Çalışan sayınıza ve işinize uygun lisansı belirleriz.'], ['Lisansı tedarik ederiz', 'Siparişi ve aktivasyonu sizin adınıza yürütürüz.'], ['Kurulumda yanınızda oluruz', 'Cihazlara ve kullanıcılara lisansı tanımlarız.'], ['Lisansları düzenli tutarız', 'Yeni çalışan ve ayrılanlar için lisansları güncel tutarız.']],
      en: [['We choose the right plan', 'We determine the licence that fits your headcount and work.'], ['We supply the licence', 'We handle the order and activation on your behalf.'], ['We stay with you through setup', 'We assign licences to devices and users.'], ['We keep licences in order', 'We keep licences current as people join and leave.']],
    },
    steps: {
      tr: [['Kullanımınızı dinleriz', 'Hangi uygulamaları kimlerin kullandığını belirleriz.'], ['Paketi önerir, tedarik ederiz', 'İhtiyacınıza uygun lisansı önerir ve tedarik ederiz.'], ['Tanımlar, destek veririz', 'Lisansları kullanıcılara tanımlar, sonrasında destek veririz.']],
      en: [['We listen to how you work', 'We identify which apps who uses.'], ['We recommend and supply', 'We recommend the licence that fits and supply it.'], ['We assign and support', 'We assign licences to users and support you afterwards.']],
    },
    faq: {
      tr: [['Microsoft lisanslama hizmeti veriyor musunuz?', 'Evet. Şirketinize uygun lisansları belirliyor, tedarik ediyor ve kurulumunda yanınızda oluyoruz.'], ['Hangi Microsoft ürünleri için lisans sağlıyorsunuz?', 'Microsoft 365, Windows ve Azure gibi ürünler için lisans belirler ve tedarik ederiz.'], ['Kaç lisansa ihtiyacımız olduğunu bilmiyoruz.', 'Sorun değil. Çalışanlarınızın kullanımını dinler, gereken lisans sayısını ve türünü birlikte belirleriz.']],
      en: [['Do you provide Microsoft licensing?', 'Yes. We determine the licences your company needs, supply them and support the setup.'], ['Which Microsoft products do you license?', 'We size and supply licences for products such as Microsoft 365, Windows and Azure.'], ['We do not know how many licences we need.', 'That is fine. We listen to how your staff work and decide the number and type together.']],
    },
    visual: 'integrations', related: ['donanim', 'web', 'destek'],
  },
  {
    id: 'web', group: 'licence', slug: { tr: 'web-sitesi-tasarimi', en: 'web-design' },
    menu: { tr: ['Web sitesi tasarımı', 'Hızlı, mobil uyumlu'], en: ['Web design', 'Fast and mobile friendly'] },
    title: { tr: 'Kurumsal web sitesi tasarımı', en: 'Corporate website design' },
    desc: { tr: 'Hızlı, mobil uyumlu ve arama motorlarının ile yapay zeka aramalarının okuyabileceği yapıda kurumsal web sitesi tasarımı. ACR Bilgi tasarlar ve yayına alır.', en: 'Corporate website design that is fast, mobile friendly and structured for search engines and AI search to read. ACR Bilgi designs and launches it.' },
    h1: { tr: 'Kurumsal web sitesi tasarımı', en: 'Corporate website design' },
    lead: { tr: 'Şirketinizin web sitesini hızlı, mobil uyumlu ve arama motorlarının ile yapay zeka aramalarının okuyacağı bir yapıda tasarlarız. İçeriği sizinle birlikte yazarız.', en: 'We design your company website to be fast, mobile friendly and structured so search engines and AI search can read it. We write the content with you.' },
    facts: { tr: [['Tasarım', 'Mobil uyumlu'], ['Yapı', 'Arama ve yapay zeka için'], ['İçerik', 'Birlikte yazılır'], ['Destek', 'Yayın sonrası']], en: [['Design', 'Mobile friendly'], ['Structure', 'For search and AI'], ['Content', 'Written together'], ['Support', 'After launch']] },
    what: {
      tr: [['Kurumsal site tasarımı', 'Şirketinizi ve hizmetlerinizi net anlatan bir site tasarlarız.'], ['Mobil uyum', 'Telefonda ve tablette de aynı kalitede çalışan sayfalar kurarız.'], ['Arama görünürlüğü', 'Başlıkları, sayfa yapısını ve yapılandırılmış veriyi arama motorları için düzenleriz.'], ['Yayın ve bakım', 'Siteyi yayına alır, sonrasında güncel tutmanıza yardım ederiz.']],
      en: [['Corporate site design', 'We design a site that explains your company and services clearly.'], ['Mobile support', 'We build pages that work just as well on phones and tablets.'], ['Search visibility', 'We organise headings, page structure and structured data for search engines.'], ['Launch and upkeep', 'We launch the site and help you keep it up to date.']],
    },
    steps: {
      tr: [['Neyi anlatmak istediğinizi netleştiririz', 'Hizmetlerinizi ve ziyaretçinizin sorularını birlikte yazarız.'], ['Tasarlar ve yazarız', 'Sayfaları tasarlar, içeriği yazar, telefonda dener.'], ['Yayına alır, destek veririz', 'Siteyi yayına alır, sonrasında yanınızda kalırız.']],
      en: [['We pin down what you want to say', 'We write your services and your visitors\' questions together.'], ['We design and write', 'We design the pages, write the content and test on phones.'], ['We launch and support', 'We launch the site and stay with you afterwards.']],
    },
    faq: {
      tr: [['Web sitesi tasarımı hizmeti veriyor musunuz?', 'Evet. Kurumsal web sitenizi tasarlıyor ve yayına alıyoruz.'], ['Site telefonda iyi görünür mü?', 'Evet. Sayfaları mobil uyumlu tasarlıyor ve telefonda deniyoruz.'], ['Google ve yapay zeka aramalarında çıkması için ne yapıyorsunuz?', 'Sayfaları net başlıklarla, açık cevaplarla ve yapılandırılmış veriyle kurarız. Böylece arama motorları ve yapay zeka içeriği doğru okur.']],
      en: [['Do you offer web design?', 'Yes. We design and launch your corporate website.'], ['Will the site look good on a phone?', 'Yes. We design pages to be mobile friendly and test them on phones.'], ['What do you do to appear in Google and AI search?', 'We build pages with clear headings, direct answers and structured data, so search engines and AI read the content correctly.']],
    },
    visual: 'search', related: ['ads', 'lisans', 'ozel-yazilim'],
  },
  {
    id: 'ads', group: 'licence', slug: { tr: 'google-reklam-planlamasi', en: 'google-ads-planning' },
    menu: { tr: ['Google reklam planlaması', 'Bütçe, hedefleme, rapor'], en: ['Google Ads planning', 'Budget, targeting, reporting'] },
    title: { tr: 'Google reklam planlaması', en: 'Google Ads planning' },
    desc: { tr: 'Google reklam bütçenizi, hedeflemenizi ve kampanya yapınızı planlıyoruz. ACR Bilgi sonuçları raporlar, kampanyayı veriye göre düzeltir.', en: 'We plan your Google Ads budget, targeting and campaign structure. ACR Bilgi reports results and adjusts the campaign based on data.' },
    h1: { tr: 'Google reklam planlaması', en: 'Google Ads planning' },
    lead: { tr: 'Google reklam bütçenizi, hedeflemenizi ve kampanya yapınızı planlarız. Sonuçları raporlar, kampanyayı veriye göre düzeltiriz.', en: 'We plan your Google Ads budget, targeting and campaign structure. We report the results and adjust the campaign to the data.' },
    facts: { tr: [['Kapsam', 'Plan, kurulum, rapor'], ['Araçlar', 'Google Ads, Analytics'], ['Rapor', 'Düzenli'], ['Web sitesi', 'Birlikte kurgulanır']], en: [['Scope', 'Plan, setup, report'], ['Tools', 'Google Ads, Analytics'], ['Reporting', 'Regular'], ['Website', 'Planned together']] },
    what: {
      tr: [['Bütçe ve hedef planı', 'Reklam bütçenizi hedefinize göre planlarız.'], ['Kampanya yapısı', 'Anahtar kelimeleri, reklam gruplarını ve hedeflemeyi kurarız.'], ['Ölçüm', 'Google Analytics ile ziyaret ve dönüşümü ölçeriz.'], ['Raporlama', 'Sonuçları sizinle paylaşır, kampanyayı veriye göre düzeltiriz.']],
      en: [['Budget and goal plan', 'We plan your ad budget around your goal.'], ['Campaign structure', 'We set up keywords, ad groups and targeting.'], ['Measurement', 'We measure visits and conversions with Google Analytics.'], ['Reporting', 'We share the results and adjust the campaign to the data.']],
    },
    steps: {
      tr: [['Hedefinizi dinleriz', 'Kimlere ulaşmak istediğinizi ve bütçenizi birlikte belirleriz.'], ['Kampanyayı kurarız', 'Kampanyayı kurar, ölçümü bağlarız.'], ['Raporlar, düzeltiriz', 'Sonuçları raporlar, kampanyayı veriye göre düzeltiriz.']],
      en: [['We listen to your goal', 'We decide together who you want to reach and your budget.'], ['We set up the campaign', 'We build the campaign and connect measurement.'], ['We report and adjust', 'We report the results and adjust the campaign to the data.']],
    },
    faq: {
      tr: [['Google reklam planlaması hizmeti veriyor musunuz?', 'Evet. Bütçeyi, hedeflemeyi ve kampanya yapısını planlıyor, sonuçları raporluyoruz.'], ['Reklam ile web sitesini birlikte yapıyor musunuz?', 'Evet. Web sitenizi tasarlıyor, reklam kampanyasını siteyle birlikte kurguluyoruz.'], ['Sonuçları nasıl görürüm?', 'Google Analytics ve Google Ads verisiyle hazırladığımız raporları sizinle paylaşırız.']],
      en: [['Do you offer Google Ads planning?', 'Yes. We plan the budget, targeting and campaign structure, and report the results.'], ['Do you do the ads and the website together?', 'Yes. We design your website and set up the ad campaign together with it.'], ['How do I see the results?', 'We share reports built from Google Analytics and Google Ads data.']],
    },
    visual: 'stat', related: ['web', 'lisans', 'ozel-yazilim'],
  },
  {
    id: 'destek', group: 'infra', slug: { tr: 'teknik-destek', en: 'technical-support' },
    menu: { tr: ['Son kullanıcı desteği', 'Yerinde ve uzaktan'], en: ['End-user support', 'On site and remote'] },
    title: { tr: 'Kurumsal son kullanıcı ve teknik destek', en: 'Corporate end-user and technical support' },
    desc: { tr: 'Çalışanlarınızın cihaz ve yazılım sorunları için yerinde ve uzaktan teknik destek. ACR Bilgi son kullanıcı ve donanım desteği verir.', en: 'On-site and remote technical support for your staff\'s device and software problems. ACR Bilgi provides end-user and hardware support.' },
    h1: { tr: 'Kurumsal son kullanıcı ve teknik destek', en: 'Corporate end-user and technical support' },
    lead: { tr: 'Çalışanlarınızın cihaz ve yazılım sorunlarına yerinde ve uzaktan çözüm getiririz. Mesai saatlerinde ortalama yanıt süremiz dört saattir.', en: 'We solve your staff\'s device and software problems on site and remotely. Our average response time during working hours is four hours.' },
    facts: { tr: [['Yanıt süresi', 'Ortalama 4 saat'], ['Saatler', 'Pzt–Cuma 09:00–18:00'], ['Kanallar', 'Telefon, e-posta, WhatsApp'], ['Destek', 'Yerinde ve uzaktan']], en: [['Response', 'Average 4 hours'], ['Hours', 'Mon–Fri 09:00–18:00'], ['Channels', 'Phone, email, WhatsApp'], ['Support', 'On site and remote']] },
    what: {
      tr: [['Cihaz ve yazılım sorunları', 'Bilgisayar, yazıcı ve yazılım arızalarına çözüm buluruz.'], ['Uzaktan destek', 'Ekran görüntüsü ya da uzaktan bağlantıyla hızlıca yardım ederiz.'], ['Yerinde destek', 'Gerektiğinde ekibimiz ofisinize gelir.'], ['ERP kullanıcı desteği', 'Logo ve Mikro kullanıcılarınızın sorularını yanıtlarız.']],
      en: [['Device and software problems', 'We fix computer, printer and software faults.'], ['Remote support', 'We help quickly through screenshots or a remote connection.'], ['On-site support', 'Our team comes to your office when needed.'], ['ERP user support', 'We answer your Logo and Mikro users\' questions.']],
    },
    steps: {
      tr: [['Bize yazın ya da arayın', 'Telefon, e-posta veya WhatsApp\'tan talebinizi iletin.'], ['Sorunu çözeriz', 'Uzaktan çözülmezse ekibimiz yerinde gelir.'], ['Kayda alır, kapatırız', 'Çözümü size bildirir, talebi kapatırız.']],
      en: [['Write or call us', 'Send your request by phone, email or WhatsApp.'], ['We solve the problem', 'If it cannot be fixed remotely, our team comes on site.'], ['We log it and close it', 'We tell you the fix and close the request.']],
    },
    faq: {
      tr: [['Destek taleplerine ne kadar sürede dönüyorsunuz?', 'Mesai saatleri içinde ortalama yanıt süremiz dört saattir.'], ['Hangi kanallardan destek alabilirim?', 'Telefon, e-posta ve WhatsApp üzerinden bize ulaşabilirsiniz. Ekran görüntüsü göndermek en hızlı yoldur.'], ['Mesai dışında destek var mı?', 'Bakım anlaşmalı müşteriler için mesai dışı acil hat mevcuttur.']],
      en: [['How fast do you respond to support requests?', 'Our average response time during working hours is four hours.'], ['Which channels can I use?', 'You can reach us by phone, email and WhatsApp. Sending a screenshot is the fastest way.'], ['Is there out-of-hours support?', 'Customers with a maintenance agreement have an out-of-hours emergency line.']],
    },
    visual: 'notify', related: ['donanim', 'firewall', 'lisans'],
  },
];

// text pages -----------------------------------------------------------------------------------------------
export const ABOUT = {
  tr: {
    slug: 'hakkimizda', title: 'Hakkımızda: Beykoz merkezli yazılım ve bilişim ekibi', desc: 'ACR Bilgi Sistemleri: Beykoz merkezli, yirmi yılı aşkın süredir işletmelerin ticari yazılım ve bilişim altyapısıyla uğraşan ekip. Yetkili Mikro çözüm ortağı.',
    h1: 'Programı satmak değil, çalışır halde tutmak', lead: 'Beykoz merkezli, yirmi yılı aşkın süredir işletmelerin ticari yazılım ve bilişim altyapısıyla uğraşan bir ekibiz.',
    whatH: 'Ne yapıyoruz', what: 'ACR Bilgi Sistemleri olarak Mikro Yazılım yetkili çözüm ortağıyız. Mikro ürün ailesinin satışını, kurulumunu, uyarlanmasını ve desteğini yürütüyoruz. Bunun yanında işletmelerin sunucu, lisans, ağ ve özel yazılım ihtiyaçlarını da karşılıyoruz, çünkü pratikte bunlar birbirinden ayrılmıyor.',
    ruleH: 'Nasıl çalışıyoruz', rules: [['Kapsamı yazarız', 'Sözlü mutabakatla işe başlamıyoruz. Ne yapılacağı, ne yapılmayacağı, süre ve bedel yazılı olur.'], ['Gerekmeyeni satmayız', 'İhtiyacınız olmayan modülü veya gereğinden büyük paketi önermiyoruz. Bazen doğru cevap "şu an buna ihtiyacınız yok" oluyor.'], ['Bağımlılık yaratmayız', 'Geliştirdiğimiz yazılımın kaynak kodu ve dokümantasyonu sizindir. Yollarımız ayrılırsa sisteminiz çalışmaya devam eder.']],
    teamH: 'Ekip', teamP: 'Mikro danışmanları, yazılım geliştiriciler ve sistem uzmanlarından oluşan bir ekibiz. Projenizde tek bir sorumlu atanır ve süreç boyunca değişmez.',
    team: [['Samet Demir', 'Şirket Müdürü / Proje Müdürü'], ['Berkay Altun', 'Mikro Danışmanı'], ['Tuna Turanlı', 'Mikro Danışmanı'], ['İslam Kuzu', 'Sistem Uzmanı']],
    resH: 'Gerçek iş sonuçları', resP: 'Müşteri isimleri gizlilik gereği paylaşılmaz. Talep halinde referans görüşmesi ayarlayabiliriz.',
    results: [['%60', 'Teklif hazırlama süresinde azalma', 'Makine kiralama', 'Teklif, sözleşme, sevkiyat, iade ve faturalandırma tek sistemde toplandı. Çift kiralama hataları ortadan kalktı.'], ['Saat → Dk', 'Üretim planlama süresi', 'Üretim', 'Mikro ERP üretim ve MRP süreçleri yeniden yapılandırıldı. Stok doğruluğu arttı.'], ['Aynı gün', 'Yönetim raporlarının hazırlanma süresi', 'Finans', 'Banka entegrasyonları, nakit akış raporları ve yönetim panelleri kuruldu.'], ['%70', 'Belge işleme süresinde azalma', 'e-Dönüşüm', 'e-Fatura, e-Arşiv ve e-İrsaliye süreçleri yeniden kurgulandı; onay ve kontrol adımları otomatikleşti.'], ['0', 'Tekrarlı veri girişi', 'Özel yazılım', 'Mikro ERP ile CRM, e-ticaret ve özel yazılımlar arasında API ve SQL tabanlı entegrasyonlar geliştirildi.']],
    areas: [['Mikro ürün ailesi', 'Yetkili çözüm ortağı olarak satış, kurulum, uyarlama ve destek.'], ['Özel yazılım ve portallar', 'Logo ve Mikro\'nun yapmadığı işleri portal, rapor ve entegrasyon olarak yazarız.'], ['Altyapı ve güvenlik', 'Sunucu, donanım, ağ ve firewall; lisans ve kullanıcı desteği.'], ['Web ve reklam', 'Kurumsal web sitesi tasarımı ve Google reklam planlaması.']],
    steps: [['Sisteminize bakarız', 'Mevcut kurulumunuzu dinler, ne gerektiğini birlikte görürüz. Ön görüşme ücretsizdir.'], ['Kapsamı yazarız', 'Ne yapılacağını, ne yapılmayacağını, süreyi ve bedeli yazılı paylaşırız.'], ['Kurar, devreye alırız', 'Kurulumu ve veri aktarımını yapar, sistemi sizinle sınarız.'], ['Eğitir, destek veririz', 'Ekibinize kullanımı gösterir, sonrasında yanınızda kalırız.']],
    cta: ['Sisteminize bakalım, ne gerektiğini birlikte görelim', 'Kısa bir görüşmede mevcut kurulumunuzu dinliyor, hangi çalışmanın işinize oturacağını açıkça söylüyoruz. Ön görüşme ücretsizdir.'],
    profile: { h: 'Kurumsal profil', p: "ACR Bilgi Sistemleri, 2005'ten bu yana işletmelerin ticari yazılım ve bilişim altyapısıyla uğraşıyor. Beykoz'daki merkezimizden İstanbul'a ve Türkiye geneline hizmet veriyoruz.", facts: [['Unvan', 'ACR Bilgi Sistemleri'], ['Kuruluş', '2005'], ['Merkez', 'Beykoz, İstanbul'], ['İş ortaklığı', 'Yetkili Mikro çözüm ortağı'], ['Hizmet bölgesi', 'İstanbul ve Türkiye geneli'], ['Çalışma saatleri', 'Pzt–Cuma 09:00–18:00']] },
    why: { h: 'Büyük bayi listesi yerine, sizi tanıyan bir ekip', p: "Mikro Yazılım'ın Türkiye genelinde yüzlerce iş ortağı var. Aradaki fark, projeyi kimin yürüttüğü ve sonrasında telefonu kimin açtığında ortaya çıkıyor.", items: [['Tek muhatap', 'Lisans, kurulum, özel yazılım ve destek aynı ekipte.'], ['Saha tecrübesi', "Yirmi yılda sekiz sektörde çalıştık; her sektörün Mikro'da nereye takıldığını biliyoruz."], ['Geliştirme kapasitesi', 'Standart ekranın yetmediği yerde raporu, entegrasyonu veya ek uygulamayı kendimiz yazıyoruz.']], cta: ['Şu an Mikro kullanıyor musunuz?', 'Mevcut kurulumunuzu ücretsiz gözden geçiriyoruz: sürüm durumu, yedekleme, veritabanı sağlığı ve kullanılmayan modüller.'] },
    sectors: { h: 'Çalıştığımız sektörler', p: 'Sekiz sektörde, her birinin kendi derdini bilerek çalışıyoruz.', items: ['Toptan dağıtım ve bayi ağı yönetimi', 'Tekstil ve hazır giyim', 'Gıda üretimi ve parti takibi', 'İnşaat ve taahhüt', 'Otomotiv yan sanayi ve metal işleme', 'Perakende ve market zincirleri', 'E-ticaret ve pazaryeri satışı', 'Mali müşavirlik büroları'] },
    figs: [['20+', 'yıllık sektör tecrübesi'], ['1000+', 'son kullanıcı'], ['8', 'sektörde aktif proje']],
  },
  en: {
    slug: 'about', title: 'About: a software and IT team based in Beykoz', desc: 'ACR Bilgi Sistemleri: a Beykoz-based team that has worked on business software and IT infrastructure for over twenty years. Authorised Mikro partner.',
    h1: 'We do not sell software, we keep it running', lead: 'We are a Beykoz-based team that has worked on businesses\' commercial software and IT infrastructure for over twenty years.',
    whatH: 'What we do', what: 'ACR Bilgi Sistemleri is an authorised Mikro Yazılım partner. We handle sales, setup, adaptation and support of the Mikro product family. We also cover servers, licences, networks and custom software, because in practice they cannot be separated.',
    ruleH: 'How we work', rules: [['We write the scope down', 'We do not start on a verbal agreement. What will and will not be done, the timeline and the price are in writing.'], ['We do not sell what you do not need', 'We do not recommend a module you do not need or a plan bigger than necessary. Sometimes the right answer is "you do not need that now".'], ['We do not create dependence', 'The source code and documentation of the software we build are yours. If we part ways, your system keeps running.']],
    teamH: 'Team', teamP: 'We are a team of Mikro consultants, software developers and systems specialists. Each project gets one person in charge, and that does not change.',
    team: [['Samet Demir', 'General Manager / Project Manager'], ['Berkay Altun', 'Mikro Consultant'], ['Tuna Turanlı', 'Mikro Consultant'], ['İslam Kuzu', 'Systems Specialist']],
    resH: 'Real business results', resP: 'Client names are not shared for confidentiality. We can arrange a reference call on request.',
    results: [['60%', 'Shorter quote preparation time', 'Machine rental', 'Quotes, contracts, dispatch, returns and invoicing moved into one system. Double-booking errors disappeared.'], ['Hours → Min', 'Production planning time', 'Manufacturing', 'Mikro ERP production and MRP processes were restructured. Stock accuracy improved.'], ['Same day', 'Time to prepare management reports', 'Finance', 'Bank integrations, cash flow reports and management dashboards were built.'], ['70%', 'Shorter document processing time', 'e-Transformation', 'e-Invoice, e-Archive and e-Waybill processes were redesigned; approval and check steps were automated.'], ['0', 'Repeated data entry', 'Custom software', 'API and SQL based integrations were built between Mikro ERP and CRM, e-commerce and custom software.']],
    areas: [['Mikro product family', 'Sales, setup, adaptation and support as an authorised partner.'], ['Custom software and portals', 'We build what Logo and Mikro do not do as portals, reports and integrations.'], ['Infrastructure and security', 'Servers, hardware, network and firewall; licensing and user support.'], ['Web and ads', 'Corporate website design and Google Ads planning.']],
    steps: [['We look at your system', 'We listen to your current setup and see together what is needed. The first meeting is free.'], ['We write the scope', 'We share what will and will not be done, the timeline and the price in writing.'], ['We build and go live', 'We handle setup and data migration and test the system with you.'], ['We train and support', 'We show your team how to use it and stay with you afterwards.']],
    cta: ['Let us look at your system and see what is needed', 'In a short meeting we listen to your current setup and tell you plainly which work fits. The first meeting is free.'],
    profile: { h: 'Company profile', p: 'ACR Bilgi Sistemleri has worked on businesses\' commercial software and IT infrastructure since 2005. From our base in Beykoz we serve companies in Istanbul and across Turkey.', facts: [['Legal name', 'ACR Bilgi Sistemleri'], ['Founded', '2005'], ['Based in', 'Beykoz, Istanbul'], ['Partnership', 'Authorised Mikro partner'], ['Service area', 'Istanbul and all of Turkey'], ['Hours', 'Mon–Fri 09:00–18:00']] },
    why: { h: 'A team that knows you, not a long dealer list', p: 'Mikro Yazılım has hundreds of partners across Turkey. The difference shows in who runs the project and who picks up the phone afterwards.', items: [['One point of contact', 'Licensing, setup, custom software and support sit in the same team.'], ['Field experience', 'In twenty years we worked in eight sectors; we know where each sector gets stuck in Mikro.'], ['Development capacity', 'Where the standard screen is not enough, we write the report, integration or extra app ourselves.']], cta: ['Do you use Mikro today?', 'We review your current setup for free: version status, backup, database health and unused modules.'] },
    sectors: { h: 'Sectors we work in', p: 'Eight sectors, each with its own problems that we know.', items: ['Wholesale distribution and dealer networks', 'Textile and apparel', 'Food production and batch tracking', 'Construction and contracting', 'Automotive supply and metalworking', 'Retail and supermarket chains', 'E-commerce and marketplace sales', 'Accounting offices'] },
    figs: [['20+', 'years in the industry'], ['1000+', 'end users'], ['8', 'sectors with active projects']],
  },
};

export const CONTACT = {
  tr: {
    slug: 'iletisim', title: 'İletişim: ACR Bilgi, Beykoz İstanbul', desc: 'ACR Bilgi ile iletişime geçin: telefon, WhatsApp, e-posta veya form. Beykoz, İstanbul. Pazartesi–Cuma 09:00–18:00.',
    heroCards: [['4 saat', 'ortalama yanıt süresi', 'clock'], ['09–18', 'Pazartesi–Cuma', 'calendar-clock'], ['Beykoz', 'İstanbul merkez', 'map-pin']],
    h1: 'ACR Bilgi ile iletişime geçin', lead: 'Sorunuz teknik de olsa ticari de olsa aynı numaradan bize ulaşabilirsiniz. Mesai saatleri içinde ortalama yanıt süremiz dört saattir.',
    hoursH: 'Çalışma saatleri', hours: [['Pazartesi–Cuma', '09:00–18:00'], ['Cumartesi–Pazar', 'Kapalı']], hoursNote: 'Bakım anlaşmalı müşteriler için mesai dışı acil hat mevcuttur.',
    formH: 'Bize yazın', formP: 'Mesajınız info@acrbilgi.com adresine ulaşır. Mesai saatleri içinde ortalama dört saatte döneriz.',
    labels: { name: 'Ad soyad', company: 'Firma', email: 'E-posta', phone: 'Telefon', message: 'Mesajınız' },
    errors: { name: 'Adınızı ve soyadınızı yazın.', company: 'Firmanızın adını yazın.', email: '@ işareti içeren bir e-posta adresi yazın, örneğin ad@sirket.com.', message: 'Ne konuda destek istediğinizi kısaca yazın.' },
    submit: 'Mesajı gönderin', sent: 'Mesajınız iletildi. Mesai saatleri içinde ortalama dört saatte döneriz.', consent: 'Formu göndererek', consentLink: 'KVKK aydınlatma metnini', consentEnd: 'okuduğunuzu kabul edersiniz.',
    addrNote: 'Haritada açın', mapQuery: 'Rüzgarlıbahçe Mah. Cumhuriyet Cd. No 10 Beykoz İstanbul',
    wa: 'WhatsApp ile yazın',
  },
  en: {
    slug: 'contact', title: 'Contact: ACR Bilgi, Beykoz Istanbul', desc: 'Contact ACR Bilgi by phone, WhatsApp, email or form. Beykoz, Istanbul. Monday to Friday, 09:00 to 18:00.',
    heroCards: [['4 hours', 'average response time', 'clock'], ['09–18', 'Monday–Friday', 'calendar-clock'], ['Beykoz', 'Istanbul headquarters', 'map-pin']],
    h1: 'Contact ACR Bilgi', lead: 'Technical or commercial, you can reach us on the same number. Our average response time during working hours is four hours.',
    hoursH: 'Opening hours', hours: [['Monday–Friday', '09:00–18:00'], ['Saturday–Sunday', 'Closed']], hoursNote: 'Customers with a maintenance agreement have an out-of-hours emergency line.',
    formH: 'Write to us', formP: 'Your message reaches info@acrbilgi.com. We reply in four hours on average during working hours.',
    labels: { name: 'Full name', company: 'Company', email: 'Email', phone: 'Phone', message: 'Your message' },
    errors: { name: 'Write your first and last name.', company: 'Write your company name.', email: 'Write an email address with an @, like name@company.com.', message: 'Write briefly what you need help with.' },
    submit: 'Send your message', sent: 'Your message is in. We reply in four hours on average during working hours.', consent: 'By sending the form you confirm that you have read the', consentLink: 'KVKK notice', consentEnd: '.',
    addrNote: 'Open in maps', mapQuery: 'Rüzgarlıbahçe Mah. Cumhuriyet Cd. No 10 Beykoz Istanbul',
    wa: 'Message us on WhatsApp',
  },
};

// legal pages: the Turkish text is the client's own, taken from acrbilgi.com; English is a translation of it ------
export const LEGAL = {
  kvkk: {
    slug: { tr: 'kvkk', en: 'kvkk-notice' }, updated: { tr: '4 Ağustos 2026', en: '4 August 2026' },
    tr: {
      title: 'KVKK aydınlatma metni: ACR Bilgi Sistemleri', desc: '6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında ACR Bilgi Sistemleri kişisel veri aydınlatma metni.', h1: 'KVKK aydınlatma metni', lead: '6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında bilgilendirme.',
      intro: ['6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında, ACR Bilgi Sistemleri olarak kişisel verilerinizin güvenliğine önem vermekteyiz.', 'Bu metin; kişisel verilerinizin hangi amaçlarla işlendiği, kimlere aktarılabileceği ve sahip olduğunuz haklar hakkında sizi bilgilendirmek amacıyla hazırlanmıştır.'],
      blocks: [
        ['Kapsam', 'Bu aydınlatma metni aşağıdaki kişiler için geçerlidir:', ['Web sitesi ziyaretçileri', 'Müşteriler', 'Potansiyel müşteriler', 'İş ortakları', 'Tedarikçiler']],
        ['İşlenen kişisel veriler', 'Faaliyetlerimiz kapsamında aşağıdaki kişisel veriler işlenebilir.', ['Kimlik bilgileri: ad soyad', 'İletişim bilgileri: telefon, e-posta, firma bilgisi', 'İşlem güvenliği verileri: IP adresi, tarayıcı bilgileri, log kayıtları', 'Talep bilgileri: iletişim formu içerikleri, destek talepleri, teklif talepleri']],
        ['Kişisel verilerin işlenme amaçları', 'Kişisel verileriniz şu amaçlarla işlenmektedir:', ['Teklif hazırlanması', 'Destek hizmetlerinin sunulması', 'Müşteri ilişkilerinin yürütülmesi', 'Sözleşme süreçlerinin yönetilmesi', 'Muhasebe ve finans işlemleri', 'Hukuki yükümlülüklerin yerine getirilmesi', 'Bilgi güvenliğinin sağlanması', 'Hizmet kalitesinin artırılması']],
        ['Verilerin aktarılması', 'Kişisel veriler, KVKK hükümlerine uygun olarak aşağıdaki taraflara aktarılabilir:', ['Kanunen yetkili kamu kurumlarına', 'Yasal zorunluluk bulunan hallerde resmi mercilere', 'Hizmet alınan teknik altyapı sağlayıcılarına']],
        ['Saklama ve güvenlik', 'Kişisel veriler:', ['Yetkisiz erişime karşı korunur', 'Güncel güvenlik sistemleriyle muhafaza edilir', 'Yasal süre boyunca saklanır', 'Süre sonunda güvenli şekilde silinir veya anonim hale getirilir']],
        ['KVKK kapsamındaki haklarınız', 'KVKK\'nın 11. maddesi kapsamında aşağıdaki haklara sahipsiniz:', ['Kişisel verinizin işlenip işlenmediğini öğrenme', 'İşlenen verilere erişme', 'Eksik veya yanlış bilgilerin düzeltilmesini isteme', 'Verilerin silinmesini veya yok edilmesini talep etme', 'İşlemeye itiraz etme', 'Zarara uğramanız halinde tazminat talep etme']],
        ['Başvuru', 'KVKK kapsamındaki taleplerinizi info@acrbilgi.com adresine iletebilirsiniz. Başvurularınız, KVKK\'da belirtilen süreler içerisinde değerlendirilerek sonuçlandırılacaktır.', []],
      ],
      related: 'İlgili metin',
    },
    en: {
      title: 'KVKK notice: ACR Bilgi Sistemleri', desc: 'ACR Bilgi Sistemleri personal data notice under Turkish Personal Data Protection Law no. 6698 (KVKK).', h1: 'KVKK notice', lead: 'Information under Personal Data Protection Law no. 6698.',
      intro: ['Under Personal Data Protection Law no. 6698 ("KVKK"), ACR Bilgi Sistemleri cares about the security of your personal data.', 'This text explains why your personal data is processed, who it may be shared with and what rights you have.'],
      blocks: [
        ['Scope', 'This notice applies to:', ['Website visitors', 'Customers', 'Prospective customers', 'Business partners', 'Suppliers']],
        ['Personal data we process', 'In the course of our activities the following personal data may be processed.', ['Identity data: full name', 'Contact data: phone, email, company', 'Transaction security data: IP address, browser information, log records', 'Request data: contact form contents, support requests, quote requests']],
        ['Purposes of processing', 'Your personal data is processed for these purposes:', ['Preparing quotes', 'Providing support services', 'Managing customer relations', 'Managing contract processes', 'Accounting and finance operations', 'Meeting legal obligations', 'Ensuring information security', 'Improving service quality']],
        ['Transfer of data', 'In line with KVKK, personal data may be transferred to:', ['Public bodies authorised by law', 'Official authorities where legally required', 'Technical infrastructure providers we use']],
        ['Storage and security', 'Personal data:', ['Is protected against unauthorised access', 'Is kept with up-to-date security systems', 'Is stored for the legal period', 'Is securely deleted or anonymised afterwards']],
        ['Your rights under KVKK', 'Under Article 11 of KVKK you have the right to:', ['Learn whether your personal data is processed', 'Access the data processed', 'Ask for incomplete or wrong data to be corrected', 'Request deletion or destruction of data', 'Object to processing', 'Claim compensation if you suffer damage']],
        ['How to apply', 'You can send your KVKK requests to info@acrbilgi.com. Applications will be assessed and concluded within the periods set by KVKK.', []],
      ],
      related: 'Related text',
    },
  },
  privacy: {
    slug: { tr: 'gizlilik-ilkesi', en: 'privacy-policy' }, updated: { tr: '4 Ağustos 2026', en: '4 August 2026' },
    tr: {
      title: 'Gizlilik ilkesi: ACR Bilgi Sistemleri', desc: 'ACR Bilgi Sistemleri web sitesi gizlilik ilkesi: paylaşılan bilgilerin korunması, çerezler ve üçüncü taraf hizmetler.', h1: 'Gizlilik ilkesi', lead: 'Web sitemiz üzerinden paylaşılan bilgilerin korunmasına ilişkin esaslar.',
      intro: ['ACR Bilgi Sistemleri olarak ziyaretçilerimizin gizliliğine önem veriyoruz. Bu Gizlilik İlkesi, www.acrbilgi.com üzerinden paylaşılan kişisel verilerin hangi amaçlarla işlendiğini, nasıl korunduğunu ve hangi durumlarda üçüncü kişilerle paylaşılabileceğini açıklamaktadır.', 'Web sitemizi ziyaret ettiğinizde veya iletişim formlarımızı kullandığınızda paylaştığınız bilgiler yalnızca hizmet sunmak, taleplerinizi değerlendirmek ve sizinle iletişime geçebilmek amacıyla kullanılmaktadır.'],
      blocks: [
        ['Kapsam', 'Bu politika aşağıdaki kişileri kapsamaktadır:', ['Web sitesi ziyaretçileri', 'Teklif talebinde bulunan kullanıcılar', 'Destek talebi oluşturan müşteriler', 'İletişim formunu kullanan ziyaretçiler']],
        ['İşlenen veriler', 'Web sitemiz üzerinden aşağıdaki bilgiler işlenebilir:', ['Ad soyad', 'Firma adı', 'Telefon numarası', 'E-posta adresi', 'Talep veya mesaj içeriği', 'IP adresi', 'Tarayıcı ve cihaz bilgileri', 'Çerez (cookie) verileri']],
        ['Verilerin kullanım amaçları', 'Toplanan bilgiler şu amaçlarla kullanılmaktadır:', ['Teklif taleplerinin değerlendirilmesi', 'Teknik destek süreçlerinin yürütülmesi', 'Müşteri ilişkilerinin yönetilmesi', 'Hizmetlerin geliştirilmesi', 'Web sitesi performansının analiz edilmesi', 'Kanuni yükümlülüklerin yerine getirilmesi']],
        ['Saklama ve güvenlik', 'ACR Bilgi Sistemleri, kişisel verilerin güvenliğini sağlamak amacıyla güncel teknik ve idari güvenlik önlemleri uygular. Veriler:', ['Yetkisiz erişime karşı korunur', 'Güvenli sunucularda saklanır', 'Düzenli olarak yedeklenir', 'Gerektiğinde şifrelenerek muhafaza edilir']],
        ['Çerez kullanımı', 'Web sitemizde kullanıcı deneyimini geliştirmek amacıyla çerezler kullanılabilir. Çerezler şu amaçlarla kullanılır: site performansını ölçmek, trafik analizleri yapmak, kullanıcı tercihlerini hatırlamak. Tarayıcı ayarlarınız üzerinden çerez kullanımını dilediğiniz zaman değiştirebilirsiniz.', []],
        ['Üçüncü taraf hizmetleri', 'Web sitemizde aşağıdaki üçüncü taraf hizmetleri kullanılabilir. Bu servisler kendi gizlilik politikaları çerçevesinde veri işleyebilir.', ['Google Analytics', 'Google Ads', 'Microsoft Clarity', 'reCAPTCHA']],
        ['İletişim', 'Gizlilik politikamız hakkındaki sorularınız için info@acrbilgi.com adresinden bize ulaşabilirsiniz. Yasal saklama süreleri sona erdiğinde kişisel veriler güvenli yöntemlerle silinir veya anonim hale getirilir.', []],
      ],
      related: 'İlgili metin',
    },
    en: {
      title: 'Privacy policy: ACR Bilgi Sistemleri', desc: 'ACR Bilgi Sistemleri website privacy policy: how shared information is protected, cookies and third-party services.', h1: 'Privacy policy', lead: 'How we protect the information shared through our website.',
      intro: ['At ACR Bilgi Sistemleri we care about our visitors\' privacy. This Privacy Policy explains why personal data shared through www.acrbilgi.com is processed, how it is protected and when it may be shared with third parties.', 'The information you share when you visit our website or use our contact forms is used only to provide services, assess your requests and get in touch with you.'],
      blocks: [
        ['Scope', 'This policy covers:', ['Website visitors', 'Users who request a quote', 'Customers who open a support request', 'Visitors who use the contact form']],
        ['Data we process', 'The following information may be processed through our website:', ['Full name', 'Company name', 'Phone number', 'Email address', 'Request or message content', 'IP address', 'Browser and device information', 'Cookie data']],
        ['Why we use the data', 'The information we collect is used to:', ['Assess quote requests', 'Run technical support processes', 'Manage customer relations', 'Develop our services', 'Analyse website performance', 'Meet legal obligations']],
        ['Storage and security', 'ACR Bilgi Sistemleri applies up-to-date technical and administrative security measures to protect personal data. Data is:', ['Protected against unauthorised access', 'Stored on secure servers', 'Backed up regularly', 'Kept encrypted where needed']],
        ['Cookies', 'Cookies may be used on our website to improve the user experience. They are used to measure site performance, analyse traffic and remember user preferences. You can change cookie use at any time in your browser settings.', []],
        ['Third-party services', 'The following third-party services may be used on our website. They may process data under their own privacy policies.', ['Google Analytics', 'Google Ads', 'Microsoft Clarity', 'reCAPTCHA']],
        ['Contact', 'For questions about our privacy policy, write to info@acrbilgi.com. When legal retention periods end, personal data is securely deleted or anonymised.', []],
      ],
      related: 'Related text',
    },
  },
};
