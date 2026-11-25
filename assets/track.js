/* ACR Bilgi: sends clicks and form sends to Google Analytics 4 and Google Ads (the old site's events: telefon, whatsapp, iletisim) */
(function () {
  function ev(name, extra) { if (window.acrOlay) window.acrOlay(name, extra || {}); }
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]'); if (!a) return;
    var h = a.getAttribute('href') || '';
    if (h.indexOf('tel:') === 0) ev('telefon', { numara: h.replace('tel:', ''), sayfa: location.pathname });
    else if (h.indexOf('wa.me') > -1 || h.indexOf('whatsapp') > -1) ev('whatsapp', { sayfa: location.pathname });
  });
  var f = window.fetch;
  if (f) window.fetch = function (url, opts) {
    var p = f.apply(this, arguments);
    try { if (String(url).indexOf('gonder.php') > -1 && opts && opts.method === 'POST') p.then(function (r) { if (r.ok) ev('iletisim', { form_adi: 'iletisim-form', sayfa: location.pathname }); }); } catch (x) {}
    return p;
  };
})();
