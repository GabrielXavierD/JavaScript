/* DOM -> Document Object Model
-É API multiplataforma que permite o acesso através do JavaScript a todos os elementos
HTML que fazem parte da nossa página

-Quando falamos de DOM estamos nos referindo a árvore de elementos da nossa página;

-Nos fornece metodos atraves do JS p/ selecionar e manipular elementos HTML (tambem chamados de NÓS).
    -É através da API do dom que vamos conseguir acessar e modificar os elementos HTML

-Todos os elementos HTML quando interpretados pelo navegador ficam organizados num OBJETO chamado DOCUMENT
    -Essa organização segue uma representação análoga ao de uma árvore onde os ELEMENTOS PAIS encápsulam
    os ELEMENTOS FILHOS de modo a estabelecer trajetos bem específicos para alcançar cada um dos elementos
    que constituem a página;

    -Há uma estrutura hierarquica.
        -Daí surge o termo ÁRVORE DE ELEMENTOS DO DOM pra designar os elementos disponíveis em uma página HTML.
        -Cada elemento HTML contido no DOM é chamado também de NÓ ou NODE (em ingles).
            Exemplos de Nó: tag HTML (que encapsula todo o conteúdo) - Nó Pai
                            tags BODY e HEAD - Elementos/Nós Filhos e irmãos
                           (Etc...)
*/