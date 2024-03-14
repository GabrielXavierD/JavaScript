const synth = window.speechSynthesis; //constante "synth" recebendo modulo de Synthesis (.speechSynthesis)

function falar() {
    let conteudoFalar = document.getElementById('textoFala').value; //acessando input com id "txt" e atribuindo seu valor na variavel "t"
    let voices = synth.getVoices(); //acessando as vozes disponiveis no navegador atraves da constante "synth"

    //voices = é um array com um conjunto de vozes do navegador
    if (voices.length !== 0) //se o tamanho de voices for estritamente diferente de 0 -> vendo se tem vozes disponiveis
        console.log("falar");

    //configurando uma mensagem:
    let mensagem = new SpeechSynthesisUtterance(); //criando nova sintese de voz: "mensagem" e dentro desse objeto esta sendo configurado as propriedades (rate,  pitch, text, lang)
            
    //configurações:
            mensagem.voice = voices[0]; //escolhendo a voz 0 - geralmente essa está disponivel na maioria dos navegadores
            mensagem.rate = 1; //velocidade 1 (padrão)
            mensagem.pitch = 1; //tom 1 (padrão)
            mensagem.text = conteudoFalar; //pegando a mensagem que irá ser falada
            mensagem.lang = "pt-BR"; //definindo a linguagem da mensagem/sintese de voz

    synth.speak(mensagem);
    // fazendo modulo "synth" (criado no inicio) realizar a sintese/fala (.speak) passando a mensagem configurada "mensagem"

}

document.getElementById("play").onclick = falar;
//criando o evento ao clicar no botao (.onclick) -> ao clicar ele chama a função falar()