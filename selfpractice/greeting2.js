const form=document.querySelector(".js-form"),
      input=form.querySelector("input"),
      greetings=document.querySelector(".js-greetings");

const USER_LS="currenUser",
      SHOWING_CN="showing";



function saveUserName(name){
    localStorage.setItem(USER_LS,name);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue=input.value;
    printName(currentValue);
    saveUserName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}

function printName(name){
    form.classList.remove(SHOWING_CN);
    greetings.classList.add(SHOWING_CN);
    greetings.innerHTML=`Hello ${name} have a nice day!`;
}



function loadName(){
    const currentUser=localStorage.getItem(USER_LS);
    if(currentUser==null){
        askForName();
    }else{
        printName(currentUser);
    }
}

function init(){
    loadName();
}


init();


