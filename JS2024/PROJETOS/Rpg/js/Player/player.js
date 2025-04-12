/**********ASSETS***********/
let bodyPagina = document.getElementById("body");
let audioPlayer = document.getElementById("audioPlayer");
let audioSrcPlayer = document.getElementById("audioSrcPlayer");
audioSrcPlayer.src = "";

/* **********PLAYER**********
VARIAVEIS DO Player*/
let btnComprarItens = document.getElementById("comprarItens");
let btnIrParaCasa = document.getElementById("irParaCasa");

if (!btnIrParaCasa.classList.contains("esconde")) {
  btnIrParaCasa.className = "esconde";
  btnIrParaCasa.setAttribute("disabled", "");
}

let vidaDoPlayer = Math.floor(Math.random() * 1500);
let danoDoPlayer = Math.floor(Math.random() * 1500);

if (vidaDoPlayer <= 100 || danoDoPlayer <= 100) {
  vidaDoPlayer += 200;
  danoDoPlayer += 200;
}

if (vidaDoPlayer && danoDoPlayer) {
  document.getElementById("vidaPlayer").innerHTML = vidaDoPlayer;
  document.getElementById("danoPlayer").innerHTML = danoDoPlayer;
}

let getUsuario = JSON.parse(localStorage.getItem("Usuario"));
document.getElementById("nomePlayerP").innerHTML = getUsuario.nome;

function irEmbora() {
  alert("Você decidiu ir embora para casa!");
  window.location.href = "irPraCasa.html";
}

function fugir() {
  bodyPagina.style.backgroundImage = "url(../assets/img/bg/fundo1.jpg)";
  let audiosAleatorios = Math.ceil(Math.random() * 10);
  audioSrcPlayer.src =
    "assets/audio/procurarBoss/Ambient" + audiosAleatorios + ".mp3";
  audioPlayer.load();
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
