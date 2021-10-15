import { connect } from 'react-redux';
import { Home } from './Home';
import {AppState} from "../../store/root.reducer";

const mapState = (state: AppState) => ({
  films: state.db.films,
  people: state.db.people,
  planets: state.db.planets,
  species: state.db.species,
  starships: state.db.starships,
  vehicles: state.db.vehicles,
});

const mapDispatch = {};

export const connector = connect(mapState, mapDispatch);

const ConnectedHome = connect(mapState, mapDispatch)(Home);
export default ConnectedHome;
