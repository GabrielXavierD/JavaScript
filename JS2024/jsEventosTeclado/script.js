document.onkeydown = teclado; //dispara onkeydown quando qualquer tecla for pressionada
//e a função que vai tratar esse evento é a função "teclado"    
function teclado(tecla) { //a variavel "tecla" é um parametro do objeto do evento -> ela recebe a tecla pressionada
    if (tecla.keyCode == 38) { //cada tecla tem um código, 38 = p/ cima
        document.getElementById("pConteudo").innerHTML = "Seta para Cima! (38)";
    }
    else if (tecla.keyCode == 40) { 
        document.getElementById("pConteudo").innerHTML = "Seta para Baixo! (40)";
    }
    else if (tecla.keyCode == 37) {
        document.getElementById("pConteudo").innerHTML = "Seta para Esquerda! (37)";
    }
    else if (tecla.keyCode == 39) { 
        document.getElementById("pConteudo").innerHTML = "Seta para Direita! (39)";
    }

    //para achar outras teclas, basta pesquisar Keycode JavaScript ou no site keycode.info
}