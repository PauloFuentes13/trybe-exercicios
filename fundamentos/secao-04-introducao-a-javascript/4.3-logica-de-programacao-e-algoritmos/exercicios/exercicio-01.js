// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24

// Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

let number = 3;
let factorial = 1;

for (let index = number; index > 1; index -= 1) {
    factorial = factorial * index;
}

console.log(number + '! =',factorial);
