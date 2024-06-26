/*LOOP WHILE
Percorrendo ARRAY com loop WHILE
-Pode ser ARRAY SIMPLES ou ARRAYS MULTIDIMENSIONAIS

-O comum é que esses valores (dos Arrays) venham de algum lugar onde os dados estejam armazenados (BD).
-Podemos usar .length para sabermos o tamanho do ARRAY e atraves disso podemos estabelecer a condição que cria o criterio de parada do laço de iteração sobre o array

*/


var lista_frutas = []
    lista_frutas[0] = "Banana" 
    lista_frutas[1] = "Maçã"
    lista_frutas[2] = "Morango"
    lista_frutas[3] = "Uva"

document.write(lista_frutas.length + " é o tamanho do array <br>")


/*Enquanto a variavel (0) for menor que o tamanho do array (4) faça

-o criterio de parada é o 4 (tamanho do array)
    ->quando y for = a 4 ele sai do loop
-estabelecendo criterio p/ sair do laço com y++


-lista_frutas[y] -> utilizamos o Y como indice, pois na sua primeira iteração
ele vale 0, entao mostra o que está na primeira posição do Array ("Banana")
e depois vai mostrando as outras, de acordo com que vai adicionando +1
até o loop parar.

    -É como se a cada iteração eu fizesse:
     document.write(lista_frutas[0])
     document.write(lista_frutas[1])
     document.write(lista_frutas[2])
     document.write(lista_frutas[3])
    (e mudando os valores do indice, mas no caso, o y que vai fazer isso, pois ele inicia em 0 e vai sendo adicioando +1 a cada repetição do loop)
*/

var y = 0;
while(y < lista_frutas.length){
    document.write(lista_frutas[y] + ", ")
    y++ 
}

