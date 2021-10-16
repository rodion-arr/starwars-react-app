import { connect } from 'react-redux';
import { Starships } from './Starships';
import {AppState} from "../../store/root.reducer";

const mapState = (state: AppState) => ({
  starships: state.db.starships,
});

const mapDispatch = {};

export const connector = connect(mapState, mapDispatch);

const ConnectedStarships = connect(mapState, mapDispatch)(Starships);
export default ConnectedStarships;
