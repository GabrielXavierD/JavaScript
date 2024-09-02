/*
ES6 Destructuring Assignment

Operador Destructuring
-É um operador de desestruturação: ele tira valores de dentro de uma estrutura (array ou objeto)
-O token do DESTRUCTURING é [] (igual do ARRAY porem, é colocado logo depois do operador que irá declarar a variavel)
    ->Depois indicamos de qual ARRAY iremos extrair informações



COMO UTILIZAR NO CONTEXTO DE ARRAYS
-Atribuimos um valor do array a uma variavel

-Podemos indicar quais são os valores que eu quero desestruturar, ou seja, extrair de dentro do ARRAY e trazer para
dentro do nosso script em formato de variável, atribuindo a informação a uma variável.
    ->Trouxe a informação do índice zero, indicando que esse valor será atribuído na variável "a" e "b".
    ->No momento da desestruturação nós estamos declarando também  variáveis novas que podem ser utilizadas no escopo da aplicação (as que estão dentro do []).
        ->Então o valor contido no índice zero de "frutas" será atribuído pela variável "a" e o indice um atribuído em "b".

-Os valores dos indices do ARRAY são atribuidos nas variaveis da desestruturação na ordem que está no array (0,1,2...) porém, caso seja necessario pular um indice, tipo, em vez de "Abacaxi", "Uva" (ordem no Array) podemos pegar "Abacaxi", "Pera"
    ->Podemos passar uma instrução/variavel vazia na desestruturação: "," e depois declarar outra variavel:  "c"

-Podemos atribuir valores padrões no momento da desestruturação do Array
    ->"[a,b,c,d]" -> os valores de "a" até "d" existem no array, que são 0,1,2,3 
        -> porém "e" não existe no ARRAY e ele recebe "undefined" por padrão, então podemos atribuir um valor DEFAULT (para caso o retorno seja undefined) pra ele logo na declaração
    
    ->Caso seja atribuido um valor DEFAULT pra uma variavel que exista valor dentro array (ou seja, que o JS consegue desestruturar), esse valor será desconsiderado

-Podemos extrair valores de ARRAYS multi dimensionais.
    ->Vamos extrair o nome "Maria", no nosso ARRAY BIDIMENSIONAL 
        ->Pulamos o primeiro indice do array com "," (pois o indice 0, é uma lista de frutas e o indice 1 são os nomes)
        ->Como queremos um valor contido dentro do array do indice 1, usamos mais um "[]" (caso colocassemos só uma variavel,ele iria retornar o array do indice 1)
            ->Como queremos o nome "Maria", ela está no indice 1 desse Array, então pulamos o indice 0 com "," e colocamos uma variavel para ser atribuido o nome "Maria"
*/

let frutas = ["Abacaxi", "Uva", "Pera", "Mamão"]

/* essa sintaxe fica meio verbosa, então, podemos utilizar o recurso de DESESTRUTURAÇÃO
let a = frutas[0]
let b = frutas[1]
let c = frutas[2]
console.log(a, b, c);
*/

let [posicao0, posicao1, , posicao3] = frutas //pulando posições
console.log(posicao0, posicao1, posicao3);

let [a, b, c, d = "Valor Desconsiderado", e = "Banana"] = frutas
console.log( a, b, c, d, e);


let coisas = [["Abacaxi", "Uva", "Pera", "Mamão"], ["José", "Maria"]]
let [, [, nome2] ] = coisas
console.log(nome2);

let [ [, , fruta3] ] = coisas
console.log(fruta3);





