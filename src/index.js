import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
//import "./config/i18n";
import App from "./App";
import store from "./redux/configureStore";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

const appElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </Provider>,
  appElement
);
