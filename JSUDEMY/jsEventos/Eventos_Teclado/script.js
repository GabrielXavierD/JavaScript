/* 
-Disparados a partir da interação do usuário com o browser a partir do teclado.

-Deve ser colocado como um atributo HTML
<div onkeydown=""></div>

-Alguns eventos não estão disponiveis em certos elementos HTML -> devemos conultar no w3schools em DOM Events

Há 3 eventos do teclado
-onkeydown = acionado quando uma tecla é apertada, antes de inserir o caractere -> Bom p/ tratar problemas antes da exibição do caractere
-onkeypress = acionado quando mantem a tecla pressionada 
    -> E somente quando a tecla representa um caractere (Ex.: não funciona com ctrl, pois não tem caracter)
    -> Bom p/ tratar problemas antes da exibição do caractere
    
-onkeyup = acionado quando a tecla é solta (segura a tecla e solta) -> Bom p/ tratar problemas depois da exibição do caractere
*/


function acao(){
    alert("Voce apertou alguma tecla - evento disparado");
}

function acao1(){
    alert("Voce segurou alguma tecla - evento disparado");
}

function acao2(){
    alert("Voce soltou alguma tecla - evento disparado");

}