function salvar() { //pegando o valor de um input e armazenando no localStorage
    localStorage.info = document.getElementById("dado").value;
    //pegando o valor de "dado" (.value) e atribuindo na propriedade "info" que foi criada no momento -> armazenando no localStorage
}


function carregar() { //pegando a propriedade do localStorage e atribuindo no input -> operação reversa

    /*caso o user tente carregar ANTES DE SALVAR O DADO NA SESSÃO, 
    irá aparecer UNDEFINED, pois a propriedade .info ainda não foi criada.
    
    O IF serve para deixar recuperar o dado somente se a propriedade .info já existir no localStorage 
    -> então se o user clicar em carregar antes de salvar, não irá aparecer a mensagem de UNDEFINED*/


    if (localStorage.info) { //se localStorage.info (se .info for valido) for valido e não nula/ se existir FAÇA:
        document.getElementById("dado").value = localStorage.info;
        //acessando o .info e os dados armazenados nele e atribuindo de volta(.value) no input "dado"

    }
}


