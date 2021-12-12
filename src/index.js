import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App/app";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "../node_modules/react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#root")
);
