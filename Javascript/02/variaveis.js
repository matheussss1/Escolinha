/**
 * Para aqueles que estão já aprendendo lógica de programação
 * ou para aqueles que já sabem e estão avançando, nós sabemos que o primerio passo
 * de uma linguagem é ver como declaramos variaveis.
 * 
 * Todo mundo sabe pra que serve variaveis dentro do nosso código?
 * 
 * explicação segundo o Google: São importantes pois elas armazenam temporariamente ou em definitivo, valores que são
 * manipulados durante a execução do programa.
 * 
 * É basicamente pra isso, tudo que precisamos armazenar para escrevermos nosso código,
 * será armazenado em variaveis.
 * 
 * Podemos começar então vendo como declaramos variaveis
 * 
 * primerio vem "let" ou "const" ou "var"
 * então o nome da variavel
 * e depois a atribuição de valores
 * 
 */

let nomeVariavel = "teste";
var outraVariavel = "variavel"
const outraVariavel2 = "outra varialvel";

/**
 * Perceba que utilizamos 3 tipo de declarações
 * let, var e const
 * qual a diferença entre elas?
 * 
 * Hoje oq vc precisa aprender é:
 * 
 * var não é recomendado de se utilizar
 * porem é uma variavel que age de forma global (ignorando escopo, veremos mais pra frente)
 * pode iniciar indefinida, pode ser redeclarada e seu valor pode ser alterado. 
 * 
 * utilize apenas let e const
 * 
 * let, variavel que pode iniciar undefined, não pode ser redeclarada e
 * seu valor pode ser trocado.
 * 
 * const, variavel que não pode iniciar undefined. não pode ser redeclarada e 
 * seu valor nao pode ser trocado.
 * 
 */

var texto = "texto teste";
var texto = "redeclarando variavel";

/**
 * Perceba que eu posso redeclarar essa variável.
 * Não parece ser uma boa prática né?
 */

/**
 * Ok, embora não seja uma boa prática, 
 * para a variavel texto, atribuimos um conteudo do tipo texto, certo?
 * Colocamos as aspas duplas "", que também poderiam ser aspas simples ''
 * então o conteudo do texto, na programação chamamos isso de tipo `string`
 * 
 * Mas também possuimos outros tipos, como o tipo `number`
 * mais conhecido como `int` em outras linguagens
 * 
 * dessa vez utilizaremos a declaração do tipo `let` ;)
 */

let numero = 20;
let ano = 2022;
let idade = 21;

//Não se esqueça que com let podemos alterar o valor das variaveis
idade = 22;
// Inclusive trocando seus tipos
idade = "teste alterando valor";
idade = 50;

//podemos usar também numeros negativos:

let animoParaIrPraAcademia = -40;

// e numeros com pontos flutuantes:

let grauMiopia = 5.25;

/**
 * Temos também o tipo boleano, ou boolean em ingles
 * utilizado para representar true/false (verdadeiro, falso)
 */

let verdadeiro = true;
let falso = true;

let anoJaAcabou = false;
let brasilTrouxeACopa = false;
let peleMelhorQueMaradona = true;

/**
 * É possível declarar que um valor para indicar que não existe valor,
 * meio confuso né? mas é isso mesmo, null é um tipo que representa *não há valor*.
 * note que apesar de ser um tipo, ele também pode ser utilizado como valor: 
 */

let jatinhoParticular = null;

/**
 * Preparado para confundir a cabeça?
 * Temos o tipo undefined (que também pode ser utilizado como valor XD )
 * que representa que uma variavel não foi inicializada
 * 
 * perceba a diferença:
 * 
 * `null indica que a variavel iniciou e que o valor dela é NULO`
 * `undefined indica que a variavel não iniciou, logo, não tem valor`
 */

let variavelSemValor;

console.log(variavelSemValor) // -> undefined

/**
 * Até agora conhecemos todos (ou quase todos) 
 * os tipos **PRIMITIVOS** do Javascript
 */


/**
 * E se quisermos então salvar o nome dos itens de uma **LISTA** de compras?
 * Usariamos o tipo string?
 */

let listaDeComprasErrada = "Macarrao Feijao Sorvete Pizza";

