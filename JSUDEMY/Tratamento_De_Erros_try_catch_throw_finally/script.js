/*
É muito comum dentro das nossas aplicações existirem trechos de código suscetíveis a erros que geram
exceção. Ou seja, aqueles erros que interrompem o processamento do script, que interrompem a lógica do
algoritmo, fazendo com que a aplicação literalmente morra.

Nesses casos geralmente o próprio interpretador da linguagem, no caso do JS, o browser, ele dispara para o usuário informações técnicas, mas aí, o usuário acaba ficando perdido

O TRATAMENTO DE ERROS
-É uma técnica que podemos empregar em algumas partes do nosso código para evitar que erros interrompam a nossa aplicação;
-O tratamento de erros é um dos pilares para implementação do paradigma de programação reativa
-É importante para deixar as aplicações mais seguras;
-Podemos registrar esses erros e até mesmo fazer com que a nossa aplicação se torne reativa a certas situações

*/

// Array bidimensional - há 2 entradas no indice 1
var video = []
video[1] = []
video[1] = ["Nome"] = "Naruto"
video[1] = ["Categoria"] = "Anime"


/*
Função (ficticia, apenas para o ex.) para recuperar video do servidor
    Dentro dessa função, como seria para uma requisição http, poderia haver uma serie de erros ao realizar a requisição 
    Ex.: Pode ser que durante esse processo de requisição o vídeo não esteja mais disponível.

*/


function recuperaVideo(video){
// logica
}

recuperaVideo(naruto.mp4);


