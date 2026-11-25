// Builds dist/ (what goes to the hosting's public_html) and acrbilgi-site.zip. Run: node tools/build.mjs && node tools/package.mjs
import fs from 'node:fs'; import path from 'node:path';
const out = 'dist';
fs.rmSync(out, { recursive: true, force: true }); fs.mkdirSync(out);
const skipDir = new Set(['_demo', '_lab', 'demo', 'photos', 'objects', 'scenes', 'components', 'img', 'tools', '.git', '.taste-skill', 'dist', 'node_modules']);
const keepExt = new Set(['.html', '.css', '.js', '.mjs', '.json', '.svg', '.png', '.jpg', '.webp', '.woff2', '.txt', '.xml', '.php', '.ico']);
function copy(src, dst, inAssets) {
  for (const e of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, e.name), d = path.join(dst, e.name);
    if (e.isDirectory()) { if (skipDir.has(e.name) && !(e.name === 'img' && !inAssets)) continue; if (inAssets && /^(photos|objects|scenes|components)$/.test(e.name)) continue; fs.mkdirSync(d, { recursive: true }); copy(s, d, inAssets); continue; }
    const ext = path.extname(e.name).toLowerCase();
    if (inAssets && (ext === '.html' || ext === '.md' || e.name === 'icons-credits.json')) continue;
    if (!inAssets && !(keepExt.has(ext) || e.name === '.htaccess')) continue;
    if (!inAssets && /^(FORM-SETUP|README)/i.test(e.name)) continue;
    fs.copyFileSync(s, d);
  }
}
// top-level files and page folders
for (const e of fs.readdirSync('.', { withFileTypes: true })) {
  if (e.name.startsWith('.') && e.name !== '.htaccess') continue;
  if (e.isDirectory()) {
    if (skipDir.has(e.name) || e.name === 'assets') continue;
    fs.mkdirSync(path.join(out, e.name), { recursive: true }); copy(e.name, path.join(out, e.name), false);
  } else if (/\.(html|css|svg|txt|xml|php|jpg|png|ico)$/.test(e.name) || e.name === '.htaccess') fs.copyFileSync(e.name, path.join(out, e.name));
}
fs.mkdirSync(path.join(out, 'assets'), { recursive: true }); copy('assets', path.join(out, 'assets'), true);
// tidy empty folders
(function prune(d) { for (const e of fs.readdirSync(d, { withFileTypes: true })) if (e.isDirectory()) { prune(path.join(d, e.name)); if (!fs.readdirSync(path.join(d, e.name)).length) fs.rmdirSync(path.join(d, e.name)); } })(out);
const legacy = process.env.LEGACY_DIR || '/tmp/claude-0/oldsite';
if (fs.existsSync(legacy)) {
  const put = (rel) => { const src = path.join(legacy, rel); if (!fs.existsSync(src)) return console.warn('legacy missing:', rel); fs.mkdirSync(path.dirname(path.join(out, rel)), { recursive: true }); fs.cpSync(src, path.join(out, rel), { recursive: true }); };
  put('gonder.php'); put('php/PHPMailer'); put('php/config.php'); put('imza'); put('robots.txt');
  for (const f of fs.readdirSync(legacy)) if (/^google[0-9a-f]+\.html$/.test(f) || f === 'BingSiteAuth.xml') put(f);
  fs.writeFileSync(path.join(out, 'php/gonderim.log'), '');
  fs.writeFileSync(path.join(out, 'php/.htaccess'), '<IfModule mod_authz_core.c>\n  Require all denied\n</IfModule>\n<IfModule !mod_authz_core.c>\n  Deny from all\n</IfModule>\n');
} else console.warn('LEGACY_DIR not found: form backend and verification files are NOT in dist');
let n = 0, bytes = 0; (function walk(d) { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); if (e.isDirectory()) walk(p); else { n++; bytes += fs.statSync(p).size; } } })(out);
console.log(`dist: ${n} files, ${(bytes / 1048576).toFixed(1)} MB`);
