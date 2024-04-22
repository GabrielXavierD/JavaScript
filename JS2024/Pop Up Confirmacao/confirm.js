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
