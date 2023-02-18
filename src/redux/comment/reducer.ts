import { Instalike } from '@jmetterrothan/instalike';
import { Reducer } from 'redux';

import Status from '../../enums/status';
import { CommentAction } from './action';
import {
  DELETE_ONE_COMMENT,
  LOAD_MORE_COMMENT,
  POST_NEW_COMMENT,
  SET_COMMENTS,
  SET_COMMENTS_CURSOR,
  SET_MORE_PAGE_COMMENT,
} from './constant';

type CommentState = {
  data: Instalike.Comment[];
  statut: Status;
  nextCursor: any;
  hasMorePage: boolean;
};

const initialState: CommentState = {
  data: [],
  statut: Status.UNLOADED,
  nextCursor: null,
  hasMorePage: true,
};

const commentReducer: Reducer<CommentState, CommentAction> = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENTS:
      return { ...state, data: action.payload };
    case SET_COMMENTS_CURSOR:
      return { ...state, nextCursor: action.payload };
    case SET_MORE_PAGE_COMMENT:
      return { ...state, hasMorePage: action.payload };
    case POST_NEW_COMMENT:
      return { ...state, data: state.data.concat(action.payload) };
    case DELETE_ONE_COMMENT:
      return {
        ...state,
        data: state.data.filter((item) => item !== action.payload),
      };

    case LOAD_MORE_COMMENT:
      return { ...state, data: state.data.concat(action.payload) };

    default:
      return state;
  }
};

export default commentReducer;
