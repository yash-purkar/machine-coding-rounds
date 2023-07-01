import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { DataContextProvider } from "./Context/DataContext";
import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <DataContextProvider>
      <Router>
        <App />
      </Router>
    </DataContextProvider>
  </StrictMode>
);
