function sobre(){
  document.getElementById("cores").style.backgroundColor="red";
  document.getElementById("log").innerHTML += "sobre a div / cor: vermelha<br>";
}
function paraBaixo(){
  document.getElementById("cores2").style.backgroundColor="blue";
  document.getElementById("log2").innerHTML += "clicando na div / cor: azul<br>";
}
function movendo(){
  document.getElementById("cores2").style.backgroundColor="green";
  document.getElementById("log2").innerHTML += "movendo sobre a div / cor: verde<br>";
}
function saindo(){
  document.getElementById("cores2").style.backgroundColor="yellow";
  document.getElementById("log2").innerHTML += "saindo da div / cor: amarelo<br>";
}
function paraCima(){
  document.getElementById("cores2").style.backgroundColor="pink";
  document.getElementById("log2").innerHTML += "soltando o mouse na div / cor: rosa<br>";
}