/*

Sintaxe

while(condicao de parada){


 incrementar/decrementar (ou break ou continue)
}

-Devemos sempre incrementar ou decrementar na variavel p/ funcionar corretamente e evitar um loop infinito
-Podemos usar break (igual no switch case) p/ interromper completamente o laço while
-Podemos usar continue p/ finalizar o passo atual e vai p/ o passo seguinte

Formas de incrementar (++ ou +)/decrementar (-- ou -)

var++              -> adiciona +1, não pode "personalizar", adiciona somente +1
var = var + 1      -> adiciona +1, mas nesse modo pode "personalizar" quanto será adicionado
var += 3           -> faz a mesma coisa que a de cima (no caso, adiciona +3 ao valor atual da variavel) e pode "personalizar"


*/


/*WHILE 
Enquanto x for <= 10 faça
quando x valer 11 será false e a execução irá parar
*/

var x = 1
while (x <= 10){
  document.write(x + "<br>")
  x++;                       
}

document.write("<hr><br>")
/* BREAK
O laço vai virar rodando, e quando chegar a 5 ele entra no IF
se a variavel y for 5, interrompa (break) o loop while
quando y valer 11 será false e a execução irá parar
*/

var y = 1
while (y <= 10){
  document.write(y + "<br>")                 
  if(y == 5){                  
    break;
  }
  y++;                      
}



/* CONTINUE
O laço vai virar rodando, e quando chegar a 5 ele entra no IF
se a variavel z for 5, continue (para a instruçã o atual e vai para o passo seguinte)
quando z valer 11 será false e a execução irá parar */

var z = 1
while (z <= 10){
  document.write(z + "<br>")
  if(z == 5){ 
    continue;
  }
  z++;                       
}