import * as tipoOperacoes from "./tipoOperacoes";

export const calcular = (num1, num2, op) => {
  let resultado;

  switch (op) {
    case tipoOperacoes.SOMA:
      resultado = num1 + num2;
      break;
    case tipoOperacoes.SUB:
      resultado = num1 - num2;
      break;
    case tipoOperacoes.MULT:
      resultado = num1 * num2;
      break;
    case tipoOperacoes.DIV:
      resultado = num1 / num2;
      break;
    default:
      resultado = 0;
  }

  return resultado;
};

export const concatenarNumero = (numAtual, numConcat) => {
  if (numAtual === "0" || numAtual === null) {
    numAtual = "";
  }

  if (numConcat === "." && numAtual === "") {
    numAtual = "0.";
  }

  if (numConcat === "." && numAtual.indexOf(".") > -1) {
    return numAtual;
  }

  return numAtual + numConcat;
};
