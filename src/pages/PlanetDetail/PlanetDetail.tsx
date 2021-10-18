import React from "react";
import {PlanetDetailProps} from "./types";
import {useParams} from "react-router";
import {DetailPageParams} from "../types";
import {DbService} from "../../services/db.service";
import {CatalogCategory} from "../../components/Catalog/CatalogCategory/CatalogCategory";
import {EntityDetailPage} from "../../components/EntityDetailPage/EntityDetailPage";

export function PlanetDetail({
  people,
  planets,
  films,
}: PlanetDetailProps): JSX.Element | null {
  const { id } = useParams<DetailPageParams>();

  if (!people || !planets || !films) {
    return null;
  }

  const entity = planets[id];
  const image = DbService.getImageUrl(entity);
  const entityProps = {
    'rotation period': entity.rotation_period,
    'orbital period': entity.orbital_period,
    'diameter': entity.diameter,
    'climate': entity.climate,
    'gravity': entity.gravity,
    'terrain': entity.terrain,
    'surface water': entity.surface_water,
    'population': entity.population,
  }

  return (
    <EntityDetailPage name={entity.name} image={image} charProps={entityProps}>
      <>
        <CatalogCategory title="Residents" items={DbService.getCategoryItems(entity.residents, people)} />
        <CatalogCategory title="Films" items={DbService.getCategoryItems(entity.films, films)} />
      </>
    </EntityDetailPage>
  );
}
