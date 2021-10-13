import React from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {PortalsEnum} from "./enums/portals.enum";
import {renderRoutes, RouteConfig} from "react-router-config";
import {useDb} from "./hooks/useDb";

function App({ route }: RouteConfig) {
  useDb();

  return (
    <div className="sw-react-app">
      <div className="page">
        <Header />
        <div className="content-wrapper">
          {route && renderRoutes(route.routes)}
        </div>
        <Footer />
      </div>
      <div className="portals">
        <div id={PortalsEnum.SIDE_MENU} />
      </div>
    </div>
  );
}

export default App;
