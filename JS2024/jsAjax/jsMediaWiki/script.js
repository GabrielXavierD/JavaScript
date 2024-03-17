function processa() {
    let termoPesquisa = document.getElementById("termo").value;//quando clica no botao se acessa o input e seu valor
    const xhttp = new XMLHttpRequest(); //criando requisição AJAX

    xhttp.onload = function() { //atribuindo função anonima que sera chamada quando houver uma resposta para a requisição

        //manipulações para apresentar o resultado dentro da div
        let r = this.responseText;  //pegando(this.) o texto de resposta (.respondeText) e armazenando em "r"      
        let objResponse = JSON.parse(r); //parseamento para objeto JavaScript
        if (objResponse && objResponse.query && objResponse.query.pages){ //verifica se o objeto existe e se são validas algumas propriedades (.query)
            let wikiPage = objResponse.query.pages[Object.keys(objResponse.query.pages)[0]]; //inexações para ter acesso a pagina que irá ter o conteudo principal (wikiPage)
            let mainText = wikiPage["extract"]; //dentro da  página wikiPage acessa a propriedade "extract" que retorna o texto principal do tema pesquisado -> armazena na variavel
            if (mainText){    //se o texto existir e não nulo faça:         
                document.getElementById("resposta").innerHTML = mainText; //atribui o texto como conteudo interno da div
            }
            else {//se termo não existir
                document.getElementById("resposta").innerHTML = "Não encontrei explicação para " + termoPesquisa; //vai escrever na div
            }
        }             
    }//abrindo requisição com o metodo, a url para consulta e o termo para pesquisa
    xhttp.open("GET", "https://pt.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&explaintext=1&titles="+termoPesquisa);
    xhttp.send();    //enviando requisição

    //assim que a requisição é completa/resposta é retornada -> função anonima será executada
}      