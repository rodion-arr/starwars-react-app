import React from "react";
import {SpecieDetailProps} from "./types";
import {useParams} from "react-router";
import {DetailPageParams} from "../types";
import {DbService} from "../../services/db.service";
import {CatalogCategory} from "../../components/Catalog/CatalogCategory/CatalogCategory";
import {EntityDetailPage} from "../../components/EntityDetailPage/EntityDetailPage";
import {URI} from "../../routes/uri";
import {Link} from "react-router-dom";

export function SpecieDetail({
  people,
  species,
  planets,
  films,
}: SpecieDetailProps): JSX.Element | null {
  const { id } = useParams<DetailPageParams>();

  if (!people || !species || !planets || !films) {
    return null;
  }

  const entity = species[id];
  const image = DbService.getImageUrl(entity);
  const entityProps = {
    'classification': entity.classification,
    'designation': entity.designation,
    'average height': entity.average_height,
    'skin colors': entity.skin_colors,
    'hair colors': entity.hair_colors,
    'eye colors': entity.eye_colors,
    'average lifespan': entity.average_lifespan,
    'homeworld': <Link to={URI.planets.detail.replace(':id', entity.homeworld)}>{planets[entity.homeworld].name}</Link>,
  }

  return (
    <EntityDetailPage name={entity.name} image={image} charProps={entityProps}>
      <>
        <CatalogCategory title="People" items={DbService.getCategoryItems(entity.people, people)} />
        <CatalogCategory title="Films" items={DbService.getCategoryItems(entity.films, films)} />
      </>
    </EntityDetailPage>
  );
}
