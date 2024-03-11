function copia( ){ //MANIPULAÇÃO DE INPUTS e eles possuem o atributo .value
    //acessando "c1" e atribuindo o seu valor na váriavel "dadoscampo1"
    let dadoscampo1 = document.getElementById("c1").value //get para buscar o elemento pelo Id "c1"
    //e o ".value" para pegar o valor dele e atribuir na variavel "dadoscampo1"

    //Para atribuir no campo/Id "c2"
    document.getElementById("c2").value = dadoscampo1;

//peganndo outro elemento, o "c2", pelo seu Id e atribuindo como seu valor (.value) 
//o campo "c1" (ou seja, a variavel "dadoscampo1")

}