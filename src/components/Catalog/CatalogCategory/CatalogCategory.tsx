import './CatalogCategory.scss';
import {CatalogItem} from "../CatalogItem/CatalogItem";
import React from "react";

interface Props {
  title: string;
}

export const CatalogCategory = ({
  title,
}: Props): JSX.Element => {
  return (
    <div className="catalog">
      <h2 className="catalog__title">{title}</h2>
      <div className="catalog__items catalog-items-wrap">
        {(new Array(5)).fill(1).map((value, i) => {
          return <CatalogItem key={i} img={'/assets/content/people/1.png'} title={'Luke Skywalker'} />;
        })}
      </div>
    </div>
  );
};
