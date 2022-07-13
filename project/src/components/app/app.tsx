import Main, {MainProps as AppProps } from '../../pages/main/main';

const App = ({rentalOffersCount}: AppProps): JSX.Element => (
  <Main rentalOffersCount={rentalOffersCount}/>
);

export default App;
