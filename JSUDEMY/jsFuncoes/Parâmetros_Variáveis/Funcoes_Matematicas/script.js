/*
Podemos passar uma quantidade indefinida de parâmetros e a função consegue
lidar com essa quantidade indefinida p/ iniciar os nossos testes.

-Flexibilidade de parametros
->Mesmo depois da chamada da função nós podemos encaminhar mais ou menos parâmetros sem que a chamada da função gere um erro na
aplicação
    ->Na verdade o retorno pode ser algo inesperado, mas, não existe um erro, o script não quebra
      ao passar a mais ou a menos parâmetros (o JS tem essa flexibilidade).


ARGUMENTS
->Esse modo de recuperação é muito usado na versão ECMAScript 2009, na versão de 2015, há outra tecnica de 
parametros variaveis, chamada spread rest; 

->Palavra reservada = arguments

->Representa um objeto que é uma variável local disponível dentro da função.
    ->Ou seja, podemos recuperar os parâmetros encaminhados para aquela respectiva função atraves desse objeto, que é uma variavel local de escopo da função.

->É uma instrução que existe para todas as funções JavaScript que retorna para nós
algo muito parecido com um array 
 (não se trata de um array, então não podemos usar metodos como .pop, .shift etc...; 
 mas podemos converter esse objeto para um array, se necessario;
 podemos percorrer/recuperar essas posições do nosso objeto para trabalhar 
 com esses parâmetros variáveis) que contem a relação de parâmetros passados para a função;

-For in pode ser aplicado em array e em objetos (no caso do arguments)

*/



// É uma função void, ou seja, sem retorno, é vazia
function soma() {
    var resultado = 0;

    // For in = percorrendo cada uma das posições do objeto arguments e recuperando os valores em cada posição
    for (var i in arguments) {
        console.log("Recuperando o valor na posição " + [i] + ": ", arguments[i])

        // Se recuperamos os valores, podemos manipula-los, logo:
        resultado += arguments[i] //soma e atribui o valor contido em cada um dos itens do array c/ o valor anterior
    }
    return "Resultado da soma dos valores: " + resultado; //retorna o valor final de resultado, depois de sair do loop for
}
console.log(soma(7, 5, 3.2, 0.8, "Gabriel"))