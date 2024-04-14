document.onkeydown = teclado; /*pegando as teclas pressionadas no html e atribuindo a teclado */
let joaninhaTop = document.getElementById("aJoaninha").style.top;
let joaninhaBottom = document.getElementById("aJoaninha").style.bottom;
let joaninhaRight = document.getElementById("aJoaninha").style.right;
let joaninhaLeft = document.getElementById("aJoaninha").style.left;
let macaco = document.getElementById("macaco").style.visibility;

/*Posição inicial da joaninha no mapa */
let w = 445; /*top*/
let x = 20; /*left */





function teclado(tecla) {
    if (tecla.keyCode == 39) { /*direita*/
        x += 50;
        if (x >= 20 && x <= 8300) {
            /*JOANINHA - PASSOS PRA DIREITA */
            document.getElementById("aJoaninha").style.left = x + "px";
            document.getElementById("aJoaninha").style.transform = "rotateY(0deg) scale(0.4)";
            window.scrollBy(5, 0); // Atualiza o scroll, pra andar "junto" com a joaninha
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
        } else { /*passos */
            document.getElementById("aJoaninha").style.top = w + "px";
            window.scrollBy(0, 5); // Atualiza o scroll
        }
    }


    /* MISSAO 1
       Obter o valor atual da propriedade left*/
    let joaninhaLeft = window.getComputedStyle(document.getElementById("aJoaninha")).getPropertyValue('left'); /*Pegando valor atual da propriedade LEFT do css da joaninha */
    joaninhaLeft = parseFloat(joaninhaLeft); // Converter o valor para número para poder verificar no IF
    if (joaninhaLeft >= 1000 && joaninhaLeft <= 1420) { // Verificar se a posição está entre 1000px e 1420px, ou seja perto da GATA
        document.getElementById("gataMissao").style.visibility = "visible"; // Definir a visibilidade do paragrafo como "visible"
    } else {
        document.getElementById("gataMissao").style.visibility = "hidden"; // Ocultar o parágrafo caso não esteja perto da gata
    }

    /* MISSAO 2
        Obter o valor atual da propriedade left*/
    let joaninhaTop = window.getComputedStyle(document.getElementById("aJoaninha")).getPropertyValue('top'); /*Pegando valor atual da propriedade TOP do css da joaninha */
    joaninhaTop = parseFloat(joaninhaTop);
    let joaninhaLeft4 = window.getComputedStyle(document.getElementById("aJoaninha")).getPropertyValue('left'); /*Pegando valor atual da propriedade LEFT do css da joaninha */
    joaninhaLeft4 = parseFloat(joaninhaLeft4);


    if (joaninhaTop >= 2100 && joaninhaLeft4 <= 400) {
        document.getElementById("caoMissao").style.visibility = "visible"; // Definir a visibilidade do paragrafo como "visible"

    } else {
        document.getElementById("caoMissao").style.visibility = "hidden"; // Ocultar o parágrafo caso não esteja perto da gata
    }

    /* MISSAO 3*/
    let joaninhaLeft2 = parseFloat(window.getComputedStyle(document.getElementById("aJoaninha")).getPropertyValue('left'));
    let joaninhaTop2 = window.getComputedStyle(document.getElementById("aJoaninha")).getPropertyValue('top'); /*Pegando valor atual da propriedade TOP do css da joaninha */
    joaninhaTop2 = parseFloat(joaninhaTop2);
    if (joaninhaTop2 >= 1600 && joaninhaTop2 <= 2000 && joaninhaLeft2 >= 4650 && joaninhaLeft2 <= 5320) {
        document.getElementById("macacoMissao").style.visibility = "visible"; // Definir a visibilidade do paragrafo como "visible"
    } else {
        document.getElementById("macacoMissao").style.visibility = "hidden"; // Ocultar o parágrafo caso não esteja perto da gata
    }
    /* MISSAO 4*/
    let joaninhaLeft3 = parseFloat(window.getComputedStyle(document.getElementById("aJoaninha")).getPropertyValue('left'));
    let joaninhaTop3 = window.getComputedStyle(document.getElementById("aJoaninha")).getPropertyValue('top'); /*Pegando valor atual da propriedade TOP do css da joaninha */
    joaninhaTop3 = parseFloat(joaninhaTop3);
    if (joaninhaTop3 >= 420 && joaninhaTop3 <= 800 && joaninhaLeft3 >= 7700 && joaninhaLeft3 <= 8040) {
        document.getElementById("desafioFinal").style.visibility = "visible"; // Definir a visibilidade do paragrafo como "visible"
    } else {
        document.getElementById("desafioFinal").style.visibility = "hidden"; // Ocultar o parágrafo caso não esteja perto da gata
    }

}







function iniciaMissao() {
    document.getElementById("gataMissao").style.visibility = "hidden";
    document.getElementById("desafio1").style.visibility = "visible";
}


