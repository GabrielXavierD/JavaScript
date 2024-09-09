/*
EM JS O TIPO DA VARIAVEL É DEFINIDO DE ACORDO COM O VALOR ATRIBUIDO (Logo não precisa declarar o tipo, igual em JAVA, por ex.)
String = textos
Number = valores numericos: positivos, negativos, inteiros ou fracionados (1, -1, 1, 8.22)
    (Em outras linguagens de programação há subtipos:
        Int = positivos/negativos inteiros (1, -1)
        Float/Double = positivos/negativos c/ fração (10.45, -10.45))

Boolean = true(1)/false(0) (tomada de decisões)        

Se declara utilizando var/let
JS é CASE SENSITIVE logo, Dia, DIA, dia = as 3 são diferentes

Ex.: let nome; var aulaVar; let _idade
*/

// String
let texto1 = "Olá!";
let texto2 = 'Olá! 2';


// Number
let numero1 = 7;
let numero2 = -7;
let numero3 = 7.10;
let numero4 = -7.10;

// Boolean
let teste1 = true;  //verdadeiro
let teste2 = false; //falso


//alert() Abre um dialog -> bom para debugging
//Ex:
alert(numero4);

/*document.write() -> metodo p/ escrever valores no browser
document = objeto que representa o DOM -> tds os elementos presentes no HTML estão contidos nele */
//Ex:
document.write(texto1);

// console.log() -> bom para debugging
console.log(texto2)