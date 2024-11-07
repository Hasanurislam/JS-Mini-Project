let watchdisplay=document.querySelector(".watch-display");
let stopbtn=document.querySelector("#stopbtn");
let startbtn=document.querySelector("#startbtn");
let resetbtn=document.querySelector("#resetbtn");


let mili=0;
let sec=0;
let min=0;
let Timerid=null;

startbtn.addEventListener('click',function(){
    if(Timerid!==null){
        clearInterval(Timerid);
    }
    Timerid=setInterval(start,10);

})
stopbtn.addEventListener('click',function(){
    clearInterval(Timerid);

})
resetbtn.addEventListener('click', function() {
    clearInterval(Timerid);
    mili = 0;
    sec = 0;
    min = 0;
    watchdisplay.innerHTML = `00:00:00`;
});


function start(){


    mili++;
    if(mili===100){
        mili=0;
        sec++;
        if(sec===60){
            sec=0;
            min++;
        }
    }


let milistring=mili<10?`0${mili}`:mili;
let secstring=sec<10?`0${sec}`:sec;
let minstring=min<10?`0${min}`:min;

watchdisplay.innerHTML=`${minstring}:${secstring}:${milistring}`;
}