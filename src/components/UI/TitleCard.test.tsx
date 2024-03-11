import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TitleCard } from "./TitleCard";
import bgPlaceHolder from "@Assets/placeholder.png";

describe("TitleCard Component Tests", () => {
  const mockOnclick = jest.fn();

  test("renders CircularProgress when loading", () => {
    render(
      <TitleCard title="Testing" background="test.jpg" onclick={mockOnclick} />
    );
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  test("renders TitleCard with placeholder image on background image error", async () => {
    render(
      <TitleCard
        title="Error Case"
        background="error.jpg"
        onclick={mockOnclick}
      />
    );

    await waitFor(() =>
      expect(screen.queryByRole("progressbar")).not.toBeInTheDocument()
    );

    expect(screen.getByRole("img", { name: /background/i })).toHaveStyle(
      `background-image: url(${bgPlaceHolder})`
    );
    expect(screen.getByText("ERROR CASE")).toBeInTheDocument();
  });

  test("renders TitleCard with default props", async () => {
    render(<TitleCard onclick={mockOnclick} />);

    await waitFor(() =>
      expect(screen.queryByRole("progressbar")).not.toBeInTheDocument()
    );

    expect(screen.getByText("Program ")).toBeInTheDocument();
    expect(screen.queryByText("ERROR")).not.toBeInTheDocument();
  });
});
