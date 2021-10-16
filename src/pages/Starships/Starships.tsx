import {CatalogCategory} from "../../components/Catalog/CatalogCategory/CatalogCategory";
import React from "react";
import {StarshipsProps} from "./types";
import {DbService} from "../../services/db.service";

export function Starships({
  starships,
}: StarshipsProps): JSX.Element | null {
  if (!starships) {
    return null;
  }

  return <CatalogCategory title="Starships" items={DbService.getFullCategoryProps(starships)} />;
}
