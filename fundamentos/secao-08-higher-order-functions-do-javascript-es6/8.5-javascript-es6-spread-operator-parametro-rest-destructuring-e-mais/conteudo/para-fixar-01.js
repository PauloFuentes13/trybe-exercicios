// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Maçã', 'Manga'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Pêra', 'Uva', 'Laranja'];

const fruitSalad = (fruit, additional) => 
  [...fruit, 'Morango', ...additional, 'Abacaxi'];

console.log(fruitSalad(specialFruit, additionalItens));