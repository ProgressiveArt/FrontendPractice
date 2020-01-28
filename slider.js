/*Простая и средитая реализация слайдера в основном с помощью css, =3
Ранее уже показывал версию слайдера, сделанного полностью на JS, генерирующем html и css код, что позволяло добавлять любое кол-во доп. слайдов в "пару кликов"". По техническим проблемам та версия утеряна =_/ */


/*Изменение цвета кнопок*/
$(document).ready(function () {
    $('label[for=r2]').css('background', '#264160');
});

var label = $("label[for=r1],label[for=r2]");

function change() {
    $(label).css('background', '#264160');
    $(this).css('background', 'none');
}

$(label).click(change);

/* Рекурсивный setTimeout – более гибкий метод, чем setInterval. 
   С его помощью последующий вызов может быть задан по-разному в зависимости от результатов предыдущего.*/
var x = true,
timeOut = 5000;
setTimeout(autoslide(),timeOut);


function autoslide(){
    $(label).css('background', '#264160');
    if(x==false){
        right();
        x = true;
        $(label[1]).css('background', 'none');
    }
    else{
        left();
        x = false;
        $(label[0]).css('background', 'none');
    }
    setTimeout(autoslide, timeOut);
}


/*Движение слайдов*/
$(label[0]).click(left);

$(label[1]).click(right);

function left() {
    $('#s1').css('margin-left', '0%'); 
}

function right() {
    $('#s1').css('margin-left', '-50%'); 
}





