// Builds the shared header and footer, every sub-page (Turkish at the root, English under /en/) and the home page's
// English version. Run from the repo root: node tools/build.mjs
import fs from 'node:fs';
import path from 'node:path';
import { SITE, UI, PAGES, ABOUT, CONTACT, LEGAL } from './content.mjs';
import { FRAG } from './fragments.mjs';
import { HOME_EN } from './home-en.mjs';

const ORIGIN = 'https://www.acrbilgi.com';
const PHONE = '+905309694010';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const J = (o) => JSON.stringify(o, null, 2);
const other = (l) => (l === 'tr' ? 'en' : 'tr');


// ---------------------------------------------------------------- icons (lucide glyphs fetched into assets/icons/ui)
const _ic = {};
function ico(name) {
  if (!_ic[name]) {
    const f = `assets/icons/ui/ui-${name}.svg`;
    if (!fs.existsSync(f)) throw new Error('icon missing ' + name);
    _ic[name] = fs.readFileSync(f, 'utf8').replace(/<svg[^>]*>/, '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">').replace(/<g[^>]*>/, '<g>');
  }
  return _ic[name];
}
const ICONS = {
  'ozel-yazilim': ['workflow', 'file-chart-column', 'plug', 'layout-dashboard'], logo: ['chart-column', 'workflow', 'plug', 'mail'], mikro: ['plug', 'layout-dashboard', 'file-chart-column', 'wrench'],
  portal: ['layout-dashboard', 'boxes', 'workflow', 'key-round'], donanim: ['server', 'laptop', 'hard-drive', 'refresh-cw'], firewall: ['shield-check', 'network', 'globe', 'hard-drive'],
  lisans: ['badge-check', 'shopping-cart', 'wrench', 'refresh-cw'], web: ['layout-template', 'smartphone', 'search', 'rocket'], ads: ['target', 'megaphone', 'chart-column', 'file-chart-column'],
  destek: ['wrench', 'headset', 'map-pin', 'users'],
};
const STEP_ICONS = ['clipboard-list', 'hammer', 'rocket'];
const chip = (n, sm = false) => `<span class="tile__ico${sm ? ' tile__ico--sm' : ''}">${ico(n)}</span>`;

// ---------------------------------------------------------------- routes
const byId = Object.fromEntries(PAGES.map((p) => [p.id, p]));
function rel(lang, id) {            // path of a page from the site root, per language
  if (id === 'home') return SITE[lang].dir;
  if (byId[id]) return SITE[lang].dir + byId[id].slug[lang] + '/';
  if (id === 'about') return SITE[lang].dir + ABOUT[lang].slug + '/';
  if (id === 'contact') return SITE[lang].dir + CONTACT[lang].slug + '/';
  if (id === 'kvkk' || id === 'privacy') return SITE[lang].dir + LEGAL[id].slug[lang] + '/';
  throw new Error('route ' + id);
}
const depthOf = (r) => (r === '' ? 0 : r.replace(/\/$/, '').split('/').length);
function makeCtx(lang, id) {
  const r = rel(lang, id); const up = '../'.repeat(depthOf(r));
  return { lang, id, r, up, href: (toLang, toId, hash = '') => { const t = rel(toLang, toId); return (up + t || './') + hash; }, asset: (p) => up + 'assets/' + p, url: (toLang, toId) => ORIGIN + '/' + rel(toLang, toId) };
}

// ---------------------------------------------------------------- shared pieces
const MENUS = { software: ['ozel-yazilim', 'logo', 'mikro', 'portal'], infra: ['donanim', 'firewall', 'destek'], licence: ['lisans', 'web', 'ads'] };

