/**
Operadores aritméticos (matematicos - p/ calculos) em JavaScript:

 - Adição: + (tambem serve p/ concatenação de STRINGS, se houver algum texto | Se não, soma)
 - Subtração: -
 - Multiplicação: *
 - Divisão: /
 - Resto da divisão (Módulo - resto de uma divisão, retorna sempre valor inteiro): %
 - Exponenciação: **

 - Incremento: ++
     -> Pré-incremento: ++i
        "acrescentar +1" -> incrementa i em 1 e retorna o novo valor -> disponibiliza o valor atualizado dentro da instrução onde a variável está sendo utilizada
     -> Pós-incremento: i++
        "acrescentar +1" -> incrementa i em 1, mas retorna o valor original antes do incremento -> disponibiliza o valor atualizado somente após a execução da instrução onde a operação está contida ter sido executada.

        Exemplo: console.log(i++); -> Imprime 5 e depois  `i` se torna 6
                 console.log(i);   -> Imprime 6
        

 - Decremento: --
     -> Pré-decremento: --i
        "decrementar -1" -> decrementa i em 1 e retorna o novo valor -> disponibiliza o valor atualizado dentro da instrução onde a variável está sendo utilizada
     -> Pós-decremento: i--
        "decrementar -1" -> decrementa i em 1, mas retorna o valor original antes do decremento -> disponibiliza o valor atualizado somente após a execução da instrução onde a operação está contida ter sido executada.
 
 

Operações aritméticas na atribuição de valores
(ex. usando + e -, mas pode usar os outros tambem
como: /=. *=, %=  -> OBS.: += pode ser usado tanto para SOMA 
                     quanto para CONCATENAÇÃO de STRINGS) 

 let teste0 = "Olá ";
 let teste1 = teste1 + 1;
 let teste2 = teste2 - 1;

 Pode ser substituido por:
 let teste0 += "Gabriel";   ->Resultado = Olá Gabriel
 let teste1 += 1;
 let teste2 -= 1;
 
 */
