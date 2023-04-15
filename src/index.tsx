import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { apollo } from "./infrastructure/apollo";
import { ApolloProvider } from "@apollo/client";


import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <ApolloProvider client={apollo}>
      <App />
    </ApolloProvider>
  </StrictMode>
);
