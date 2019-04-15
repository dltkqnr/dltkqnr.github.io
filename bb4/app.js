/* Filename: app.js
   Javascript for Game 2 Homework
*/

//alert("ok");
//console.log("ok");

//global variables

var canvas;
var ctx;
var y= 20;
var x= 20;
var yP = 2;
var xP = 2;




running = false;

window.onload = init;

function init() {
    canvas = document.getElementById("game_area");
    ctx = canvas.getContext("2d");
  draw();

  document.querySelector("#sijak").addEventListener("click",function(){
    //console.log("k");
    if(running){
      running = false;
      this.innerHTML = "start";
      return;
    }
    else{
      running = true;
      this.innerHTML = "stop";
    }

    updateData();

  });

}

function updateData(){
//Y Animation
  y+= yP;
  if(y>canvas.height -20)
      yP *=-1;
  if(y<20)
    yP *=-1;

//X Animation
  x+= xP;  // x = x + xP;
  if(x>canvas.width -20)
    xP *=-1;  // 2 * -1 = -2
  if(x<20)
    xP *=-1;  // -2  * -1 = 2
    
  //cosole log
    draw();
    if(running)
     requestAnimationFrame(updateData);
}

function draw(){
  //clear your canvas
    ctx.clearRect(0,0,canvas.width, canvas.height);

  //draw circles

  ctx.fillStyle = "#f7f";
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, 2 * Math.PI);
  ctx.fill();


}