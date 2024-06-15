
/* OPERADOR TERNARIO
É uma estrutura de decisão; sintaxe "pequena"; é mais limitado (pois não da p/ usar logicas complexas -> ele so retorna valores
relacionados a dados tipo String ou Number (ex.: "Aprovado", "Comprou", 5, 10))

SINTAXE 
let variavel = <(condicao)> ? <verdadeiro> : <falso>

? = se verdadeiro
: = ou - falso
O que é verdadeiro fica a esquerda e oq é falso fica a direita


    BLOCO IF
if(nota >= media && faltas <= faltas_maximas){
    document.write("<br>Aprovado");
}else{
    document.write("<br>Reprovado");
}

*/


let nota = prompt("Insira sua nota:");
let faltas = prompt("Insitura a quantidade de faltas:");
let media = 7;
let faltas_maximas = 15;


// Exemplo - Substitui o BLOCO IF
let resultado = (nota >= media && faltas <= faltas_maximas) ?  "Aprovado" : "Reprovado";
document.write(resultado);
