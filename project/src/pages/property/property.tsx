import { useParams, Navigate } from 'react-router-dom';
import { Offers } from '../../types/offer';
import { AppRoute, PlaceType} from '../../const';
import ReviewForm from '../../components/review-form/review-form';
import ReviewList from '../../components/reviews-list/review-list';
import OfferList from '../../components/offer-list/offer-list';
import Map from '../../components/map/map';
import { Reviews } from '../../types/reviews';

type PropetyTypes = {
  offers: Offers;
  reviews: Reviews;
}

const Propety = ({offers, reviews} : PropetyTypes): JSX.Element => {
  const { id } = useParams();

  const currentRoom = offers.find((offer) => offer.id === Number(id));

  if (!currentRoom) {
    return <Navigate to={AppRoute.Error404} />;
  }

  const currentRoomType = (roomType: string): string => {
    const firstLetter = roomType[0].toUpperCase();
    const rest = roomType.slice(1);
    return `${firstLetter}${rest}`;
  };

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {currentRoom.images.map((image) => (
                <div key={image} className="property__image-wrapper">
                  <img className="property__image" src={image} alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                {currentRoom.isPremium ?
                  <div className="place-card__mark">
                    <span>Premium</span>
                  </div> : null}
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {currentRoom.title}
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
                <span className="property__rating-value rating__value">{currentRoom.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {currentRoomType(currentRoom.type)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {currentRoom.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {currentRoom.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{currentRoom.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {currentRoom.goods.map((good) => (
                    <li key={good} className="property__inside-item">
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${currentRoom.host.isPro ? 'property__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={currentRoom.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {currentRoom.host.name}
                  </span>
                  {currentRoom.host.isPro ?
                    <span className="property__user-status">
                      Pro
                    </span> : null}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {currentRoom.description}
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
          <Map city={offers[0].city} offers={offers.slice(0,3)} elementClass={'property__map'}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OfferList offers={offers.slice(0,3)} listType={PlaceType.NearPlaces} />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Propety;
