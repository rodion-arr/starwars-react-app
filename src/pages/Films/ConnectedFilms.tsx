import { connect } from 'react-redux';
import { Films } from './Films';
import {AppState} from "../../store/root.reducer";

const mapState = (state: AppState) => ({
  films: state.db.films,
});

const mapDispatch = {};

export const connector = connect(mapState, mapDispatch);

const ConnectedFilms = connect(mapState, mapDispatch)(Films);
export default ConnectedFilms;
