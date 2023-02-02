import { Reducer } from 'redux';

import { hasAccessToken } from '../../instalikeApi';
import { AuthAction, LOGIN, LOGIN_FAIL, LOGOUT } from './action';

type AuthState = {
  isAuth: boolean;
  errorMessage: any;
};

const initalState: AuthState = {
  isAuth: hasAccessToken(),
  errorMessage: '',
};

const authReducer: Reducer<AuthState, AuthAction> = (state = initalState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuth: true,
      };
    case LOGOUT:
      return {
        ...state,
        isAuth: false,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isAuth: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
