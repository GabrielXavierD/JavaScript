/*
Definindo a dimensão do palco do jogo (area em que ocorrerá a gameplay), para que assim as moscam não sejam "spawnadas" em um local
em que o usuario não tem visão, ou até mesmo em um local em que o browser acabe criando um scroll

-Encontrando a altura e largura da página atraves do objeto window (que representa o BOM) e seus objetos
innerHeight e innerWidth 
    ->Porém, eles retornam o valor atual da janela e não atualizam o valor automaticamente, caso o 
usuario redimensione a tela (pois se ele redimensionar, talvez ele não veja o spawn das moscas, logo o valor de alt. e larg. deve ser atualizado constantemente p/ que o jogo se adapte a tela do usuario e assim ele continue vendo o spawn das moscas mesmo se ele redimensionar a tela). 
    ->Portanto, encapsulei essa logica de recuperação de alt./larg. em uma uma função, pois caso o usuario redimensione a tela o valor atual da altura e largura será atualizado atraves do evento onresize() do body que chamará a função
        ->Ou seja, toda vez que o user redimensionar a tela, a chamada da função será associada ao onresize(), que irá chamar a função ajustaTamanhoPalcoJogo() e atualizar os valores de altura e largura

-Iniciando as variaveis em 0, pois seus valores serão atualizados dentro da função
-se são declaradas dentro da propria função, entao tem escopo da função e não escopo global, então não podemos acessar seus valores atualizados globalmente (em um console.log() FORA da função, por ex.). Logo, devemos criar as variaveis antes da função, p/ podermos acessa-las globalmente com seus valores atualizados, pois, aí, dentro da função, estamos atualizando o valor de uma VARIAVEL GLOBAL e não de uma variavel criada dentro da propria função.
*/
var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 5; //10 segundos

function ajustaTamanhoPalcoJogo() {
    largura = window.innerWidth;
    altura = window.innerHeight;
    console.log("largura: " + largura + " altura: " + altura);
    //o console poderia ir fora, mas, nesse caso, ele tambem ser chamado toda hora, pra  mostrar constantemente os valores atualizados. Então, a cada redimensionamento, o valor e atualizado e o o console.log() mostra eles atualizados
}

ajustaTamanhoPalcoJogo();
/* Se darmos um console.log() antes dessa chamada da função, os valores das variaveis altura e largura ainda não estarão atualizados, ou seja,
irão retornar 0

Ao chamarmos a função aqui fora atualizamos o valor global das variaveis altura e largura, pós modificação do valor dentro da função
(se não fizermos a chamada da função aqui fora, as variaveis altura e largura, não terão seu valor original (valor global) modificado, irão continuar com o valor 0, mesmo se forem modificadas na função)

Agora nesse ponto (dps da chamada da função), podemos dar um console.log() para ver as variaveis com os valores atualizados:
console.log("Fora da função - altura: " + altura + " largura: " + largura);
*/



/* **************************************************************************************************************
No if(tempo<0) -> Se o tempo acabar antes dos pontos de vida significa que o usuário venceu a partida.
- para o cronometro, para que assim a execução dessa função não fique em loop
- parando o setInterval() do HTML com a função de spawn das moscas, pois, se o tempo do jogo acabou, as moscas não devem aparecer

-innerHTML é o valor contido entre as tags INNER = INTERNO. Ex.: <>VALOR DAQUI</}span> no caso, atribui a variavel TEMPO, que contem a contagem do cronometro 
- a cada 1 segundo a função decrementa 1 da variavel tempo
*/
var cronometro = setInterval(function () {
    tempo--
    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = "vitoria.html";
        
    } else {
        document.getElementById("cronometro").innerHTML = tempo;
    }
}, 1000)

