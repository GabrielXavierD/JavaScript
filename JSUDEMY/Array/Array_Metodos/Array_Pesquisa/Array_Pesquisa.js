/*
Para realizarmos uma pesquisa em um ARRAY
usamos o metodo indexOf(item_a_pesquisar) (nativo dos objetos do tipo array)

-É Case Sensitive, logo: Uva, uva e UVA = são diferentes
  -> Também serve para caracteres especiais

  -1 = este item não existe no array
   0...infinito = o item existe no array e está na posição mostrada
*/

var listaFrutas = []
      listaFrutas[0] = "Banana"
      listaFrutas[1] = "Maçã"
      listaFrutas[2] = "Morango"
      listaFrutas[3] = "Uva"


document.write(listaFrutas.indexOf("Morango")) //retornou 2 -> a chave/indice dele que representa a posição dele 

document.write("<br>" + listaFrutas.indexOf("Abacaxi")) //retornou -1 ou seja, -1 significa que não existe esse elemento no array


//PODEMOS PEDIR PRO USER DIGITAR O VALOR A SER PESQUISADO
var pesquisa = listaFrutas.indexOf(prompt("Digite um item a pesquisar no Array"))

if(pesquisa == -1){ //se for = a -1 faça:
  document.write("<br>Este elemento não existe")
}else{
  document.write("<br>Este elemento existe e está na posição " + pesquisa)
}