function navHtml(c) {
  const t = UI[c.lang]; const l = c.lang;
  const item = (group, label, anchor) => {
    const tiles = MENUS[group].map((id) => { const p = byId[id]; return `<a class="mtile" href="${c.href(l, id)}">${chip(ICONS[id][0], true)}<span><b>${esc(p.menu[l][0])}</b><small>${esc(p.menu[l][1])}</small></span></a>`; }).join('');
    const [lt, lp] = t.menuLead[group];
    return `      <div class="nav__item">
        <a class="nav__link" href="${c.href(l, 'home', anchor)}">${esc(label)} <svg class="chev" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        <div class="nav__menu"><div class="wrap grid"><div class="span-8 menu-tiles">${tiles}</div><a class="span-4 tile tile--dark menu-cta" href="${c.href(l, 'contact', '#gorusme')}"><b>${esc(lt)}</b><span>${esc(lp)}</span><span class="menu-cta__go">${esc(t.cta)} <svg width="16" height="16" viewBox="0 0 12 12" aria-hidden="true"><path d="M1 6h8M4.5 2.5 8 6l-3.5 3.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></span></a></div></div>
      </div>`;
  };
  return `<header class="nav nav--centre">
  <div class="wrap nav__bar">
    <a class="skip-link" href="#top">${esc(t.skip)}</a>
    <a class="nav__logo" href="${c.href(l, 'home')}" aria-label="${esc(t.homeLabel)}"><img src="${c.asset('logo.png')}" alt="ACR Bilgi" width="150" height="36" style="height:34px;width:auto"></a>
    <nav class="nav__links" aria-label="${esc(t.mainNav)}">
${item('software', t.navSoftware, '#yazilim')}
${item('infra', t.navInfra, '#altyapi')}
${item('licence', t.navLicence, '#lisans')}
      <div class="nav__item"><a class="nav__link" href="${c.href(l, 'about')}">${esc(t.navAbout)}</a></div>
      <div class="nav__item"><a class="nav__link" href="${c.href(l, 'home', '#sorular')}">${esc(t.navFaq)}</a></div>
    </nav>
    <div class="nav__actions">
      <a class="nav__link" href="${c.href(other(l), c.id)}" hreflang="${other(l)}" lang="${other(l)}" title="${esc(t.switchTitle)}">${esc(t.switchLang)}</a>
      <a class="btn btn--primary" href="${c.href(l, 'contact', '#gorusme')}">${esc(t.cta)}</a>
    </div>
    <button class="nav__toggle" type="button" aria-expanded="false" aria-label="${esc(t.menu)}">
      <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M2 5h14M2 13h14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
    </button>
  </div>
</header>`;
}

function footerHtml(c, { closeCta = true } = {}) {
  const t = UI[c.lang]; const l = c.lang; const li = (id) => `<li><a href="${c.href(l, id)}">${esc(byId[id].menu[l][0])}</a></li>`;
  const cta = closeCta ? `    <div class="closing__cta close--type">
      <div class="section-head">
        <h2 id="close-h">${esc(t.closeH)}</h2>
        <p>${esc(t.closeP)}</p>
      </div>
      <a class="btn btn--primary btn--xl" href="${c.href(l, 'contact', '#gorusme')}">${esc(t.cta)}<svg class="m-arrow" viewBox="0 0 12 12" aria-hidden="true"><path class="m-arrow__stem" d="M1 6h8"/><path class="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5"/></svg></a>
    </div>
` : '';
  return `<footer class="footer closing footer--dark ground-inverse" id="contact" aria-labelledby="close-h">
  <div class="wrap">
${cta}    <div class="closing__links">
      <div class="grid">
        <div class="span-4 stack-4">
          <a class="nav__logo" href="${c.href(l, 'home')}" aria-label="${esc(t.homeLabel)}"><img src="${c.asset('logo-white.png')}" alt="ACR Bilgi" width="150" height="36" style="height:34px;width:auto"></a>
          <p class="footer__lede">${esc(t.footLede)}</p>
        </div>
        <div class="span-2 footer__col"><h3>${esc(t.footSoftware)}</h3><ul>${MENUS.software.map(li).join('')}</ul></div>
        <div class="span-2 footer__col"><h3>${esc(t.footServices)}</h3><ul>${[...MENUS.infra, ...MENUS.licence].map(li).join('')}</ul></div>
        <div class="span-2 footer__col"><h3>${esc(t.footCompany)}</h3><ul><li><a href="${c.href(l, 'about')}">${esc(t.navAbout)}</a></li><li><a href="${c.href(l, 'contact')}">${esc(t.footContact)}</a></li><li><a href="${c.href(l, 'kvkk')}">${esc(t.kvkk)}</a></li><li><a href="${c.href(l, 'privacy')}">${esc(t.privacy)}</a></li></ul></div>
        <div class="span-2 footer__col"><h3>${esc(t.footContact)}</h3><ul><li><a href="mailto:info@acrbilgi.com">${esc(t.email)}</a></li><li><a href="tel:${PHONE}">${esc(t.phone)}</a></li><li><a href="https://wa.me/905309694010">${esc(t.whatsapp)}</a></li><li>${esc(t.addrShort)}</li></ul></div>
      </div>
      <div class="footer__legal">
        <span>&copy; 2026 ACR Bilgi</span>
        <span>${esc(t.trademark)}</span>
      </div>
    </div>
  </div>
</footer>

<nav class="actionbar" aria-label="${esc(t.quick)}">
  <a class="btn btn--primary" href="${c.href(l, 'contact', '#gorusme')}">${esc(t.cta)}</a>
</nav>`;
}

