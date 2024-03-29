import { ChangeEvent, FormEvent, useState } from 'react';
import { APIRoute } from '../../const';
import { BACKEND_URL } from '../../services/api';
import { postReviewAction } from '../../store/api-actions';
import { useAppDispatch } from './../../hooks/index';
import { setFormError } from '../../utils';
import { useGetPendingStatus } from '../../store/property-data/selector';

type Props = {
  id: number;
};

const initialCommentState = {
  rating: 0,
  comment: '',
};

const ReviewForm = ({id}: Props): JSX.Element => {

  const dispatch = useAppDispatch();
  const [comment, setComment] = useState(initialCommentState);
  const isFormPending = useGetPendingStatus();

  const handelReviewForm = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormError(evt.target);
    setComment({...comment, [name]: value});
  };

  const handelReviewSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(postReviewAction({id, comment}));
    setComment(initialCommentState);
  };

  const isCommentValid = comment.comment.length >= 50 && comment.comment.length < 300;
  const isSubmitAvailable = ( comment.rating > 0 && isCommentValid) || isFormPending;

  return(
    <form className="reviews__form form" action={`${BACKEND_URL}${APIRoute.Comments}/${id}`} method="post" onSubmit={handelReviewSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" required onChange={handelReviewForm}/>
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" onChange={handelReviewForm}/>
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" onChange={handelReviewForm}/>
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" onChange={handelReviewForm}/>
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" onChange={handelReviewForm}/>
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="comment" placeholder="Tell how was your stay, what you like and what can be improved" minLength={50} onChange={handelReviewForm}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isSubmitAvailable}>Submit</button>
      </div>
    </form>
  );
};

export default ReviewForm;
