/*FOR EACH
-Em PHP é um comando de repetição/laço/loop
-Em JS ele é uma função do Prototype do objeto ARRAY
    -> Ou seja, no contexto do JS ele é aplicado a ARRAYS, ele funciona como uma função.

-Geralmente usado pra percorrer Arrays    
    ->Ele não é bem uma estrutura de repetição porém ele serve para esse propósito, funciona de forma parecida ao FOR IN.

-É um recurso que permite que possamos navegar por elementos do ARRAY que tenham CHAVES(indices) customizadas/não sequenciais
-Ele atua somente sobre valores numéricos partindo do zero, não precisa ser sequencial, mas, precisa ser númerico, iniciando em 0
 ou >=0.
    ->Caso contrário ele desconsidera aquela posição do Array.

-É uma função que recebe como parâmetro uma função anônima (função sem nome) ou uma variavel de uma função (tecnica wrapper)

SINTAXE - Versão 1
nomeDoArray.forEach(função_callback(valor, indice, array){
    //logica
})


SINTAXE - Versão 2 - TÉCNICA WRAPPER
nomeDoArray.forEach(variavel_função_callback)

  ->A VERSÃO 2 É UMA BOA PRÁTICA; 
      TORNA O CÓDIGO MAIS LEGIVEL;
      PODEMOS REUTILIZAR A VARIAVEL P/ TRATAR OUTROS ARRAYS;
      DEIXA O CÓDIGO MENOS BAGUNÇADO.



-O forEach() aguarda uma FUNÇÃO DE CALLBACK que vai indicar ao forEach como ele tem que atuar em cada um dos indices do Array
-Os valores passados para os PARAMETROS DA FUNÇÃO DE CALLBACK são formados dentro da função forEach e dps vão p/ os parametros da FUNÇÃO DE CALLBACK

-a função de  callback é executada a cada indice do ARRAY (for Each) -> Ex.: se tem 5 itens, executa 5x e na 6 execução ele para
    -Interrompe quando a posição seguinte é UNDEFINED (não existe)

-função_callback(valor, indice, array) -> parametros nessa sequencia, respectivamente.


-Caso seja necessario modificar algum indice, podemos atuar sobre o terceiro parametro no caso, "array" 
-> recuperamos o Array e atuamos sobre ele -> para acessarmos o indice, basta utilizarmos o parametro "indice" e assim por diante.
*/




// SINTAXE VERSÃO 1:
var listaConvidados = ["Jorge", "Jamilton", "José", "Ana", "Maria"] 
document.write(listaConvidados + "<br>")
document.write("ITEM 4 ANTES: " + listaConvidados[4] + "<hr><br>")


listaConvidados.forEach(function(valor, indice, array){

    document.write("Valor: " + valor + " | Indice: " + indice + "<br>" + "Array Completo: " + array + "<br><hr>") //tem 5 itens, logo executa 5x

    /* Atuando sobre algum valor e o substituindo 
    ->Ao atualizar um valor, o console mostra o valor atual ao clicar na seta de expandir, mesmo mostrando o array na versao antiga
    ->Acessamos o parametro array(que é o array que estamos percorrendo) e o indice(que terá o valor substituido): */
    if(valor == "Maria"){
        document.write("ALTERANDO VALORES DA LISTA: <br>")
        console.log(listaConvidados)

        document.write("Lista Antes: " + listaConvidados + "<br>")
        array[indice] = "Lucas"; //indice MARIA sendo substituido por LUCAS

        document.write("Lista Atualizada: " + listaConvidados + "<hr><br>")
        console.log(listaConvidados)

        document.write("ITEM 4 DEPOIS: " + listaConvidados[4] + "<hr><br>")
    }

})


// Como em JS os parametros das funções são VARIAVEIS, não necessariamente precisamos passar aqueles 3 parametros p/ função:
listaConvidados.forEach(function(valor){
    document.write("1 PARAMETRO: Valor: " + valor + "<br>") //tem 5 itens, logo executa 5x
})

listaConvidados.forEach(function(valor, indice){
    document.write("<br>2 PARAMETROS: Valor: " + valor + " " + indice) //tem 5 itens, logo executa 5x
})




// SINTAXE VERSÃO 2:
var percorreArray = function(valor, indice, array){
    document.write("<style> p{ color:blue; font-weight:bold; } </style>")
    document.write("<p>Valor: " + valor + "<br>Indice: " + indice + "<br>Array Completo: " + array + "</p>")
} 

document.write("<br><br>SINTAXE VERSÃO 2:")
listaConvidados.forEach(percorreArray)




// PROBLEMAS -> Quando o array não é sequencial >=0 (iniciado em 0, 1, 2, 3...)
document.write("<br><hr>PROBLEMAS")
var listaMercado = []
        listaMercado[0] = "Escova"
        listaMercado[2] = "Arroz"
        listaMercado["x"] = "Feijão"
        listaMercado[29] = "Carne"
        listaMercado[-4] = "Alface"
        listaMercado["cozinha"] = "Panela"
        listaMercado[false] = "Garfo"



listaMercado.forEach(percorreArray)

