/*ARRAY FILTER
-O metodo .filter() atua sobre um ARRAY e espera uma função de callback
  .filter(função_callback, )

*Ele trabalha de forma analoga ao .forEach(), ele percorre cada um dos indices do array e retorna seu valor contido naquele indice
  ->Logo a função de callback de ambos esses metodos, recebem esse indice comoparametro


-Ele ermite atuar sobre um determinado Array com um determinado propósito, no caso, filtrando esse determinado Array.
  ->Ele retorna um novo array, filtrado, atua sobre cada posição do array e define se entrará no filtro ou não
  ->Ele SEMPRE retorna um array menor ou igual ao origianal. NUNCA um array maior (não tem como inventar posições do nada né? rsrs  -> mas... é claro que depende do tipo de verificação que a função de callback está fazendo!)
    Exemplo: se todos na hora da verificação, forem TRUE -> filter retorna o mesmo array, já que todos foram aprovados na "filtração"
             se não, somente aqueles que foram aprovados -> filter retorna um array diferente, filtrado
*/


//array de objetos literais -> cada indice do array com um objeto literal com seus respectivos atributos




let funcionarios = [
  { nome: "Fernanda", cargo: "Analista de RH", salario: "3100", status: "ativo" },
  { nome: "Miguel", cargo: "Assistente Administrativo", salario: "1700", status: "ativo" },
  { nome: "Rosa", cargo: "Auxiliar de Contabilidade", salario: "1600", status: "inativo" },
  { nome: "Roberto", cargo: "Programador PHP", salario: "4500", status: "ativo" },
  { nome: "Maria", cargo: "Engenheira Mecânica", salario: "7500", status: "ativo" }
];

console.log(funcionarios)

// Função de callback - ela poderia ser colocada dentro do parametro do filter(), mas para organizar melhor deixei ela fora
function filtraFuncionario(funcionario){
  return true
}

funcionarios.filter(filtraFuncionario)
console.log("TODOS TRUE", funcionarios.filter(filtraFuncionario));