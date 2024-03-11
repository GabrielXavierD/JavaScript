function funcaoSepara(){
    let conteudo = document.getElementById("paragrafo").innerHTML;
   let array = conteudo.split(","); //a split separa o conteúdo dqa váriavel "conteúdo" e separar onde há a ocorrencia de virgula "," 
   //fazendo a separação e cada letra vai virar um elemento dentro do array

   
   for(let i in array){ //for acessando cada posição do Array
    alert (array[i]); //array = (qual array) e [i] = posicao dentro desse array
   //alert mostrando em popup as letras separadas (alert = sem entrada de dados, só o popup da mensagem)

}
}
