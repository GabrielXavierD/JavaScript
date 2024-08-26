/*
Operador Rest e Spread
-o operador em si é constituído por "..." (três pontos) o que define ser Rest OU Spread é o contexto onde ele está sendo utilizado.
    SPREAD = quando ele está sendo utilizado para espalhar estruturas de dados
    REST = quando estamos juntando estruturas de dados 

Contexto SPREAD 
-Serve para ESPALHAR DADOS;
    Exemplo aplicado a uma (variavel) STRING:
     -ESPALHAR CADA UM DOS SEUS CARACTERES
        ->Cada caracter da STRING é impresso de forma individual e separada por virgula. Ou seja, ele ESPALHOU a STRING.

-Podemos recuperar essa informação da nossa string e incluir dentro de um ARRAY;

-O SPREAD tambem pode ser utilizado para ARRAYS -> Espalhar ARRAYS dentro de ARRAYS;
    Dentro de "listaCursosCompleto" podemos ESPALHAR o conteudo dos outros 2 ARRAYS dentro dele:
        ->Basta recuperar a variavel que contém aquela estrutura de dados e utilizar o operador SPREAD (...) seguido da variavel com o ARRAY.
        ->Ele vai espalhar cada item contido nesse ARRAY dessa variavel, ou seja, cada item, separado por virgula, será colocado lá.
       
        EX.: (Array 1) ARROZ, FEIJAO 
        -> Não fica: A, R, R, O, Z, F, E, I, J, A, O 
        -> Essa separação de caracteres só ocorre caso estivermos operando em uma STRING

    ->Mas sim: (Array 2) Carne, Batata, Arroz, Feijao

-Quando utilizamos o SPREAD em ARRAYS os indices são rearranjados de modo a manter a consistência de incremento;

-Podemos posicionar/espalhar os ARRAYS em qualquer local (começo, meio/entre os valores, fim etc...);

-Podemos usar SPREAD no contexto de OBJETOS
    ->Podemos pegar todos os atributos de um outro objeto e passar para outro
        ->OBS.: NÃO ESTÁ HERDANDO ATRIBUTOS -> É COMO SE COPIASSE E COLASSE OS ATRIBUTOS DE UM NO OUTRO, POREM DE UMA FORMA MAIS ENXUTA.
*/

let texto = "MEU NOME É GABRIEL"
console.log(texto);
console.log(...texto); //COM SPREAD ...
console.log([...texto]); //ESPALHANDO A STRING DENTRO DE UM ARRAY, POR MEIO DO SPREAD ...


let listaCursos = ["NodeJs e MongoDb", "ES6, TypeScript e Angular 4"];
let listaCursos2 = ["Multiplataforma Android/IOS", "Introdução ao GNU/Linux"];

let listaCursosCompleto = [ ...listaCursos, "Web Completo", "Android Completo",...listaCursos2]
console.log(listaCursosCompleto);


let pessoa = { nome: "João", idade: 27}
let clone = { endereco: "Rua abc", ...pessoa}
console.log('clone: ', clone);