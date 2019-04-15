


var number = 0;

window.onload = function() {
    setTimeout(countUp,1000);
    showNumber();
}


function countUp() {
        number ++;
        showNumber();
        if(number<100)
             setTimeout(countUp,100);
}

function showNumber(){
    document.querySelector('#display').innerHTML = number;
}