var listaFrutas = ["Banana", "Maçã"]

/* METODOS - Podem ser usado tanto para ARRAYS BÁSICOS/SIMPLES quanto ARRAYS MULTI/BIDIMENSIONAIS
-Devemos informar a VÁRIAVEL DO ARRAY, o metodo a ser usado 
e especificar/criar qual item sofrerá a ação do metodo
*/

// INCLUI elemento no INICIO do Array - Os indices são rearranjados p/ inclui-lo
listaFrutas.unshift("Laranja");

// INCLUI elemento no FINAL do Array
listaFrutas.push("Uva");


// EXCLUI elemento no INICIO do Array - Não precisa especificar qual elemento
listaFrutas.pop();

// EXCLUI elemento no FINAL do Array - Não precisa especificar qual elemento
listaFrutas.shift();

console.log(listaFrutas)




// Tambem funciona em ARRAY MULTIDIMENSIONAIS
/* Precisamos especificar a VARIAVEL do ARRAY "PAI" o indice do ARRAY "FILHO", 
o metodo a ser usado e especificar/criar (ou não) qual item sofrerá a ação do metodo*/

var listaCoisas = []                                                         // -> Array "Pai"
      listaCoisas["frutas"] = ["Banana", "Maçã", "Morango", "Uva"]           // -> Array "Filho" e seus itens
      listaCoisas["pessoas"] = Array("Krystal", "Boris", "Toni", "Gladys")   // -> Array "Filho" e seus itens

// Exemplo (qual quer metodo funciona)
listaCoisas["frutas"].push("Laranja") //adicionará Laranja como ultimo item do Array
listaCoisas["frutas"].push("Abacate") //adicionará Abacate como ultimo item do Array (vem dps de Laranja)


console.log(listaCoisas)