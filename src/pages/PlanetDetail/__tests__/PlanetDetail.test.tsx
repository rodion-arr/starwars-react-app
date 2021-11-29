import {configureStore} from "@reduxjs/toolkit";
import {db} from "../../../../tests/fixtures/db";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import * as reactRouter from "react-router";
import { BrowserRouter as Router } from "react-router-dom"
import {rootReducer} from "../../../store/root.reducer";
import ConnectedPlanetDetail from "../ConnectedPlanetDetail";

describe('PlanetDetail', () => {
  it('should render correctly', function () {
    jest.spyOn(reactRouter, 'useParams').mockImplementationOnce(() => ({id: '1'}));

    const storeMock = configureStore({
      reducer: rootReducer,
      preloadedState: db
    });

    const {container} = render(
      <Provider store={storeMock}>
        <Router>
          <ConnectedPlanetDetail />
        </Router>
      </Provider>);

    expect(container).toMatchSnapshot();
  });

  it('should not render if no data', function () {
    jest.spyOn(reactRouter, 'useParams').mockImplementationOnce(() => ({id: '1'}));

    const storeMock = configureStore({
      reducer: rootReducer,
      preloadedState: {}
    });

    const {container} = render(
      <Provider store={storeMock}>
        <Router>
          <ConnectedPlanetDetail />
        </Router>
      </Provider>);

    expect(container).toMatchSnapshot();
  });
});
