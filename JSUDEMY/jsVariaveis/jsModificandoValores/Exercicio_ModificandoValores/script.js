var a = 10;
var b = 20;
var c = null;

document.write("Valor de A: " + a + "<br>");
document.write("Valor de B: " + b + "<br>");
document.write("Valor de C: " + c + "<br>");
document.write("<hr>");


// Usando var C como auxiliar p/ armazenar valor de A
c = a;
a = b;
b = c;
c = null;


document.write("Valor de A: " + a + "<br>");
document.write("Valor de B: " + b + "<br>");
document.write("Valor de C: " + c + "<br>");