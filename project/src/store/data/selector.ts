import { NameSpace } from '../../const';
import { useAppSelector } from '../../hooks';
import { Offers } from '../../types/offer';
import { State } from '../../types/store';

export const getMainData = (state: State): Offers => state[NameSpace.MainData].offers;
export const getOffersLoadingStatus = (state: State): boolean => state[NameSpace.MainData].isOffersLoaded;

export const useGetMainData = () => useAppSelector(getMainData);
export const useGetOffersLoadingStatus = () => useAppSelector(getOffersLoadingStatus);
