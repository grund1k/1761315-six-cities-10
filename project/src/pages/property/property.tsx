import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {AuthStatus} from '../../const';
import ReviewForm from '../../components/review-form/review-form';
import ReviewList from '../../components/reviews-list/review-list';
import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import { useAppDispatch } from './../../hooks/index';
import { fetchOfferAction, fetchReviewsAction } from '../../store/api-actions';
import LoadSpinner from '../../components/load-spinner/load-spinner';
import { OfferElement } from '../../utils';
import NearbyContent from '../../components/nearby-content/nearby-content';
import { useGetOffer, useGetOfferLoadingStatus, useGetReviews, useGetReviewsStatus } from './../../store/property-data/selector';
import { useGetAuthStatus } from './../../store/user-process/selector';
import BookmarkButton from './../../components/bookmark-button/bookmark-button';

const Propety = (): JSX.Element => {
  const { id } = useParams();
  const currentId = Number(id);
  const offer = useGetOffer();
  const isOfferLoaded = useGetOfferLoadingStatus();
  const authorizationStatus = useGetAuthStatus();
  const reviews = useGetReviews();
  const isReviewsLoaded = useGetReviewsStatus();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOfferAction(currentId));
    dispatch(fetchReviewsAction(currentId));
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
        {offer && isOfferLoaded ?
          <>
            <section className="property">
              <div className="property__gallery-container container">
                <div className="property__gallery">
                  {offer.images.slice(0, 6).map((image) => (
                    <div key={image} className="property__image-wrapper">
                      <img className="property__image" src={image} alt={offer.title} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="property__container container">
                <div className="property__wrapper">
                  {OfferElement.isPremium(offer, 'property')}
                  <div className="property__name-wrapper">
                    <h1 className="property__name">
                      {offer.title}
                    </h1>
                    <BookmarkButton id={offer.id} classPrefix='property'/>
                  </div>
                  <div className="property__rating rating">
                    <div className="property__stars rating__stars">
                      <span style={{width: OfferElement.setRatingWidth(offer)}}></span>
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
                    {reviews.length !== 0 && isReviewsLoaded ?
                      <ReviewList reviews={reviews}/>
                      :
                      <LoadSpinner />}
                    {authorizationStatus === AuthStatus.Auth ?
                      <ReviewForm id={currentId}/>
                      :
                      null}
                  </section>
                </div>
              </div>
            </section>
            <NearbyContent currentId={currentId} activeOffer={offer}/>
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
