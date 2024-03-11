//typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import '@testing-library/jest-dom/extend-expect';
import {PagginationDrawer} from './PagginationDrawer';

const mockStore = configureStore([]);
const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
}));

describe('PagginationDrawer', () => {
  let store: MockStoreEnhanced<any>;

  beforeEach(() => {
    store = mockStore({
      title: {
        entries: Array.from({ length: 60 }, (_, i) => ({
          title: `Title ${i + 1}`,
          images: { 'Poster Art': { url: `https://example.com/image${i + 1}.jpg` } }
        })),
      },
    });

    store.dispatch = jest.fn();

    jest.clearAllMocks();
  });

  test('renders without crashing', () => {
    render(
      <Provider store={store}>
        <PagginationDrawer />
      </Provider>
    );

    expect(screen.getByTestId('pagginationDrawer-component')).toBeInTheDocument();
  });

  test('should display the correct number of TitleCards based on itemsPerPage', () => {
    render(
      <Provider store={store}>
        <PagginationDrawer />
      </Provider>
    );

    expect(screen.getAllByRole('article')).toHaveLength(20);
  });

  test('changes page correctly on pagination click', () => {
    render(
      <Provider store={store}>
        <PagginationDrawer />
      </Provider>
    );

    fireEvent.click(screen.getByLabelText('Go to page 2'));
    expect(mockDispatch).toHaveBeenCalledWith(expect.any(Function));
  });

  test('changes items per page correctly', () => {
    render(
      <Provider store={store}>
        <PagginationDrawer />
      </Provider>
    );

    fireEvent.change(screen.getByRole('combobox'), { target: { value: 10 } });
    expect(screen.getAllByRole('article')).toHaveLength(10);
  });

  test('displays correct number of pagination buttons', () => {
    render(
      <Provider store={store}>
        <PagginationDrawer />
      </Provider>
    );

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    // totalPages calculation assertion; 60 entries, 20 per page, should result in 3 pages
    expect(screen.getAllByRole('button').length).toBe(5); // Include navigation arrows
  });

  test('handles no data scenario gracefully', () => {
    store = mockStore({
      title: {
        entries: [],
      },
    });

    render(
      <Provider store={store}>
        <PagginationDrawer />
      </Provider>
    );

    expect(screen.getByTestId('pagginationDrawer-component')).toBeInTheDocument();
    expect(screen.queryByRole('article')).toBeNull();
    expect(screen.queryByRole('navigation')).toBeNull();
  });
});
//