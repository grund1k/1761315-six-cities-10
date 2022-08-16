import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction('changeCity', (value) => ({payload: value}));
export const loadOffers = createAction('loadOffers', (value) => ({payload: value}));
export const setLoadOffersStatus = createAction('loadOffersStatus', (value) => ({payload: value}));
export const setError = createAction('setError', (value) => ({payload: value}));
