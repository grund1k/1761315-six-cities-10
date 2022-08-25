import { Offer } from '../../types/offer';

type Props = {
  offer: Offer;
}

const PremiumMark = ({offer}: Props): JSX.Element | undefined => {
  if (offer.isPremium) {
    return(
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    );
  }
};

export default PremiumMark;
