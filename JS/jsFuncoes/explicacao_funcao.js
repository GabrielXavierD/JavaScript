/* FUNÇÕES
-Pode ser trabalhado c/ tds os recursos do JS dentro das funções = if/else, colocar outra função dentro dela etc;
-São subprogramas dos nossos programas;
-A função precisa ser chamada - indica que será usada;
-Elas não precisam ser declaradas antes das suas respectivas chamadas;
-Através da chamada das funções podemos recuperar essas instruções para reutiliza-las em varias partes das aplicações;
-Tem o objetivo de encapsular um determinado bloco de códigos que possui um objetivo bem definido;
-É uma boa pratica criar o nome da função seguindo: verbo_no_infinitivoSubstantivo -> Ex.: calcularArea, encerrarJogo, abrirComentarios...

-Há 2 tipos de funções: ->void = apenas processa uma logica quando chamada e não retorna nenhum valor;
                        ->return = processa a logica e da um retorno de um valor/variavel p/ o script que efetuou a chamada da função
                         e o script solicitante poderá ter a posse do valor retornado pela função continuar o seu respectivo processamento;

                  return pode ser = return VARIAVEL;
                                    return true ou false;
                                    return "TEXTO";
                                    return NUMERO;
                                    return a+b;
                                    (...)
                        -> o retorno pode ser associado a variavel do script que faz a chamada da função (no caso, a var area)
                            Ex.: let area = calcularArea(15, 25).

                        
-Tipos de ESCOPO: -> Escopo Global = Variáveis definidas fora de qualquer função têm escopo global e são acessíveis de qualquer lugar no código;
                  -> Escopo Local (ou de Função) = Variáveis definidas dentro de uma função têm escopo local e são acessíveis apenas dentro dessa função.


-Parametros (ou argumentos) -> entrada de dados p/ função 
                            -> pode ser vazio ou passar quantos necessarios (separados por ,)
                            -> parametros são variaveis
          
Estrutura da FUNÇÃO
function nomeDaFuncao(parametros){

}

function nomeDaFuncao2(){

}


Estrutura da CHAMADA DE FUNÇÃO
calcularArea(15, 25)

(15 = largura;
25 = comprimento;)

*/



// Função do tipo VOID
function mostrarMensagem() {
    console.log("Olá, esta é uma função do tipo void!");
}

// Função do tipo RETURN
function calcularArea(largura, comprimento){
    let area = largura*comprimento;
    return area;
}