/*ES6 Destructuring Assignment

Destructuring é um recurso do ES6 que permite extrair valores de Arrays e Objetos e armazená-los em variáveis, facilitando a manipulação de dados, especialmente dentro de funções.

1. Desestruturação de Arrays:
    - Podemos passar os elementos de um Array diretamente como argumentos para uma função.
    - Utilizando Destructuring, podemos capturar os valores dos índices desejados do Array.
    - Para isso, utilizamos colchetes [] na assinatura da função, definindo as variáveis que receberão os valores do Array na ordem dos índices (0, 1, 2...).
    - Podemos pular valores, definir valores padrão (default) para variáveis caso o valor do Array seja `undefined` ou inexistente.
        ->No exemplo abaixo, `d` recebe o valor `100` caso não seja fornecido no Array.

*/

let listaNumeros = [10, 20, 30, 40];

// Forma tradicional (sem Destructuring)
function teste0(a, b) {
    console.log("(ARRAY) SEM DESTRUCTURING: ", a, b);
}
teste0(listaNumeros[0], listaNumeros[1]);


// Com Destructuring
function teste([a, b, , c, d = 100]) {
    console.log("(ARRAY) COM DESTRUCTURING: ", a, b, c, d);
}
teste(listaNumeros);




/*
2. Desestruturação de Objetos:
    - Similar aos Arrays, podemos desestruturar Objetos, passando o objeto inteiro como argumento para a função.
    - Na assinatura da função, utilizamos chaves {} para capturar os atributos desejados do Objeto.
    - Podemos renomear os atributos ao desestruturar, atribuindo-os a variáveis com outros nomes.
    - Diferente dos Arrays, a desestruturação de Objetos não segue uma sequência; os atributos são extraídos diretamente pelo nome 
        ->Ou seja, ao passar como parâmetros na função "a, b, c, d", os valores correspondentes do objeto seriam "10, 20, 30, 40", respectivamente. No entanto, podemos renomear esses parâmetros conforme necessário.

        ->No caso dos Objetos, como OS ATRIBUTOS SÃO EXTRAÍDOS DIRETAMENTE PELO NOME, eles não seguem uma ordem específica (de atribuição de valores nas variaveis) como ocorre com Arrays. Podemos definir os parâmetros na função em qualquer ordem, como "a, b, c, d" ou "b, a, d, c", e cada um deles retornará o valor correspondente ao atributo no Objeto (pois são os nomes dos atributos), apenas alterando a ordem em que os valores serão exibidos (por exemplo, no console.log()).

    - Podemos definir valores padrão para atributos que não existem no Objeto, como no caso do atributo `z` no exemplo abaixo, que receberá o valor `10` caso não esteja presente no Objeto.
*/


let obj = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
};

// Forma tradicional (sem Destructuring)
function teste1(a, b) {
    console.log("(OBJETO) SEM DESTRUCTURING: ", a, b);
}
teste1(obj.a, obj.b);



// Com Destructuring
function teste3({b, a: atributo1, d, c, z = 10}) {
    console.log("(OBJETO) COM DESTRUCTURING: ", b, atributo1, d, c, z);
}
teste3(obj);

