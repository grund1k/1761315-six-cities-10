import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_CITY_NAME, NameSpace } from '../../const';
import { City } from '../../types/store';

const initialState: City = {
  city: DEFAULT_CITY_NAME,
};

export const city = createSlice({
  name: NameSpace.City,
  initialState,
  reducers: {
    changeCity: (state, action) => {
      state.city = action.payload;
    }
  },
});

export const { changeCity } = city.actions;
