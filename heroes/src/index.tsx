import "./index.css";
import "antd/dist/antd.min.css";

import React from "react";
import ReactDOM from "react-dom";

import { HeroesList } from "./modules/heroes-list/lib/view/components/HeroesList";

ReactDOM.render(
  <React.StrictMode>
    <HeroesList />
  </React.StrictMode>,
  document.getElementById("root")
);
