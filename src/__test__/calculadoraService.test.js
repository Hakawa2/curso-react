import React from "react";
import ReactDOM from "react-dom";
import { calcular } from "../utils/calculadoraService";
import * as tipoOperacoes from "../utils/tipoOperacoes";

describe("Teste calculadora", () => {
  it("deve garantir que 1 + 4 = 5", () => {
    let soma = calcular(1, 4, tipoOperacoes.SOMA);
    expect(soma).toEqual(5);
  });

  it("deve garantir que 2 - 4 = 2", () => {
    let subtracao = calcular(2, 4, tipoOperacoes.SUB);
    expect(subtracao).toEqual(-2);
  });

  it("deve garantir que 1/4 = 0.25", () => {
    let divisao = calcular(1, 4, tipoOperacoes.DIV);
    expect(divisao).toEqual(0.25);
  });

  it("deve garantir que 1 * 4 = 4", () => {
    let multiplicacao = calcular(1, 4, tipoOperacoes.MULT);
    expect(multiplicacao).toEqual(4);
  });

  it("deve retornar 0 para operação invalida", () => {
    let operacaoInvalida = calcular(1, 4, "%");
    expect(operacaoInvalida).toEqual(0);
  });
});
