import { AppAction } from '../types';

export const LOGIN = 'AUTH/LOGIN';
export const LOGOUT = 'AUTH/LOGOUT';

export const LOGIN_FAIL = 'AUTH/LOGIN_FAIL';

export type LoginAction = AppAction<typeof LOGIN>;
export type LogoutAction = AppAction<typeof LOGOUT>;
export type LoginFailAction = AppAction<typeof LOGIN_FAIL>;

export type AuthAction = LoginAction | LogoutAction | LoginFailAction;

export const login = (): LoginAction => ({
  type: LOGIN,
  payload: null,
});

export const logout = (): LogoutAction => ({
  type: LOGOUT,
  payload: null,
});

export const loginFail = (error: string): LoginFailAction => ({
  type: LOGIN_FAIL,
  payload: { error },
});
