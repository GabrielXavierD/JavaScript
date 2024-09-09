/*FOR IN
-Geralmente usado pra percorrer Arrays
-É um recurso que permite que possamos navegar por elementos do ARRAY que tenham CHAVES(indices) customizadas/não sequenciais

SINTAXE
for(variavel in INDICAR_ARRAY_A_PERCORRER){

  
}

-O in percorre até o final do ARRAY => o seu criterio de parada é o retorno de UNDEFINED p/ o indice seguinte do ultimo item do ARRAY
-A variavel recebe a cada iteração o valor presente no indice de cada uma das posições do ARRAY

-É a mesma coisa que um while/for com incremento, porem, o FOR IN serve pra situações um pouco diferentes
    ->QUANDO SE USA O FOR IN
        -Nas situações em que os índices que não são sequenciais
            -Ou seja, nessas situações ao fazer incrementos em variáveis(usando for/while) e tentar acessar aqueles indices pode acabar retornando algo errado/inesperado
*/




// PERCORRENDO ARRAY COM CHAVES SEQUENCIAIS
var listaConvidados = ["Jorge", "Jamilton", "José", "Ana", "Maria"] //0, 1, 2, 3, 4

console.log(listaConvidados)

for(var x in listaConvidados){     
    console.log(x) //Porem traz somente o valor do indice atual
    document.write("Indice " + x + " valor " + listaConvidados[x] + "<br>") //com listaConvidados[x] trazemos o valor que está dentro do indice atual, pode ser um texto, numero etc...

}


document.write("<hr><br>") 

// PERCORRENDO ARRAY COM CHAVES NÃO SEQUENCIAIS
var listaConvidados2 = []
listaConvidados2["a"] = "Jorge"
listaConvidados2[10] = "Jamilton"
listaConvidados2["zebra"] = "José"
listaConvidados2[-1] = "Ana"
listaConvidados2[true] = "Maria"

console.log(listaConvidados2)

for(var x in listaConvidados2){     
    document.write("Indice " + x + " valor " + listaConvidados2[x] + "<br>") 
}