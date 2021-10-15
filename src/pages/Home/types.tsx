import { ConnectedProps } from 'react-redux';
import { connector } from './ConnectedHome';

type PropsFromRedux = ConnectedProps<typeof connector>;

export type HomeProps = PropsFromRedux;
