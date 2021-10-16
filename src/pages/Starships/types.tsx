import { ConnectedProps } from 'react-redux';
import { connector } from './ConnectedStarships';

type PropsFromRedux = ConnectedProps<typeof connector>;

export type StarshipsProps = PropsFromRedux;
