import React, { useState } from "react";
import { navigate } from "hookrouter";
import Tarefa from "../../models/tarefa.model";

import CadastrarComponent from "../../components/cadastrar";

const Cadastrar = () => {
  const [tarefa, setTarefa] = useState("");
  const [formValidado, setFormValidado] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const hideModal = () => {
    navigate("/");
  };

  const handleTxtTarefa = (e) => {
    setTarefa(e.target.value);
  };

  const cadastrar = (e) => {
    e.preventDefault();
    setFormValidado(true);
    if (e.currentTarget.checkValidity() === true) {
      const tarefasDb = localStorage["tarefas"];
      const tarefas = tarefasDb ? JSON.parse(tarefasDb) : [];
      tarefas.push(new Tarefa(new Date().getTime(), tarefa, false));
      localStorage["tarefas"] = JSON.stringify(tarefas);
      setShowModal(true);
    }
  };

  return (
    <CadastrarComponent
      tarefa={tarefa}
      formValidado={formValidado}
      show={showModal}
      onHide={hideModal}
      handleTxtTarefa={handleTxtTarefa}
      cadastrar={cadastrar}
    />
  );
};

export default Cadastrar;
