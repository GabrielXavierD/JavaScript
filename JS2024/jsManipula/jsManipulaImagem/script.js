let imgDois = "fundo2.jpg"; //recebendo nome do arquivo
let imgUm = "fundo1.png";

function trocaImagem(){

    //imgUm esta sendo exibida -> trocando imagem já exibida para imgDois
    document.getElementById("figura").src = imgDois; /*acessa o elemento com id="figura" -> acessa o .src (o conteúdo da tag img) 
    e atribui a ele a imagem 2 (imgDois, no caso "fundo2.jpg") 
    
    
    -> a imagem que já está na tela (antes de apertar no botao) é fundo1.png (imgUm) 
    -> então é feita a troca para fundo2.jpg que é a imagem 2 (imgDois)*/
    
    
    let varAuxiliar = imgDois; //a imagem 2 é temporariamente armazenada em varAuxiliar (fundo2.jpg)
  
    
    imgDois = imgUm; 
    //imgDois sendo atualizado pra imgUm (ou seja, fundo2.jpg passa ser fundo1.png)
    //pegando a imagem anterior (imgUm) e fazendo ela ser a nova imagem atual (imgDois)
                    
  
    imgUm = varAuxiliar; /*a imagem anterior recebe o conteúdo da varAuxiliar 
    (ou seja, a imagem 2, fundo2.jpg, que havia sido armazenado -> fundo1.png passa a ser fundo2.jpg )*/


    /* acessa elemento "figura" -> atribui a imagem atual como conteúdo do src, é trocado o conteúdo da var imgAtual]


    */
}