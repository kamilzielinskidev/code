import { render } from "react-dom";

import { App } from "./App";

import "tailwindcss/tailwind.css";
import "./styles.scss";

const app = document.getElementById("app");
render(<App />, app);
