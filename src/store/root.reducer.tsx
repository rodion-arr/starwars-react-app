import {combineReducers} from "redux";
import {appSlice} from "./app/reducer";
import {dbSlice} from "./db/reducer";

export const coreReducerObject = {
  app: appSlice.reducer,
  db: dbSlice.reducer,
};

export const rootReducer = combineReducers(coreReducerObject);

export type AppState = ReturnType<typeof rootReducer>;
