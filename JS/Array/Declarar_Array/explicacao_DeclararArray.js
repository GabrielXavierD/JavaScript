/*ARRAY:
-São listas ordenadas;
-São variáveis que nos permitem relacionar itens associados a indices(chaves);
-Serve para armazenar de forma relacionada qualquer tipo de coisa a uma unica variavel (oq cria uma associação entre o valor adicionado e o seu indice);
-Podemos adicionar/remover/modificar itens(valor do ARRAY) sem problemas;
-O indice inicia em 0;
-A posição inicia em 1;
-O tamanho é quantidade_de_itens - 1;
-Podemos usar .length para sabermos o tamanho do ARRAY
-Seus valores podem ser STRINGS, BOOLEANOS, NUMERICO, VALORES MESCLADOS (NUMBER, STRING, BOOLEANO, ETC...) ETC...

-Imita listas da vida real, ex.:
    Lista de Frutas
      1. Banana     -> indice 0
      2. Maçã       -> indice 1
      3. Morango    -> indice 2
      4. Uva        -> indice 3

Uma variavel do tipo ARRAY vai permitir o armazenamento 
em uma única variável de toda essa relação de
frutas criando uma associação com cada uma das frutas.
Ou seja cada um dos itens do ARRAY com um respectivo índice.


Então fica facil atraves de um ARRAY "Lista de frutas", por exemplo,
falar que na posição 2 (indice 1) do nosso ARRAY está a maça
ou na posição 4 (indice 3) a uva.
*/


// Há varias formas de declarar/escrever um ARRAY

/* PODE MANIPULAR O INDICE DO ARRAY (1. e 2.)
  
1. Variavel recebendo um objeto do tipo Array e atraves da referencia da variavel, os seus indices
  -> Indentificando quais indices são os seus respectivos valores de acesso
  -> Caso tenha algum empty no console é a posição/index em falta, ex. ali iniciei em 1,
    então o indice 0 (que geralmente começa os arrays) estara vazio/empty
*/
var listaDeFrutas = Array()
listaDeFrutas[1] = "Banana";
listaDeFrutas[2] = true;
listaDeFrutas["x"] = "Morango";
listaDeFrutas[4] = 100;

console.log(listaDeFrutas);

/* Através da referencida da variavel do ARRAY podemos acessar um 
indice especifico dentro dele p/ recuperar o conteudo contido nesse indice*/
console.log(listaDeFrutas[2]);
console.log(listaDeFrutas["x"]);


// 2. [] -> É a mesma coisa do de cima, faz a msm coisa que atribuição de um objeto do tipo Array()
var listaDeFrutas2 = []
listaDeFrutas2[1] = "Banana";
listaDeFrutas2[2] = true;
listaDeFrutas2["x"] = "Morango";
listaDeFrutas2[4] = 100;

console.log(listaDeFrutas2);


/* NÃO DA PRA MANIPULAR O INDICE DO ARRAY (3. e 4.)

-Não se informa o indice/chaves dos elementos 
  -> Logo, o proprio JS faz a associação do indice (é numerico)
    -Que se inicia na posição 0... (indice)


3.  Variavel = Array() -> se passa os parametros dentro da declaração do Array()

              Posição/Indice:  0     1    2      3        4        -> há 5 itens e o tamanho total é 4*/
var listaDeCompras1 = Array("Planta", 1, true, false, "Coberta");
console.log(listaDeCompras1);
console.log(listaDeCompras1[4]);

// 4.  Variavel = [] -> se passa os parametros dentro da declaração do []*/
var listaDeCompras2 = ["Planta", 1, true, false, "Coberta"];
console.log(listaDeCompras2);
console.log(listaDeCompras2[0]);



let lista = ["maça", "banana", "uva"]
document.write("Array: ", lista)
document.write("<br>Quantidade de itens no Array/Última POSIÇÃO no array: ", lista.length, "<br>")

document.write("Último INDICE no array: ", lista.length -1, "<br>")