// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
    result = (numbers[index] + result); 
}

let average = result / numbers.length;

if (average > 20) {
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20');
}