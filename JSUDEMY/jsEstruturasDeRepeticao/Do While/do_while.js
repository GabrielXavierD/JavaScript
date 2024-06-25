/*LOOP DOWHILE
Sintaxe:
do{
  //CODIGOS
  //incremento/decremento, break ou continue

}while(condicao de parada)


-1º é interpretado o bloco DO e depois interpreta o WHILE
-Só no término do bloco de códigos é que é feito o teste/a instrução WHILE com a condição.
-Independente do conteudo estabelecido dentro do while, o conteudo dentro de DO
será executado
-Do While -> garante que o codigo será executado pelo menos uma vez

*/




// Faça TAL COISA enquanto TAL CONDIÇÃO
var x = 1

do{
  document.write(x + "<br>")
  x++
} while (x <= 10)
