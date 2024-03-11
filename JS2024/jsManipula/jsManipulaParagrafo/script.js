function copiaValorDoPpraDiv() {

    //somente os INPUTS usam o .value
    //Sempre que for manipular um conteúdo de um elemento que não é input se usa .innerHTML para pegar o valor


    //pegando valor do paragrafo com id "p1" e atribuindo na variavel "dadosParagrafo"
    let dadosParagrafo = document.getElementById("p1").innerHTML;
    
    
    //pegando o elemento com Id "d1" e atribuindo o valor do paragrafo, no caso, com sua váriavel "dadosParagrafo";
    document.getElementById("d1").innerHTML = dadosParagrafo;

}

