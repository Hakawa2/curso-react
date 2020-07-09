import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Calculadora from "../../containers/calc";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact>
          <Calculadora />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
