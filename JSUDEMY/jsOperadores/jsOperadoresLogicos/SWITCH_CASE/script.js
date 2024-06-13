/* 
CONDICIONAL SWITCH CASE
-Ele é igual ao IF/ELSE -> porem, é escrito de forma diferente e mais organizado o que auxilia no entendimento do codigo; 
-Ele é restrito -> so faz comparação de identicos. 
-Ele faz a verificação usando === (estritamente igual a)

Estrutura:
switch(valor_para_comparacao_dos_cases){
    case 1:
        break
    case 2:
        break
    default:
        break

case VALOR = os cases comparam o valor inserido com o valor do case; não tem limites, pode colocar quantos cases forem necessários.
break = indica p/ o switch a finalização do case
default = else (do if - se não) -> se nenhum case for lacalizado em relação a função passada no switch, o default será executado;
          default é uma instrução opcional (não precisa colocar se não quiser, a diferença é que não acontece nada);
}
*/


let opcao = 1;
switch (opcao){ //opcao pode ser uma variavel ou um valor pre definido
    case 1:     //se opcao === (estritamente igual a) 1
        document.write("Opção 1");
        break
    case 2:
        document.write("Opção 2");
        break
    default:
        document.write("Erro");
        break
} 


let parametro = 2;
switch(parametro){
    case 1:
        document.write("<br>Parametro 1");
        break
    case 2:
        document.write("<br>Parametro 2");
        break
    /* default:
         document.write("Erro");
         break                          -> opcional*/
}

let texto = "tres";
switch (texto){ //opcao pode ser uma variavel ou um valor pre definido
    case "um": //se === (estritamente igual a) 1
        document.write("<br>Texto 1");
        break
    case "dois":
        document.write("<br>Texto 2");
        break
    case "tres":
        document.write("<br>Texto 3");
        break    
    default:
        document.write("<br>Erro");
        break
}



let dados = prompt("Digite um número de um a 4:"); //Promp recebe só STRING
switch (parseInt(dados)){                          //Convertendo o prompt STRING pra INT
    case 1: //se === (estritamente igual a) 1
        document.write("<br>Dado 1");
        break
    case 2:
        document.write("<br>Dado 2");
        break
    case 3:
        document.write("<br>Dado 3");
        break    
    case 4:
        document.write("<br>Dado 4");
        break    
    default:
        document.write("<br>Erro");
        break
} 