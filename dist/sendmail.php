<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'PHPMailer/src/Exception.php';
    require 'PHPMailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'PHPMailer/language/');
    $mail->IsHTML(true);

    $mail->setFrom('Kraspitomnik24@yandex.com', 'Красноярский лесопитомник');
    $mail->addAddress('Kraspitomnik24@yandex.com');
    $mail->Subject = 'Красноярский лесопитомник';

    $body = '<h1>заявка</h1>';

    if(trim(!empty($_POST['title']))){
        $body.= '<p>' .$_POST['title'].'</p>';
    }
    if(trim(!empty($_POST['name']))){
        $body.= '<p>Имя: ' .$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['phone']))){
        $body.= '<p>Телефон: ' .$_POST['phone'].'</p>';
    }
    if(trim(!empty($_POST['email']))){
        $body.= '<p>Почта: ' .$_POST['email'].'</p>';
    }
    $mail->Body = $body;

    $mail->send();

    if($mail->send()){
        $message = 'Даныне отправлены';
    }else{
        $message = 'Ошибка';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>