import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/store';
import { Offer, Offers } from '../types/offer';
import { setLoadOffersStatus, setError, loadOffers, requireAuthorization,redirectToRoute, loadOffer } from './action';
import { APIRoute, AppRoute, AuthStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { store } from '.';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';

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

export const fetchOfferAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'loadOffer',
  async (id, {dispatch, extra: api}) => {
    dispatch(setLoadOffersStatus(false));

    try {
      const {data} = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
      dispatch(loadOffer(data));
      dispatch(setLoadOffersStatus(true));
    } catch {
      dispatch(redirectToRoute(AppRoute.Error404));
    }
  },
);


export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: { token }} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthStatus.NoAuth));
  },
);
