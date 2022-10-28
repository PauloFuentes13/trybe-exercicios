// Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// const expectedResult = 20;

function containsA() {
  let totalLetras = 0;
  names.forEach((name) => { // para cada iteração do forEach:
    const letrasNames = name.split('');
    // letrasNames = ['A', 'a', 'n', 'e'...]
    totalLetras += letrasNames.reduce((acc, curr) => {
      if (curr === 'a' || curr === 'A') {
        return acc + 1;
      }
      return acc;
      // (curr === 'a' || curr === 'A') ? (acc + 1) : acc; ===> PQ não deu com ternario?
    }, 0)
  });
  return totalLetras;
}

console.log(containsA()); 
