/*
OPERADOR SUPER()
operador super() fornece acesso para o metodo construtor da classe pai.
-O operador super() é sempre incluído dentro do construtor de classes filhas.
    ->Se a classe filha tiver relação de herança com outra classe então a classe filha precisa implementar
    o super
    ->O super() tambem serve para passar parametros para o construtor pai


Basicamente falando se a classe tiver o operador extends, dentro do construtor da sua respectiva classe
o operador super() tem que ser incluído também.

E outro detalhe importante é que ele deve ficar antes de qualquer operador this.
Ou seja antes da criação de qualquer atributo o objeto em questão e aí nós podemos ou não passar parâmetros
através do Super() para o construtor da classe pai.

na classe pai não precisa colocar o operador super() no construtor

-Pelo super() da classe filha eu posso passar parâmetros que serão recebidos no construtor da Classe Pai
    ->Ali, estamos passando no operador super() de papagaio, o valor "Médio" que será recebido como parametro no construtor de Passaro e será atribuito como o valor de "bico" (podem ser passados quantos parametros forem necessarios)
    ->Por meio do super() da classe Passaro, passamos parametros para o construtor da classe Animal
    passamos os valores de cor, tamanho, peso




    This.variavel = faz referência para o atributo da classe
    Parametros/variaveis = são apenas de escopo, por m mais que elas têm o mesmo nome, elas não interferem nas variaveis(atributos) do this
        ->Pois os contextos de existência são diferentes.
        ->Variaveis: Cor, tamanho e peso = existem apenas na função/metodo construtora ou metro do construtor.
        -this.cor, this.tamanho, this.peso = existem no escopo da classe Animal

    -De forma HARDCODE/de forma EXPLÍCITA SETando esses parametros no super() de Passaro para o construtor de Animal


*/

class Animal {
    constructor(cor, tamanho, peso) {
        this.cor = cor
        this.tamanho = tamanho; //cm
        this.peso = peso; //gramas
    }

    dormir() {
        console.log("Dormir")
    }
}


class Passaro extends Animal {
    constructor(bico, cor, tamanho, peso) {
        super(cor, tamanho, peso)
        this.bico = bico
    }
    voar() {
        console.log("O passaro está voando")
    }

}



class Papagaio extends Passaro {
    constructor(sabefalar, cor, tamanho, peso) {
        super("Médio", cor, tamanho, peso)
        this.sabeFalar = sabefalar
    }
    falar() {
        console.log("Papagaio está falando")
    }
}

/*os parametros passados aqui, sempre são recebidos no construtor da respectiva classe, ou seja, os parametros de Papagaio só são enviados para Papagaio
let papagaio = new Papagaio(true)
console.log('papagaio: ', papagaio);

Porem como nem todos os papagaios são iguais, vamos passar os os parametros: falar, cor, tamanho, peso direto na instancia da classe Papagaio -> para que por meio do metodo super(), esses valores vão "subindo" até "encontrarem" o lugar correto para atribuirem esses valores

No caso em Papagaio, ele só utiliza o parametro "sabefalar" que será preenchido com o valor "true", aí no super ele, passa para "cima"(classe pai) os valores passados nos parametros cor, tamanho e peso

E o mesmo acontece com Passaro, Papagaio passa o valor do bico, que é "Médio" e ele passa tb os valores de cor, tamanho, peso -> Passaro recebe o valor de bico e o preenche, mas não utiliza os outros 4 parametros, ele pega esses 4 parametros e passa para "cima" e finalmente, Animal, recebe esses parametros e os preenche onde eles forem utilizados.

É uma boa prática fazer assim, pois a estrutura de criação de um Papagaio, por exemplo, fica mais dinamica e podemos ou não, passar valores para tal coisa, já que há Papagaios diferentes

O super nos permite fazer essas ligações com os construtores das Classes Pai
*/

let papagaio = new Papagaio(true, "Verde", 25, 350)
console.log('papagaio: ', papagaio);

let papagaio2 = new Papagaio(false, "Branco", 10, 80)
console.log('papagaio2: ', papagaio2);


let papagaio3 = new Papagaio("", "Branco", null, 150)
console.log('papagaio2: ', papagaio3);
