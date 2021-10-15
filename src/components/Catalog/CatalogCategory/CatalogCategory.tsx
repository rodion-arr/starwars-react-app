import './CatalogCategory.scss';
import {CatalogItem} from "../CatalogItem/CatalogItem";
import React from "react";
import {Link} from "react-router-dom";

export interface CatalogItemProps {
  image: string;
  title: string;
  url: string;
  id: string;
}

interface Props {
  title: string;
  items: CatalogItemProps[];
  categoryUrl?: string
}

export const CatalogCategory = ({
  title,
  items,
  categoryUrl,
}: Props): JSX.Element => {
  return (
    <div className="catalog">
      <h2 className="catalog__title">
        {categoryUrl && <Link to={categoryUrl}>{title}</Link>}
        {!categoryUrl && <>{title}</>}
      </h2>
      <div className="catalog__items catalog-items-wrap">
        {items.map(({
          id,
          image,
          url,
          title,
        }) => <CatalogItem key={id} img={image} title={title} url={url} />)}
      </div>
    </div>
  );
};
