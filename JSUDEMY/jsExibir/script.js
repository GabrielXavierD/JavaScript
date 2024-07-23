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



/*abre um popup com opção OK ou CANCELAR */
let sair = confirm("Confirma ir para a página do Google?"); 


/* Ok = 1 = verdadeiro 
  Cancelar = 0 = falso  */

if(sair == 1){
  /*Se sim, window.location (janela do navegador) deve carregar tal página*/ 
  window.location = "http://www.google.com.br";
}


/*Para abrir uma nova janela */
sair = window.open("http://www.w3schools.com");
