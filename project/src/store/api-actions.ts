import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/store';
import { Offer, Offers } from '../types/offer';
import { redirectToRoute } from './action';
import { APIRoute, AppRoute} from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { Token } from '../services/token';
import { ReviewFormData } from '../types/review/review-form-data';
import { ReviewData } from '../types/review/review-data';
import { Reviews } from '../types/review/reviews';
import { FavouriteStatusData } from '../types/favourite-status-data';

export const fetchOffersAction = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'mainData/loadOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offers>(APIRoute.Offers);
    return data;
  }
);

export const fetchOfferAction = createAsyncThunk<Offer, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'propertyData/loadOffer',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
    return data;
  },
);

export const fetchNearbyOffers = createAsyncThunk<Offers, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'propertyData/loadNearbyOffers',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Offers>(`${APIRoute.Offers}/${id}${APIRoute.Nearby}`);
    return data;
  },
);

export const fetchReviewsAction = createAsyncThunk<Reviews, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'propertyData/loadReviews',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Reviews>(`${APIRoute.Comments}/${id}`);
    return data;
  },
);


export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => await api.get(APIRoute.Login),
);

export const postReviewAction = createAsyncThunk<void, ReviewData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'postReview',
  async ({id, comment: {comment, rating}}, {dispatch, extra: api}) => {
    await api.post<ReviewFormData>(`${APIRoute.Comments}/${id}`, {rating, comment});
    dispatch(fetchReviewsAction(id));
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
    Token.saveToken(token);
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
    Token.dropToken();
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const fetchFavouriteOffers = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'favouriteData/loadFavouriteOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offers>(`${APIRoute.Favorites}`);
    return data;
  }
);

export const favouriteAction = createAsyncThunk<void, FavouriteStatusData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'favouriteData/setFavouriteStatus',
  async({id, favouriteStatus}, {dispatch, extra: api}) => {
    await api.post(`${APIRoute.Favorites}/${id}/${favouriteStatus}`);
    dispatch(fetchFavouriteOffers());
  }
);
