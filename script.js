
// selecting the bulb image
const image = document.querySelector('#image');


// function to turn on bulb 
function turnOnBulb(){
   image.setAttribute('src' ,  "images/pic_bulbon.gif");
}

// function to turn of bulb 
function turnOffBulb(){
    image.setAttribute('src' ,  "images/pic_bulboff.gif" )
}


// function to toggle bulb 
function toggleBulb(){
    const src =  image.getAttribute('src');
    const toggleText = document.getElementById('toggle');
    const txt = document.getElementById('bulb-txt');


    if(src ===  "images/pic_bulbon.gif"){
        image.setAttribute('src' ,  "images/pic_bulboff.gif");
        toggleText.innerHTML = "ON";
        txt.innerHTML = "ON";
        txt.style.color = "green";
    }
    else{
        image.setAttribute('src' ,  "images/pic_bulbon.gif");
        toggleText.innerHTML = "OFF";
        txt.innerHTML = "OFF";
        txt.style.color = "brown";
    }
}