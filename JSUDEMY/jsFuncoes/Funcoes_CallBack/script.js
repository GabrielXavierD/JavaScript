/*
Funções de callback = é a passagem de funções como parâmetro para outras funções.
    -Objetivo: após a finalização da função ter condições de chamar a função
               encaminhada por parâmetro dando continuidade no processamento da logica da
               aplicação. Comum em aplicações com processamento ASSINCRONO

->Podemos declarar funções dentro da chamada; 
->Funções de callback são funções anonimas;
->Mas dependendo do tamanho/complexidade da função ficará dificil de ler/fazer manutenção em uma função dentro da chamada 
    -Então precisamos usar a tecnica wrapper -> declaramos uma variavel com uma função anonima e passamos a variavel na chamada

->Ao chamar as variaveis com as funções dentro, não usamos(), somente colocamos o nome delas
    -Se colocar (), o JS entende q essa chamada deve executar
     e o valor gerado com ela deve ser encaminhada para o parametro,
     mas não é isso que queremos, queremos passar a FUNÇÃO como PARAMETRO, então passamos somente a sua variavel (a referencia dessa função)


exibirArtigo(1, function(){...}, function(){...});

*/


// Função exibirArtigo: Recebe um id e 2 funções de callback
function exibirArtigo(id, callbackSucesso, callbackErro){
    // Exemplo ficticio: logica: recuperar id via requisição http

    /*Colocando true pra testar como seria, como já esta determiando true,
      vai ir pra callbackSucesso, nesse caso, precisaria de uma logica, melhor,
      só estou testandoCaso a recuperação tenha sido um sucesso, 
      faça: chame a função callbackSucesso passando titulo e a descrição
      */

    if(false){ 
        callbackSucesso(prompt("Digite um titulo:"), prompt("Digite a descrição:")); //titulo, descrição
    }else{ //caso de erro (false):
        callbackErro("Erro ao recuperar os dados");
    }
}

var callbackSucesso = function(titulo, descricao){ //recebe titulo e descricao dali de cima e faz algumas formatações
    document.write("<h1>" + titulo + "</h1>");
    document.write("<hr>");
    document.write("<p>" + descricao + "</p>");
}
var callbackErro = function(erro){ //recebe o erro dali de cima (no caso, o texto "Erro ao recuperar os dados", é só um ex., precisaria melhorar)
    document.write("<p><b>Erro:</b> " + erro + "</p>");

}
// Chamando a função "pai" e passando as funções "filhas" para que a logica feita dentro da função "pai" seja realizada corretamente
exibirArtigo(1, callbackSucesso, callbackErro);
