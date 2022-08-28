import ReviewItem from '../review/review';
import { Reviews } from '../../types/review/reviews';

type Props = {
  reviews: Reviews;
}

const ReviewList = ({reviews}: Props): JSX.Element => {
  const sortedRewies = reviews.slice(0, 10).sort((a , b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });

  return(
    <ul className="reviews__list">
      {sortedRewies.map((review) => <ReviewItem key={review.id} review={review}/>)}
    </ul>
  );
};

export default ReviewList;
