


var number = 0;
var number2 = 0;

window.onload = function() {
    requestAnimationFrame(countUp);
    setTimeout(countUp,15);
    showNumber();
    showNumber2();
}

function countUp() {
    number ++;
    showNumber();
    if(number<100)
    requestAnimationFrame(countUp,15);
}

function countUp2() {
    number2 ++;
    showNumber2();
    if(number2<100)
        setTimeout(countUp,100);
}

function showNumber(){
    document.querySelector('#display1').innerHTML = number;
}

function showNumber(){
    document.querySelector('#display2').innerHTML = number2;
}