function esconde(elemento) { // função recebendo parametro "elemento" (que é o id='conteudo' passado no html)

    //acesando O css (.style) do parametro "elemento" (#conteudo/'conteudo')  e a propriedade .display -> atribuindo "none" (nenhuma)
    document.getElementById(elemento).style.display = 'none';
}
function mostra(elemento) {
    document.getElementById(elemento).style.display = 'block'; //block = visualização padrão (display = block) -> exibe a div

}
function alterar(elemento) { //altera entre mostrar ou esconder 
    //pegando valor de display (.style -> .display) e armazenando em varDisplay
    let varDisplay = document.getElementById(elemento).style.display;
    if (varDisplay == "none") { //analizando o valor atual de varDisplay - se for none (escondida) faça:
        document.getElementById(elemento).style.display = 'block'; //mostra div
    } else { //se não
        document.getElementById(elemento).style.display = 'none'; //esconde
    }
}