/*
DESTRUCTURING COM REST

Ex.: Extrair o valor 10 em uma variavel e os valores restantes, extraídos em outra variável 
    ->Fazemos isso juntando esses valores dentro de uma única variável no momento em que for feito o DESTRUCTURING do ARRAY/OBJETO

NO CASO DO ARRAY
    ->"a" recebe o valor contido na primeira posição do ARRAY e criamos outra variável "resto" que vai unificar os valores restantes dentro dela.
        ->Para fazer essa junção usamos REST (... -> nesse contexto, é REST, pois junta os valores dentro de uma única referência) c/ a variavel que irá receber esses dados restantes
*/


// Exemplo com ARRAY
let arr = [10, 20, 30, 40]
let [itemUm, ...resto] = arr

console.log(itemUm);
console.log(resto);



// Exemplo com OBJETOS
let obj = {
    a: 10, b:20, c:30, d:40
}

let {a, ...restoObj} = obj
console.log(a);
console.log(restoObj);
