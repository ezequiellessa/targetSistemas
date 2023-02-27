
//programa para verificar se o número informado pertence a sequência de Fibonacci 
function checkFibonacci(num) {
  //definindo os dois primeiros valores da sequência de Fibonacci
  let a = 0, b = 1;
  //enquanto o proximo numero da sequência for menor que o número informado
  while (a + b < num) { 
    let c = a + b;
    a = b;
    b = c;
  }
  //verifica se o proximo número da sequência é igual ao número informado
  if (a + b == num) {
    return `O número ${num} pertence a sequência de Fibonacci!`;
  } else {
    return `O número ${num} não pertence a sequência de Fibonacci!`; 
  }
}


//informando um número para verificar se pertence a sequência de Fibonacci
let num = 8;
console.log(checkFibonacci(num));
