import ReviewItem from '../review/review';
import { Reviews } from '../../types/reviews';

type Props = {
  reviews: Reviews;
}

const ReviewList = ({reviews}: Props): JSX.Element => (
  <ul className="reviews__list">
    {reviews.map((review) => <ReviewItem key={review.id} review={review}/>)}
  </ul>
);

export default ReviewList;
