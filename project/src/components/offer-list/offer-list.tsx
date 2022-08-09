import {Offer, Offers} from '../../types/offer';
import PlaceCard from './../place-card/place-card';
import { PLACES_LIST_CLASSES } from '../../const';

type OfferListProps = {
  offers: Offers;
  listType: string;
  setActiveOffer: (offer : Offer) => void;
}

const OfferList = ({offers, listType, setActiveOffer} : OfferListProps) => {

  const onMouseOver = (offer : Offer) => setActiveOffer(offer);

  return (
    <div className={PLACES_LIST_CLASSES[listType]}>
      {offers.map((offer)=> <PlaceCard key={offer.id} offer={offer} onMouseOver={onMouseOver} listType={listType}/>)}
    </div>
  );
};

export default OfferList;
