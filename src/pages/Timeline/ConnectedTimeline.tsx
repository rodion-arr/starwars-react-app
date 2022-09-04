import { connect } from 'react-redux';
import { Timeline } from './Timeline';
import {AppState} from "../../store/root.reducer";

const mapState = (state: AppState) => ({
  timeline: state.db.timeline,
});

const mapDispatch = {};

export const connector = connect(mapState, mapDispatch);

const ConnectedTimeline = connect(mapState, mapDispatch)(Timeline);
export default ConnectedTimeline;
