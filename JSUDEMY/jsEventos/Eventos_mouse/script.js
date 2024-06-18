/* Eventos servem p/ capturar ações feitas pelo user dentro do browser 
-> Ex.: movimento do mouse, click, click em uma tecla do teclado, foco em elemento do formulario, carregamento da página etc...
Podem ser combinados com funções e podemos disparar logicas de acordo com ações do usuario etc...

-Eles são declarados nos elementos HTML utilizando a sintaxe de propriedade, exemplo:
  <div onclick=""></div>

-Podemos atribuir funções para serem disparadas 
    <div onclick="acao()"></div>

-Esses eventos podem ser combinados
    <div onclick="acao1()" onmouseout="acao2()"></div>
    
-Alguns eventos não estão disponiveis em certos elementos HTML -> devemos conultar no w3schools em DOM Events

5 EVENTOS CAPTURADOS PELO JS ATRAVES DO USO DO MOUSE
-onclick = acionado quando algo é clicado
-ondblclick = acionado quando algo é clicado 2 vezes
-onmouseup = acionado  quando o click sobre determinado elemento é liberado (segura o click e dps solta)
-onmouseover = acionado quando o cursor do mouse sobrepoe o elemento
-onmoseout = acionado quando o cursor do mouse sai da regiao da página ocupada pelo o elemento
*/


function acao(){
    alert("Você clicou na div com uma FUNÇÃO");
}

function acao1(){
    alert("Você clicou no elemento");
}

function acao2(){
    alert("O mouse sai do elemento");
}