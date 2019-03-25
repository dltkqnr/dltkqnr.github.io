//alert("ok")

/*gallery.js */

var images = [];
images.push("img/img1.jpg");
images.push("img/img2.jpg");
images.push("img/img3.jpg");

currentImage = 0;


document.querySelector("#prevbutton").addEventListener("click",
function(){
    currentImage --;
    if(currentImage<0)
        currentImage = images.length -1;

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
    pc document.getElementById('picture');
    pc.src = images[currentImage];

}