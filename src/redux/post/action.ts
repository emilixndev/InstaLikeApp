import { Instalike } from '@jmetterrothan/instalike';

import { AppAction } from '../types';
import {
  ADD_LIKE_POST,
  ADD_ONE_COUNTER_COMMENT,
  DELETE_LIKE_POST,
  FOLLOW_USER_POST,
  REMOVE_ONE_COUNTER_COMMENT,
  REQUEST_POST_FAILURE,
  REQUEST_POST_START,
  REQUEST_POST_SUCCESS,
  SET_POST,
  UNFOLLOW_USER_POST,
} from './constant';

export type setPostAction = AppAction<typeof SET_POST, Instalike.Post>;

export type LoadPostStartAction = AppAction<typeof REQUEST_POST_START>;
export type LoadPostEndSucessAction = AppAction<typeof REQUEST_POST_SUCCESS>;
export type LoadPostEndFailureAction = AppAction<typeof REQUEST_POST_FAILURE>;

export type deleteLikePostAction = AppAction<typeof DELETE_LIKE_POST>;
export type addLikePostAction = AppAction<typeof ADD_LIKE_POST>;
export type removeOneCommentCounterPostAction = AppAction<typeof REMOVE_ONE_COUNTER_COMMENT>;
export type addOneCounterCommentAction = AppAction<typeof ADD_ONE_COUNTER_COMMENT>;
export type unfollowUserPostAction = AppAction<typeof UNFOLLOW_USER_POST>;

export type followUserPostAction = AppAction<typeof FOLLOW_USER_POST>;

export type PostAction =
  | setPostAction
  | LoadPostStartAction
  | LoadPostEndSucessAction
  | LoadPostEndFailureAction
  | addLikePostAction
  | deleteLikePostAction
  | addOneCounterCommentAction
  | removeOneCommentCounterPostAction
  | followUserPostAction
  | unfollowUserPostAction;

export const setPost = (data: Instalike.Post): setPostAction => ({
  type: SET_POST,
  payload: data,
});

export const loadPostAction = (): LoadPostStartAction => ({
  type: REQUEST_POST_START,
  payload: undefined,
});

export const sucessPostAction = (): LoadPostEndSucessAction => ({
  type: REQUEST_POST_SUCCESS,
  payload: undefined,
});

export const failurePostAction = (): LoadPostEndFailureAction => ({
  type: REQUEST_POST_FAILURE,
  payload: undefined,
});

export const addLikeToPostAction = (): addLikePostAction => ({
  type: ADD_LIKE_POST,
  payload: undefined,
});

export const deleteLikeToPostAction = (): deleteLikePostAction => ({
  type: DELETE_LIKE_POST,
  payload: undefined,
});

export const removeOneCommentCounterPostAction = (): removeOneCommentCounterPostAction => ({
  type: REMOVE_ONE_COUNTER_COMMENT,
  payload: undefined,
});

export const addOneCounterCommentAction = (): addOneCounterCommentAction => ({
  type: ADD_ONE_COUNTER_COMMENT,
  payload: undefined,
});

export const unfollowUserPostAction = (): unfollowUserPostAction => ({
  type: UNFOLLOW_USER_POST,
  payload: undefined,
});

export const followUserPostAction = (): followUserPostAction => ({
  type: FOLLOW_USER_POST,
  payload: undefined,
});
