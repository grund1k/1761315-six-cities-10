import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { PropertyData } from '../../types/store';
import { fetchNearbyOffers, fetchOfferAction, fetchReviewsAction, postReviewAction } from '../api-actions';

const initialState: PropertyData = {
  offer: null,
  isOfferLoaded: false,
  nearbyOffers: [],
  isNearbyOffersLoaded: false,
  reviews: [],
  isReviewsLoaded: false,
  isReviewFormPending: false,
};


export const propertyData = createSlice({
  name: NameSpace.PropertyData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.isOfferLoaded = true;
        state.offer = action.payload;
      })
      .addCase(fetchOfferAction.pending, (state) => {
        state.isOfferLoaded = false;
      })
      .addCase(fetchNearbyOffers.fulfilled, (state, action) => {
        state.isNearbyOffersLoaded = true;
        state.nearbyOffers = action.payload;
      })
      .addCase(fetchNearbyOffers.pending, (state) => {
        state.isNearbyOffersLoaded = false;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.isReviewsLoaded = true;
        state.reviews = action.payload;
      })
      .addCase(fetchReviewsAction.pending, (state) => {
        state.isReviewsLoaded = false;
      })
      .addCase(postReviewAction.pending, (state) => {
        state.isReviewFormPending = true;
      })
      .addCase(postReviewAction.fulfilled, (state) => {
        state.isReviewFormPending = false;
      })
      .addCase(postReviewAction.rejected, (state) => {
        state.isReviewFormPending = false;
      });
  }
});
