import React from "react";
import './Header.scss';

export const Header = (): JSX.Element => {
  return <div className="header">
    <div className="header__menu burger-menu">
      <div className="burger-menu__bar"/>
      <div className="burger-menu__bar"/>
      <div className="burger-menu__bar"/>
    </div>
    <div className="header__logo"/>
    <div className="header__fork fork">
      <a
        href="https://github.com/rodion-arr/starwars-react-app"
        title="Fork me on GitHub"
        target="_blank"
      ><i className="fork__github-icon" /></a>
    </div>
  </div>
}
