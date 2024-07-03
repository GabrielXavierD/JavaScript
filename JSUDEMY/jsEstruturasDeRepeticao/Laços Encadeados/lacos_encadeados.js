/*
LAÇOS ENCADEADOS
-São laços de repetição dentro de outro laço de repetição

Ex.: Tabuada 1 a 10
*/


// JEITO SIMPLES
// TABUADA DO 1
for(var x = 1; x<=10; x++){
  document.write("1 x " + x + " = " + (1*x) + "<br>")
}

document.write("<br><hr><br>")

// TABUADA DO 2
for(var x = 1; x<=10; x++){
  document.write("2 x " + x + " = " + (2*x) + "<br>")
}

document.write("<br><hr><br>")





// JEITO ENCADEADO
// TABUADA DO 1 ao 10

/*Repete o 1º for uma vez, depois entra no 2º for e repete ele completamente, até o 10
depois sai do 2º for e volta pro primeiro, faz a adição em y e depois entra no 2º for dnv
e repete até finalizar o 1º for (ou seja, quando y = 10)  

y * x = z -> aqui "y" é o primeiro numero da conta e "x" o segundo
*/
for(var y = 1; y<=10; y++) {        
  for(var x = 1; x<=10; x++){
    document.write(y + " x " + x + " = " + (y*x) + "<br>")
  }
  document.write("<br>")

}
