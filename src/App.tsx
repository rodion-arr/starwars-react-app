import React from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {HomeBanner} from "./components/HomeBanner/HomeBanner";
import {CatalogCategory} from "./components/Catalog/CatalogCategory/CatalogCategory";
import {Footer} from "./components/Footer/Footer";

function App() {
  return (
    <div className="sw-react-app">
      <Header />
      <div className="wrapper">
        <HomeBanner />
        <CatalogCategory title="People" />
        <CatalogCategory title="Ships" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
