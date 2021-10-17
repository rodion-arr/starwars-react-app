import './CatalogItem.scss';
import React from "react";
import {Link} from "react-router-dom";
import {ImagesService} from "../../../services/images.service";

interface Props {
  img: string;
  title: string;
  url: string
}

export const CatalogItem = ({img, title, url}: Props): JSX.Element => {
  return (
    <div className="catalog-item">
      <Link to={url} className="catalog-item__link">
        <div className="catalog-item__img-wrap">
          <img className="catalog-item__img" src={img} alt={title} onError={ImagesService.imageErrorHandler} />
        </div>
        <div className="catalog-item__info catalog-item-info">
          <div className="catalog-item-info__name">{title}</div>
        </div>
      </Link>
    </div>
  );
};
