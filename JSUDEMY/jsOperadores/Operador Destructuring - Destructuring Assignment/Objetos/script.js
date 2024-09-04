/*
ES6 Destructuring Assignment

Operador Destructuring
-É um operador de desestruturação: ele tira valores de dentro de uma estrutura (array ou objeto)
-O token do DESTRUCTURING é [] (igual do ARRAY porem, é colocado logo depois do operador que irá declarar a variavel)
    ->Depois indicamos de qual ARRAY iremos extrair informações



COMO UTILIZAR O DESTRUCTURING NO CONTEXTO DE OBJETOS
-No caso abaixo, há um objeto literal com outro objeto literal sendo atribuido a um atributo do objeto literal "produto"

   (
    EXPLICAÇÃO - COMPOSIÇÃO: Quando nós criamos objetos a partir de objetos literais, funções com estruturas ou classes, nós temos uma composição "é um", esse objeto "é alguma coisa" (são os objetos "normais", os comuns, sem atribuição de outro objeto a um atributo)
    
    Quando existe uma relação de atribuição de um objeto como sendo o valor de algum atributo de outro objeto, nós temos a composição "tem um"

        ->No caso, "produto" é do tipo de composição "tem um". Logo, "protudo" "tem um" "detalhes" (que é um outro objeto com seus respectivos atributos)
    )

-Por exemplo, para extrair "descricao" e "preco" do objeto "produto":
    -Usamos o operador (let/const) de declaração das variaveis que queremos criar 
    -Usamos o token "{}" (chaves) 
    -Depois passamos quais atributos queremos extrair as informações desse OBJETO LITERAL 
    -Depois indicamos de qual objeto queremos fazer essa desestruturação/extração das informações


-Agora digamos que por algum motivo eu queira retirar esses valores de dentro do meu objeto mas não necessariamente Eu quero utilizar a mesma discrição que o objeto possui para esses valores. Digamos que eu quero utilizar aqui d" e p. Ou seja queira criar essas variáveis "d" e "p" dentro do meu código ao invés de "descrição" e "preco"

    ->Podemos alterar o nome da variável utilizando o operador ":" (dois pontos) passando qualquer um nome que nós queremos assumir dentro do nosso script como sendo a variável que vai conter com o valor que está sendo extraido do objeto

    ->Basicamente estamos desestruturando "descricao" e "preco" de dentro de "produto" e atribuindo a "descricao" à variável "d" e "preco" a "p"
        ->Logo, "descricao" e "preco" não serão criadas como variáveis dentro do nosso script, mas sim "d" e "p"


Se por ventura eu tentasse extrair um atributo que não existe dentro do objeto, retorna "undefined", logo podemos utilizar/atribuir um valor DEFAULT pra ele (igual na versão com ARRAY) 
    ->Caso o valor retornado seja "undefined" será utilizado o valor de DEFAULT
    ->Caso atribuimos um valor DEFAULT para um atributo que já existe no objeto ele será ignorado (igual na versão de ARRAY)


-Extração de de atributos de objetos pertencentes a outros objetos (no caso, "detalhes", ex.: tentar extrair "fabricante" e "modelo").
    ->Fazemos a mesma coisa, porem, utilizamos ":" para indicar que queremos atuar sobre os atributos do objeto contido no atributo "detalhes" do objeto "produto".
    -Depois passamos os atributos "fabricante" e "modelo" - aí podemos utilizar essas variáveis dentro do nosso código 


    mesmo na extração de objetos pertencentes a atributos do nosso objeto principal nós podemos tranquilamente utilizar a renomeação do nome da variável que nós queremos criar.
    ->Extraindo "fabricantes" do objeto, porem, atribuindo a variavel "f" e o mesmo com "modelo" que foi atribuido em "m"

    ->Podemos atribuir um parametro DEFAULT utilizando "=", ex.: caso "modelo" seja "undefined" ou não existir, podemos atribuir um valor a ele que será utilizado nesses casos
*/

let produto = {
    descricao: "Notebook",
    preco: 1800,
    detalhes: {
        fabricante: "abc",
        modelo: undefined
    }
}

let { descricao, preco } = produto
console.log(descricao, preco);


// Preco 5000 ignorado, pois não retorna "undefined"; desconto retorna "undefined", logo, utiliza "5"
let { descricao: d, preco: p = 5000, desconto = 5 } = produto
console.log(d, p, desconto);


/*Extrando informações
let {detalhes:{fabricante, modelo}} = produto
console.log(fabricante, modelo);
*/


// Renomeando
let { detalhes: { fabricante: f, modelo = "não informado" } } = produto
console.log(f, modelo);