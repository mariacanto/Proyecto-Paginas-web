let nave=document.querySelector('.nave');
let body=document.querySelector('body');
let laser=document.getElementById('laser');
let live=document.querySelector("i");
let times= document.getElementById("times");
let lives=5;
let second=60;
setInterval(() => {
    second--;
    times.textContent=second;
},1000)
document.addEventListener('mousemove',(e)=> {
    nave.style.left=(e.clientX-40)+'px';
});
//generar disparo
document.addEventListener('click' ,()=>{
    let bala=document.createElement('div');
    bala.classList.add('bala');
    bala.style.bottom=70+"px";
    bala.style.left=(nave.getBoundingClientRect().left+40)+'px';
    body.append(bala);
    laser.play();
});
//mov. de disparo
setInterval(()=>{;
    let balas=document.querySelectorAll(".bala")
    balas.forEach(bala => {
        bala.style.top=(bala.getBoundingClientRect().top-20)+"px";
        
        if (bala.getBoundingClientRect().top<=0){
            bala.remove();
        }

    });
},100);  

//generar meteoritos
let aparecer=0;
setInterval(()=>{
    aparecer++;
    if(aparecer%10==0){
    let enemigo=document.createElement("div");
    enemigo.classList.add("enemigo");
    body.append(enemigo);
    enemigo.style.left=(Math.random()*window.innerWidth-100)
    +"px";
    }
    let enemigos=document.querySelectorAll(".enemigo");
    enemigos.forEach(element=> {
        element.style.top=(element.getBoundingClientRect().top
        +10)+"px";
        if (element.getBoundingClientRect().top>nave.
        getBoundingClientRect().top){
            lives--;
            live.textContent=lives;
            element.remove();
        }
    });
},100);

    
