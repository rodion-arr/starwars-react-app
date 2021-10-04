import {AppState} from "./types";
import {createSlice} from "@reduxjs/toolkit";

const initialState: AppState = {
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

  },
});
