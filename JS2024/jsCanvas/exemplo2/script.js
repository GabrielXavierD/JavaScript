let canvas = document.getElementById('meuCanvas'); //pegando o canvas
let context = canvas.getContext('2d'); //dando contexto
let centerX = canvas.width / 2; //
let centery = canvas.height / 2;
let radius = 70;


context.beginPath( );
context.arc(centerX, centery, radius, 0, 2 * Math.PI, false); 
//usando metodo de desenhar um arco .arc -> (usando algumas posições para centralizar; definindo o raio; definindo que é um circulo completo
context.fillStyle = 'green'; //estilo de preenchimento
context.fill( ); //mandando ele ser preenchido
context.lineWidth = 5; //definindo estilo do contorno
context.strokeStyle = '#003300'; //definindo estilo do contorno
context.stroke( ); //apresentando o contorno