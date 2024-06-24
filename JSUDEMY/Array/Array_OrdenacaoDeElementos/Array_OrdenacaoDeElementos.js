/*
ORDENAÇÃO DE ELEMENTOS EM ARRAY:
-Podemos trabalhar com ordenação de elementos alfanumérico e elementos numéricos.
-Muito usado em relatorios e filtros em tela
-Usamos o metodo SORT()
  -> O seu padrão é fazer uma REORDENAÇÃO ALFANUMERICA de acordo com os valores dos elementos
e depois ajusta os seus respectivos indices - Ou seja, deixa em ordem alfabetica

Mas se utilizarmos sort() em um ARRAY composto por numeros a ordenação continua sendo feita de forma alfabetica:
  -Se não passarmos a função ele faz a ordenação padrão, que é de forma alfabetica, e se passarmos ele faz a ordenação dos numeros (do menor p/ maior)
  -É preciso ensinar o metodo sort() a tratar os numeros e não ordena-los de forma alfabetica, assim, fazemos:
    ->sort(referencia de uma função que indica como os valores devem ser ordenados (é uma função de callback)) 
      -> Ou seja = sort(ordenaNumeros)

      -Quando colocamos "ordenaNumeros" dentro de sort():
        -> os valores numUm e numDois são recuperados através dele ( sort() ) e são testados
          ->No caso, funcionará assim, ex.: numUM - numDois -> Posição[0] - Posição[1] -> 12 - 40 = -28 
          como o resultado é <0 ele se ordena primeiro numUm (= 12) antes de numDois (= 40)

          ->Depois continua a iteração: numUm - numDois -> Posição[1] - Posição[2] -> 40 - 3 = 37 
          como o resultado é >0 ele se ordena primeiro numDois (= 3) antes de numUm (= 40)

          (
            Ou seja, chegamos a conclusão de que sempre que um valor for:
           - <0 = numUm se ordena antes de numDois;
           - >0 = numDois se ordena antes de numUm;
           - Se forem valores iguais a ordem é mantida a mesma do Array;
           - Se os valores do Array forem numeros, mas em String (Ex.: "12" ) a operação será realizada do mesmo jeito,
             pois o JS consegue interpretar e fazer o casting;
           - Se houver algum erro (Ex.: do nada tem o texto no meio do Array c/ numeros: 1, 2, "abacaxi", 4) o calculo será invalido
             e a ordenação será indefinida/Undefined = aparecerá um erro;
          )

COMO FAZER A FUNÇÃO ordenaNumeros:
-Essa função é padrão, então pode ser usada em qualquer ocasião que utiliza ordenação de numeros:

function ordenaNumeros(numUm, numDois){
  return numUm - numDois;
}

*/


// Se for so texto se usa sort()
var listaFrutas = []
      listaFrutas[0] = "Maçã"
      listaFrutas[1] = "Uva"
      listaFrutas[2] = "Banana"
      listaFrutas[3] = "Morango"

document.write(listaFrutas) 
document.write("<br>" + listaFrutas.sort()) //ordenando de forma alfabetica, pois é o padrão do sort() e por ser um Array só de textos
document.write("<br><hr>")




// Mas se utilizarmos sort() (sem passar a função ordenaNumeros) em um ARRAY composto por numeros a ordenação continua sendo feita de forma alfabetica
var listaNumeros = []
      listaNumeros[0] = 12
      listaNumeros[1] = "40"
      listaNumeros[2] = 3
      listaNumeros[3] = "7"
      listaNumeros[4] = 19
      listaNumeros[5] = 1


document.write(listaNumeros) 
document.write("<br>" + listaNumeros.sort()) //Ordem ficou: Um, Um, Um, Tres, Quatro, Sete




// Se for um Array composto por numeros e se quiser ordenar do menor p/ maior se usa sort(ordenaNumeros) 
document.write("<hr>Numeros ordenados:")
function ordenaNumeros(numUm, numDois){
  return numUm - numDois;               //precisa obrigatoriamente ser uma conta de subtração
}

document.write("<br>" + listaNumeros.sort(ordenaNumeros)) 

