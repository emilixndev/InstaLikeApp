import { Instalike } from '@jmetterrothan/instalike';
import { data } from 'autoprefixer';
import { comment } from 'postcss';
import { Reducer } from 'redux';

import Status from '../../enums/status';
import { PostAction } from './action';
import {
  DELETE_COMMENT,
  POST_COMMENT,
  REQUEST_POST_FAILURE,
  REQUEST_POST_START,
  REQUEST_POST_SUCCESS,
  SET_POST,
} from './constant';

type PostState = {
  data?: Instalike.Post;
  loaded: Status;
};

const intialState: PostState = {
  data: undefined,
  loaded: Status.UNLOADED,
};

const postReducer: Reducer<PostState, PostAction> = (state = intialState, action) => {
  switch (action.type) {
    case SET_POST:
      return { ...state, data: action.payload };
    case REQUEST_POST_SUCCESS:
      return { ...state, loaded: Status.LOADED };
    case REQUEST_POST_START:
      return { ...state, loaded: Status.LOADING };
    case REQUEST_POST_FAILURE:
      return { ...state, loaded: Status.FAILED };
    case DELETE_COMMENT:
      return state;

    case POST_COMMENT:
      if (state.data) {
        return {
          ...state,
          previewComments: state.data.previewComments.push(action.payload),
        };
      }
      return state;
    default:
      return state;
  }
};

export default postReducer;
