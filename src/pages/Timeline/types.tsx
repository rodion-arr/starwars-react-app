import { ConnectedProps } from 'react-redux';
import { connector } from './ConnectedTimeline';

type PropsFromRedux = ConnectedProps<typeof connector>;

export type TimelineProps = PropsFromRedux;
