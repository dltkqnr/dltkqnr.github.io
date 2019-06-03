

function add(char) {
    var display = document.getElementById('display'); 
    display.value = display.value + char;

}


function calculate() {
    var display = document.getElementById('display');
    var result = eval(display.value); // 식을 계산하고 result 변수에 저장합니다.
    document.getElementById('result').value = result;

}

function reset() {
    document.getElementById('display').value = "";
    document.getElementById('result').value = "";
}
    