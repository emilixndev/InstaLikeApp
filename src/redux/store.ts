import { applyMiddleware, combineReducers, createStore, Middleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import instalikeApi from '../instalikeApi';
import authReducer from './auth/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  // post: x,
  // user: y,
});

const middleware: Middleware[] = [];

middleware.push(thunk.withExtraArgument(instalikeApi));

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export type RootState = ReturnType<typeof rootReducer>;

export default store;