const FONTS = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@400..700&family=Geist+Mono:wght@400..500&display=swap" rel="stylesheet">`;
const ROOT_STYLE = `<style>
:root {
  --p-bg: #ffffff; --p-surface: #f1f5f9; --p-ink: #0b1220; --p-muted: #4a5b72;
  --p-accent: #0a6bc0; --p-accent-ink: #ffffff; --p-action: #0a6bc0; --p-action-ink: #ffffff;
  --p-inv-bg: #0b1220; --p-inv-surface: #181f2d; --p-inv-ink: #ffffff; --p-inv-muted: #979ba3;
  --p-inv-accent: #ffffff; --p-inv-accent-ink: #0b1220; --p-inv-action: #ffffff; --p-inv-action-ink: #0b1220;
  --font-display: "Geist", system-ui, sans-serif;
  --font-text: "Geist", system-ui, sans-serif;
  --font-mono: "Geist Mono", ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
  --display-weight: 500;
  --display-tracking: -0.035em;
  --display-tracking-xl: -0.045em;
}
</style>`;

function head(c, { title, desc, ld = [], extraCss = '', frags = [], noindex = false }) {
  const l = c.lang; const t = UI[l];
  const alt = (lang) => `<link rel="alternate" hreflang="${lang === 'tr' ? 'tr' : 'en'}" href="${c.url(lang, c.id)}">`;
  return `<!doctype html>
<html lang="${l}" data-type="software" data-radius="soft" data-ground="sky" data-buttons="solid" data-motion>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
${noindex ? '<meta name="robots" content="noindex">\n' : ''}<meta property="og:type" content="website">
<meta property="og:locale" content="${SITE[l].locale}">
<meta property="og:site_name" content="ACR Bilgi">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${c.url(l, c.id)}">
<meta property="og:image" content="${ORIGIN}/share.jpg">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="${c.up}favicon.svg" type="image/svg+xml">
<meta name="theme-color" content="#ffffff">
<link rel="canonical" href="${c.url(l, c.id)}">
${alt('tr')}
${alt('en')}
<link rel="alternate" hreflang="x-default" href="${c.url('tr', c.id)}">
<meta name="site-kind" content="software">
<meta name="page-type" content="software">
${FONTS}
<link rel="stylesheet" href="${c.asset('system.css')}">
<link rel="stylesheet" href="${c.asset('ui/cards.css')}">
<link rel="stylesheet" href="${c.asset('motion/motion.css')}">
<link rel="stylesheet" href="${c.asset('backgrounds/backgrounds.css')}">
<link rel="stylesheet" href="${c.asset('layout/layout.css')}">
<link rel="stylesheet" href="${c.asset('icons/icon.css')}">
${ROOT_STYLE}
<link rel="stylesheet" href="${c.asset('ui/base.css')}">
${frags.map((f) => `<link rel="stylesheet" href="${c.asset('ui/' + f + '/fragment.css')}">`).join('\n')}
<link rel="stylesheet" href="${c.asset('site.css')}">
<script>document.documentElement.classList.add('m-enter');setTimeout(()=>document.documentElement.classList.add('m-enter-done'),700)</script>
<script src="${c.asset('backgrounds/backgrounds.js')}"></script>
<style>
.rows .rows__name small { display: block; font-weight: 400; color: var(--muted); font-size: var(--t-small); }
.hero__art { background:
    radial-gradient(70% 60% at 18% 12%, color-mix(in oklab, var(--ground-surface) 80%, white), transparent 70%),
    radial-gradient(60% 50% at 90% 100%, color-mix(in oklab, var(--ground-bg) 80%, var(--ground-accent)), transparent 70%),
    var(--ground-bg); }
.hero__proof { font-size: var(--t-small); color: var(--muted); }
.hero--statement.hero--compact { height: auto; min-height: 0; padding-bottom: var(--s-9, 96px); }
.hero--compact .hero__in { gap: var(--s-8); }
.hero--compact .hero__facts { margin-top: var(--s-4); }
main > section.section { height: auto; min-height: 0; }
footer.closing:not(:has(.closing__cta)) { height: auto; }
main > section.section:last-of-type { padding-bottom: var(--s-9, 96px); }
.sx .panel { --p-h: 560px; }
.faq h3 { font-size: var(--t-lead); }
.crumbs { display: flex; gap: var(--s-2); font-size: var(--t-small); color: var(--muted); margin-bottom: var(--s-4); }
.crumbs a { color: inherit; }
.prose { max-width: 62ch; }
.prose h2 { font-size: var(--t-h3); margin: var(--s-8) 0 var(--s-3); }
.prose p, .prose li { font-size: var(--t-body); line-height: 1.7; }
.prose ul { padding-left: 1.2em; display: grid; gap: var(--s-1); margin: var(--s-3) 0 0; }
.prose .updated { color: var(--muted); font-size: var(--t-small); margin-top: var(--s-8); }
.team { display: grid; gap: var(--s-5); grid-template-columns: repeat(2, 1fr); }
@media (min-width: 1024px) { .team { grid-template-columns: repeat(4, 1fr); } }
.team div { border-top: 1px solid var(--line); padding-top: var(--s-3); }
.team b { display: block; font-weight: 500; font-size: var(--t-lead); }
.res { display: grid; gap: 0; }
.res > div { display: grid; grid-template-columns: minmax(120px, 1fr) 4fr; gap: var(--s-5); padding: var(--s-5) 0; border-top: 1px solid var(--line); }
.res .t-stat { font-family: var(--font-display); }
@media (max-width: 639px) { .res > div { grid-template-columns: 1fr; gap: var(--s-2); } }
.page-links { display: grid; gap: var(--s-2); margin-top: var(--s-4); }
@media (max-width: 639px) { .sx .panel { --p-h: 340px; } }
${extraCss}
</style>
${ld.length ? `<script type="application/ld+json">\n${J({ '@context': 'https://schema.org', '@graph': ld })}\n</script>` : ''}
</head>`;
}

