var ongoing = false;
var recognition = null;

function verificaStatus(){
    if (ongoing == true){
        recognition.start();
    }
}

function init(){
    /*atribuindo como SpeechRecognition os modulos de reconhecimento de fala 
    (as vezes eles tem nomes diferentes em alguns navegadores, então só esta fazendo uma verificação "esse ou esse")*/
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition(); //instancia do serviço de Reconhecimento de voz
    
    //configurações
    recognition.interimResults = true; 
    recognition.lang = 'pt-BR';

    //adicionando um span na div
    var p = document.createElement('span');
    const words = document.querySelector('.words');
    words.appendChild(p);

    recognition.addEventListener('result', e => {
        //listener pra quando tiver um resultado de um reconhecimento de voz
        const transcript = Array.from(e.results)                            
        .map(result => result[0])                                           
        .map(result => result.transcript)
        .join('');
    
        //a cada resultado ele faz um append na div -> adiciona o resultado criando um span e appendando na div "words"
        p.textContent = transcript + ", ";
        if (e.results[0].isFinal) {
            p = document.createElement('span');
            words.appendChild(p);       
        }
        });

        //listener pra quando finaliza/pausa o reconhecimento de voz
    recognition.addEventListener('end', verificaStatus);
    recognition.start();

    //caso a flag esteja verdadeira ele continua reconhecendo a voz transcrevendo
}

function doStartStopCheck(){
    if(ongoing == true){ // se a transcrição estiver rodando e o user apertar no botao, vai interromper
        ongoing = false; //mudando flag pra falso
        recognition.stop(); //parando o serviço de reconhecimento de voz
        document.getElementById('btn_speech').innerHTML = "Transcrever Áudio"; // mudando o texto do botão     
    }
    else if (recognition) { // se existir a instância SpeechRecognition (caso já estiver iniciado ela em outro momento), apenas reinicia
        ongoing = true; //mudando flag pra true (reconhecimento em andamento)
        recognition.start(); //iniciando o serviço de reconhecimento de voz (reiniciando)        
        document.getElementById('btn_speech').innerHTML = "Interromper"; //mudando texto do botao pra interromper
    }
    else { // se ainda não criou instância, chama a função para inicialização (iniciando o reconhecimento pela primeira vez)
        console.log("init"); 
        ongoing = true; //mudando flag pra true
        init();    //criando o instanciamento do serviço - executa apenas na primeira vez - inicialização
        document.getElementById('btn_speech').innerHTML = "Interromper"; //mudando texto do botao
    }
}

function rolaScroll(){
    const w = document.querySelector('.words');
    w.scrollTop = w.scrollHeight;
}

setInterval(rolaScroll, 1000);