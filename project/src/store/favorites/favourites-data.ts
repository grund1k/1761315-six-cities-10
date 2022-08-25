import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FavouriteData } from '../../types/store';
import { fetchFavouriteOffers } from '../api-actions';

const initialState: FavouriteData = {
  favouriteOffers: [],
  isFavouriteOffersLoaded: false,
};

export const favouritesData = createSlice({
  name: NameSpace.FavouritesData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavouriteOffers.pending, (state) => {
        state.isFavouriteOffersLoaded = false;
      })
      .addCase(fetchFavouriteOffers.rejected, (state) => {
        state.isFavouriteOffersLoaded = true;
      })
      .addCase(fetchFavouriteOffers.fulfilled, (state, action) => {
        state.isFavouriteOffersLoaded = true;
        state.favouriteOffers = action.payload;
      });
  }
});
