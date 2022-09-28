// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

// Exemplo de palíndromo: arara

// verificaPalindrome('arara')

// Retorno esperado: true
// verificaPalindrome('desenvolvimento')

// Retorno esperado: false

function checksPalindromo (string) {
    let reverse = '';
    for (let index = string.length - 1; index >= 0; index -= 1) {
        reverse += string[index];
    } 
    if (reverse === string) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}

checksPalindromo ('arara');