# Hostinger'da yayına alma (tek paket)

`acrbilgi-site.zip` yeni siteyi, eski sitenin çalışan parçalarını (form altyapısı `gonder.php` + PHPMailer ayarları, Google ve Bing doğrulama dosyaları, `imza/` klasörü, robots.txt) ve yeni `.htaccess` dosyasını birlikte içerir. Eski sitenin sayfaları yeni sayfalara yönlendirilir; kaldırılan sayfa 404 sayfasını gösterir.

## Adımlar
1. hPanel > Dosya Yöneticisi: `public_html` içindekileri bilgisayarınıza yedek olarak indirin.
2. `public_html` içindeki her şeyi silin (gizli dosyalar dahil: "gizli dosyaları göster" açık olsun).
3. Zip'i `public_html` içine yükleyip **Çıkar** deyin. Dosyalar (`index.html`, `.htaccess`, `gonder.php`, `assets`...) doğrudan `public_html` içinde olmalı.
4. hPanel > SSL: "Force HTTPS" açık olsun.
5. Deneme: ana sayfa, `/en/`, `/iletisim/` (formu doldurun), `/mikro-run/` (yönlendirmeli), `/sozluk/` (404 sayfası), `/google66aa39292a617e62.html`.
6. Google Search Console'da sitemap'i yenileyin: `https://www.acrbilgi.com/sitemap.xml`.

## Yönlendirmeler
Ayrıntısı `.htaccess` içinde: mikro-run/jump/fly/musavir, mikro-fiyatlari, mikro-urun-karsilastirma, mikro-yazilim-cozumleri, mikro-kurulum-egitim: /mikro-ozel-yazilim/; mikro-danismanlik: /ozel-yazilim-gelistirme/; mikro-destek: /teknik-destek/; hizmetler: ana sayfa; sunucu-ve-lisans: /kurumsal-donanim-sunucu/; teklif-al: /iletisim/; sozluk: kaldırıldı (404 sayfası). Eski WordPress adresleri de aynı şekilde eşlenir.

## Güvenlik notları
- `php/config.php` Gmail uygulama şifresi içerir; bu dosya paylaşıldığı için şifreyi Google Hesabı'ndan iptal edip yenisini `php/config.php` içine yazın.
- Pakete BİLEREK konmayanlar (eski sitede herkese açık duruyordu): `wp-config.php.old`, `readme.html`, `license.txt`, `README.md`, `*.py`, `.private`, `htaccess`/`.htaccess.bk`, `php/gonderim.log` (IP kayıtları; boş bir tanesi konur).
