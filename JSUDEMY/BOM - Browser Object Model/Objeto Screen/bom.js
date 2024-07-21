/* SCREEN
-É um objeto
-Ele fornece acesso a atributos relativos à tela do Browser. 
-Podemos ter acesso, por exemplo, a informações de largura e altura da parte interna do navegador onde são renderizados os elementos HTML etc...
-Vários atributos podem ser recuperados através do OBJETO SCREEN
  ->Podemos encontrar mais atributos no W3SCHOOLS

EXEMPLO: se a página for acessada a partir de um dispositivo móvel nós podemos capturar o tamanho
da tela disponível para o Browser e com isso exibir um menu específico.
A mesma coisa para uma versão web se a resolução for superior, por exemplo, a 1024, nós podemos exibir algum outro tipo de menu


Enfim a partir do tamanho da tela nós podemos tomar algumas decisões lógicas dentro da nossa aplicação.
Ele serve para otimizar a experiência do usuário em relação à tela exibida pelo dispositivo em que ele está utilizando no momento.

SINTAXE:
window.screen.ATRIBUTO

EXEMPLOS:
-height/width -> fornecem o tamanho total da altura e largura, INCLUINDO a barra de ferramentas (exemplo barra de favoritos, abas etc...).

-availHeight/availWidth() -> fornece acesso às propriedades de altura e largura da tela
excluindo a barra de ferramentas, 
                         -> mostra qual o maximo em que o navegador pode se expandir e não o seu valor atual do height/width
                         -> Mostra as dimensões onde os elementos HTML são renderizados, ou seja, mostra apenas área util do Browser


*/

function verAlturaLargura() {
  var altura = window.screen.availHeight
  var largura = window.screen.availWidth

  document.write("A altura do navegador é " + altura + "<br>E a largura é " + largura);


  // Exemplo de logica com o BOM
if(largura <= 500) {
  document.write("<br>Lógica para impressão do menu versão mobile")
}else{
  document.write("<br>Lógica para impressão do menu versão web")
}
}

