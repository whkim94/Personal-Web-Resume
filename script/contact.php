<?php

    require 'vendor/autoload.php';

    $mail = new PHPMailer\PHPMailer\PHPMailer();

    // Server Setup
    $mail->IsSMTP(); // enable SMTP
    $mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
    $mail->SMTPAuth = true; // authentication enabled
    $mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail
    $mail->Host = "email-smtp.us-west-2.amazonaws.com"; // email domain
    $mail->Username = "My-Access-Key"; // SMTP access KEY 
    $mail->Password = "My-Access-Password"; // SMTP access password
    $mail->Port = 465; // or 587
    
    //Recipients
    $mail->SetFrom("email@jonathanwkim.com");  // Sender email. Can only be my own email domain for SES security
    $mail->AddAddress("whkim94@gmail.com");  // My actual email address
    $mail->Name = $_REQUEST['name'];  // get the name from the HTML form
    
    //Content
    $mail->IsHTML(true);   // HTML email form on
    $mail->Subject = $_REQUEST['subject']; // get the subject from the HTML form
    $mail->Body = $_REQUEST['message'];  // get the body message from the HTML form

    if (!$mail->send()) {  // Alerts if the email was not sent
        echo '<script language="javascript">';
        echo 'alert("Mailer Error: . $mail->ErrorInfo")';
        echo '</script>';
        $mail->ClearAllRecipients(); // Clear all Recipients
    } else {
        echo '<script language="javascript">';  // Alter if the email was sent
        echo 'alert("Email successfully sent :)")';
        echo '</script>';
        $mail->ClearAllRecipients();
    }
?>