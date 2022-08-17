import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Offers, Offer } from '../../types/offer';
import { AppRoute, PlaceType} from '../../const';
import ReviewForm from '../../components/review-form/review-form';
import ReviewList from '../../components/reviews-list/review-list';
import OfferList from '../../components/offer-list/offer-list';
import Map from '../../components/map/map';
import { Reviews } from '../../types/reviews';
import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import { useAppSelector } from '../../hooks';
import { useAppDispatch } from './../../hooks/index';
import { fetchOfferAction } from '../../store/api-actions';
import LoadSpinner from '../../components/load-spinner/load-spinner';

type PropetyTypes = {
  offers: Offers;
  reviews: Reviews;
}

const Propety = ({offers, reviews} : PropetyTypes): JSX.Element => {
  const { id } = useParams();
  const currentId = Number(id);
  const {offer, isOffersLoaded} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const [activeOffer, setActiveOffer] = useState<null | Offer>(null);

  useEffect(() => {
    dispatch(fetchOfferAction(currentId));
  }, [currentId, dispatch]);

  const offerType = (roomType: string): string => {
    const firstLetter = roomType[0].toUpperCase();
    const rest = roomType.slice(1);
    return `${firstLetter}${rest}`;
  };


  return (
    <div className="page">
      <Header>
        <Nav />
      </Header>

      <main className="page__main page__main--property">
        {offer && isOffersLoaded ?
          <>
            <section className="property">
              <div className="property__gallery-container container">
                <div className="property__gallery">
                  {offer.images.map((image) => (
                    <div key={image} className="property__image-wrapper">
                      <img className="property__image" src={image} alt="Photo studio" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="property__container container">
                <div className="property__wrapper">
                  <div className="property__mark">
                    {offer.isPremium ?
                      <div className="place-card__mark">
                        <span>Premium</span>
                      </div> : null}
                  </div>
                  <div className="property__name-wrapper">
                    <h1 className="property__name">
                      {offer.title}
                    </h1>
                    <button className="property__bookmark-button button" type="button">
                      <svg className="property__bookmark-icon" width="31" height="33">
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                      <span className="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div className="property__rating rating">
                    <div className="property__stars rating__stars">
                      <span style={{width: '80%'}}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                    <span className="property__rating-value rating__value">{offer.rating}</span>
                  </div>
                  <ul className="property__features">
                    <li className="property__feature property__feature--entire">
                      {offerType(offer.type)}
                    </li>
                    <li className="property__feature property__feature--bedrooms">
                      {offer.bedrooms} Bedrooms
                    </li>
                    <li className="property__feature property__feature--adults">
                      Max {offer.maxAdults} adults
                    </li>
                  </ul>
                  <div className="property__price">
                    <b className="property__price-value">&euro;{offer.price}</b>
                    <span className="property__price-text">&nbsp;night</span>
                  </div>
                  <div className="property__inside">
                    <h2 className="property__inside-title">What&apos;s inside</h2>
                    <ul className="property__inside-list">
                      {offer.goods.map((good) => (
                        <li key={good} className="property__inside-item">
                          {good}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="property__host">
                    <h2 className="property__host-title">Meet the host</h2>
                    <div className="property__host-user user">
                      <div className={`property__avatar-wrapper ${offer.host.isPro ? 'property__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                        <img className="property__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                      </div>
                      <span className="property__user-name">
                        {offer.host.name}
                      </span>
                      {offer.host.isPro ?
                        <span className="property__user-status">
                          Pro
                        </span> : null}
                    </div>
                    <div className="property__description">
                      <p className="property__text">
                        {offer.description}
                      </p>
                    </div>
                  </div>
                  <section className="property__reviews reviews">
                    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                    <ReviewList reviews={reviews}/>
                    <ReviewForm />
                  </section>
                </div>
              </div>
              {/* <Map city={offers[0].city} offers={offers.slice(0,3)} activeOffer={activeOffer} elementClass={'property__map'}/> */}
            </section>
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                {/* <OfferList setActiveOffer={setActiveOffer} offers={offers.slice(0,3)} listType={PlaceType.NearPlaces} /> */}
              </section>
            </div>
          </>
          :
          <div className="container">
            <LoadSpinner />
          </div>}
      </main>
    </div>
  );
};

export default Propety;
