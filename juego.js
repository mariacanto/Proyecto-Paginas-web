let nave=document.querySelector(".nave");
let body=document.querySelector("body");
document.addEventListener("mousemove",(e)=>{
    nave.stylejuego.left=e.clientX+"px";
})
//generar disparo
document.addEventListener("click" ,()=>{
    let bala=document.createElement("div");
    bala.classList.add("bala");
    bala.stylejuego.bottom=70+"px";
    bala.stylejuego.left=(nave.getBoundingClientRect().left+40)
    body.append(bala);

})
