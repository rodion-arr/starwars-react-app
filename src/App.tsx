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
          <div className="home-banner__scroll scroll-animation">
            <div className="scroll-animation__chevron" />
            <div className="scroll-animation__chevron" />
            <div className="scroll-animation__chevron" />
          </div>
        </div>
        <div className="catalog">
          <h2 className="catalog__title">People</h2>
          <div className="catalog__items catalog-items-wrap">
            {(new Array(5)).fill(1).map(i => {
              return <div className="catalog-item">
                <a href="#" className="catalog-item__link">
                  <div className="catalog-item__img">
                    <img src="/assets/content/people/1.png" alt="Luke"/>
                  </div>
                  <div className="catalog-item__info catalog-item-info">
                    <div className="catalog-item-info__name">Luke Skywalker</div>
                  </div>
                </a>
              </div>
            })}
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="social-links">
          <p className="social-links__text">Follow:</p>
          <ul className="social-links-list">
            <li className="social-links-list__item">
              <a className="social-links-list__item--linkedin icon-wrap" href="https://www.linkedin.com/in/rodionabdurakhimov/" target="_blank" rel="noopener noreferrer" title="Rodion Abdurakhimov | LinkedIn">
                <i className="social-links-list__icon" />
              </a>
            </li>
            <li className="social-links-list__item">
              <a className="social-links-list__item--github icon-wrap" href="https://github.com/rodion-arr" target="_blank" rel="noopener noreferrer" title="Rodion Abdurakhimov | GitHub">
                <i className="social-links-list__icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
