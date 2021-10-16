import './MainMenu.scss';
import React, {useEffect, useState} from "react";
import ReactDOM from 'react-dom';
import {PortalsEnum} from "../../enums/portals.enum";
import {SocialLinks} from "../SocialLinks/SocialLinks";
import {NavLink} from "react-router-dom";
import {URI} from "../../routes/uri";

export const MainMenu = (): JSX.Element => {
  const [sideMenuTarget, setSideMenuTarget] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setSideMenuTarget(document.getElementById(PortalsEnum.SIDE_MENU));

    return () => {
      closeMenu();
    }
  }, []);

  const openMenu = () => {
    document.body.classList.add('side-menu-opened');
  }

  const closeMenu = () => {
    document.body.classList.remove('side-menu-opened');
  }

  return (
    <>
      <div className="header__menu burger-menu" onClick={openMenu}>
        <div className="burger-menu__bar"/>
        <div className="burger-menu__bar"/>
        <div className="burger-menu__bar"/>
      </div>
      {sideMenuTarget && ReactDOM.createPortal(
        (
          <div className="sidebar">
            <div className="sidebar__menu sidebar-menu">
              <div className="sidebar-menu__items side-menu-items">
                <div className="side-menu-items__item"><NavLink to={URI.home} className="side-menu-items__link" activeClassName="side-menu-items__link--active" exact>Home</NavLink></div>
                <div className="side-menu-items__item"><NavLink to={URI.people.base} className="side-menu-items__link" activeClassName="side-menu-items__link--active">People</NavLink></div>
                <div className="side-menu-items__item"><NavLink to={URI.planets.base} className="side-menu-items__link" activeClassName="side-menu-items__link--active">Planets</NavLink></div>
                <div className="side-menu-items__item"><NavLink to={URI.species.base} className="side-menu-items__link" activeClassName="side-menu-items__link--active">Species</NavLink></div>
                <div className="side-menu-items__item"><NavLink to={URI.vehicles} className="side-menu-items__link" activeClassName="side-menu-items__link--active">Vehicles</NavLink></div>
                <div className="side-menu-items__item"><NavLink to={URI.films.base} className="side-menu-items__link" activeClassName="side-menu-items__link--active">Films</NavLink></div>
                <div className="side-menu-items__item"><NavLink to={URI.starships} className="side-menu-items__link" activeClassName="side-menu-items__link--active">Starships</NavLink></div>
              </div>
              <div className="sidebar-menu__social">
                <SocialLinks />
              </div>
            </div>
            <div className="sidebar__overlay" onClick={closeMenu}/>
          </div>
        ),
        sideMenuTarget
      )}
    </>
  );
};
