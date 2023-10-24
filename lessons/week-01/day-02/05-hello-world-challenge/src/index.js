import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App.js";

const reactContainer = document.getElementById("root");

const root = ReactDOM.createRoot(reactContainer);

root.render(<App />);
