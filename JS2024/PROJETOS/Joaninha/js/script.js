

document.onkeydown = teclado;
let joaninhaTop = document.getElementById("aJoaninha").style.top;
let joaninhaBottom = document.getElementById("aJoaninha").style.bottom;
let joaninhaRight = document.getElementById("aJoaninha").style.right;

let macaco = document.getElementById("macaco").style.visibility;




let w = 445; /*top*/
let x = 20;





function teclado(tecla) {
    if (tecla.keyCode == 39) { /*direita*/
        x += 50;
        if(x >= 20 && x <= 8300) {
            /*JOANINHA - PASSOS PRA DIREITA */
            document.getElementById("aJoaninha").style.left = x + "px";
            document.getElementById("aJoaninha").style.transform = "rotateY(0deg) scale(0.4)";
            window.scrollBy(5, 0); // Atualiza o scroll, pra andar "junto" com a joaninha

            /* MISSAO 1
             Obter o valor atual da propriedade left*/
            let joaninhaLeft = window.getComputedStyle(document.getElementById("aJoaninha")).getPropertyValue('left'); /*Pegando valor atual da propriedade LEFT do css da joaninha */
            joaninhaLeft = parseFloat(joaninhaLeft); // Converter o valor para número para poder verificar no IF
            if (joaninhaLeft >= 1000 && joaninhaLeft <= 1420) { // Verificar se a posição está entre 1000px e 1420px, ou seja perto da GATA
                document.getElementById("gataMissao").style.visibility = "visible"; // Definir a visibilidade do paragrafo como "visible"
            } else {
                document.getElementById("gataMissao").style.visibility = "hidden"; // Ocultar o parágrafo caso não esteja perto da gata
            }

        }
        else if (x >= 8300) { /*NÃO DEIXAR ULTRAPASSAR O FINAL DO MAPA DO LADO DIREITO */
            document.getElementById("aJoaninha").style.left = (x -= 50) + "px";
            document.getElementById("aJoaninha").style.transform = "rotateY(0deg) scale(0.4)";
        }
    }





    else if (tecla.keyCode == 37) { /*esquerda*/
        x -= 50;
        if (x < 20) {
            document.getElementById("aJoaninha").style.left = (x += 50) + "px";
            document.getElementById("aJoaninha").style.transform = "rotateY(180deg) scale(0.4)";

        } else {
            document.getElementById("aJoaninha").style.left = x + "px";
            document.getElementById("aJoaninha").style.transform = "rotateY(180deg) scale(0.4)";
            window.scrollBy(-5, 0); // Atualiza o scroll
        }
    }





    else if (tecla.keyCode == 38) { //p/ cima
        w -= 50;
        if (w <= 415) {
            document.getElementById("aJoaninha").style.top = (w += 50) + "px";

        } else {
            document.getElementById("aJoaninha").style.top = w + "px";
            window.scrollBy(0, -5); // Atualiza o scroll
        }
    }







    else if (tecla.keyCode == 40) { /*pra baixo */
        w += 50;
        if (w >= 2600) {
            document.getElementById("aJoaninha").style.top = (w -= 50) + "px";


 /* MISSAO 2
             Obter o valor atual da propriedade left*/
           let joaninhaTop = window.getComputedStyle(document.getElementById("aJoaninha")).getPropertyValue('top'); /*Pegando valor atual da propriedade TOP do css da joaninha */
             joaninhaTop = parseFloat(joaninhaTop);
             if(joaninhaTop >= 2000){
                document.getElementById("caoMissao").style.visibility = "visible"; // Definir a visibilidade do paragrafo como "visible"
             } else {
                 document.getElementById("caoMissao").style.visibility = "hidden"; // Ocultar o parágrafo caso não esteja perto da gata
             }


        } else { /*passos */
            document.getElementById("aJoaninha").style.top = w + "px";
            window.scrollBy(0, 5); // Atualiza o scroll
        }
    }





}


function iniciaMissao(){
    document.getElementById("gataMissao").style.visibility = "hidden";
    document.getElementById("desafio1").style.visibility = "visible";
}


