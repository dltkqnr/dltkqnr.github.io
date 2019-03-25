


//alert("ok")


document.querySelector("#redbox").onclick = function(){
console.log("red is ok");
document.getElementById("title").style.color = "f00";


}

document.querySelector("#bluebox")
.addEventListener("click",function(){
    console.log("blue is ok");
    document.getElementById("title").style.color = "f00";

    
    
    });


    document.getElementById("greenbox")
    .onclick = function(){
        console.log("green is ok");
        document.getElementById("title").style.color = "f00";
    }
        
        