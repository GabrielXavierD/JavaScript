function btnClear() {
    document.querySelector(".resultado").value = ""; //limpando o input de ".resultado"
}

function btnBack() {
    let resultado = document.querySelector(".resultado").value;
    document.querySelector(".resultado").value = resultado.substring(0, resultado.length - 1);
    // apagando o ultimo digito = VARIAVEL.substring(0, VARIAVEL.length -1) ->Tamanho máximo -1;
}

function btnRaiz() {
    let inputResultado = document.querySelector(".resultado");
    return Math.sqrt(inputResultado);
}

function btnPorcentagem() {
    let inputResultado = document.querySelector(".resultado");
    inputResultado.value += "%";
}

function btnSete() {
    //pegando o input com class ".resultado" e atribuindo o valor pra ele
    let inputResultado = document.querySelector(".resultado");
    inputResultado.value += Number(7); //o += serve pra poder adiconar mais de um vez o valor no input resultado
}
function btnOito() {
    let inputResultado = document.querySelector(".resultado");
    inputResultado.value += Number(8);
}
function btnNove() {
    let inputResultado = document.querySelector(".resultado");
    inputResultado.value += Number(9);
}
function btnDividir() {
    let inputResultado = document.querySelector(".resultado");
    inputResultado.value += "/";
}
function btnQuatro() {

    let inputResultado = document.querySelector(".resultado");
    inputResultado.value += Number(4);
}
function btnCinco() {
    let inputResultado = document.querySelector(".resultado");
    inputResultado.value += Number(5);

}
function btnSeis() {
    let inputResultado = document.querySelector(".resultado");
    inputResultado.value += Number(6);

}
function btnMultiplicacao() {
    let inputResultado = document.querySelector(".resultado");
    inputResultado.value += "*";
}
function btnUm() {
    let inputResultado = document.querySelector(".resultado");
    inputResultado.value += Number(1);
}
function btnDois() {
    let inputResultado = document.querySelector(".resultado");
    inputResultado.value += Number(2);
}
function btnTres() {

    let inputResultado = document.querySelector(".resultado");
    inputResultado.value += Number(3);
}
function btnMenos() {
    let inputResultado = document.querySelector(".resultado");
    inputResultado.value += "-";
}
function btnZero() {
    let inputResultado = document.querySelector(".resultado");
    inputResultado.value += Number(0);
}
function btnPonto() {
    let inputResultado = document.querySelector(".resultado");
    inputResultado.value += ".";
}

function btnMais() {
    let inputResultado = document.querySelector(".resultado");
    inputResultado.value += "+";
}

function limpaCampo() {
    document.querySelector(".resultado").value = '';
}

function btnIgual() {
    let inputResultado = document.querySelector(".resultado").value;
    if (inputResultado) { //se tiver alguma coisa dentro / não nulo faça:
        document.querySelector(".resultado").value = eval(inputResultado);
        //a operação eval() serve para computar todas as operações presentes
    }
    else {
        document.querySelector(".resultado").value = "Nada para calcular!";
        setInterval(function () {
                    limpaCampo();
        }, 1200);
  /*intervalo-> é uuma função -> colocando a função -> tempo
Ou seja, campo será limpado depois de 1.2s com a função limpaCampo()*/
    }    
}