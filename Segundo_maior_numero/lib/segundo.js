function segundo(vetor) {
  const maior = Math.max(...vetor);
  var segundoMaior;

  if (vetor.length === 1 || (vetor.length === 2 && vetor[0] === vetor[1]))
    return "erro!";
  else {
    removeMaior(vetor, maior);
    return (segundoMaior = Math.max(...vetor));
  }
}

const removeMaior = (vetor, maior) => {
  vetor.splice(vetor.indexOf(maior), 1);
};

module.exports.segundoMaiorValor = segundo;
