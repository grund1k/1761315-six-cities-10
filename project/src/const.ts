export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer',
  Logout = '/logout',
  Error404 = '*',
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const URL_MARKER_DEFAULT = 'img/pin.svg';
export const URL_MARKER_ACTIVE = 'img/pin-active.svg';

export enum PlaceType {
  Cities = 'cities',
  NearPlaces = 'near-places',
}

type ClassesList = {
  [key: string]: string;
}

export const PLACES_LIST_CLASSES: ClassesList = {
  'cities': 'cities__places-list tabs__content',
  'near-places': 'near-places__list',
};

export const DEFAULT_CITY_NAME = 'Paris';

export const cities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
] as const;

export type Cities = typeof cities;

export const SORT_OPTIONS = {
  Popular: 'Popular',
  PriceUp: 'Price: low to high',
  PriceDown: 'Price: high to low',
  TopRated: 'Top rated first',
};

export const sortOptions = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'] as const;
export type sortOptionsUnion = typeof sortOptions[number];

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Nearby = '/nearby',
  Comments = '/comments',
  Favorites = '/favorite'
}

export const patternErrors = ['Проверьте корректность введенного адреса электронной почты'] as const;
export type PatternErrorsUnion = typeof patternErrors;

export class PatternErrors {
  static EmailError = patternErrors[0];
}

export const STAR_WIDTH = 20;

export enum NameSpace {
  User = 'User',
  MainData = 'MainData',
  PropertyData = 'PropertyData',
  City = 'City',
  FavouritesData = 'FavouritesData'
}
