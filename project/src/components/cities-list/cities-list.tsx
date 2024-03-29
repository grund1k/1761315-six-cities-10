
import { useAppDispatch} from './../../hooks/index';
import {Cities} from '../../const';
import { useGetCity } from '../../store/city/selector';
import { changeCity } from '../../store/city/city-process';

type Props = {
  cities: Cities;
}

const CitiesList = ({cities}: Props): JSX.Element => {
  const selectedCity = useGetCity();
  const dispatch = useAppDispatch();

  const handleSelectCity = (name: string) => {
    dispatch(changeCity(name));
  };

  return(
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li key={city} className="locations__item" onClick={() => handleSelectCity(city)}>
          <a className={`locations__item-link tabs__item ${selectedCity === city ? 'tabs__item--active' : ''}`} href={`#${city}`}>
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );

};

export default CitiesList;
