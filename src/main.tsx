import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";
import App from ".";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./index.scss";

const client = new ApolloClient({
  uri: "https://spacex-production.up.railway.app/",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
