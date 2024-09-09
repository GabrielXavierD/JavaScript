/* Eventos formulario

-Alguns eventos não estão disponiveis em certos elementos HTML -> devemos conultar no w3schools em DOM Events

Exemplo de 3 eventos 
-onfocus = acionado quando o elemento recebe foco - quando clicado
-onblur = acionado quando o elemento perde o foco - quando apertamos tab ou clicamos em outro elemento
-onchange = acionado quando o estado do elemento é modificado - Muito utilizado junto com o SELECT do HTML
*/


function acao(){
    console.log("O elemento recebeu foco - evento disparado");
}

function acao1(){
   console.log("O elemento perdeu o foco - evento disparado");
}

function acao2(){
    console.log("O elemento foi modificado - evento disparado");
}

