import { ConnectedProps } from 'react-redux';
import { connector } from './ConnectedPlanets';

type PropsFromRedux = ConnectedProps<typeof connector>;

export type PlanetsProps = PropsFromRedux;
