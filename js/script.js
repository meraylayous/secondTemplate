let arrow = document.querySelector(".arrow");
let nav =document.querySelector(".navbar")
arrow.addEventListener('click' ,() =>{
    
 nav.classList.toggle("show1")
});


let menu = document.querySelector(".menu");

menu.onclick = function(){
   let  nav = document.querySelector(".navbar");
    nav.classList.toggle("active");
}

let header =document.querySelector(".header1");

window.addEventListener('scroll' , () => {

console.log(window.scrollY);
if(window.scrollY >= 50){
    header.classList.add('active1')
}
else{
    header.classList.remove('active1')
}
})

const toTop = document.querySelector(".to-top")

window.addEventListener("scroll" , () => {
    if(window.scrollY > 100){
        toTop.classList.add("active")
    }
    else{
        toTop.classList.remove("active")
    }
})