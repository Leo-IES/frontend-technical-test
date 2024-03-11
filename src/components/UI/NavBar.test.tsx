import { render, screen } from "@testing-library/react";
import { NavBar } from "./NavBar";
import { MemoryRouter } from "react-router-dom";
import "@jest/globals";
import "@testing-library/jest-dom";

describe("<NavBar />", () => {
  test("Render NavBar", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    const navBar = screen.getByTestId("navbar-component");

    expect(navBar).toBeInTheDocument();
  });
});
