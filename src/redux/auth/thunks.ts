import { ACCESS_TOKEN_KEY } from '../../instalikeApi';
import { AppThunkAction } from '../types';
import { login, loginFail, logout } from './action';

export const loginAsync = (email: string, password: string): AppThunkAction<Promise<void>> => {
  return async (dispatch, getState, api) => {
    try {
      const { data } = await api.auth.login({ email, password });
      window.localStorage.setItem(ACCESS_TOKEN_KEY, data.accessToken);
      dispatch(login());
    } catch (e) {
      if (window.localStorage.getItem('i18nextLng') === 'en') {
        dispatch(loginFail('There is a problem with the connexion'));
        return;
      }
      if (window.localStorage.getItem('i18nextLng') === 'fr') {
        dispatch(loginFail('Vous avez pas pu vous connecter'));
        return;
      }
      if (!window.localStorage.getItem('i18nextLng')) {
        dispatch(loginFail('There is a problem with the connexion'));

        return;
      }
    }
  };
};

export const logoutAsync = (): AppThunkAction<Promise<void>> => {
  return async (dispatch, getState, api) => {
    await api.auth.logout();

    window.localStorage.removeItem(ACCESS_TOKEN_KEY);

    dispatch(logout());
  };
};
