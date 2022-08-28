import { Link } from 'react-router-dom';
import {AppRoute} from '../../const';
import {Offer} from '../../types/offer';
import { OfferElement } from '../../utils';
import BookmarkButton from '../bookmark-button/bookmark-button';

type PlaceCardProps = {
  offer : Offer;
  onMouseOver?: (offer: Offer) => void;
  listType: string;
}

const PlaceCard = ({offer, onMouseOver, listType} : PlaceCardProps) :JSX.Element => (
  <article className={`${listType}__card place-card`} onMouseOver={() => onMouseOver ? onMouseOver(offer) : null}>
    {OfferElement.isPremium(offer, 'place-card')}
    <div className={`${listType}__image-wrapper place-card__image-wrapper`}>
      <a href="#">
        <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt={offer.title} />
      </a>
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
          <span style={{width: OfferElement.setRatingWidth(offer)}}></span>
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

export default PlaceCard;
