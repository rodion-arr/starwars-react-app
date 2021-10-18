import { connect } from 'react-redux';
import { SpecieDetail } from './SpecieDetail';
import {AppState} from "../../store/root.reducer";

const mapState = (state: AppState) => ({
  people: state.db.people,
  planets: state.db.planets,
  films: state.db.films,
  species: state.db.species,
});

const mapDispatch = {};

export const connector = connect(mapState, mapDispatch);

const ConnectedSpecieDetail = connect(mapState, mapDispatch)(SpecieDetail);
export default ConnectedSpecieDetail;
