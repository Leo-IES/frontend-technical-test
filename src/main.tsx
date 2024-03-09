import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Box } from "@mui/material";
import { Provider } from "react-redux";
import store from "./store/store";

import { HomePage } from "./pages/home/HomePage";

import { MoviesPage } from "./pages/movies/MoviesPage";
import { SeriesPage } from "./pages/series/SeriesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <div>Oops! There was an error.</div>,
  },
  {
    path: "/movies",
    element: <MoviesPage />,
  },
  {
    path: "/series",
    element: <SeriesPage />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
