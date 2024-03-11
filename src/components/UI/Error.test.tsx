import { render, screen } from "@testing-library/react";
import { ErrorComponent } from "./Error";
import { MemoryRouter } from "react-router-dom";
import "@jest/globals";
import "@testing-library/jest-dom";

describe("<ErrorComponent />", () => {
  test("Render Error Component", () => {
    render(
      <MemoryRouter>
        <ErrorComponent />
      </MemoryRouter>
    );
    const error = screen.getByTestId("error-component");

    expect(error).toBeInTheDocument();
  });
});
