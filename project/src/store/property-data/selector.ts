import { NameSpace } from '../../const';
import { Offer, Offers } from '../../types/offer';
import { Reviews } from '../../types/review/reviews';
import { State } from '../../types/store';

export const getOffer = (state: State): Offer | null=> state[NameSpace.PropertyData].offer;
export const getOfferLoadingStatus = (state: State): boolean => state[NameSpace.PropertyData].isOfferLoaded;
export const getNearbyOffers = (state: State): Offers=> state[NameSpace.PropertyData].nearbyOffers;
export const getNearbyOffersStatus = (state: State): boolean => state[NameSpace.PropertyData].isNearbyOffersLoaded;
export const getReviews = (state: State): Reviews=> state[NameSpace.PropertyData].reviews;
export const getReviewsStatus = (state: State): boolean => state[NameSpace.PropertyData].isReviewsLoaded;
