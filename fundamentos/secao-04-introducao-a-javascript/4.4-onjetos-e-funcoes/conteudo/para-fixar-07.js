// Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.

// Um ângulo será considerado inválido se não tiver um valor positivo.

function isTriangle (a1, a2, a3) {
    if ((a1 && a2 && a3) < 0) {
        return 'ERRO: ângulo invalido!'
    } else if ((a1 + a2 + a3) === 180) {
        return true;
    } else {
        return false;
    }
}

console.log(isTriangle(20, 30, 130));