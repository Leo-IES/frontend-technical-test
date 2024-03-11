import { render, screen } from "@testing-library/react";
import { SectionCard } from "./SectionCard";
import { MemoryRouter } from "react-router-dom";
import "@jest/globals";
import "@testing-library/jest-dom";

describe("<SectionCard />", () => {
  test("Render SectionCard Component", () => {
    render(
      <MemoryRouter>
        <SectionCard />
      </MemoryRouter>
    );
    const sectionCard = screen.getByTestId("sectioncard-component");

    expect(sectionCard).toBeInTheDocument();
  });
});
