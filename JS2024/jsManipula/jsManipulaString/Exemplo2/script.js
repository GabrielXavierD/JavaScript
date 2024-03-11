function funcaoReplace(){
    let troca = document.getElementById("paragrafo").innerHTML;
    let resultado = troca.replace("Microsoft", "W3Schools"); //trocando "Microsoft" por "W3Schools" (só faz uma troca)
    document.getElementById("paragrafo").innerHTML = resultado; //retornando o valor após a troca/substituição
}