<?php

var_dump($_POST);
if ((isset($_POST['name']) && $_POST['name'] != "") && (isset($_POST['phone']) && $_POST['phone'] != "")) { //Проверка отправилось ли наше поля name и не пустые ли они
    $to = 'alex@4ats.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
//	$subject = 'Обратный звонок'; //Загаловок сообщения
    $subject = $_POST['subject'];
    $message = '
                <html>
                    <head>
                        <title>' . $subject . '</title>
                    </head>
                    <body>
                        <p>Имя: ' . $_POST['name'] . '</p>
                        <p>Телефон: ' . $_POST['phone'] . '</p>
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
    $headers = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From: notification@dj_bo.com\r\n"; //Наименование и почта отправителя
    mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail

    echo json_encode(array(
        'msg' => 'Благодарим за заявку! Мы вскоре с вами свяжемся.'
    ));
} else {
    echo json_encode(array(
        'msg' => 'Произошла ошибка! Проверьте правильность заполненых полей!'
    ));
}
