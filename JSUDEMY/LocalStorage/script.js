/*lOCALSTORAGE
Armazenamento de Dados nos Navegadores:

1. Cookies (Pré-HTML5):
   - Antes do HTML5 era comum o uso de COOKIES
   - Armazenam dados do lado do cliente (browser).
   - Enviados automaticamente em cada requisição HTTP, permitindo que o servidor acesse e processe os dados.
   - Amplamente usados para lembrar preferências, como em sites de e-commerce que exibem produtos consultados anteriormente.

2. Armazenamento Moderno (HTML5+) - LocalStorage e SessionStorage:
     - Úteis para aplicações menos complexas (adicionar, remover e analisar dados simples, por exemplo).
     - Ambos armazenam dados no navegador, mas não são anexados às requisições HTTP.
     - LocalStorage é persistente (pode fechar o navegador, desligar o pc etc...) e mantém dados até serem removidos (limpando os dados do navegador por exemplo).
     - SessionStorage é temporário e perde os dados ao fechar o navegador.
     - Suportam maior quantidade de dados comparado aos cookies.

3. Armazenamento Moderno (HTML5+) - IndexedDB e Web SQL:
     - Oferecem armazenamento local avançado com suporte a tabelas e consultas, úteis para aplicações mais complexas.

4. QUAL USAR?
   - Para aplicações simples, como o cadastro e recuperação de despesas, o LocalStorage é suficiente.
   - Em aplicações complexas que requerem armazenamento extenso, como o Web SQL, poderia ser mais adequado.



Manipulação do LocalStorage - MÉTODOS:
   localStorage.setItem(key, data):
   
   - Recebe 2 parametros:
    -> key: string que identifica o dado
    -> data: dado que será armazenado

   - Esse método armazena um dado no LocalStorage. 
   - O dado (geralmente um objeto literal) deve ser convertido em JSON para que seja passado como parametro e assim, poder funcionar o localStorage.

Convertendo OJBETO LITERAL para JSON (STRING)
     JSON.stringify(data)

    Exemplo:
*/

let produto = { categoria: 'Eletrodoméstico', descricao: 'Geladeira', preco: 1999.00 };
localStorage.setItem('produto', JSON.stringify(produto));



/* Recuperando um valor armazenado no localStorage
   localStorage.getItem(key):
   
     - Recupera o dado armazenado por meio do seu identificador (key).
     - Retorna o dado em formato de string (pois é um JSON).

    Exemplo:
*/
localStorage.getItem('produto');


/* Convertendo JSON para OBJETO.
    JSON.parse(data)


     - Exemplo:
*/
JSON.parse(produto);


/* RESUMO
Objetos Literais e JSON:
   - Objetos Literais são instâncias usadas dentro da aplicação.
   - JSON é uma string usada para comunicação entre diferentes aplicações (ex.: backend, localStorage).
   - Conversão:
        Objeto -> JSON = JSON.stringify()
        JSON -> Objeto = JSON.parse()
*/
