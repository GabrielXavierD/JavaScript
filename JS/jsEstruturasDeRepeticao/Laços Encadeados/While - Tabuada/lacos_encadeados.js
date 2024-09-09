/*LAÇOS ENCADEADOS
-São laços de repetição dentro de outro laço de repetição

Ex.: Tabuada 1 a 10
*/


y = 1;
while (y <= 10) {
/*iniciando o x dentro do while pai, pois aqui, quando y for incrementado, o x irá resetar/iniciar novamente em 1, assim poderá entrar no seu while e ir até 10. Caso ele fosse declarado ali fora, junto com o y, o x iria até o 10 uma unica vez e nunca mais iria entrar no seu loop while,
já que sempre estaria com 10 e o criterio de parada ali é 10, então o while filho não iria mais funcionar e funcionaria somente uma vez */
  x = 1; 
  while (x <= 10) {
    document.write(y + " x " + x + " = " + (y * x) + "<br>");
    x++;
  }
  y++;
  document.write("<br>")

}