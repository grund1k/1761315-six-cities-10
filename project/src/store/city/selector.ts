import { NameSpace } from '../../const';
import { State } from '../../types/store';

export const getCity = (state: State): string => state[NameSpace.City].city;
