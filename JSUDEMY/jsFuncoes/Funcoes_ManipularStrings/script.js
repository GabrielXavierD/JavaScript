/* Strings nao possuem propriedades ou metodos -> mas o js pode convertelos em objetos 
    -> oq faz com q podemos agregar propriedades e metodos pre estabelecidos do JS
Cada caracter dentro de uma string possui uma posição que se inicia em 0 (espaços tambem contam como um numero)
Ex.: Gabriel -> 0123456

-> Tambem podemos encapsular a String dentro de uma variavel, que o JS consegue manipula-lo da mesma forma 

Propriedades/atributos (se coloca . e depois o nome):
-length = retorna a quantidade de caracteres de uma String (podemos testar o tamanho ou truncar (cortar a String) etc...)

METODO (função):
-charAt() = retorna um caracter com base na posicao (indice) do mesmo dentro da cadeia de caracteres
-indexOf() = retorna a posição da primeira ocorrencia de um valor dentro de uma String 
             ele faz diferenciação de caracteres MAIUSCULOS e MINUSCULOS 
             -> Exemplo.: arara - quero o retorno do r -> o priemiro "r" aparece na posição 1
             ->Caso seja passado um caractere que não existe o retorno será -1

-replace() = com base um valor de pesquisa e um valor de modificação 
             permite substituir textos em uma string -> caso o valor existir ele faz a substituição 
             ->replace(valor_original, valor_substituir) 

-substr() = permite extrair parte de uma String com base em uma posição inicial 
	    seguida de um valor que representa a quantidade de caracteres à frente daquela posição inicial
	   ->É como se ele recortasse uma parte da String
       Ex.: Gabriel -> 0,3 = Gab -> a partir da posição inicial, quantos caracteres eu quero recuperar -> inicia em 0 e quero recuperar 3

-toLowerCase() = converte todos os caracteres de uma String e converte pra MINUSCULO
-toUpperCase() = converte todos os caracteres de uma String e converte pra MAIUSCULO
-trim() = remove os espaços em branco das extremidades da String

(...)

PODE SER CONSULTADO NO W3SCHOOLS (https://www.w3schools.com/js/js_string_methods.asp)
*/

// Length
document.write("Gabriel Xavier".length); //indice inicia em 0 e termina em 13 -> logo, o tamanho é 14 caracteres nessa String (há 14 caracteres mas há 13, na indexação, pois inicia em 0)
document.write("<br>");

// charAt()
document.write("Gabriel Xavier".charAt(2)); //-> b = posição 2 -> logo ele é retornado 
document.write("<br>");

// indexOf()
document.write("Gabriel Xavier".indexOf("r")); //-> r = posição 3 -> logo 3 é retornado 
document.write("<br>");

// replace()
document.write("Gabriel Xavier".replace("Gabriel", "Biel")); //-> r = posição 3 -> logo 3 é retornado 
document.write("<br>");

// replace()
document.write("Gabriel Xavier".substr(0, 3)); //-> inicia em 0 e recupero 3 caracteres a partir do incial estabelecido (0) -> logo Gab é retornado 
document.write("<br>");


// toLowerCase() 
document.write("Gabriel Xavier".toLowerCase()); //-> inicia em 0 e recupero 3 caracteres a partir do incial estabelecido (0) -> logo Gab é retornado 
document.write("<br>");

// toUpperrCase() 
document.write("Gabriel Xavier".toUpperCase()); //-> inicia em 0 e recupero 3 caracteres a partir do incial estabelecido (0) -> logo Gab é retornado 
document.write("<br>");

// trim() 
var nome = " Gabriel Xavier " //espaço nas extremidades
document.write("-" + nome.trim() + "-"); //-> remove os espaços das extremidades da String (espaço no inicio e no final) 
document.write("<br>");