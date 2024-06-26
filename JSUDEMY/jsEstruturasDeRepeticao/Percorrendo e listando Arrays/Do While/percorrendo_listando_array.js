/*LOOP Do While
Percorrendo ARRAY com loop Do While
-Pode ser ARRAY SIMPLES ou ARRAYS MULTIDIMENSIONAIS
-Do While faz a verificação por ultimo, mas garante que o código rode pelo menos 1 vez


-O comum é que esses valores (dos Arrays) venham de algum lugar onde os dados estejam armazenados (BD).
-Podemos usar .length para sabermos o tamanho do ARRAY e atraves disso podemos estabelecer a condição que cria o criterio de parada do laço de iteração sobre o array

*/


var lista_frutas = []
    lista_frutas[0] = "Banana" 
    lista_frutas[1] = "Maçã"
    lista_frutas[2] = "Morango"
    lista_frutas[3] = "Uva"

document.write(lista_frutas.length + " é o tamanho do array <br>")



// Inicializa a variável de controle
var i = 0;

/* Loop do...while para percorrer o array
-Escreve o item atual do array no documento 
    -E depois Incrementa a variável de controle
*/

do {
    document.write(lista_frutas[i] + ", ");
    i++;
} while (i < lista_frutas.length); // Verifica se a variável de controle é menor que o tamanho do array