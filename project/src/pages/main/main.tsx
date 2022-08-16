import { useState } from 'react';
import OfferList from './../../components/offer-list/offer-list';
import Map from './../../components/map/map';
import {PlaceType, Cities, sortOptionsUnion} from '../../const';
import CitiesList from './../../components/cities-list/cities-list';
import { useAppSelector } from './../../hooks/index';
import Sort from './../../components/sort/sort';
import { SortOffer } from './../../utils';
import {Offer} from '../../types/offer';
import LoadSpinner from '../../components/load-spinner/load-spinner';
import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';

type Props = {
  cities: Cities;
}

const Main = ({cities}: Props): JSX.Element => {
  const {offers, city, isOffersLoaded} = useAppSelector((state) => state);
  const currentOffers = offers.filter((offer) => offer.city.name === city);
  const [sortingOption, setSortingOption] = useState<sortOptionsUnion>(SortOffer.Popular);

  const [activeOffer, setActiveOffer] = useState<null | Offer>(null);

  const sortedOffers = SortOffer.sortList(sortingOption, currentOffers);

  return(
    <div className="page page--gray page--main">
      <Header>
        <Nav />
      </Header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList cities={cities}/>
          </section>
        </div>
        {isOffersLoaded ?
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{currentOffers.length} places to stay in {city}</b>
                <Sort sortingOption={sortingOption} onOptionChange={setSortingOption}/>
                <OfferList setActiveOffer={setActiveOffer} offers={sortedOffers} listType={PlaceType.Cities}/>
              </section>
              <div className="cities__right-section">
                <Map city={currentOffers[0].city} offers={currentOffers} activeOffer={activeOffer} elementClass={'cities__map'}/>
              </div>
            </div>
          </div> : <LoadSpinner />}
      </main>
    </div>
  );
};

export default Main;
