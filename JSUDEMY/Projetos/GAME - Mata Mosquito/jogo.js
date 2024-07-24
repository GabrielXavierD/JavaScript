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
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log("altura: " + altura + " largura: " + largura); 
    //o console poderia ir fora, mas, nesse caso, ele tambem ser chamado toda hora, pra  mostrar constantemente os valores atualizados. Então, a cada redimensionamento, o valor e atualizado e o o console.log() mostra eles atualizados
}

/* ao chamarmos a função aqui fora, atualizamos o valor global, pos modificação do valor dentro da função

ajustaTamanhoPalcoJogo();
console.log("Fora da função - altura: " + altura + " largura: " + largura);
*/
