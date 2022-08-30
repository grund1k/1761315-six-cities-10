import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FetchStatus } from '../../const';
import { useGetFavouriteData, useGetStatus } from '../../store/favorites/selector';
import FavouriteCard from '../favourite-card/favourite-card';
import FavouriteEmpty from '../favourite-empty/favourite-emty';
import LoadSpinner from './../load-spinner/load-spinner';

const FavoriteContent = () : JSX.Element => {
  const status = useGetStatus();
  const favoriteOffers = useGetFavouriteData();
  const favoriteOffersCities = useMemo(() => [...new Set(favoriteOffers.map((offer) => offer.city.name))], [favoriteOffers]);

  if (status === FetchStatus.Pending) {
    return <LoadSpinner /> ;
  }

  if (status === FetchStatus.Success && favoriteOffers.length > 0) {
    return(
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          {favoriteOffersCities.map((city) =>(
            <li key={city} className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <Link className="locations__item-link" to={`#${city}`}>
                    <span>{city}</span>
                  </Link>
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
    );
  }

  return(<FavouriteEmpty />);
};

export default FavoriteContent;
