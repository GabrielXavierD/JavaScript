/* Funções anônimas são funções que não possuem nome.
-É a mesma coisa, a diferença é só que ela não tem nome. 

Como chamar uma função anonima?
-Usamos o wrapper/técnica de wrapper:
    -JS -> que é a capacidade de associar a uma variável não apenas strings, valores, booleanos ou numericos
    mas tambem funções -> ou seja, podemos colocar uma função dentro de uma variavel (embrulha a função dentro da variavel)
    -Passamos um parametro nessa função anonima, igual uma função comum, para podermos usa-lo na logica dentro da função*/

// let nome = prompt("Digite seu nome:")

var exibirSaudacao = function(nome){
    document.write("Olá " + nome + ", tudo bem?")
}


// A chamada da função é feita com a chamada da variavel e passando o parametro
exibirSaudacao("Gabriel");

// exibirSaudacao(prompt("Digite seu nome:"));
