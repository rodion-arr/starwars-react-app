import React from 'react';
import './App.scss';
import {ReactComponent as SearchIcon} from './images/header/search.svg';

function App() {
  return (
    <div className="sw-react-app">
      <div className="header">
        <div className="header__menu burger-menu">
          <div className="burger-menu__bar"/>
          <div className="burger-menu__bar"/>
          <div className="burger-menu__bar"/>
        </div>
        <div className="header__logo"/>
        <div className="header__search search">
          <SearchIcon/>
        </div>
      </div>
      <div className="wrapper">
        <div className="home-banner">
          <div className="home-banner__logo"/>
          <div className="home-banner__text">Welcome to StarWars catalog!</div>
        </div>
      </div>
      <div className="footer">
        footer
      </div>
    </div>
  );
}

export default App;
