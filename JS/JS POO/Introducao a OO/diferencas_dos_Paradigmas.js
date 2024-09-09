// Diferença dos Paradigmas:

/* Paradigma PROCEDURAL 
-> Chamada de procedimentos (procedures) para manipulação de dados

->faz a chamada de procedimentos, que também são conhecidas como rotinas, subrotinas, métodos ou funções.
e a partir da chamada desses procedimentos (ou procedures) nós podemos manipular os dados da
nossa aplicação esses dados eles podem ser dados globais da aplicação ou associados a algum contexto
e a partir desse procedimento nós afetar o estado da aplicação como um todo.

->no paradigma procedural, as funções e os procedimentos são responsáveis por manipular dados

*/
let a = 10
let b = 7
let operador = 'mult'
function calcular(a, b, operador) {
    if (operador === 'mult') {
        console.log(a * b)
    }
}
calcular(a, b, operador)




/* Paradigma de ORIENTAÇÃO A OBJETOS 
-> Estruturas de dados com comportamentos

-> Já no paradigma de orientação a objetos a forma como nós pensamos na solução das coisas ela se transforma de forma substancial ou seja é necessário pensar de forma diferente para se trabalhar no paradigma ou para se trabalhar no padrão de orientação a objetos.

->no paradigma de orientação a objetos as estruturas de dados que possuem seus respectivos comportamentos.
Então invés de submeter dados para um procedimento para que ele afete esses dados (igual na procedural), nós vamos criar os nossos próprios dados e dentro desses dados nós vamos incluir os comportamentos desejados.

Na orientação a objetos nós criamos com base em uma classe com um objeto, que é uma abstração de alguma
coisa.
 ->Nesse caso, é uma abstração de uma calculadora porque como nós estamos falando de um método de calcular faz sentido que a ação de calcular seja disparada através de um objeto ou calculadora
    ->Nada mais é do que a forma como você interpreta as coisas.

 ->Nós temos alguns atributos, que são variáveis e recebem valores. Ou seja, os dados estão contidos dentro do nosso objeto e a partir do próprio objeto nós estamos disparando a função "calcular" 
 
 ->Essa função opera sobre as variáveis do próprio dado fornecendo como resultado a multiplicação de A e B baseada
na condição do operador ser igual a "mult".

*O resultado desse código implementado sobre os princípios da Orientação a Objetos é equivalente a essa estrutura de implementada sobre os princípios do paradigma procedural.

->O termo princípio é importante quando nós estamos falando de paradigmas, pois, para escrever os nossos códigos de forma a atender um paradigma especial nós precisamos seguir os seus princípios ou pilares.
    ->No caso do paradigma de orientação a objetos nós temos quatro pilares (ou principios), são quatro considerações que devem
ser atendidas dentro dos nossos códigos para que a gente possa dizer que de fato nós seguimos a programação
orientada a objetos:    
                    -> abstração, encapsulamento, herança e polimorfismo.

1. Abstração: é a capacidade de representar uma complexidade real com uma representação simples.
2. Encapsulamento: é a capacidade de ocultar detalhes de implementação
3. Herança: é a capacidade de criar novas classes a partir de classes existentes
4. Polimorfismo: é a capacidade de ter diferentes comportamentos para o mesmo método.

*/
class Calculadora {
    
    constructor() {
        this.a = 10
        this.b = 7
        this.operador = 'mult'
    }
    calcular() {
        if (this.operador === 'mult') {
            console.log(this.a, this.b)
        }
    }
}
calculadora = new Calculadora()
calculadora.calcular()




/*
*MAS QUAL É O MELHOR?
Depende!
-O modelo de orientação a objetos trouxe em termos de segurança e organização de código muitas vantagens, códigos menores e menos redundantes e manutenção mais facil
    -> Se nos precisarmos mudar algo em relação ao dado "Cadeira" nós podemos implementar diretamente no modelo do objeto e aí a cada novo objeto automaticamente esses atributos e métodos atualizados no modelo, estarão disponíveis.

-Já no modelo procedural seria diferente: se eu criasse uma nova função em um determinado local para trabalhar os dados da "Cadeira" eu precisaria copiar essa função para outros scripts se por ventura eu precisasse utilizá-la tb.
    ->A mesma coisa para os atributos que eu teria que procurar no meu script os locais onde esse objeto era construído, onde essa abstração é feita e, teria que autualizar esses dados tambem.

-Repare que são motivações que trouxeram uma nova forma de pensamento (POO), mas a codificação ela é essencialmente a mesma (PP e POO).
*/