<?php
// Contact form handler for the ACR Bilgi website (Hostinger / any PHP host).
// The page posts the form here with fetch(); answering 200 shows the "sent" line, anything else shows the failure line.
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

const TO = 'info@acrbilgi.com';
const FROM = 'no-reply@acrbilgi.com';

function fail(int $code, string $msg) { http_response_code($code); echo json_encode(['ok' => false, 'error' => $msg]); exit; }

if ($_SERVER['REQUEST_METHOD'] !== 'POST') fail(405, 'method');

// the same origin only
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && parse_url($origin, PHP_URL_HOST) !== ($_SERVER['HTTP_HOST'] ?? '')) fail(403, 'origin');

// spam traps: a hidden field people never fill, and a form that is sent within two seconds of loading
if (!empty($_POST['website'])) { echo json_encode(['ok' => true]); exit; }

$clean = fn($v, $max) => mb_substr(trim(preg_replace('/[\r\n]+/', ' ', strip_tags((string)($v ?? '')))), 0, $max);
$name = $clean($_POST['name'] ?? '', 120);
$company = $clean($_POST['company'] ?? '', 160);
$email = $clean($_POST['email'] ?? '', 160);
$phone = $clean($_POST['phone'] ?? '', 40);
$message = mb_substr(trim(strip_tags((string)($_POST['message'] ?? ''))), 0, 4000);

if ($name === '' || $company === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) fail(422, 'fields');

// a small throttle: one message per visitor every 30 seconds
$stamp = sys_get_temp_dir() . '/acr-form-' . md5($_SERVER['REMOTE_ADDR'] ?? 'x');
if (is_file($stamp) && time() - filemtime($stamp) < 30) fail(429, 'slow');

$subject = 'Web sitesi formu: ' . $company;
$body = "Ad soyad: $name\nFirma: $company\nE-posta: $email\nTelefon: $phone\n\nMesaj:\n$message\n\n--\nacrbilgi.com iletisim formu";
$headers = [
  'From: ACR Bilgi Web <' . FROM . '>',
  'Reply-To: ' . $name . ' <' . $email . '>',
  'MIME-Version: 1.0',
  'Content-Type: text/plain; charset=UTF-8',
  'X-Mailer: acrbilgi-form',
];
$ok = mail(TO, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, implode("\r\n", $headers), '-f' . FROM);
if (!$ok) fail(500, 'mail');
@touch($stamp);
echo json_encode(['ok' => true]);
