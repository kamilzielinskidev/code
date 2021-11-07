import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { render } from "react-dom";

import { App } from "./components/App";

import "tailwindcss/tailwind.css";
import "./styles.scss";

const client = new ApolloClient({
  uri: process.env.GRAPHCMS_ENDPOINT,
});

const app = document.getElementById("app");

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  app
);
