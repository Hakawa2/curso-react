import React from "react";
import { A } from "hookrouter";

import "./style.css";

const Listagem = () => {
  return (
    <A href="/cadastrar" className="btn btn-success btn-sm">
      Nova Tarefa
    </A>
  );
};

export default Listagem;
