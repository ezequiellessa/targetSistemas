
// Variáveis com os valores de faturamento
const SP = 67836.43;
const RJ = 36678.66;
const MG = 29229.88;
const ES = 27165.48;
const Outros = 19849.53;


// Calculando o total de faturamento
let total = SP + RJ + MG + ES + Outros;


// Calculando os percentuais
let percentSP = (SP / total) * 100;
let percentRJ = (RJ / total) * 100;
let percentMG = (MG / total) * 100;
let percentES = (ES / total) * 100;
let percentOutros = (Outros / total) * 100;


// Exibindo os resultados
console.log('SP: ' + percentSP.toFixed(2) + '%');
console.log('RJ: ' + percentRJ.toFixed(2) + '%');
console.log('MG: ' + percentMG.toFixed(2) + '%');
console.log('ES: ' + percentES.toFixed(2) + '%');
console.log('Outros: ' + percentOutros.toFixed(2) + '%');