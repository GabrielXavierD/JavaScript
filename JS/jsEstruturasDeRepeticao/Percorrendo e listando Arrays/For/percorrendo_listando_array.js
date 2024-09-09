/*LOOP FOR
Percorrendo ARRAY com loop FOR
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


// Loop for para percorrer o array
// Podemos criar a variavel fora tambem, tipo, var i = 0 e usar só o i no loop for

for (var i = 0; i < lista_frutas.length; i++) {
    document.write(lista_frutas[i] + ", ");   // Escreve o item atual do array no documento    
}