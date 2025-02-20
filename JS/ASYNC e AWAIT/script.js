/*
Podemos trabalhar com funções assíncronas de modo sequencial
*/
let processoAssincrono = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Sucesso no processo assincrono!"), 3000);
});

//função que chamará a PROMISE
async function recuperarDados() {
  //promise

  await processoAssincrono.then((retorno) => console.log(retorno));
  //.then(funcao) = retorno recebe/recuperaa o parâmetro encaminhado no resolve do setTimeout apos 3 segundos

  console.log("Procesamento assincrono 1");

  //fetch() acesa o link da api e retorna uma promise-> .then() recuperamos a resposta HTTP e a convertemos para JSON -> No 2º .then() -> pegamos o JSON criado pelo 1º e mostramos no console os dados
  await fetch("https://jsonplaceholder.typicode.com/comments")
    .then((resposta) => resposta.json())
    .then((dados) => console.log("COMENTARIOS" + dados));

  console.log("Procesamento assincrono 2");

  await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((resposta) => resposta.json())
    .then((dados) => console.log("POST's: " + dados));

  console.log("Procesamento assincrono 3");

  //o retorno depente do tempo de resposta da requisição na API - ent post's pode ser retornado antes de comentarios e vice-versa

  return "Fim"; //essa STRING será retornada em "retorno" do .then externo, sendo passada no parametro "retorno"
}

/*
para garantir que esse console.log() seja aplicado no final do processamento da função, utilizamos o metodo .then() para o console.log() acontecer quando a nossa função ASYNC for resolvida é chamado o .then e mostrado o console.log().

Ou seja, somente apos a execução da função ASYNC e dos seus AWAITS que o .then() com console.log() é executado
Antes:
recuperarDados(); //recuperando da Promise o .then()
console.log("fim");

Depois:
recuperarDados().then(()=>console.log("fim")); 
*/
recuperarDados().then((retorno) => console.log(retorno));

/*E aí quando a nossa promessa está resolvida ela retorna o parâmetro pra nós que é apresentado no console.log

Agora imagine que dentro da nossa função existam outras funções baseadas em processamento assim como

eu vou utilizar o Fetch() que é nativo do JavaScript e nos auxilia nas requisições HTTP, por exemplo para API WEB SERVICES
    -O metodo fetch() tambem retorna uma promise
        nesse caso, exemplo seria a "processoAssincrono()"

Então para fazer essa requisição HTTP para API nós vamos utilizar uma API fake (que serve apenas para estudo/testes)

Objetivo: recuperar o serviço de um API WEB SERVICES REST (FAKE) para ser utilizada no metodo .fetch() para testarmos o comportamento do ASYNC/AWAIT em uma situação comum, como a do exemplo, justamente nos processamentos assíncronos de requisições HTTP


As promises servem para trabalhar com valores que estão disponíveis agora, no futoro ou com valores não disponiveis.Portanto estamos falando de processamentos que levam aí algum tempo para serem concluídos e somente após esse tempo é que nós teremos uma resposta ou então precisamos tratar a nossa lógica caso esse tempo se estenda d+, caso esse valor nunca seja retornado etc...


E é aqui que entra a possibilidade de ser sequenciarmos a execução desses processos assincronos  ou seja, não importa o tempo em que o processo vai demorar pra ser resolvido ou rejeitado.
    Porem no nosso caso, vamos respeitas esse tempo, vamos aguardar essa execução antes de dar sequência na execução do nosso script.

Pq os console.log() aparecem antes do resultado da API?
    -Pq os processamento assincronos - nossas requisições/promisses- são disparados e, como levam um tempo para trazer um retorno, o JS segue a execução do codigo, o faz com que os console.log() apareçam antes

Bom e aí para sequenciar a execução dos nossos processamentos assíncrona. Nós podemos ir aqui e converter a nossa função para uma função ASYNC
colocando essa marcação à esquerda

    Antes:
    function recuperarDados() {

    Depois:
    async function recuperarDados() {

    Dessa forma nós estamos falando que essa função ela vai poder dentro dela aguardar por processamento assincronos das nossa promisses
    
    
    
    E para fazer isso tambem precisamos utilizar a outra parte dessa feature, que é a instrução ao AWAIT instrução que indica que aquele processamento assíncrona de uma promessa que deve ser aguardada para que o processamento  função continue

   Antes:
  processoAssincrono.then((retorno) => console.log(retorno));


    Depois:
  await processoAssincrono.then((retorno) => console.log(retorno));


    await = aguardar -> o processamento da função deve aguardar o retorno para processguir os codigos restantes


    Quando usamos o ASYNC e o AWAIT, dizemos para a função: "aguarde a resolução desse processamento assíncrono dessa promisse(função inteira - "processoAssincrono") e se pra seguir aqui com o processamento das linhas de codigo restantes"
        Ou seja, aguardamos os 3 segundos do processamento da nossa promise/função (independentemente se o resultado é "resolve" ou "reject"), para dar seguencia aos outros processamentos
    Podemos colocar o await em todas as promisses, para ficar "aguarde o processamento dessa Promisse para seguir o codigo" em todas
        O que faz com que os console.log("Processamento assincrono X") fiquem ordenados e disparados no momento certo. 
        
        console.log("1")> Executa função 1> codigo aguarda> função retorna>console.log("2")> Executa função 2> codigo aguarda> função retorna> console.log("3")> Executa função 3> codigo aguarda> função retorna

        -Dessa forma, sequenciamos a execução de metodos assincronos
        *Muitas vezes nas aplicações reais, Nós realizamos requisições HTTP mas precisamos dos parâmetros dessas requisições para dar sequência em outras requisições HTTP. Muitas vezes as requisições anteriores servem de parâmetro para as requisições futuras. Aí que entra a sequencição: nesses casos nós podemos sequenciar esses processamentos assíncronos utilizando o recurso de ASYNC/AWAIT


        *Ao definir uma função como ASYNC automaticamente ela se torna um PROMISSE. Então se for necessário alguma execução sequencial após a finalização da nossa função ASYNC. Nós podemos na chamada dessa função encadiar os .then(), assim como podemos também colocar um .catch() caso seja feito algum tratamento de erro
*/
