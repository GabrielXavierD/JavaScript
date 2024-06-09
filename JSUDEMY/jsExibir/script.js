// String
let texto1 = "Boa Noite";
let texto2 = ':)';

//alert() Abre um dialog -> bom para debugging
//Ex:
alert(texto1);

/*document.write() -> metodo p/ escrever valores no browser
document = objeto que representa o DOM -> tds os elementos presentes no HTML estão contidos nele */
//Ex:
document.write(texto2);

// console.log() -> bom para debugging
console.log(texto2)

//Prompt = permite entrada de dados a partir do browser -> so recebe String (logo, para realizar calculos, precisa converter pra numero)
let nome = prompt("Digite seu nome:")
let comida = prompt("Digite sua comida favorita:")
alert(nome + ", sua comida favorita é: " + comida)
