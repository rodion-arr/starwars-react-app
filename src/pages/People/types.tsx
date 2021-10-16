import { ConnectedProps } from 'react-redux';
import { connector } from './ConnectedPeople';

type PropsFromRedux = ConnectedProps<typeof connector>;

export type PeopleProps = PropsFromRedux;
