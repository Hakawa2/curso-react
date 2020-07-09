import React, { useState } from "react";

import CalculadoraComponent from "../../components/calculadora";
import { concatenarNumero, calcular } from "../../utils/calculadoraService";

const Calculadora = () => {
  const [txtNumeros, setTxtNumeros] = useState("0");
  const [numero1, setNumero1] = useState("0");
  const [numero2, setNumero2] = useState(null);
  const [operacao, setOperacao] = useState(null);

  const adicionarNumeros = (numero) => {
    let resultado;

    if (operacao === null) {
      resultado = concatenarNumero(numero1, numero);
      setNumero1(resultado);
    } else {
      resultado = concatenarNumero(numero2, numero);
      setNumero2(resultado);
    }

    setTxtNumeros(resultado);
  };

  const defOp = (op) => {
    if (operacao === null) {
      setOperacao(op);
      return;
    }

    if (numero2 !== null) {
      const resultado = calcular(
        parseFloat(numero1),
        parseFloat(numero2),
        operacao
      );
      setOperacao(op);
      setNumero1(resultado.toString());
      setNumero2(null);
      setTxtNumeros(resultado);
    }
  };

  const resultado = () => {
    if (numero2 === null) {
      return;
    }

    const resultado = calcular(
      parseFloat(numero1),
      parseFloat(numero2),
      operacao
    );

    setTxtNumeros(resultado);
  };

  const limpar = () => {
    setTxtNumeros("0");
    setNumero1(null);
    setNumero2(null);
    setOperacao(null);
  };

  return (
    <CalculadoraComponent
      value={txtNumeros}
      adicionarNumeros={adicionarNumeros}
      defOp={defOp}
      resultado={resultado}
      limpar={limpar}
    />
  );
};

export default Calculadora;
