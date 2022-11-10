import validator from 'validator';

const textBox = document.querySelector('#input');
const selector = document.querySelector('#option');
const btnValidator = document.querySelector('#btn');
const result = document.querySelector('#text-result');

btnValidator.addEventListener('click', () => {
  event.preventDefault(); //não recarrega a pag ao clicar no butao

  const campos = {
    cpf: validator.isTaxID(textBox.value, 'pt-BR'),
    hexColor: validator.isHexColor(textBox.value),
    email: validator.isEmail(textBox.value),
    uuid: validator.isUUID(textBox.value, 4),
    url: validator.isURL(textBox.value)
  };

  result.innerHTML = `A validação é ${campos[selector.value]}`
})

console.log(result);