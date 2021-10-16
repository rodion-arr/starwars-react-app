import { connect } from 'react-redux';
import { People } from './People';
import {AppState} from "../../store/root.reducer";

const mapState = (state: AppState) => ({
  people: state.db.people,
});

const mapDispatch = {};

export const connector = connect(mapState, mapDispatch);

const ConnectedPeople = connect(mapState, mapDispatch)(People);
export default ConnectedPeople;
