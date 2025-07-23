import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import EventHandling from "./components/EventHandling";
import EventProps from "./components/EventProps";
import EventPropagation from "./components/EventPropagation.jsx";
import State from "./components/hooks/State.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <EventHandling /> */}
    {/* <EventProps /> */}
    {/* <EventPropagation /> */}
    <State />
    
  </StrictMode>
);
