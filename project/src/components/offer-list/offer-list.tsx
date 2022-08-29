import {Offer, Offers} from '../../types/offer';
import PlaceCard from './../place-card/place-card';
import { PLACES_LIST_CLASSES } from '../../const';

type OfferListProps = {
  offers: Offers;
  listType: string;
  setActiveOffer?: (offer : Offer) => void;
}

const OfferList = ({offers, listType, setActiveOffer} : OfferListProps) =>(
  <div className={PLACES_LIST_CLASSES[listType]}>
    {setActiveOffer ?
      offers.map((offer)=> <PlaceCard key={offer.id} offer={offer} handelOnMouseOver={setActiveOffer} listType={listType}/>)
      :
      offers.map((offer)=> <PlaceCard key={offer.id} offer={offer} listType={listType}/>)}
  </div>
);

export default OfferList;
