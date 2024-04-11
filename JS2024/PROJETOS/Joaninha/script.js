document.onkeydown = teclado;

let w = 445; /*top*/
let x = 20;

function teclado(tecla) {
    if (tecla.keyCode == 39) { /*direita*/
        x += 50;
        if(x>= 20 && x<=8300){
            document.getElementById("aJoaninha").style.left = x + "px";
            document.getElementById("aJoaninha").style.transform = "rotateY(0deg) scale(0.4)";
            window.scrollBy(5, 0); // Atualiza o scroll
        }
        else if (x>=8300){
            document.getElementById("aJoaninha").style.left = (x -= 50)+"px";
            document.getElementById("aJoaninha").style.transform = "rotateY(0deg) scale(0.4)";
        }
        
    }
    else if (tecla.keyCode == 37) { /*esquerda*/
        x -= 50;
        if(x<20){
            document.getElementById("aJoaninha").style.left = (x+=50)+"px";
            document.getElementById("aJoaninha").style.transform = "rotateY(180deg) scale(0.4)";
            
        }else{
            document.getElementById("aJoaninha").style.left = x + "px";
            document.getElementById("aJoaninha").style.transform = "rotateY(180deg) scale(0.4)";
            window.scrollBy(-5, 0); // Atualiza o scroll
        }

    }
    else if (tecla.keyCode == 38) { //cada tecla tem um código, 38 = p/ cima
        w -= 50;
        if (w <= 415) {
            document.getElementById("aJoaninha").style.top = (w += 50)+"px";
             
        } else {
            document.getElementById("aJoaninha").style.top = w + "px";   
            window.scrollBy(0, -5); // Atualiza o scroll
        }
    }
    else if (tecla.keyCode == 40) { /*pra baixo */
        w += 50;
        if (w >= 2600) {
            document.getElementById("aJoaninha").style.top = (w -= 50)+"px";
             
        } else {
            document.getElementById("aJoaninha").style.top = w + "px";   
            window.scrollBy(0, 5); // Atualiza o scroll
        }
    }
}
