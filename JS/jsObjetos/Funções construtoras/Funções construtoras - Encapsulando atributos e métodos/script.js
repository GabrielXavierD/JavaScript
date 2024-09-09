/*
Funções construtoras - Encapsulando atributos e métodos
A ideia do princípio do encapsulamento é fazer com que atributos e métodos sejam públicos ou protegidos
ou privados.

Ou seja são operadores que permitem atribuir níveis de visibilidade para os atributos e métodos de um
objeto

Esse princípio ele é um pouco limitado no JavaScript já que nos modelos de objetos criados a partir
de classe nós não conseguimos definir a visibilidade.
Nós temos nesse ponto uma convenção que define algumas regras para dizer que determinado atributo e
método ele é um não privado.

Além disso nós temos os GETTERS e SETTERS para acessar atributos através de pseudovariáveis.
    ->Mas tudo isso é uma convenção ou seja não é uma implementação técnica.
    Com exceção das pseudovariáveis nós podemos utilizar a notação GET e SET para a definição dos métodos que vão afetar os atributos, mas de forma geral uma convenção, um acordo.


Não existe uma implementação técnica em linguagens de programação como por exemplo PHP Java.
Nós temos à disposição operadores de visibilidade que nos permitem aplicar esse princípio de encapsulamento
de forma consistente.

Já no JavaScript nós ainda temos essa limitação utilizando modelos baseados em classe, todos os atributos e métodos são públicos e já em funções construtoras nós temos uma flexibilidade porque nós podemos criar atributos que farão parte do escopo da função.
Então no momento em que o objeto for instanciado nós teremos um objeto que possuirá atributos que não
estarão disponíveis através da instância do objeto.

Repare que esses atributos que serão privados eles são criados sem um operador THIS ou seja são realmente
variáveis do contexto da função.


Então dessa forma nós conseguimos aplicar o princípio no encapsulamento de forma um pouco mais consistente
dentro de funções construtoras já que graças a essa flexibilidade nós podemos criar atributos públicos
e atributos que ficarão escondidos.





Agora digamos que seja necessário esconder o atributo velocidade máxima.
Porque da forma como está criada ele está acessível a partir da instância do objeto Ou seja ele é público e nenhum momento falamos que ele é "private"
    Isso pode ser uma falha de segurança porque sendo um atributo público a aplicação pode modificar esse
Consequentemente isso pode mudar a lógica do nosso objeto no mundo real Nós sabemos que ele tem uma velocidade máxima e essa velocidade máxima ela não será modificada apenas porque a gente quer. Na verdade existe ali uma limitação física do carro que delimita a sua respectiva velocidade máxima.
    Então eu não posso simplesmente modificar essa velocidade máxima. Logo nós precisamos ter um atributo que seja um pouco mais seguro.


POV: Agora ele acelera de 50 em 50 e a velocidade atual ela não poderá em nenhum momento ser maior do que a velocidade máxima.
    Se for maior Nós vamos forçar o valor de velocidade falando que essa variável passa a receber this.velocidadeMaxima Então em nenhum momento nós teremos uma velocidade que supere a velocidade máxima do nosso objeto carro

Porém com o nosso atributo ele está exposto é atributo velocidadeMaxima.
    Se em qualquer local do código eu for e acessar carro.velocidadeMaxima e modificar essa velocidade pra 280 por exemplo.



Repare que essa característica do carro que em tese deveria ficar escondida está exposta (no console).
Como comentamos anteriormente a velocidade máxima é uma limitação física do carro.
Então se estamos espelhando o mundo real dentro das nossas aplicações não é pelo simples fato de que
eu quero que o carro com a mais que ele magicamente vai passar a correr mais é necessário algum tipo
de mudança nesse objeto para que ele tenha uma velocidade máxima superior no mundo real.
Provavelmente nós iríamos trocar algumas peças talvez até o motor para ter um desempenho maior então
o princípio do encapsulamento nasceu por essa motivação.
Alguns atributos e métodos precisam estar escondidos porque nós não podemos acessar esses atributos
e métodos sem antes fazer alguma outra tratativa a partir de um do público.
Então esse é o ponto em que nós ganhamos segurança dentro dos nossos objetos.



Como nós podemos então criar atributos e métodos privados/escondidos?
-Criando variáveis do contexto da função.



*/



let Carro = function () {
    this.cor = "Amarelo"
    this.modelo = "Chevette"
    this.velocidadeAtual = 0
    this.velocidadeMaxima = 180

    this.acelerar = function () {
        let velocidade = this.getVelocidadeAtual() + 50
        if(velocidade > this.velocidadeMaxima){
            velocidade = this.velocidadeMaxima
        }
        this.setVelocidadeAtual(velocidade)
    }

    this.getVelocidadeAtual = function () {
        return this.velocidadeAtual
    }

    this.setVelocidadeAtual = function (velocidade) {
        this.velocidadeAtual = velocidade
    }
}

let carro = new Carro()
console.log(carro.velocidadeAtual)
carro.acelerar()

console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)

// A partir desse ponto, a velocidade não ultrapassa velocidadeAtual/É o limite maximo de velocidade desse carro que é 180
carro.acelerar()
console.log(carro.velocidadeAtual)


