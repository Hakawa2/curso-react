import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";


import Conversor from "../../containers/conversor";
import Calculadora from "../../containers/calc";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/calculadora" exact >
          <Calculadora />
        </Route>
		<Route path="/" exact>
          <Conversor />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
