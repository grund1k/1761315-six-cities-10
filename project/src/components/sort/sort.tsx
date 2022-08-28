import { useState } from 'react';
import { OfferSorting } from '../../utils';
import {sortOptionsUnion} from '../../const';

type Props = {
  sortingOption: string;
  onOptionChange: (option: sortOptionsUnion) => void;
}

const Sort = ({sortingOption, onOptionChange} : Props): JSX.Element => {
  const [optionsState, setOptionsState] = useState(false);

  return(
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setOptionsState(!optionsState)}>
        {sortingOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${optionsState ? 'places__options--opened' : ''}`}>
        {OfferSorting.options.map((option) => (
          <li key={option}
            className={`places__option ${sortingOption === option ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => {
              onOptionChange(option);
              setOptionsState(!optionsState);
            }}
          >
            {option}
          </li>
        ))}
      </ul>
    </form>
  );
};

export default Sort;
