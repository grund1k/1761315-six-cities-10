import { ChangeEvent, FormEvent, useState } from 'react';
import { loginAction } from '../../store/api-actions';
import { AuthData } from '../../types/auth-data';
import { useAppDispatch } from './../../hooks/index';

const Login = (): JSX.Element => {
  const [authData, setAuthData] = useState<AuthData>({ login: '', password: '' });

  const dispatch = useAppDispatch();

  const handleLoginChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    setAuthData({ ...authData, login: evt.target.value });
  };

  const handlePasswordChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    setAuthData({ ...authData, password: evt.target.value });
  };

  const handleLoginSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    if (authData.login.match(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim) && authData.password !== '') {
      dispatch(loginAction(authData));
    }
  };

  return(
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleLoginSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" value={authData.login} onChange={handleLoginChange} required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" value={authData.password} onChange={handlePasswordChange} required />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Login;
