import { Link } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { useGetAuthStatus, useGetEmail } from './../../store/user-process/selector';
import { useGetFavouriteData } from './../../store/favorites/selector';

const Nav = ():JSX.Element => {
  const authorizationStatus = useGetAuthStatus();
  const favourites = useGetFavouriteData();
  const email = useGetEmail();

  return(
    <nav className="header__nav">
      {
        authorizationStatus === AuthStatus.Auth ?
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                <div className="header__avatar-wrapper user__avatar-wrapper">
                </div>
                <span className="header__user-name user__name">{email}</span>
                <span className="header__favorite-count">{favourites.length}</span>
              </Link>
            </li>
            <li className="header__nav-item">
              <Link className="header__nav-link" to={AppRoute.Logout}>
                <span className="header__signout">Sign out</span>
              </Link>
            </li>
          </ul>
          :
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                <div className="header__avatar-wrapper user__avatar-wrapper">
                </div>
                <span className="header__login">Sign in</span>
              </Link>
            </li>
          </ul>
      }
    </nav>
  );
};

export default Nav;
