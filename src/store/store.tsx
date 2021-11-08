/* istanbul ignore file */
import {configureStore} from "@reduxjs/toolkit";
import {middleware} from "./middleware";
import {rootReducer} from "./root.reducer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware => getDefaultMiddleware().concat(...middleware)),
});

export type AppDispatch = typeof store.dispatch;
