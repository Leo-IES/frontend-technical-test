import { render, screen } from "@testing-library/react";
import { LoadingComponent } from "./Loading";
import { MemoryRouter } from "react-router-dom";
import "@jest/globals";
import "@testing-library/jest-dom";

describe("<LoadingComponent />", () => {
  test("Render Loading Component", () => {
    render(
      <MemoryRouter>
        <LoadingComponent />
      </MemoryRouter>
    );
    const loading = screen.getByTestId("loading-component");

    expect(loading).toBeInTheDocument();
  });
});