/**
 * Olha, de uma certa forma estamos armazenando
 * mas existe uma estrutura de dados criada especificamente
 * para lidar com listas, chamada `array`
 * 
 */

let listaDeCompras = ["Macarrão", "Feijão", "Sorvete", "Pizza"];

/**
 * Perceba a sintaxe, temos o bracket abrindo `[`
 * temos um item, que é do tipo string
 * e então temos uma virgula
 * e assim vai até fecharmos o bracket `]`
 * 
 * Concorda que até no papel e caneta
 * cada item escrito ocupa um **espaço** na folha? 
 * 
 * Em uma lista não é diferente, chamamos o **espaço** ocupado
 * por cada item de `index`.
 * 
 * Por exemplo, o item "Macarrão" está no `index`de número 1 (um), certo?
 * 
 * ERRADO!
 * 
 * os arrays começam a acomodar seus itens no `index` zero (0).
 * 
 * Então a afirmação correta seria, o item "Macarrão" está no index zero (0)!
 * ou então, o item "Pizza" está no index quatro (4)!
 *  
 * 
 * Ok, entendi. Mas afinal pra que serve esse tal de index?
 * 
 * Bom. Se vamos ter varios itens em uma lista, é bom uma identificação de onde
 * ele está dentro da lista certo?
 * 
 * Perceba oq acontece ao dar `console.log` na variavel `listaDeCompras`:
 */

console.log(listaDeCompras) // -> ["Macarrão", "Feijão", "Sorvete", "Pizza"];

// Temos o retorno da lista inteira

console.log(listaDeCompras[0]) // -> "Macarrão"

/**
 * Atenção para a sintaxe:
 * 
 * listaDeCompras -> referencia a variavel
 * [0] -> brackets ([]) e um numero (index), representa o acesso
 * ao item de index 0 dentro de uma lista
 * 
 * 
 * Consegue entender agora o por que de usarmos uma lista e não uma string
 * para armazenar diversas informações?
 * 
 * Programação é sobre isso, as vezes podemos até fazer algo funcionar
 * mas pode ser que não estejamos fazendo da forma correta.
 * 
 * 
 * No exemplo anterior utilizamos apenas itens do tipo string
 * para colocar dentro do array.
 * Mas o array pode ser preenchido com qualquer tipo:
 */

let numerosDaMega = [20, 37, 10, 76, 54, 21];
let numerosAcertados = [true, true, true, true, true, true];

//Ou até mesmo outros arrays, formando matrizes n-dimensionais

let matriz = [ [1,2,3], [4,5,6], [7,8,9] ];

//perceba que:

console.log(matriz[0]) // -> [1, 2, 3]
console.log(matriz[2]) // -> [7, 8, 9]
console.log(matriz[0][0]) // -> 1
console.log(matriz[0][2]) // -> 3
console.log(matriz[2][1]) // -> 8

/**
 * Agora ao acessar o index zero, o valor retornado é um array
 * perceba que você acessou um index de um array e ele te retornou outro array
 * então significa que podemos utilizar mais "acessadores de index"
 * 
 * matriz[ACESSADOR_DE_NIVEL_1][ACESSADOR_DE_NIVEL_2]
 * 
 * ou programaticamente correto: 
 * 
 * matriz[ACESSADOR_DE_NIVEL_0][ACESSADOR_DE_NIVEL_1]
 * .
 * .
 * .
 * .
 * .
 * .
 * foi apenas uma piada, mas se você entendeu, está no caminho certo :)
 */


/**
 * Uma duvida que pode ter surgido:
 * 
 * É possível utilizar o "acessador de index"
 * em outra estrutura de dado que não seja o `array`?
 * 
 * SIM, mas talvez seja meio confuso:
 */

let testeDeAcessoEmUmaString = "Stags";

console.log(testeDeAcessoEmUmaString[2]) // -> "a"

