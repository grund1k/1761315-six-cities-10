import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CITY_NAME } from '../const';
import { offers } from './../mocks/offers';
import { changeCity, loadOffers } from './action';

const initialState = {
  city: DEFAULT_CITY_NAME,
  offers: offers,
};


export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    });
});

