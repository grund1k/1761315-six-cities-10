import {Offer} from '../../types/offer';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import BookmarkButton from '../bookmark-button/bookmark-button';

type FavoriteCardProp = {
  offer: Offer;
}

const FavouriteCard = ({offer}:FavoriteCardProp) :JSX.Element => (
  <article className="favorites__card place-card">
    {offer.isPremium ?
      <div className="place-card__mark">
        <span>Premium</span>
      </div> : null}
    <div className="favorites__image-wrapper place-card__image-wrapper">
      <Link to={`${AppRoute.Room}/${offer.id}`}>
        <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt={offer.title} />
      </Link>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{offer.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <BookmarkButton id={offer.id} classPrefix="place-card"/>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: '80%'}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={`${AppRoute.Room}/${offer.id}`}>{offer.title}</Link>
      </h2>
      <p className="place-card__type">{offer.type}</p>
    </div>
  </article>
);

export default FavouriteCard;
