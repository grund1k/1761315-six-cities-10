import {Offers} from '../../types/offer';
import PlaceCard from './../place-card/place-card';

type OfferListProps = {
  offers: Offers;
}

const OfferList = ({offers} : OfferListProps) => (
  <div className="cities__places-list places__list tabs__content">
    {offers.map((offer)=> <PlaceCard key={offer.id} offer={offer} />)}
  </div>
);

export default OfferList;
