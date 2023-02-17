import { Instalike } from '@jmetterrothan/instalike';
import { Reducer } from 'redux';

import { SuggestionAction } from './action';
import { SET_SUGGESTION_FEED } from './constant';

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
    default:
      return state;
  }
};

export default suggestionReducer;
