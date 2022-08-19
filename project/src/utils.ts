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
  return node;
};
