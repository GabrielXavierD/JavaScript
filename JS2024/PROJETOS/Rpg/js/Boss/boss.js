/**********ASSETS***********/
let bodyPagina = document.getElementById("body");
let audioPlayer = document.getElementById("audioPlayer");
let audioSrcPlayer = document.getElementById("audioSrcPlayer");
audioSrcPlayer.src = "";

/* **********BOSS**********
letIAVEIS DO BOSS*/
let blocoDoBoss = document.getElementById("containerBoss");
let vidaDoBoss = Math.ceil(Math.random() * 1500);
let danoDoBoss = Math.ceil(Math.random() * 1500);
let dificuldadeDoBoss = "";

let imgBoss;

function boss() {
  blocoDoBoss.style.display = "block";

  btnIrParaCasa.className = "";
  btnIrParaCasa.removeAttribute("disabled", "");

  vidaDoBoss = Math.ceil(Math.random() * 1500);
  danoDoBoss = Math.ceil(Math.random() * 1500);

  if (vidaDoBoss && danoBoss) {
    document.getElementById("vidaBoss").innerHTML = vidaDoBoss;
    document.getElementById("danoBoss").innerHTML = danoDoBoss;
  }

  if (vidaDoBoss >= 1000 && danoDoBoss >= 1000) {
    dificuldadeDoBoss = "&#9733&#9733&#9733&#9733&#9733";
    document.getElementById("dificuldadeBoss").innerHTML = dificuldadeDoBoss;
  } else if (
    (vidaDoBoss >= 500 && vidaDoBoss < 1000) ||
    (danoDoBoss >= 500 && danoDoBoss < 1000)
  ) {
    dificuldadeDoBoss = "&#9733&#9733&#9733&#9733";
    document.getElementById("dificuldadeBoss").innerHTML = dificuldadeDoBoss;
  } else {
    dificuldadeDoBoss = "&#9733&#9733&#9733";
    document.getElementById("dificuldadeBoss").innerHTML = dificuldadeDoBoss;
  }
}

function atacar() {
  if (vidaDoBoss <= 0) {
    alert("Boss já derrotado! Procure outro Boss ou vá para casa!");
    return false; //parando a função
  }

  console.log("ANTES vidaDoBoss: ", vidaDoBoss);

  alert("O player ira atacar o Boss!");
  vidaDoBoss = vidaDoBoss - danoDoPlayer;
  alert("Vida restante do Boss: " + vidaDoBoss);
  document.getElementById("vidaBoss").innerHTML = vidaDoBoss;

  console.log("DEPOIS vidaDoBoss: ", vidaDoBoss);

  if (vidaDoBoss > 0) {
    alert("O Boss continua vivo! O Boss irá atacar!");
    vidaDoPlayer = vidaDoPlayer - danoDoBoss;
    alert("Vida restante do Player: " + vidaDoPlayer);
    document.getElementById("vidaPlayer").innerHTML = vidaDoPlayer;
  } else {
    alert("O Boss foi derrotado!");
    document.getElementById("vidaBoss").innerHTML = 0;
    alert("O player Venceu!");
  }

  if (vidaDoPlayer < 0) {
    alert("O Player foi derrotado!");
    document.getElementById("vidaPlayer").innerHTML = 0;
    alert("O Boss Venceu!");
    alert("Você MORREU!");
    window.location.href = "gameOver.html";
  }
}

function procurarBoss() {
  let numeroAleatorio = Math.ceil(Math.random() * 17);
  console.log("numeroAleatorio: ", numeroAleatorio);

  if (numeroAleatorio > 2) {
    bodyPagina.style.backgroundImage =
      "url(./assets/img/bg/fundo" + numeroAleatorio + ".jpg)";
  } else {
    numeroAleatorio = numeroAleatorio + 2;
  }

  // Troca o src do elemento <source>
  let audioAleatorio = Math.ceil(Math.random() * 5);
  audioSrcPlayer.src =
    "assets/audio/procurarBoss/Action_" + audioAleatorio + ".mp3";
  // Atualiza o audio player para carregar o novo src
  audioPlayer.load();
  // Opcionalmente, reproduz o áudio
  audioPlayer.play();

  alert("Você decidiu procurar outro Boss!");
  alert("Você está andando pelo mapa.");
  alert("Você encontrou um novo Boss! Tome cuidado!");

  /* **********IMG BOSS***********/
  let numBoss = Math.ceil(Math.random() * 5);

  function criaImagem(numBoss) {
    let divConteudo = document.getElementById("conteudo");

    console.log("IMAGEM ANTIGA:", imgBoss);
    if (imgBoss) {
      imgBoss.remove();
    }

    imgBoss = document.createElement("img");
    imgBoss.src = "./assets/img/BOSS/boss" + numBoss + ".jpg";
    imgBoss.classList.add("imgBoss");
    console.log("IMAGEM NOVA (REMOVEU A ANTIGA):", imgBoss);

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

  boss();

  btnComprarItens.setAttribute("disabled", "");
  btnComprarItens.className = "esconde";
  btnIrParaCasa.className = "ajustaBotao";
}

function irEmbora() {
  alert("Você decidiu ir embora para casa!");
  window.location.href = "irPraCasa.html";
}

function fugir() {
  bodyPagina.style.backgroundImage = "url(../assets/img/bg/fundo1.jpg)";

  // Troca o src do elemento <source>
  let audiosAleatorios = Math.ceil(Math.random() * 10);
  audioSrcPlayer.src =
    "assets/audio/procurarBoss/Ambient" + audiosAleatorios + ".mp3";
  // Atualiza o audio player para carregar o novo src
  audioPlayer.load();
  // Opcionalmente, reproduz o áudio
  audioPlayer.play();

  alert("Você decidiu fugir!");
  alert("Você está andando pelo mapa.");
  alert("Você está parado.");
  alert("Escolha algo para fazer!");
  blocoDoBoss.style.display = "none";
  btnComprarItens.setAttribute("disabled", "");
  btnComprarItens.className = "esconde";

  btnIrParaCasa.className = "ajustaBotao";
}
