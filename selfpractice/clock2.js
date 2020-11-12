const time=document.querySelector(".js-time");


function loadCurrentTime(){
    const date = new Date();
    const hours=date.getHours();
    const minutes=date.getMinutes();
    const seconds=date.getSeconds();
    time.innerHTML=`${hours<10 ? `0${hours}`:hours}:${minutes<10 ? `0${minutes}`:minutes}:${seconds<10 ? `0${seconds}`:seconds}`;
}


function init(){
    loadCurrentTime();
    setInterval(loadCurrentTime,1);
}

init();