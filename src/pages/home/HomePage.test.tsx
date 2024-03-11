import { render, screen } from "@testing-library/react";
import { HomePage } from "./HomePage";
import { MemoryRouter } from "react-router-dom";
import "@jest/globals";
import "@testing-library/jest-dom";

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
  test("Render Section Cards", () => {
    const { getByText } = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    const sectionCard1 = getByText("Popular Series");
    const sectionCard2 = getByText("Popular Movies");

    expect(sectionCard1).toBeInTheDocument();
    expect(sectionCard2).toBeInTheDocument();
  });
  test("Render NavBar", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    const navBar = screen.getByTestId("navbar-component");

    expect(navBar).toBeInTheDocument();
  });
  test("Render Footer", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    const footer = screen.getByTestId("footer-component");

    expect(footer).toBeInTheDocument();
  });
});
