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
-TRY CATCH FINALLY THROW


-Exceção: erro que faz o processamento morrer
*/

// Array bidimensional - há 2 entradas no indice 1
var video = []

video[1] = []
video[1]["Nome"] = "Naruto"
video[1]["Categoria"] = "Anime"

console.log(video)




/*
Função (ficticia, apenas para o ex.) para recuperar video do servidor
    Dentro dessa função, como seria para uma requisição http, poderia haver uma serie de erros ao realizar a requisição 
    Ex.: Pode ser que durante esse processo de requisição o vídeo não esteja mais disponível etc...


function recuperaVideo(video) {
    logica

    forçando um "erro" pra simular como seria, p/ retornar uma exceção, um erro que interrompa nosso algoritmo, so um ex.:

    ao tentar acessar um atributo de undefined(indice 0, que n existe no array), o nome, teremos um erro, uma exceção, que interrompe o processmento do script

    console.log(video[0]["video"])
    console.log("A aplicação não morreu") 
}

recuperaVideo(naruto.mp4);
*/






/* EXPLICAÇÃO

=TRY=
-Try: tente
-Toda parte do código que pode ou talvez apresente algum erro ou exceção, deve ser colocada dentro do try 
-Podemos utilizar quantos try's forem necessarios, sem limitações



=TRY FINALLY=
-Try: tente
-Finally: finalmente (pode ser aplicado com o try e com o catch)
TRY FINALLY: Apos TENTAR alguma coisa FINALIZE essa coisa de alguma forma

Caso aconteça algum erro no try, ele executa o código contido no FINALLY, mas, o erro continua sendo mostrado no console.
Ou seja, a nossa aplicação ainda não está reativa a ponto de se recuperar de um erro, de uma excessão e continuar funcionando normalmente.



=TRY CATCH=
-Try: tente
-Catch(): pegar (recebe/captura o erro por parametro e o trata/faz uma ação fazendo com que o fluxo da aplicação não quebre)


=TRY CATCH FINALLY=
-Try: tente
-Catch(): pegar
-Finally: finalmente



*/
function recuperaVideo(video) {

    try {
        //tudo que pode dar erro
        console.log(video[0]["video"])
    } catch(erro) {

    } finally {
        console.log("SEMPRE PASSA POR AQUI (try / catch)")
    }
    console.log("A aplicação não morreu")

}

recuperaVideo(video);

