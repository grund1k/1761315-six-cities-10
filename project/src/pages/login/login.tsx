import { ChangeEvent, FormEvent, useState } from 'react';
import Header from '../../components/header/header';
import { loginAction } from '../../store/api-actions';
import { AuthData } from '../../types/auth-data';
import { setFormError } from '../../utils';
import { useAppDispatch } from './../../hooks/index';
import { PatternErrors } from './../../const';

const Login = (): JSX.Element => {
  const [authData, setAuthData] = useState<AuthData>({ login: '', password: '' });

  const dispatch = useAppDispatch();

  const handleLoginChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormError(evt.target, PatternErrors.EmailError);
    setAuthData({ ...authData, login: evt.target.value});
  };

  const handlePasswordChange = (evt: ChangeEvent<HTMLInputElement>)=> {
    setFormError(evt.target);
    setAuthData({ ...authData, password: evt.target.value });
  };

  const handleLoginSubmit = (evt: FormEvent<HTMLFormElement>)=> {
    evt.preventDefault();
    dispatch(loginAction(authData));
  };

  return(
    <div className="page page--gray page--login">
      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleLoginSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" pattern='^[^ ]+@[^ ]+\.[a-z]{2,6}$' onChange={handleLoginChange} required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" onChange={handlePasswordChange} required />
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
