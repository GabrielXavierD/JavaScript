let horario = new Date();
let hora = horario.getHours();
let janela = document.querySelectorAll("janela")
let body = document.getElementById("body")
let chao = document.getElementById("chao")


if (hora >= 18) {
   janela.forEach((janelaAndar) => {
        janelaAndar.style.backgroundColor = "yellow";
        janelaAndar.style.animation = "luzPiscandoNoite 1s ease 0s infinite alternate";
    })
    body.style.backgroundColor = "darkblue"
    chao.style.backgroundColor = "darkgreen"
}

if (hora <= 17) {
    for (let andar = 0; andar < janela.length; andar++) {
        janela[andar].style.backgroundColor = "rgba(64, 64, 68, 0.623)";
    }
}