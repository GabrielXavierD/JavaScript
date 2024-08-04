let numContagem = 10;
let cronometro = document.getElementById("cronometro")

setInterval(function(){
    cronometro.innerHTML = numContagem--
}, 1000)

setTimeout(function(){
    window.location.href="index.html"
}, 11100)