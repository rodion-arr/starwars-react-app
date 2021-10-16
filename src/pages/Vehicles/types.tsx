import { ConnectedProps } from 'react-redux';
import { connector } from './ConnectedVehicles';

type PropsFromRedux = ConnectedProps<typeof connector>;

export type VehiclesProps = PropsFromRedux;
