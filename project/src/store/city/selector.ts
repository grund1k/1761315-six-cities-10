import { NameSpace } from '../../const';
import { State } from '../../types/store';
import { useAppSelector } from '../../hooks';

export const getCity = (state: State): string => state[NameSpace.City].city;

export const useGetCity = () => useAppSelector(getCity);
