/*
TEMPLATE STRING =  `${}`

-É um recurso que permite dentro de uma string abrir uma janela para o processador JavaScript interpretar toda a codificação inserida entre as chaves {}  e aí o resultado dessa interpretação é automaticamente interpolado com as demais strings do contexto;


-É uma boa prática utilizar TEMPLATE STRING em vez de concatenação com +, pois é mais enxuta e deixa mais legivel;

-Com ela não precisamos dar \n pra dar quebra de linha, podemos simplesmente quebrar a linha com o enter
    -> no caso da concatenação com "+"(com aspas) aí precisamos usar o \n 
    -> caso use as backticks ``, ela aceita quebra de linha com enter

-Pode realizar calculos matematicos dentro do TEMPLATE STRING
-Podemos executar funções dentro do TEMPLATE STRING

*/

let nome = "Gabriel";

console.log(`Olá 
${nome}, 
tudo bem com você? =D`);

console.log(`7 + 7 = ${7+7}`); //o resultado da operação é concatenada com o restante da String envolvida com os backticks



function calculo(x,y){
    return x*y
}

console.log(`O resultado da multiplicação é ${calculo(2,3)}`); //chamando a função e passando os seus parametros para realizar o calculo, dentro do TEMPLATE STRING