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

function abreFecha() {
  const loja = document.getElementById("loja");
  const blocoPlayer = document.querySelector(".blocoPlayer");
  const blocoBoss = document.querySelector(".blocoBoss");
  if (loja && loja.style.display === "none") {
    loja.style.display = "flex";
    blocoPlayer.style.display = "none";
    blocoBoss.style.display = "none";
  } else if (loja) {
    loja.style.display = "none";
    blocoPlayer.style.display = "flex";
    blocoBoss.style.display = "flex";
  }
}

function gerarLoja() {
  const lojaExistente = document.getElementById("loja");
  if (lojaExistente) {
    lojaExistente.remove();
  }

  fetch("../loja.html")
    .then((resposta) => {
      console.log(resposta);
      if (!resposta.ok) throw new Error(`Erro: ${resposta.statusText}`);
      return resposta.text();
    })
    .then((html) => {
      const divLoja = document.createElement("div");
      divLoja.innerHTML = html;
      document.body.appendChild(divLoja);

      const fecha = document.querySelector(".fecha");
      const loja = document.getElementById("loja");
      const blocoPlayer = document.querySelector(".blocoPlayer");
      const blocoBoss = document.querySelector(".blocoBoss");

      if (blocoPlayer) {
        blocoPlayer.style.display = "none";
      }
      if (blocoBoss) {
        blocoBoss.style.display = "none";
      }

      function fechaLoja() {
        loja.style.display = "none";
        blocoPlayer.style.display = "flex";
        blocoBoss.style.display = "flex";
      }

      fecha.addEventListener("click", fechaLoja);
      btnComprarItens.onclick = abreFecha;
    })
    .catch((erro) => {
      console.error("Erro ao carregar a página:", erro);
      document.body.innerHTML = `<p>Erro ao carregar a página.</p>`;
    });
}

btnComprarItens.onclick = gerarLoja;
