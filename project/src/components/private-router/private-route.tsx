import {AuthStatus, AppRoute} from '../../const';
import {Navigate} from 'react-router-dom';

type PrivateRouteProps = {
  authStatus: AuthStatus;
  children: JSX.Element;
}

const PrivateRoute = ({authStatus, children}: PrivateRouteProps): JSX.Element => (
  authStatus === AuthStatus.Auth ? children : <Navigate to={AppRoute.Login} />
);

export default PrivateRoute;
