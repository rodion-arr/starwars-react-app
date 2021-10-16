import {CatalogCategory} from "../../components/Catalog/CatalogCategory/CatalogCategory";
import React from "react";
import {SpeciesProps} from "./types";
import {DbService} from "../../services/db.service";

export function Species({
  species,
}: SpeciesProps): JSX.Element | null {
  if (!species) {
    return null;
  }

  return <CatalogCategory title="Species" items={DbService.getFullCategoryProps(species)} />;
}
