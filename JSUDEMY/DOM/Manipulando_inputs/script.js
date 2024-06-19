function distribuiCaractere() {
    var caracter = document.getElementById("entrada").value; //valores recuperados de elementos HTML são STRINGS

    // Limpando o campo pós recuperar o valor do campo
    document.getElementById("entrada").value = "";

    console.log(caracter)

    // limpando espaços em branco nas extremidades da String p/ evitar bugs antes de testa-lo no SWITCH
    caracter.trim();

    switch (caracter) { /*SWTICH faz a verificação com === então precisamos usar os numeros como STRING
       verificando se for numero, como vao fazer a msm coisa coloquei eles seguidos, por isso eles estão c/ break no final*/
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":    
        /*adicionar o caracter no campo referente a numero
         += mantem o historico do campo, concatena o valor atual com o valor novo inserido
        como são STRINGS é feita a concatenação - mas se fosse feita uma conversão (parse) p/ numero seria feita uma soma;*/
        document.getElementById("numeros").value += caracter;
         break;
        default:
        // Caso não for numero, adicionar o caracter no campo referente a letras
        document.getElementById("letras").value += caracter;
         break;
    }
}


// .value recupera o valor contigo dentro do campo