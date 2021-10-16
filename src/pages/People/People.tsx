import {CatalogCategory} from "../../components/Catalog/CatalogCategory/CatalogCategory";
import React from "react";
import {PeopleProps} from "./types";
import {DbService} from "../../services/db.service";

export function People({
  people,
}: PeopleProps): JSX.Element | null {
  if (!people) {
    return null;
  }
  return <CatalogCategory title="People" items={DbService.getFullCategoryProps(people)} />;
}
