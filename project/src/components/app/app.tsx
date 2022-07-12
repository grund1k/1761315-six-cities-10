import Main from '../../pages/main/main';

type AppProps = {
  rentalOffersCount: number;
}

const App = ({rentalOffersCount}: AppProps): JSX.Element => (
  <Main rentalOffersCount={rentalOffersCount}/>
);

export default App;
