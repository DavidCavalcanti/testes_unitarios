const Segundo = require("./lib/segundo");

var vetor = [0, 2, 5, 9];

function func(vetor) {
  const maior = pegaMaior(vetor);

  removeMaior(vetor, maior)

  const segundoMaior = Math.max(...vetor);

  return segundoMaior;
}

const pegaMaior = (vetor) => {
  Math.max(...vetor);
};

const removeMaior = (vetor, maior) => {
    vetor.splice(vetor.indexOf(maior), 1);
  };

console.log(func(vetor));
