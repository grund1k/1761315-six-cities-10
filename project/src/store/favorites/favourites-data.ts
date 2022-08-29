import { createSlice } from '@reduxjs/toolkit';
import { FetchStatus, NameSpace } from '../../const';
import { FavouriteData } from '../../types/store';
import { fetchFavouriteOffers } from '../api-actions';

const initialState: FavouriteData = {
  favouriteOffers: [],
  isFavouriteOffersLoaded: false,
  status: FetchStatus.Idle
};

export const favouritesData = createSlice({
  name: NameSpace.FavouritesData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavouriteOffers.pending, (state) => {
        state.isFavouriteOffersLoaded = false;
        state.status = FetchStatus.Pending;
      })
      .addCase(fetchFavouriteOffers.rejected, (state) => {
        state.isFavouriteOffersLoaded = true;
        state.status = FetchStatus.Rejected;
      })
      .addCase(fetchFavouriteOffers.fulfilled, (state, action) => {
        state.isFavouriteOffersLoaded = true;
        state.favouriteOffers = action.payload;
        state.status = FetchStatus.Success;
      });
  }
});
