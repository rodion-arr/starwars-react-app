import './SocialLinks.scss';
import React from "react";

export const SocialLinks = (): JSX.Element => {
  return (
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
  );
};
