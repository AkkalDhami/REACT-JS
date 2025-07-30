import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact, { contactData } from "./components/Contact";
import About from "./components/About";
import Home from "./components/Home";
import AppLayout from "./components/layout/AppLayout";
import Error404page from "./components/Error404page";
import GetApiData from "./api/GetApiData";
import Movies from "./components/Movies";
import MoviesDetails from "./components/ui/MoviesDetails";
import GetMovieDetails from "./api/GetMovieDetails";
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
          action: contactData,
        },
        {
          path: "/movies",
          element: <Movies />,
          loader: GetApiData,
        },
        {
          path: "/movies/:id",
          element: <MoviesDetails />,
          loader: GetMovieDetails,
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
