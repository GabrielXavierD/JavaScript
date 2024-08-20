/*
PILAR DO ENCAPSULAMENTO
-Seguro;
-Reutilizavel.

Seguro:
O encapsulamento assim como a abstração tem seus dois lados: o lado conceitual e o lado técnico.
Do ponto de vista conceitual: o encapsulamento, como o nome sugere, consiste em encapsular um objeto de tal modo a tornar esse objeto seguro.

O que isso significa: significa que o objeto vai ter condições de dizer o que dentro dele está disponível
para o sistema. 
    ->Os objetos são constituídos de atributos e métodos.
O encapsulamento portanto é uma forma de dar visibilidade para esses atributos e métodos de acordo com as nossas necessidades.
Nós podemos falar que um determinado atributo ou metodo é privado ou público



A diferença dessa abordagem no código aqui seu método ou um atributo for privado eles só poderão ser
acessados através do próprio objeto criando uma camada de segurança evitando que a aplicação acesse
recursos privados no objeto.


Do ponto de vista técnico: o encapsulamento consiste em proteger o objeto de acesso
indireto, ou seja, de acesso através de outros objetos.


Reutilizavel:
Do ponto de vista de reutilização o encapsulamento permite a partir da visibilidade que métodos e atributos sejam herdados por outros objetos.
Esse comportamento é conhecido como herança e a herança por sua vez é o terceiro princípio do paradigma
de orientação a objetos.



ATRIBUTOS


Os OPERADORES DE VISIBILIDADE (private ou public) inda não estão disponiveis no JavaScript, então seguimos uma convenção:
->O uso de _ (underline) para atributos privados no inicio do nome.

Se fosse private ali no constructor(), antes do this os atributos, não poderiam ser acessado daquela forma no console.log() Porque nós estamos indicando que esse atributo é privado do objeto. Portanto, seria necessário através de alguma função acessar esse tributo e efetuar essa modificação.

Se quisermos criar um atributo dentro do seu objeto que seja restrito a apenas o objeto, utilize no início do nome dele um _ (underline). 
    ->O uso do UNDERLINE não impede que o atributo seja acessado da mesma forma, mas, pela convenção, o que nós estamos sugerindo é que o usuário não faça isso (o programador que for verificar o codigo, no caso, se ele ver um atributo com essa característica, quer dizer para que ele não tente acessar esse atributo de forma direta), mas que acesse utilizando o metodo get() que retorna esse atributo para nos.


METODOS GETTERS E SETTERS
Eles são muito utilizados dentro de classes para nos dar a possibilidade de recuperar e setar atributos privados
    -get: obter algo/retornar algo;
    -set: setar/atribuir. 

Get: esse metodo sempre procura por uma função -> Então, indicamos qual atributo queremos retornar e ele funciona como uma função, aí sim essa função se torna publica
->A partir dessa função retornamos _canalAtivo 
    ->Assim, acessamos o método, porém, através de uma anotação de pseudo variável, logo, não precisamos utilizar () no console pra acessar o metodo.
        ->"canalAtivo" não existe dentro da classe Tv, o que existe é "_canalAtivo", mas, por ser um método estabelecido como GET o interpretador do JavaScript tem essa inteligência, essa habilidade de executar esse método para nós o que é

Set: no JS, podemos simplesmente "chamar" o atributo e atribuir um valor a ele, porem, na convenção do POO, em questão de seguraça, devemos definir o set com uma função com o mesmo nome do atributo para recuperar um parâmetro, por exemplo, outro canal e com base nesse parâmetro atualizar o atributo em questao


o encapsulamento possui essa característica que é criar atributos e métodos privados.
atraves do get e set podemos montar métodos que recuperam no caso de GET e atualizam valores e atributos SET e a Convenção
em termos de encapsulamento para atributos JavaScript e utilizar aqui no início do nome o _ (underline).
Isso não impede que o atributo seja acessado diretamente mas indica para quem conhece a comissão que
é necessário acessar esse atributo atraves de um getter Quando a necessidade for recuperar esse dado ou através de um SETTER quando a necessidade for modificar o valor de cidade ou seja ter esse atributo é esse o porquê.
Pode ser que no momento de modificação dá se o valor desse atributo seja necessário estabelecer alguma
lógica evitando portanto um comportamento inesperado.




*/

class Tv{
    constructor(){
        this._relacaoCanais = [2, 4, 5, 7, 10]
        this._canalAtivo = 5
        this._volume = 5
    }

    get canalAtivo(){
        return this._canalAtivo
    }

    set canalAtivo(canal){
        // método .indexOf()-> para verificar se dentro desse array existe uma referencia desse canal -> ele vai retornar o indice do array onde esse valor for encontrado ou -1 caso ele nao for encontrado. Para fins de debbug atribuiamos a uma variavel
        if( this._relacaoCanais.indexOf(canal) !== -1){
            this._canalAtivo = canal //modificamos o canal
        } //se nao, n faz nd
        
    }
}


let tv = new Tv();



/*
Então ao invés de acessar diretamente o atributo do objeto nós estamos através de uma convenção indicando que esse atributo privado é a regra de acesso a esse atributo deve ser respeitado.

Então nós vamos acessar e modificar esse atributo através de uma pseudo variável que será canalAtivo.
O JS tem a inteligencia de compreender essas pseudoVariveis como sendo os metodos GET e SET
*/
tv.canalAtivo = 7  //passa o valor 10 para o set canalAtivo, ele pega o valor como parametro e verifica com o indexOf()


// Então se estou atribuindo um valor a essa pseudo variável que tem o mesmo nome da função. Ele vai procurar por uma função que seja do tipo SET. Caso eu não esteja atribuindo nenhum valor interpretador JavaScript vai procurar pelo método GET.

console.log(tv.canalAtivo)

