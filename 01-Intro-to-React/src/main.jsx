import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import EventHandling from "./components/EventHandling";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <EventHandling />
  </StrictMode>
);
