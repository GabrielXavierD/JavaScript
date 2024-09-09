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

-querySelector() = Seleciona o primeiro elemento que corresponde ao seletor CSS especificado
    -> Seleciona o primeiro elemento que corresponde ao seletor CSS especificado
    -> Retorna o primeiro elemento correspondente

-querySelectorAll() = Seleciona todos os elementos que correspondem ao seletor CSS especificado
    -> Seleciona todos os elementos que correspondem ao seletor CSS especificado
    -> Retorna Node List

-element.getAttribute(attributeName) = Obtém o valor de um atributo especificado
    -> Obtém o valor do atributo especificado
    -> Retorna o valor do atributo

-element.setAttribute(attributeName, value) = Define o valor de um atributo especificado
    -> Define o valor do atributo especificado
    -> Não retorna valor

-element.removeAttribute(attributeName) = Remove um atributo especificado
    -> Remove o atributo especificado do elemento
    -> Não retorna valor    

*/

console.log(document.getElementById("nome_usuario"))

console.log(document.getElementsByTagName("input"))

console.log(document.getElementsByClassName("campo_texto"))

console.log(document.getElementsByName("nome"))
