# Hostinger'da yayına alma

Yayın paketi `acrbilgi-site.zip` (içeriği `dist/` klasörüdür; `node tools/build.mjs && node tools/package.mjs` ile yeniden üretilir).

1. **Yedek alın.** hPanel > Dosyalar > Dosya Yöneticisi: `public_html` içindeki mevcut siteyi bilgisayarınıza indirin (eski Mikro sayfalarını korumak isterseniz gerekir).
2. **Önce deneme adresinde açın (önerilir).** hPanel > Alan adları > Alt alan adı: `yeni.acrbilgi.com` oluşturun, zip'i onun klasörüne yükleyip "Çıkar" deyin. Gezin, formu deneyin.
3. **Canlıya alırken:** zip'i `public_html` içine yükleyip çıkarın. Aynı adlı dosyaların üzerine yazılır (index.html, assets, logo). Eski sitenin kullanılmayacak sayfalarını silmeyin, önce 301 yönlendirmelerini planlayın (aşağıya bakın).
4. **SSL:** hPanel > SSL bölümünde alan adı için SSL'in etkin olduğundan emin olun. `.htaccess` her adresi `https://www.acrbilgi.com` adresine yönlendirir.
5. **PHP:** form `form.php` dosyasıyla çalışır (PHP 8). hPanel > Gelişmiş > PHP yapılandırması'nda PHP'nin açık olduğunu kontrol edin.
6. **E-posta (Exchange Online):** alan adının DNS kayıtlarını (MX, SPF, autodiscover, DKIM) DEĞİŞTİRMEYİN. Siteyi yayınlamak için yalnızca A kaydı (veya Hostinger'ın verdiği name server'lar) kullanılır. Formdan gelen mailin Microsoft kutusuna düşmesi için SPF'e Hostinger'ı ekleyin: mevcut `v=spf1 include:spf.protection.outlook.com ... -all` kaydına `include:_spf.mail.hostinger.com` ekleyin (tam adı hPanel > E-posta > DNS yönergesinden doğrulayın). Ardından formu deneyin; mail gelmezse Önemsiz/Karantina klasörüne bakın.
7. **Sonra:** Google Search Console'a `https://www.acrbilgi.com/sitemap.xml` adresini ekleyin; eski sayfaların yönlendirmelerini kontrol edin.

## Eski adresler
`.htaccess` içinde: `/hizmetler/` → özel yazılım, `/sunucu-ve-lisans/` → donanım ve sunucu, `/teklif-al/` → iletişim. Eski Mikro ürün sayfaları (`/mikro-run/`, `/mikro-fiyatlari/`, `/sozluk/` vb.) yeni sitede yok. Siteden silerseniz 404 verir; ya dosyalarını bırakın ya da yeni bir Mikro sayfası hazırlayıp yönlendirin.
