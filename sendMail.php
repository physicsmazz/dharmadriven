<?php
require_once 'classes/PHPMailer.class.php';

$email = new PHPMailer(true);
$email->AddAddress('bepresentyoga@gmail.com', 'Dharma Driven');
$email->Subject = "Email from dharmadriven.com";
$email->From = 'donotreply@dharmadriven.com';
$email->FromName = "Dharma Driven";

$name = trim(stripslashes($_POST['name']));
$emailAddress = trim(stripslashes($_POST['emailAddress']));
$message = trim(stripslashes($_POST['message']));

$emailBody = "From: {$name}<br>";
$emailBody .= "Email: {$emailAddress}<br>";
$emailBody .= "Message: {$message}<br>";

$email->MsgHTML($emailBody);

try {
    $email->Send();
    echo ("Your message was sent.");
} catch (Exception $e) {
    echo ($e->getMessage());
}



 