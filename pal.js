const txt= document.querySelector(".inputDiv input");
btn= document.querySelector(".inputDiv button");
infoD= document.getElementById("message");
let ftxt;

btn.addEventListener("click",()=>{ 
     let revInput= ftxt.split("").reverse().join("");
  //   infoD.style.display="block"
     if(ftxt!= revInput){ 
       alert( txt.value +" Not a Palindrome");
          }
          else{
               alert( txt.value +" a Palindrome");
          }
});

txt.addEventListener("keyup",() =>{
      ftxt = txt.value.replace(/[^A-Z0-9]/ig,"");
     if(ftxt){
          return btn.classList.add("active");
     }
     infoD.style.display="none"
     btn.classList.remove("active");
      });