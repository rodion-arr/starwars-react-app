import './CatalogItem.scss';
import React from "react";
import {Link} from "react-router-dom";

interface Props {
  img: string;
  title: string;
  url: string
}

export const CatalogItem = ({img, title, url}: Props): JSX.Element => {
  return (
    <div className="catalog-item">
      <Link to={url} className="catalog-item__link">
        <div className="catalog-item__img">
          <img src={img} alt={title} />
        </div>
        <div className="catalog-item__info catalog-item-info">
          <div className="catalog-item-info__name">{title}</div>
        </div>
      </Link>
    </div>
  );
};
