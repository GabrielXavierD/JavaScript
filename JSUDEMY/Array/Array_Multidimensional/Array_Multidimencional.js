/* Array Multidimencional ou Bidimensionais
-São Arrays de Arrays
->Através de uma variavel e um indice se acessa outro array
->Array que aponta pra outros arrays dentro dele
->Indices podem ser numericos ou textuais


Diferença com Array básico
->Através de uma variavel e um indice se acessa um determinado valor

Podemos ter mais de uma váriavel dentro do array
Ex.:
  Lista Aleatoria
  frutas  | Array() -> Maçã, Uva, Morango
  pessoas | Array() -> Gabriel, João, Lucas

Cada indice tem arrays com coisas diferentes dentro deles

-Quando usamos ARRAYS MULTI/BIDIMENSIONAIS: 
  Em consultas complexas de montagem de relatorios 
  ->É super comum, com base no retorno dos dados do banco de dados
  fazer um agrupamento das informações em arrays multidimencionais, facilita
  para que no momento da exibição desses dados, o template que representa o formulário
  seja muito mais facil lidar com as informações
*/


/* Formas de Declarar

 1. MANIPULANDO O INDICE DO ARRAY 
-> se usa Array() ou [] 
-> dps estabelece os indices especificos pela variavel "Pai", seguido pelo o indice (ARRAY) do "Filho" e dps o indice do elemento do "Filho"
-> length mostrará o proximo valor do indice se forem numericos e sequenciais, em caso de textos, mostra 0
*/

var listaCoisas = Array()
      listaCoisas["frutas"] = Array()
        listaCoisas["frutas"][1] = "Banana"; //indice 1 do array frutas ("filho") é Banana
        listaCoisas["frutas"][2] = "Maçã";
        listaCoisas["frutas"][3] = "Morango";
        listaCoisas["frutas"][4] = "Uva";

      listaCoisas["pessoas"] = []
        listaCoisas["pessoas"]["a"] = "Krystal"; //indice 1 do array pessoas ("filho") é Krystal
        listaCoisas["pessoas"]["b"] = "Boris";
        listaCoisas["pessoas"]["c"] = "Toni";
        listaCoisas["pessoas"]["d"] = "Gladys";

console.log(listaCoisas)
console.log(listaCoisas["frutas"][2]) // -> acessando indices especificos
console.log(listaCoisas["pessoas"]["a"]) // -> acessando indices especificos





/* 2. SEM/NÃO DA PRA MANIPULAR O INDICE DO ARRAY 
-> se usa Array() ou [] 
-> indice automatico inicia em 0 (não especifica o indice de cada um) e só precisa escrever o que contém dentro do array
-> length mostrará o tamanho do Array

*/

var listaCoisas2 = []                                                         // -> Array "Pai"
      listaCoisas2["frutas"] = ["Banana", "Maçã", "Morango", "Uva"]           // -> estabelecendo o conteudo do array frutas por [] -> indice inicia em 0
      listaCoisas2["pessoas"] = Array("Krystal", "Boris", "Toni", "Gladys")   // -> estabelecendo o conteudo do array pessoas por Array() -> indice inicia em 0

console.log(listaCoisas2)
console.log(listaCoisas2["pessoas"][2]) // -> acessando indices especificos
