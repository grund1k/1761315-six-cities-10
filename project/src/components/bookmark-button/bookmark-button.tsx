import { favouriteAction } from '../../store/api-actions';
import { useAppDispatch} from './../../hooks/index';
import { useNavigate } from 'react-router-dom';
import { useGetAuthStatus } from '../../store/user-process/selector';
import { useGetFavouriteData } from './../../store/favorites/selector';
import { APIRoute, AuthStatus } from '../../const';

type Props = {
  id: number,
  classPrefix: string;
}

const BookmarkButton = ({id, classPrefix}: Props) : JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authorizationStatus = useGetAuthStatus();
  const favoriteList = useGetFavouriteData();

  const isAuthorized = authorizationStatus === AuthStatus.Auth;
  const isFavorite = !!favoriteList.find((item) => item.id === id) || false;


  function handleClick() {
    if (!isAuthorized) {
      navigate(APIRoute.Login);
    }

    const status = Number(!isFavorite);

    dispatch(favouriteAction({id: id, favouriteStatus: status}));
  }

  return(
    <button className={`${isFavorite && isAuthorized ? `${classPrefix}__bookmark-button--active` : ''} button ${classPrefix}__bookmark-button`} type="button" onClick={handleClick}>
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

export default BookmarkButton;
