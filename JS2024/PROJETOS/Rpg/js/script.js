/* **********PLAYER**********
VARIAVEIS DO Player*/
var botaoItens = document.getElementById("comprarItens")
var irCasa = document.getElementById("irParaCasa")
var vidaDoPlayer = Math.floor(Math.random() * 1500);
var danoDoPlayer = Math.floor(Math.random() * 1500);

if (vidaDoPlayer <= 100 || danoDoPlayer <= 100) {
    vidaDoPlayer += 200;
    danoDoPlayer += 200;
    console.log('Passou por aqui:', 'vidaDoPlayer: ', vidaDoPlayer, 'danoDoPlayer: ', danoDoPlayer);
}


document.getElementById("vidaPlayer").innerHTML = vidaDoPlayer;
document.getElementById("danoPlayer").innerHTML = danoDoPlayer;




/* **********BOSS**********
VARIAVEIS DO BOSS*/
var blocoDoBoss = document.getElementById("containerBoss")
var vidaDoBoss = Math.floor(Math.random() * 1500);
var danoDoBoss = Math.floor(Math.random() * 1500);
var dificuldadeDoBoss = "";

function boss(){
blocoDoBoss.style.display = "block";



if (vidaDoBoss <= 100 || danoDoBoss <= 100) {
    vidaDoBoss += 200;
    danoDoBoss += 200;
    console.log('Passou por aqui:', 'vidaDoBoss: ', vidaDoBoss, 'danoDoBoss: ', danoDoBoss);
}


document.getElementById("vidaBoss").innerHTML = vidaDoBoss;
document.getElementById("danoBoss").innerHTML = danoDoBoss;

if (vidaDoBoss >= 1000 && danoDoBoss >= 1000) {
    dificuldadeDoBoss = "&#9733&#9733&#9733&#9733&#9733";
    document.getElementById("dificuldadeBoss").innerHTML = dificuldadeDoBoss;

} else if (vidaDoBoss >= 500 && vidaDoBoss < 1000 || danoDoBoss >= 500 && danoDoBoss < 1000) {
    dificuldadeDoBoss = "&#9733&#9733&#9733&#9733"
    document.getElementById("dificuldadeBoss").innerHTML = dificuldadeDoBoss;

} else {
    dificuldadeDoBoss = "&#9733&#9733&#9733"
    document.getElementById("dificuldadeBoss").innerHTML = dificuldadeDoBoss;
}

}

function atacar() {
    if(vidaDoBoss == 0){
        alert("Boss já derrotado! Procure outro Boss ou vá para casa!");
    }

    console.log('ANTES vidaDoBoss: ', vidaDoBoss)

    alert("O player ira atacar o Boss!")
    vidaDoBoss = vidaDoBoss - danoDoPlayer
    alert("Vida restante do Boss: " + vidaDoBoss)
    document.getElementById("vidaBoss").innerHTML = vidaDoBoss;

    console.log('DEPOIS vidaDoBoss: ', vidaDoBoss);

    if (vidaDoBoss > 0) {
        alert("O Boss continua vivo! O Boss irá atacar!")
        vidaDoPlayer = vidaDoPlayer - danoDoBoss
        alert("Vida restante do Player: " + vidaDoPlayer);
        document.getElementById("vidaPlayer").innerHTML = vidaDoPlayer;
    } else {
        alert("O Boss foi derrotado!")
        document.getElementById("vidaBoss").innerHTML = 0;
        alert("O player Venceu!")
    }

    if (vidaDoPlayer < 0) {
        alert("O Player foi derrotado!")
        document.getElementById("vidaPlayer").innerHTML = 0;
        alert("O Boss Venceu!")
    }
}


function procurarBoss(){
    alert("Você decidiu procurar outro Boss!");
    alert("Você está andando pelo mapa.");
    alert("Você encontrou um novo Boss! Tome cuidado!");
    boss()
    irCasa.removeAttribute("disabled", "");

    
}


function irEmbora(){
    alert("Você decidiu ir embora para casa!");
    alert("Você está andando pelo mapa.");
    alert("Você chegou em casa!");
    blocoDoBoss.style.display = "none";
    botaoItens.removeAttribute("disabled", "");
    irCasa.setAttribute("disabled", "");


}


function fugir(){
    alert("Você decidiu fugir!");
    alert("Você está andando pelo mapa.");
    alert("Você está parado.");
    alert("Escolha algo para fazer!");
    blocoDoBoss.style.display = "none";
    botaoItens.setAttribute("disabled", "");
}