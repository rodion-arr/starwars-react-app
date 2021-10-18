import { connect } from 'react-redux';
import { PlanetDetail } from './PlanetDetail';
import {AppState} from "../../store/root.reducer";

const mapState = (state: AppState) => ({
  people: state.db.people,
  planets: state.db.planets,
  films: state.db.films,
});

const mapDispatch = {};

export const connector = connect(mapState, mapDispatch);

const ConnectedPlanetDetail = connect(mapState, mapDispatch)(PlanetDetail);
export default ConnectedPlanetDetail;
