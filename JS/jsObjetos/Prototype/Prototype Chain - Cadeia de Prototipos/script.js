/*
PROTOTYPE CHAIN - CADEIA DE PROTOTIPOS
A ideia é descobrir como que um determinado objeto pode ter o seu protótipo referenciado,não para o OBJECT, mas para outros objetos de modo a estabelecer a relação de herança por baixo dos panos dentro do JS

    ->independente da forma q os objetos sejam criados, seja através de classes, funções construtoras ou objetos literais  nós temos condições de referenciar qual é o protótipo do objeto que estamos criando para estabelecer a relação de herança.

*/

// As caracteristicas de Animal podem ser herdadas em Vertebrado e as caracteristicas de Vertebrado podem ser herdadas em Ave (sem a necessidade de ter que repetir esse código em cada um dos objetos)

// Os 3 objetos apontam para o PROTOTYPE de OBJECT, na essência todos são filhos de OBJECT Prototype




/*ANTES DE ATRIBUIR A HERANÇA:
Se dermos: console.log(ave.atributo2);   vai dar undefined pois não AVE não herda os atributos de vertebrado (ainda),mas AVE herda de OBJECT PROTOTYPE, ou seja, ave ainda não aponta para o PROTOTYPE de VERTEBRADO.

COMO CORRIGIR ESSE UNDEFINED:
    -Devemos apontar para qual objeto será herdado os atributos, utilizamos "__proto__: vertebrado,"

Ao estabelecer a herança, ela age como cascata, ou seja,no caso abaixo: ANIMAL herda os atributos do PROTOTYPE de OBJECT -> ANIMAL dá seus atributos para VERTEBRADO -> VERTEBRADO dá os atributos de ANIMAL e VERTEBRADO para AVE

    ->Ou seja, AVE tem todos os atributos por meio da HERANÇA
    ->o JS sempre procura o ATRIBUTO no escopo mais baixo. Logo, se atribuimos o mesmo atributo (que é herdado) em AVE, por exemplo, ocorre uma SOBREPOSIÇÃO (tb conhecida como SOMBREAMENTO -> habilidade do JS de retornar a primeira informação que ele encontrar. Ou seja, se ele não encontrasse o "atributo2" em AVE, ele iria procurar em VERTEBRADO, que é da onde AVE herda seus atributos e assim por diante)


 Todos os OBJETOS por PADRÃO, herdam o PROTOTYPE de OBJECT -> Object.prototype  -> E a partir do PROTOTYPE de OBJECT nós podemos estabelecer atributos e métodos que poderiam ser herdados por padrão para qualquer objeto dentro da aplicação    
    ->criando um atributo ou um método que será global para aplicação todo o objeto criado terá essa informação.
 Usamos:
    Object.prototype.atributoNovo = AlgumaCoisa


*/

Object.prototype.atributoPadrao = "ATRIBUTO PADRÃO"



let animal = { atributo1: "a" }
let vertebrado = { __proto__: animal, atributo2: "b" }
let ave = { __proto__: vertebrado, atributo2: "SOBREPOSIÇÃO", atributo3: "c" }

console.log(vertebrado.atributo1,
    ave.atributo2,
    ave.atributo1,
    ave.atributo3,
    ave.atributoPadrao)



