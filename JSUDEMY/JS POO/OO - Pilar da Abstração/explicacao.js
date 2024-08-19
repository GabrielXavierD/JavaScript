/* PILAR DA ABSTRAÇÃO
A abstração é na verdade muito mais uma habilidade intuitiva e de conhecimento das coisas do que é necessariamente
de programação escrita de código.

A ideia da abstração é compreender as coisas no mundo real e trazer essas coisas para dentro dos nossos
sistemas

Para entender a abstração devemos entender os 4 temas que fazem parte da abstração:
    -Entidade:  compreensão de que um objeto do mundo real deve passar para dentro da nossa aplicação.

    Exemplo: Por exemplo digamos que nós estamos desenvolvendo um sistema que vai ser utilizado por uma concessionária
a concessionária que ela trabalha com carros, ela vende carros. Então, temos um objeto (que é uma entidade do mundo real trazida para dentro da nossa aplicação)
     ->O nosso desafio agora é abstrair essa entidade de tal modo a criar um modelo dentro do nosso código de forma que represente essa entidade

Digamos que nós identificamos que para o nosso sistema nós vamos ter que trazer a entidade de carro
para ser trabalhada.
Descoberta essa necessidade nós precisamos ter em mente a questão da identidade dessa entidade que é

    -Identidade

    Bom nós temos uma entidade dentro da nossa aplicação nós vamos poder instanciar essas entidades de tal modo a criar a relação dos carros e quenós vamos trabalhar dentro do nosso sistema.

    Temos um modelo que representa um entidade porém esse modelo vai servir para a criação de várias entidades daquele tipo só que para acessar essas entidades de forma isolada nós precisamos de alguma forma aplicar
uma identidade para essa entidade.
Ou seja nós precisamos referencial de forma única dando para a linguagem a capacidade de o poder identificar
cada um dos objetos de forma independente podendo tratá lo tão bem de forma independente.
Então por mais que o objeto do carro seja abstraindo pra dentro da nossa aplicação dentro da aplicação
na prática nós teremos vários caos.
Então nós precisamos ter uma identidade para acessar cada um desses carros dentro da nossa aplicação.



    -Características
    -Ações




1. Entidade
    -Imagine que você está criando um sistema para uma concessionária que vende carros. O "carro" é uma entidade, ou seja, um objeto do mundo real que precisa ser representado dentro do sistema. O desafio é transformar esse "carro" em um modelo dentro do código, representando-o de forma que o sistema entenda.

2. Identidade
    -No sistema, você pode ter vários carros, e cada carro precisa ser identificado de forma única. A identidade é o que permite ao sistema distinguir entre diferentes carros, mesmo que todos sejam "carros". Isso é necessário para que o sistema trate cada carro separadamente.

3. Características (ou atributos)
    -As características são as propriedades que descrevem o carro, como cor, modelo, ano de fabricação, etc. São os atributos que definem cada carro. 

        ->Perceba que não necessariamente preciso abstrair todas as características do carro, somente as que fazem mais sentido, podendo ser mais ou menos detalhadas.
            ->O importante é de fato abstrair uma quantidade de características que nos permita controlar a informação que nós queremos ter, a respeito das entidades relativas aos objetos "carro".


4. Ações (ou métodos)
    -As ações são as coisas que o carro pode fazer ou que podem ser feitas com ele, como "ligar", "acelerar", "frear", "desligar" etc. Essas ações representam os comportamentos que o carro pode ter dentro do sistema.

        ->São os comportamentos daquele objeto no mundo real que devem ser levados para a programação. Ou seja, que fazem sentido no contexto da aplicação, para as regras de negócio da aplicação. 

        Por exemplo: as ações da entidade carro (objeto da vida real) são: ligar, acelerar, frear e desligar -> Para a necessidade desse sistema, essas ações que foram extraidas da vida real é suficiente para atender às necessidades do negócio. Mas se fosse necessario, nós poderíamos abstrair do objeto carro mais ações ou menos ações.
        
        ->Para criar um sistema, é importante entender o que precisa ser representado (abstraído) no código. Você deve observar o mundo real, identificar as características e ações dos objetos, e decidir quais delas são relevantes para o sistema, de acordo com suas necessidades (regra de negócio do sistema).
    

------------------------------------------------------------------------------------
|      PARADIGMA PROCEDURAL (PP) OU PARADIGMA DA ORIENTAÇÃO A OBJETOS (POO):       |
------------------------------------------------------------------------------------
-No modelo procedural nós encaminhamos os dados para dentro das funções para as funções manipularem esses dados
    ->Na prática, não é uma boa fazer assim (c/ modelo procedural), pois deixa o código mais extenso, complicado de entender, redundante e não é muito seguro, por isso devemos fazer com o paradigma OO (orientação a objetos).

-Mas a grande sacada da Orientação a Objetos nesse aspecto é justamente inverter os papéis entre procedimentos e dados. Nela, os dados passam a ser encapsulados dentro dos dados, nós temos os atributos e os métodos.
    ->Enquanto no modelo procedural as funções que operam sobre os dados e muitas vezes esses dados ficam disponíveis em escopos globais.

*MAS QUAL É O MELHOR?
Depende!
-O modelo de orientação a objetos trouxe em termos de segurança e organização de código muitas vantagens, códigos menores e menos redundantes e manutenção mais facil
    -> Se nos precisarmos mudar algo em relação ao dado "Cadeira" nós podemos implementar diretamente no modelo do objeto e aí a cada novo objeto automaticamente esses atributos e métodos atualizados no modelo, estarão disponíveis.

-Já no modelo procedural seria diferente: se eu criasse uma nova função em um determinado local para trabalhar os dados da "Cadeira" eu precisaria copiar essa função para outros scripts se por ventura eu precisasse utilizá-la tb.
    ->A mesma coisa para os atributos que eu teria que procurar no meu script os locais onde esse objeto era construído, onde essa abstração é feita e, teria que autualizar esses dados tambem.

-Repare que são motivações que trouxeram uma nova forma de pensamento (POO), mas a codificação ela é essencialmente a mesma (PP e POO).
*/ 