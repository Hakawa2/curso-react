import React from "react";
import { Modal, Button } from "react-bootstrap";

const Resultado = ({ show, onHide, data, title, buttonText }) => {
  return (
    <Modal show={show} onHide={onHide} data-testid="modal">
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{data}</Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={onHide}>
          {buttonText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Resultado;
