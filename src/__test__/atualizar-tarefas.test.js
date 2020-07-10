import React from "react";
import ReactDOM from "react-dom";
import AtualizarTarefas from "../containers/atualizarTarefa";

describe("Teste do componente de atualizar tarefas", () => {
  it("deve renderizar o componente sem erros", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AtualizarTarefas id={1} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
