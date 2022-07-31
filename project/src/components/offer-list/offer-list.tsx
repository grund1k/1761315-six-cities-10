import {useState} from 'react';
import {Offer, Offers} from '../../types/offer';
import PlaceCard from './../place-card/place-card';
import { PLACES_LIST_CLASSES } from '../../const';

type OfferListProps = {
  offers: Offers;
  listType: string;
}

const OfferList = ({offers, listType} : OfferListProps) => {
  const [, setActiveOffer] = useState<null | Offer>(null);

  const onMouseOver = (offer : Offer) => setActiveOffer(offer);

  return (
    <div className={PLACES_LIST_CLASSES[listType]}>
      {offers.map((offer)=> <PlaceCard key={offer.id} offer={offer} onMouseOver={onMouseOver} listType={listType}/>)}
    </div>
  );
};

export default OfferList;
