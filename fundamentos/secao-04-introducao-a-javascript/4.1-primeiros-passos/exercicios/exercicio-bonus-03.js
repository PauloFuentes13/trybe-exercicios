// Agora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:

//Resultado 
// [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// index       0, 1, 2,  3,  4, 5,   6, 7,  8,  9
let numbersMult = [];

for (index = 0; index < numbers.length; index += 1) {
    if (index + 1 < numbers.length) {
        numbersMult.push(numbers[index] * numbers[index + 1]);
    } else {
        numbersMult.push(numbers[index] * 2);
    }
}

console.log(numbersMult);