function verificarD1(){
    let charada1 = document.getElementById("charada1").value;

    if(charada1  == "Pipoca"){
        let desafio1Concluido = document.getElementById("desafio1").innerHTML = "PARABÉNS, VOCÊ CONCLUIU! PARA CONTINUAR A MISSÃO: ENCONTRE O CACHORRO MAX PELO MAPA.";
        if(desafio1Concluido === "PARABÉNS, VOCÊ CONCLUIU! PARA CONTINUAR A MISSÃO: ENCONTRE O CACHORRO MAX PELO MAPA."){
            document.getElementById("pUm").style.visibility = "hidden";                
        }

        document.getElementById("desafio1").style.height = 'auto';
        document.getElementById("desafio1").style.top = '360px';
        let cao = document.getElementById("cao").style.visibility = "visible";
    }
}


function iniciaMissao2(){
    document.getElementById("caoMissao").style.visibility = "hidden";
    document.getElementById("desafio2").style.visibility = "visible";
}


function verificarD2(){
    let charada2 = document.getElementById("charada2").value;
    if(charada2  == "teclado"){
        let desafio2Concluido = document.getElementById("desafio2").innerHTML = "PARABÉNS, VOCÊ CONCLUIU! PARA CONTINUAR A MISSÃO: ENCONTRE O MACACO JOE PELO MAPA.";
        if(desafio2Concluido === "PARABÉNS, VOCÊ CONCLUIU! PARA CONTINUAR A MISSÃO: ENCONTRE O MACACO JOE PELO MAPA."){
            document.getElementById("pDois").style.visibility = "hidden";     
            document.getElementById("btnIniciaM2").style.visibility = "hidden";
        }
        document.getElementById("desafio2").style.height = 'auto';
        document.getElementById("desafio2").style.top = '2490px';
        let cao = document.getElementById("macaco").style.visibility = "visible";
    }
}
















function iniciaMissao3(){
    document.getElementById("macacoMissao").style.visibility = "hidden";
    document.getElementById("desafio3").style.visibility = "visible";
}


function verificarD3(){
    let charada2 = document.getElementById("charada3").value;
    if(charada2  == "teclado"){
        let desafio2Concluido = document.getElementById("desafio2").innerHTML = "PARABÉNS, VOCÊ CONCLUIU! PARA CONTINUAR A MISSÃO: ENCONTRE O MACACO JOE PELO MAPA.";
        if(desafio2Concluido === "PARABÉNS, VOCÊ CONCLUIU! PARA CONTINUAR A MISSÃO: ENCONTRE O MACACO JOE PELO MAPA."){
            document.getElementById("pTres").style.visibility = "hidden";     
            document.getElementById("btnIniciaM3").style.visibility = "hidden";
        }
        document.getElementById("desafio3").style.height = 'auto';
        document.getElementById("desafio3").style.top = '2490px';
        let cao = document.getElementById("premio").style.visibility = "visible";
    }
}



// let promptExibido = false; // Variável de controle para verificar se o prompt já foi exibido

// function exibirPrompt1() {
//     if (!promptExibido) {
//         setTimeout(function() { // Adicionada uma função setTimeout para atrasar a exibição do prompt
//             let desafio1 = prompt("1 + 1 = ?");
//             if (desafio1 === "2") {
               
//                 document.getElementById("pUm").textContent = "PARABÉNS, VOCÊ CONCLUIU! PARA CONTINUAR A MISSÃO: ENCONTRE O CACHORRO MAX PELO MAPA.";
                
               
//                 promptExibido = true; // Atualiza a variável de controle para indicar que o prompt já foi exibido
//             }
//         }, 2000); // Exibe o prompt após 2 segundos
//     }
// }


// let promptExibido2 = false; // Variável de controle para verificar se o prompt já foi exibido

// function exibirPrompt2() {
//     if (!promptExibido2) {
//         setTimeout(function() { // Adicionada uma função setTimeout para atrasar a exibição do prompt
//             let desafio2 = prompt("2 + 2 = ?");
//             if (desafio2 === "4") {
//                 document.getElementById("pDois").textContent = "PARABÉNS, VOCÊ CONCLUIU! PARA CONTINUAR A MISSÃO: ENCONTRE O MACACO JOE PELO MAPA.";
//                 let cao = document.getElementById("macaco").style.visibility = "visible";
               
//                 promptExibido = true; // Atualiza a variável de controle para indicar que o prompt já foi exibido
//             }
//         }, 2000); // Exibe o prompt após 2 segundos
//     }
// }



/*ARRUMAR BUG DO PROMPT E AJUSTAR OS OUTROS PERSONAGENS E FALAS + PREMIO FINAL */




