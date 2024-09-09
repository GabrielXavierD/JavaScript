/*principais métodos para manipulação de datas dentro do JS 
-Data com base na data do sistema operacional em que o Browser esta rodando
-date é um objeto que precisa ser instanciado, ou seja, new Date() e atribui-lo em uma variavel


GET = RECUPERAR DADOS
SET = SETAR DADOS/INSERIR DADOS


.getDate() = Numero do dia em que estamos
.getMonth() = Numero do mes em que estamos -> ele considera os meses de 0 a 11 - jan = 0 e dez = 11 (no caso, comumente conhecemento dec com 12, então precisa somar +1)
.getFullYear() = Fornece o numero do ano atual -> Ex.: 2024
.getTime() = recupera a quantidade de milissegundos que existe entre as datas de 1 de janeiro de 1970 até a data ATUAL


.setDate() = seta um valor no objeto (no caso var. data), trabalha com valor de dia, mes e ano -> Ex.: +1095 ele adiciona 3 anos na data
.setMouth() = seta um valor no mes
.setFullYear() = seta um valor no ano


(...)
Pode ser consultado no W3SCHOOLS
*/

var data = new Date() //PODE SER PASSADO ANO, MES E DIA (SEPARADOS POR ,) NESSA ORDEM, DENTRO DE DATE()


// getDate()
document.write(data.getDate());
document.write("<br>");

// getMouth()
document.write(data.getMonth() + 1);
document.write("<br>");

//getFullYear()
document.write(data.getFullYear());
document.write("<br>");

// DATA COMPLETA
document.write(data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear())
document.write("<br>");
document.write('<hr>')





//ADICIONAR / REMOVER DIAS:
document.write('DATA ANTIGA (ATUAL): ')
//1. convertendo a data pra string (só p/ ver o texto original convertido p/ string, mas poderia deixar só data)
document.write(data.toString())

document.write('<br>DATA NOVA (MODIFICADA): ')
/*2. pegando a var c/ data, setando a data, passando a var. data (q tem o dia atual) e somando + 1 dias, dps o valor somado retona pra var data original */
data.setDate(data.getDate() + 1)

//3. mostrando o novo valor de data pós modificação (no caso, adição) 
document.write(data.toString())
document.write('<br><br><hr>')





//COMO FOI ADICIONADO UM DIA ALI EM CIMA, O JS SEGUE O VALOR ATUAL DENTRO DA VARIAVEL
//ADICIONAR / REMOVER MESES:
document.write('MES ANTIGO (ATUAL): ')
document.write(data.toString())

document.write('<br>MES NOVO (MODIFICADO): ')
data.setMonth(data.getMonth() + 2)
document.write(data.toString())
document.write('<br><br><hr>')



//ADICIONAR / REMOVER ANOS
document.write('ANO ANTIGO (ATUAL): ')
document.write(data.toString())

document.write('<br>ANO NOVO (MODIFICADO): ')
data.setFullYear(data.getFullYear() + 1)
document.write(data.toString())
document.write('<br><br><hr>')


// CALCULO DE DATA 
document.write('<br>CALCULO DE DATA: ')

//15/01/2017
var data1 = new Date(2017, 0, 15) //ANO, MES(0 ATÉ 11), DIA

//23/02/2017
var data2 = new Date(2017, 1, 23)

document.write('<br>DATA 1: ')
document.write(data1.toString())

document.write('<br>DATA 2: ')
document.write(data2.toString())

document.write('<br><br>')

//convertendo datas para algo que possamos calcular
document.write("OS MILISSEGUNDOS DE CADA DATA:")
document.write('<br>DATA 1: ')
document.write(data1.getTime())  //pegando os milissegundos c/ .getTime()
document.write('<br>DATA 2: ')
document.write(data2.getTime()) //pegando os milissegundos c/ .getTime()
document.write('<br><br>')

document.write("SUBTRAINDO OS MILISSEGUNDOS DE DATA1 E DATA2: <br>")

//encontar a qtde de milissegundos entre data1 e data2
var milissegundos_entre_datas = Math.abs(data1.getTime() - data2.getTime())
document.write("A diferença dos milissegundos das datas são: " + milissegundos_entre_datas)



/*
-1 dia tem 24hrs, cada hora tem 60 minutos, 
-cada 1m tem 60 segundos  
-cada 1s tem 1000 milissegundos
-então quantos milissegundos existem em um dia? -> 1 * 24 * 60 * 60 * 1000
*/
document.write("<br><br>QUANTOS DIAS ESSA QUANTIDADE DE MILISSEGUNDOS REPRESENTA?")
var milissegundos_por_dia = (1 * 24 * 60 * 60 * 1000)
document.write('<br> 1 dia tem: ' + milissegundos_por_dia + ' milissegundos')

document.write('<br><br>')
document.write('CALCULO: milissegundos_entre_datas / milissegundos_por_dia <br>')
document.write('A diferença entre data1 e data2 é de ' + Math.ceil(milissegundos_entre_datas / milissegundos_por_dia) + ' dia(s)') //Math.ceil() -> arredondando pra cima
