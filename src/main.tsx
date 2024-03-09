import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Box } from "@mui/material";

import "./index.css";

import { HomePage } from "./pages/home/HomePage";
import { NavBar } from "./components/UI/NavBar";
import { Footer } from "./components/UI/Footer";
import { MoviesPage } from "./pages/movies/MoviesPage";
import { SeriesPage } from "./pages/series/SeriesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    // errorElement: <ErrorPage />
  },
  {
    path: "/movies",
    element: <MoviesPage />,
  },
  {
    path: "/series",
    element: <SeriesPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NavBar />
    <Box className="main-Content">
      <RouterProvider router={router} />
    </Box>
    {/* <Footer /> */}
  </React.StrictMode>
);
