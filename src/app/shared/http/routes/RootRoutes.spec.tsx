import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { SystemRouter } from "./SystemRouter";

describe("Testing SytemRouter", () => {
  it("should redirect to 404 page when trying to access an inexistent path", () => {
    render(
      <BrowserRouter>
        <SystemRouter />
        <Link to="/UmaRotaInexistente/7a6d7asd">Error Page</Link>
      </BrowserRouter>
    );

    const click = { button: 0 };
    userEvent.click(screen.getByText("Error Page"), click);

    expect(screen.getByText("Erro 404")).toBeInTheDocument();
  });
});
