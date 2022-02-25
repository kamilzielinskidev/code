import "./index.css";
import "antd/dist/antd.variable.min.css";

import { ConfigProvider } from "antd";
import React from "react";
import ReactDOM from "react-dom";

import { HeroesList } from "./modules/heroes-list/lib/view/components/HeroesList";

ConfigProvider.config({
  theme: {
    primaryColor: "#65cd96",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <HeroesList />
  </React.StrictMode>,
  document.getElementById("root")
);
