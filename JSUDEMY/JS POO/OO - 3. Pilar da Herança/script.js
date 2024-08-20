/*
PILAR DA HERANÇA

-A primeira vantagem é o fato de que o nosso código se tornará mais reutilizável e consequentemente menos redundante
    ->Justamente por ser menos redundante que nós vamos ganhar uma segunda vantagem, que é a manutenção posterior dos nossos codigos.

REUTILIZAÇÃO:
Há atributos/metodos comuns entre os animais logo, é necessario verificar se cabe criar uma terceira classe (abstração) para conter esses itens em comum
    ->Logo, precisamos fazer uma abstração, assim, uma terceira classe que concentra os atributos/metodos comuns a todos os animais, assim, os animais herdam dessa classe contendo seus metodos e atributos base
        ->Para eles herdarem precisamos estender, ou seja, usar o "extends"
    
        Precisamos indicar de onde serão herdados
        na frente do nome da classe utilizar a palavra reservada "extends" e a classe que estender os atributos e metodos
        e no construtor das classes filhas, devemos usar o metodo super() -> SEMPRE ANTES DE THIS
        ->Quando verificamos no console.log() vemos que mostra um Prototype (Proto), ele aponda pra classe Pai herdada


MANUTENÇÃO:
->Se houver necessidade de implementar algum atributo ou metodo comum para as classes filhas, podemos simplesmente cria-los na SuperClasse que eles serão herdados nas SubClasses


Alguns termos:
    SuperClasse: 
    ->São as classes pai, que geralmente, têm algo em comum das classes filhas, o que serve para reduzir o codigo
    ->É a classe que contém métodos e atributos que são herdados por subclasses.

    SubClasse: 
    ->São as classes filhas que herdam algo da classe pai
    ->É a classe que herda métodos e atributos da SuperClasse.

(Outro termo pra se referir a elas é "classes especializadas" -> ou seja, classes baseadas em uma outra classe, mas, que especializam atributos e métodos para algo específico)


*/

class Animal{
    constructor(){
        this.cor = ""
        this.tamanho = null;
        this.peso = null;
    }

    dormir(){
        console.log("Dormir")
    }
}



class Cachorro extends Animal{
    constructor(){
        /*Serão herdados
         this.cor = "Branco e marrom"
         this.tamanho = 30 */

         super()
        this.orelhas = "Grandes e caídas"
    }
    correr(){
        console.log("O cachorro está correndo")
    }

    /* dormir(){
         console.log("Dormindo")
     } */

    rosnar(){
        console.log("O cachorro está rosnando")
    }
}



class Passaro extends Animal {
    constructor(){
        /* this.cor = "Branco e marrom"
         this.tamanho = 10 */
         super()
        this.bico = ""
}
    voar(){
        console.log("O passaro está voando")
    }


    /* dormir(){
        console.log("Dormindo")
     }*/
}



let cachorro = new Cachorro()
let passaro = new Passaro()


console.log(cachorro);
console.log(passaro);
cachorro.dormir()
passaro.dormir() 


/*
Como a classe Passaro já herda da classe animal, então ela já tem os atributos e metodos dele, então podemos só estender da classe Passaro para Papagaio herdar tudo isso desde a classe Animal -> cascata, herança progride de acordo com a estensão das classes

*/
class Papagaio extends Passaro{
    constructor(){
        super()
        this.sabeFalar = true
    }
    falar(){
        console.log("Papagaio está falando")
    }
}

let papagaio = new Papagaio()
console.log(papagaio);

papagaio.dormir()  //Método herdado de ANIMAL
papagaio.voar()    //Método herdado de PASSARO   
papagaio.falar()   //Método da própria classe PAPAGAIO