<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exeption;

    require 'phpmailer/src/Exeption.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail -> CharSet = 'UTF-8';
    $mail -> setLanguage('ru', 'phpmailer/language/');
    $mail -> IsHTML(true);

    $mail -> setFrom('info@fls.guru', 'Sunrise');
    $mail -> addAddress('code@fls.guru');
    $mail -> Subject = 'Hello, it is Sunrise group';

    $body = '<h1>Новое письмо!!</h1>';

    if(trim(!empty($_POST['name']))){
        $body .= '<p><strong>Name:</strong> '.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['email']))){
        $body .= '<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
    }
    if(trim(!empty($_POST['message']))){
        $body .= '<p><strong>Message:</strong> '.$_POST['message'].'</p>';
    }

    $mail -> Body = $body;

    if (!$mail->send()) {
        $message = "Ошибка отправки";
    } 
    else {
        $message = "Данные отправлены!";
    }
       
    $response = ["message" => $message];
       
    header('Content-type: application/json');
    echo json_encode($response);
       
?>