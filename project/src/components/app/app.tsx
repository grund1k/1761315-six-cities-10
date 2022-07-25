import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../const';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import Favorites from './../../pages/favorites/favorites';
import Propety from '../../pages/property/property';
import Error404 from '../../pages/error404/error404';
import PrivateRoute from '../private-router/private-route';
import {Offers} from '../../types/offer';

type AppScreenProps = {
  rentalOffersCount: number;
  offers: Offers;
}

const App = ({rentalOffersCount, offers}: AppScreenProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Main} element={<Main rentalOffersCount={rentalOffersCount} offers={offers}/>} />
      <Route path={AppRoute.Login} element={<Login />} />
      <Route path={AppRoute.Favorites} element={<PrivateRoute authStatus={AuthStatus.NoAuth}><Favorites /></PrivateRoute>} />
      <Route path={AppRoute.Room} element={<Propety />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  </BrowserRouter>
);

export default App;
