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




/*OBJETOS LITERAIS QUE TAMBÉM SÃO CONHECIDOS COMO OBJETOS ESTÁTICOS.

-É um recurso que depende de um certo conceito BASEADO NO PARADIGMA DE ORIENTAÇÃO A OBJETOS;
-Na prática, ele é um objeto que é descrito dentro do nosso código;
-Objetos literais podem ter o valor dos seus respectivos atributos modificados;
-Podemos atribuir dinamicamente os atributos/conjuntos para PAR/NOME: VALOR dos Objetos literais.
    ->Podemos atribuir dinamicamente as FUNÇÕES dos OBJETOS LITERAIS tambem


Para compreender isso melhor eu vou fazer uma comparação entre um OBJETO "PRODUTO" CRIANDO ESSE OBJETO
ATRAVÉS DA NOTAÇÃO DE CLASSE e depois CRIANDO ESSE OBJETO ATRAVÉS DA NOTAÇÃO DE OBJETO LITERAL.

NOTAÇÃO DE CLASSE: sintaxe de classe disponível no ES6 -> nós criamos uma classe e instanciamos um objeto com base na classe;
NOTAÇÃO DE OBJETO LITERAL: nada mais é do que um objeto descrito dentro do código.


HÁ 2 FORMAS DE ESCREVER OBJETOS:
     -POR CLASSE OU POR OBJETO LITERAL
    


     
OBJETO LITERAL
     ->Os OBJETOS LITERAIS são frequentemente utilizados, já que nem sempre existe a necessidade da CRIAÇÃO DE UMA CLASSE para estruturação de um OBJETO;

     ->Os OBJETOS LITERAIS são mais flexíveis e mais rápidos, pois podem ser criados em qualquer lugar do código, sem a necessidade de uma classe e instanciar um objeto com base na classe;

     ->Geralmente objetos literais são objetos únicos dentro da nossa aplicação;

    ->Pode ter qualquer nome;
    ->Precisamos utilizar {} dentro da variavel;
    ->Dentro das {} definimos pares de nomes e valores;
        ->Esses pares funcionam como atributos do objeto.
        ->Os métodos tambem são definidos utilizando a notação de par ->há o nome do método e o valor que, no caso, é a função (ação que ele irá executar);

    ->Esses conjuntos de par, nome e valor são separados por virgula;
        -> Dessa forma o interpretador do JavaScript consegue identificar quando um par termina. 

    ->Nome e o valor são separados através de um operador dois pontos ":";
        ->Dessa forma o interpretador JavaScript compreende que A ESQUERDA ESTÁ O NOME e A DIREITA ESTÁ O VALOR que deve ser ATRIBUÍDO A AQUELE NOME.

    *O nome a esquerda = chave, atributo ou nome
    *Valor = é o valor atribuido a chave (atributo ou nome)
    *Pares = forma de se referir a Chave e o seu Valor (formam um par)

    ->Podemos ATRIBUIR DINAMICAMENTE PROPRIEDADES/ATRIBUTOS e METODOS a OBJETOS LITERAIS, pasta usar a sua referencia e atribuir com o operador "." (ponto) 
     Ex.: produtoLiteral.cupom = "50% de desconto"  => Atribuindo uma nova propriedade/atributo
          produtoLiteral.anuncio = () => console.log("Compre já esse produto! Em promoção!") => Atribuindo uma nova função/metodo

    ->PARA UTILIZAR O OBJETO LITERAL NÃO PRECISAMOS DE UM PROCEDIMENTO DE DE INSTÂNCIA ( new AlgumaCoisa() ) PORQUE O OBJETO JÁ ESTÁ DESCRITO DENTRO DE UMA VARIAVEL
        ->Utilizamos o operador "." (ponto) para acessar os atributos e metodos desse OBJETO LITERAL
            ->Ex.: pessoa.nome -> atributo "nome" de "pessoa"

        ->Inclusive, podemos acessar tambem os atributos relativos a métodos (funções) desse OBJETO LITERAL - os Metodos utilizam ()
            -> Ex.: pessoa.falar() -> metodo "falar()" de "pessoa"



            
O USO DO THIS NOS OBJETOS LITERAIS:            
    -Nos Objetos Literais tambem utilizamos o THIS, que ajusta o contexto da variavel que estamos utilizando:
        ->Ou seja, no console.log() -> "descricao" e "preco", são variaveis do contexto do objeto "produtoLiteral"
            -> Ou seja, o THIS ajusta esse contexto 

        ->Caso em um METODO seja colocado somente o nome das variaveis sem o "THIS" (ex.: "nome" em vez de "this.nome"), o interpretador JS vai entender que essas variaveis são do contexto da FUNÇÃO (que são variaveis criadas na função) e não do contexto do OBJETO LITERAL (criadas no OBJETO LITERAL) 
            -> E ainda por cima irá dar um erro, já que não estamos passando essas variaveis por parametro (no caso do exemplo ali embaixo). logo, devemos utilizar o THIS
                ->No nosso caso, queremos a "descricao" e o "preco" vindas do CONTEXTO DO OBJETO "produtoLiteral", então por isso utilizamos o THIS.

*Porem o THIS pode sofrer variação de contexto
Ex.: se eu criasse dentro de "verDescricao", mais uma função dps do console.log()/ou invocar uma função de qualquer outro objeto,
nós teremos uma modificação de contexto. Então se tentarmos utilizar o THIS dentro dessa NOVA FUNÇÃO, ao referenciar um atributo do OBJETO LITERAL vamos ter um erro.



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
console.log(produtoLiteral.descricao)

// MODIFICANDO VALORES
produtoLiteral.descricao = "Celular"
console.log('descricao atualizada: ', produtoLiteral.descricao);

produtoLiteral.preco = 2000
console.log('preco atualizado: ', produtoLiteral.preco);

produtoLiteral.verDescricao()


// ADICIONANDO UM NOVO ATRIBUTO/CONJUNTO PARA PAR/NOME: VALOR
produtoLiteral.cupom = "50% de desconto"
console.log('produtoLiteral: ', produtoLiteral);

// O mesmo vale para as FUNÇÕES dos OBJETOS LITERAIS -> INCLUINDO NOVAS FUNÇÕES (pode ser função anonima, arrow function, function nome() etc...):
produtoLiteral.anuncio = () => console.log("Compre já esse produto! Em promoção!")
produtoLiteral.anuncio()





/*
EXEMPLO DE RECUPERANDO DADOS DO SERVIDOR E MONTANDO OBJETO LITERAL
   
    
    Não existe a necessidade de criar uma coleção de objetos literais, por exemplo, é muito comum dentro
    das nossas aplicações termos formulários que são submetidos para o servidor, então, recuperamos os dados do formulário e montamos o objeto literal na sequência que nós pegamos esse objeto 


->Formulario é submetido ao Servidor
    ->Depois, recuperamos os dados do SERVIDOR e depois montamos um OBJETO LITERAL
        ->Pegamos esse OBJETO LITERAL e o convertemos para JSON
            ->Encaminhamos esse OBJETO JSON anexado a nossa REQUISIÇÃO HTTP e o enviamos de volta para o servidor, que finalmente armazena esses dados.

Poderiamos realizar esses procedimentos com uma CLASSE?
-Sim, mas não existe a necessidade de tirar uma classe apenas para um único formulário, a não ser que esse formulário sirva, por exemplo, de entrada para uma coleção de objetos.
    ->Aí sim faz sentido criar uma classe que vai instanciar vários objetos do mesmo tipo 

o objeto literal nada mais nada menos do que um objeto descritivo que combina pares de nomes e valores, sendo que esses valores podem ser: strings, valores numéricos, funções, arrays ou até mesmo outros OBJETOS LITERAIS

*/