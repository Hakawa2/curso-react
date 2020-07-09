import React from "react";
import ReactDOM from "react-dom";
import Calculadora from "../containers/calc";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Calculadora", () => {
  it("Deve renderizar a calculadora sem erros", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Calculadora />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("deve limpar o campo de numeros", () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("C"));
    expect(getByTestId("txtNumeros")).toHaveValue("0");
  });

  it("deve somar 2 + 3 = 5", () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("+"));
    fireEvent.click(getByText("3"));
    fireEvent.click(getByText("="));
    expect(getByTestId("txtNumeros")).toHaveValue("5");
  });

  it("deve subtrair 2 - 3 = 1", () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("-"));
    fireEvent.click(getByText("3"));
    fireEvent.click(getByText("="));
    expect(getByTestId("txtNumeros")).toHaveValue("-1");
  });

  it("deve multiplicar 2 * 3 = 6", () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("*"));
    fireEvent.click(getByText("3"));
    fireEvent.click(getByText("="));
    expect(getByTestId("txtNumeros")).toHaveValue("6");
  });

  it("deve dividir 2 / 3 = 0.66", () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("/"));
    fireEvent.click(getByText("3"));
    fireEvent.click(getByText("="));
    expect(getByTestId("txtNumeros")).toHaveValue("0.6666666666666666");
  });

  it("deve somar 10.3 + 9.7 = 20", () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("0"));
    fireEvent.click(getByText("."));
    fireEvent.click(getByText("3"));
    fireEvent.click(getByText("+"));
    fireEvent.click(getByText("9"));
    fireEvent.click(getByText("."));
    fireEvent.click(getByText("7"));
    fireEvent.click(getByText("="));
    expect(getByTestId("txtNumeros")).toHaveValue("20");
  });
});
