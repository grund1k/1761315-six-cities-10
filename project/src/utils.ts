import { Offer, Offers } from './types/offer';
import { SORT_OPTIONS } from './const';

const sortByPriceDown = (offerA: Offer, offerB: Offer) => offerB.price - offerA.price;

const sortByPriceUp = (offerA: Offer, offerB: Offer) => offerA.price - offerB.price;

const sortByRating = (offerA: Offer, offerB: Offer) => offerB.rating - offerA.rating;

export const sortOffers = (offers: Offers, currentSortOption: string | undefined) => {
  switch(currentSortOption) {
    case SORT_OPTIONS.Popular:
      return offers;
    case SORT_OPTIONS.PriceDown:
      return [...offers].sort(sortByPriceDown);
    case SORT_OPTIONS.PriceUp:
      return [...offers].sort(sortByPriceUp);
    case SORT_OPTIONS.TopRated:
      return [...offers].sort(sortByRating);
    default:
      return offers;
  }
};
