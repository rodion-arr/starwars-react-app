import {DbObject} from "../store/db/types";
import {isChar} from "../store/db/entities/char.d";
import {isSpecie} from "../store/db/entities/specie.d";
import {isPlanet} from "../store/db/entities/planet.d";
import {isFilm} from "../store/db/entities/film.d";
import {isVehicle} from "../store/db/entities/vehicle.d";
import {isStarship} from "../store/db/entities/starship.d";
import {CatalogItemProps} from "../components/Catalog/CatalogCategory/CatalogCategory";

export const DbService = {
  async loadDbFile<Response>(url: string): Promise<null | Response> {
    try {
      return await (await fetch(url)).json();
    } catch (e: any) {
      console.error('Load DB failed', e.message);

      return null
    }
  },

  getImageUrl(dbObj: DbObject): string {
    const baseImageFolder = '/assets/content';

    if (isChar(dbObj)) {
      return `${baseImageFolder}/people/${dbObj.id}.png`;
    }

    if (isSpecie(dbObj)) {
      return `${baseImageFolder}/species/${dbObj.id}.png`;
    }

    if (isPlanet(dbObj)) {
      return `${baseImageFolder}/planets/${dbObj.id}.png`;
    }

    if (isFilm(dbObj)) {
      return `${baseImageFolder}/films/${dbObj.id}.png`;
    }

    if (isVehicle(dbObj)) {
      return `${baseImageFolder}/vehicles/${dbObj.id}.png`;
    }

    if (isStarship(dbObj)) {
      return `${baseImageFolder}/starships/${dbObj.id}.png`;
    }

    return '';
  },

  getUrl(dbObj: DbObject): string {
    if (isChar(dbObj)) {
      return `/people/${dbObj.id}`;
    }

    if (isSpecie(dbObj)) {
      return `/species/${dbObj.id}`;
    }

    if (isPlanet(dbObj)) {
      return `/planets/${dbObj.id}`;
    }

    if (isFilm(dbObj)) {
      return `/films/${dbObj.id}`;
    }

    if (isVehicle(dbObj)) {
      return `/vehicles/${dbObj.id}`;
    }

    if (isStarship(dbObj)) {
      return `/starships/${dbObj.id}`;
    }

    return '';
  },

  getGetTitle(dbObj: DbObject): string {
    if (isFilm(dbObj)) {
      return dbObj.title;
    }

    return dbObj.name;
  },

  getCategoryProps(entity: DbObject): CatalogItemProps {
    return {
      image: DbService.getImageUrl(entity),
      title: DbService.getGetTitle(entity),
      url: DbService.getUrl(entity),
      id: entity.id,
    }
  },

  getFullCategoryProps(dbObj: Record<string, DbObject>): CatalogItemProps[] {
    const ids = Object.keys(dbObj);
    return ids.map(id => {
      const entity = dbObj[id];
      return DbService.getCategoryProps(entity);
    });
  },

  getCategoryItems (ids: string[], dbObj: Record<string, DbObject>): CatalogItemProps[] {
    const availableIds = Object.keys(dbObj);

    return ids.filter((id) => availableIds.includes(id))
      .map(id => {
        const entity = dbObj[id];
        return DbService.getCategoryProps(entity);
      });
  },
};
