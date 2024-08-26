/*
design Factory através do padrão de projeto Factory.
Nós podemos montar uma fábrica para criação dos objetos em tempo de execução.
Basicamente falando em JavaScript as funções factory combinam a chamada de funções com o retorno de
objetos literais. que podem ser criados com base em parâmetros passados para essas respectivas funções.


Por isso aqui falamos que a funções Factory serve para a criação de objetos de forma dinâmica ou em tempo
de execução porque basta chamar a função passando ou não parâmetros para termos o retorno de um objeto.


Não se trata de implementação técnica e sim um conceito que pode ou não ser aplicado
    ->Então um padrão esse projeto é uma forma comum de resolver alguns problemas já conhecidos. Então a dica do padrão Factory fica como mais uma ferramenta na sua bagagem de desenvolvedor.

Então como as soluções Factory geralmente retornam objetos literais vamos trabalhar com o conceito de
objeto literal inicialmente para depois entender a motivação da criação de uma função factory


Então digamos que seja necessário dentro da nossa aplicação a criação de uma coleção de bicicletas.
Então vamos começar aqui criando a primeira a partir de um objeto literal vou chamar de bicicleta e


Agora digamos que eu queira criar outro objeto que represente uma bicicleta eu precisaria vir aqui e
criar outro objeto.
Agora a bicicleta dois modificando os parâmetros.
    Só que esses objetos eles estão sendo nesse momento criados em forma HARDCODE

Digamos que as informações para preenchimento desses objetos sejam originadas de um banco de dados nós
teríamos que fazer uma requisição HTTP para algum servidor -> esse servidor iria processar essa requisição -> Na sequência ele daria uma resposta HTTP para nós provavelmente com um JSON anexado nessa resposta que seria convertido dentro da nossa aplicação tambem para um objeto literal -> E a partir daí nós iremos customizar esses parâmetros etc...

Só que imagine esse processo implementado.

Agora imagine ter que fazer esse procedimento em diversos pontos da aplicação.
Nesse momento nós ainda estamos trabalhando apenas com scripts mais aplicações mais complexas que geralmente
são formadas a partir de vários módulos diferentes.
Então imagine ter que repetir essas instruções.

é justamente nesse ponto que surge a proposta do design Partner Factory de criar uma fábrica para automatizar esse processo para nós
    é basicamente encapsular esse processo de criação do objeto e retornar ao objeto pronto.




     temos uma variável que recebe uma função que será a nossa função FACTORY PORQUE ELA RETORNA UM OBJETO.

*/

let Bicicleta1 = {
    cor: "Branca",
    marcha: "única",
    aro: 12,
    pedalar() { console.log("Método pedalar executado!") }
}
console.log('Bicicleta1: ', Bicicleta1);




let Bicicleta2 = {
    cor: "Vermelha",
    marcha: "18",
    aro: 26,
    pedalar() { console.log("Método pedalar executado!") }
}
console.log('Bicicleta2: ', Bicicleta2);




let BicicletaFactory = function (cor, marcha, aro) {

    /* Poderia ter toda uma lógica para fazer essas tratativas de requisição HTTP e consequente recuperação da resposta HTTP para a montagem do objeto. toda essa lógica poderia estar encapsulado aqui. sempre quando chamarmos essa função ela vai retornar um objeto que vai ser constituído a partir dessas instruções dessa logica. Então não precisa ficar repetindo o código. 
    
        E aí o próximo passo seria ao invés de declarar os nossos objetos literais  
        ->devemos simplesmente chamar o método contido dentro de BicicletaFactory. 
            Podemos portanto criar um novo objeto chamado bicicleta3 que vai receber o retorno de BicicletaFactory()

           
*/
    return {
        cor,  
        marcha,
        aro,
        // tipoPedal,
        pedalar() { console.log("Método pedalar executado!")}
    }
}


let Bicicleta3 = BicicletaFactory("Amarela", 18, 26)

// Se exibirmos Bicicleta3 no console, na prática nós teremos aqui um objeto idêntico ao objeto declarado acima.

console.log('Bicicleta3: ', Bicicleta3);

// Então nós podemos a partir de bicicleta 3 acessar os atributos por exemplo "cor" ou  chamar os métodos 

Bicicleta3.cor
console.log('Bicicleta3.cor: ', Bicicleta3.cor);
Bicicleta3.pedalar()


// Mas, ainda assim a criação do nosso objeto continua estátic, continua literal, ou seja, com valores declarados dentro do retorno da função -> como é que nós podemos então fazer com que essas informações fiquem dinâmicas? -Passando parametros! E podem ser atribuídos como valores dos conjuntos de pares/nome valor dos nossos objetos literais. ->é só passar esses parâmetros na chamada da função que retorna o objeto ->  E assim podemos tambem criar bicicleta4 passando outrosvalores -> Então o modelo é o mesmo, mas, serão instâncias diferentes desse objeto -> Portanto a gente não tem aquele comportamento particular de objetos literais que apontam para a mesma instancia Quando a gente atribui a variáveis diferentes porque realmente nós estamos criando objetos diferentes e atribuindo a variáveis diferentes sendo portanto instâncias diferentes.



let Bicicleta4 = BicicletaFactory("Roxa", 21, 29)
console.log('Bicicleta4: ', Bicicleta4);

/*
    Observações:
    - Objetos criados pela função Factory são instâncias diferentes, mesmo que baseados no mesmo modelo (no nosso caso, o objeto literal).
    - A sintaxe ES6 permite simplificar a declaração de objetos literais quando o nome da variável coincide com o nome da chave (o nome da variável vira o nome da chave e o valor da variável virá o valor associado a essa chave): 
        Antes:  cor: cor,
                marcha: marcha,
                aro: aro,

        Depois: cor,  
                marcha,
                aro,

      O resultado é o mesmo, mas com menos código.



As vantagens do uso de Funções Factory:
1. Se no futuro o modelo de OBJETO LITERAL mudar () nós podemos MODIFICAR APENAS NA FUNÇÃO.
    ->Ex.: se de repente a BicicletaFactory ganhar um outro atributo, ex., "tipoPedal" -> não precisamos ficar caçando dentro do meu código onde esses objetos literais foram criados para fazer a modificação desse atributo eu posso modificar em um ponto único (No meu exemplo, no caso, modificaria ali dentro do retorno da função).


2. Se a criação do objeto envolver algum tipo de processo mais complexo. Por exemplo, no nosso estamos passando os parâmetros, mas, esses parâmetros eles poderiam ser originados de uma lógica que envolvesse uma requisição HTTP para um servidor para que o servidor retornasse dados contidos em banco de dados
    Então repare nós temos uma lógica mais complexa se a criação desses objetos envolvessem esse tipo de
ação nós iríamos precisar repetir essa lógica nos locais onde esses objetos são criados que poderiam ser em diversos pontos diferentes da aplicação e com funções Factory Nós podemos encapsular essa lógica juntamente com o retorno do objeto.
    E isso facilita bastante Ao invés de repetir essa lógica toda vez nós podemos concentrar essa lógica em um ponto único a manutenção também se torna mais fácil.


3. O Design Partner Factory é uma forma de se pensar, não é uma implementação técnica específica. Então vai da experiência do programador para saber onde é mais interessante incluir ou não.

.




           
        
*/





