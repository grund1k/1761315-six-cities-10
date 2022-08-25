import { NameSpace } from '../../const';
import { useAppSelector } from '../../hooks';
import { Offers } from '../../types/offer';
import { State } from '../../types/store';

export const getFavouriteData = (state: State): Offers => state[NameSpace.FavouritesData].favouriteOffers;
export const getFavouriteLoadingStatus = (state: State): boolean => state[NameSpace.FavouritesData].isFavouriteOffersLoaded;

export const useGetFavouriteData = () => useAppSelector(getFavouriteData);
export const useGetFavouriteOffersLoadingStatus = () => useAppSelector(getFavouriteLoadingStatus);
