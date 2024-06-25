/*LOOP WHILE
Sintaxe:

while(condicao de parada){

  //CODIGOS

 incrementar/decrementar (ou break ou continue)
}

-Devemos sempre incrementar ou decrementar na variavel p/ funcionar corretamente e evitar um loop infinito
-Podemos usar break (igual no switch case) p/ interromper completamente o laço while
-Podemos usar continue p/ finalizar o passo atual que esta acontecendo dentro daquele bloco de codigo
e ir para o passo seguinte
  -continue pode gerar um loop infinito e travar tudo se a INCREMENTAÇÃO estiver sido colocada no lugar errado
    -A INCREMENTAÇÃO deve ser colocada antes do continue 
    (Ex.: se continue estiver dentro de um IF - i++ deve ser colocado antes do IF)



FORMAS DE INCREMENTAR (++ OU +)/DECREMENTAR (-- OU -)

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
document.write("<hr><br>")


/* CONTINUE
O laço vai ficar rodando, e quando chegar a 5 ele entra no IF
se a variavel z for 5, continue (para a instrução atual e vai para o passo seguinte)

No caso, continue esta colocado dentro de um if - que esta dentro de um while -
ele pula o incremento e vai p/verificação da condição de parada.
Mas vai dar um loop infinito pois, como nao foi feito o incremento,
a VARIAVEL continua valendo 5 e continua entrando naquele bloco do IF
e fazendo a mesma verificação e usando o continue dnv e ai fica em LOOP

  - É preciso tomar cuidado ao usar ele, 
    pois pode acabar gerando um loop infinito e travar/lagar tudo

-Para resolver o loop infinito a INCREMENTAÇÃO deve ser feita antes
da verificação do IF


CODIGO COM LOOP INFINITO - COM PROBLEMA
var z = 1
while (z <= 10){

  if(z == 5){ 
    continue;
  }

                              Essas 2 instruções serão puladas:
  document.write(z + "<br>")
  z++;                       
}


CODIGO COM LOOP INFINITO - PROBLEMA ARRUMADO
var z = 1
while (z <= 10){
  z++;
  if(z == 5){ 
    continue;
  }
  document.write(z + "<br>")
                         
}

*/


var z = 1
while (z <= 10){
  z++;
  if(z == 5){  // valor 5 será pulado (pulará o passo do document.write)
    continue;
  }
  document.write(z + "<br>")

}
