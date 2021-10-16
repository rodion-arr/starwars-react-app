import { ConnectedProps } from 'react-redux';
import { connector } from './ConnectedPlanetDetail';

type PropsFromRedux = ConnectedProps<typeof connector>;

export type PlanetDetailProps = PropsFromRedux;
