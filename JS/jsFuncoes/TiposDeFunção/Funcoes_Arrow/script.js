/*
ARROW FUNCTION - ES6
-é uma forma mais enxuta mais simplificada de escrita de funções anônimas.
-Não precisamos escrever "function" somente ()=>{} ou (parametros)=>{}

1-Se estivermos utilizando mais de um parametro, deve usar ():
    let vezes = (numero1, numero2)=>{
        return numero1*numero2
    }



2-Se estivermos utilizando somente um parametro, não precisamos utilizar ()
    let quadrado = numero =>{
        logica
    }



3-Se não estiver utilizando nenhum parametro é obrigatorio usar o (), pois se ñ dá erro de sintaxe:
    let quadrado = ()=>{
        logica
    }



4-Se só temos UMA LINHA DE INSTRUÇÃO (exemplo 1) sem nenhuma outra logica que faça alguma tratativa, podemos reduzir ainda mais. Podendo remover:
    - o () (CASO SEJA SOMENTE UM PARAMETRO)
    - as {} 
    - o termo "return" (isso se chama "return implicito")   
        ->Podemos utilizar o operador ternario, para reduzir para uma unica linha e aí podemos usar o returno implicito caso aja alguma verificação na logica.

    let quadrado = numero => numero*numero;

    let vezes = (num1,num2) => num1*num2 == 10 ? "É 10" : "Não é 10";




FUNÇÃO COMUM
var quadrado = function(numero){
    return numero*numero;
}

document.write(quadrado(2))
*/



// Arrow Function
let quadrado = numero => numero*numero;
document.write(quadrado(2) + "<br>")



/* Par ou impar - Função anonima comum
let parOuImpar = function(numero){
    if(numero % 2 === 0){
        return "Par"
    }else{
        return "Impar"
    }
}
document.write(parOuImpar(7))


VERSÃO ARROW FUNCTION (porém, sem retorno implicito, pois há + de 1 comando)
let parOuImpar = numero =>{
    if(numero % 2 === 0){
        return "Par"
    }else{
        return "Impar"
    }
}
document.write(parOuImpar(2))
*/

// VERSÃO ARROW FUNCTION (COM RETORNO IMPLICITO, feito com operador ternario)
let parOuImpar = numero => numero % 2 === 0 ? "Par <br>" : "Impar <br>";
document.write(parOuImpar(2));


let ehDoisOuNao = (num1, num2) =>  num1 + num2 == 2 ? "O resultado é 2 <br>" : "O resultado não é 2 <br>";
document.write(ehDoisOuNao(1, 1 ));
