/*
Melhorias em relação a escrita -> diminuir a quantidade de codigo

*/

let nome = "Gabriel"
let idade = 29
let sexo = "Masculino"
let profissao = "Engenheiro de Software"

/*
O JS tem a inteligencia para entender que os nomes do lado esquerdo, fazem referencia ao OBJETO e as variaveis a direita, são as variaveis criadas ali no escopo global

OBJETO LITERAL VERSAO ES5
*/
let objeto = {
    nome: nome,
    idade: idade,
    sexo: sexo,
    profissao: profissao,
    exibirResumo: function(){
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Sexo: ${this.sexo}, Profissao: ${this.profissao}`);
    }
}


console.log('objeto: ', objeto);
objeto.exibirResumo()






/* OBJETO LITERAL VERSÃO ES6 (melhorado e + enxuto)
-Nas situações em que a variável possui o mesmo nome da chave par/valor nós podemos omitir a definição do nome desse par
    Ex.:  nome: nome,  -> nome,
Ou seja, o nome (do par/valor) vai ser = ao nome da variavel e o valor do conjunto (par/valor) vai ser igual ao valor da variavel

Então dessa forma que nós estamos falando é: recupere essa variável e utilize o nome da variável como sendo o nome par/valor enquanto o valor da variável será o valor do par/valor.

A segunda melhoria é em relação aos metodos
Em vez de utilizarmos a combinação: par/nome: valor -> nos podemos combinar nome e o valor quando nós estamos falando de funções como que nós fazemos isso. Simples nós retiramos os dois pontos e retiramos a palavra reservada ao FUNCTION.
    ->é como se nós passássemos uma função diretamente como parâmetro para o nosso objeto literal.
E aí nós chamamos a nossa função a partir do nome dessa função tal como se de fato nós estivéssemos
removendo a definição do nome e como o valor estivesse-mos colocando aqui uma função nomeada e não uma função anônima.
->Logo, temos uma sintaxe menos verbosa e o resultado continua o mesmo



E não obrigatoriamente precisa utilizar o nome da variável como definição do nome/par = valor.
por ex.: em vez de nome = nome, -> podemos usar nomeTeste = nome,
    ->através dos dois pontos criamos um nome específico para esse conjunto par/nome valor, que o valor dele é o conteudo contido dentro da variável "nome" e o nome desse conjunto par/valor é o nomeTeste. Funciona da mesma forma
    Veremos no console.log() que ele modificou, porem mostra undefined porque ele procura o atributo nome e o atributo nome não existe mais, mas, ele foi modificado para nomeTeste -> Para ajustar isso, basta mudarmos this.nome para this.nomeTeste


*/

let objeto2 = {
    nomeTeste: nome,
    idade, //idade = idade variavel / valor = valor da variavel idade
    sexo,
    profissao,
    exibirResumo(){
        console.log(`Nome: ${this.nomeTeste}, Idade: ${this.idade}, Sexo: ${this.sexo}, Profissao: ${this.profissao}`);
    }
}

console.log('objeto2: ', objeto2);
objeto2.exibirResumo()