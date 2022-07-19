import { Link } from 'react-router-dom';

const Error404 = ():JSX.Element => (
  <div className="page page--gray page--main">
    <main className="page__main page__main--index">
      <h1>404. Page not found</h1>
      <Link to="/">Вернуться на главную</Link>
    </main>
  </div>
);

export default Error404;
