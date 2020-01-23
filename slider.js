/*Простая и средитая реализация слайдера в основном с помощью css, =3
Ранее уже показывал версию слайдера, сделанного полностью на JS, генерирующем html и css код, что позволяло добавлять любое кол-во доп. слайдов в "пару кликов"". По техническим проблемам та версия утеряна =_/ */


/*Изменение цвета кнопок*/
$(document).ready(function () {
    $('label[for=r2]').css('background', '#264160');
});

var label = $("label[for=r1],label[for=r2]");

$(label).click(function () {
    $(label).css('background', '#264160');
    $(this).css('background', 'none');
});


/*Движение слайдов*/
$('label[for=r1]').click(function(){
    $('#s1').css('margin-left','0%');
});

$('label[for=r2]').click(function(){
    $('#s1').css('margin-left','-50%');
});
