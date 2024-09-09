/*
Concatenação = concatenar = unificar os valores textuais das nossas variáveis
de forma a montar strings ou textos personalizados.

Concatenação = + variavel +
*/

// String
let texto1 = " Boa Noite";
let texto2 = ' :)';

document.write("<span>Olá Gabriel</span>" + texto1 + texto2);

/* Hardcode = má prática -> incluir tag html dentro do body,
                            a partir do JS, ou seja, não há dinamica 
                            p/ modifica-la */

// Prompt = permite entrada de dados a partir do browser -> so recebe String (logo, para realizar calculos, precisa converter pra numero)
let nome = prompt("Digite seu nome:")
let comida = prompt("Digite sua comida favorita:")
alert(nome + ", sua comida favorita é: " + comida)
