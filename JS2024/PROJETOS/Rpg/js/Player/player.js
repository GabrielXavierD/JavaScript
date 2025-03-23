/* **********PLAYER**********
VARIAVEIS DO Player*/
let btnComprarItens = document.getElementById("comprarItens");
let btnIrParaCasa = document.getElementById("irParaCasa");
let cut = "";

if (btnIrParaCasa) {
  btnIrParaCasa.className = "esconde";
  btnIrParaCasa.setAttribute("disabled", "");
}

let vidaDoPlayer = Math.floor(Math.random() * 1500);
let danoDoPlayer = Math.floor(Math.random() * 1500);

if (vidaDoPlayer <= 100 || danoDoPlayer <= 100) {
  vidaDoPlayer += 200;
  danoDoPlayer += 200;
  console.log(
    "Passou por aqui:",
    "vidaDoPlayer: ",
    vidaDoPlayer,
    "danoDoPlayer: ",
    danoDoPlayer
  );
}

if (vidaDoPlayer && danoDoPlayer) {
  document.getElementById("vidaPlayer").innerHTML = vidaDoPlayer;
  document.getElementById("danoPlayer").innerHTML = danoDoPlayer;
}

  let getUsuario = JSON.parse(localStorage.getItem("Usuario"));
  document.getElementById("nomePlayerP").innerHTML = getUsuario.nome;
