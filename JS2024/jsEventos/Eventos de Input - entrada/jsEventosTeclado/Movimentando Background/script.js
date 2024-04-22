//Caso o user queria usar o botões:

//valores X e Y iniciais no CSS:
var x = -300;
var y = -300;
function moveLeft(){
   //somando +100 na posição inicial de "x"
    x = x + 100;
    
    /*pegando o elemento com id "box" acessando o css dele (.style) 
    -> acessando uma propriedade especifica dele (.backgroundPosition)
    -> colocando os novos valores e "x" 
    (o valor "y" está ali, porém não foi alterado,
     já que não foi feito nenhuma soma no inicio)*/
    document.getElementById("box").style.backgroundPosition= x+"px "+y+"px"; //o resultado no css seria algo como: "200px 300px"
}
function moveRight(){
    x = x - 100;
    document.getElementById("box").style.backgroundPosition= x+"px "+y+"px";
}
function moveUp(){
    y = y + 100;
    document.getElementById("box").style.backgroundPosition= x+"px "+y+"px";
}
function moveDown(){
    y = y - 100;
    document.getElementById("box").style.backgroundPosition= x+"px "+y+"px";
}




//Caso o user queria usar o teclado:
//dispara onkeydown quando qualquer tecla for pressionada
document.onkeydown = teclado; 

function teclado(tecla) { 
    if (tecla.keyCode == 38) {
        document.getElementById("cima").innerHTML = moveUp();
    }
    else if (tecla.keyCode == 40) { 
        document.getElementById("baixo").innerHTML = moveDown();
    }
    else if (tecla.keyCode == 37) {
        document.getElementById("esquerda").innerHTML = moveLeft();
    }
    else if (tecla.keyCode == 39) { 
        document.getElementById("direita").innerHTML = moveRight();
    }


}