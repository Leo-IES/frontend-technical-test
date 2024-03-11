import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";
import { MemoryRouter } from "react-router-dom";
import "@jest/globals";
import "@testing-library/jest-dom";

describe("<Footer />", () => {
  test("Render Footer", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const footer = screen.getByTestId("footer-component");

    expect(footer).toBeInTheDocument();
  });
});
