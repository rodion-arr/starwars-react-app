import { connect } from 'react-redux';
import { Planets } from './Planets';
import {AppState} from "../../store/root.reducer";

const mapState = (state: AppState) => ({
  planets: state.db.planets,
});

const mapDispatch = {};

export const connector = connect(mapState, mapDispatch);

const ConnectedPlanets = connect(mapState, mapDispatch)(Planets);
export default ConnectedPlanets;
