import React, { useEffect, useState } from "react";
import ListaComponent from "../../components/listarTarefas";

const Listar = () => {
  const [tarefas, setTarefas] = useState([]);
  const [carregarTarefas, setCarregarTarefas] = useState(true);

  useEffect(() => {
    const obterTarefas = () => {
      const tarefasDb = localStorage["tarefas"];
      let listarTarefas = tarefasDb ? JSON.parse(tarefasDb) : [];
      setTarefas(listarTarefas);
    };
    if (carregarTarefas) {
      obterTarefas();
      setCarregarTarefas(false);
    }
  }, [carregarTarefas]);

  return (
    <ListaComponent tarefas={tarefas} recarregarTarefas={setCarregarTarefas} />
  );
};

export default Listar;
