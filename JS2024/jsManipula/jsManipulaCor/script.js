//a cada mudança de cor (onchange) o evento chama a função
//é passado o valor da cor selecionada (this.value) e a função recebe ela em "cor" e atribui a cor como cor de fundo do body

function defineCor(cor){// recebendo parametro "cor" que é a color selecionada no input (this.value)
    document.querySelector("body").style.backgroundColor = cor; //aplicando a cor selecionada para a cor de fundo do body
}