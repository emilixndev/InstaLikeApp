import { Instalike } from '@jmetterrothan/instalike';
import { Reducer } from 'redux';

import { SuggestionAction } from './action';
import { FOLLOW_USER_SUGGESTION, SET_SUGGESTION_FEED, UNFOLLOW_USER_SUGGESTION } from './constant';

type SuggestionState = {
  data: Instalike.User[];
};

const initalState: SuggestionState = {
  data: [],
};

const suggestionReducer: Reducer<SuggestionState, SuggestionAction> = (state = initalState, action) => {
  switch (action.type) {
    case SET_SUGGESTION_FEED:
      return { ...state, data: action.payload };
    case FOLLOW_USER_SUGGESTION:
      return { ...state, data: { ...state.data, isFollowedByViewer: true } };
    case UNFOLLOW_USER_SUGGESTION:
      return { ...state, data: { ...state.data, isFollowedByViewer: false } };
    default:
      return state;
  }
};

export default suggestionReducer;
