import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./_base.scss";
import { Provider } from "react-redux";
import store from "./store/store";
import {
  Navigate,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);

root.render(
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>
);
