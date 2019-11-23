//----Slideshow-------------

var i=0; // start point
var images=[];
var time =3000;

//images list
images[0]= 'image1.jpg';
images[1]= 'image2.jpg';
images[2]= 'image3.jpg';
images[3]= 'image4.jpg';
//images[4]= 'image5.jpg';


//change images
function changeImg(){
document.slide.src=images[i]
if(i<images.length - 1){
    i++
}else{
    i=0;
}
setTimeout("changeImg()",time);
}
window.onload = changeImg;

//-----Animate box (aside)----

//images container
var imageSlide= new Array ("img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg",);
var imgLength= imageSlide.length;
var imgCurrent=0;
funtion side(){
    if(imgCurrent >= Img_Leungth){
        imgCurrent=0;
    }
    document.slideshow.scr = imageSlide[imgCurrent];
    imgCurrent++;
}
function auto(){
    setInterval(slide, 1000);
}
window.onload = auto;