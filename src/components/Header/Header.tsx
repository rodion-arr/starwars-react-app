import {ReactComponent as SearchIcon} from "../../images/header/search.svg";
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
    <div className="header__search search">
      <SearchIcon/>
    </div>
  </div>
}
