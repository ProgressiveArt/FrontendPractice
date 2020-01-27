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
$(label[0]).click(left);

$(label[1]).click(right);

function left() {
    $('#s1').css('margin-left', '0%');
}

function right() {
    $('#s1').css('margin-left', '-50%');
}


/* Рекурсивный setTimeout – более гибкий метод, чем setInterval. 
   С его помощью последующий вызов может быть задан по-разному в зависимости от результатов предыдущего.*/
var index = 0,
timeOut = 5000;

setTimeout(function autoplay() {

    if (index < label.length - 1) {
        right();
        ++index;
    } else {
        left();
        index = 0;
    }
    
        setTimeout(autoplay, timeOut)
}, timeOut);

