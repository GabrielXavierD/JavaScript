let nomePessoa = prompt("Digite seu nome:");
let altura = parseFloat(prompt("Digite sua altura em centímetros:"));
let peso = parseFloat(prompt("Digite seu peso:"));
let classificacao = null; 

/*
OUTRAS FORMAS CORRETAS SE DE DECLARAR classificacao:
let classificacao;                      -> Inicia c/ Undefined
let classificacao = "";                 -> Inicia c/ String vazia (aspas duplas)
let classificacao = '';                 -> Inicia c/ String vazia (aspas simples)
let classificacao = "Não classificado"; -> Inicia c/ um texto a ser substituido quando chegar no IF
*/

altura /= 100;

let iMC = peso / (altura * altura);

if (iMC < 16) {
    classificacao = "Baixo peso muito grave";
} else if (iMC >= 16 && iMC <= 16.99) {
    classificacao = "Baixo peso grave";
} else if (iMC >= 17 && iMC <= 18.49) {
    classificacao = "Baixo peso";
} else if (iMC >= 18.50 && iMC <= 24.99) {
    classificacao = "Peso normal";
} else if (iMC >= 25 && iMC <= 29.99) {
    classificacao = "Sobrepeso";
} else if (iMC >= 30 && iMC <= 34.99) {
    classificacao = "Obesidade grau I";
} else if (iMC >= 35 && iMC <= 39.99) {
    classificacao = "Obesidade grau II ";
} else {
    classificacao = "Obesidade grau III";
}

document.write(nomePessoa + " possui índice de massa corporal igual a " +  iMC.toFixed(2) + ", sendo classificado como: " + classificacao);


/*
.toFixed(NUMERO_DE_CASAS_DECIMAIS)
    ->Converte um número em uma string, arredondando-o para um número especificado de casas decimais
    e retornando essa representação como uma string. 
 */
