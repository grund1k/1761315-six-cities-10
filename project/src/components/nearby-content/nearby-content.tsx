import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchNearbyOffers } from '../../store/api-actions';
import { Offer } from '../../types/offer';
import Map from '../../components/map/map';
import LoadSpinner from '../load-spinner/load-spinner';
import OfferList from '../offer-list/offer-list';
import { PlaceType } from '../../const';
import { getNearbyOffers } from '../../store/property-data/selector';

type Props = {
  currentId: number;
}

const NearbyContent = ({currentId} : Props): JSX.Element => {
  const [activeOffer, setActiveOffer] = useState<null | Offer>(null);
  const nearbyOffers = useAppSelector(getNearbyOffers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNearbyOffers(currentId));
  }, [currentId, dispatch]);

  return(
    <>
      {nearbyOffers.length !== 0 ?
        <Map city={nearbyOffers[0].city} offers={nearbyOffers} activeOffer={activeOffer} elementClass={'property__map'}/>
        :
        <LoadSpinner />}
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          {nearbyOffers.length !== 0 ?
            <OfferList setActiveOffer={setActiveOffer} offers={nearbyOffers} listType={PlaceType.NearPlaces} />
            :
            <LoadSpinner />}
        </section>
      </div>
    </>
  );
};

export default NearbyContent;

