import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CITY_NAME, AuthStatus} from '../const';
import { Offer, Offers } from '../types/offer';
import { changeCity, loadOffers, setLoadOffersStatus, setError, requireAuthorization, loadOffer} from './action';

type initialStateType = {
  city: string;
  offers: Offers | [];
  offer: Offer | null;
  isOffersLoaded: boolean;
  error: string | null;
  authorizationStatus: AuthStatus;
}

const initialState: initialStateType = {
  city: DEFAULT_CITY_NAME,
  offers: [],
  offer: null,
  isOffersLoaded: false,
  error: null,
  authorizationStatus: AuthStatus.Unknown
};


export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(setLoadOffersStatus, (state, action) => {
      state.isOffersLoaded = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});
