
// AND/E 
if(2 == 2 && 3 >= 1 && "a" == "b"){
    document.write("Verdadeiro");
} else{
    document.write("Falso");
}

// OR/OU
if(2 == 2 || 3 >= 1 || "a" == "b"){
    document.write("<br>Verdadeiro");
} else{
    document.write("Falso");
}

// NOT/NEGAÇÃO
if(!(2 == 3)){
    document.write("<br>Verdadeiro");
} else{
    document.write("Falso");
}


// Exemplo
let nota = prompt("Insira sua nota:");
let faltas = prompt("Insitura a quantidade de faltas:");
let media = 7;
let faltas_maximas = 15;

if(nota >= media && faltas <= faltas_maximas){
    document.write("<br>Aprovado");
}else{
    document.write("<br>Reprovado");
}