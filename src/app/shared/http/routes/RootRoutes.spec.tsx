import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { HashRouter, Link } from "react-router-dom";
import { SystemRouter } from "./SystemRouter";

describe("Testing SytemRouter", () => {
  it("should redirect to 404 page when trying to access an inexistent path", () => {
    render(
      <HashRouter>
        <SystemRouter />
        <Link to="/UmaRotaInexistente/7a6d7asd">Error Page</Link>
      </HashRouter>
    );

    const click = { button: 0 };
    userEvent.click(screen.getByText("Error Page"), click);

    expect(screen.getByText("Erro 404")).toBeInTheDocument();
  });
});
