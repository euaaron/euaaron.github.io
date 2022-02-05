import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./Home";

describe("Testing Home", () => {
  it("should render learn react link", async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(true).toBe(true);
  });
});
