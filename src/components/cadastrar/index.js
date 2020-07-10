import React from "react";
import { Jumbotron, Form, Button } from "react-bootstrap";
import { A } from "hookrouter";

import Modal from "../modals";

import "./style.css";

const Cadastrar = ({
  show,
  onHide,
  formValidado,
  cadastrar,
  tarefa,
  handleTxtTarefa,
}) => {
  return (
    <>
      <h3 className="text-center">Cadastrar</h3>
      <Jumbotron>
        <Form validated={formValidado} noValidate onSubmit={cadastrar}>
          <Form.Group>
            <Form.Label>Tarefa</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite a tarefa"
              minLength="5"
              maxLength="100"
              required
              value={tarefa}
              onChange={handleTxtTarefa}
              data-testid="txt-tarefa"
            />
            <Form.Control.Feedback type="invalid">
              A tarefa deve conter ao menos 5 caracteres.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="text-center">
            <Button data-testid="btn-cadastrar" variant="success" type="submit">
              Cadastrar
            </Button>
            &nbsp;
            <A href="/" className="btn btn-light">
              Voltar
            </A>
          </Form.Group>
        </Form>
        <Modal
          show={show}
          onHide={onHide}
          title={"Sucesso"}
          data={"Tarefa adicionada com sucesso!"}
          buttonText={"Continuar"}
        />
      </Jumbotron>
    </>
  );
};

export default Cadastrar;
