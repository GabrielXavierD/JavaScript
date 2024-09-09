/*
**Manipulação de Estilos CSS:**
-.className: pega qual a classe atual do elemento ou modifica a classe atual(já existente e formatada no arquivo CSS)
    -Muito utilizado em formularios
        -Ex.: Class campoValido ou campoInvalido -> dependendo da situação do campo se aplica um ou outro

-element.style.property = "value" = Modifica um estilo CSS diretamente em um elemento
    -> Permite modificar um estilo CSS diretamente
    -> Não retorna valor

-element.style.cssText = "property: value; ..." = Define múltiplas propriedades de estilo ao mesmo tempo
    -> Permite definir múltiplas propriedades de estilo ao mesmo tempo
    -> Não retorna valor

-window.getComputedStyle(element) = Obtém os valores de estilo calculados de um elemento
    -> Obtém os valores de estilo calculados pelo navegador
    -> Retorna um objeto CSSStyleDeclaration


    
-element.classList.add(className) = Adiciona uma classe CSS a um elemento
    -> Adiciona uma classe CSS ao elemento
    -> Não retorna valor

-element.classList.remove(className) = Remove uma classe CSS de um elemento
    -> Remove uma classe CSS do elemento
    -> Não retorna valor

-element.classList.toggle(className) = Alterna uma classe CSS em um elemento
    -> Adiciona a classe se ela não estiver presente, ou a remove se estiver presente
    -> Retorna boolean indicando se a classe está presente após a operação



-element.classList.contains(className) = Verifica se um elemento tem uma determinada classe
    -> Verifica se o elemento contém a classe especificada
    -> Retorna boolean

-element.style.setProperty(propertyName, value) = Define uma propriedade de estilo com um valor
    -> Define uma propriedade de estilo específico com um valor
    -> Não retorna valor

-element.style.removeProperty(propertyName) = Remove uma propriedade de estilo
    -> Remove uma propriedade de estilo específica do elemento
    -> Retorna o valor removido
*/

