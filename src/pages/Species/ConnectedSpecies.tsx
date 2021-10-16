import { connect } from 'react-redux';
import { Species } from './Species';
import {AppState} from "../../store/root.reducer";

const mapState = (state: AppState) => ({
  species: state.db.species,
});

const mapDispatch = {};

export const connector = connect(mapState, mapDispatch);

const ConnectedSpecies = connect(mapState, mapDispatch)(Species);
export default ConnectedSpecies;
