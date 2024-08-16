/*
Pilar da ABSTRAÇÃO

CLASS= Modelo ou objeto da entidade -> Ela não é nem a entidade nem o objeto.
    Ex.: receita de bolo -> modelo ou classe
    o bolo proveniente dessa receita é compreendido como a entidade (ou objeto)
    Então repare o objeto ele é uma instância do modelo.

-Ao definir classes é uma boa prática utilizar a notação PascalCase nos nomes;
-Ao definir atributos é uma boa prática utilizar a notação camelCase;



---------------------------------------------------------------------
| *CRIANDO UMA CLASSE/MODELO PARA UM SISTEMA DE BANCO - explicação: |
---------------------------------------------------------------------
(exemplo abaixo) 

    -O "Class ContaBancaria" indica ao interpretador do JavaScript que nós estamos criando um modelo de conta bancária, que representa uma entidade "ContaBancaria".

    -O modelo (ou a classe) precisam passar por um processo chamado instância ao qual automaticamente ocorre a construção de um objeto.
        ->Temos um modelo ( ContaBancaria ), uma classe, que quando instanciada se transforma em um objeto. E esse objeto pode ser utilizado dentro da nossa aplicação por meio de variavel por exemplo... 


    -O construtor é um método automático ( constructor() ) com as instruções que serão realizadas nesse processo de construção de um objeto, com base em um modelo, uma classe:

        Nele definimos os atributos (default) com o operador chamado de THIS.
            ->O THIS tem a inteligência de fazer com que um atributo, por exemplo, a agência, seja conectado ao contexto do objeto.

            ->O THIS é responsavel por conectar o ATRIBUTO ao objeto da classe. Serve para contextualizar de onde aquela variavel (atributo) existe 
                Ex.: agencia é um atributo de ContaBancaria (que é um objeto  -> vira objeto quando é instanciada em uma variavel -> "new ContaBancaria()" )
                ww
                ->Então esse atributo não vai ficar "perdido" na nossa programação, digamos assim.
            
    -As ações são definidas com a mesma sintaxe de função, porém não precisamos utilizar o termo "function"
        ->Mas quando declaradas dentro de um modelo/classe são conhecidas como métodos.

    
     
---------------------------------------------------
|  *CRIANDO A ENTIDADE DO MODELO/CLASSE:          |
--------------------------------------------------- 

    -Para criar a ENTIDADE precisamos dar a ela uma IDENTIDADE:
        ->Criei a variável "conta1" e a ela atribuí "new ContaBancária".
            ->O modelo "ContaBancaria" vira um OBJETO ao ser INSTANCIADO.

            O que significa instanciar?
            -Significa criar um objeto a partir de uma classe/modelo. Isso gera uma "cópia" da estrutura definida pela classe/modelo, resultando em um objeto que pode ser manipulado no código.
    
            ->O "new" é o OPERADOR que indica para o interpretador do JavaScript que eu quero transformar esse modelo em um OBJETO (ENTIDADE), ou seja, TRANSFORMAR ESSA CLASSE EM UM OBJETO que possa ser utilizado dentro do meu código.
            
            ->"conta1" é uma instancia da classe "ContaBancaria"
                ->Ou seja, teremos um objeto que vai estar encapsulado dentro da variável
        
    -A partir da instância nós podemos recuperar os atributos e métodos do objeto.
    -Pode ser criado quantas vezes quiser em variaveis diferentes etc...
   
    -A partir da referencia (variaveis) do objeto ContaBancaria() podemos acessar seus metodos (funções):
        ->O "." nos permite acessar atributos e métodos dos objetos 
            ->Sintaxe: referencia, depois "ponto" e na sequência informar o método ou atributo
            ->O metodo é semelhante a uma função logo, precisa do ()



-------------------------------------------------------------
|                EXPLICAÇÕES GERAIS (EM ORDEM)              |
-------------------------------------------------------------           

    CLASSE
    -Define a estrutura e o comportamento
    -É o modelo
       ->A classe "ContaBancaria" não é um objeto ainda, ela é apenas um modelo que serve para geração de vários objetos dentro do nosso código.

    CONSTRUCTOR()
    -Define e inicializa os atributos do objeto quando ele é criado
    -Ele atribui os valores iniciais (default) às propriedades do objeto quando a classe é instanciada ( new ContaBancaria() )
    -Podemos atribuir parametros no construtor para que eles sejam passados na instancia, por exemplo:

    Class ContaBancaria{
        constructor(agencia, nome, saldo){
            this.agencia = agencia;
            this.nome = nome;
            this.saldo = saldo;
    }
    (continuação da criação da classe/modelo, ações etc...)
}

    let contaJoao = new ContaBancaria("123", "João", 1000.0); 
        ->Passando os ARGUMENTOS para o constructor() que os usa para inicializar os atributos da nova instância


    CARACTERISTICAS
    -São os atributos/propriedades criados dentro do constructor()

    AÇÕES
    -São os metodos

    PROCESSO DE INSTANCIA DE UM OBJETO
    -É criar um objeto específico a partir da classe
    -É feito por meio das variaveis criadas com a classe/modelo "ContaBancaria()" 
        ->Ou seja, com "new ContaBancaria()" dentro da variavel
    -O operador "NEW" instancia um objeto com base em um modelo/classe.
        ->Ao instanciar (ou seja, usar o "new") a CLASSE/MODELO ela se transforma em um OBJETO

*/

// Modelo da objeto -> da linha 46 a 72 é a nossa classe/nosso modelo -> ou seja, só criamos o modelo (que é a abstração) e não a entidade
class ContaBancaria {

    constructor() {
        // atributos pré-definidos para o objeto, td objeto instanciado nesse modelo terá essas informações como default
        this.agencia = 1075
        this.numeroConta = 8351125
        this.saldo = 50
        this.limite = 450
    }

    // ações
    depositar(valorDeposito) {
        //recuperando saldo e atribuindo o valor do deposito -> O mesmo de  this.saldo = this.saldo + valorDeposito 
        this.saldo += valorDeposito
    }

    sacar(valorSaque) {
        this.saldo -= valorSaque
    }

    consultarSaldo() {
        return this.saldo; // para sabermos o saldo, devemos retornar o valor do saldo
    }
}

// Dessa forma podemos acessar objetos isolados, mesmo eles tendo sido gerados a partir do mesmo modelo, ou seja, são distintos -> Ou seja, as alterações em "conta1" não alteram as informações em "conta2"
let conta1 = new ContaBancaria()
let conta2 = new ContaBancaria()

// Acessando metodo consultarSaldo() do objeto contaBancaria(), por meio da referencia "conta1"
console.log('conta1 Saldo: ', conta1.consultarSaldo());

// Fazendo um deposito, atualiza o saldo
conta1.depositar(500)
console.log('conta1 Saldo - deposito: ', conta1.consultarSaldo());

// sacando
conta1.sacar(200)
console.log('conta1 Saldo - saque: ', conta1.consultarSaldo());

console.log('conta2: ', conta2.consultarSaldo());
