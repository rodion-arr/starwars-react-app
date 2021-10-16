import React from "react";
import {StarshipDetailProps} from "./types";
import {useParams} from "react-router";
import {DetailPageParams} from "../types";
import {DbService} from "../../services/db.service";
import {CatalogCategory} from "../../components/Catalog/CatalogCategory/CatalogCategory";
import {EntityDetailPage} from "../../components/EntityDetailPage/EntityDetailPage";

export function StarshipDetail({
  people,
  species,
  planets,
  vehicles,
  starships,
  films,
}: StarshipDetailProps): JSX.Element | null {
  const { id } = useParams<DetailPageParams>();

  if (!people || !species || !planets || !vehicles || !starships || !films) {
    return null;
  }

  const entity = starships[id];
  const image = DbService.getImageUrl(entity);
  const entityProps = {
    'model': entity.model,
    'manufacturer': entity.manufacturer,
    'cost in credits': entity.cost_in_credits,
    'length': entity.length,
    'max atmosphering speed': entity.max_atmosphering_speed,
    'crew': entity.crew,
    'passengers': entity.passengers,
    'cargo capacity': entity.cargo_capacity,
    'consumables': entity.consumables,
    'hyperdrive rating': entity.hyperdrive_rating,
    'MGLT': entity.MGLT,
    'starship_class': entity.starship_class,
  }

  return (
    <EntityDetailPage name={entity.name} image={image} charProps={entityProps}>
      <>
        <CatalogCategory title="Pilots" items={DbService.getCategoryItems(entity.pilots, people)} />
        <CatalogCategory title="Films" items={DbService.getCategoryItems(entity.films, films)} />
      </>
    </EntityDetailPage>
  );
}
