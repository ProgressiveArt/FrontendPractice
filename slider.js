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



/* Рекурсивный setTimeout – более гибкий метод, чем setInterval. 
   С его помощью последующий вызов может быть задан по-разному в зависимости от результатов предыдущего.*/

var x = false,
timeOut = 5000;
setTimeout(autoslide(),timeOut);
var coin = 0;
$(label[0]).css('background', 'none');

function autoslide(){
    $(label).css('background', '#264160');
        if(coin==1){
            if(x==false){
                right();
                
                $(label[1]).css('background', 'none');
            }
            else{
                left();
                
                $(label[0]).css('background', 'none');
            }
    }
    
    setTimeout(autoslide, timeOut);
}


/*Движение слайдов*/
coin = 1;
var f = true;





$(label[1]).click(right); 
$(label).click(change);
$(label[0]).click(left);


function left() {
    if( x == true){
    $('#s1').css('left', '0%'); 
    $('#s2').css('left', '-50%'); 
    $('.block').css('z-index','6');
    setTimeout(function() {
        $('#s2').css('transition', '0s');
        $('#s2').css('opacity', '0');
        setTimeout(function(){
            $('#s2').css('left', '50%');
            setTimeout(function(){
                $('#s2').css('opacity', '1');
                $('#s2').css('transition', '1s');
                $('.block').css('z-index','4');
            },20);
        },10);
    },600);
}
    x = false;
}

function right() {
    
    if(x == false){
    $('#s2').css('left', '0%'); 
    $('#s1').css('left', '-50%'); 
    $('.block').css('z-index','6');
    setTimeout(function() {
        $('#s1').css('transition', '0s');
        $('#s1').css('opacity', '0');
        setTimeout(function(){
            $('#s1').css('left', '50%');
            setTimeout(function(){
                $('#s1').css('opacity', '1');
                $('#s1').css('transition', '1s');
                $('.block').css('z-index','4');
            },20);
        },10);
    },600);
    }
    x = true;
}





