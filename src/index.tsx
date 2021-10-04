import React from 'react';
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import {Suspense} from "react";
import {renderRoutes} from "react-router-config";
import {routesConfig} from "./routes/routes";
import {BrowserRouter as Router} from "react-router-dom";
import './index.css';
import {Provider} from "react-redux";
import {state} from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={state}>
      <Router>
        <Suspense fallback={<div>Loading.....</div>}>
          {renderRoutes(routesConfig)}
        </Suspense>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
