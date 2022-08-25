import {Cities} from '../../const';
import CitiesList from './../../components/cities-list/cities-list';
import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import MainContent from './../../components/main-content/main-content';

type Props = {
  cities: Cities;
}

const Main = ({cities}: Props): JSX.Element => (
  <div className="page page--gray page--main">
    <Header>
      <Nav />
    </Header>

    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CitiesList cities={cities}/>
        </section>
      </div>

      <MainContent />
    </main>
  </div>
);

export default Main;
