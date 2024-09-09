/*
PILAR DO POLIMORFISMO
-Reutilizavel
-Sobrescrita de metodos (no objeto/classe filha)

O objeto filho herda os atributos e métodos do objeto pai mas não necessariamente o objeto filho tem que se comportar da mesma forma que o objeto pai.
    ->Nessas situações nós corrigimos esses comportamentos através da SOBRESCRITA DE MÉTODOS.

Do ponto de vista de tornar os nossos códigos mais reutilizáveis o POLIMORFISMO nos permite reescrever o método especificamente no objeto filho. Ou seja, não existe a necessidade de um objeto pai criar um método específico para um dos filhos dele.
    ->Até porque esse método seria herdado por todos os objetos filhos. Então, na prática, no objeto filho podemos sobrescrever esse comportamento que é específico para aquele objeto filho.

-No caso Avestruz, ele herda os metodos e atributos de Passaro (que herda de Animal), porém, em relação ao metodo voar() (de Passaro), Avestruz não sabe voar, logo, precisamos utilizar o Polimorfismo para reescrever o metodo voar() na própria classe Avestruz.

    ->A vantagem de poder reescrever o método do objeto pai no objeto filho viabiliza o fato do objeto pai não precisar implementar métodos diferentes para os filhos. E se houver um comportamento específico, que seja diferente, nós podemos fazer esse POLIMORFISMO NO OBJETO FILHO, SOBRESCREVENDO O COMPORTAMENTO DEFINIDO NO OBJETO PAI.



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

let papagaio = new Papagaio()
papagaio.voar() //PAPAGAIO CONTINUA PODENDO VOAR






class Avestruz extends Passaro{
    constructor(){
        super("Grande", "Branco e preto", 250, 15000)
    }

    enterrarCabeca(){
        console.log("Avestruz está enterrando a cabeça")
    }
    voar(){
        console.log("O Avestruz não voa!")
    }
}

let avestruz = new Avestruz()
avestruz.enterrarCabeca()
avestruz.voar() //AVESTRUZ NÃO VOA!