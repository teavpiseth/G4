import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import StateObject from "./lesson/adding-interactivity/state-object";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <App />
  // <Gallery />
  // <Counter />
  // </StrictMode>

  // <StateObject />
);
