let nave=document.querySelector('.nave');
let body=document.querySelector('body');
let laser=document.getElementById('laser');
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
   
    