const SCRIPTS = (c) => `<script type="module" src="${c.asset('system.js')}"></script>
<script type="module" src="${c.asset('motion/motion.js')}"></script>
<script type="module" src="${c.asset('layout/layout.js')}"></script>
</body>
</html>
`;

const orgRef = { '@id': ORIGIN + '/#organization' };
function crumbLd(c, label) {
  return { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: UI[c.lang].crumbHome, item: c.url(c.lang, 'home') }, { '@type': 'ListItem', position: 2, name: label, item: c.url(c.lang, c.id) }] };
}
function faqLd(faq) {
  return { '@type': 'FAQPage', mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };
}
const facts = (arr) => `<dl class="hero__facts">${arr.map(([a, b]) => `<div><dt>${esc(a)}</dt><dd>${esc(b)}</dd></div>`).join('')}</dl>`;
const crumbHtml = (c, label) => `<nav class="crumbs" aria-label="Breadcrumb"><a href="${c.href(c.lang, 'home')}">${esc(UI[c.lang].crumbHome)}</a><span aria-hidden="true">/</span><span>${esc(label)}</span></nav>`;

function statementHero(c, { h1, lead, factsArr, crumb, secondary }) {
  const t = UI[c.lang];
  return `  <section class="hero hero--statement hero--compact bg-mist" data-enter aria-labelledby="hero-h">
    <div class="wrap"><div class="hero-text hero__in">
      <div>
        ${crumb ? crumbHtml(c, crumb) : ''}
        <h1 id="hero-h">${esc(h1)}</h1>
        <p class="hero__lead">${esc(lead)}</p>
        <div class="btn-row"><a class="btn btn--primary" href="${c.href(c.lang, 'contact', '#gorusme')}">${esc(t.cta)}</a>${secondary ? `<a class="btn btn--secondary" href="${secondary[1]}">${esc(secondary[0])}</a>` : ''}</div>
      </div>
${factsArr ? '      ' + facts(factsArr) : ''}
    </div></div>
  </section>`;
}

