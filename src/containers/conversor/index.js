import React, { useState } from "react";
import { fetchData } from "../../services/fixerService";
import ConversorComponent from "../../components/conversor";

const Conversor = () => {
  const [resultadoConversao, setResultadoConversao] = useState("");
  const [valor, seValor] = useState("1");
  const [moedaDe, setMoedaDe] = useState("BRL");
  const [moedaPara, setMoedaPara] = useState("USD");
  const [loading, setLoading] = useState(false);
  const [formValidado, setFormValidado] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [exibirErro, setExibirErro] = useState(false);

  const handleValor = (e) => {
    seValor(e.target.value.replace(/\D/g, ""));
  };

  const handleMoedaDe = (e) => {
    setMoedaDe(e.target.value);
  };

  const hideModal = () => {
    seValor("1");
    setMoedaDe("BRL");
    setMoedaPara("USD");
    setFormValidado(false);
    setShowModal(false);
  };

  const handleMoedaPara = (e) => {
    setMoedaPara(e.target.value);
  };

  const converter = async (e) => {
    e.preventDefault();
    setFormValidado(true);
    if (e.currentTarget.checkValidity() === true) {
      setLoading(true);
      try {
        const data = await fetchData();
        if (data) {
          setResultadoConversao(
            `${valor} ${moedaDe} = ${obterCotacao(data)} ${moedaPara}`
          );
          setShowModal(true);
          setExibirErro(false);
          setLoading(false);
        } else {
          setExibirErro(true);
          setLoading(false);
        }
      } catch (err) {
        setExibirErro(true);
        setLoading(false);
      }
    }
  };

  const obterCotacao = (dados) => {
    if (!dados || dados.success !== true) {
      return false;
    }

    const cotacaoDe = dados.rates[moedaDe];
    const cotacaoPara = dados.rates[moedaPara];
    const cotacao = (1 / cotacaoDe) * cotacaoPara * valor;

    return cotacao.toFixed(2);
  };

  return (
    <ConversorComponent
      valor={valor}
      moedaDe={moedaDe}
      moedaPara={moedaPara}
      loading={loading}
      formValidado={formValidado}
      showModal={showModal}
      resultadoConversao={resultadoConversao}
      exibirErro={exibirErro}
      handleValor={handleValor}
      handleMoedaDe={handleMoedaDe}
      handleMoedaPara={handleMoedaPara}
      converter={converter}
      hideModal={hideModal}
    />
  );
};

export default Conversor;
