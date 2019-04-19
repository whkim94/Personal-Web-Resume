<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $from = 'From: SuperMan';
    $to = 'whkim94@gmail.com';

    $body = "From: $name\n E-Mail: $email\n Message:\n $message";

    echo $body;

    
    if ($_POST['submit']) {
        if(mail ($to, $subject, $body, $from)) {
            echo '<p>Your message has been sent!</p>';
        } else {
            echo '<p>Something went wrong, go back and try again!</p>';
        }
    }

?>