// ---------------------------------------------------------------- service page
function servicePage(lang, p) {
  const c = makeCtx(lang, p.id); const t = UI[lang];
  const label = p.menu[lang][0];
  const what = p.what[lang].map(([n, d]) => `<li><span class="rows__name">${esc(n)}<small>${esc(d)}</small></span></li>`).join('\n          ');
  const steps = p.steps[lang].map(([n, d]) => `<li><span class="rows__name">${esc(n)}<small>${esc(d)}</small></span></li>`).join('\n          ');
  const faq = p.faq[lang].map(([q, a]) => `<div class="faq__item"><h3>${esc(q)}</h3><p>${esc(a)}</p></div>`).join('\n          ');
  const related = p.related.map((id) => `<a class="tile tile--link" href="${c.href(lang, id)}">${chip(ICONS[id][0], true)}<span><b>${esc(byId[id].menu[lang][0])}</b><br><span class="muted t-small">${esc(byId[id].menu[lang][1])}</span></span><svg class="tile__arrow" width="18" height="18" viewBox="0 0 12 12" aria-hidden="true"><path d="M1 6h8M4.5 2.5 8 6l-3.5 3.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></a>`).join('');
  const frag = FRAG[p.visual](lang, c);
  const ld = [
    { '@type': 'Service', '@id': c.url(lang, p.id) + '#service', name: p.title[lang], description: p.desc[lang], provider: orgRef, areaServed: [{ '@type': 'City', name: lang === 'tr' ? 'İstanbul' : 'Istanbul' }, { '@type': 'Country', name: lang === 'tr' ? 'Türkiye' : 'Turkey' }], inLanguage: lang === 'tr' ? 'tr-TR' : 'en-US', url: c.url(lang, p.id) },
    crumbLd(c, label), faqLd(p.faq[lang]),
  ];
  const VAR = ['tile--feature', 'tile--dots', 'tile--mist', 'tile--wide'];
  const what4 = p.what[lang].map(([n, d], i) => `<article class="tile ${VAR[i]} b${i + 1}">${chip(ICONS[p.id][i])}${i === 0 ? `<span class="tile__mark" aria-hidden="true">${ico(ICONS[p.id][0])}</span>` : ''}<h3 class="t-lead">${esc(n)}</h3><p class="${i === 0 ? '' : 'muted'}">${esc(d)}</p></article>`).join('\n        ');
  const steps3 = p.steps[lang].map(([n, d], i) => `<div class="flow__step"><span class="flow__node">${ico(STEP_ICONS[i])}</span><span class="flow__num">0${i + 1}</span><h3 class="t-lead">${esc(n)}</h3><p class="muted">${esc(d)}</p></div>`).join('\n        ');
  const chips = p.facts[lang].slice(0, 4).map(([a, b]) => `<span class="chip">${ico('circle-check')}<span>${esc(a)}: <b>${esc(b)}</b></span></span>`).join('');
  const proof = p.facts[lang].slice(0, 3).map(([a, b]) => `${a}: ${b}`).join(' · ');
  const html = `${head(c, { title: `${p.title[lang]} | ACR Bilgi`, desc: p.desc[lang], ld, frags: frag.css, extraCss: '.hero__art > .ly-piece--main.frag { left: 50%; top: 50%; transform: translate(-50%, -50%); width: min(var(--w), calc(100% - 48px)); } .steps3 { margin-top: var(--s-9, 96px); } @media (max-width: 639px) { .hero__art > .ly-piece--main.frag { top: var(--s-5); transform: translateX(-50%); } }' })}
<body>
${navHtml(c)}

<main id="top">
  <section class="hero hero--collage" data-enter aria-labelledby="hero-h">
    <div class="wrap"><div class="hero-text grid hero__grid">
      <div class="hero__text span-5">
        ${crumbHtml(c, label)}
        <h1 id="hero-h">${esc(p.h1[lang])}</h1>
        <p class="hero__lead">${esc(p.lead[lang])}</p>
        <div class="btn-row"><a class="btn btn--primary" href="${c.href(lang, 'contact', '#gorusme')}">${esc(t.cta)}</a><a class="btn btn--secondary" href="${c.href(lang, 'home', '#altyapi')}">${esc(t.seeServices)}</a></div>
        <div class="chips">${chips}</div>
      </div>
      <div class="hero__art span-6 start-7">
        <div class="ly-piece ly-piece--main frag" style="--w:${frag.w}px" data-ui-loop>
${frag.html}
        </div>
      </div>
    </div></div>
  </section>

  <section class="section sec-bubbles" id="neler" aria-labelledby="neler-h">
    <div class="wrap">
      <div class="section-head"><h2 id="neler-h">${esc(t.what)}</h2></div>
      <div class="bento">
        ${what4}
      </div>
      <h2 class="t-h3 steps3" style="font-size:var(--t-h3)">${esc(t.how)}</h2>
      <div class="flow" style="margin-top:var(--s-6)">
        ${steps3}
      </div>
    </div>
  </section>

  <section class="section" id="sorular" aria-labelledby="sorular-h">
    <div class="wrap grid grid--top">
      <div class="span-6">
        <div class="section-head"><h2 id="sorular-h">${esc(t.faq)}</h2></div>
        <div class="page-links"><span class="t-label muted">${esc(t.related)}</span>${related}</div>
      </div>
      <div class="span-6 start-7">
        <div class="faq">
          ${faq}
        </div>
      </div>
    </div>
  </section>
</main>

${footerHtml(c)}

${SCRIPTS(c)}`;
  write(c.r + 'index.html', html);
}

