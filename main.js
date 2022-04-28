// $(document).ready(function(){
//     $('.gallery button').on('click',function(){
//         $(this).parent().toggleClass('on');
//     });
// });
const gal = document.querySelector(".gallery");
const btn = gal.querySelector("button");

btn.addEventListener("click",()=>{
    
    gal.classList.toggle("on");

   
   
});