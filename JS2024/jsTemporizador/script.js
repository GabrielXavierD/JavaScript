function incrementa(){ 
    /*função incrementa() pega elemento com id "inputTemporizador", 
    acessa o valor dele atribui na variavel "v" e depois se converte pra número e soma mais 1*/
      
    //iniciou o input com 1
    let v = document.getElementById("inputTemporizador").value;
    document.getElementById("inputTemporizador").value = Number(v) + 1; 
    //converte a váriavel "v" pra numero e soma +1 no valor -> e atribui novamente o valor para o id "inputTemporizador"
}

/*setInterval função do js para criar algo a ser executado em um determinado intervalo de tempo*/
setInterval("incrementa()", 1000);  //a cada 1000 miilisegundos (1s) ele chama a função incrementa() e repete o mesmo processo (1, 2, 3... aumentando o valor)