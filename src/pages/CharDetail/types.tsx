import { ConnectedProps } from 'react-redux';
import { connector } from './ConnectedCharDetail';

type PropsFromRedux = ConnectedProps<typeof connector>;

export type CharDetailProps = PropsFromRedux;
