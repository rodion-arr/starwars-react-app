import {Char} from "./entities/char.d";
import {Film} from "./entities/film.d";
import {Planet} from "./entities/planet.d";
import {Specie} from "./entities/specie.d";

export const types = Object.freeze({
  GET_DB: '[DB] GET_DB',
  FILL_PEOPLE: '[DB] FILL_PEOPLE',
  FILL_FILMS: '[DB] FILL_FILMS',
  FILL_PLANETS: '[DB] FILL_PLANETS',
  FILL_SPECIES: '[DB] FILL_SPECIES',
  FILL_STARSHIPS: '[DB] FILL_STARSHIPS',
  FILL_VEHICLES: '[DB] FILL_VEHICLES',
});

export interface DbState {
  people: Record<string, Char> | null;
  films: Record<string, Film> | null;
  planets: Record<string, Planet> | null;
  species: Record<string, Specie> | null;
}
