import React from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {PortalsEnum} from "./enums/portals.enum";
import {useDb} from "./hooks/useDb";
import {Outlet} from "react-router-dom";

function App() {
  useDb();

  return (
    <div className="sw-react-app">
      <div className="page">
        <Header />
        <div className="content-wrapper">
          <Outlet />
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
