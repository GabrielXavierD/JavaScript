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
            ->Com o ".forEach()" (função nativa dos ARRAYS) por ex. passando uma função de CALLBACK, podemos percorrer cada um dos elementos do ARRAY e recuperar seu respectivo valor.

    NOS ESTAMOS FAZENDO ISSO:
    function soma([1,2,3,4,5,6,7,8,9]){
        let resultado = 0;
        return resultado;

    MAS COM O REST(DE FORMA ENXUTA) FICA ASSIM:
    function soma(...parametroNumeros){
        let resultado = 0;
        return resultado;

-Outra possibilidade é: podemos passar parâmetros definidos e na sequência ter condições tambem de recuperar parâmetros indefinidos utilizando o REST.
    ->Sempre que houver valores indefinidos que podem ser encaminhados pra dentro das funções, podemos colocar esses PARÂMETROS INDEFINIDOS COMO SENDO OS ÚLTIMOS PARÂMETROS DA FUNÇÃO, de tal modo que dentro da função esses parâmetros poderão ser recebidos e unificados em uma estrutura de ARRAY



*/
function soma(...parametroNumeros){
    console.log(parametroNumeros);
    let resultado = 0;

    //arrow function: atribuindo os valores do ARRAY e os somando em RESULTADO -> o Resultado final é a soma dos itens do ARRAY
    parametroNumeros.forEach(valorEmCadaIndice => resultado += valorEmCadaIndice)

    //Retornando o valor atual de "resultado" pós soma dos valores do array
    return resultado; 
}

// Podemos passar varios numeros, sem um limite, já que eles são transformados em um ARRAY por causa do REST
console.log('soma do 1 ao 9:', soma(1,2,3,4,5,6,7,8,9) );





function multiplicador(multiplicador, ...valoresAMultiplicar){
    console.log(multiplicador);
    console.log(valoresAMultiplicar);
    
    let resultado= 0;

    // Cada um dos parametros serão multiplicados por 5 e atribuidos em resultado -> a soma dessas multiplicações será o resultado final -> Ex.: 5x5 = 25; 5x1 = 5 -> 25 + 1 = Resultado = 26
    valoresAMultiplicar.forEach(valorEmCadaIndice => resultado += multiplicador * valorEmCadaIndice);
    return resultado;
}

/*
O primeiro parametro da chamada da função será o parametro "multiplicador" 
e o restante será "valoresAMultiplicar" que será um array 
    -> por meio do OPERADOR SPREAD/REST (que nesse caso atua como REST e passa um ARRAY pra função)
*/
console.log( multiplicador(5, 7, 12, 3, 49) );