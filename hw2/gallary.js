//alert("ok")

/*gallery.js */

var images = [];
images.push("img/bear1.jpg");
images.push("img/bear2.jpg");
images.push("img/bear3.jpg");
images.push("img/bear4.jpg");
images.push("img/bear5.jpg");
images.push("img/bear6.jpg");
images.push("img/bear7.jpg");
images.push("img/tiger8.jpg");
images.push("img/tiger9.jpg");
images.push("img/tiger10.jpg");

currentImage = 0;


document.querySelector("#prevbutton").addEventListener("click",
function(){
    currentImage --;
    if(currentImage<0)
        currentImage = images.length -1 ;

        showimage();

});

document.querySelector("#nextbutton").addEventListener("click",
function(){
    currentImage ++;
    if(currentImage>=images.length)
        currentImage = 0;

        showimage();


});

function showimage(){
    pc = document.getElementById('picture');
    pc.src = images[currentImage];

}