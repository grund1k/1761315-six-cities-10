import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../const';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import Favorites from './../../pages/favorites/favorites';
import Property from '../../pages/property/property';
import Error404 from '../../pages/error404/error404';
import PrivateRoute from '../private-router/private-route';
import { Offers } from '../../types/offer';
import { Reviews } from '../../types/reviews';

type Props = {
  rentalOffersCount: number;
  offers: Offers;
  reviews: Reviews;
  cities: string[];
}

const App = ({rentalOffersCount, offers, reviews, cities}: Props): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Main} element={<Main rentalOffersCount={rentalOffersCount} offers={offers} cities={cities}/>} />
      <Route path={AppRoute.Login} element={<Login />} />
      <Route path={AppRoute.Favorites} element={<PrivateRoute authStatus={AuthStatus.Auth}><Favorites offers={offers} /></PrivateRoute>} />
      <Route path={`${AppRoute.Room}/:id`} element={<Property offers={offers} reviews={reviews}/>} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  </BrowserRouter>
);

export default App;
