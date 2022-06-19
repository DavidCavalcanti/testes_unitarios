const { assert } = require("chai");
const Segundo = require("../lib/segundo");

describe("Verificar o segundo maior valor de um vetor", () => {
  it("Deve retornar o segundo maior valor positivo de um vetor", () => {
    assert.equal(Segundo.segundoMaiorValor([3, 2, 8, 9]), 8);
  });

  it("Deve retornar o segundo maior valor negativo de um vetor", () => {
    assert.equal(Segundo.segundoMaiorValor([-8, -3, -5, -10]), -5);
  });

  it("Deve retornar o segundo maior valor positivo de um vetor de tamanho 2 e com valores diferentes", () => {
    assert.equal(Segundo.segundoMaiorValor([5, 6]), 5);
  });

  it("Deve retornar o segundo maior valor negativo de um vetor de tamanho 2 e com valores diferentes", () => {
    assert.equal(Segundo.segundoMaiorValor([5, 6]), 5);
  });

  it("Deve retornar erro para um vetor de tamanho 2 e com valores iguais", () => {
    assert.equal(Segundo.segundoMaiorValor([7, 7]), "erro!");
  });

  it("Deve retornar erro para um vetor de tamanho 1", () => {
    assert.equal(Segundo.segundoMaiorValor([2]), "erro!");
  });
});
