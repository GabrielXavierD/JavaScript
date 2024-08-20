/*
objetos literais que também são conhecidos como objetos estáticos.

é um recurso que depende de um certo conceito baseado no paradigma de orientação a objetos.
Qual na prática o objeto literal ele é um objeto que é descrito dentro do nosso código.

Para compreender isso melhor eu vou fazer uma comparação entre um objeto produto criando esse objeto
através da notação de classe e depois criando esse objeto através da notação de objeto literal.


a sintaxe de classe disponível no ES6 nós criamos uma classe e instanciamos um objeto com base na classe.



Já o objeto literal ele nada mais é do que um objeto descrito dentro do código.


HÁ 2 FORMAS DE ESCREVER OBJETOS -> POR CLASSE OU POR OBJETO LITERAL
    ->Os OBJETOS LITERAIS são frequentemente utilizados porque nem sempre existe a necessidade da criação de uma classe para estruturação de um OBJETO
    Geralmente objetos literais são objetos únicos dentro da nossa aplicação. Não existe a necessidade de criar uma coleção de objetos daquele tipo, por exemplo, é muito comum dentro
    das nossas aplicações termos formulários que são submetidos para o servidor, então, recuperamos os dados do formulário e montamos o objeto literal na sequência que nós pegamos esse objeto ou






*/


// OBJETO CRIADO POR MEIO DA NOTAÇÃO DE CLASSE
class Produto {
    constructor(descricao, preco) {
        this.descricao = descricao
        this.preco = preco
    }
    verDescricao(){
        console.log(`${this.descricao} por apenas $${this.preco} reais`)
    }
}

let produto = new Produto("Notebook", 2500)
produto.verDescricao()




/*OBJETO LITERAL
-Pode ter qualquer nome
-Precisamos utilizar {} dentro da variavel
-Dentro das {} definimos pares de nomes e valores
    ->Esses pares eles funcionam como atributos do objeto, inclusive com os métodos eles tambem são definidos utilizando a notação de par que nós temos o nome do método e o valor que é a função (ação que ele irá executar).

    Esses conjuntos de par, nome e valor são separados por virgula. Dessa forma o interpretador do JavaScript consegue identificar quando um par termina e outro detalhe importante é que o próprio nome e o valor são separados através de um operador dois pontos.
    Então dessa forma o interpretador JavaScript compreende que a esquerda está o nome e a direita está o valor que deve ser atribuído a aquele nome.

    O nome a esquerda = chave, atributo ou nome
    Valor = valor atribuido a chave (atributo ou nome)
    Pares = Forma de se referir a Chave e o seu Valor (formam um par)

    -Tambem utilizamos o this, que ajusta o contexto da variavel que estamos utilizando
        ->Ou seja, no console.log() -> descricao e preco, são variaveis do contexto do objeto "produtoLiretal" -
            -> Ou seja, o this ajusta esse contexto 
                ->Caso seja colocado somente o nome das variaveis sem o "this", o interpretador JS vai entender que essas variaveis são do contexto da FUNÇÃO (que são variaveis criadas na função) e não do contexto do OBJETO LITERAL (criadas no OBJETO LITERAL) 
                    -> E ainda por cima irá dar um erro, já que não estamos passando essas variaveis por parametro. logo, devemos utilizar o THIS
No nosso caso nós queremos descrição e preço do contexto do objeto, então por isso utilizamos o this.

Porem o this pode sofrer variação de contexto
Ex.: se eu criasse dentro de verDescricao, mas uma função dps do console.log()/ ou invocar uma função de qualquer outro objeto
nós teremos uma modificação de contexto, então se tentarmos utilizar o THIS dentro dessa função referenciar um atributo do objeto vamos ter um erro.


PARA UTILIZAR O OBJETO LITERAL NÃO PRECISAMOS DE UM PROCEDIMENTO DE DE INSTÂNCIA(NEW ALGO()) PORQUE O OBJETO JÁ ESTÁ DESCRITO DENTRO DE UMA VARIAVEL

utilizamos o operador "." ponto, para acessar os atributos e metodos desse OBJETO LITERAL
    ->Inclusive, podemos acessar tambem os atributos relativos a métodos (funções) desse OBJETO LITERAL.

    Metodos utilizam ()
*/

let produtoLiteral = {
    descricao: "Geladeira",
    preco: 1800,
    verDescricao: function(){
        console.log(`${this.descricao} por apenas $${this.preco} reais`)
        // function () { this.ALGUMACOISA}
    }
}

produtoLiteral.verDescricao()


/*
EXEMPLO DE RECUPERANDO DADOS DO SERVIDOR E MONTANDO OBJETO LITERAL

->Formulario é submetido ao Servidor
    ->Depois, recuperamos os dados do SERVIDOR e depois montamos um OBJETO LITERAL
        ->Pegamos esse OBJETO LITERAL e o convertemos para JSON
            ->Encaminhamos esse OBJETO JSON anexado a nossa REQUISIÇÃO HTTP e o enviamos de volta para o servidor, que finalmente armazena esses dados.

Poderiamos realizar esses procedimentos com uma CLASSE?
-Sim, mas não existe a necessidade de tirar uma classe apenas para um único formulário, a não ser que esse formulário sirva, por exemplo, de entrada para uma coleção de objetos.
    ->Aí sim faz sentido criar uma classe que vai instanciar vários objetos do mesmo tipo 

o objeto literal nada mais nada menos do que um objeto descritivo que combina pares de nomes e valores, sendo que esses valores podem ser: strings, valores numéricos, funções, arrays ou até mesmo outros OBJETOS LITERAIS

*/