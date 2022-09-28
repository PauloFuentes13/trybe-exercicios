// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

function largerNumber (firstNumber, secondNumber, thirdNumber) {
    if (firstNumber > secondNumber && firstNumber > thirdNumber) {
        return 'O ' + firstNumber + ' é maior que o ' + secondNumber + ' e o ' + thirdNumber + '.';
    } else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
        return 'O ' + secondNumber + ' é maior que o ' + firstNumber + ' e o ' + thirdNumber + '.';
    } else {
        return 'O ' + thirdNumber + ' é maior que o ' + firstNumber + ' e o ' + secondNumber + '.';
    }
}

console.log(largerNumber (12, 15, 8));
