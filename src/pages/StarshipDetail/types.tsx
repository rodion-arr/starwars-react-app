import { ConnectedProps } from 'react-redux';
import { connector } from './ConnectedStarshipDetail';

type PropsFromRedux = ConnectedProps<typeof connector>;

export type StarshipDetailProps = PropsFromRedux;