/* **************************************************************************************************************
Criação de posições randomicas p/ spawnar as moscas
-Com base nos valores de altura e largura identificados seja possível produzir de forma
aleatória valores correspondentes ao eixo x e y e na sequência criar um elemento HTML de forma programática
e posicionar esse elemento HTML através dos recursos de estilo na nossa posição que foi encontrada com
base nos limitadores de altura e largura da nossa página (função anterior).

usamos o Math.random() p/ gerar valores aleatorios p/ x e y, mas ele gera entre 0 e 1, então
adaptamos p/ que ele crie valores entre os valores de altura e largura que foram recuperados
-ao multiplicarmos o valor aleatorio pela largura/altura, geramos um numero aleatorio entre 
a largura/altura recuperada

ou seja, vai de 0 até o valor atual de largura ou altura

Math.random() gera um nuemro aleatorio de 0 a 1 porem, com muitas casas decimais
utilizamos o Math.floor() pra arredondar esse numero p/ baixo  

Como evitar o SCROLL?
Ex.: o limite de largura é 50px e a imagem tem 50px de largura, ela foi gerada em 40px da largura, então 10 pixels ficam no limite "correto" e os outros 40 ficam no limite "estourado",
o que gera um scroll horizontal
para evitar que as imagens sejam criadas em um valor muito proximo do limite de largura ou altura e acabe gerando um SCROLL, caso a imagem "estoure o limite" iremos substrair um valor consideravel p/ que não gere um SCROLL



EXPLICAÇÃO DA FUNÇÃO posicaoRandomica()
    /* No IF fazemos a verificação para remover a mosca anterior já (caso já exista, pois na 1 chamada da função ñ existe mosca)
        -> Se document.getElementById("mosca") for encontrada, ou seja, true, faça: remove()
        -> o metodo remove() é responsavel por remover o elemento selecionado

    -> para verificarmos se o elemento existe basta usarmos document.getElementById("mosca"), pois se existir o get vai "pega-lo"
    se não, esse bloco do if é ignorado, não precisa implementar uma logica para o else 
    
    EXPLICAÇÃO PARA A VERIFICAÇÃO DOS PONTOS DE VIDA
    No HTML, no painel, colocamos as imagens com ID's "v1" até "v3" e aqui no JS iremos fazer uma verificação:
    ->Quando se passa 1s do setInterval, a função posicaoRandomica() irá remover automaticamente a mosca da tela
        ->Em seguida irá acessar o ID "v" e irá concatenar com o valor contido na variavel vidas, irá acessar o atributo .src do elemento 
        "capturado" com o get e irá atribuir uma nova imagem "coração vazio"
        ->Depois irá adicionar +1 na variavel vidas. 
    
    Ou seja ficaria: v1 -> muda sua img de coração cheio p/ coração vazio e adiciona +1 na variavel vidas;
                     na proxima execução/remoção automatica com o setInterval: estaria acessando o ID v2 -> trocando a img e adicionando +1 em vidas;
                     na proxima -> acessaria v3 e trocaria a img atual p/ coração vazio 
    ->Caso a variavel vidas atinja um valor superior a 3, a página atual sera mudada, o jogador sera redirecionado para a página GAME OVER,
    através do objeto window e do seu objeto location e pela propriedade href.
*/
function posicaoRandomica() {

    // Se o usuario conseguir remover a mosca antes do tempo estabelecido no setInterval() no HTML, o IF abaixo não é executado, pois não haverá moscas e assim por diante -> Esse IF só será executado caso o usuario, não consiga remover a mosca a tempo
    if (document.getElementById("mosca")) {
        document.getElementById("mosca").remove()
        if (vidas > 3) {
            window.location.href = "gameOver.html";
        } else {
            document.getElementById("v" + vidas).src = "imagens/coracao_vazio.png";
            vidas++;
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90; //não precisa ser 90, escolhi um numero qualquer pra subtrair o numero arredondado (mas q n fosse mt pequeno)... 
    var posicaoY = Math.floor(Math.random() * altura) - 90;

    /* como estamos subtraindo 90 há chance de sair alguma posição <0, posição com num's negativos, o que se for atribuido para a posição da mosca, ela some da tela então fazemos uma verificação
     Poderia ser um IF ELSE, mas fiz com operador ternario -> se posicaoX for <0 atribui 0 a ela, se não, atribuindo o valor acima de 0 que já esta nela, recebe ela msm */
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log('posicaoX: ', posicaoX, 'posicaoY: ', posicaoY);


    /* **************************************************************************************************************
        CRIANDO AS MOSCAS DE FORMA PROGRAMATICA (CRIANDO O SEU SPAWN)
        
        -DOM = árvore de elementos -> podemos adicionar ou remover elementos dele
            ->através da sua API acessada através do objeto Document
            ->Em uma variavel que contem a tag img, podemos atraves do operador "." (ponto) acessar os atributos desse elemento html (cada tag tem seus respectivos elementos. Ex.: src etc...)
        -Iremos utilizar o DOM
        -Utilizaremos o metodo .createElement()
        -> estamos criando a tag img
    
        -através do objeto document, iremos acessar o body da página e atribuir a imagem a ele
        atraves do metodo .appendChild()
            ->.appendChild() - adiciona um filho p/ algo
    
    
        EXPLICAÇÃO DO QUE ESTOU FAZENDO ALI EM var mosca:
        *atribuindo e criando a tag IMG na variavel MOSCA
    
        *atribuindo o caminho ao src da tag img (var mosca) -> porem nesse ponto não tem uma classe CSS para aplicar uma formatação na imagem da mosca
    
        *className = atributo pra colocarmos a classe a ser adicionada  -> Ex.: atribuindo a classe "mosca1" na imagem pra ela aplicar uma formatação
        ->No caso, atribuí 2 funções que retorna uma classe aleatoria, elas são concatenadas, mas para funcionarem corretamente
        precisei dar um espaço nas strings delas, pra que não fique algo tipo: "classe1lado1"
            -> o correto seria ficar "classe1 lado1" -> pois aí são 2 classes diferentes, aplicando formatações diferentes
        
        *acessando o style do elemento e acessando o atributo left e top do style -> concatenamos o valor randomico com px (como no CSS geralmente usamos px, coloquei px no LEFT e no TOP)
       
        * p/ que as cordenadas randomicas acima sejam aplicadas, devemos tornar o elemento absoluto (posição absoluta). Então acessei o style, acessei o positiondo style e atribuí "absolute" para a variavel MOSCA (que contem a imagem, ou seja, a imagem agora está com position absolute)
        
        *Graças ao DOM, podemos acessar e modificar os elementos HTML, então acessei o body e inclui a imagem (a variavel que contem ela) no body da página
            ->Mas, devemos tomar cuidado com o erro de precedencia (mostrado no console) nesse ponto, pois se colocarmos o script do JS no head, o script roda antes da criação do body, ou seja, vai dar erro, pois não existe o body p/ ser adicionado a imagem
        
        A função posicaoRandomica() gera moscas, mas para nao ficar varias moscas na tela
        quando uma fora gerada a anterior é removida, para que fique somente uma mosca
    
        *Adicionando um ID na img mosca
            Nós vamos verificar se já existe na página com um elemento com esse mosquito caso exista nós vamos remover
            esse elemento antes e criarmos o proximo elemento.;
    
        *adicionando o evento onclick na imagem (que esta na variavel mosca) 
            -> ao ser clicada, é acionada a função que a remove
            como a função está associada ao elemento HTML eu posso utilizar um operador chamado This:
            um operador que ajusta o contexto de um determinado atributo ou método.
            ->com o THIS identificamos o elemento HTML que executou a função e a partir da seleção desse elemento que vai executar o remove()
    
            */
    var mosca = document.createElement("img")
    mosca.src = "imagens/mosca.png"
    mosca.className = tamanhoAleatorio() + " " + ladoAleatorio()
    mosca.style.left = posicaoX + "px"
    mosca.style.top = posicaoY + "px"
    mosca.style.position = "absolute";
    mosca.id = "mosca"
    mosca.onclick = function () { this.remove() } //função para remover mosca ao clicar
    document.body.appendChild(mosca)
}



/* **************************************************************************************************************
Criando tamanhos randômicos para a mosca
Ou seja, classe contem um numero aleatorio que vai de 0 até 3
depois é feita uma verificação com switch, dependendo do valor contido em CLASSE o case retorna uma formatação 
(classe CSS) p/ mosca 
-> assim, gerando tamanhos "aleatorios" p/ mosca

Não estamos usando break pois return já é a ultima instrução da função, ou seja, quando o interpretador JavaScript identifica o comando return, ele retorna o dado para quem fez a chamada da função, o que interrompe o processamento da função naquele ponto. 
    ->Ou seja, o return já interrompe, faz a "msm coisa" q o break, porem ele retorna algum dado e interrompe o processamento naquele ponto.
*/

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3) //de 0 até 3
    console.log("tamanho aleatorio: ", classe)
    switch (classe) {
        case 0:
            return "mosca1" //retorna o nome de uma classe do CSS, que irá aplicar uma formatação de um tamanho X p/ mosca
        case 1:
            return "mosca2"
        case 2:
            return "mosca3"
    }

}

/* **************************************************************************************************************
Criando a orientação da imagem de forma randômica

Exemplo: as vezes refletida pro lado direito ou as vezes pro esquerdo -> Lado A e Lado B
A função faz a mesma coisa que a de cima, só mudei o nome e até qual numero vai ser gerado aleatoriamente

Retorna o nome de uma classe do CSS, que irá aplicar uma formatação de um tamanho X p/ mosca
*/

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2) //de 0 até 1 (como é arredondado p/ baixo fica entre 0 e 1)
    console.log("tamanho aleatorio: ", classe)
    switch (classe) {
        case 0:
            return " ladoA"
        case 1:
            return " ladoB"
    }

}