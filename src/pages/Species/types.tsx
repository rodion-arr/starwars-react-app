import { ConnectedProps } from 'react-redux';
import { connector } from './ConnectedSpecies';

type PropsFromRedux = ConnectedProps<typeof connector>;

export type SpeciesProps = PropsFromRedux;
