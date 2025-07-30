import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./components/Home";
import AppLayout from "./components/layout/AppLayout";
import Error404page from "./components/Error404page";
import GetApiData from "./api/GetApiData";
import Movies from "./components/Movies";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error404page />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/movies",
          element: <Movies />,
          loader: GetApiData,
        },
        {
          path: "*",
          element: <Error404page />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
