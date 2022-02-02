import { render, screen } from "@testing-library/react";
import React from "react";
import { HashRouter } from "react-router-dom";
import { Home } from "./Home";

describe("Testing Home", () => {
  it("should render learn react link", () => {
    render(
      <HashRouter>
        <Home />
      </HashRouter>
    );
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
})
