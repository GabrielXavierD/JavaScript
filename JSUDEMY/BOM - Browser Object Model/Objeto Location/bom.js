/* LOCATION
-É um objeto
-Ele fornece acesso a fornece acesso a atributos e métodos da URL/Path atual 
-Podemos ter acesso, por exemplo, forçar o redirecionamento para alguma url, afetando a URL da aplicação;
-Podemos atualizar a página a partir do metodo RELOADetc...
-Podemos encontrar mais atributos no W3SCHOOLS


Quando nós criamos links, com a tag <a href..., por ex., no momento em que eles são clicados nós atuamos justamente sobre o objeto Location forçando o redirecionamento para o URL desejada.

Mas isso também pode ser feito de forma programática ou seja a partir da lógica da nossa aplicação a partir da manipulação do objeto Location que faz parte do objeto WINDOW.


SINTAXE:
window.location.ATRIBUTO

EXEMPLOS:
-href -> setar qual é a URL que vai ser retornada para o navegador, de forma programática se cria um redirecionamento -> O BROWSER, a partir do objeto WINDOW, força de forma programatica, a renderização do conteúdo que retorna a partir dessa requisição e tal seria como digitar essa RL aqui.

-reload() -> recarrega a pagina ATUAL
window.location.search; //recuperando a url atual, junto com o parametro passado da dificuldade do jogo

-search -> atributo que retorna para nós apenas a queryString da URL 
  -> Ou seja tudo que está à direita do ponto de interrogação e inclusive o ponto de interrogação.
  -> Ex.: index.html?bomdia -> resultado com o search = ?bomdia

DICA: SE PODEMOS RECUPERAR ALGUMA INFORMAÇÃO DE ALGO -> ENTÃO PODEMOS GUARDAR ESSA INFORMAÇÃO EM UMA VARIAVEL -> SE PODEMOS GUARDAR ESSA INFORMAÇÃO EM UMA VARIAVEL, PODEMOS TESTAR, VERIFICAR ETC...

COMO SABER SE POSSO RECUPERAR INFORMAÇÃO DE ALGO?
-Basta testarmos, utilize alert(), console.log(), document.write() etc...
Ex.: alert(window.location.href) -> trouxe uma informação? Sim!
    Logo -> var urlAtual = window.location.href
      Então -> if(urlAtual == TAL COISA){}

*/

function acessarGoogle(){
  window.location.href="http://www.google.com"
}


function recarregarPagina(){
  window.location.reload();
}

