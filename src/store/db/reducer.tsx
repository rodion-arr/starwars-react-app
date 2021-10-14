import {DbState} from "./types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {dbActions} from "./actions";
import {Char} from "./entities/char.d";
import {Film} from "./entities/film.d";
import {Planet} from "./entities/planet.d";

const initialState: DbState = {
  people: null,
  films: null,
  planets: null,
};

export const dbSlice = createSlice({
  name: 'db',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      dbActions.fillPeople.type,
      (state, action: PayloadAction<Record<string, Char>>) => {
        state.people = action.payload;
      },
    );

    builder.addCase(
      dbActions.fillFilms.type,
      (state, action: PayloadAction<Record<string, Film>>) => {
        state.films = action.payload;
      },
    );

    builder.addCase(
      dbActions.fillPlanets.type,
      (state, action: PayloadAction<Record<string, Planet>>) => {
        state.planets = action.payload;
      },
    );
  },
});
