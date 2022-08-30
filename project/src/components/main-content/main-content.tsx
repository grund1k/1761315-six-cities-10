import { useMemo, useState } from 'react';
import { PlaceType, sortOptionsUnion } from '../../const';
import { Offer } from '../../types/offer';
import { OfferSorting } from '../../utils';
import LoadSpinner from '../load-spinner/load-spinner';
import OfferList from '../offer-list/offer-list';
import Sort from '../sort/sort';
import Map from './../../components/map/map';
import MainEmpty from './../main-empty/main-empty';
import { useGetCity } from './../../store/city/selector';
import { useGetMainData, useGetOffersLoadingStatus } from './../../store/data/selector';

const MainContent = (): JSX.Element => {
  const city = useGetCity();
  const offers = useGetMainData();
  const isOffersLoaded = useGetOffersLoadingStatus();
  const [sortingOption, setSortingOption] = useState<sortOptionsUnion>(OfferSorting.Popular);

  const [activeOffer, setActiveOffer] = useState<null | Offer>(null);

  const sortedOffers = useMemo(() => {
    const currentOffers = offers.filter((offer) => offer.city.name === city);
    return OfferSorting.sortList(sortingOption, currentOffers);
  }, [city, offers, sortingOption]);

  if (isOffersLoaded && !sortedOffers.length) {
    return(<MainEmpty />);
  }

  return(
    (isOffersLoaded && sortedOffers.length) ?
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{sortedOffers.length} places to stay in {city}</b>
            <Sort sortingOption={sortingOption} onOptionChange={setSortingOption}/>
            <OfferList setActiveOffer={setActiveOffer} offers={sortedOffers} listType={PlaceType.Cities}/>
          </section>
          <div className="cities__right-section">
            <Map city={sortedOffers[0].city} offers={sortedOffers} activeOffer={activeOffer} elementClass={'cities__map'}/>
          </div>
        </div>
      </div>
      :
      <LoadSpinner />
  );
};

export default MainContent;
