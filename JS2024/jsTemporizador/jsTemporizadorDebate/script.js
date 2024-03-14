let tempo = 0; //tempo em segundos - a ser decrementado
let working = false; //sinaliza/flag pra ver se o temporizador está em funcionamento ou não
let intervaloID = 0; // armazena o id do intervalo que irá ser criada atraves de uma função de temporização - intervalo que permite limpa-lo

function exibeTempo(){ //função que é chamada a cada 1 segundo
        let minutos = parseInt(tempo/60); //pegando tempo em segundos da var global "tempo" e dividindo por 60 pra ter os minutos
        let segundos = tempo%60; //resto da divisão de tempo por 60 = oq sobrou em segundos

        //formatando os numeros em duas casas
        let sMin = minutos.toString().padStart(2, '0'); 
        let sSeg = segundos.toString().padStart(2, '0');

        let tempoTela = sMin + ":" + sSeg; 
        /*concatenando (exemplo de resultado = 12:00) 
        -> e armazenando em tempoTela (= tempo com uma formatação pra ser apresentado no input)*/

        document.querySelector(".cronometro").value = tempoTela; 
        //acessando a class (.querySelector) ".cronometro" e atribuindo (.value) o tempo formatado (tempoTela) no input 
        tempo--; //decrementando segundos


        if(tempo < 0){ // verificando se o tempo já chegou em zero, se sim faça:

            working = false; //sinalizando que terminou a temporização

            clearInterval(intervaloID); //limpando o intervalo de tempo usando o id que havia atribuido ali em baixo
        
            document.querySelector(".cronometro").style.backgroundColor = '#ccc'; 
            /*acessando o class (.querySelector) ".cronometro" -> acessando o CSS (.style) 
            -> acessando a propriedade (.backgroundColor) -> atribuindo uma cor para a propriedade */

        }else if(tempo < 15) { // caso ainda não tenha chegado no final da temporização, faça: alerta dos 15 seg. finais
                document.querySelector(".cronometro").style.backgroundColor = 'red'; //mudando para o fundo vermelho nos ultimos 15s
            }

/*e enquanto não chegar nos 15 segundos finais ou em 0, a função exibeTempo() ficará sendo chamada a cada 1segundo e seguirá sua lógica:
calcular minutos e segundos -> formatar em duas casas -> concatenar -> apresentar no input -> decrementar o tempo
vai ficar fazendo isso até chegar nos 15 segundos finais e depois em 0*/
        }


    function temporizador(t){
 //passando "t" como parametro do temporizador (criado aqui - ele que recebe os valores do tempo, que foram colocados no html: 60, 120, 180, 300 etc...)
    
    if(working == false){
    /*verificando se o temporizador não está funcionando -> se estiver funcionando, não faz e não altera a temporização em andamento 
    -> se não estiver, faz: inicia nova temporização*/   

        working = true; //iniciando temporização
        tempo = t; //tempo sendo atribuido na variavel global -> pra poder trabalhar nas funções acima
        exibeTempo(); //chama a função exibeTempo()
        
        intervaloID = setInterval(exibeTempo, 1000); 
        /*criando um intervalo de temporização (função nativa do JavaScript -> setInterval) 
        - chamando a função exibeTempo() a cada 1s -> atribuindo na variavel global "intervaloID" o id do intervalo de tempo que foi criado*/
    }
}