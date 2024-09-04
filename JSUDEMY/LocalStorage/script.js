/*

o que acontece nos navegadores modernos e de forma geral eles implementam recursos de armazenamento
de dados dentro do próprio browser ou seja dentro do próprio navegador.


Antes do HTML 5 nós utilizava muito o recurso de COOKIES mas após a implementação do HTML5 os browsers
de modo geral passaram a incorporar outros métodos de armazenamento local de dados os COOKIES especificamente
funcionam como dados que são armazenados do lado do cliente. Portanto no Browser e sempre quando existe uma 

requisição HTTP ou seja sempre quando acessamos uma determinada página os cookies são anexados a essa 

requisição de tal modo que o servidor tenha condições de extrair esse COOKIE, analisar e trabalhar a sua lógica 

com base nessas informações cadastradas do lado do cliente. Após esse processamento fazer o retorno da 

requisição solicitada pelo cliente (protocolo HTTP)

Exemplos de uso de COOKIES:
nós temos exemplos bastante comuns na web como por exemplo os sites de e-commerce que nós acessamos



consultamos alguns produtos e depois após fechar a instância do navegador quando nós voltamos para aquela
página os produtos acessados anteriormente são listados pra nós naquela nova consulta.

Claro mas para que isso seja possível é necessário de alguma forma armazenar essa informação.
Para utilizar essa informação a lógica de exibição dos produtos posteriormente então o COOKIES é um recurso

muito utilizado nesse processo porque o dado fica armazenado no lado do cliente não precisa ficar concentrado 

no lado do servidor


E justamente por ficar numa zona do lado do cliente, diretamente no Browser e sempre será anexado na requisição
HTTP e possível do lado do servidor identificar a origem da requisição e retornar àquela lógica para aquele 

cliente

Se essa informação ficar armazenada do lado do servidor por exemplo em um banco de dados será necessário
de alguma forma identificar o browser origem ou seja provavelmente para que o usuário tivesse acesso
à relação dos produtos que área consultou.

Seria necessário fazer um login com um processo de autenticação para retornar aquelas informações do
banco de dados para aquele cliente específico.


Poderia também ser feita alguma tentativa de identificação do IP.
Mas seja qual for o processo não seria tão eficiente quanto o próprio cookie.
Por isso o recurso de COOKIES foi e ainda é muito utilizado no desenvolvimento de aplicações web.


Mas atualmente nós temos outras possibilidades também como é o caso do LOCAL STORAGE e do SESSION STORAGE
que é muito parecido com cookie.

A diferença é que esse tipo de armazenamento quando realizado os dados armazenados eles não são anexados
uma requisição HTTP.

Ou seja ficam de fato no navegador de forma análoga a um banco de dados para aplicação frontend.

Além disso LocalStorage e SessionStorage suporta uma quantidade maior de dados do que o recurso de COOKIES


e a diferença que existe entre LocalStorage e SessionStorage é:
    -SessionStorage é um armazenamento TEMPORÁRIO.Armazena a informação enquanto o browser a instância do navegador está ativa. Quando nós fechamos a instância do navegador todas as informações armazenadas em SessionStorage são perdidas
    -LocalStorage é um armazenamento PERSISTENTE. 
    Nós podemos armazenar essas informações, fechar a instância do navegador, reiniciar a máquina etc... E os dados permanecerão armazenados até que eles sejam intencionalmente removidos


Existem também outros recursos como é o caso do IndexedDB e do Web SQL que são formas de armazenamento
locais com recursos mais avançados em termos de criação de tabelas e consulta dos dados.


Como a nossa aplicação o orçamento pessoal ela não é uma aplicação complexa nós vamos apenas cadastrar despesas e recuperar essas despesas Então nós podemos tranquilamente utilizar o recurso de LocalStorage que já será suficiente




Mas se eu fosse uma aplicação foram aqui de mais complexa que envolve a necessidade de armazenamento de dados maiores
Nós poderíamos utilizar por exemplo o WEB SQL.

*/