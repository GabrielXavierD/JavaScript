/*
É muito comum dentro das nossas aplicações existirem trechos de código suscetíveis a erros que geram
exceção. Ou seja, exceções são aqueles erros que interrompem o processamento do script, que interrompem a lógica do
algoritmo, fazendo com que a aplicação literalmente morra.

Nesses casos geralmente o próprio interpretador da linguagem, no caso do JS, o browser, ele dispara para o usuário informações técnicas, mas aí, o usuário acaba ficando perdido...

O TRATAMENTO DE ERROS
-É uma técnica que podemos empregar em algumas partes do nosso código para evitar que erros interrompam a nossa aplicação (exceções);
-O tratamento de erros é um dos pilares para implementação do paradigma de programação reativa;
-É importante para deixar as aplicações mais seguras;
-Podemos registrar esses erros e até mesmo fazer com que a nossa aplicação se torne reativa a certas situações;
-TRY, CATCH, FINALLY e THROW;

Exceção: erro que faz o processamento morrer

*/




// Array bidimensional - há 2 entradas no indice 1
var video = []
        video[1] = []                            // -> criando um array na posição 1 do array "Pai"
          video[1]["Nome"] = "Naruto"             // -> criando indice/propriedade "Nome", no array 1 "Filho" e atribuindo "Naruto" a ele
          video[1]["Categoria"] = "Anime"

        
document.write(video)
document.write(video[1]["Nome"])          

console.log(video)


/*
Abaixo há uma função ficticia -apenas para o ex.- para recuperar video do servidor:

    Dentro dessa função, como seria para uma requisição http, poderia haver uma serie de erros ao realizar a requisição 
    Ex.: Pode ser que durante esse processo de requisição o vídeo não esteja mais disponível etc...

    O que essa função faz?
    -Estamos forçando um "erro" pra simular como seria a exceção, ele retorna uma exceção, um erro que interrompe nosso algoritmo.
    
    Como esse erro é gerado?
    -Estamos tentando acessar um indice 0 que não existe no array original, o que causa um undefined, que é um erro, mas não uma exceção. Portanto, ao acessar o array "video", que seria um atributo de undefined (o "filho") causaremos uma exceção, ou seja, interrompe o algoritmo.


function recuperaVideo(video) {
    logica

    console.log(video[0]["video"])
    console.log("A aplicação não morreu") 
}
recuperaVideo(video);


*************************************************************************************************************************************************



EXPLICAÇÃO TRY, CATCH, THROW E FINALLY 
-Podemos usar os 4 juntos, somente 2 deles etc...

=TRY=
-Try: tente
-Toda parte do código que pode ou talvez apresente algum erro ou exceção, deve ser colocada dentro do try 
-Podemos utilizar quantos try's forem necessarios, sem limitações


=TRY FINALLY=
-Try: tente
-Finally: finalmente (pode ser aplicado com o try e com o catch)
TRY FINALLY: Apos TENTAR alguma coisa FINALIZE essa coisa de alguma forma.

Caso aconteça algum erro no TRY, ele executa o código contido no FINALLY, mas, o erro continua sendo mostrado no console.
Ou seja, a nossa aplicação ainda não está reativa a ponto de se recuperar de um erro (de uma excessão) e continuar funcionando normalmente.


=TRY CATCH=
-Try: tente
-Catch(): pegar (recebe o erro por parametro e faz uma ação, o que não deixa o fluxo da aplicação quebrar)


=TRY CATCH FINALLY=
-Try: tente
-Catch(): pegar
-Finally: finalmente


THROW
-Throw: lançar algo

-Ele vai um pouco em contramão em relação a ideia de tornar a aplicação reativa quando ocorrer algum erro, pode ser utilizado, mas 
se quisermos tornar a aplicação reativa, não o utilizamos no tratamento de erros (junto com o CATCH etc...);
-A partir dele nós podemos criar uma nova (new) instância do objeto Error() e forçar a exibição desse objeto, fazendo com que a aplicação seja interrompida;
-Devemos indicar qual o local onde a exceção vai acontecer e podemos personalizar qual mensagem ela vai apresentar nesses locais (no console);
-É geralmente utilizado no CATCH, caso seja necessario o interrompimento do script;
    ->Mas pode ser colocado em qualquer local da aplicação, exemplo: a primeira linha do script, ja inicia com o erro, ou seja, 
      não necessariamente inicia dentro do tratamento de erros e sim fora dele;
    ->Mas, no caso do CATCH, nada impede que antes do interrompimento, seja feita uma ação de armazenamento desse erro no servidor, possibilitando que os desenvolvedores deem uma analisada nesse erro, evitando que esse comportamento caia no esquecimento.

-Serve para lançar exceções dentro das nossas aplicações.

Sintaxe:
throw new Error()

*/



/* 
Ele vai forçar uma exceção dentro do código forçando a interrupção do script.
O código abaixo, gera uma mensagem personalizada no erro apresentado no console.

throw new Error("Iniciando o script forçando um erro  - Houve um erro estamos trabalhando nisso! :-)")

CODIGO COMENTADO - POIS SE Ñ, NÃO FUNCIONA A FUNÇÃO ABAIXO:
*/

function recuperaVideo(video) {

    try {
        //tudo que pode dar erro se coloca aq
        console.log(video[0]["video"])
    } catch(erro) {
        /*o erro continua acontecendo, porem, não teremos mais uma exceção que interromperá a logica do script, agora o tratamos aq

        erro (parametro do catch) = não é o erro do try acontecendo, mas sim, é a string que contem o erro vindo do try, só estamos apresentando o que tem dentro dela 
        
        -> aqui poderiamos implementar uma logica capaz de pegar o erro e encaminhar para o servidor - no caso, fiz a função tratarErro() - por ex. e relatar o erro p/ equipe de desenvolvimento 

        */
        tratarErro(erro) 
        console.log("Agora sim podemos tratar esse erro")
        throw new Error("Houve um erro mas não se preocupe, estamos trabalhando nisso agora! :)")

    } finally {
        console.log("SEMPRE PASSA POR AQUI (try / catch)")
    }
    console.log("A aplicação não morreu") //esse console, quando tratamos o erro no catch, ele volta a ser exibido

}

recuperaVideo(video);


function tratarErro(erro){
    // logica para registrar o erro no servidor
    console.log(erro)
}
