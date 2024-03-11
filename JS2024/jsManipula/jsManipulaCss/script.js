//iniciando uma variavel que seria o tamanho incial
let tamanho = 50; //Tamanho inicial começa em 50 no width e height no CSS da DIV
function aumentaDiv(){
     //toda vez que aumenta 10 na variavel "tamanho" (soma da váriavel "tamanho" (com seu valor inicial de 50) + o novo valor 10)
    tamanho = tamanho + 10;

    /*ACESSANDO A DIV (id = div1) PELO SEU CSS (.style) 

    e atribuindo um novo valor a largura (.width) e altura (.height) dentro do CSS (.style) 
    é atribuido +10 na largura e altura da div
    a váriavel com os novos valores, no caso "tamanho" (pós adição de 10 ao valor inicial)
    adiciona somente o número (60) e para que o número não fique sozinho no CSS 
    e o CSS reconheça o tamanho certinho é preciso concatenar com o + "px" pra ficar "60px" no CSS*/
    document.getElementById("div1").style.width = tamanho + "px";
    document.getElementById("div1").style.height = tamanho + "px";

}