import { render, screen } from "@testing-library/react";
import { MainLayout } from "./MainLayout";
import { MemoryRouter } from "react-router-dom";
import "@jest/globals";
import "@testing-library/jest-dom";

describe("<MainLayout />", () => {
  test("Render NavBar", () => {
    render(
      <MemoryRouter>
        <MainLayout />
      </MemoryRouter>
    );
    const navBar = screen.getByTestId("navbar-component");

    expect(navBar).toBeInTheDocument();
  });
  test("Render Footer", () => {
    render(
      <MemoryRouter>
        <MainLayout />
      </MemoryRouter>
    );
    const footer = screen.getByTestId("footer-component");

    expect(footer).toBeInTheDocument();
  });
});
