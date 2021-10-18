import { connect } from 'react-redux';
import { VehicleDetail } from './VehicleDetail';
import {AppState} from "../../store/root.reducer";

const mapState = (state: AppState) => ({
  people: state.db.people,
  films: state.db.films,
  vehicles: state.db.vehicles,
});

const mapDispatch = {};

export const connector = connect(mapState, mapDispatch);

const ConnectedVehicleDetail = connect(mapState, mapDispatch)(VehicleDetail);
export default ConnectedVehicleDetail;
