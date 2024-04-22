function verificaForm(){
  if(document.getElementById("nome").value == ""){
	alert("Preencha o nome");
	document.getElementById("nome").style.borderColor = "red";
	document.getElementById("nome").style.backgroundColor = "#ffe5e5";
	document.getElementById("nome").focus(); /*focus() - Dá foco em algum elemento html */
    return false;
  }
  return true;
}