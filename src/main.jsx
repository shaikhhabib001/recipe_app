import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import GlobalContext from "./components/GlobalContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalContext>
  </StrictMode>
);
