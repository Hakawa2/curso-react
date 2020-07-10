import React from "react";
import { useRoutes, A } from "hookrouter";
import "./App.css";

import Conversor from "../../containers/conversor";
import Calculadora from "../../containers/calc";
import ListarTarefas from "../../containers/listarTarefa";
import Cadastrar from "../../containers/cadastrarTarefa";
import Atualizar from "../../containers/atualizarTarefa";

const routes = {
  "/": () => <ListarTarefas />,
  "/cadastrar": () => <Cadastrar />,
  "/atualizar/:id": ({ id }) => <Atualizar id={id} />,
  "/calculadora": () => <Calculadora />,
  "/conversor": () => <Conversor />,
};

const App = () => {
  const routeResult = useRoutes(routes);

  return routeResult || <h1>Nao existe</h1>;
};

export default App;