/**
 * Bom, se você tiver uma intuição forte
 * vai perceber que acessamos apenas a letra "a" dentro 
 * da `string` que declaramos.
 * 
 * Ok... posso viver com isso... mas... Por que?
 * 
 * Sabe qual um sinimo para `palavra`?
 * 
 * "Cadeia de caracter"
 * .
 * .
 * .
 * .
 * .
 * 
 * Vou te contar um segredo:
 * 
 * Strings são arrays.... PRONTO FALEI!
 * 
 * imagine que ao declarar `let nome = "stags"`
 * 
 * na verdade o que temos é `let nome = ["s", "t", "a", "g" ,"s"]`
 * 
 * Mas não se preocupe, isso é coisa que vale mais pro computador
 * do que para nós, programadores. Apenas é bom saber como as coisas 
 * realmente funcionam e entender do motivo de podermos acessar
 * os indexes de uma string.
 * 
 * 
 * ..... então quer dizer que:
 */

let matrizString = ["stags", "teste"];

console.log(matrizString[0][2]) // -> "a"

// é, eu sei. programação né!

/**
 * Ok, já entendemos bem sobre listas
 * mas quero que você foque em uma coisa,
 * apesar de termos o valor "Macarrão", dentro 
 * da variavel `listaDeCompras`, não temos mais informações
 * sobre o produto, não sabemos o preço que ele tem/pode ter
 * não temos a quantidade do produto.
 * 
 * Tudo bem, as vezes realmente não precisamos de tantas informações.
 * 
 * Mas e se quisermos?
 * 
 * É ai que entra um outro tipo de estrutura de dados:
 * 
 * o Objeto.
 * 
 * veja uma demonstração da sintaxe:
 */

const objetoPessoa = {
  
  nome: "Stags",
  
  idade: 21,
  
  filhos: null,
  
  animaisEstimacao: ["Cachorro", "Gato"],
  
  temAlergia: false,
  
  renda = {
    emprego: 15000,
    projetoPessoal: 500,
    pensao: 200 
  }

};

/**
 * Consegue perceber?
 * 
 * Ao inves de brackets []
 * temos chaves {}
 * 
 * ao invés de um valor único, temos uma chave descritiva,
 * chamada de `propriedade`, e logo após temos um valor,
 * que pode ser de qualquer outro tipo que vimos até agora,
 * inclusive, o valor pode ser ou objeto também.
 * 
 * 
 * Ok... pra acessar o valor eu já sei!
 * 
 * 
 * É só fazer: console.log(objetoPessoa[0]);
 * 
 * E terei o retorno da `propriedade` nome, que é stags.
 * Certo?
 * 
 * NÃO.
 * 
 * Em um termo mais técnico, objetos não são `indexaveis`,
 * não possuem index mas sim as chaves de acesso, que no caso,
 * são as propriedades.
 * 
 * Então como poderiamos obter o valor de `nome` em `objetoPessoa`?
 */

console.log(objetoPessoa.nome) // -> "stags";

// Ou então:

console.log(objetoPessoa["nome"]) // -> "stags";

// Veja mais exemplos:

//Isso:
console.log(objetoPessoa["animaisEstimacao"][0]) // -> "Cachorro"
console.log(objetoPessoa["renda"]["emprego"]) // -> 15000
console.log(objetoPessoa["renda"]["emprego"]) // -> 15000

//É o mesmo que isso:
console.log(objetoPessoa.animaisEstimacao[0]) // -> "Cachorro"
console.log(objetoPessoa.renda.emprego) // -> 15000

/**
 * Veja como podemos ler esse código:
 * 
 * linhas 362 e 367 - dentro do objetoPessoa, acesso a propriedade 
 * animais de estimação e pego o primeiro indice da lista retornada
 * 
 * linhas 363 e 368 - dentro do objetoPessoa, acesso a propriedade renda
 * e acesso a propriedade emprego do objeto retornado
 */


/**
 * Perceba que temos duas opções, acessar por ponto ( . )
 * ou pelo nome da propriedade dentro de brackets []
 */



.
.
.
.
.

.
.
.
.
.
.
.
.

/**
 * Esses foram todos (quase todos) 
 * os tipos **NÃO PRIMITIVOS**
 * 
 * 
 * Afinal, por que diferenciar primitivos de não primitivos?
 * 
 * Bom, no Javascript funciona da seguinte forma:
 * 
 * Tipos primitivos: A aplicação guarda o valor da variavel
 * Tipos nao primitivos: A aplicação guarda uma referencia em memoria
 * para aquela variavel em especifico.
 */
