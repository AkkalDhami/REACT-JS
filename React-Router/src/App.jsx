import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./component/Contact";
import About from "./component/About";
import Home from "./component/Home";
function App() {
  const router = createBrowserRouter([
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
  ]);

  return <RouterProvider router={router} />;
}

export default App;
