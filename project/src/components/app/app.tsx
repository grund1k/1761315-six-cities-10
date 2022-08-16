import {Route, Routes} from 'react-router-dom';
import {AppRoute, Cities} from '../../const';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import Favorites from './../../pages/favorites/favorites';
import Property from '../../pages/property/property';
import Error404 from '../../pages/error404/error404';
import PrivateRoute from '../private-router/private-route';
import { Reviews } from '../../types/reviews';
import { useAppSelector } from '../../hooks';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

type Props = {
  reviews: Reviews;
  cities: Cities;
}

const App = ({reviews, cities}: Props): JSX.Element => {
  const {authorizationStatus, offers} = useAppSelector((state) => state); // Пока остается временно для Property
  return(
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<Main cities={cities}/>} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Favorites} element={<PrivateRoute authStatus={authorizationStatus}><Favorites offers={offers} /></PrivateRoute>} />
        <Route path={`${AppRoute.Room}/:id`} element={<Property offers={offers} reviews={reviews}/>} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </HistoryRouter>
  );
};

export default App;
