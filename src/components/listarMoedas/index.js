import React from "react";
import { MOEDAS, ordenarDescricao } from "../../utils/listaMoedas";
const ListarMoedas = () => {
  return MOEDAS.sort(ordenarDescricao).map((moeda) => (
    <option value={moeda.sigla} key={moeda.sigla}>
      {moeda.descricao}
    </option>
  ));
};

export default ListarMoedas;
