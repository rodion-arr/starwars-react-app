import { connect } from 'react-redux';
import { StarshipDetail } from './StarshipDetail';
import {AppState} from "../../store/root.reducer";

const mapState = (state: AppState) => ({
  people: state.db.people,
  films: state.db.films,
  starships: state.db.starships,
});

const mapDispatch = {};

export const connector = connect(mapState, mapDispatch);

const ConnectedStarshipDetail = connect(mapState, mapDispatch)(StarshipDetail);
export default ConnectedStarshipDetail;
