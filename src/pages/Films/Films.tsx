import {CatalogCategory} from "../../components/Catalog/CatalogCategory/CatalogCategory";
import React from "react";
import {FilmsProps} from "./types";
import {DbService} from "../../services/db.service";

export function Films({
  films,
}: FilmsProps): JSX.Element | null {
  if (!films) {
    return null;
  }

  return <CatalogCategory title="Films" items={DbService.getFullCategoryProps(films)} />;
}
