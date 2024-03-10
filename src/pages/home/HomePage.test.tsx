import { render, screen } from "@testing-library/react";
import { HomePage } from "./HomePage";
import { MemoryRouter } from "react-router-dom";
import "@jest/globals";
import '@testing-library/jest-dom';

describe("<HomePage />", () => {
  test("Render HomePage", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    const homePage = screen.getByTestId("homepage-component");

    expect(homePage).toBeInTheDocument();
  });
});
