/*
Pilar da ABSTRAÇÃO

CLASS= Modelo ou objeto da entidade -> Ela não é nem a entidade nem o objeto.
    Ex.: receita de bolo -> modelo ou classe
    o bolo proveniente dessa receita é compreendido como a entidade (ou objeto)
    Então repare o objeto ele é uma instância do modelo.

-Ao definir classes é uma boa prática utilizar a notação PascalCase nos nomes;
-Ao definir atributos é uma boa prática utilizar a notação camelCase;


No exemplo abaixo, estamos criando para um sistema de Banco:

Então isso aqui indica um interpretador JavaScript que nós estamos criando com um modelo de conta bancária
que vai representar mais adiante dentro da nossa aplicação uma entidade que é a entidade conta bancária.




O modelo (ou a classe) precisam passar por um processo chamado instância. Nesse processo automaticamente ocorre a construção de um objeto.

->Temos um modelo ( ContaBancaria ), uma classe, que quando instanciada se transforma em um objeto. E esse objeto pode ser utilizado dentro da nossa aplicação. 


Então o construtor é justamente um método automático ( constructor() ) com as instruções que serão realizadas nesse processo de construção de um objeto, com base em um modelo, uma classe.

Então, noo construtor definimos os atributos com o operador chamado de THIS.
    ->O THIS tem a inteligência de fazer com que um atributo, por exemplo, a agência, seja conectado ao contexto do objeto.
o THIS é responsavel por conectar o ATRIBUTO ao objeto da classe. Serve para contextualizar de onde aquela variavel (atributo) existe Ex.: agencia é um atributo de ContaBancaria (objeto)


Então ele não vai ficar perdido na nossa programação digamos assim.

Teremos uma variável que vai estar encapsulada dentro do objeto 



ações elas são definidas com a mesma sintaxe de função, porém não precisamos utilizar o termo "function"

Porém quando declaradas dentro de um modelo são conhecidas como métodos.




Para criar a ENTIDADE precisamos dar a ela uma IDENTIDADE
*/

// Modelo da objeto -> da linha 46 a 72 é a nossa classe/nosso modelo -> ou seja, só criamos o modelo (que é a abstração) e não a entidade
class ContaBancaria {
    agencia
    numeroConta
    saldo
    limite

    constructor() {
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