/*
BOM (BROWSER OBJECT MODEL)
-É uma forma de se comunicar através do JavaScript com os 
recursos do browser. 
  Como por exemplo: acessar o histórico de navegação; forçar o redirecionamento de URL; salvar e recuperar COOKIES etc...

-Essas ações não estão ligadas a elementos HTML mas sim a ações disparadas através de recursos
do proprio BROWSER

-Basicamente falando quando os nossos scripts HTML são interpretados pelo BROWSER nós podemos através
do JavaScript acessar tanto os elementos HTML da página através da API DOM quanto acessar recursos do
próprio BROWSER através da API BOM.

-Podemos manipular recursos internos e externos das nossas aplicações web.
-Suas propriedades e métodos podem ser consultadas no W3SCHOOLS (JS REFERENCE)
  Link: https://www.w3schools.com/jsref/obj_window.asp
  Exemplos: alert() = popup com uma mensagem;
            open()  = permite abrir uma nova janela;
            close() = fecha a chanela atual em foco 
              ->é um metodo nativo de objetos que representam janelas;
              ->só conseguimos fechar uma janela se a partir da minha página eu abrir uma janela. Ou seja,
              precisamos utilizar o open 1º e o close depois;
              ->a janela é um popup.
            print() = abre a tela de impressão da página atual  


DIFERENÇAS ENTRE BOM E DOM
  Com o DOM "olhamos" para os elementos da nossa PÁGINA
  Com o BOM interagimos com os recursos do BROWSER
CONTEUDOS DO BOM
  -Window: 
  -É a janela do browser onde todo o conteudo é renderizado;
  -É um objeto formado pelo BROWSER que incorpora a árvore de elementos HTML da página (DOM);
  -Dentro de WINDOWS há o objeto DOCUMENT;
  -O Alert() do JS faz é um metodo vindo do objeto WINDOW
*/

var janela 
function abrePopUp(){
  janela = window.open("pagina2.html", "Nova Janela", "height=500, width=500") //são esperados 4 parametros, mas são opcionais: URL (qualquer uma), name, specs, replace
}

// aqui a var janela já está com a página atribuida a ela

function fechaPopUpAtual(){
  //precisamos indicar qual janela/popup sera fechado e pra isso devemos guardar o popup atual em uma variavel, aí em vez de usarmos windows.close(), utilizamos variavel.close()
  janela.close() 
}