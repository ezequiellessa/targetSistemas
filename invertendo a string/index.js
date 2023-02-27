
// Declarando a variável string
let string = "ezequielLessaAprovado!";


// Definindo o tamanho da string
let size = string.length;


// Variáveis auxiliares
let output = "";
let i = 0;


// Laço de repetição para inverter a string
while(i<size){
  // Pegando o último caractere da string
  output += string[size - 1 - i];
  // Incrementando o contador
  i++;
}


// Exibindo o resultado
console.log(output);