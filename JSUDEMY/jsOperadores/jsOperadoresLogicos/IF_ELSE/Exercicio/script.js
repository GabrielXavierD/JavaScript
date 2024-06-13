document.write("<h1>Identificação de Faixa Etária</h1>")
let idade = prompt("Digite sua idade:");

// IF ENCADEADO (c/ else if)
if (idade >= 0 && idade < 15) {
    document.write("Criança");
} else if (idade >= 15 && idade < 30) {
    document.write("Jovem");
} else if (idade >= 30 && idade < 60) {
    document.write("Adulto");
} else {
    document.write("Idoso");
}