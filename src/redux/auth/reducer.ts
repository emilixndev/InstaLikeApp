import { Reducer } from 'redux';

import { hasAccessToken } from '../../instalikeApi';
import { AuthAction, LOGIN, LOGOUT } from './action';

type AuthState = {
  isAuth: boolean;
};

const initalState: AuthState = {
  isAuth: hasAccessToken(),
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
    default:
      return state;
  }
};

export default authReducer;
