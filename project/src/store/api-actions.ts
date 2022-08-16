import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/store';
import { Offers } from '../types/offer';
import { setLoadOffersStatus, setError, loadOffers } from './action';
import { APIRoute, TIMEOUT_SHOW_ERROR } from '../const';
import { store } from '.';

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'loadOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setLoadOffersStatus(false));

    const response = await api.get<Offers>(APIRoute.Offers);
    if (response) {
      const {data} = response;
      dispatch(loadOffers(data));
      dispatch(setLoadOffersStatus(true));
    } else {
      dispatch(setLoadOffersStatus(false));
    }
  }
);
