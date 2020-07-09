import React from "react";
import { Jumbotron, Row, Col, Container, Button, Form } from "react-bootstrap";
import * as tipoOperacoes from "../../utils/tipoOperacoes";
import "./index.css";

const Calculadora = ({ value, adicionarNumeros, defOp, resultado, limpar }) => {
  return (
    <Jumbotron
      style={{
        background: "transparent !important",
        backgroundColor: "#007bff",
        padding: "5px",
        margin: "5px !important",
        width: "400px",
      }}
    >
      <Container className="container-calculadora">
        <Row>
          <Col xs="3">
            <Button onClick={limpar} variant="danger">
              C
            </Button>
          </Col>
          <Col xs="9">
            <Form.Control
              data-testid="txtNumeros"
              type="text"
              name="txtNumeros"
              className="text-right"
              readOnly="readOnly"
              value={value}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={() => adicionarNumeros("7")} variant="light">
              7
            </Button>
          </Col>
          <Col>
            <Button onClick={() => adicionarNumeros("8")} variant="light">
              8
            </Button>
          </Col>
          <Col>
            <Button onClick={() => adicionarNumeros("9")} variant="light">
              9
            </Button>
          </Col>
          <Col>
            <Button onClick={() => defOp(tipoOperacoes.DIV)} variant="warning">
              /
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={() => adicionarNumeros("4")} variant="light">
              4
            </Button>
          </Col>
          <Col>
            <Button onClick={() => adicionarNumeros("5")} variant="light">
              5
            </Button>
          </Col>
          <Col>
            <Button onClick={() => adicionarNumeros("6")} variant="light">
              6
            </Button>
          </Col>
          <Col>
            <Button onClick={() => defOp(tipoOperacoes.MULT)} variant="warning">
              *
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={() => adicionarNumeros("1")} variant="light">
              1
            </Button>
          </Col>
          <Col>
            <Button onClick={() => adicionarNumeros("2")} variant="light">
              2
            </Button>
          </Col>
          <Col>
            <Button onClick={() => adicionarNumeros("3")} variant="light">
              3
            </Button>
          </Col>
          <Col>
            <Button onClick={() => defOp(tipoOperacoes.SUB)} variant="warning">
              -
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={() => adicionarNumeros("0")} variant="light">
              0
            </Button>
          </Col>
          <Col>
            <Button onClick={() => adicionarNumeros(".")} variant="light">
              .
            </Button>
          </Col>
          <Col>
            <Button onClick={resultado} variant="success">
              =
            </Button>
          </Col>
          <Col>
            <Button onClick={() => defOp(tipoOperacoes.SOMA)} variant="warning">
              +
            </Button>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Calculadora;
