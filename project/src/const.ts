export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer',
  Error404 = '*',
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const URL_MARKER_DEFAULT = 'img/pin.svg';

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

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

export const SORT_OPTIONS = {
  Popular: 'Popular',
  PriceUp: 'Price: low to high',
  PriceDown: 'Price: high to low',
  TopRated: 'Top rated first',
};