// ---------------------------------------------------------------- contact
function contactPage(lang) {
  const c = makeCtx(lang, 'contact'); const k = CONTACT[lang]; const t = UI[lang];
  const lb = k.labels; const er = k.errors;
  const ld = [
    { '@type': 'ContactPage', '@id': c.url(lang, 'contact') + '#page', url: c.url(lang, 'contact'), name: k.title, inLanguage: lang === 'tr' ? 'tr-TR' : 'en-US', about: orgRef },
    { '@type': 'ProfessionalService', '@id': ORIGIN + '/#organization', name: 'ACR Bilgi', url: ORIGIN + '/', telephone: PHONE, email: 'info@acrbilgi.com',
      address: { '@type': 'PostalAddress', streetAddress: 'Rüzgarlıbahçe Mah. Cumhuriyet Cd. No: 10/32', postalCode: '34805', addressLocality: 'Beykoz', addressRegion: lang === 'tr' ? 'İstanbul' : 'Istanbul', addressCountry: 'TR' },
      openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' }] },
    crumbLd(c, lang === 'tr' ? 'İletişim' : 'Contact'),
  ];
  const html = `${head(c, { title: k.title, desc: k.desc, ld })}
<body>
${navHtml(c)}

<main id="top">
${statementHero(c, { h1: k.h1, lead: k.lead, crumb: lang === 'tr' ? 'İletişim' : 'Contact' })}

  <section class="section" id="gorusme" aria-labelledby="gorusme-h">
    <div class="wrap grid grid--top">
      <div class="span-6">
        <div class="section-head"><h2 id="gorusme-h">${esc(k.formH)}</h2><p>${esc(k.formP)}</p></div>
        <form class="form" action="mailto:info@acrbilgi.com" method="post" enctype="text/plain" data-endpoint="" data-sent="${esc(k.sent)}" novalidate>
          <div class="field"><label for="f-name">${esc(lb.name)}</label>
            <input id="f-name" name="name" type="text" autocomplete="name" required aria-describedby="f-name-err">
            <p class="field__error" id="f-name-err" hidden>${esc(er.name)}</p></div>
          <div class="field"><label for="f-company">${esc(lb.company)}</label>
            <input id="f-company" name="company" type="text" autocomplete="organization" required aria-describedby="f-company-err">
            <p class="field__error" id="f-company-err" hidden>${esc(er.company)}</p></div>
          <div class="field"><label for="f-email">${esc(lb.email)}</label>
            <input id="f-email" name="email" type="email" autocomplete="email" inputmode="email" required aria-describedby="f-email-err">
            <p class="field__error" id="f-email-err" hidden>${esc(er.email)}</p></div>
          <div class="field"><label for="f-phone">${esc(lb.phone)}</label>
            <input id="f-phone" name="phone" type="tel" autocomplete="tel" inputmode="tel"></div>
          <div class="field"><label for="f-message">${esc(lb.message)}</label>
            <textarea id="f-message" name="message" rows="4" autocomplete="off" required aria-describedby="f-message-err"></textarea>
            <p class="field__error" id="f-message-err" hidden>${esc(er.message)}</p></div>
          <div class="btn-row"><button class="btn btn--primary" type="submit">${esc(t.cta)}</button></div>
          <p class="form__status" role="status" data-form-status></p>
          <p class="t-small muted">${esc(k.consent)} <a class="link" href="${c.href(lang, 'kvkk')}">${esc(k.consentLink)}</a> ${esc(k.consentEnd)}</p>
        </form>
      </div>
      <div class="span-6 start-7">
        <div class="tile-grid tile-grid--2">
          <article class="tile tile--dots">${chip('phone')}<h3 class="t-lead">${esc(t.phone)}</h3><p><a class="link" href="tel:${PHONE}">+90 530 969 40 10</a></p></article>
          <article class="tile tile--mist">${chip('message-circle')}<h3 class="t-lead">${esc(t.whatsapp)}</h3><p><a class="link" href="https://wa.me/905309694010">${esc(k.wa)}</a></p></article>
          <article class="tile tile--mist">${chip('mail')}<h3 class="t-lead">${esc(t.email)}</h3><p><a class="link" href="mailto:info@acrbilgi.com">info@acrbilgi.com</a></p></article>
          <article class="tile tile--dots">${chip('map-pin')}<h3 class="t-lead">${esc(t.address)}</h3><p class="muted">Rüzgarlıbahçe Mah. Cumhuriyet Cd. No: 10/32, 34805 Beykoz / ${lang === 'tr' ? 'İstanbul' : 'Istanbul'}</p><p><a class="link" href="https://www.openstreetmap.org/search?query=${encodeURIComponent(k.mapQuery)}">${esc(k.addrNote)}</a></p></article>
        </div>
        <h3 class="t-lead" style="margin-top:var(--s-7)">${esc(k.hoursH)}</h3>
        <dl class="hours" data-tz="Europe/Istanbul"><dt data-days="mon-fri">${esc(k.hours[0][0])}</dt><dd>${esc(k.hours[0][1])}</dd><dt data-days="sat,sun">${esc(k.hours[1][0])}</dt><dd>${esc(k.hours[1][1])}</dd></dl>
        <p class="t-small muted">${esc(k.hoursNote)}</p>
      </div>
    </div>
  </section>
</main>

${footerHtml(c, { closeCta: false }).replace('aria-labelledby="close-h"', 'aria-label="ACR Bilgi"')}

${SCRIPTS(c)}`;
  write(c.r + 'index.html', html);
}

// ---------------------------------------------------------------- about
function aboutPage(lang) {
  const c = makeCtx(lang, 'about'); const a = ABOUT[lang]; const t = UI[lang];
  const label = lang === 'tr' ? 'Hakkımızda' : 'About';
  const ld = [
    { '@type': 'AboutPage', '@id': c.url(lang, 'about') + '#page', url: c.url(lang, 'about'), name: a.title, inLanguage: lang === 'tr' ? 'tr-TR' : 'en-US', about: orgRef },
    { '@type': 'Organization', '@id': ORIGIN + '/#organization', name: 'ACR Bilgi Sistemleri', url: ORIGIN + '/', foundingDate: '2005', employee: a.team.map(([n, r]) => ({ '@type': 'Person', name: n, jobTitle: r })) },
    crumbLd(c, label),
  ];
  const html = `${head(c, { title: `${a.title} | ACR Bilgi`, desc: a.desc, ld })}
<body>
${navHtml(c)}

<main id="top">
${statementHero(c, { h1: a.h1, lead: a.lead, factsArr: a.figs.map(([n, d]) => [d, n]), crumb: label })}

  <section class="section" aria-labelledby="what-h">
    <div class="wrap grid grid--top">
      <div class="span-6"><div class="section-head"><h2 id="what-h">${esc(a.whatH)}</h2><p>${esc(a.what)}</p></div></div>
      <div class="span-6 start-7"><div class="tile-grid">${a.rules.map(([n, d], i) => `<article class="tile ${['tile--dots', 'tile--mist', 'tile--wide'][i]}" style="grid-template-columns:auto 1fr;column-gap:var(--s-4)">${chip(['file-text', 'circle-check', 'lock-open'][i], true)}<div><h3 class="t-lead">${esc(n)}</h3><p class="muted">${esc(d)}</p></div></article>`).join('')}</div></div>
    </div>
  </section>

  <section class="section ground-surface sec-bubbles" aria-labelledby="team-h">
    <div class="wrap">
      <div class="section-head"><h2 id="team-h">${esc(a.teamH)}</h2><p>${esc(a.teamP)}</p></div>
      <div class="tile-grid tile-grid--4">${a.team.map(([n, r]) => `<article class="tile tile--dots">${chip('user')}<div><h3 class="t-lead">${esc(n)}</h3><p class="muted">${esc(r)}</p></div></article>`).join('')}</div>
    </div>
  </section>

  <section class="section" aria-labelledby="res-h">
    <div class="wrap">
      <div class="section-head"><h2 id="res-h">${esc(a.resH)}</h2><p>${esc(a.resP)}</p></div>
      <div class="res">${a.results.map(([n, h, d]) => `<div><div><p class="t-stat">${esc(n)}</p></div><div><h3 class="t-lead">${esc(h)}</h3><p>${esc(d)}</p></div></div>`).join('')}</div>
    </div>
  </section>
</main>

${footerHtml(c)}

${SCRIPTS(c)}`;
  write(c.r + 'index.html', html);
}

// ---------------------------------------------------------------- legal
function legalPage(lang, id) {
  const c = makeCtx(lang, id); const L = LEGAL[id]; const x = L[lang]; const t = UI[lang];
  const oid = id === 'kvkk' ? 'privacy' : 'kvkk';
  const ld = [{ '@type': 'WebPage', url: c.url(lang, id), name: x.title, inLanguage: lang === 'tr' ? 'tr-TR' : 'en-US', publisher: orgRef }, crumbLd(c, x.h1)];
  const body = x.blocks.map(([h, p, items]) => `<h2>${esc(h)}</h2><p>${esc(p)}</p>${items.length ? `<ul>${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>` : ''}`).join('\n      ');
  const html = `${head(c, { title: x.title, desc: x.desc, ld })}
<body>
${navHtml(c)}

<main id="top">
${statementHero(c, { h1: x.h1, lead: x.lead, crumb: x.h1 })}

  <section class="section" aria-label="${esc(x.h1)}">
    <div class="wrap grid grid--top">
      <div class="span-8 prose">
      ${x.intro.map((p) => `<p>${esc(p)}</p>`).join('')}
      ${body}
      <p class="updated">${esc(t.updated)}: ${esc(L.updated[lang])}</p>
      <p><a class="link" href="${c.href(lang, oid)}">${esc(x.related)}: ${esc(UI[lang][oid === 'kvkk' ? 'kvkk' : 'privacy'])}</a></p>
      </div>
    </div>
  </section>
</main>

${footerHtml(c, { closeCta: false }).replace('aria-labelledby="close-h"', 'aria-label="ACR Bilgi"')}

${SCRIPTS(c)}`;
  write(c.r + 'index.html', html);
}

// ---------------------------------------------------------------- home
function swapChrome(html, c) {
  html = html.replace(/<header class="nav[\s\S]*?<\/header>/, navHtml(c));
  html = html.replace(/<footer class="footer closing[\s\S]*?<\/footer>\s*<nav class="actionbar"[\s\S]*?<\/nav>/, footerHtml(c));
  return html;
}
function homePages() {
  // Turkish: patch the hand-written index.html (its header, footer and call-to-action links), keep the rest.
  const trPath = 'index.html';
  let tr = fs.readFileSync(trPath, 'utf8');
  const cTr = makeCtx('tr', 'home');
  tr = tr.replace(/mailto:info@acrbilgi\.com\?subject=G%C3%B6r%C3%BC%C5%9Fme%20talebi/g, 'iletisim/#gorusme');
  // icons beside the rows of the infrastructure and licensing sections (idempotent)
  const rowIcons = { 'Donanım ve sunucu': 'server', 'Ağ ve güvenlik': 'shield-check', 'Son kullanıcı desteği': 'headset', 'Microsoft lisanslama': 'badge-check', 'Web sitesi tasarımı': 'layout-template', 'Google reklam planlaması': 'megaphone' };
  for (const [name, icon] of Object.entries(rowIcons)) tr = tr.replace(`<li><span class="rows__name">${name}<small>`, `<li>${chip(icon, true)}<span class="rows__name">${name}<small>`);
  tr = tr.replace(/(id="altyapi"[\s\S]*?<ul class=")rows(")/, '$1rows rows--ico$2').replace(/(id="lisans"[\s\S]*?<ul class=")rows(")/, '$1rows rows--ico$2');
  tr = swapChrome(tr, cTr);
  // hreflang and a link to every section's page
  if (!tr.includes('hreflang="en"')) tr = tr.replace('<link rel="canonical" href="https://www.acrbilgi.com/">', `<link rel="canonical" href="${ORIGIN}/">\n<link rel="alternate" hreflang="tr" href="${ORIGIN}/">\n<link rel="alternate" hreflang="en" href="${ORIGIN}/en/">\n<link rel="alternate" hreflang="x-default" href="${ORIGIN}/">`);
  fs.writeFileSync(trPath, tr);
  // English: translate the Turkish page, then rebuild its chrome and paths.
  let en = tr;
  const reEsc = (x) => x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  for (const [a, b] of HOME_EN) {
    if (a.length >= 25) { if (!en.includes(a)) console.warn('home-en: not found:', a.slice(0, 60)); en = en.split(a).join(b); continue; }
    const node = new RegExp('(>\\s*)' + reEsc(a) + '(\\s*<)', 'g'), attr = new RegExp('="' + reEsc(a) + '"', 'g');
    en = en.replace(node, (m, x, y) => x + b + y).replace(attr, '="' + b + '"');
  }
  en = en.replace('<html lang="tr"', '<html lang="en"');
  en = en.replace(/(href|src|srcset)="(assets\/|favicon\.svg)/g, '$1="../$2').replace(/url\(assets\//g, 'url(../assets/');
  en = en.replace(/(href)="(iletisim|contact)\/#gorusme"/g, 'href="contact/#gorusme"');
  en = en.replace(/href="(ozel-yazilim-gelistirme|kurumsal-donanim-sunucu|microsoft-lisanslama|yonetim-portali)\/"/g, (m, s) => `href="${PAGES.find((p) => p.slug.tr === s).slug.en}/"`);
  en = en.replace(`<link rel="canonical" href="${ORIGIN}/">`, `<link rel="canonical" href="${ORIGIN}/en/">`).replace(`<meta property="og:url" content="${ORIGIN}/">`, `<meta property="og:url" content="${ORIGIN}/en/">`).replace('content="tr_TR"', 'content="en_US"');
  en = swapChrome(en, makeCtx('en', 'home'));
  write('en/index.html', en);
}

function write(file, data) { fs.mkdirSync(path.dirname(file) || '.', { recursive: true }); fs.writeFileSync(file, data); }

for (const lang of ['tr', 'en']) {
  PAGES.forEach((p) => servicePage(lang, p));
  contactPage(lang); aboutPage(lang); legalPage(lang, 'kvkk'); legalPage(lang, 'privacy');
}
homePages();

// sitemap with language alternates
const ids = ['home', ...PAGES.map((p) => p.id), 'about', 'contact', 'kvkk', 'privacy'];
const urls = ids.flatMap((id) => ['tr', 'en'].map((l) => `  <url><loc>${ORIGIN}/${rel(l, id)}</loc><lastmod>2026-11-25</lastmod><xhtml:link rel="alternate" hreflang="tr" href="${ORIGIN}/${rel('tr', id)}"/><xhtml:link rel="alternate" hreflang="en" href="${ORIGIN}/${rel('en', id)}"/></url>`));
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`);
console.log('built', urls.length, 'pages');
