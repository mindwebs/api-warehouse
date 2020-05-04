<?php
//Supported Methods - GET, POST

include_once 'mailer.php';

$email = ''; $subject = ''; $body = '';
$apikey = '';       // Set API Key Here

$send = false;

if(isset($_POST['sendMail'])) {
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $body = $_POST['subject'];

    $getApiKey = $_POST['apiKey'];
    // You can add authentication here
    if($getApiKey = $apikey)
        $send = true;
    else
        $send = false;
} else {
    $email = $_GET['email'];
    $subject = $_GET['subject'];
    $body = $_GET['body'];

    if($_GET['apiKey'] == $apikey)
        $send = true;
    else
        $send = false;
}

if($send){
    $message = sendMail($email, $subject, $body);
    echo $message;
} else {
    echo "Authentication Failed";
}

?>