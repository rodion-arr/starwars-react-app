import React from "react";
import {CharDetailProps} from "./types";
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import {DetailPageParams} from "../types";
import {DbService} from "../../services/db.service";
import {CatalogCategory} from "../../components/Catalog/CatalogCategory/CatalogCategory";
import {URI} from "../../routes/uri";
import {EntityDetailPage} from "../../components/EntityDetailPage/EntityDetailPage";

export function CharDetail({
  people,
  species,
  planets,
  vehicles,
  starships,
  films,
}: CharDetailProps): JSX.Element | null {
  const { id } = useParams<DetailPageParams>();

  if (!people || !species || !planets || !vehicles || !starships || !films) {
    return null;
  }

  const entity = people[id];
  const image = DbService.getImageUrl(entity);
  const charProps = {
    'Height': entity.height,
    'Mass': entity.mass,
    'Hair color': entity.hair_color,
    'Skin color': entity.skin_color,
    'Eye color': entity.eye_color,
    'Birth year': entity.birth_year,
    'Gender': entity.gender,
    'Home world': <Link to={URI.planets.detail.replace(':id', entity.homeworld)}>{planets[entity.homeworld].name}</Link>,
  }

  return (
    <EntityDetailPage name={entity.name} image={image} charProps={charProps}>
      <>
        <CatalogCategory title="Films" items={DbService.getCategoryItems(entity.films, films)} />
        <CatalogCategory title="Species" items={DbService.getCategoryItems(entity.species, species)} />
        <CatalogCategory title="Vehicles" items={DbService.getCategoryItems(entity.vehicles, vehicles)} />
        <CatalogCategory title="Starships" items={DbService.getCategoryItems(entity.starships, starships)} />
      </>
    </EntityDetailPage>
  );
}
