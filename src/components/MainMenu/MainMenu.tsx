import './MainMenu.scss';
import React, {useEffect, useState} from "react";
import ReactDOM from 'react-dom';
import {PortalsEnum} from "../../enums/portals.enum";
import {SocialLinks} from "../SocialLinks/SocialLinks";

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
                <div className="side-menu-items__item"><a className="side-menu-items__link side-menu-items__link--active" href="/">Home</a></div>
                <div className="side-menu-items__item"><a className="side-menu-items__link" href="#">People</a></div>
                <div className="side-menu-items__item"><a className="side-menu-items__link" href="#">Planets</a></div>
                <div className="side-menu-items__item"><a className="side-menu-items__link" href="#">Species</a></div>
                <div className="side-menu-items__item"><a className="side-menu-items__link" href="#">Vehicles</a></div>
                <div className="side-menu-items__item"><a className="side-menu-items__link" href="#">Films</a></div>
                <div className="side-menu-items__item"><a className="side-menu-items__link" href="#">Starships</a></div>
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
