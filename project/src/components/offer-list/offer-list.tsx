import {useState} from 'react';
import {Offer, Offers} from '../../types/offer';
import PlaceCard from './../place-card/place-card';

type OfferListProps = {
  offers: Offers;
}

const OfferList = ({offers} : OfferListProps) => {
  const [, setActiveOffer] = useState<null | Offer>(null);

  const onMouseOver = (offer : Offer) => setActiveOffer(offer);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer)=> <PlaceCard key={offer.id} offer={offer} onMouseOver={onMouseOver}/>)}
    </div>
  );
};

export default OfferList;
