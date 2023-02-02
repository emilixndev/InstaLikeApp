import { ACCESS_TOKEN_KEY } from '../../instalikeApi';
import { AppThunkAction } from '../types';
import { login, logout } from './action';

export const loginAsync = (email: string, password: string): AppThunkAction<Promise<void>> => {
  return async (dispatch, getState, api) => {
    const { data } = await api.auth.login({ email, password });
    window.localStorage.setItem(ACCESS_TOKEN_KEY, data.accessToken);
    dispatch(login());
  };
};

export const logoutAsync = (): AppThunkAction<Promise<void>> => {
  return async (dispatch, getState, api) => {
    await api.auth.logout();

    window.localStorage.removeItem(ACCESS_TOKEN_KEY);

    dispatch(logout());
  };
};
