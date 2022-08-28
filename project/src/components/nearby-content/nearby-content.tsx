import { useEffect} from 'react';
import { useAppDispatch } from '../../hooks';
import { fetchNearbyOffers } from '../../store/api-actions';
import Map from '../../components/map/map';
import LoadSpinner from '../load-spinner/load-spinner';
import OfferList from '../offer-list/offer-list';
import { PlaceType } from '../../const';
import { useGetNearbyOffers } from '../../store/property-data/selector';
import { Offer } from '../../types/offer';

type Props = {
  activeOffer: Offer;
  currentId: number;
}

const NearbyContent = ({currentId, activeOffer} : Props): JSX.Element => {
  const nearbyOffers = useGetNearbyOffers();
  const offers = [...nearbyOffers, activeOffer];
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNearbyOffers(currentId));
  }, [currentId, dispatch]);

  return(
    <>
      {nearbyOffers.length !== 0 ?
        <Map city={nearbyOffers[0].city} activeOffer={activeOffer} offers={offers} elementClass={'property__map'}/>
        :
        <LoadSpinner />}
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          {nearbyOffers.length !== 0 ?
            <OfferList offers={nearbyOffers} listType={PlaceType.NearPlaces} />
            :
            <LoadSpinner />}
        </section>
      </div>
    </>
  );
};

export default NearbyContent;

