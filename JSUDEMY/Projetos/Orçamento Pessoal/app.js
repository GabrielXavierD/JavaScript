function cadastrarDespesa(){
    let ano = document.getElementById("ano")
    let mes = document.getElementById("mes")
    let dia = document.getElementById("dia")
    let tipo = document.getElementById("tipo")
    let descricao = document.getElementById("descricao")
    let valor = document.getElementById("valor")

    let despesa = new Despesa(
        ano.value, mes.value,
        dia.value, tipo.value,
        descricao.value, valor.value);
    
    gravar(despesa);


}


class Despesa{
    constructor(ano, mes, dia, tipo, descricao, valor){
        this.ano = ano;
        this.mes = mes;
        this.dia = dia;
        this.tipo = tipo;
        this.descricao = descricao;
        this.valor = valor;
    }
}


/*
Como a nossa aplicação o orçamento pessoal ela não é uma aplicação complexa nós vamos apenas cadastrar despesas e recuperar essas despesas Então nós podemos tranquilamente utilizar o recurso de LocalStorage que já será suficiente




Mas se eu fosse uma aplicação foram aqui de mais complexa que envolve a necessidade de armazenamento de dados maiores
Nós poderíamos utilizar por exemplo o WEB SQL.


acessando o recurso de LocalStorage -> Essa instrução retorna um objeto de manipulação do localStorage do Browser 
-> E aí nós temos acesso a alguns métodos: 
    
.setItem(identificação do objeto a armazenar no LocalStorage (KEY), dado a armazenar(JSON) )
    ->Sepre quando algo for inserido com .setItem() o dado irá se sobrepor às já existentes (se tiver)

    Sendo que esse dado precisa ser encaminhado através de uma anotação JSON.
    Como nós estamos trabalhando com um objeto literal nós precisamos converter esse objeto literal para
    JSON
        ->esse tipo de tratativa de conversão de objeto literal para JSON e vice versa é muito comum em JavaScript 

Por enquanto estamos recebendo um objeto literal dentro da função (com o parametro "despesas") e precisamos transformar esse objeto literal em notação JSON.
    ->Para fazer isso nós vamos utilizar o objeto nativo do JavaScript que é justamente o objeto "JSON" e a partir dele nos podemos executar a função .stringfy() passando por parâmetro com o objeto literal que queremos converter para JSON


precisamos implementar uma lógica de criação de um identificador único para cada registro feito dentro de LocalStorage.

====================================================
OBJETOS LITERAIS e JSON:
-A forma de escrita dos 2 é muito semelhante
-São recursos utilizados em contextos diferentes.
-É comum trabalharmos com os 2 ao mesmo tempo


JSON
-é similar a notação que utilizamos para a definição de objetos literais
-Porém, JSON é uma STRING: aspas simples e dps {} -> dentro, os pares/chave valor, são passados dentro de aspas simples ou aspas duplas (dependendo de qual aspas estamos utilizando para encapsular esse conteudo, no caso '""' e "''")
    ->Tanto a chave quanto o valor devem estar encapsulados por aspas
    ->Os ":" não precisam estar entre aspas e a virgula tambem (que separa a combinação par/chave valor)
    ->Quando a propriedade recebe valor númerico ela não precisa ser encapsulada por aspas


a instância de um objeto existe apenas dentro da instância de uma aplicação. Quando a nossa aplicação ela precisar se comunicar seja com o servidor ou seja com outras aplicações
como é o caso aqui do localStorage. 
Então a nossa aplicação está se comunicando com uma aplicação interna do BROWSER e embora o localStorage
seja é uma aplicação interna do Browser, ela é uma aplicação EXTERNA a nossa aplicação web

A nossa aplicação web e consequentemente nós precisamos se comunicar nesses casos de comunicação entre
aplicações ou até mesmo com um servidor.


Nós precisamos estabelecer um protocolo de comunicação e nesse protocolo nós precisamos transitar os dados porém objetos literais eles não podem ser transitados nesse processo só porque eles são objetos sendo que esses objetos existem apenas na instância da aplicação.

Logo nós precisamos de alguma forma transcrever esse objeto em uma notação de texto que é o caso do JSON Para que esse texto seja anexado a essa comunicação que será feita, seja com o próprio BACKEND da aplicação web ou com outras aplicações.
	->O Json portanto, atua nesse meio de campo de comunicação. Ele não é o único recurso que pode ser utilizado para isso mas, é um recurso que tem se destacado muito
justamente porque o JSON é suportado nativamente pelas linguagens de programação em geral como por ex. JS e facilmente nós podemos converter uma string JSON em um objeto que pode ser manipulado pela linguagem e vice versa.


Então olha só é nesse ponto que entra uma biblioteca importante do JavaScript que é a biblioteca JSON e A partir dela nós podemos utilizar o método .stringfy() que converte um objeto literal por exemplo "produto" diretamente para uma string JSON sem a necessidade de ter que fazer isso dentro do nosso código ou concatenação de strings.

 
Podemos receber esse JSON e converter esse JSON para um objeto literal, basta utilizar a biblioteca JSON e executar o metodo .parse(), passando a STRING que representa um JSON VALIDO, no caso "produtoJSON"


Na prática, recuperamos um objeto literal, um objeto instanciado dentro da aplicação e no processo de utilização desse objeto na função setItem() que contém um protocolo que vai abrir uma comunicação com o localStorage nós estamos encaminhando um JSON
    -Por que? Porque o que vai nesse protocolo de comunicação não é a instância do objeto e sim a JSON desse objeto 

    De tal modo que ao ser recuperado dentro da aplicação no localStorage a aplicação tem se necessário a inteligência de fazer o PARSE dessa informação convertendo essa informação em um novo objeto.
*/

function gravar(d){
    localStorage.setItem("despesa", JSON.stringify(d))
}