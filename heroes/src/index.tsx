import { Spin } from "antd";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";

ReactDOM.render(
  <React.StrictMode>
    <h1 className="text-2xl">hello world</h1>
    <Spin />
  </React.StrictMode>,
  document.getElementById("root")
);
