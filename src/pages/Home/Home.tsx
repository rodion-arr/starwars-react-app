import {HomeBanner} from "../../components/HomeBanner/HomeBanner";
import {CatalogCategory, CatalogItemProps} from "../../components/Catalog/CatalogCategory/CatalogCategory";
import React from "react";
import {HomeProps} from "./types";
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

  return <>
    <HomeBanner />
    <CatalogCategory title="People" categoryUrl={URI.people.base} items={DbService.getCategoryItems(['1', '2', '3', '4', '5', '6'], people)} />
    <CatalogCategory title="Species" categoryUrl={URI.species.base} items={DbService.getCategoryItems(['1', '2', '3', '4', '5', '6'], species)} />
    <CatalogCategory title="Planets" categoryUrl={URI.planets.base} items={DbService.getCategoryItems(['1', '2', '3', '4', '5', '6'], planets)} />
    <CatalogCategory title="Vehicles" categoryUrl={URI.vehicles.base} items={DbService.getCategoryItems(['4', '16', '6', '7', '14', '18'], vehicles)} />
    <CatalogCategory title="Starships" categoryUrl={URI.starships.base} items={DbService.getCategoryItems(['2', '3', '5', '9', '10', '12'], starships)} />
    <CatalogCategory title="Films"  categoryUrl={URI.films.base} items={DbService.getCategoryItems(['1', '2', '3', '4', '5', '6'], films)} />
  </>
}
