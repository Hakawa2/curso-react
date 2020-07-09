import React from "react";
import { Modal, Button } from "react-bootstrap";

const Resultado = ({ show, onHide, data }) => {
  return (
    <Modal show={show} onHide={onHide} data-testid="modal">
      <Modal.Header closeButton>
        <Modal.Title>Conversão</Modal.Title>
      </Modal.Header>
      <Modal.Body>{data}</Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={onHide}>
          Nova Conversão
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Resultado;
