// Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//   index     0  1  2   3  4   5   6   7  8   9
for (let index = 1; index < numbers.length; index += 1) {
    for (let index2 = 0; index2 < index; index2 += 1) {
        if (numbers[index] < numbers[index2]) { //vai comprar se atende a condição o código abaixo
            let numbersSort = numbers[index];//irá pegar o numero da posição [index] (o menor entre os 2) e salvar na let
            numbers[index] = numbers[index2];//vai pegar a posição de onde o menor [index] estava e vai colocar o maior [index2] nela
            numbers[index2] = numbersSort;//vai colocar o valor da menor que esta salvo na let e vai colocar na posição [index2] onde o maior estava originalmente
        }
    }
}
console.log(numbers); 