/* **********BOSS**********
VARIAVEIS DO BOSS*/
let blocoDoBoss = document.getElementById("containerBoss");
let vidaDoBoss = Math.ceil(Math.random() * 1500);
let danoDoBoss = Math.ceil(Math.random() * 1500);
let categoriaBoss = "";
let dificuldadeDoBoss = document.getElementById("dificuldadeBoss");
let imgBoss;

function boss() {
  vidaDoBoss = Math.ceil(Math.random() * 1500);
  danoDoBoss = Math.ceil(Math.random() * 1500);

  if (vidaDoBoss && danoBoss) {
    document.getElementById("vidaBoss").innerHTML = vidaDoBoss;
    document.getElementById("danoBoss").innerHTML = danoDoBoss;
  }

  if (vidaDoBoss >= 1000 && danoDoBoss >= 1000) {
    categoriaBoss = "&#9733&#9733&#9733&#9733&#9733";
    dificuldadeDoBoss.innerHTML = categoriaBoss;
  } else if (
    (vidaDoBoss >= 500 && vidaDoBoss < 1000) ||
    (danoDoBoss >= 500 && danoDoBoss < 1000)
  ) {
    categoriaBoss = "&#9733&#9733&#9733&#9733";
    dificuldadeDoBoss.innerHTML = categoriaBoss;
  } else {
    categoriaBoss = "&#9733&#9733&#9733";
    dificuldadeDoBoss.innerHTML = categoriaBoss;
  }
}

function criaImagemBoss() {
  let numBoss = Math.ceil(Math.random() * 5);
  const divImgBoss = document.getElementById("divImgBoss");

  divImgBoss.innerHTML = "";
  const imgBoss = document.createElement("img");
  imgBoss.src = `./assets/img/BOSS/boss${numBoss}.jpg`;
  imgBoss.classList.add("imgBoss");
  divImgBoss.appendChild(imgBoss);
}

function geraFundoEAudio() {
  let numeroAleatorio = Math.ceil(Math.random() * 17);
  if (numeroAleatorio <= 2) {
    numeroAleatorio += 2;
  }
  document.body.style.backgroundImage = `url(./assets/img/bg/fundo${numeroAleatorio}.jpg)`;

  const audioAleatorio = Math.ceil(Math.random() * 5);
  const audioSrcPlayer = document.getElementById("audioSrcPlayer");
  const audioPlayer = document.getElementById("audioPlayer");
  audioSrcPlayer.src = `assets/audio/procurarBoss/Action_${audioAleatorio}.mp3`;
  audioPlayer.load();
  audioPlayer.play();
}

function procurarBoss() {
  if (window.location.pathname.includes("buscarBoss.html")) {
    criaImagemBoss();
    boss();
    geraFundoEAudio();
  } else {
    window.location.href = "buscarBoss.html";
  }
}
document.getElementById("outroBoss").addEventListener("click", procurarBoss);

// O boss já é criado antes do player ir para a página "buscarBoss" -> evita bugar a formatação do bloco do boss
window.onload = function () {
  criaImagemBoss();
  boss();
  geraFundoEAudio();
};

function atacar() {
  if (vidaDoBoss <= 0) {
    alert("Boss já derrotado! Procure outro Boss ou vá para casa!");
    return;
  }

  alert("O player ira atacar o Boss!");
  vidaDoBoss = vidaDoBoss - danoDoPlayer;
  alert("Vida restante do Boss: " + vidaDoBoss);
  document.getElementById("vidaBoss").innerHTML = vidaDoBoss;

  if (vidaDoBoss > 0) {
    alert("O Boss continua vivo! O Boss irá atacar!");
    vidaDoPlayer = vidaDoPlayer - danoDoBoss;
    alert("Vida restante do Player: " + vidaDoPlayer);
    document.getElementById("vidaPlayer").innerHTML = vidaDoPlayer;
  } else {
    alert("O Boss foi derrotado!");
    document.getElementById("vidaBoss").innerHTML = 0;
    alert("O player Venceu!");
    document.getElementById("fugirBoss").style.display = "none";
  }

  if (vidaDoPlayer <= 0) {
    alert("O Player foi derrotado!");
    document.getElementById("vidaPlayer").innerHTML = 0;
    alert("O Boss Venceu!");
    alert("Você MORREU!");
    window.location.href = "gameOver.html";
  }
}
