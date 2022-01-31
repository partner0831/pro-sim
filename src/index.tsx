import React from "react";
import ReactDOM from "react-dom";

// import "./index.css";
import "tailwindcss/tailwind.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-notifications-component/dist/theme.css";
import ReactNotification from "react-notifications-component";

import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { init } from "init";

init();

ReactDOM.render(
  <React.StrictMode>
    <ReactNotification />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
