import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Gallery from "./lesson/component-memory/index.jsx";
import Counter from "./lesson/state-as-snapshot/index.jsx";
import StateObject from "./lesson/state-object/index.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  // <App />
  // <Gallery />
  // <Counter />
  // </StrictMode>

  <StateObject />
);
