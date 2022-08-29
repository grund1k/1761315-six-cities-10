import { useEffect } from 'react';
import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import FavoriteContent from '../../components/favourite-content/favourite-content';
import { fetchFavouriteOffers } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks';

const Favorites = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavouriteOffers());
  }, [dispatch]);

  return(
    <div className="page">
      <Header>
        <Nav />
      </Header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <FavoriteContent />
        </div>
      </main>

      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
};

export default Favorites;
