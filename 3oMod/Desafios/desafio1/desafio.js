// Desafio
// Você precisa criar um programa que calcule a soma de todos os números entre 1 e um número fornecido pelo usuário, exceto aqueles que são divisíveis por 3.
// Entrada
// O programa deve receber a entrada do usuário, que deve ser um número inteiro positivo. Em seguida, o programa deve calcular a soma de todos os números entre 1 e o número fornecido pelo usuário, exceto aqueles que são divisíveis por 3.
// Saída
// A saída do programa deve imprimir um texto com a soma dos números de 1 até o número fornecido pelo usuário (exceto aqueles divisíveis por 3).





//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let numero = parseInt(gets());

let soma = 0;
for (let i = 1; i <= numero; i++) {
  if (i % 3 !== 0) {
    soma += i;
  }
}

console.log(`Soma dos números de 1 a ${numero}, exceto os divisíveis por 3: ${soma}`);



