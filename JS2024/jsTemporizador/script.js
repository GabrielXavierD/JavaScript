function incrementa(){ 
    /*função incrementa() pega elemento com id "inputTemporizador", 
    acessa o valor dele atribui na variavel "v" e depois se converte pra número e soma mais 1
    
    EXPLICANDO A FUNÇÃO:
    -Iniciou o input com value=1 no HTML;
    -Atribui o valor atual do input na variavel "v" (ou seja, atribui 1);
    -O valor contido em "v" é uma String, por isso deve ser convertida para numero para poder somar; 
    -Converte a váriavel "v" pra numero e soma +1 no valor -> e atribui novamente o valor para o id "inputTemporizador" através da propriedade 
    .value (define ou obtem valor de algo);
    */
    
    let v = document.getElementById("inputTemporizador").value;
    document.getElementById("inputTemporizador").value = Number(v) + 1; 
  
}

/*setInterval função do js para criar algo a ser executado em um determinado intervalo de tempo

-a cada 1000 miilisegundos (1s) ele chama a função incrementa() e repete o mesmo processo (1, 2, 3... aumentando o valor)
*/
setInterval("incrementa()", 1000);  