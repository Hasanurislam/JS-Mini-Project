let h1=document.querySelector('h1');
let btn=document.querySelectorAll(".button");
let string="";

Array.from(btn).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML=== "="){
            try{
          string=eval(string);
          h1.innerHTML=string;
            }
            catch{
                h1.innerHTML='Error';
                string='';
            }

            }
             else if(e.target.innerHTML==='AC'){
            string='';
            h1.innerHTML=string;
           }
            else{
            string=string+e.target.innerHTML;
            h1.innerHTML=string;
            }
    })

});

