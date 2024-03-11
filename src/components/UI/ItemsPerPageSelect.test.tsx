// Renders a FormControl component with a label and Select component inside.
import { render, screen } from "@testing-library/react";
import { ItemsPerPageSelect } from "./ItemsPerPageSelect";
import { MemoryRouter } from "react-router-dom";
import "@jest/globals";
import "@testing-library/jest-dom";

describe("<ItemsPerPageSelect />", () => {
  test("Render ItemsPerPageSelect Component", () => {
    render(
      <MemoryRouter>
        <ItemsPerPageSelect />
      </MemoryRouter>
    );
    const itemsPerPageSelect = screen.getByTestId(
      "itemsPerPageSelect-component"
    );

    expect(itemsPerPageSelect).toBeInTheDocument();
  });
  test("Render ItemsPerPageSelect Component", () => {
    render(
      <MemoryRouter>
        <ItemsPerPageSelect />
      </MemoryRouter>
    );
    const itemsPerPageSelect = screen.getByTestId(
      "itemsPerPageSelect-component"
    );

    expect(itemsPerPageSelect).toBeInTheDocument();
  });
});