function verificarD1() {
    let charada1 = document.getElementById("charada1").value;
    if (charada1 == "Pipoca" || charada1 == "pipoca" || charada1 == "milho" || charada1 == "Milho" || charada1 == "milho de pipoca" || charada1 == "Milho de pipoca") {
        let desafio1Concluido = document.getElementById("desafio1").innerHTML = "PARABÉNS, VOCÊ CONCLUIU! PARA CONTINUAR A MISSÃO: ENCONTRE O CACHORRO MAX PELO MAPA.";
        if (desafio1Concluido === "PARABÉNS, VOCÊ CONCLUIU! PARA CONTINUAR A MISSÃO: ENCONTRE O CACHORRO MAX PELO MAPA.") {
            document.getElementById("pUm").style.visibility = "hidden";
        }
        document.getElementById("desafio1").style.height = 'auto';
        document.getElementById("desafio1").style.top = '360px';
        let cao = document.getElementById("cao").style.visibility = "visible";
    } else {
        document.getElementById("charada1").value = "Resposta errada!";
    }
}


function iniciaMissao2() {
    document.getElementById("caoMissao").style.visibility = "hidden";
    document.getElementById("pDois").style.visibility = "hidden";
    document.getElementById("btnIniciaM2").style.visibility = "hidden";
    document.getElementById("desafio2").style.visibility = "visible";
}


function verificarD2() {
    let charada2 = document.getElementById("charada2").value;
    if (charada2 == "Teclado" || charada2 == "teclado" || charada2 == "Um teclado" || charad2 == "um teclado") {
        let desafio2Concluido = document.getElementById("desafio2").innerHTML = "PARABÉNS, VOCÊ CONCLUIU! PARA CONTINUAR A MISSÃO: ENCONTRE O MACACO JOE PELO MAPA.";
        if (desafio2Concluido === "PARABÉNS, VOCÊ CONCLUIU! PARA CONTINUAR A MISSÃO: ENCONTRE O MACACO JOE PELO MAPA.") {
            document.getElementById("pDois").style.visibility = "hidden";
            document.getElementById("btnIniciaM2").style.visibility = "hidden";
        }
        document.getElementById("desafio2").style.height = 'auto';
        document.getElementById("desafio2").style.top = '2490px';
        let cao = document.getElementById("macaco").style.visibility = "visible";
    } else {
        document.getElementById("charada2").value = "Resposta errada!";
    }
}

function iniciaMissao3() {
    document.getElementById("macacoMissao").style.visibility = "hidden";
    document.getElementById("pTres").style.visibility = "hidden";
    document.getElementById("btnIniciaM3").style.visibility = "hidden";
    document.getElementById("desafio3").style.visibility = "visible";

}


function verificarD3() {
    let charada3 = document.getElementById("charada3").value;
    if (charada3 === "a letra m" || charada3 === "m" || charada3 === "letra m" || charada3 === "M") {
        let desafio3Concluido = document.getElementById("desafio3").innerHTML = "PARABÉNS, VOCÊ CONCLUIU A MISSÃO FINAL! ENCONTRE O TESOURO JOE PELO MAPA.";
        if (desafio3Concluido === "PARABÉNS, VOCÊ CONCLUIU A MISSÃO FINAL! ENCONTRE O TESOURO JOE PELO MAPA.") {
            document.getElementById("pTres").style.visibility = "hidden";
            document.getElementById("btnIniciaM3").style.visibility = "hidden";
        }
        document.getElementById("desafio3").style.height = 'auto';
        document.getElementById("desafio3").style.top = '1720px'; // Ajuste da posição da missão
        document.getElementById("premio").style.visibility = "visible";
    } else {
        document.getElementById("charada3").value = "Resposta errada!";
    }
}



function verificarFinal() {
    location.reload(); /*recarregando a pagina */
    window.scrollTo(0, 0);  /*X, Y - voltando scroll pra posição inicial */
}


const meuAudio = document.getElementById('meuAudio');
meuAudio.addEventListener('ended', function () {
    this.currentTime = 0;
    this.play();
}, false);









// Função para lidar com o evento de pressionar uma tecla em um campo de entrada
function handleInputKeyPress(event) {
    // Verifica se a tecla pressionada é Enter (código 13)
    if (event.keyCode === 13) {
        event.preventDefault(); // Impede o comportamento padrão da tecla pressionada
    }
}

// Obtém os elementos dos campos de entrada
var charada1Input = document.getElementById("charada1");
var charada2Input = document.getElementById("charada2");
var charada3Input = document.getElementById("charada3");

// Adiciona um ouvinte de eventos para o evento de pressionar uma tecla em cada campo de entrada
charada1Input.addEventListener("keydown", handleInputKeyPress);
charada2Input.addEventListener("keydown", handleInputKeyPress);
charada3Input.addEventListener("keydown", handleInputKeyPress);

// Obtém o formulário
var form = document.getElementById("form");

// Adiciona um ouvinte de eventos para o evento de envio do formulário
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede a submissão padrão do formulário
});