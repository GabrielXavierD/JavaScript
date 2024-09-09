
/*PARAMETROS:
 -tipo: ação = ação que o botão representa -> apagar, somar etc... 
        ou valor = passa o valor do botão -> no caso, o numero que o representa;
 -valor: c,/,+,-,1,2,3...

*/
function calcular(tipo, valor){  
    console.log(tipo, valor)
    if(tipo == "acao"){//se sim, faz a ação de acordo com o operador
        
        if(valor == "c"){
    // Clear limpa o visor
    document.getElementById("resultado").value = "";
        }

        if(valor === "+" || valor === "-" || valor === "*" || valor === "/" || valor === "."){ //um unico valor precisa ser verdadeiro, faça:
            document.getElementById("resultado").value += valor; //concatena o valor do campo atual com os operadores
        }
        if(valor === "="){ //um unico valor for "=", faça:
            var valorCampo = eval(document.getElementById("resultado").value) 
            /*resultado = representa uma expressao matematica valida (x+y= z, por ex.)
            -> recuperamos o valor do input resultado, atraves do .value
            -> processamos o valor usando o eval p/ fazer a conta (1+1=2) 
            -> atribuindo o resultado da operação a variavel valorCampo
            */
            document.getElementById("resultado").value = valorCampo // substituindo o resultado da operação ao input resultado
        }

    }else if(tipo == "valor"){ //se sim, coloca no visor
        document.getElementById("resultado").value += valor; //atribuindo o valor do campo resultado o parametro recebido - ou seja, atribuindo os numeros ao campo resultado
    }
    
}



/*

Todos os valores trazidos do DOM são STRINGS então devemos trata-los p/ realizar contas
+= atribuição e concatenação 
-> pega o valor ja contido no campo e no processo de atribuição faz a concatenação com o novo valor recibido 
-> i = i+1


eval() = submetemos um parametro STRING e ela interpreta como uma instrução JavaScript -> ou seja, numero, traz o resultado da conta

*/

