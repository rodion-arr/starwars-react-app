import { ConnectedProps } from 'react-redux';
import { connector } from './ConnectedSpecieDetail';

type PropsFromRedux = ConnectedProps<typeof connector>;

export type SpecieDetailProps = PropsFromRedux;
