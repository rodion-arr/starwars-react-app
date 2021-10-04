import {combineReducers} from "redux";
import {appSlice} from "./app/reducer";

export const coreReducerObject = {
  app: appSlice.reducer,
};

export const rootReducer = combineReducers(coreReducerObject);

export type AppState = ReturnType<typeof rootReducer>;
