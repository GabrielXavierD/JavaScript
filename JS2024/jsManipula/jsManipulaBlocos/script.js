//armazenando a referencia para cada um dos elementos

let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let bloco1 = document.querySelector(".bloco1");
let bloco2 = document.querySelector(".bloco2");

//adicionando evento(.addEventListener) no bt1n -> evento do tipo "click" -> ao clicar chama a função anonima function()
btn1.addEventListener("click", function(){
    btn1.classList.add("active");//ao clicar no btn1 adiciona a classe "active" -> indentificando que ele está selecionado (ficará laranja)
    btn2.classList.remove("active");//remove a classe "active" do btn2 (caso esteja ativado no momento)
    bloco1.style.display = 'block'; //altera a propriedade display do bloco1 - mostrando na tela
    bloco2.style.display = 'none'; //altera a propriedade display do bloco2 - escondendo
});

btn2.addEventListener("click", function(){//faz o mesmo processo do btn1, porém quando é feito no btn2
    btn1.classList.remove("active");//remove a classe "active" do btn1 (caso esteja ativado no momento)
    btn2.classList.add("active");  //ao clicar no btn2 adiciona a classe "active" -> indentificando que ele está selecionado (ficará laranja)
    bloco1.style.display = 'none'; //altera a propriedade display do bloco1 - escondendo
    bloco2.style.display = 'block';  //altera a propriedade display do bloco2 - mostrando na tela
});