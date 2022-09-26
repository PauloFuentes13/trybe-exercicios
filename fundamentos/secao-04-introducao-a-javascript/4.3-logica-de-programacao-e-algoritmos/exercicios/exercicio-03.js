// Considere o array de strings abaixo:

let array = ['java', 'javascript', 'python', 'html', 'css'];

// Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let bigString = array[0];
let smallString = array[0];

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > bigString.length) {
        bigString = array[index];
    } else if ( array[index].length < smallString.length) {
        smallString = array[index];
    }
}

console.log(bigString);
console.log(smallString);