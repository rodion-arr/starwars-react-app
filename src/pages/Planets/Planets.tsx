import {CatalogCategory} from "../../components/Catalog/CatalogCategory/CatalogCategory";
import React from "react";
import {PlanetsProps} from "./types";
import {DbService} from "../../services/db.service";

export function Planets({
  planets,
}: PlanetsProps): JSX.Element | null {
  if (!planets) {
    return null;
  }

  return <CatalogCategory title="Planets" items={DbService.getFullCategoryProps(planets)} />;
}
