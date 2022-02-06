import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { RouterAplication } from "./routes";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <RouterAplication />
    <ToastContainer />
  </BrowserRouter>,
  document.getElementById("root")
);
