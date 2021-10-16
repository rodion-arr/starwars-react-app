import {CatalogCategory} from "../../components/Catalog/CatalogCategory/CatalogCategory";
import React from "react";
import {VehiclesProps} from "./types";
import {DbService} from "../../services/db.service";

export function Vehicles({
  vehicles,
}: VehiclesProps): JSX.Element | null {
  if (!vehicles) {
    return null;
  }

  return <CatalogCategory title="Vehicles" items={DbService.getFullCategoryProps(vehicles)} />;
}
