// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numbersOdds = 0;

for (index = 0; index < numbers.length; index += 1) {
    let rest = numbers[index] % 2;
    if (rest !== 0) {
        numbersOdds += 1;
    }
}

if (numbersOdds > 0) {
    console.log(numbersOdds);
} else {
    console.log('nenhum valor ímpar encontrado');
}

//No if do for eu poderia ter usado (numbersOdds[index] % 2 !== 0 ) { numbersOdds += 1}