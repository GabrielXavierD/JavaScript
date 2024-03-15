        //ACESSANDO VALORES:
    var paises = ["Brasil", "França", "Itália", "Qatar", "Suíça"];

    // Acessando o segundo elemento: França
    document.write(paises [1]);

    // Acessando o primeiro elemento: Brasil
    let pais = paises[0];
    alert(pais);

    // Trocando o terceiro elemento: Itália por Paraguai
    paises [2] = "Paraguai";

    // Apresentando o array (completo) em um elemento HTML
    document.getElementById("demo").innerHTML = paises;


        //ARRAYS - INICIALIZAÇÃO
    // Forma 1
    var carros = ["Volkswagen", "Volvo", "BMW", "Ferrari"];
    // Forma 2
    const carros = new Array("Volkswagen", "Volvo", "BMW", "Ferrari");
    // Forma 3
    const carros = [ ] ;
    carros [0]= "Volkswagen";
    carros [1]= "Volvo";
    carros [2]= "BMW";
    carros [3]= "Ferrari";


        //ARRAYS - ITERAÇÃO (COMO PERCORRER ELEMENTOS DO ARRAY)
    // Usando for clássico
    for (let i=0; i < carros.length; i++){
    document.write(carros[i] + "<br>"); //Escrevendo a posição
    }

    // Usando forEach -> metodo do proprio array
    carros.forEach(myFunction); //deve ser chamada uma função que sera passada a cada elemento do ARRAY
    function myFunction(value, index, array) {
    document.write(value + "<br>"); //APRESENTANDO O VALOR DO ELEMENTO
    }


        //ARRAYS - ADICIONAR ELEMENTOS
    // Criando um array
    const frutas = ["Banana", "Maçã", "Uva"];

    // Adicionando novo elemento por método
    frutas.push("Laranja");

    // Adicionando novo elemento por indexação
    frutas [frutas.length] = "Abacaxi";

    // Exibindo
    alert(frutas);


        //ARRAYS - REMOVER ELEMENTOS
    // Criando um array
    const frutas = ["Banana", "Maçã", "Uva", "Pera"];

    // Remove o último elemento: Pera
    frutas.pop();

    // Remove o primeiro elemento: Banana
    frutas.shift();

    // Remove um elemento específico
    let index = frutas. index0f("Uva");
    frutas. splice(index, 1);


        //ARRAYS - ORDENANDO
    var carros = ["Volkswagen", "Volvo", "BMW", "Ferrari"];
    carros.sort(); //ORDENANDO OS ELEMENTOS ".SORT"
    
    //APRESENTANDO VALORES DO ARRAY:
    carros.forEach(myFunction);
    function myFunction (value, index, array) {
    document.write(value + "‹br>");
    }