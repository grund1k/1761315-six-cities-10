import { Offer, Offers } from './types/offer';
import { sortOptions, sortOptionsUnion } from './const';

export class SortOffer {
  static options = sortOptions;

  static Popular = sortOptions[0];
  static PriceUp = sortOptions[1];
  static PriceDown = sortOptions[2];
  static TopRated = sortOptions[3];
  static defaultValue = SortOffer.Popular;

  static sortByPriceDown(offerA: Offer, offerB: Offer) {
    return offerB.price - offerA.price;
  }

  static sortByPriceUp(offerA: Offer, offerB: Offer) {
    return offerA.price - offerB.price;
  }

  static sortBuyRating(offerA: Offer, offerB: Offer) {
    return offerB.rating - offerA.rating;
  }

  static sortList(key: sortOptionsUnion, offers: Offers): Offers {
    switch(key) {
      case SortOffer.Popular :
        return offers;
      case SortOffer.PriceDown :
        return [...offers].sort(SortOffer.sortByPriceDown);
      case SortOffer.PriceUp :
        return [...offers].sort(SortOffer.sortByPriceUp);
      case SortOffer.TopRated :
        return [...offers].sort(SortOffer.sortBuyRating);
      default :
        return offers;
    }
  }
}
