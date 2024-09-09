/*ATRIBUTO LENGTH
  
ARRAY:
-Retorna a quantidade de elementos dentro do ARRAY
  -Mas pode ter um valor inesperado/diferente do real
   conterá a quantidade de elementos dentro do ARRAY desde que esses elementos eles
   desde que esses elementos eles sejam indexados por valores numéricos
   sequenciais sem intervalo e que iniciem 0 

   -caso exista índices textuais ou mesmo valores aleatórios ou caso o índice não inicie em 0
    -A propriedade  length não vai refletir a quantidade de elementos reais 
      - Ele funciona de forma mais parecida com o valor do próximo índice
    do que propriamente com quantos elementos existem dentro do ARRAY.

    -> length mostrará o proximo valor do indice se forem numericos e sequenciais,
       em caso de textos, mostra 0


  STRING:
-Retorna a quantidade de caracteres contidas dentro da STRING.



*/


// Array iniciando em 0 -> logo length retorna a quantidade de elementos correta
var listaFrutas = ["Maçã", "Uva", "Banana", "Laranja"];

// console.log(listaFrutas.length) -> length: 4
console.log(listaFrutas); // -> length: 4



// Array iniciando com index definido e fora da ordem (de incia em 0...) -> logo length retorna o valor do próximo índice

var listaFrutas2 = []
listaFrutas2[1] = "Maçã";
listaFrutas2[2] = "Uva";
listaFrutas2[3] = "Banana";
listaFrutas2[4] = "Laranja";

// console.log(listaFrutas2.length)  -> length: 5
console.log(listaFrutas2); // -> length: 5
