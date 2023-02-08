import { Instalike } from '@jmetterrothan/instalike';
import { Reducer } from 'redux';

import Status from '../../enums/status';
import { FeedAction } from './action';
import { REQUEST_FEED_FAILURE, REQUEST_FEED_START, REQUEST_FEED_SUCCESS, SET_FEED } from './constant';

type FeedState = {
  items: Instalike.Post[];
  status: Status;
};

const initalState: FeedState = {
  items: [],
  status: Status.UNLOADED,
};

const feedReducer: Reducer<FeedState, FeedAction> = (state = initalState, action) => {
  switch (action.type) {
    case SET_FEED:
      return {
        ...state,
        items: action.payload,
      };
    case REQUEST_FEED_START:
      return {
        ...state,
        status: Status.LOADING,
      };

    case REQUEST_FEED_SUCCESS:
      return {
        ...state,
        status: Status.LOADED,
      };

    case REQUEST_FEED_FAILURE:
      return {
        ...state,
        status: Status.FAILED,
      };
    default:
      return state;
  }
};

export default feedReducer;
