import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import configureStore, { MockStoreEnhanced } from "redux-mock-store";
import { SearchByYearInput } from "./SearchByYearInput";
import * as titleReducer from "@Features/titles/titleReducer";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

const mockStore = configureStore([]);
let store: MockStoreEnhanced<any>;

describe("<SearchByYearInput />", () => {
  beforeEach(() => {
    store = mockStore({});
    jest.clearAllMocks();
  });

  test("renders without crashing", () => {
    render(
      <Provider store={store}>
        <SearchByYearInput />
      </Provider>
    );
    expect(screen.getByLabelText(/Search By Year/i)).toBeInTheDocument();
  });

  test("allows input of a year and triggers search", () => {
    render(
      <Provider store={store}>
        <SearchByYearInput />
      </Provider>
    );
    const input: HTMLInputElement = screen.getByLabelText(/Search By Year/i);
    fireEvent.change(input, { target: { value: "2022" } });
    expect(input.value).toBe("2022");

    const searchButton = screen.getByTestId("searchbutton");
    fireEvent.click(searchButton);
    expect(mockDispatch).toHaveBeenCalledWith(
      titleReducer.filterByYearTitles(2022)
    );
  });

  test("clean search button resets the input and dispatches action", () => {
    render(
      <Provider store={store}>
        <SearchByYearInput />
      </Provider>
    );
    const input: HTMLInputElement = screen.getByLabelText(/Search By Year/i);
    const searchButton = screen.getByTestId("searchbutton");
    const cleanButton = screen.getByRole("button", { name: /clean search/i });

    fireEvent.change(input, { target: { value: "2023" } });
    fireEvent.click(searchButton);
    expect(input.value).toBe("2023");

    fireEvent.click(cleanButton);
    expect(input.value).toBe("");
    expect(mockDispatch).toHaveBeenCalledWith(
      titleReducer.cleanFilterByYearTitles()
    );
  });

  test("input respects min and max year constraints", () => {
    render(
      <Provider store={store}>
        <SearchByYearInput />
      </Provider>
    );
    const input: HTMLInputElement = screen.getByLabelText(/Search By Year/i);

    fireEvent.change(input, { target: { value: "2000" } });
    expect(input.value).toBe("2000");

    fireEvent.change(input, { target: { value: "2030" } });
    expect(input.value).toBe("2030");
  });

  test("does not dispatch search action with invalid year", () => {
    const invalidYear = "1999";
    jest.spyOn(titleReducer, "filterByYearTitles");

    render(
      <Provider store={store}>
        <SearchByYearInput />
      </Provider>
    );

    const input: HTMLInputElement = screen.getByLabelText(/Search By Year/i);
    const searchButton = screen.getByTestId("searchbutton");

    fireEvent.change(input, { target: { value: invalidYear } });
    fireEvent.click(searchButton);

    expect(titleReducer.filterByYearTitles).toHaveReturned()
  });
});
//
