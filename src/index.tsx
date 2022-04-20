/* istanbul ignore file */
import React, {Suspense} from 'react';
import {createRoot} from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import {routesConfig} from "./routes/routes";
import {BrowserRouter as Router} from "react-router-dom";
import './index.css';
import {Provider} from "react-redux";
import {store} from "./store/store";
import {WithRouter} from "./components/WithRouter/WithRouter";

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Suspense fallback={<div>Loading.....</div>}>
          <WithRouter routes={routesConfig} />
        </Suspense>
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
