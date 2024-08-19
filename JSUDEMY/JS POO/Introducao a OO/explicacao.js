/*
Paradigmas de programação - JavaScript
(* = já visto ou estudando)

    *Procedural(Estruturado ou Imperativo);
    -Funcional;
    -Lógico;
    *Orientado a Objetos;
    -Concorrente;
    -Reativo: 
        -Esse é importante conhecer pois funciona muito bem com o JavaScript através da inclusão de uma biblioteca chamada ReactiveX. Ela tem proporcionado a empresas como Netflix, Airbnb, Facebook, enfim, essas empresas de grandes displays de mercado, a possibilidade de criação de aplicações capazes de lidar bem com erros, ou seja, de reagir de forma inteligente com diversas situações possíveis.


O QUE SIGNIFICA PARADIGMA?
-Paradigma é um padrão, uma conduta, uma forma de se fazer alguma coisa.
    ->podemos desenvolver dentro do PHP dentro do JavaScript códigos baseados em um paradigma procedural (que é também conhecido como paradigma estruturado ou imperativo).
    ->Assim como nós podemos na mesma linguagem, dentro de um mesmo script, desenvolver blocos de códigos baseados no paradigma de orientação a objetos.

-Tanto o paradigma estrutural quanto o paradigma de orientação a objetos são os mais difundidos no mercado:
    ->Trabalham bem juntos;
    ->Embora o paradigma de orientação a objetos é considerado o sucessor do paradigma procedural, na verdade, o que acontece na prática é que eles se completam.

Os princípios do paradigma procedural envolve o desenvolvimento de aplicações que seguem uma sequencia, que possuem estruturas de decisão (também conhecidas como estruturas de seleção ou condicionais) e possuem também estruturas de repetição (loops) ou estruturas interativas, ou seja, nós estamos falando em termos do princípio de sequência, em relação à interpretação gravitacional do código (execução de linha por linha, de cima pra baixo) e também a chamada de funções.
     -Em relação ao princípio de decisão, seleção ou condicionais: Switch, if, else if, else;
     -Em relação ao princípio Repetição ou estruturas interativas: FOR, do WHILE, do DO WHILE;


A linguagem Java Script fornece suporte a instruções que atendem aos PRINCÍPIOS DA PROGRAMAÇÃO PROCEDURAL.
Repare a sacada: esses comandos podem ser utilizados a fim de atender aos princípios que foram estabelecidos na
definição do que é o paradigma, o padrão ou a conduta de trabalho conhecida como procedural (estruturada ou imperativa)    


Já em relação à orientação a objetos nós temos outros pilares que nós vamos falar na próxima aula sendo
que esses pilares eles tão bem são atendidos pelo JavaScript.
é por isso que eu já vi clipe que suporta tanto a programação procedural quanto a programação orientada
a objetos porque ela possui os recursos que são necessários para atender o princípio do paradigma em
questão como o nosso objetivo não é estudar os paradigmas com exceção clara do paradigma de orientação
Eu não vou entrar em mais detalhes mas eu fiz questão de apresentar essas considerações preliminares



*MAS QUAL É O MELHOR?
Depende!
-O modelo de orientação a objetos trouxe em termos de segurança e organização de código muitas vantagens, códigos menores e menos redundantes e manutenção mais facil
    -> Se nos precisarmos mudar algo em relação ao dado "Cadeira" nós podemos implementar diretamente no modelo do objeto e aí a cada novo objeto automaticamente esses atributos e métodos atualizados no modelo, estarão disponíveis.

-Já no modelo procedural seria diferente: se eu criasse uma nova função em um determinado local para trabalhar os dados da "Cadeira" eu precisaria copiar essa função para outros scripts se por ventura eu precisasse utilizá-la tb.
    ->A mesma coisa para os atributos que eu teria que procurar no meu script os locais onde esse objeto era construído, onde essa abstração é feita e, teria que autualizar esses dados tambem.

-Repare que são motivações que trouxeram uma nova forma de pensamento (POO), mas a codificação ela é essencialmente a mesma (PP e POO).

*/