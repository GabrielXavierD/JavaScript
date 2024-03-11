function letraMinuscula(){
    let letraMinuscula = document.getElementById("paragrafo").innerHTML; //Pegando valor do "paragrafo" com .innerHTML
    let resultado = letraMinuscula.toLowerCase(); //toLowerCase converte todo conteúdo txt para minusculo
    document.getElementById("paragrafo").innerHTML = resultado; 
    //atribuindo de volta o valor para o "paragrafo" com a conversão para minusculo (com .innerHTML)
}