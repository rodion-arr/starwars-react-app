import {configureStore} from "@reduxjs/toolkit";
import {middleware} from "./middleware";
import {rootReducer} from "./root.reducer";

export const state = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware => getDefaultMiddleware().concat(...middleware)),
});

export type AppDispatch = typeof state.dispatch;
