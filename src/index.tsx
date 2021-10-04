import React from 'react';
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import {Suspense} from "react";
import { renderRoutes } from "react-router-config";
import {routesConfig} from "./routes/routes";
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={<div>Loading.....</div>}>
        {renderRoutes(routesConfig)}
      </Suspense>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
