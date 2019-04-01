/* app.js -KEY PRESS Validation */


window.onload = function() {

    document.querySelector("#numberonly").onkeypress=function(ev){
        //0 - 48 to 9 - 57 (keycode check)
       // console.log(ev)
        if(!ev)
            ev=window.event; // to make sure you have an event
        if(ev.keyCode<48 || ev.keyCode>57)
            ev.preventDefault();

    }



}