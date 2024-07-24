/*
Definindo a dimensão do palco do jogo (area em que ocorrerá a gameplay), para que assim as moscam não sejam "spawnadas" em um local
em que o usuario não tem visão, ou até mesmo em um local em que o browser acabe criando um scroll

-Encontrando a altura e largura da página atraves do objeto window (que representa o BOM) e seus objetos
innerHeight e innerWidth 
    ->Porém, eles retornam o valor atual da janela e não atualizam o valor automaticamente, caso o 
usuario redimensione a tela (pois se ele redimensionar, talvez ele não veja o spawn das moscas, logo o valor de alt. e larg. deve ser atualizado constantemente p/ que o jogo se adapte a tela do usuario e assim ele continue vendo o spawn das moscas mesmo se ele redimensionar a tela). 
    ->Portanto, encapsulei essa logica de recuperação de alt./larg. em uma uma função, pois caso o usuario redimensione a tela o valor atual da altura e largura será atualizado atraves do evento onresize() do body que chamará a função
        ->Ou seja, toda vez que o user redimensionar a tela, a chamada da função será associada ao onresize(), que irá chamar a função ajustaTamanhoPalcoJogo() e atualizar os valores de altura e largura
*/


// Iniciando as variaveis em 0, pois seus valores serão atualizados dentro da função
    // se são declaradas dentro da propria função, entao tem escopo da função e não escopo global, então não podemos acessar seus valores atualizados globalmente (em um console.log() FORA da função, por ex.). Logo, devemos criar as variaveis antes da função, p/ podermos acessa-las globalmente com seus valores atualizados, pois, aí, dentro da função, estamos atualizando o valor de uma VARIAVEL GLOBAL e não de uma variavel criada dentro da propria função.

var altura = 0;
var largura = 0;

function ajustaTamanhoPalcoJogo() {
    largura = window.innerWidth;
    altura = window.innerHeight;
    console.log("largura: " + largura + " altura: " + altura); 
    //o console poderia ir fora, mas, nesse caso, ele tambem ser chamado toda hora, pra  mostrar constantemente os valores atualizados. Então, a cada redimensionamento, o valor e atualizado e o o console.log() mostra eles atualizados
}

ajustaTamanhoPalcoJogo();
/* ao chamarmos a função aqui fora, atualizamos o valor global, pos modificação do valor dentro da função


console.log("Fora da função - altura: " + altura + " largura: " + largura);
*/




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
*/

function posicaoRandomica(){
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
*/

var mosca = document.createElement("img")
mosca.src = "imagens/mosca.png" //atribuindo o caminho ao src da tag img (var mosca) -> porem nesse ponto não tem a class mosca1 adicionada
mosca.className = "mosca1" //className = atributo pra colocarmos a classe a ser adicionada  -> atribuindo a classe mosca1 na imagem pra ela aplicar a formatação de tamanho 

mosca.style.left = posicaoX + "px" //acessando o style do elemento e acessando o atributo left do style -> como no css é o left é em px, concatenamos o valor randomico com px
mosca.style.top = posicaoY + "px"

// p/ que as cordenadas randomicas acima sejam aplicadas, devemos tornar o elemento absoluto (posição absoluta), então atribuimos:
mosca.style.position = "absolute";


// Devemos tomar cuidado com o erro re precedencia, pois se colocarmos o script do js no head, o script roda antes da criação do body, então pode dar erro, pois não existe o body p/ ser adicionado a imagem
document.body.appendChild(mosca) //incluindo a imagem no body da pagina

}