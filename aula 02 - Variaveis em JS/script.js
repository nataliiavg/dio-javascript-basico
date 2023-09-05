//boolean
var vOrF = false;
console.log(typeof vOrF);

//number
var numeroQualquer = 1;
console.log(typeof numeroQualquer);

// string
var nome = "Natalia";
console.log(typeof nome);

// como declarar variaveis
var variavel = "nathalia";
variavel = "natalia";
console.log(variavel);

let variavel2 = "nat";
variavel2 = "naty";
console.log(variavel2);

const constante = "nataly";
console.log(constante);

// escopos global e local
var escopoGlobal = "global";
console.log(escopoGlobal);

function escopoLocal() {
  let escopoLocalInterno = "local";
  console.log(escopoLocalInterno);
}

escopoLocal();

// Atrbuição
var atribuicao = "atribuir";

// Comparacao
var comparacao = "0" == 0;
console.log(comparacao);

// Comparacao Identica
var comparacaoIdentica = "0" === 0;
console.log(comparacaoIdentica);

// Operacoes Aritmeticos
// Adição
var adicao = 1 + 1;
console.log(adicao);

// Subtração
var subtracao = 4 - 1;
console.log(subtracao);

// Multiplicação
var multiplicacao = 2 * 4;
console.log(multiplicacao);

// Divisão Real
var divisaoReal = 6 / 2;
console.log(divisaoReal);

// Divisão Inteira
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

// Potenciação
var potenciacao = 2 ** 10;
console.log(potenciacao);

// Operações Relacionais
var maiorQue = 5 > 2;
console.log(maiorQue);
var menorQue = 5 < 2;
console.log(menorQue);
var maiorOuIgualA = 5 >= 2;
console.log(maiorOuIgualA);
var menorOuIgualA = 5 <= 2;
console.log(menorOuIgualA);

// Operadores Lógicos
var e = true && false;
console.log(e);

var ou = true || false;
console.log(ou);

var nao = !true;
console.log(nao);
