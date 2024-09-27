class Despesa {
    constructor(ano, mes, dia, tipo, descricao, valor) {
        this.ano = ano;
        this.mes = mes;
        this.dia = dia;
        this.tipo = tipo;
        this.descricao = descricao;
        this.valor = valor;
    }

    validarDados() {
        /* 
        VALIDAÇÃO DOS DADOS
        - Utiliza "for in" para verificar se todos os atributos do objeto estão preenchidos.
        - Acessa os valores dos atributos com "this[i]", verificando se estão indefinidos, vazios ou nulos.
        - Retorna false se algum valor não for válido, true caso contrário.
        */
        for (let i in this) {
            if (this[i] == undefined || this[i] == "" || this[i] == null) {
                return false;
            }
        }
        return true;
    }
}

class Bd {
    constructor() {
        /* 
        CONTROLE DO LOCALSTORAGE
        - Se não houver ID armazenado, inicializa com 0.
        */
        let id = localStorage.getItem("id");
        if (id === null) {
            localStorage.setItem("id", 0);
        }
    }

    getProximoId() {
        // Recupera o próximo ID incrementando o valor atual.
        let proximoId = localStorage.getItem("id");
        return parseInt(proximoId) + 1;
    }

    gravar(d) {
        /* 
        GRAVAÇÃO NO LOCALSTORAGE
        - Atribui um novo ID e armazena a despesa convertida para JSON.
        */
        let id = this.getProximoId();
        localStorage.setItem(id, JSON.stringify(d));
        localStorage.setItem("id", id);
    }

    recuperarTodosOsRegistros() {

        //array despesas
        let despesas = []

        // A cada iteração do nosso laço eu vou pegar a despesa recuperada do localStorage já convertida em um objeto literal e vou inserir dentro do ARRAY de "despesas"
        // Recupera e exibe todas as despesas armazenadas.
        let id = localStorage.getItem("id");
        for (let i = 1; i <= id; i++) {
            let despesa = JSON.parse(localStorage.getItem(i)); //STRING CONVERTENDO P/ OBJETO

            if (despesa === null) {

                //o continue quando identificado pelo interpretador dentro de uma estrutura de laço faz com que o laço avance para a interação seguinte desconsiderando tudo que estiver abaixo ->pulando portanto para a próxima iteração do laço antes que o push daquela despesa NULL seja realizada -> O resultado disso é o retorno de registros validos, ou seja, sem a presença registros vazios no retorno
                continue;
            }
            despesas.push(despesa)
        }
        return despesas //enviando array "despesas" com os registros validos
    }
}

let bd = new Bd();

function cadastrarDespesa() {
    // Captura os valores do formulário
    let ano = document.getElementById("ano").value;
    let mes = document.getElementById("mes").value;
    let dia = document.getElementById("dia").value;
    let tipo = document.getElementById("tipo").value;
    let descricao = document.getElementById("descricao").value;
    let valor = document.getElementById("valor").value;

    let despesa = new Despesa(ano, mes, dia, tipo, descricao, valor);


    if (despesa.validarDados()) {
        // Gravação e exibição de modal de sucesso
        bd.gravar(despesa);
        document.getElementById('modal_titulo').innerHTML = 'Registro inserido com sucesso';
        document.getElementById('modal_titulo_div').className = 'modal-header text-success';
        document.getElementById('modal_conteudo').innerHTML = 'Despesa foi cadastrada com sucesso!';
        document.getElementById('modal_btn').innerHTML = 'Voltar';
        document.getElementById('modal_btn').className = 'btn btn-success';//atribuindo classe

        //dialog de sucesso
        $('#modalRegistraDespesa').modal('show');
    } else {
        // Exibição de modal de erro
        document.getElementById('modal_titulo').innerHTML = 'Erro na inclusão do registro';
        document.getElementById('modal_titulo_div').className = 'modal-header text-danger';
        document.getElementById('modal_conteudo').innerHTML = 'Erro na gravação, verifique se todos os campos foram preenchidos corretamente!';
        document.getElementById('modal_btn').innerHTML = 'Voltar e corrigir';
        document.getElementById('modal_btn').className = 'btn btn-danger';

        //dialog de erro (JQUERY - $().modal("show") )
        $('#modalRegistraDespesa').modal('show');
    }
}

