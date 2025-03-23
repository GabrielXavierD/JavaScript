let formCadastro = document.getElementById("formCadastro");

//******************************************************** CADASTRO
function enviarDados() {}

formCadastro.addEventListener("submit", (e) => {
  e.preventDefault();
  let usuario = document.getElementById("nomePlayerForm").value;
  let radios = document.getElementsByName("sexo");
  let sexoSelecionado = "";

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      sexoSelecionado = radios[i].value;
      break;
    }
  }
  console.log("envio user" + usuario);
  console.log("envio sx" + sexoSelecionado);

  if (usuario === "" || sexoSelecionado === "") {
    return alert("Preencha todos os campos do formulário!");
  } else {
    let objetoUsuario = new Usuario(usuario, sexoSelecionado);
    localStorage.setItem("Usuario", JSON.stringify(objetoUsuario));
    window.location.href = "jogo.html";
  }
});

class Usuario {
  constructor(nome, sexo) {
    this.nome = nome;
    this.sexo = sexo;
  }
}

function fechaInstrucao() {
  const instrucao = document.getElementById("textosInstrucao");
  instrucao.style.display = "none";
}

/* **********EXPLICAÇÃO**********
Ordem dos acontecimentos abaixo:
-let paramURL recebe ?usuario?sexoSelecionado

o metodo .replace("", "") substitui o primeiro item encontrado, pelo valor a ser substituido. NÃO SUBSTITUI TODOS DE UMA VEZ. Ou seja:
-Remove o PRIMEIRO "?" e o resultado é: usuario?sexoSelecionado

-O metodo .split divide no parametro informado e transforma em Array, 
    ->Ou seja, let parametros agora é um array com 2 itens 
        ->No caso, dividiu no "?" em "usuario?sexoSelecionado" e let "parametros" agora contém/vira um array com 2 itens: ["usuario", "sexoSelecioando"]

-Posicao 0 do array é o usuario
-Posicao 1 do array é o sexoSelecionado

-Fazemos a verificação: se for true, há algo na letiavel "usuarioAtual", então adicionamos o valor contido em "usuarioAtual" entre (.innerHTML) a tag que contém o id "nomePlayer"
*/

/*
let paramURL = window.location.search;
paramURL2 = paramURL.replace("?", "");
console.log("paramURL2: ", paramURL2);

let parametros = paramURL2.split("?");
let usuarioAtual = parametros[0];
let sexoAtual = parametros[1];

console.log("usuarioAtual: ", usuarioAtual);
console.log("sexoAtual: ", sexoAtual);

if (usuarioAtual) {
  document.getElementById("nomePlayer").innerHTML = usuarioAtual;
} else if (usuarioAtual == false) {
  //  window.location.href="index.html"
  //  alert("Preencha o formulário para prosseguir!")
}




*/
