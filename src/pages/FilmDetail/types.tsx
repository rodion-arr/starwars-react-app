import { ConnectedProps } from 'react-redux';
import { connector } from './ConnectedFilmDetail';

type PropsFromRedux = ConnectedProps<typeof connector>;

export type FilmDetailProps = PropsFromRedux;
