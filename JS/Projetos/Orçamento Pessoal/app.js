class Despesa{
    constructor(ano, mes, dia, tipo, descricao, valor){
        this.ano = ano;
        this.mes = mes;
        this.dia = dia;
        this.tipo = tipo;
        this.descricao = descricao;
        this.valor = valor;
    }
    validarDados(){
        /*
VALIDAÇÃO DOS DADOS (+ CONTROLE E SEGURANÇA E + INTERAÇÃO COM O USUARIO)
-Verificando se os dados foram todos preenchidos corretamente com o metodo validarDados()
        
        FOR IN
        - Recupera as (i) indice de um array ou os atributos de um objeto, não o valor em si, mas os indice/atributo e a partir dele podemos acessar os respectivos valores 
        - Esse atributo é colocado dentro de uma variável (i) 
        - Como vou percorrer os atributos desse objeto e esse metodo já está dentro dele, utilizamos o THIS 
            -> i = indice em tal posição (ano,mes, dia etc...)
            ->Para acessar o VALOR dos atributos em um objeto, usamos a notação semelhante ao do array: this[i] (valor dentro do indice/atributo tal) e usar this.atributo (usando operador ponto) seria a mesma coisa. Ex.: 2024, Janeiro, 10 etc...
        
        sempre que a função/metodo encontra o "return" ela é finalizada e retorna algo para quem fez a chamada
        verificações: testando se o atributo esta undefined, vazio ou null -> se sim, retorna falso, se não retorna true (e caso algum desses dados estiverem preenchidos)
        */
        for(let i in this){
            // console.log(i, this[i])
            if( this[i] == undefined || this[i] == "" || this[i]== null){
                return false
            }
            return true
        }
    }
}

//o objeto Bd que será responsável por controlar a nossa comunicação com o localStorage e a lógica de inclusão de documentos com base em um índice produzido de forma dinâmica.
class Bd{
    //Para termos um proximo ID (e que ele não seja sobreposto por outro), precisamos ter um ID incial:
    //então vamos verificar se existe, se não existe, setamos um id inicial 0
    constructor(){
        let id = localStorage.getItem("id")
        if(id === null){
            //chave onde quer inserir e o seu valor
            localStorage.setItem("id", 0)
        }
    }
    getProximoId(){
        //getItem() serve para recuperar um dado dentro do localStorage -> no caso, quero recuperar o ID -> sempre que ele for executado, pegará o id atual e atribuirá +1.
        let proximoId = localStorage.getItem("id")
        return parseInt(proximoId) + 1
    }

    gravar(d){ //recebeu objeto despesa
        //sempre quando gravar for executado nós vamos pegar o próximo ID e  na sequencia vamos atualizar o documento/chave ID com o idNovo gerado 
        let idNovo = this.getProximoId()
        //a key será id e o seu valor será o Objeto despesa convertido para JSON
        localStorage.setItem(idNovo, JSON.stringify(d))
        localStorage.setItem("id", idNovo)
    }
}

let bd = new Bd()

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
    
        //VALIDAÇÃO DOS DADOS (+ CONTROLE E SEGURANÇA E + INTERAÇÃO COM O USUARIO) - Verificando se os dados foram todos preenchidos corretamente com o metodo validarDados()


        let modal = document.getElementById("registraDespesa")
        let modalBody = document.getElementById("modalbody")
        let btnModal =  document.getElementById("btnModal")
        let modalH5 = document.getElementById("modalH5")


        if(despesa.validarDados()) {
            bd.gravar(despesa); //-> executando o metodo gravar de Bd e passando o objeto despesa
            //dialog  de sucesso
    
            document.getElementById('modal_titulo').innerHTML = 'Registro inserido com sucesso'
            document.getElementById('modal_titulo_div').className = 'modal-header text-success'
            document.getElementById('modal_conteudo').innerHTML = 'Despesa foi cadastrada com sucesso!'
            document.getElementById('modal_btn').innerHTML = 'Voltar'
            document.getElementById('modal_btn').className = 'btn btn-success'
    
            //dialog de sucesso
            $('#modalRegistraDespesa').modal('show') //selecionando a div com modal e exibindo para o usuario
        } else {
            
            document.getElementById('modal_titulo').innerHTML = 'Erro na inclusão do registro'
            document.getElementById('modal_titulo_div').className = 'modal-header text-danger'
            document.getElementById('modal_conteudo').innerHTML = 'Erro na gravação, verifique se todos os campos foram preenchidos corretamente!'
            document.getElementById('modal_btn').innerHTML = 'Voltar e corrigir'
            document.getElementById('modal_btn').className = 'btn btn-danger'
    
            //dialog de erro
            $('#modalRegistraDespesa').modal('show') 
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




/*BOOSTRAP MODAL 
-Exibe uma div em destaque na tela e podemos inserir informações nela
*/