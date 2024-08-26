/*

 Quando  criamos nossas classes e instanciamos os nossos objetos com base nas nossas classes, utilizando as features do ES6, nos utilizamos uma syntax sugar (que é um tipo de construção feita para "adocicar" o código, ou seja, fazer algo de maneira mais simples) para criação desses objetos


PROTOTYPE
-É um modelo, um padrão, um primeiro tipo, o primeiro exemplar de alguma coisa.
-Sempre quando nós criamos um objeto dentro do JavaScript esse objeto ele automaticamente é um
descendente, um herdeiro, um filho de OBJECT.
    ->qualquer objeto criado por padrão é filho de object.

E aí métodos e atributos de OBJECT são herdados dentro desse objeto que nós criamos.
    existe uma relação de herança e isso automaticamente de forma implícita sem que seja necessário indicar isso na criação do objeto.


    Então imagine que dentro da nossa aplicação seja necessário criar um objeto que seja um avião.
Nós vamos ter dois atributos como modelo e vamos ter um único método chamado levantar voo que vai apenas
dar um console.log de "levantar voo"

*/

/* CRIANDO OBJETOS BASEADOS NO MODELO AVIAO:
 ATRIBUTOS: cor e modelo; MÉTODO: levantarVoo

 -Podemos criar essas objetos de formas diferentes: Objeto literal, c/ Função Construtora ou Classe
*/

// Objeto Literal
let aviao1 = {
    cor: "Branco",
    modelo: "Airbus a380",
    levantarVoo: () => { console.log("Levantar voo") }
}


// Objeto com base em uma Função Construtora (e precisamos instanciar o objeto com base na função)
let AviaoFuncao = function () {
    this.cor = "Azul",
        this.modelo = "Boeing 787",
        this.levantarVoo = () => { console.log("Levantar voo") }
}

let aviao2 = new AviaoFuncao()



// Objeto baseado em CLASSE
class aviaoClasse {
    constructor() {
        this.cor = "Vermelho";
        this.modelo = "Embraer E-Jets";
    }
    levantarVoo() {
        console.log("Levantar voo")
    }
}
let aviao3 = new aviaoClasse()



console.log('aviao1 : ', aviao1);
console.log('aviao2 : ', aviao2);
console.log('aviao3 : ', aviao3);
/*
Ao verificarmos no console.log() todos eles tem o atributo "__proto__" (ou "Prototype")(tem esses underlines para evitar que o usuário na hora do desenvolvimento sobreponha esse atributo. É uma convenção para evitar a sobreposição) 
    Pra que ele serve?
    -Serve para compreender que na hora que o objeto é criado, automaticamente ele descende de OBJECT que é o nosso PROTOTIPO (ou seja, o nosso padrão, o nosso primeiro modelo)
        ->por isso que nós falamos com JavaScript todos os objetos descendem de OBJECT. E o que é mais curioso é que o OBJECT não é um objeto e sim uma FUNÇÃO.
            ->Por isso que na essência do JavaScript o objeto são funções.

Na hora da criação de objetos, por Default os objetos que estamos criando descendem de OBJECT. E OBJECT por sua vez, têm seus próprios atributos e métodos que podem ser explorados dependendo da situação.
    ->Bom tendo em mente que os objetos possuem uma relação de herança a partir do atributo "proto" 




*/