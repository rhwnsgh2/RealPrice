import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const extensionRoot = document.createElement("div");
extensionRoot.id = "realPriceExtension";
document.body.appendChild(extensionRoot);

ReactDOM.createRoot(
  document.getElementById("realPriceExtension") as HTMLElement
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
