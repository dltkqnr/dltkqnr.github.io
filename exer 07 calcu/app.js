/* app.js*/


//alert("ok");


//this will only run afer the page is loaded

window.onload = function(){

    alert("10");
    document. getElementById("#b_add").onclick=function(){
        let a = document.querySelector("#n1");
        let b = document.querySelector("#n2");
        let c = (parseInt(a.value) + parseInt(b.value));
        document.querySelector("output").innerHTML = c;

    };
    document. getElementById("#b_sub").onclick=function(){
        let a = document.querySelector("#n1");
        let b = document.querySelector("#n2");
        let c = (parseInt(a.value) - parseInt(b.value));
        document.querySelector("output").innerHTML = c;
    

    };
    document. getElementById("#b_div").onclick=function(){
        let a = document.querySelector("#n1");
        let b = document.querySelector("#n2");
        let c = (parseInt(a.value) / parseInt(b.value));
        document.querySelector("output").innerHTML = c;

    };
    document. getElementById("#b_mul").onclick=function(){
        let a = document.querySelector("#n1");
        let b = document.querySelector("#n2");
        let c = (parseInt(a.value) * parseInt(b.value));
        document.querySelector("output").innerHTML = c;



    };
}

function compute(op){
    
        let a = document.querySelector("#n1");
        let b = document.querySelector("#n2");
        let c = 0;

        switch(op){
            case '+' : c = (parseInt(a.value) + parseInt(b.value));
                break;
            case '-' : c = (parseInt(a.value) - parseInt(b.value));
                break;
            case '/' : c = (parseInt(a.value) / parseInt(b.value));
                break;
            case '*' : c = (parseInt(a.value) * parseInt(b.value));
                break;
            default:
        }
        //div tag - innerHTML / innerText
        document.querySelector("#output").innerHTML = c;
        //input tag
        document.querySelector("#output2").value = c;

}       



