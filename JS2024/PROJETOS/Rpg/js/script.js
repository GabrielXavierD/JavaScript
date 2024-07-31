/* **********PLAYER**********
VARIAVEIS DO Player*/
var botaoItens = document.getElementById("comprarItens")
var irCasa = document.getElementById("irParaCasa");
var cut = "";

irCasa.className = "esconde";
irCasa.setAttribute("disabled", "");

var vidaDoPlayer = Math.floor(Math.random() * 1500);
var danoDoPlayer = Math.floor(Math.random() * 1500);

if (vidaDoPlayer <= 100 || danoDoPlayer <= 100) {
    vidaDoPlayer += 200;
    danoDoPlayer += 200;
    console.log('Passou por aqui:', 'vidaDoPlayer: ', vidaDoPlayer, 'danoDoPlayer: ', danoDoPlayer);
}


document.getElementById("vidaPlayer").innerHTML = vidaDoPlayer;
document.getElementById("danoPlayer").innerHTML = danoDoPlayer;




/* **********BOSS**********
VARIAVEIS DO BOSS*/
var blocoDoBoss = document.getElementById("containerBoss")
var vidaDoBoss = Math.ceil(Math.random() * 1500);
var danoDoBoss = Math.ceil(Math.random() * 1500);
var dificuldadeDoBoss = "";

var imgBoss;


function boss() {
    blocoDoBoss.style.display = "block";

    irCasa.className = "";
    irCasa.removeAttribute("disabled", "");


    vidaDoBoss = Math.ceil(Math.random() * 1500);
    danoDoBoss = Math.ceil(Math.random() * 1500);

    document.getElementById("vidaBoss").innerHTML = vidaDoBoss;
    document.getElementById("danoBoss").innerHTML = danoDoBoss;

    if (vidaDoBoss >= 1000 && danoDoBoss >= 1000) {
        dificuldadeDoBoss = "&#9733&#9733&#9733&#9733&#9733";
        document.getElementById("dificuldadeBoss").innerHTML = dificuldadeDoBoss;

    } else if (vidaDoBoss >= 500 && vidaDoBoss < 1000 || danoDoBoss >= 500 && danoDoBoss < 1000) {
        dificuldadeDoBoss = "&#9733&#9733&#9733&#9733"
        document.getElementById("dificuldadeBoss").innerHTML = dificuldadeDoBoss;

    } else {
        dificuldadeDoBoss = "&#9733&#9733&#9733"
        document.getElementById("dificuldadeBoss").innerHTML = dificuldadeDoBoss;
    }

}

function atacar() {
    if (vidaDoBoss <= 0) {
        alert("Boss já derrotado! Procure outro Boss ou vá para casa!");
        return false; //parando a função
    }

    console.log('ANTES vidaDoBoss: ', vidaDoBoss)

    alert("O player ira atacar o Boss!")
    vidaDoBoss = vidaDoBoss - danoDoPlayer
    alert("Vida restante do Boss: " + vidaDoBoss)
    document.getElementById("vidaBoss").innerHTML = vidaDoBoss;

    console.log('DEPOIS vidaDoBoss: ', vidaDoBoss);

    if (vidaDoBoss > 0) {
        alert("O Boss continua vivo! O Boss irá atacar!")
        vidaDoPlayer = vidaDoPlayer - danoDoBoss
        alert("Vida restante do Player: " + vidaDoPlayer);
        document.getElementById("vidaPlayer").innerHTML = vidaDoPlayer;
    } else {
        alert("O Boss foi derrotado!")
        document.getElementById("vidaBoss").innerHTML = 0;
        alert("O player Venceu!")
    }

    if (vidaDoPlayer < 0) {
        alert("O Player foi derrotado!")
        document.getElementById("vidaPlayer").innerHTML = 0;
        alert("O Boss Venceu!")
        alert("Você MORREU! O jogo será reiniciado!");
        window.location.href = "jogo.html";
    }
}


