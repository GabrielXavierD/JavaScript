function modificaEstilo(corDeFundo, largura, altura){
    alert("O valor recebido foi: "+ corDeFundo)
    // acessando CSS da div e alterando o valor do background, altura e largura
    document.getElementById("divMudaFundo").style.background = corDeFundo;
    document.getElementById("divMudaFundo").style.height = largura;
    document.getElementById("divMudaFundo").style.width = altura;

    document.getElementById("divMudaFundo").innerHTML = `<h1>A cor é: ${corDeFundo}`;
    
}

/* o atributo style acessa os atributos CSS desse elementos e podemos alterar esses atributos;
Os atributo style são camelCase, ou seja, para usarmos atributos especificos fazemos:
  -> background-image se usa backgroundImage

  Para sabermos quais atributos podem ser acessados, podemos ver a documentação no W3Schools
*/