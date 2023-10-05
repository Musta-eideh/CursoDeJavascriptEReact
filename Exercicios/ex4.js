/**
 * let varA = 'A';
 * let varB = 'B';
 * let vaC = 'C';
 * 
 * console.log(varA, varB, varC)
 * 
 * Quero que o valor de 'varA' aponte para 'varB', 'varB' tenha valor de 'varC' e 'varC' teha o valor de 'varA'; Resultado da sequencia B C A.
*/

let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

const t = varA;
varA = varB;
varB = varC;
varC = t;

console.log(varA, varB, varC)