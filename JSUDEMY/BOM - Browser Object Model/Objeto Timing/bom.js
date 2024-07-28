/* TIMING
-É um objeto
-É obrigatorio passar uma função, no parametro de "ação" de setTimeout() e setInterval() -> para que essa função seja executada após passado o  informado - Ex.: informou 2s, então dps de 2s a função será executada


2 Metodos especificos do objeto WINDOW:
*setTimeout()  -> recebe 2 parametros -> ação (FUNÇÃO) e tempo em milissegundos
  -> Permite que uma ação (FUNÇÃO) seja executada UMA ÚNICA VEZ APÓS TRANSCORRIDO O TEMPO INFORMADO.
      Ex.: texto impresso no navegador, tempo = 5 segundos.
      Ou seja, a aplicação é carregada, mas somente dps do tempo estabelecido a ação vai ser executada uma UNICA VEZ.

*clearTimeout() -> Serve para eliminarmos a execução de setTimeout()



*setInterval() -> recebe 2 parametros -> ação (FUNÇÃO) e tempo em milissegundos
  ->Permite continuar executando uma ação (FUNÇÃO) a cada INTERVALO DE TEMPO informado (executa de forma INDETERMINADA).
     Ex.: texto impresso no navegador, tempo = 5 segundos.
     Ou seja, a ação estabelecida SEMPRE será EXECUTADA A CADA 5 SEGUNDOS (e não uma unica vez) para SEMPRE (ou até determinarmos uma parada).

*clearInterval() -> Serve para eliminarmos a execução de setInterval()


*/
// setTimeout()
//metodo                  ação                    tempo em milissegundos    -> setTimeout = uma unica vez
setTimeout(function () { document.write("Gabriel - setTimeout()<br>") }, 1000);


// setInterval()
//metodo                  ação                                    tempo em milissegundos    -> setInterval = executa pra sempre, a cada vez q passa o tempo estabelecido
setInterval(function () { document.write("Gabriel - setInterval() <br>") }, 1100);



/* EXEMPLO FORÇANDO A PARADA DA EXECUÇÃO


setTimeout() e clearTimeot()

Podemos atribuir setTimeout() a uma variavel igual no exemplo abaixo e fazer uma verificação:
  Um exemplo disso seria a desistência da execução da função. Por exemplo, estabelecer uma ação para ser tomada em 15 segundos
  mas durante esse período o usuário fez o que era necessário. Portanto, após concluir essa ação necessária, nós podemos a partir do 
  clearTimeout() evitar que a ação estabelecida pra dali 15 segundos seja de fato executada.

  Ex.: Aba aberta (a aba sera aberta novamente daqui 15 segundos), usuario fecha a aba, verificação se ele fechou, se sim,
  PARA a execução de "abrir a aba novamente a cada 15 segundos". Se não, continua abrindo a aba a cada 15 segundos


*/
var numero = 5;

var x = setInterval(
  function () {
    document.write(numero + "<br>");
    numero--;
  
    if (numero == 0) {
      //window.location.reload() - > se var numero chegar a 0 iremos recarregar a pagina com o metodo reload() do objeto window // a cada 5s recarrega a pagina atual
      clearInterval(x) //-> atribuimos o setInterval() a variavel "x" e quando numero chegar em 0, clearInterval vai parar a execução de "x" (que é o setInterval()). Ou seja, dentro do próprio método (clerInterval()) controlamos a existência dele.
    }
}, 2000) //a cada 2 segundos será decrementado 1 da variavel numero