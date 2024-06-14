/* Os dados recebidos de prompt são sempre STRINGS, mas ao passar eles pela chamada da função,
o JS é inteligente e consegue reconhecer que são numeros que realizarão uma conta dentro da função
-> mas tambem pode ser feito o casting/converter esses valores p/ parseInt ou parseFloat - dessa
forma, evita bugs futuros */

let largura = prompt("Digite a largura:");
let comprimento = prompt("Digite o comprimento:")

let area = calcularAreaTerreno(largura, comprimento)           
/* -> passando as variaveis criadas - que receberam os dados do user - p/ função, 
no caso, tem o msm nome dos parametros ali da função logo abaixo  */

function calcularAreaTerreno(largura, comprimento){
    let area = largura*comprimento;

    // document.write("O terreno possui " + area + " metros quadrados") -> dando retorno com document.write; não é uma boa prática.
    return area;
}

document.write("O terreno possui " + area + " metros quadrados");






/*
CHAMANDO A FUNÇÃO DE FORMA DIRETA E JÁ PASSANDO VALORES SEM SOLICITAR AO USUARIO:
calcularAreaTerreno(15,25)

 
Logo abaixo, o script que faz a chamada da função ( calcularAreaTerreno(15,25) ) é responsavel 
pela formatação da saida do calculo p/ usuario 

document.write("O terreno possui " + calcularAreaTerreno(15,25) + " metros quadrados");


ASSOCIANDO A CHAMADA DA FUNÇÃO A UMA VARIAVEL P/ FICAR MAIS LEGIVEL/ORGANIZADO NA SAÍDA P/ USER:
let area = calcularAreaTerreno(15,25)
document.write("O terreno possui " + area + " metros quadrados");

*/



