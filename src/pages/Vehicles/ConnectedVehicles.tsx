import { connect } from 'react-redux';
import { Vehicles } from './Vehicles';
import {AppState} from "../../store/root.reducer";

const mapState = (state: AppState) => ({
  vehicles: state.db.vehicles,
});

const mapDispatch = {};

export const connector = connect(mapState, mapDispatch);

const ConnectedVehicles = connect(mapState, mapDispatch)(Vehicles);
export default ConnectedVehicles;
