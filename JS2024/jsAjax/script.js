function processa(){

    //acessa os 2 inputs e pega seus dados e colocando nas variaveis
    let t1 = document.getElementById("termo1").value;
    let t2 = document.getElementById("termo2").value;

    const xhttp = new XMLHttpRequest(); //criando objeto de requisição

    xhttp.onload = function(){ //criando um callback -> função que vai ser chamada quando a resposta da requisição estiver pronta
        document.getElementById("resposta").innerHTML = this.responseText;
        //pegando resposta da requisição (.responseText) e atribuindo(.innerHTML) como conteúdo do input "resposta"
    }

//abrindo requição -> informando metodo ("GET") -> colocando endereço -> passando os parametros (conteudo1 e conteudo2)
    xhttp.open("GET", "processa.php?t1=" +t1+ "&t2=" +t2);
    xhttp.send(); //mandando a requisição para a página do lado servidor (processa.php)

    //quando a página der a resposta, irá para função do callback

}