function carregaListaDespesa() {

    let despesas = Array()

    // Despesa recebe o array enviado pelo return -> Carrega todos os registros salvos no localStorage com o metodo ".recuperarTodosOsRegistros()"
    despesas = bd.recuperarTodosOsRegistros()

    console.log("Todos em um array: ", despesas)

    let listaDespesas = document.getElementById("bodyTabelaListaDespesas")
    /*percorrendo array despesas listando cada despesa de forma dinamica
    -usando for each = permite percorrer cada uma das posições do ARRAY recuperando o seu respectivo valor interno - esse valor é recuperado por meio de uma função

    -Para cada item percorrido, irá criar linha e coluna no tbody


    */
    despesas.forEach(function (d) {
        console.log("Todos separados: ", d)

        //criando linhas (tr - table row) - usando o metodo .insertRow() (faz parte do elemento tbody e permite a inserção de linhas)
        let linha = listaDespesas.insertRow()

        /*criando colunas (td - table data) - usando o metodo .insertCell() 
        -> Esse metodo espera um parametro para identificar qual é a coluna que deve ser criada 
        -> Ele faz parte do elemento tr e permite a inserção de colunas
        ->No nosso caso, as colunas são criadas de 0 até n - Exemplo abaixo:

        ‹tr›
            <td>15/03/2018</td>          ->Coluna 0 (é coluna mais à esquerda de uma linha)
            <td›Alimentação</td>         ->Coluna 1   
            ‹td›Compras do mes</td>      ->Coluna 2
            <td>444.75‹/td>              ->Coluna 3
                                         ->Coluna N (...)    
        </tr>

        Usando .innerHTML que representa o conteúdo interno de uma tag -> Logo, o innerHTML de uma td, nada mais é do que o conteúdo que aquela td encapsula

        podemos atribuir "d" que o parâmetro que estamos recuperando como o valor de cada uma das despesas 
        ->Usando o operador "." (ponto) para acessar seus atributos
        */

        linha.insertCell(0).innerHTML = `${d.dia} / ${d.mes} / ${d.ano}`

        /*como armazenamos o value selecionado de "tipo", vamos utilizar switch Case para atribuir na tabela o valor selecionado (Alimentação, Educação, Lazer...), em vez do value (1,2,3...)
        -Mas o value retornado está como STRING então devemos usar "" no case
            ->Se fosse necessario converter string para um inteiro utilizaria o metodo parseInt(d.tipo)

        */
//sobrepondo o atributo tipo do objeto, de numero para um texto selecionado
        switch (d.tipo) {
            case "1":
                d.tipo = "Alimentação"
                break;
            case "2":
                d.tipo = "Educação"
                break;
            case "3":
                d.tipo = "Lazer"
                break;
            case "4":
                d.tipo = "Saúde"
                break;
            case "5":
                d.tipo = "Transporte"
                break;
        }
        //atribuindo tipo, pós verificação no SWITCH CASE
        linha.insertCell(1).innerHTML = d.tipo

        linha.insertCell(2).innerHTML = d.descricao
        linha.insertCell(3).innerHTML = d.valor
    })
}

/*
LOCALSTORAGE:
- Utilizado para armazenar pequenas quantidades de dados (ex.: despesas) no navegador.
- Métodos úteis:
    .setItem(key, value) -> Armazena um dado. O valor deve ser uma string, por isso convertemos objetos para JSON.
    .getItem(key) -> Recupera o valor armazenado.
    - A conversão de objetos para JSON é feita com JSON.stringify(objeto) e a recuperação com JSON.parse(string).
*/

/* BOOTSTRAP MODAL:
- Ferramenta para exibir diálogos na interface, como mensagens de sucesso ou erro.
*/
