import React from "react";
import './Header.scss';
import {MainMenu} from "../MainMenu/MainMenu";
import {Link} from "react-router-dom";
import {URI} from "../../routes/uri";

export const Header = (): JSX.Element => {
  return <div className="header">
    <MainMenu />
    <Link to={URI.home} className="header__logo" />
    <div className="header__fork fork">
      <a
        href="https://github.com/rodion-arr/starwars-react-app"
        title="Fork me on GitHub"
        target="_blank"
        rel="noreferrer"
      ><i className="fork__github-icon" /></a>
    </div>
  </div>
}
