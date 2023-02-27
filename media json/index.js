const fs = require('fs');


let dadosFaturamento = [];


// Lendo o arquivo JSON
let rawData = fs.readFileSync('./dados.json');
let jsonData = JSON.parse(rawData);


// Armazenando os dados num vetor
for(let i = 0; i < jsonData.length; i++) {
  dadosFaturamento.push(jsonData[i]);
}


// Utilizando as funções para calcular o menor valor de faturamento, o maior valor de faturamento e o número de dias com faturamento acima da média
let menorValor = menorValor(dadosFaturamento);
let maiorValor = maiorValor(dadosFaturamento);
let diasSuperioresMedia = diasSuperioresMedia(dadosFaturamento);
console.log("Menor valor de faturamento: " + menorValor);
console.log("Maior valor de faturamento: " + maiorValor);
console.log("Número de dias com faturamento superior à média: " + diasSuperiores);