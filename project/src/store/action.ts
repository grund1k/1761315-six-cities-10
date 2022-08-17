import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../const';

export const changeCity = createAction('changeCity', (value) => ({payload: value}));
export const loadOffers = createAction('loadOffers', (value) => ({payload: value}));
export const loadOffer = createAction('loadOffer', (value) => ({payload: value}));
export const setLoadOffersStatus = createAction('loadOffersStatus', (value) => ({payload: value}));
export const setError = createAction('setError', (value) => ({payload: value}));
export const requireAuthorization = createAction('requireAuthorization', (value) => ({payload: value}));
export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
