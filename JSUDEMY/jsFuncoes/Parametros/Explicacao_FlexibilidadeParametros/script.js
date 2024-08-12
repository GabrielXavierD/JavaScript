function soma(a, b) {
    // Corrigindo/tratando erro do undefined (-> NaN)
    b = b === undefined ? 0 : b;
    // se b for undefined é aplicado 0, se não aplica o valor dele mesmo
    return a + b;
}


/*Se passar MAIS PARAMETROS do que o numero esperado a receber
na função - O JS desconsidera os parametros adicionais */
document.write(soma(1, 1)) //1 e 1 aceitos
document.write(soma(2, 2, 4, 5)) //4 e 5 ignorados
document.write(soma(2)) //passando menos parametros -> undefined -> Erro NaN (not a number) -> return a + undefined = retorna NaN;
document.write(soma()) //não passando os 2 parametros -> undefined -> Erro NaN (not a number) -> return undefined + undefined = retorna NaN;

/* É possivel trabalhar com parametros variaveis, ou seja,
   passar uma quantidade indefinida de parametros
   dentro da função e receber na função
 
Ex.: 
function soma(?) {
    return;
}
    soma(?) -> chamada da função

-> Para fazer isso se usa ARRAY e loops/laços de interação

 */