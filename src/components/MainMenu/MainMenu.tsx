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

  const activeNavLinkHandler = ({ isActive }: {
    isActive: boolean;
  }) => `side-menu-items__link ${isActive ? 'side-menu-items__link--active' : ''}`;

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
                <div className="side-menu-items__item"><NavLink to={URI.home} className={activeNavLinkHandler} end>Home</NavLink></div>
                <div className="side-menu-items__item"><NavLink to={URI.people.base} className={activeNavLinkHandler}>People</NavLink></div>
                <div className="side-menu-items__item"><NavLink to={URI.planets.base} className={activeNavLinkHandler}>Planets</NavLink></div>
                <div className="side-menu-items__item"><NavLink to={URI.species.base} className={activeNavLinkHandler}>Species</NavLink></div>
                <div className="side-menu-items__item"><NavLink to={URI.vehicles.base} className={activeNavLinkHandler}>Vehicles</NavLink></div>
                <div className="side-menu-items__item"><NavLink to={URI.films.base} className={activeNavLinkHandler}>Films</NavLink></div>
                <div className="side-menu-items__item"><NavLink to={URI.starships.base} className={activeNavLinkHandler}>Starships</NavLink></div>
                <div className="side-menu-items__item"><NavLink to={URI.timeline.base} className={activeNavLinkHandler}>Timeline</NavLink></div>
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
