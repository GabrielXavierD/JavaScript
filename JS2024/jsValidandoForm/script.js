function valida(){
    //acessando os valores preenchidos nos campos "usuario" e "senha" e armazenando nas suas váriaveis
        let usuario = document.getElementById("usuario").value; 
        let senha = document.getElementById("senha").value;
        if (usuario == ""){ //se usuario estiver vázio faça
            document.getElementById("erroUsuario").innerHTML = "Usuário vázio!"; //apresenta do span "erroUsuario" a msg
            document.getElementById("erroSenha").innerHTML = ""; //mantem o span "erroSenha" vázio/sem msg aparecendo
        } else if(senha == ""){ //se senha estiver vázia faça
            document.getElementById("erroUsuario").innerHTML = "";
            document.getElementById("erroSenha").innerHTML = "Senha  vázia!";
       
        } else if(senha.length < 6){ //se o tamanho da senha(.length) for menor que 6 digitos faça
            document.getElementById("erroUsuario").innerHTML = "";
            document.getElementById("erroSenha").innerHTML = "A senha digitada tem menos que 6 digitos";
        }
        else { //se não tiver nenhum erro faça -> form validado
            document.getElementById("erroUsuario").innerHTML = ""; //zerando msg de erro
            document.getElementById("erroSenha").innerHTML = "";  //zerando msg de erro
            document.getElementById("msg").innerHTML = "Formulário validado!"; //span "msg" do inicio do form mostrando que o form foi validado

        }
}