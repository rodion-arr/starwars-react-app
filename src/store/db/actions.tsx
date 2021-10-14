import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import {Char} from "./entities/char.d";
import {types} from "./types";
import {AppDispatch} from "../store";
import {DbService} from "../../services/db.service";
import {Film} from "./entities/film.d";
import {Planet} from "./entities/planet.d";
import {Specie} from "./entities/specie.d";
import {Starship} from "./entities/starship.d";

export const dbActions = Object.freeze({
  fillPeople: createAction<Record<string, Char> | null>(types.FILL_PEOPLE),
  fillFilms: createAction<Record<string, Film> | null>(types.FILL_FILMS),
  fillPlanets: createAction<Record<string, Planet> | null>(types.FILL_PLANETS),
  fillSpecies: createAction<Record<string, Specie> | null>(types.FILL_SPECIES),
  fillStarships: createAction<Record<string, Starship> | null>(types.FILL_STARSHIPS),

  // Async
  getDb: createAsyncThunk<
    void,
    void,
    {
      dispatch: AppDispatch;
    }
    >(types.GET_DB, async (arg, { dispatch}) => {
      dispatch(dbActions.fillPeople(await DbService.loadDbFile('/db/people.json')))
      dispatch(dbActions.fillFilms(await DbService.loadDbFile('/db/films.json')))
      dispatch(dbActions.fillPlanets(await DbService.loadDbFile('/db/planets.json')))
      dispatch(dbActions.fillSpecies(await DbService.loadDbFile('/db/species.json')))
      dispatch(dbActions.fillStarships(await DbService.loadDbFile('/db/starships.json')))
  }),
});
