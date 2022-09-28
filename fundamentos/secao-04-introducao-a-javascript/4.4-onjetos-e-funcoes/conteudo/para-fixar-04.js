// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

function largerNumber (firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
        return 'O ' + firstNumber + ' é maior que o ' + secondNumber + '.';
    } else if (firstNumber < secondNumber) {
        return 'O ' + secondNumber + ' é maior que o ' + firstNumber + '.';
    } else {
        return 'Os números são iguais.';
    }
     
}

console.log(largerNumber (2, 2));