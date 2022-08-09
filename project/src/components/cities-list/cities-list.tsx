
import { useAppDispatch, useAppSelector } from './../../hooks/index';
import { changeCity } from './../../store/action';
import {Cities} from '../../const';

type Props = {
  cities: Cities;
}

const CitiesList = ({cities}: Props): JSX.Element => {
  const selectedCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();

  const handleSelectCity = (name: string) => {
    dispatch(changeCity(name));
  };

  return(
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li key={city} className="locations__item" onClick={() => handleSelectCity(city)}>
          <a className={`locations__item-link tabs__item ${selectedCity === city ? 'tabs__item--active' : ''}`} href="#">
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );

};

export default CitiesList;
