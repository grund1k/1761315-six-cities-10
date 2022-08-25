import {combineReducers} from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { mainData } from './data/data';
import { userProcess } from './user-process/user-process';
import { propertyData } from './property-data/property-data';
import { city } from './city/city-process';
import { favouritesData } from './favorites/favourites-data';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.MainData]: mainData.reducer,
  [NameSpace.PropertyData]: propertyData.reducer,
  [NameSpace.City]: city.reducer,
  [NameSpace.FavouritesData]: favouritesData.reducer
});
