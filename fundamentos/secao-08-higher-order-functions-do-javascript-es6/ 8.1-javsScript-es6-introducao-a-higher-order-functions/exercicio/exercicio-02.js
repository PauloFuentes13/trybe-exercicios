


const checaNumeros = (numero, gera) => numero === gera;  

const resultadoJogo = (numero, gerador) => {
  const gera = Math.floor((Math.random() * 5) +1);
  return gerador(numero, gera) ? 'Parabéns' : 'Tente'
}

console.log(resultadoJogo(4, checaNumeros));