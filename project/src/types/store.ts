import {store} from '../store';
import {AuthStatus} from '../const';
import { Offer, Offers } from './offer';
import { Reviews } from './review/reviews';

export type UserProcess = {
  authStatus: AuthStatus
};

export type MainData = {
  offers: Offers | [];
  isOffersLoaded: boolean;
}

export type PropertyData = {
  offer: null | Offer,
  isOfferLoaded: boolean,
  nearbyOffers: Offers | [],
  isNearbyOffersLoaded: boolean,
  reviews: Reviews | [],
  isReviewsLoaded: boolean,
}

export type City = {
  city: string;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
