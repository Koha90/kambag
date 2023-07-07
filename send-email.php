<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Получение данных из POST-запроса
  $name = $_POST["name"];
  $phone = $_POST["phone"];
  $email = $_POST["email"];
  $quantity = $_POST["quantity"];
  $variants = $_POST["variants"];
  $notes = $_POST["notes"];

  // Валидация данных, обработка и отправка письма
  // Здесь вы можете использовать библиотеки PHP для отправки писем, например PHPMailer

  // Пример использования PHPMailer
  require 'phpmailer/PHPMailerAutoload.php';

  $mail = new PHPMailer;

  // Конфигурация SMTP-сервера
  $mail->isSMTP();
  $mail->Host = 'smtp.gmail.com';
  $mail->SMTPAuth = true;
  $mail->Username = 'koha.nokhrin@gmail.com';
  $mail->Password = 'VictoriaBekham1995';
  $mail->SMTPSecure = 'ssl';
  $mail->Port = 465;

  // Отправитель и получатель письма
  $mail->setFrom('koha.nokhrin@gmail.com', 'Aleksey nokhrin');
  $mail->addAddress('alekey.jake@gmail.com', 'Koha nokhrin');

  // Тема и содержимое письма
  $mail->Subject = 'Новый заказ';
  $mail->Body = "Имя: $name\nТелефон: $phone\nEmail: $email\nКоличество: $quantity\nВарианты: $variants\nПояснение: $notes";

  if ($mail->send()) {
    // Отправка успешна
    $response = array('success' => true);
    echo json_encode($response);
  } else {
    // Ошибка при отправке
    $response = array('success' => false);
    echo json_encode($response);
  }
}
?>

