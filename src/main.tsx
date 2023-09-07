import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";
import App from ".";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
