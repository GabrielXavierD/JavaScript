let arrayCriado = []; //array global vazio


//como ainda não tem o ".meuArr" na primeira vez, ele nao vai passar aqui - somente depois do primeiro dado ser armazenado
function addItem(){  //quando clica pra adicionar o segundo valor - como agora já existe ".meuArr"
   if (localStorage.meuArr){         //se true e nao nulo faça - essa verificação ocorre caso esteja sendo o SEGUNDO VALOR a ser adicionado:
      arrayCriado = JSON.parse(localStorage.getItem('meuArr')); 
/*recuperando o array do localStorage e depois atualizando o mesmo -> (localStorage.getItem('meuArr') = recuperar array que já está salvo no localStorage)
-> mas como ele está em formato String é preciso usar JSON.parse pra atribuir ele novamente como uma váriavel em formato ARRAY (arrayCriado)*/
/*E DEPOIS SEGUE OS PASSOS ABAIXO: (porém agora usando um array já criado, entao esta adicionando informações)*/

   }
   
   let novoItem = document.getElementById("entradaDados").value; //acessando o input "entradaDados" e pegando os dados .value e armazenando na variavel
   arrayCriado.push(novoItem); //salvando (.push) os valores de novoItem no array vazio (arrayCriado)
   document.getElementById("entradaDados").value = ""; //pegando os valores do input e limpando ("") o conteudo interno dele (.value) -> atribuindo string vazia
   localStorage.meuArr = JSON.stringify(arrayCriado);    //criando uma chave no localStorage (no caso .meuArr) e atribuindo um array convertido em JSON STRING (formato String)


                        /*JSON.stringify serve para converter arrayCriado pra um formato String JSON 
   -> e depois o formato final do array (no caso, String) está sendo armazenado na chave .meuArr dentro do localStorage*/



   /*RESUMO: pegando valor do campo -> adicionando valor no array (arrayCriado) -> limpando campo */
}

function showItems(){
   let resultDIV = document.getElementById('d'); //acessando div id "d" e armazenando na variavel resultDiv
   resultDIV.innerHTML = ""; //limpando div -> atribuindo no conteúdo interno dela uma String vazia - ou seja, se for exibir algo, deve limpar o que estava antes
   if (localStorage.meuArr){  //se minha chave .meuArr já existe  = true, então faça:    
      arrayCriado = JSON.parse(localStorage.getItem('meuArr')); 
      //recupera o array do localStorage -> converte pra array dnv e usa um FOR pra percorrer todas as posições do array
   }
   /*então para cada posição [i] no array (arrayCriado)  esse FOR vai rodar uma vez e vai criar um elemento paragrafo "p"
   -> e depois atribui como conteúdo interno de "p" a posição do array que esta sendo percorrida [i]*/
   for(var i in arrayCriado){
      let p = document.createElement("p");
      p.innerHTML = arrayCriado[i];
      resultDIV.append(p); //.append adiciona um valor a uma chave existente -> ou seja adicionando "p" (com os dados do array) na div (resultDiv)
   }

   /*Ou seja, para cada posição [i] dentro do array (arrayCriado) -> vai pegar esse elemento e vai adicionar dentro de um paragrafo
   -> e vai "appendar" (/adicionar) esse paragrafo na div para apresenta-los*/
}

function clearItems(){ //limpa
   arrayCriado = []; //limpa o arrayCriado -> apaga todos os dados 
   localStorage.meuArr = JSON.stringify(arrayCriado); //atualiza o .meuArr com o array vazio (JSON.stringify(arrayCriado)) -> atribui um array vazio ao .meuArr
}
