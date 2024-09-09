let numero1 = parseInt(prompt("Digite o primeiro número:"));
let tipoConta = prompt("Digite qual o tipo calculo (soma ou subtração):")
let numero2 = parseInt(prompt("Digite o segundo número:"));

function calcula(numero1, numero2, tipoConta) {
    var resultado = 0; //iniciando resultado em 0 pra dps ser atribuido/substituido o valor da conta

    if (tipoConta == "Soma" || tipoConta == "soma" || tipoConta == "+") {
        resultado = numero1 + numero2;
    } else if (tipoConta == "Subtração" || tipoConta == "subtração" || tipoConta == "-") {
        resultado = numero1 - numero2;
    } else {
        return resultado = "Erro!";
    }
    return resultado; //depois de fazer a verificação no if, faz o retorno do resultado
}
let resultadoCalculo = calcula(numero1, numero2, tipoConta);
document.write("O resulado do calculo é: " + resultadoCalculo)