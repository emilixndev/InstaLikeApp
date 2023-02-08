import { Instalike } from '@jmetterrothan/instalike';
import { Reducer } from 'redux';

import { FeedAction, SET_FEED } from './action';

type FeedState = {
  items: Instalike.Post[];
};

const initalState: FeedState = {
  items: [],
};

const feedReducer: Reducer<FeedState, FeedAction> = (state = initalState, action) => {
  switch (action.type) {
    case SET_FEED:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default feedReducer;
