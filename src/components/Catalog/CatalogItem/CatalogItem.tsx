import './CatalogItem.scss';
import React from "react";

interface Props {
  img: string;
  title: string;
}

export const CatalogItem = ({img, title}: Props): JSX.Element => {
  return (
    <div className="catalog-item">
      <a href="#" className="catalog-item__link">
        <div className="catalog-item__img">
          <img src={img} alt={`${title} | Image`}/>
        </div>
        <div className="catalog-item__info catalog-item-info">
          <div className="catalog-item-info__name">{title}</div>
        </div>
      </a>
    </div>
  );
};
