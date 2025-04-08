let formCadastro = document.getElementById("formCadastro");
formCadastro.addEventListener("submit", (e) => {
  e.preventDefault();
  let usuario = document.getElementById("nomePlayerForm").value;
  let botoesRadio = document.getElementsByName("sexo");
  let sexoSelecionado = "";

  for (let i = 0; i < botoesRadio.length; i++) {
    if (botoesRadio[i].checked) {
      sexoSelecionado = botoesRadio[i].value;
      break;
    }
  }

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
