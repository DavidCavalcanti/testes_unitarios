const { assert } = require("chai");
const Espelho = require("../lib/espelho");

describe("Testar espelhamento de um número", () => {
  it("Deve espelhar um número inteiro positivo", () => {
    assert.equal(Espelho.espelharNumero(123), 321);
  });

  it("Deve espelhar um número inteiro positivo sem zero à esquerda", () => {
    assert.equal(Espelho.espelharNumero(100), 1);
  });

  it("Deve espelhar um número inteiro negativo sem zero à esquerda", () => {
    assert.equal(Espelho.espelharNumero(100), 1);
  });

  it("Deve espelhar um número inteiro negativo", () => {
    assert.equal(Espelho.espelharNumero(-589), -985);
  });

  it("Deve espelhar um número decimal positivo", () => {
    assert.equal(Espelho.espelharNumero(785.89), 587);
  });

  it("Deve espelhar um número decimal negativo", () => {
    assert.equal(Espelho.espelharNumero(-896.32), -698);
  });
});
