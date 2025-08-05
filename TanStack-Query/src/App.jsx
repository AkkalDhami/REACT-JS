import React from "react";
import Mainlayout from "./components/layouts/Mainlayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FetchOld from "./pages/FetchOld";
import Home from "./pages/Home";
import FetchRQ from "./pages/FetchRQ";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/trad",
        element: <FetchOld />,
      },
      {
        path: "/rq",
        element: <FetchRQ />,
      },
    ],
  },
]);
const App = () => {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
