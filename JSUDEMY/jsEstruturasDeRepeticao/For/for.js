/*LOOP FOR
Sintaxe

for(variavel_cValorInicial; condicao; controle (i++/i--/ algo que permita sair do loop em algum momento etc...)){

    //break ou continue
}

-Podemos usar break e continue (igual no while)
*/

// For - Decrementando 1 a cada laço e quando chega em uma condição não satisfatoria e da false e dps para
for(var x = 10; x >=0; x--){
    document.write(x + "<br>")
}


document.write("<hr><br>")

// For - Decrementando 4 a cada laço 
for(var y = 10; y >=0; y=y-4){      //pode usar -= tambem
    document.write(y + "<br>")
}


document.write("<hr><br>")

// For - Incrementando 4 a cada laço 
for(var z = 0; z <=10; z=z+4){      //pode usar += tambem
    document.write(z + "<br>")
}



