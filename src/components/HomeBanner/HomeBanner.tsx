import './HomeBanner.scss';
import React from "react";

export const HomeBanner = (): JSX.Element => {
  return (
    <div className="home-banner content-wrapper__item--full-width">
      <div className="home-banner__logo"/>
      <div className="home-banner__text">Welcome to StarWars catalog!</div>
      <div className="home-banner__scroll scroll-animation" title="Scroll down for more content!">
        <div className="scroll-animation__chevron" />
        <div className="scroll-animation__chevron" />
        <div className="scroll-animation__chevron" />
      </div>
    </div>
  );
};
