function modificaBg(){
    document.getElementById("inputModifica").style.backgroundColor = "yellow";
}

function perdeFoco(){
    var campo = document.getElementById("inputModifica").value; //pegando o valor atual do campo, os caracteres, quantos digitados
  
    if(campo.length <3){ //de acordo com o tamanho da variavel campo faça (de acordo com o numero de caracteres digitados faça)
    document.getElementById("inputModifica").style.backgroundColor = "red";
    }else{
    document.getElementById("inputModifica").style.backgroundColor = "green";
        
    }
}