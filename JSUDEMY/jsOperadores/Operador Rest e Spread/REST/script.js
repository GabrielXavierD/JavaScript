/*
Operador Rest e Spread
-o operador em si é constituído por "..." (três pontos) o que define ser Rest OU Spread é o contexto onde ele está sendo utilizado.
    SPREAD = quando ele está sendo utilizado para espalhar estruturas de dados
    REST = quando estamos juntando estruturas de dados 

Contexto REST
-Juntar essas estruturas de dados;
-Muito utilizado junto com as FUNÇÕES;
*/

/*FUNÇÃO COM PARAMETROS INDEFINIDOS
Nós podemos passar diversos parâmetros para atuar sobre esses parâmetros -> Somando cada um dos valores passados e na sequência fornecer um resultado 
    Usamos: ...NomeDoParametro

    Ele vai receber todos os parâmetros de uma vez só e vai juntar todos os parametros em uma ESTRUTURA DE ARRAY
        ->Ou seja, esse função vai receber UM ÚNICO PARAMETRO EM FORMATO DE ARRAY
        ->Nós podemos percorrer cada um dos índices do ARRAY de forma dinâmica.
            ->Com o ".forEach()" por ex. (função nativa dos ARRAYS), podemos percorrer cada um dos elementos do ARRAY e recuperar seu respectivo valor.

    NOS ESTAMOS FAZENDO ISSO:
    function soma([1,2,3,4,5,6,7,8,9]){
        let resultado = 0;
        return resultado;

    MAS COM O REST(DE FORMA ENXUTA) FICA ASSIM:
    function soma(...parametroNumeros){
        let resultado = 0;
        return resultado;

*/
function soma(...parametroNumeros){
    console.log(parametroNumeros);
    let resultado = 0;

    parametroNumeros.forEach(valorEmCadaIndice => resultado += valorEmCadaIndice) //atribuindo os valores do ARRAY e os somando em RESULTADO -> o Resultado final é a soma dos itens do ARRAY
    return resultado; //Retornando o valor atual de "resultado" pós soma dos valores do array
}

console.log('soma do 1 ao 9:', soma(1,2,3,4,5,6,7,8,9) );