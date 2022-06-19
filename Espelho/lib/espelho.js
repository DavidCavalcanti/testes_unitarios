const espelharNumero = (num) =>
  parseFloat(Math.trunc(num).toString().split("").reverse().join("")) *
  Math.sign(num);

module.exports.espelharNumero = espelharNumero;
