/*Cast ou Casting de tipos = converter tipos de dados em outros tipos de dados
  
  Convertendo - (devem seguir a forma escrita abaixo)

    -Metodos que retornam a forma numerica:
    parseInt = converte pra Inteiro (Number);
    parseFloat = converte p/(aceita) número fracionario (numero quebrado - Number).
   
    -Metodo que faz parte da estrutura de um valor do tipo numérico - retorna a forma textual:
    toString = converte para String (é usado em um local diferente do parse).

    Exemplo:
    parseInt(varTexto)
    varValorNumerico.toString()
*/

let variavel1 = prompt("Digite um número:"); //Prompt recebe SEMPRE String
let variavel2 = prompt("Digite um número:");

document.write(variavel1 + variavel2); //Logo não da pra somar Strings -> precisa converte-los
document.write("<hr>");


variavel1 =  parseInt(variavel1);
variavel2 =  parseInt(variavel2);

document.write("<br>");
document.write(variavel1 + variavel2); //Logo não da pra somar Strings -> precisa converte-los


document.write("<hr>");
variavel3 =  20;
variavel4 =  40;

document.write(variavel3.toString() + variavel4.toString()); //Logo não da pra somar Strings -> precisa converte-los

