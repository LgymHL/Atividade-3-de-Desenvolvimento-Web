/* =====================================================================
   Desenvolvimento Web — Semana 03
   Introdução ao JavaScript: Variáveis e Tipos, Funções, Controle de Fluxo
   Roda no console do navegador OU via Node.js (node app.js)
   ===================================================================== */

/* =====================================================================
   BLOCO 1 — Fundamentos e Variáveis
   ===================================================================== */
console.group("Bloco 1 — Fundamentos e Variáveis");

// 1. let + reatribuição
let pontos = 10;
pontos = pontos + 10;
console.log("pontos:", pontos);

// 2. const + tentativa de reatribuição (TypeError)
const MAX_PONTOS = 100;
try {
  MAX_PONTOS = 200; // isso sempre lança TypeError em tempo de execução
} catch (erro) {
  console.log("Erro ao tentar reatribuir MAX_PONTOS:", erro.message);
  console.log(
    "Motivo: const cria uma ligação (binding) que não pode ser reatribuída depois " +
    "de criada — diferente de let, que permite trocar o valor guardado na variável."
  );
}

// 3. Um valor de cada tipo primitivo + typeof
const umaString = "JavaScript";
const umNumero = 42;
const umBooleano = true;
let umUndefined; // declarada mas sem valor
const umNull = null;

console.log("typeof umaString:", typeof umaString); // "string"
console.log("typeof umNumero:", typeof umNumero); // "number"
console.log("typeof umBooleano:", typeof umBooleano); // "boolean"
console.log("typeof umUndefined:", typeof umUndefined); // "undefined"
console.log("typeof umNull:", typeof umNull); // "object" — bug histórico do JS
console.log('Curiosidade: typeof null retorna "object" por um bug histórico do JavaScript.');

// 4. Template literals vs. concatenação
const nome = "Gabriel";
const curso = "Desenvolvimento Web";

const fraseTemplate = `${nome} está estudando ${curso}.`;
const fraseConcatenada = nome + " está estudando " + curso + ".";

console.log("Com template literal:", fraseTemplate);
console.log("Com concatenação:    ", fraseConcatenada);

console.groupEnd();

/* =====================================================================
   BLOCO 2 — Funções
   ===================================================================== */
console.group("Bloco 2 — Funções");

// 1. Função declarada: sofre hoisting, por isso pode ser chamada antes
//    de aparecer no código.
console.log("Chamando ehMaiorDeIdade(20) antes da declaração:", ehMaiorDeIdade(20));

function ehMaiorDeIdade(idade) {
  return idade >= 18;
}

// 2. Mesma lógica como função de expressão: NÃO sofre esse tipo de
//    hoisting (a variável fica na "zona morta temporal" até a linha
//    da atribuição), então chamar antes gera ReferenceError.
try {
  console.log(ehMaiorDeIdadeExpressao(20));
} catch (erro) {
  console.log("ReferenceError esperado ao chamar antes da declaração:", erro.message);
}

const ehMaiorDeIdadeExpressao = function (idade) {
  return idade >= 18;
};

// 3. Função dobro em três formas
function dobroDeclarada(n) {
  return n * 2;
}
const dobroExpressao = function (n) {
  return n * 2;
};
const dobroArrow = (n) => n * 2;

console.log(
  "dobro (declarada, expressão, arrow):",
  dobroDeclarada(4),
  dobroExpressao(4),
  dobroArrow(4)
);

// 4. Variação da função dobro com parâmetro padrão
const dobroComPadrao = (n = 1) => n * 2;
console.log("dobroComPadrao() sem argumento:", dobroComPadrao());
console.log("dobroComPadrao(5) com argumento:", dobroComPadrao(5));

console.groupEnd();

/* =====================================================================
   BLOCO 3 — Controle de Fluxo
   ===================================================================== */
console.group("Bloco 3 — Controle de Fluxo");

// 1. if/else
function classificarNota(nota) {
  if (nota >= 6) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}
console.log("classificarNota(7):", classificarNota(7));
console.log("classificarNota(4):", classificarNota(4));

// 2. switch
const corSemaforo = "amarelo"; // troque pra "vermelho", "amarelo" ou "verde"
switch (corSemaforo) {
  case "vermelho":
    console.log("Pare");
    break;
  case "amarelo":
    console.log("Atenção");
    break;
  case "verde":
    console.log("Siga");
    break;
  default:
    console.log("Cor inválida");
}

// 3. Tabuada do 5 com for clássico
let tabuada = "";
for (let i = 1; i <= 10; i++) {
  tabuada += `5 x ${i} = ${5 * i}\n`;
}
console.log("Tabuada do 5:\n" + tabuada);

// 4. Contagem regressiva com while
let contagem = 5;
let regressiva = "";
while (contagem >= 1) {
  regressiva += contagem + " ";
  contagem--;
}
console.log("Contagem regressiva (while):", regressiva.trim());

// 5. 1 a 20, par ou ímpar — com for e com while
let paresEImparesFor = "";
for (let i = 1; i <= 20; i++) {
  paresEImparesFor += `${i}:${i % 2 === 0 ? "par" : "ímpar"} `;
}
console.log("1 a 20 (for):  ", paresEImparesFor.trim());

let i = 1;
let paresEImparesWhile = "";
while (i <= 20) {
  paresEImparesWhile += `${i}:${i % 2 === 0 ? "par" : "ímpar"} `;
  i++;
}
console.log("1 a 20 (while):", paresEImparesWhile.trim());

// 6. diaDaSemana com switch + default
function diaDaSemana(numero) {
  switch (numero) {
    case 1: return "Domingo";
    case 2: return "Segunda-feira";
    case 3: return "Terça-feira";
    case 4: return "Quarta-feira";
    case 5: return "Quinta-feira";
    case 6: return "Sexta-feira";
    case 7: return "Sábado";
    default: return "Número inválido";
  }
}
console.log("diaDaSemana(4):", diaDaSemana(4));
console.log("diaDaSemana(9):", diaDaSemana(9));

console.groupEnd();
