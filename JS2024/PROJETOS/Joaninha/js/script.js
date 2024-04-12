

document.onkeydown = teclado;
let joaninhaTop = document.getElementById("aJoaninha").style.top;
let joaninhaBottom = document.getElementById("aJoaninha").style.bottom;
let joaninhaRight = document.getElementById("aJoaninha").style.right;

let w = 445; /*top*/
let x = 20;





function teclado(tecla) {
    if (tecla.keyCode == 39) { /*direita*/
        x += 50;
        if(x>= 20 && x<=8300){
            document.getElementById("aJoaninha").style.left = x + "px";
            document.getElementById("aJoaninha").style.transform = "rotateY(0deg) scale(0.4)";
            window.scrollBy(5, 0); // Atualiza o scroll


           
        // Obter o valor atual da propriedade left
        var joaninhaLeft = window.getComputedStyle(document.getElementById("aJoaninha")).getPropertyValue('left');
       
        joaninhaLeft = parseFloat(joaninhaLeft); // Converter o valor para número pra poder verificar no IF

        // Verificar se a posição está entre 1000px e 1420px
        if (joaninhaLeft >= 1000 && joaninhaLeft <= 1420) {
            document.getElementById("pUm").style.visibility = "visible"; // Definir a visibilidade como "visible"
          
          
          setTimeout(function() {
    let desafio1 = prompt("1+1");
    if (desafio1 === "2") { // Note que aqui é uma string, pois o prompt retorna uma string
        document.getElementById("pUm").textContent = "PARABÉNS, VOCÊ CONCLUIU!";
        desafio1.desabled;
    }
}, 2000); // 2000 milissegundos = 2 segundos


        } else {
            document.getElementById("pUm").style.visibility = "hidden"; // Ocultar o parágrafo caso contrário
        }
            
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



