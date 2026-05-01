<?php
header('Content-Type: application/json; charset=UTF-8');

function respond($status, $payload) {
  http_response_code($status);
  echo json_encode($payload);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  respond(405, [
    'ok' => false,
    'message' => 'Method not allowed.',
  ]);
}

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');
$subject = trim($_POST['subject'] ?? 'General inquiry');
$origin = trim($_POST['origin'] ?? 'Started from the portfolio');
$pageUrl = trim($_POST['page_url'] ?? '');
$pageTitle = trim($_POST['page_title'] ?? '');
$website = trim($_POST['website'] ?? '');

if ($website !== '') {
  respond(400, [
    'ok' => false,
    'message' => 'Spam rejected.',
  ]);
}

if ($name === '' || $email === '' || $message === '') {
  respond(400, [
    'ok' => false,
    'message' => 'Please complete the required fields.',
  ]);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  respond(400, [
    'ok' => false,
    'message' => 'Please enter a valid email address.',
  ]);
}

$cleanSubject = preg_replace("/[\r\n]+/", ' ', $subject);
$cleanOrigin = preg_replace("/[\r\n]+/", ' ', $origin);
$cleanTitle = preg_replace("/[\r\n]+/", ' ', $pageTitle);

$to = 'hello@thomas-graham.me';
$emailSubject = 'Portfolio Contact: ' . $cleanSubject;
$emailBody = implode("\n", [
  'You have received a new message from the portfolio contact form.',
  '',
  'Subject: ' . $cleanSubject,
  'Origin: ' . $cleanOrigin,
  'Page title: ' . $cleanTitle,
  'Page URL: ' . $pageUrl,
  '',
  'Name: ' . $name,
  'Email: ' . $email,
  '',
  'Message:',
  $message,
]);

$headers = [
  'MIME-Version: 1.0',
  'Content-Type: text/plain; charset=UTF-8',
  'From: Thomas Graham Site <noreply@thomas-graham.me>',
  'Reply-To: ' . $email,
  'X-Mailer: PHP/' . phpversion(),
];

$sent = mail($to, $emailSubject, $emailBody, implode("\r\n", $headers));

if (!$sent) {
  respond(500, [
    'ok' => false,
    'message' => 'The message could not be sent from the server.',
  ]);
}

respond(200, [
  'ok' => true,
  'message' => 'Thanks — I’ll follow up by email.',
]);
