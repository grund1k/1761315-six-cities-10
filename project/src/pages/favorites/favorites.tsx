import { useEffect } from 'react';
import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import { fetchFavouriteOffers } from '../../store/api-actions';
import { useGetFavouriteData } from '../../store/favorites/selector';
// import { Offers } from '../../types/offer';
import FavouriteCard from './../../components/favourite-card/favourite-card';
import { useAppDispatch } from './../../hooks/index';

// type FavoritesProps = {
//   offers: Offers;
// }

const Favorites = (): JSX.Element => {
  const favoriteOffers = useGetFavouriteData();
  const dispatch = useAppDispatch();
  // const offersFavorite = offers.filter((offer) => offer.isFavorite);
  const favoriteOffersCities = [...new Set(favoriteOffers.map((offer) => offer.city.name))];

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
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoriteOffersCities.map((city) =>(
                <li key={city} className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {favoriteOffers
                      .filter((offer) => city === offer.city.name)
                      .map((offer) => <FavouriteCard key={offer.id} offer={offer} />)}
                  </div>
                </li>
              ))}
            </ul>
          </section>
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
