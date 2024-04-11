//variaveis globais
let x = 300; //posicionamento inicial x da div
let y = 300; //posicionamento inicial y da div
let color = "white"; //cor inicial da div

    /*atribuindo como SpeechRecognition os modulos de reconhecimento de fala 
    (as vezes eles tem nomes diferentes em alguns navegadores, então só esta fazendo uma verificação "esse ou esse")*/
    let SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    let recognition = new SpeechRecognition(); //criando instancia do SpeechRecognition

    //configurações
    recognition.continuous = true; //configurando que irá ter um reconhecimento continuo
    recognition.lang = 'pt-BR'; //linguagem pt-BR
    recognition.interimResults = false; //não terá resultados intermediarios somente resultados finais
    recognition.maxAlternatives = 1;


    var diagnostic = document.querySelector('.output');
      var box = document.querySelector('#box');
 
      recognition.onresult = function(event) { 
        /* para cada resultado (.onresult) de reconhecimento de voz -> chama a função (function) e passa o evento (event) faça:*/
        
        let length = event.results.length;  
        let command = event.results[length-1][0].transcript; //atribuindo o ultimo comando de voz que foi transcrito pela API
                    //pega os resultados do evento indexado -> seu tamanho -1 -> na posição 0 -> .transcript (transcrição) -> OU SEJA, pegando ultimo comando de voz reconhecido pela API
       
       
         diagnostic.textContent = 'Resultado recebido: ' + command + '.';
        //a partir do comando de voz, se faz varias verificações
        if (command.toLowerCase().indexOf("direita") > -1){ //está presente a palavra "direita"? sim, faça:
          x += 50; //movimentando a div -> ex. resultado: left: 350px; top: 350px;
          updateBoxProperties(); //atualizador -> reatribuindo os valores das propriedades left e top
        }
        else if (command.toLowerCase().indexOf("esquerda") > -1){
          x -= 50;
          updateBoxProperties();
        }
        else if (command.toLowerCase().indexOf("cima") > -1){
          y -= 50;
          updateBoxProperties();
        }
        else if (command.toLowerCase().indexOf("baixo") > -1){
          y += 50;
          updateBoxProperties();
        }
        else if (command.toLowerCase().indexOf("verde") > -1){
          color = 'green'; //mudando cor na div
          updateBoxProperties(); //atualizador -> atualizando nova cor de fundo para div
        }
        else if (command.toLowerCase().indexOf("azul") > -1){
          color = 'blue';
          updateBoxProperties();
        }
        else if (command.toLowerCase().indexOf("vermelho") > -1){
          color = 'red';
          updateBoxProperties();
        }
        else if (command.toLowerCase().indexOf("branco") > -1){
          color = 'white';
          updateBoxProperties();
        } 
      }
 
      function updateBoxProperties(){ //atualizador
        box.style.left = x+"px"; //pegando os valores atualizados de "x" e atribuindo aos valores (vem do if) da propriedade left do css
        box.style.top = y+"px"; //pegando os valores atualizados de "y" e atribuindo aos valores (vem do if) da propriedade top do css
        box.style.backgroundColor = color; //pegando os valores atualizados de "color" e atribuindo (vem do if) a cor de fundo da div
      }
 
      document.querySelector('#btn-start').onclick = function() { //evento
        recognition.start(); //inicia o reconhecimento de voz
      }
 
      document.querySelector('#btn-stop').onclick = function() {
        recognition.stop(); //para o reconhecimento de voz
      }
