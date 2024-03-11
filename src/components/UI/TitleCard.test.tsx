import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TitleCard } from "./TitleCard";
import configureStore, { MockStoreEnhanced } from "redux-mock-store";

const mockStore = configureStore([]);
const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("<TitleCard/> ", () => {
  const mockOnclick = jest.fn();
  let store: MockStoreEnhanced<any>;

  beforeEach(() => {
    store = mockStore({
      title: {
        loading: false,
        error: false,
        entries: Array.from({ length: 2 }, (_, i) => ({
          title: `Title ${i + 1}`,
          images: {
            "Poster Art": { url: `https://example.com/image${i + 1}.jpg` },
          },
        })),
      },
    });

    store.dispatch = jest.fn();

    jest.clearAllMocks();
  });

  test("renders CircularProgress when loading", () => {
    render(
      <TitleCard title="Testing" background="test.jpg" onclick={mockOnclick} />
    );
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });
});
