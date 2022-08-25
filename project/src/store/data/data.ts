import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { MainData } from '../../types/store';
import { fetchOffersAction } from '../api-actions';

const initialState: MainData = {
  offers: [],
  isOffersLoaded: false,
};

export const mainData = createSlice({
  name: NameSpace.MainData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersLoaded = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.isOffersLoaded = true;
        state.offers = action.payload;
      });
  }
});
