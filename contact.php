<?php

$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$phone = $_REQUEST['phone'];
$country = $_REQUEST['country'];
$message = $_REQUEST['message'];

$email_from = 'prathameshdattakumar188@gmail.com';

$email_subject = 'New Form Submission';

$email_body = 'Name: $name \n'.
                'Email: $email \n'.
                    'Message: $message \n'.

$to = 'pratham.dbankar@gmail.com';

$headers = 'From: $email_from \r\n';

$headers = 'Reply-To: $email \r\n';

mail($to, $email_subject, $email_body, $headers);

header('Location: index.html');

?>