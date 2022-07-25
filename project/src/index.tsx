import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offers} from './mocks/offers';

const tempData = {
  rentalOffersCount: 312,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App rentalOffersCount={tempData.rentalOffersCount} offers={offers}/>
  </React.StrictMode>,
);
