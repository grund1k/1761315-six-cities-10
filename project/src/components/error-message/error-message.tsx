import {useAppSelector} from '../../hooks';
import './styles.css';

function ErrorMessage(): JSX.Element | null {
  const {error} = useAppSelector((state) => state);

  return (error)
    ? <div className='error-message'>{error}</div>
    : null;

}

export default ErrorMessage;
