import React from "react";
import { Modal, Button } from "react-bootstrap";

const Resultado = ({
  show,
  onHide,
  data,
  title,
  buttonText,
  twoButtons,
  buttonTextTwo,
  textTwo,
  func,
}) => {
  return (
    <Modal show={show} onHide={onHide} data-testid="modal">
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {data}
        {textTwo && (
          <>
            <br />
            <strong>{textTwo}</strong>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        {twoButtons ? (
          <>
            <Button variant="primary" data-testid="btn-concluir" onClick={func}>
              {buttonText}
            </Button>
            <Button variant="light" onClick={onHide}>
              {buttonTextTwo}
            </Button>
          </>
        ) : (
          <Button variant="success" onClick={onHide}>
            {buttonText}
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default Resultado;
