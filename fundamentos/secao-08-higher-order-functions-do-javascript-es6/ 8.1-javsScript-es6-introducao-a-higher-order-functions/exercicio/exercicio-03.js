const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const compara = (ra, sa) => {
  if (ra === sa) {
    return 1;
  } if (sa === 'N.A') {
    return 0;
  }
  return -0,5;
};

const exames = (rA, sA, func) => {
  let result = 0;
  for (let index = 0; index < rA.length; index += 1) {
    const returnFunc = func(rA[index], sA[index]); 
      result += returnFunc;
  }
  return `O resultado foi: ${result} pontos.`;
}

console.log(exames(RIGHT_ANSWERS, STUDENT_ANSWERS, compara));
//nao encontrei o erro, tem que dar 5 a resposta. 