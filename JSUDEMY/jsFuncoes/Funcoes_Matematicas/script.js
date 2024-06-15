/*Funções nativas para tarefas matematicas
-Podemos acessa-las atraves do objeto Math do JavaScript

-Math.ceil() = essa função espera um valor fracionario e força o arredondamento p/ cima
-Math.floor() = essa função espera um valor fracionario e força o arredondamento p/ baixo (considera a parte inteira)
-Math.round() = leva em consideração a media de valor pra arredondar pra cima ou pra baixo, 
                <=4 arredonda p/ baixo; arredonda >=5 arredonda p/ cima

-Math.random() = fornece um numero aleatorio ENTRE 0 e 1

                */

// Math.ceil()
var x = Math.ceil(10.380);
document.write(x); //11

document.write("<br>");

// Math.floor()
var y = Math.floor(10.380);
document.write(y); //10

document.write("<br>");

// Math.round()
var z = Math.round(10.6);
document.write(z); //11

document.write("<br>");

// Math.random()
var aleatorio = Math.random();
document.write(aleatorio); //numero gerado aleatoriamente

document.write("<br>");
