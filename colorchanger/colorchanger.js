/*let box1=document.querySelector(".box1");
let box2=document.querySelector(".box2");
let box3=document.querySelector(".box3");
let box4=document.querySelector(".box4");

box1.addEventListener("click",function(){
    document.body.style.backgroundColor="green";
})
box2.addEventListener("click",function(){
    document.body.style.backgroundColor="red";
})
box3.addEventListener("click",function(){
    document.body.style.backgroundColor="blue";
})
box4.addEventListener("click",function(){
    document.body.style.backgroundColor="yellow";
})
    */
let box=document.querySelectorAll(".box");
let body=document.querySelector("body");

box.forEach(function(btn){
    console.log(btn);
    btn.addEventListener("click",function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id=="green"){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id=="red"){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id=="blue"){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id=="yellow"){
            body.style.backgroundColor=e.target.id;
        }

    })

})