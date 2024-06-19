/*Para alterar a classe/class de um elemento
utilizamos .className modifica-lo e a classe a atribui-lo (já existente e formatada no arquivo CSS)

-Muito utilizado em formularios
  -Class campoValido ou campoInvalido -> dependendo da situação do campo se aplica um ou outro
*/

function modificaClasse(){
  var mensagem = document.getElementById("mensagem").className; //pegando a classe atual/incial do elemento

  if(mensagem == "estilo1"){
  document.getElementById("mensagem").className = "estilo2"; //atribuindo a nova classe
  document.getElementById("mensagem").innerHTML = "A CLASSE atual é: estilo2";
  }else{
   document.getElementById("mensagem").className = "estilo1";
   document.getElementById("mensagem").innerHTML = "A CLASSE atual é: estilo1";

    
  }

  
}