carro.velocidadeMaxima = 280
carro.acelerar()
console.log(carro.velocidadeAtual)






/*


Pegamos à velocidade máxima e ao invés de ser um atributo do objeto

eu vou definir como uma variável do contexto da função.
Então precisamos ajustar as referencias:
a variável ela tem um contexto, um escopo, 
    variáveis declaradas no escopo da função: Podem ser utilizadas dentro de escopo do bloco ou mesmo escopo de outras funções desde que esses corpos
    estejam naturalmente dentro do escopo da função.


    Então Nós podemos recuperar essa variável e ajustar as referencias ao invés de utilizar uma referência de um atributo do objeto. Nós vamos utilizar a referência da variável no contexto da função.

    O que acontece é que Externamente a aplicação não poderá modificar a velocidade máxima de qualquer objeto baseado no modelo Carro2
    Então a gente ganha um nível de segurança

Agora, no console.log() -> Carro continua exibindo a velocidadeMaxima e Carro2 não a exibe mais
    ->ele não é exibido porque agora ele se comporta como um atributo privado a partir do momento em que ele foi criado como uma variável do contexto da função.

Depois, incluimos a variavel com escopo de função "quilometrosRodados" 
    E digamos que a cada aceleração, a cada chamada do metodo de acelerar() que a gente atualize Essa variável "quilometrosRodados"  adicionada ao seu respectivo valor o valor contido nela mesmo mais
0.05

esses quilômetros rodados olha só é um atributo que não está exposto no console.log() assim como a velocidadeMaxima, ele é um atributo privado do objeto



Agora, vamos fazer a mesma coisa, mas para uma função
Exemplo, por algum motivo dentro do meu objeto existe uma função que só pode ser executada pelo próprio objeto

Se você se lembra bem em JavaScript funções tão bem são estruturas de dados então nós podemos criar
um atributo privado que recebe uma função e aí a partir do próprio objeto Internamente nós podemos executar essa função a partir desse atributo privado.

vamos criar o setQuilometrosRodados -> será responsavel por afetar o valor do nosso atributo quilômetrosRodados .
    É necessário? Não! Nós afetamos o valor de esse atributo (quilometrosRodados) internamente dentro do próprio objeto sem problema nenhum.

    Mas para fins de teste nós vamos criar um outro atributo que vai receber uma função só para ver como isso se comporta


    aí ao invés de afetar quilômetros rodados diretamente dentro de acelerar() Na verdade eu vou recuperar a variável setQuilômetrosRodados e vou através dos parênteses executar a função contida dentro dela que fará isso para nós.
        A diferença é que eu vou passar um parâmetro com esse parâmetro vai ser recebido aqui como sendo por exemplo "q" E aí nós vamos somar agregar esse valor aos quilômetros rodados do atributo privado do nosso objeto.
E aí é claro que eu preciso passar esse valor aqui.


Não usamos o this pois estamos trabalahando com variáveis do contexto da função.

Se eu criar esse atributo utilizando THIS Na verdade eu vou criar um atributo público portanto o valor desse atributo público que é a nossa função
responsável por SETAR os quilômetros rodados poderá ser acessado pela aplicação mas não é isso que
nós queremos.
Nós queremos de fato deixar esse atributo privado ou seja invisível para a nossa aplicação 


A única diferença é que agora os quilômetros rodados estão sendo acrescidos a cada aceleração 0.07 e esse acréscimo está sendo feito a partir de um metodo privado que nada mais é do que uma função atribuída como valor a uma variável, no escopo da função, que atua como um atributo privado do objeto. O que faz com que ele não seja mostrado no console.log()

*/
let Carro2 = function () {

    var velocidadeMaxima = 180;
    var quilometrosRodados = 0;

    this.cor = "Amarelo"
    this.modelo = "Chevette"
    this.velocidadeAtual = 0

    this.acelerar = function () {
        let velocidade = this.getVelocidadeAtual() + 50
        if(velocidade > velocidadeMaxima){
            velocidade = velocidadeMaxima
        }
        this.setVelocidadeAtual(velocidade)

        setQuilometrosRodados(0.07)
        console.log("Km: ", quilometrosRodados);
    }

    this.getVelocidadeAtual = function () {
        return this.velocidadeAtual
    }

    this.setVelocidadeAtual = function (velocidade) {
        this.velocidadeAtual = velocidade
    }

    var setQuilometrosRodados = function(q){
        quilometrosRodados += q
}
}

let carro2 = new Carro2()
console.log("\n", carro2.velocidadeAtual)
carro2.acelerar()

console.log(carro2.velocidadeAtual)
carro2.acelerar()
console.log(carro2.velocidadeAtual)
carro2.acelerar()
console.log(carro2.velocidadeAtual)

/* A partir desse ponto, a velocidade não ultrapassa velocidadeAtual/É o limite maximo de velocidade desse carro2 que é 180

Nós não temos mais esse atributo (de forma publica) então essa instrução aqui embora não dê erro (e continue atribuindo e mostrando no console) ela não faz mais sentido:

carro2.velocidadeMaxima = 280
*/

carro2.acelerar()
console.log(carro2.velocidadeAtual)

carro2.acelerar()
console.log(carro2.velocidadeAtual)


console.log(carro)
console.log(carro2)