function procurarBoss() {
    alert("Você decidiu procurar outro Boss!");
    alert("Você está andando pelo mapa.");
    alert("Você encontrou um novo Boss! Tome cuidado!");


/* **********IMG BOSS***********/
var numBoss = Math.ceil(Math.random() * 5);

function criaImagem(numBoss) {
    var divConteudo = document.getElementById("conteudo");

    console.log("IMAGEM ANTIGA:", imgBoss)
    if (imgBoss) {
        imgBoss.remove();
    }

   
    imgBoss = document.createElement("img");
    imgBoss.src = "./assets/img/BOSS/boss" + numBoss + ".jpg";
    imgBoss.classList.add("imgBoss");
    console.log("IMAGEM NOVA (REMOVEU A ANTIGA):", imgBoss)



    divConteudo.insertBefore(imgBoss, divConteudo.firstChild);
    console.log("ADICIONANDO NA DIV CONTEUDO:", divConteudo);
}

switch (numBoss) {
    case 1:
        console.log("SWITCH: ", numBoss);
        criaImagem(numBoss);
        break;
    case 2:
        console.log("SWITCH: ", numBoss);
        criaImagem(numBoss);
        break;
    case 3:
        console.log("SWITCH: ", numBoss);
        criaImagem(numBoss);
        break;
    case 4:
        console.log("SWITCH: ", numBoss);
        criaImagem(numBoss);
        break;
    case 5:
        console.log("SWITCH: ", numBoss);
        criaImagem(numBoss);
        break;
}




    boss()

    botaoItens.setAttribute("disabled", "");
    botaoItens.className = "esconde";
    irCasa.className = "ajustaBotao";

}


function irEmbora() {
    alert("Você decidiu ir embora para casa!");
    alert("Você está andando pelo mapa.");
    alert("Você chegou em casa!");
    blocoDoBoss.style.display = "none";

    botaoItens.removeAttribute("disabled", "");
    botaoItens.className = "";

    irCasa.className = "esconde";
    irCasa.setAttribute("disabled", "");

}
function fugir() {
    alert("Você decidiu fugir!");
    alert("Você está andando pelo mapa.");
    alert("Você está parado.");
    alert("Escolha algo para fazer!");
    blocoDoBoss.style.display = "none";
    botaoItens.setAttribute("disabled", "");
    botaoItens.className = "esconde";

    irCasa.className = "ajustaBotao";
}



function enviarDados() {
    var usuario = document.getElementById("nomePlayer").value;
    console.log('usuario: ', usuario);

    var radios = document.getElementsByName('sexo');
    var sexoSelecionado = "";

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            sexoSelecionado = radios[i].value;
            break;
        }
    }

    console.log('sexo: ', sexoSelecionado);

    if (usuario === "" || sexoSelecionado === "") {
        alert("Preencha todos os campos do formulário!");
    } else {
        // Redireciona para a página do jogo com os parâmetros
        window.location.href = "jogo.html?" + usuario + "?" + sexoSelecionado;
    }
}


/* **********EXPLICAÇÃO**********
Ordem dos acontecimentos abaixo:
-var paramURL recebe ?usuario?sexoSelecionado
-Remove o PRIMEIRO "?" e o resultado é: usuario?sexoSelecionado

-O metodo .split divide no parametro informado e transforma em Array, 
    ->Ou seja, var parametros agora é um array com 2 itens 
        ->No caso, dividiu no "?" em usuario?sexoSelecionado e "parametros" agora contém/vira um array com 2 itens: ["usuario", "sexoSelecioando"]

-Posicao 0 do array é o usuario
-Posicao 1 do array é o sexoSelecionado

-Fazemos a verificação: se for true, há algo na variavel "usuarioAtual", então adicionamos o valor contido em "usuarioAtual" entre (.innerHTML) a tag que contém o id "nomePlayer"
*/

var paramURL = window.location.search;
paramURL2 = paramURL.replace("?", "");
console.log('paramURL2: ', paramURL2);

var parametros = paramURL2.split("?");
var usuarioAtual = parametros[0];
var sexoAtual = parametros[1];

console.log('usuarioAtual: ', usuarioAtual);
console.log('sexoAtual: ', sexoAtual);

if (usuarioAtual) {
    document.getElementById("nomePlayer").innerHTML = usuarioAtual;
}


