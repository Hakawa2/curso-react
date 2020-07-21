import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import Modal from "../modals/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";

const ConcluirTarefa = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleFecharModal = () => {
    setShowModal(false);
  };

  const handleConcluirTarefa = () => {
    const tarefasDb = localStorage["tarefas"];
    let tarefas = tarefasDb ? JSON.parse(tarefasDb) : [];
    tarefas = tarefas.map((tarefa) => {
      if (tarefa.id === props.tarefa.id) {
        tarefa.concluida = true;
      }
      return tarefa;
    });
    localStorage["tarefas"] = JSON.stringify(tarefas);
    setShowModal(false);
    props.recarregarTarefas(true);
  };

  return (
    <span className={props.className}>
      {" "}
      <Button
        className="btn-sm"
        onClick={handleShowModal}
        data-testid={"btn-abrir-modal"}
      >
        <FontAwesomeIcon icon={faClipboardCheck} />
      </Button>
      <Modal
        show={showModal}
        onHide={handleFecharModal}
        data={"Deseja Realmente concluir a seguinte tarefa ?"}
        twoButtons
        textTwo={props.tarefa.nome}
        buttonText={"Sim"}
        buttonTextTwo={"Não"}
        title={"Concluir tarefa"}
        func={handleConcluirTarefa}
      />
    </span>
  );
};

ConcluirTarefa.propTypes = {
  tarefa: PropTypes.object.isRequired,
  recarregarTarefas: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default ConcluirTarefa;
