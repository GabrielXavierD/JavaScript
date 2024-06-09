if(7 >= 7) {
    document.write('Entrou dentro do bloco if (verdadeiro) -> Sim 7 é >= 7')
} else {
    document.write('Entrou dentro do bloco else (falso)')
}
    

if(false){
    document.write("Entrou dentro do bloco if (verdadeiro)");
}
else{
    document.write("<br>Entrou dentro do bloco else (falso) -> a condição é false");
}


document.write("<hr>Teste 2 - Frio ou Quente? <br>");
let temperaturaAtual = 25; //Pode ser usado o prompt() p/ receber um valor do usuario
let quente = 25;

if(temperaturaAtual >= quente){
    document.write("Está quente: " + temperaturaAtual + "graus");
}
else if (temperaturaAtual>= 20 && temperaturaAtual <= 25){
    document.write("Está normal: " + temperaturaAtual + "graus");
} else{
    document.write("Está frio: " + temperaturaAtual + "graus");
}

