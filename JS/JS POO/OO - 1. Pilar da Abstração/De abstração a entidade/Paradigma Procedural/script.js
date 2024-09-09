/*
-----------------------------------------------------------------------------
| *REPRESENTANDO OS 4 PILARES DA ABSTRAÇÃO COM O PARADIGMA PROCEDURAL (PP): |
-----------------------------------------------------------------------------
POV: SOFTWARE PARA MARCENARIA -> ELA FAZ CADEIRAS E SOFAS
    ->Então nós temos dois objetos no mundo real que nós precisamos incorporar dentro do nosso sistema de
tal modo abstrair desses objetos o que é importante para o negócio.

(NO CÓDIGO ABAIXO 1~) representando a cadeira do mundo real:
    ->Em termos da abstração, fiz as  as caracteristicas e as ações, dentro de outro paradigma, no caso, procedural
    ->representei suas ações com funções
    
Porém as necessidades de negócio elas não param por aqui:
    *Supondo que o usuário precisa ter acesso a uma relação de cadeiras que precisam ser fabricadas, ele terá mais do que apenas uma única entidade/cadeira dentro da aplicação. Então nesse caso nós precisamos de alguma forma fazer com que a nossa aplicação tenha a inteligência de possuir além das características dos atributos e da própria entidade de cadeira, uma identidade capaz de dar acesso a esses diversos objetos dentro da nossa aplicação.
     
    ->Podemos representar isso com um ARRAY MULTIDIMENSIONAL (no paradigma procedural), dando uma identidade para cada tipo de cadeira    
    ->No indice 0 há outro array, pois cada cadeira tem suas caracteristicas/atributos

    Na função girar_cadeira recebemos um indice do array "cadeiras"
    ex.: se for 1, vai acessar o array cadeiras (pai), vai no indice 1 (do array Pai) e dentro dele vai acessar outro ARRAY (filho),dps acessa o indice "giratoria" (do array Filho) e vai verificar se é true ou false.    


   *Inclusão de Cadeiras dentro do array
    -Fiz uma função que recebe alguns parametros, cria um array novo, e nas suas posicoes 0, 1 e 2, tem seus indices com nomes das caracteristicas e passa os valores dos parametros pra elas. Depois da um .push() desse array novo, para o array global "cadeiras" (cria um indice novo no array "cadeiras" e inclui os 3 itens desse novo array nele)

1~ Caracteristicas da cadeira:
    let numPernas = 1;
    let giratoria = true; pode ser ou nao
    let cor = "azul";

(migramos essa cadeira pra dentro do array)
*/



let cadeiras = []
     cadeiras [0] = []
      cadeiras[0]["numPernas"] = 4;
      cadeiras[0]["giratoria"] = false;
      cadeiras[0]["cor"] = "azul";
    
    cadeiras [1] = []
      cadeiras[1]["numPernas"] = 1;
      cadeiras[1]["giratoria"] = true;
      cadeiras[1]["cor"] = "vermelha";

console.log('cadeiras: ', cadeiras);


function  girar_cadeira(indice){
    if(cadeiras[indice]["giratoria"] == true ){
        console.log("Cadeira girou")
    }else{
        console.log("Cadeira não é giratoria")
    }
}

girar_cadeira(1)

function  adicionarCadeira(numPernas, giratoria, cor){
    let cadeira = []
           cadeira["numPernas"] = numPernas;
           cadeira["giratoria"] = giratoria;
           cadeira["cor"] = cor;

    // push (incluir no array) no array global "cadeiras" -> inclusao do array "cadeira" em um novo indice do array "cadeiras"
    cadeiras.push(cadeira)
}

adicionarCadeira(3, false, "verde")
console.log('cadeiras: ', cadeiras);
