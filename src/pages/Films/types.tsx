import { ConnectedProps } from 'react-redux';
import { connector } from './ConnectedFilms';

type PropsFromRedux = ConnectedProps<typeof connector>;

export type FilmsProps = PropsFromRedux;
