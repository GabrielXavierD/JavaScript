//evento a ser disparado assim que a página for redimensionada
function redimensione() {  
    document.getElementById("log").innerHTML += "redimensionei <br>";
    /*+= pega oq já esta dentro de tal elemento e adiciona mais X
    - ou seja adicionando algo ao que já existe dentro do elemento*/
    }


    function submeti(){
        document.getElementById("log2").innerHTML += "submeti<br>";
        return false;
      }
      function resetei(){
        document.getElementById("log2").innerHTML += "resetei<br>";
      }
      function saiDoCampo(){
        document.getElementById("log2").innerHTML += "sai do campo<br>";
      }
      function mudei(){
        document.getElementById("log2").innerHTML += "mudei<br>";
      }
      function entreiNoCampo(){
        document.getElementById("log2").innerHTML += "entrei no campo<br>";
      }
      function selecionei(){
        document.getElementById("log2").innerHTML += "selecionei<br>";
      }
      function teclaBaixo(){
        document.getElementById("log2").innerHTML += "tecla para baixo<br>";
      }
      function teclaCima(){
        document.getElementById("log2").innerHTML += "tecla para cima<br>";
      }