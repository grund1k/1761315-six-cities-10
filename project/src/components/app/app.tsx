import {Route, Routes} from 'react-router-dom';
import {AppRoute, Cities} from '../../const';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import Favorites from './../../pages/favorites/favorites';
import Property from '../../pages/property/property';
import Error404 from '../../pages/error404/error404';
import PrivateRoute from '../../components/private-router/private-route';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import Logout from '../logout/logout';
import { useGetAuthStatus } from './../../store/user-process/selector';

type Props = {
  cities: Cities;
}

const App = ({ cities}: Props): JSX.Element => {
  const authorizationStatus = useGetAuthStatus();

  return(
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<Main cities={cities}/>} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Favorites} element={<PrivateRoute authStatus={authorizationStatus}><Favorites /></PrivateRoute>} />
        <Route path={`${AppRoute.Room}/:id`} element={<Property/>} />
        <Route path={AppRoute.Logout} element={<Logout />}/>
        <Route path='*' element={<Error404 />} />
      </Routes>
    </HistoryRouter>
  );
};

export default App;
