
import React from "react";
import ReactDOM from "react-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
 
import "assets/scss/now-ui-kit.scss";
 
// pages for this kit
import App from "views/App.js";

ReactDOM.render(
  <React.StrictMode>

      <App />

  </React.StrictMode>,
  document.getElementById('root')
);
