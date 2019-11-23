//----Slideshow-------------

var i=0; // start point
var images=[];
var time =2000;

//images list
images[0]= 'image1.jpg';
images[1]= 'image2.jpg';
images[2]= 'image3.jpg';
images[3]= 'image4.jpg';



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




  //---------------------Frome -------
  function validateForm(form) {
    validateName(form);
    validateEmail(form);
    //checkValidity(form);
    //alert(form)

    
}


  function validateName(form) {
    var name = form.elements["name"];

    if (name.validity.valueMissing) {
        name.setCustomValidity("Please enter your Name here")
    }
    else {
        name.setCustomValidity("");
    }
    console.log(name);
}
//-------------Email----------------
    function validateEmail(form) {
        var email = form.elements["email"];
        console.log(email);
        if (email.validity.valueMissing) {
            email.setCustomValidity("Please enter your Email Adress here")
        }
        else {
            email.setCustomValidity("");}
        }

//--------------------



  
        