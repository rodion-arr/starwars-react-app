import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import {Char} from "./entities/char.d";
import {types} from "./types";
import {AppDispatch} from "../store";
import {DbService} from "../../services/db.service";
import {Film} from "./entities/film.d";

export const dbActions = Object.freeze({
  fillPeople: createAction<Record<string, Char> | null>(types.FILL_PEOPLE),
  fillFilms: createAction<Record<string, Film> | null>(types.FILL_FILMS),

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
  }),
});
