import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./Home";

describe("Testing Home", () => {
  it("should render Home Page", async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(document.body.innerHTML.includes("Aaron Carneiro")).toBe(true);
  });
});
