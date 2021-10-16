import { ConnectedProps } from 'react-redux';
import { connector } from './ConnectedVehicleDetail';

type PropsFromRedux = ConnectedProps<typeof connector>;

export type VehicleDetailProps = PropsFromRedux;
