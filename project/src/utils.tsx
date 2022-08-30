import { Offer, Offers } from './types/offer';
import { sortOptions, sortOptionsUnion, STAR_WIDTH } from './const';

export class OfferSorting {
  static options = sortOptions;

  static Popular = sortOptions[0];
  static PriceUp = sortOptions[1];
  static PriceDown = sortOptions[2];
  static TopRated = sortOptions[3];
  static defaultValue = OfferSorting.Popular;

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
      case OfferSorting.Popular :
        return offers;
      case OfferSorting.PriceDown :
        return [...offers].sort(OfferSorting.sortByPriceDown);
      case OfferSorting.PriceUp :
        return [...offers].sort(OfferSorting.sortByPriceUp);
      case OfferSorting.TopRated :
        return [...offers].sort(OfferSorting.sortBuyRating);
      default :
        return offers;
    }
  }
}

export const setFormError = (node: HTMLInputElement | HTMLTextAreaElement, patternError?: string) => {
  switch (true) {
    case node.validity.badInput: {
      node.setCustomValidity('Проверьте правильность заполненных данных');
      break;
    }
    case node.validity.patternMismatch: {
      if (patternError) {
        node.setCustomValidity(patternError);
      }
      break;
    }
    case node.validity.tooLong: {
      node.setCustomValidity('Привышено колчиество символов');
      break;
    }
    case node.validity.tooShort: {
      node.setCustomValidity('Недостаточно символов');
      break;
    }
    case node.validity.typeMismatch: {
      node.setCustomValidity('Проверьте правильность заполненных данных');
      break;
    }
    case node.validity.valueMissing: {
      node.setCustomValidity('Введите данные');
      break;
    }
    case node.validity.valid: {
      node.setCustomValidity('');
      break;
    }
    default: {
      node.setCustomValidity('');
    }
  }
  node.reportValidity();
  return node.validity.valid;
};

export class OfferElement {
  static isPremium(offer: Offer, place: string) {
    return offer.isPremium
      ? <div className={`${place}__mark`}><span>Premium</span></div>
      : null;
  }

  static setRatingWidth(offer: Offer) {
    return `${STAR_WIDTH * Math.round(offer.rating)}%`;
  }
}

