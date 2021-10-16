import {HomeBanner} from "../../components/HomeBanner/HomeBanner";
import {CatalogCategory, CatalogItemProps} from "../../components/Catalog/CatalogCategory/CatalogCategory";
import React from "react";
import {HomeProps} from "./types";
import {DbObject} from "../../store/db/types";
import {DbService} from "../../services/db.service";
import {URI} from "../../routes/uri";

export function Home({
  people,
  species,
  planets,
  vehicles,
  starships,
  films,
}: HomeProps): JSX.Element | null {
  if (!people || !species || !planets || !films || !vehicles || !starships) {
    return null;
  }

  function getCategoryItems (ids: string[], dbObj: Record<string, DbObject>): CatalogItemProps[] {
    const availableIds = Object.keys(dbObj);

    return ids.filter((id) => availableIds.includes(id))
      .map(id => {
        const entity = dbObj[id];
        return DbService.getCategoryProps(entity);
      });
  }

  return <>
    <HomeBanner />
    <CatalogCategory title="People" categoryUrl={URI.people} items={getCategoryItems(['1', '2', '3', '4', '5', '6'], people)} />
    <CatalogCategory title="Species" categoryUrl={URI.species} items={getCategoryItems(['1', '2', '3', '4', '5', '6'], species)} />
    <CatalogCategory title="Planets" categoryUrl={URI.planets} items={getCategoryItems(['1', '2', '3', '4', '5', '6'], planets)} />
    <CatalogCategory title="Vehicles" categoryUrl={URI.vehicles} items={getCategoryItems(['4', '16', '6', '7', '14', '18'], vehicles)} />
    <CatalogCategory title="Starships" categoryUrl={URI.starships} items={getCategoryItems(['2', '3', '5', '9', '10', '12'], starships)} />
    <CatalogCategory title="Films"  categoryUrl={URI.films} items={getCategoryItems(['1', '2', '3', '4', '5', '6'], films)} />
  </>
}
