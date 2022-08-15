import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CITY_NAME } from '../const';
import { Offers } from '../types/offer';
import { changeCity, loadOffers, setLoadOffersStatus, setError} from './action';

type initialStateType = {
  city: string;
  offers: Offers | [];
  isOffersLoaded: boolean;
  error: string | null;
}

const initialState: initialStateType = {
  city: DEFAULT_CITY_NAME,
  offers: [],
  isOffersLoaded: false,
  error: null
};


export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setLoadOffersStatus, (state, action) => {
      state.isOffersLoaded = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});
