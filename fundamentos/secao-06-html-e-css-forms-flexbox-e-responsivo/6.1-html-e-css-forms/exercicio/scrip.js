function interrompeEnviar(event) {
    event.preventDefault();
}

const botaoEnviar = document.querySelector('#enviar');

function limpa() {
    const inp = document.querySelectorAll('input');
    const texta = document.querySelector('textarea');
    for (let i of inp) {
        const inpInd = i;
        inpInd.value = '';
        inpInd.checked = false;
    }
    texta.value = '';
}

const botaoLimpar = document.querySelector('#limpar');

window.onload = function () {
    botaoEnviar.addEventListener('click', interrompeEnviar);
}
    botaoLimpar.addEventListener('click', limpa);