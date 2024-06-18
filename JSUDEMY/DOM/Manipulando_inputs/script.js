/* Podemos selecionar elementos da nossa página HTML
com os metodos (acessados atraves do objeto document), ex.:

-getElementById() = Seleciona O Elemento pelo ID 
    -> Identificação unica, ou seja, recupera um UNICO elemento - em paginas diferentes está ok)
    -> Retorna o elemento


-getElementsByTagName() = Seleciona o Elemento pela TAG do ELEMENTO 
    -> Pode selecionar multiplos elementos
    -> Retorna HTML Collection (uma coleção -> pode ter mais de um elemento)


-getElementsByClassName() = Seleciona o Elemento pela CLASSE do ELEMENTO 
    -> Pode selecionar multiplos elementos
    -> Retorna HTML Collection (uma coleção -> pode ter mais de um elemento)


-getElementsByName() = Seleciona o Elemento pelo NOME(atributo name) do ELEMENTO 
    -> Pode selecionar multiplos elementos
    -> Retorna Node List

*/

console.log(document.getElementById("nome_usuario"))

console.log(document.getElementsByTagName("input"))

console.log(document.getElementsByClassName("campo_texto"))

console.log(document.getElementsByName("nome"))
