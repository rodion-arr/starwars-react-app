import {render, waitFor} from "@testing-library/react";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import {useDb} from "../useDb";
import {dbSlice} from "../../store/db/reducer";
import {DbService} from "../../services/db.service";
const {mocked} = jest;

jest.mock('../../services/db.service');

describe('useDB', () => {
  it('should dispatch correct action on mount', async function () {
    const UseDbRenderer = (): null => {
      useDb();
      return null;
    };

    const store = configureStore({
      reducer: dbSlice.reducer
    });

    const loadFileMock = mocked(DbService.loadDbFile);
    loadFileMock.mockImplementation((path) => {
      return Promise.resolve({
        test: "unit",
      });
    });

    render(<Provider store={store}><UseDbRenderer/></Provider>);

    await waitFor(() => {
      expect(loadFileMock).toBeCalledTimes(7);
      expect(loadFileMock).toBeCalledWith('/db/people.json');
      expect(loadFileMock).toBeCalledWith('/db/films.json');
      expect(loadFileMock).toBeCalledWith('/db/planets.json');
      expect(loadFileMock).toBeCalledWith('/db/species.json');
      expect(loadFileMock).toBeCalledWith('/db/starships.json');
      expect(loadFileMock).toBeCalledWith('/db/vehicles.json');
      expect(loadFileMock).toBeCalledWith('/db/timeline.json');

      expect(store.getState()).toStrictEqual({
        "films": {"test": "unit"},
        "people": {"test": "unit"},
        "planets": {"test": "unit"},
        "species": {"test": "unit"},
        "starships": {"test": "unit"},
        "vehicles": {"test": "unit"},
        "timeline": {"test": "unit"},
      });
    });
  });
});
