import React from "react";
import { Jumbotron, Button, Form, Col, Spinner, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

import "./style.css";

import ListarMoedas from "../listarMoedas";
import Resultado from "../modals/conversor";

const Conversor = ({
  valor,
  moedaDe,
  moedaPara,
  handleValor,
  loading,
  formValidado,
  showModal,
  exibirErro,
  resultadoConversao,
  handleMoedaDe,
  handleMoedaPara,
  converter,
  hideModal,
}) => {
  return (
    <>
      <h1>Conversor de moedas</h1>
      <Alert variant="danger" show={exibirErro}>
        Erro ao obter dados de conversão, tente novamente.
      </Alert>
      <Jumbotron>
        <Form onSubmit={converter} noValidate validated={formValidado}>
          <Form.Row>
            <Col sm="3">
              <Form.Control
                placeholder="0"
                value={valor}
                onChange={handleValor}
                required
              />
            </Col>
            <Col sm="3">
              <Form.Control
                as="select"
                value={moedaDe}
                onChange={handleMoedaDe}
              >
                <ListarMoedas />
              </Form.Control>
            </Col>
            <Col sm="1" className="text-center" style={{ paddingTop: "5px" }}>
              <FontAwesomeIcon icon={faAngleDoubleRight} />
            </Col>
            <Col sm="3">
              <Form.Control
                as="select"
                value={moedaPara}
                onChange={handleMoedaPara}
              >
                <ListarMoedas />
              </Form.Control>
            </Col>
            <Col sm="2">
              <Button
                variant="success"
                type="submit"
                data-testid="btn-converter"
              >
                {loading ? (
                  <Spinner animation="border" size="sm" />
                ) : (
                  "Converter"
                )}
              </Button>
            </Col>
          </Form.Row>
        </Form>
        <Resultado
          show={showModal}
          onHide={hideModal}
          data={resultadoConversao}
        />
      </Jumbotron>
    </>
  );
};

export default Conversor;
