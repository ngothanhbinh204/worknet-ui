import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GlobalStyle from "./components/GlobalStyles";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle>
      <App />
    </GlobalStyle>
  </StrictMode>
);
