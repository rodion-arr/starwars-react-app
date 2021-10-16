import { connect } from 'react-redux';
import { FilmDetail } from './FilmDetail';
import {AppState} from "../../store/root.reducer";

const mapState = (state: AppState) => ({
  people: state.db.people,
  planets: state.db.planets,
  films: state.db.films,
  species: state.db.starships,
  vehicles: state.db.vehicles,
  starships: state.db.starships,
});

const mapDispatch = {};

export const connector = connect(mapState, mapDispatch);

const ConnectedFilmDetail = connect(mapState, mapDispatch)(FilmDetail);
export default ConnectedFilmDetail;
