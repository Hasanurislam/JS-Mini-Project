let height=document.querySelector('#he-it');
let weight=document.querySelector('#we-it');
let p=document.querySelector('p');

let btn=document.querySelector('#cal-btn');

btn.addEventListener("click",function(){
    let hei=parseInt(height.value)
    let wei=parseInt(weight.value);
    let bmi=wei/Math.sqrt(hei);

    p.innerText=bmi

})