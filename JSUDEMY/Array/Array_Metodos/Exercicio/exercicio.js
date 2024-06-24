var objetos = ["Cadeira", "Impressora", "Garfo"]

function adicionar(){
    var campo = document.getElementById("entradaDados").value;

    if(campo == ""){
        alert("Informe um valor válido!");
    }else{
        if(objetos.indexOf(campo) == -1){
            objetos.push(campo)
            console.log(objetos)
            alert("O objeto não existia dentro do Array e agora foi adicionado.");
            document.getElementById("entradaDados").value = "";
        }else{
            alert("Este objeto já está adicionado no Array.");
        }
    }
}
function ordenar(){
    objetos.sort()
    console.log(objetos)
    alert("O Array foi ordenado (em ordem alfabética).");
}
