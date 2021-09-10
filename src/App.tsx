import React from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {HomeBanner} from "./components/HomeBanner/HomeBanner";
import {CatalogCategory} from "./components/Catalog/CatalogCategory/CatalogCategory";
import {Footer} from "./components/Footer/Footer";
import {PortalsEnum} from "./enums/portals.enum";

function App() {
  return (
    <div className="sw-react-app">
      <div className="page">
        <Header />
        <div className="content-wrapper">
          <HomeBanner />
          <CatalogCategory title="People" />
          <CatalogCategory title="Ships" />
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
