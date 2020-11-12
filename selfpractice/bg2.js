/*const body=document.querySelector("body");

const IMAGE_NUMBER=5;


function paintImage(number){
    const image=new Image();
    image.src=`picture/${number+1}.jpg`;
    image.classList.add("bgPicture");
    body.appendChild(image);
}

function setRandomNumber(){
    const number=Math.ceil(Math.random()*IMAGE_NUMBER);
    return number;
}

function init(){
    const randomNumber=setRandomNumber();
    paintImage(randomNumber);
}

init();
*/



const body=document.querySelector("body");

const PHOTO_NUMBER=5;

function setRandomNumber(number){
    const randomNumber=Math.ceil(Math.random()*PHOTO_NUMBER);
    return randomNumber;
}

function paintImage(value){
    const image=new Image();
    image.src=`picture/${value+1}.jpg`;
    image.classList.add("bgPicture");
    body.appendChild(image);
}

function init(){
    const loadRandomNumber=setRandomNumber(PHOTO_NUMBER);
    paintImage(loadRandomNumber);
}

init();