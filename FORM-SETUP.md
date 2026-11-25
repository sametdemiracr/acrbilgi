# İletişim formunu info@acrbilgi.com adresine bağlamak (Exchange Online)

Site statik olduğu için formun kendisi mail gönderemez. Şu an form `mailto:info@acrbilgi.com` kullanır: ziyaretçinin mail uygulaması açılır. Mesajın doğrudan kutunuza düşmesi için bir "alıcı" adres gerekir. Exchange Online ile en kolay yol **Power Automate**:

1. https://make.powerautomate.com → Oluştur → **Anlık bulut akışı** → tetikleyici: **Bir HTTP isteği alındığında** (Microsoft 365 lisansınızda "premium" bağlayıcı sayılır; lisansınızı kontrol edin).
2. İstek gövdesi şeması: `{"type":"object","properties":{"name":{"type":"string"},"company":{"type":"string"},"email":{"type":"string"},"phone":{"type":"string"},"message":{"type":"string"}}}`
3. Eylem ekle: **Office 365 Outlook → E-posta gönder (V2)**. Kime: `info@acrbilgi.com`. Konu: `Web sitesi formu: @{triggerBody()?['company']}`. Gövde: ad, firma, e-posta, telefon ve mesaj alanları. Yanıtla: `@{triggerBody()?['email']}`.
4. Akışı kaydedin, oluşan **HTTP POST URL**'sini kopyalayın.
5. `tools/content.mjs` içindeki iletişim sayfası şablonunda (`tools/build.mjs`, `contactPage`) `data-endpoint=""` değerine bu URL'yi yazın ve `node tools/build.mjs` çalıştırın. Form artık adrese gönderir, başarı mesajını yalnızca sunucu yanıt verince gösterir.

Alternatifler: Azure Function (Microsoft Graph `sendMail`) ya da Formspree gibi bir form servisi. Spam için Power Automate adresini yalnızca bu siteden çağrılacak şekilde tutun, reCAPTCHA ekleyecekseniz gizlilik metnindeki reCAPTCHA satırı zaten var.
