/* Estão relacionados com a manipulação da região de exibição das nossas páginas HTML na sala.
Janela = Frame

-Alguns eventos não estão disponiveis em certos elementos HTML -> devemos conultar no w3schools em DOM Events

Há 2 eventos de Frame
onrezise = acionado quando a pagina é redimensionada -> Ex.: transformar o layout
onscroll = acionado quando o scroll é usado
*/


function acao(){
    document.write("<p>A pagina foi redimensionada - evento disparado</p>");
}

function acao1(){
    document.write("<p>O scroll foi usado - evento disparado</p>");
}
