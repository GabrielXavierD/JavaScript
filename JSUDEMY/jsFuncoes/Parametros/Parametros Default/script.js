/*PARAMETROS DEFAULT
-Podemos definir um valor padrão para os parametros de uma função/metodo
-Nos ajuda a mitigar problemas provenientes da ausência da definição de parâmetros na chamada das funções -> pois se caso nenhum valor for passado e não houver um falor default na assinatura, será mostrado "UNDEFINED"
    ->Dessa forma nós podemos diminuir a possibilidade de uma função tentar trabalhar com um valor indefinido, ou seja, evitamos erros



*Basta passar um valor direto no parametro na assinatura da função/metodo
-Se por ventura algum dos parâmetro não tiverem um dado passado na chamada da função
será assumido o valor default, atribuido na assinatura 
    ->E caso for passado um valor na chamada da função o valor contido na assinatura é substituido pelo valor passado na chamada da função.

*Caso não queira definir o valor para algum parâmetro na chamada da função e queira que ele sempre assuma um valor padrão:
    Exemplo - parametros: 
    
    function exemplo(nome = "Lua", atividade = "brincar", animal = "gato") { ... }
    exemplo("correr", "Cachorro");

    -Vamos supor que não quero passar o valor do parametro "nome" -> Se eu fizer a chamada da função daquela forma, será atribuido "correr" no parametro de "nome", "Cachorro" em "atividade" e animal será "gato" (valor padrão, que ficou em "falta")

    -Ou seja, se eu quiser que o parametro "nome" seja sempre "Lua", a melhor forma de se fazer isso seria passar o valor "undefined", no parametro no qual quero que utilize o valor padrão já estabelecido:

    exemplo(undefined, "correr", "cachorro");  -> aí daria certo
*/

function contaHistoria(nomePersonagem = "Lua", atividade = "correr", nome_dono = "Lucas"){
    document.write(`Era uma vez um cachorro chamado ${nomePersonagem}, ele adorava ${atividade}, seu dono era ${nome_dono} e eles viveram felizes para sempre! <br><br>`)
}

//Se eu não passar nenhum valor ele utiliza os valores default
contaHistoria()

//Se eu passar algum valor ele substitui os valores default
contaHistoria("Luna", "brincar", "Gabriel")

//Escolhendo qual parametro quero que sempre utilize o valor default, no caso, nomePersonagem
contaHistoria(undefined, "brincar", "Gabriel")

//Caso eu passe todos como "undefined", é como se eu não estivesse passando nenhum valor, logo, ele usa os valores default
contaHistoria(undefined, undefined, undefined)

