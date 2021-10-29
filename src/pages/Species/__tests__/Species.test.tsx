import {configureStore} from "@reduxjs/toolkit";
import {db} from "../../../../tests/fixtures/db";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import { BrowserRouter as Router } from "react-router-dom"
import {rootReducer} from "../../../store/root.reducer";
import ConnectedSpecies from "../ConnectedSpecies";

describe('Species', () => {
  it('should render correctly', function () {
    const storeMock = configureStore({
      reducer: rootReducer,
      preloadedState: db
    });

    const {container} = render(
      <Provider store={storeMock}>
        <Router>
          <ConnectedSpecies />
        </Router>
      </Provider>);

    expect(container).toMatchSnapshot();
  });

  it('should not render if no data', function () {
    const storeMock = configureStore({
      reducer: rootReducer,
      preloadedState: {}
    });

    const {container} = render(
      <Provider store={storeMock}>
        <Router>
          <ConnectedSpecies />
        </Router>
      </Provider>);

    expect(container).toMatchSnapshot();
  });
});
