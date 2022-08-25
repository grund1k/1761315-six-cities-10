import { memo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type Props = {
  children?: JSX.Element;
}

const Header = ({children}: Props ):JSX.Element => {
  const currentLocation = useLocation();

  return(
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            {currentLocation.pathname !== AppRoute.Main ?
              <Link className="header__logo-link" to={AppRoute.Main}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
              :
              <div className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </div>}
          </div>
          {children}
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
