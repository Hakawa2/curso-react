import React from "react";
import { A } from "hookrouter";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import ItensListaTarefas from "./itens-lista-tarefas";
import "./style.css";

const Listagem = ({ tarefas, recarregarTarefas }) => {
  return (
    <div className="text-center">
      <h3> Tarefas a fazer </h3>
      <Table striped bordered hover responsive data-testid="tabela">
        <thead>
          <tr>
            <th>Tarefa</th>
            <th>
              <A
                href="/cadastrar"
                className="btn btn-success btn-sm"
                data-testid="btn-nova-tarefa"
              >
                <FontAwesomeIcon icon={faPlus} />
                &nbsp; Nova tarefa
              </A>
            </th>
          </tr>
        </thead>
        <tbody>
          <ItensListaTarefas
            tarefas={tarefas}
            recarregarTarefas={recarregarTarefas}
          />
        </tbody>
      </Table>
    </div>
  );
};

export default Listagem;
