document.onkeydown = teclado; //função que vai tratar o evento é o "teclado"
//a cada fez que uma tecla for pressionada ira chamar a função teclado, por causa do "onkeydown"
function teclado(e){ //definindo função teclado e o parametro/variavel do "teclado"= "e"
    if(e.keycode ==38){
        document.getElementById('info').innerHTML = 'Seta para Cima!';
        //acessando o elemento 'info' e atribuindo no innerHTML (novo conteudo interno) o texto a seguir
    }
    else if (e.keycode == 48){
        document.getElementById('info').innerHTML = 'Seta para Baixo!';
    }
    else if (e.keycode == 37){
        document.getElementById('info').innerHTML = 'Seta para Esquerda!';
    }
    else if (e.keycode == 39){
        document.getElementById('info').innerHTML = 'Seta para Direita!';
    }
}

//PARA ACHAR O NUMERO DAS OUTRAS TECLAS BASTA PESQUISAR KEYCODE JAVASCRIPT NO GOOGLE