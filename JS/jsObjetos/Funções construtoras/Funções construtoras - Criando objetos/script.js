/*
Podemos criar objetos por meio de: Classes (POO), Objetos Literais e Funções construtoras.

a criar objetos a partir de funções construtoras.

Acontece que funções construtoras são na verdade a base para a criação de objetos dentro de JS

A ideia da função construtora é muito simples trata se de uma função que possui o respectivo escopo
e que ela vai ser recuperada dentro do nosso código.
A partir do operador NEW, ou seja, ela será construída de fato sendo convertida para um objeto.

E aí de forma análoga a notação de classe Nós vamos criar os atributos dentro da nossa função utilizando o operador THIS
Para amarrar a variável criada dentro da função, no contexto do objeto construído a partir da função (new Carro() )

Diferente da CLASSE não utilizamos a função constructor()
porque não se trata de uma notação baseada em classe e sim de uma função que vai ser construída a partir do operador NEW 

Aí utilizamos a abstração para decidir quais caracteristicas/atributos são necessarias para serem "retiradas" do objeto da vida real, para trazer ao escopo da função
Podemos atribuir metodos tambem



Como funciona um encapsulamento dentro de funções construtores e como funciona um encapsulamento dentro

de objetos derivados de classes.
Existe uma diferença e é importante conhecer essa diferença também.

Os metodos em Funções construtoras são definidos através do operador THIS
    ->Na verdade o que nós vamos fazer é criar um atributo por exemplo acelerar que vai receber uma função. Ou seja, podemos atribuir uma função em qualquer atrubuto

    é um atributo que recebe como valor uma função e a partir da chamada desse atributo nós vamos
e a partir da chamada desse atributo nós vamos
executar a função.


na prática, uma função construtora tem o papel de definir a classe do objeto que queremos criar

Nós podemos portanto criar várias instâncias desse objeto a partir desse modelo definido através de
uma função construtora 


a partir da variável que contêm a referência pro objeto nós podemos acessar atributos/metodos
utilizando o operador "." (ponto).
    ->Então, a sintaxe é muito semelhante a sintaxe de Classe
        ->Só que nós temos alguns comportamentos diferentes porque o contexto é de uma classe que é um pouco diferente do contexto de uma função. E é justamente essa diferença que vai nos permitir criar dentro de funções construtoras atributos e métodos privados. Ou seja, passíveis de serem acessados e manipulados apenas por dentro do próprio objeto.
            ->Isso na prática é uma implementação técnica do princípio de encapsulamento




*/

let Carro = function(){
    this.cor = "Amarelo"
    this.modelo = "Chevette"
    this.velocidadeAtual = 0
    this.velocidadeMaxima = 180

    this.acelerar = function(){
    
        // para recuperar this.velocidadeAtual e somando 10:
    let velocidade = this.getVelocidadeAtual() + 10
    this.setVelocidadeAtual(velocidade)

    /*
Toda vez que chamar o método a acelerar vamos recuperar a velocidade atual somar mais 10.
Atribuir esse resultado a variável velocidade e na sequência encaminhar essa variável como um parâmetro
para setVelocidadeAtual modificando o valor da velocidade atual.


    Poderiamos direto utilizar:
        this.velocidadeAtual += 10 
        
        a cada vez que o metodo acelerar é chamado é acrescentado 10 na velocidadeAtual -> Mas para respeitas o principio do Encapsulamento, não vamos atribuir diretamente, vamos utilizar get e set -> para que a partir desses novos metodos podemos atuar sobre o atributo velocidadeAtual (Mas não é obrigado a fazer isso, estou fazendo pois é uma convenção) 

se eu quiser a qualquer momento pegar a velocidade atual eu preciso utilizar o método GET. Ou seja não vou acessar o atributo diretamente

getVelocidadeAtual = mostra a velocidade atual
setVelocidadeAtual = atribui 10 na velocidade atual a cada vez que for chamado

velocidade = recebida como parametro e é uma variavel do escopo do metodo a ser atribuiada em this.velocidadeAtual

this.velocidadeAtual = é um atributo do objeto Carro (ele é vinculado a "Carro" com o this)
        */
    }
    this.getVelocidadeAtual = function(){
        return this.velocidadeAtual
    }
    this.setVelocidadeAtual = function(velocidade){
        this.velocidadeAtual = velocidade
    }
}

// Construindo/Criando um objeto com base em uma função construtora (precisamos utilizar o "new" para isso):
let carro1 = new Carro() 

console.log("A velocidade atual é: ", carro1.getVelocidadeAtual() ) 

carro1.acelerar()   //adicionando +10 na velocidade

console.log("A velocidade atual é: ", carro1.getVelocidadeAtual() ) 

carro1.acelerar()
carro1.acelerar()
console.log("A velocidade atual é: ", carro1.getVelocidadeAtual() ) 