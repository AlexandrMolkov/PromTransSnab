<?php  

require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$title = "Заявка с сайта PromTransSnab";
$c = true;

foreach($_POST as $key => $value) {
    $body .= "
    " . (($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">') . "
        <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
        <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
    </tr>
    ";
};

$body = "<table style='width: 100%'>$body</table>";

$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth = true;

    $mail->Host = 'smtp.yandex.ru';     
    $mail->Username = 'xxx';               //SMTP username
    $mail->Password = 'xxx';               //SMTP password
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    $mail->setFrom('xxx', 'Заявка с сайта');


    // получатели
    $mail->addAddress('xxx');

    $mail->isHTML(true);        // выводить как html
    $mail->Subject = $title;
    $mail->Body = $body;

    $mail->send();


} catch (Exception $e) {
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
    
}