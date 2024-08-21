/*
Objetos literais são Objetos únicos

o objeto literal é um objeto único e mesmo quando armazena esse mesmo objeto em diferentes variáveis Todas essas variáveis apontariam o mesmo objeto que estão na prática.


Imagine que dentro da nossa aplicação seja criado um objeto literal e esse objeto seja associado à variável
pessoa

no código for criado uma outra variável por exemplo a variável x é a variável pessoa for associada com um valor à variável x o que nós teremos aqui na verdade não é uma cópia do objeto anteriormente associado à variável pessoa e sim uma cópia da referência para o mesmo objeto literal.

De tal modo que se ao acessar esse objeto através da variável pessoa ou da variável x nós vamos atuar
sobre o mesmo objeto e aí conforme informou se criando objetos literais dentro da nossa aplicação essa
condição continua.



Ex.: let pessoa = { nome, (...)}
     let x = pessoa

*/

let assinatura = {
    idCliente: 1000,
    descricao: "Acesso a internet",
    status(){console.log("Ativo") }
}

console.log(assinatura.descricao)

let y = assinatura
console.log(y.descricao);
/* Não estamos recuperando esse valor e duplicando esse valor (no caso, o objeto literal "assinatura") para a variável y. Na verdade por ser um objeto literal, o que está acontecendo na prática é que a referência contida dentro da variável de assinatura (conteudo dentro de {...} ) que aponta para o nosso objeto literal está sendo associada à variável Y.

    ->Então a variável y ela não recebe como objeto literal mas sim uma referência de acesso a esse objeto
    de tal modo que a partir de agora nós temos apenas um único objeto dentro da nossa aplicação que está
sendo referenciado por variáveis diferentes.


Isso significa que eu posso acessar esse mesmo objeto literal ou através da variável assinatura ou através
da variável y 


Apesar de serem variáveis diferentes elas guardam a diferença para um mesmo objeto.
Então a expectativa é que essa informação seja recuperada tanto a partir de assinatura.descricao quanto de y.descricao.

Todo objeto literal é um objeto único dentro da aplicação.
E quando esse objeto ele é atribuída a outras variáveis o que nós estamos fazendo não é atribuição do
objeto propriamente dito e sim a atribuição da referencia fazendo com que variáveis diferentes apontem
para o mesmo lugar.


    */

y.descricao = "Internet + Tv + Telefone"
console.log(assinatura.descricao); 
console.log(y.descricao);



