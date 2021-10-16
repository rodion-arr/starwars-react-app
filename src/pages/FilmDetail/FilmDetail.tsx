import React from "react";
import {FilmDetailProps} from "./types";
import {useParams} from "react-router";
import {DetailPageParams} from "../types";
import {DbService} from "../../services/db.service";
import {CatalogCategory} from "../../components/Catalog/CatalogCategory/CatalogCategory";
import {EntityDetailPage} from "../../components/EntityDetailPage/EntityDetailPage";

export function FilmDetail({
  people,
  species,
  planets,
  vehicles,
  starships,
  films,
}: FilmDetailProps): JSX.Element | null {
  const { id } = useParams<DetailPageParams>();

  if (!people || !species || !planets || !vehicles || !starships || !films) {
    return null;
  }

  const entity = films[id];
  const image = DbService.getImageUrl(entity);
  const entityProps = {
    'opening crawl': entity.opening_crawl,
    'director': entity.director,
    'producer': entity.producer,
    'release date': entity.release_date,
  }

  return (
    <EntityDetailPage name={entity.title} image={image} charProps={entityProps}>
      <>
        <CatalogCategory title="Characters" items={DbService.getCategoryItems(entity.characters, people)} />
        <CatalogCategory title="Planets" items={DbService.getCategoryItems(entity.planets, planets)} />
        <CatalogCategory title="Starships" items={DbService.getCategoryItems(entity.starships, starships)} />
        <CatalogCategory title="Vehicles" items={DbService.getCategoryItems(entity.vehicles, vehicles)} />
        <CatalogCategory title="Species" items={DbService.getCategoryItems(entity.species, species)} />
      </>
    </EntityDetailPage>
  );
}
