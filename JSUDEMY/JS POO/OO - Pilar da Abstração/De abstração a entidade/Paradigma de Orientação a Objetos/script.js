/*
-------------------------------------------------
|     *REPRESENTANDO COM O PARADIGMA DE OO:     |
-------------------------------------------------

-As variaveis com this, fazem referencia a um atributo to proprio objeto (Cadeira)
-As variaveis sem this, fazem referencia as variaveis do escopo da função (constructor()), logo elas não se conflitam
-O "adicionarCadeira()" do paradigma procedural é uma operação de criação do objeto.
    -> Então aqui no Paradigma de OO, será uma instância de um novo objeto baseado na classe.
        -> criar uma cadeira baseado no modelo Cadeira

->como nós estamos aqui dentro do método utilizado this Para testar o atributo giratória então o método girarCadeira() vai atuar sobre um atributo do próprio objeto (Cadeira), então não precisamos passar um parametro para esse método
    ->O próprio objeto já sabe que nós estamos trabalhando com atributos dele mesmo.


*/

class Cadeira {

    constructor(numPernas, giratoria, cor) {
        this.numPernas = numPernas;
        this.giratoria = giratoria;
        this.cor = cor;
    }

    girarCadeira() {
        if (this.giratoria == true) {
            console.log("Cadeira girou")
        } else {
            console.log("Cadeira não é giratoria")
        }
    }

}

/* criando as cadeiras pela instancia
 let cadeira = new Cadeira(4, false, "azul");
 let cadeira2 = new Cadeira(1, true, "vermelha");

 console.log('cadeira: ', cadeira); ao verificar no console.log temos a representação de um objeto literal
 cadeira.girarCadeira();
 cadeira2.girarCadeira();

 */


let cadeiras = []
cadeiras.push(new Cadeira(4, false, "azul"))
cadeiras.push(new Cadeira(1, true, "vermelha"))
console.log('cadeiras: ', cadeiras) //mostra um array de objetos do tipo cadeira e cada indice apontará para o respectivo objeto.

//  Com isso nós podemos recuperar os nossos objetos através de uma estrutura de laço




class Sofa{
    constructor(numAssentos, cor, reclinavel){
        this.numAssentos = numAssentos;
        this.cor = cor;
        this.reclinavel = reclinavel;
    }

    reclinar(){
        if(this.reclinavel == true){
            console.log("O sofá reclinou!")
        }else{
            console.log("O sofá não pode reclinar!")
        }
    }
}

let sofa1 = new Sofa(4, "verde", true)
let sofa2 = new Sofa(2,"roxo", false)

console.log('sofa1: ', sofa1, '\n sofa2: ', sofa2);
sofa1.reclinar()
sofa2.reclinar()